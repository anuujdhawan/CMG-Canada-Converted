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
 * Scroll-reveal + count-up for every `.cmg-template-home` page.
 *
 * Observe the initial page once, then only inspect newly inserted DOM nodes.
 * This keeps client-side content changes (such as blog category filters)
 * animated without querying the full page tree after every React update.
 */
export default function TemplateMotion() {
  useEffect(() => {
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    const root = document.querySelector(".cmg-template-home");
    if (!root) return undefined;

    // No IntersectionObserver (or motion is unwelcome): reveal everything and
    // count up immediately, including content inserted later.
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

    const scan = (nodes) => {
      const reveals = new Set();
      const counts = new Set();

      for (const node of nodes) {
        if (node.nodeType !== Node.ELEMENT_NODE) continue;
        if (node.matches(".reveal:not(.in)")) reveals.add(node);
        if (node.matches("[data-count]:not([data-counted])")) counts.add(node);
        node.querySelectorAll(".reveal:not(.in)").forEach((element) => reveals.add(element));
        node.querySelectorAll("[data-count]:not([data-counted])").forEach((element) => counts.add(element));
      }

      if (revealObserver) reveals.forEach((element) => revealObserver.observe(element));
      else reveals.forEach((element) => element.classList.add("in"));
      if (countObserver) counts.forEach((element) => countObserver.observe(element));
      else counts.forEach((element) => animateCount(element, true));
    };

    scan([root]);

    // Coalesce bursts of mutations into one scan of only the inserted nodes.
    const pendingNodes = new Set();
    const scheduleScan = (records) => {
      records.forEach((record) => record.addedNodes.forEach((node) => pendingNodes.add(node)));
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const nodes = [...pendingNodes];
        pendingNodes.clear();
        frame = 0;
        scan(nodes);
      });
    };

    const mutations = new MutationObserver(scheduleScan);
    mutations.observe(root, { childList: true, subtree: true });

    return () => {
      mutations.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
      revealObserver?.disconnect();
      countObserver?.disconnect();
    };
  }, []);

  return null;
}
