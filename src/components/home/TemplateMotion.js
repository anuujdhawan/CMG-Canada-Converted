"use client";

import { useEffect } from "react";

function animateCount(element, reduced) {
  if (element.dataset.counted === "true") return;

  element.dataset.counted = "true";
  const target = Number(element.dataset.count || 0);
  const textNode = [...element.childNodes].find((node) => node.nodeType === Node.TEXT_NODE);
  if (!textNode || !Number.isFinite(target)) return;

  const update = (value) => {
    textNode.nodeValue = String(Math.round(value));
  };

  if (reduced) {
    update(target);
    return;
  }

  const startedAt = performance.now();
  const duration = 1100;
  const tick = (now) => {
    const progress = Math.min((now - startedAt) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    update(target * eased);
    if (progress < 1) window.requestAnimationFrame(tick);
  };

  window.requestAnimationFrame(tick);
}

/**
 * Scroll-reveal + count-up + hero parallax for every `.cmg-template-home` page.
 *
 * This effect used to collect its targets exactly once, on mount. That works on
 * a first load, but not after a client-side navigation: React swaps in a fresh
 * tree while this component instance survives, so the effect never re-runs and
 * every `.reveal` element in the new tree stays at `opacity: 0` — the page
 * looked empty until a hard refresh. It was most visible on the blog, where
 * changing category replaces the whole card grid, but it affected any page
 * whose content changes without a remount.
 *
 * The scan is now re-run whenever the DOM changes. The observers are created
 * once and kept alive; re-`observe()`ing a target is a no-op, so re-scanning is
 * cheap and idempotent.
 */
export default function TemplateMotion() {
  useEffect(() => {
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const heroBindings = [];
    let frame = 0;

    const query = (selector) => [...document.querySelectorAll(`.cmg-template-home ${selector}`)];
    const revealTargets = () => query(".reveal:not(.in)");
    const countTargets = () => query("[data-count]:not([data-counted])");

    // No IntersectionObserver (or motion is unwelcome): reveal everything and
    // count up immediately, but still re-scan so later navigations are covered.
    const instant = reduced || !window.IntersectionObserver;

    const revealObserver = instant
      ? null
      : new IntersectionObserver(
        (entries) => entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in");
          revealObserver.unobserve(entry.target);
        }),
        { threshold: 0.12, rootMargin: "0px 0px -45px" }
      );

    const countObserver = instant
      ? null
      : new IntersectionObserver(
        (entries) => entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          animateCount(entry.target, false);
          countObserver.unobserve(entry.target);
        }),
        { threshold: 0.7 }
      );

    /**
     * The hero element is replaced on navigation too, so the pointer listeners
     * have to be re-attached — and only once per root, or every scan would pile
     * another pair on top of the existing ones.
     */
    const bindHeroes = () => {
      document.querySelectorAll(".cmg-template-home").forEach((root) => {
        if (root.dataset.heroBound === "true") return;
        const hero = root.querySelector(".hero");
        if (!hero) return;

        root.dataset.heroBound = "true";
        const onMove = (event) => {
          const bounds = hero.getBoundingClientRect();
          const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 16;
          const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 16;
          root.style.setProperty("--px", `${x}px`);
          root.style.setProperty("--py", `${y}px`);
        };
        const onLeave = () => {
          root.style.setProperty("--px", "0px");
          root.style.setProperty("--py", "0px");
        };

        hero.addEventListener("pointermove", onMove, { passive: true });
        hero.addEventListener("pointerleave", onLeave, { passive: true });
        heroBindings.push(() => {
          hero.removeEventListener("pointermove", onMove);
          hero.removeEventListener("pointerleave", onLeave);
        });
      });
    };

    const scan = () => {
      frame = 0;
      const reveals = revealTargets();
      const counts = countTargets();
      if (revealObserver) reveals.forEach((element) => revealObserver.observe(element));
      else reveals.forEach((element) => element.classList.add("in"));
      if (countObserver) counts.forEach((element) => countObserver.observe(element));
      else counts.forEach((element) => animateCount(element, true));
      bindHeroes();
    };

    // Coalesce bursts of mutations into one scan per frame.
    const scheduleScan = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(scan);
    };

    scan();

    const mutations = new MutationObserver(scheduleScan);
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutations.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
      revealObserver?.disconnect();
      countObserver?.disconnect();
      heroBindings.forEach((unbind) => unbind());
    };
  }, []);

  return null;
}
