/**
 * Central theme configuration.
 *
 * These palette values are public design tokens, so they are hardcoded here
 * rather than loaded from environment variables.
 */

// Typography note: Manrope is the single site-wide font. It is hardcoded once
// on <body> in src/app/layout.js / src/styles/globals.css — do not add
// per-component font-family rules; everything inherits from <body>.

const colors = {
  primary: "#D80621",
  primaryDark: "#B3122A",
  primaryLight: "#EF5A6A",
  secondary: "#C8102E",
  accent: "#D80621",
  accentDark: "#B3122A",
  accentSoft: "#FFF1F2",
  navy: "#B21A2E",
  navyDark: "#A51A2A",
  surface: "#FFFDFC",
  surfaceAlt: "#FFF8F8",
  text: "#381116",
  muted: "#6F4A50",
  border: "#EBC5CA",
  gold: "#B55B53",
  success: "#2E8B57",
  error: "#B3122A",
  logoBg: "#ffffff",
  heroPadTop: "7rem",
};

const templateColors = {
  dark: {
    primary: "#f31f3f",
    secondary: "#070d16",
    accent: "#c01847",
    bg: "#070d16",
    surface: "#111925",
    surfaceAlt: "#0b121d",
    ink: "#f7f8fb",
    muted: "#aeb8c5",
    border: "rgba(255,255,255,.13)",
    onPrimary: "#ffffff",
    success: "#2e9d65",
  },
  light: {
    primary: "#f31f3f",
    secondary: "#ffffff",
    accent: "#c01847",
    bg: "#f6f7f9",
    surface: "#ffffff",
    surfaceAlt: "#eef0f3",
    ink: "#10151d",
    muted: "#5d6875",
    border: "rgba(7,13,22,.14)",
    onPrimary: "#ffffff",
    success: "#237a4b",
  },
};

const templateButtons = {
  nav: {
    background: "#ff2746",
    text: "#ffffff",
    hoverBackground: "#ffffff",
    hoverText: "#a20b28",
  },
  hero: {
    dark: {
      background: "#050912",
      text: "#ffffff",
      hoverBackground: "#c91235",
      hoverText: "#ffffff",
    },
    light: {
      background: "#c91235",
      text: "#ffffff",
      hoverBackground: "#050912",
      hoverText: "#ffffff",
    },
  },
};

/** CSS custom-property overrides injected on <html> (see layout.js). */
export const themeCssVars = {
  "--brand-primary": colors.primary,
  "--brand-primary-dark": colors.primaryDark,
  "--brand-primary-light": colors.primaryLight,
  "--brand-secondary": colors.secondary,
  "--brand-accent": colors.accent,
  "--brand-accent-dark": colors.accentDark,
  "--brand-accent-soft": colors.accentSoft,
  "--brand-navy": colors.navy,
  "--brand-navy-dark": colors.navyDark,
  "--brand-surface": colors.surface,
  "--brand-surface-alt": colors.surfaceAlt,
  "--brand-text": colors.text,
  "--brand-muted": colors.muted,
  "--brand-border": colors.border,
  "--brand-gold": colors.gold,
  "--brand-success": colors.success,
  "--brand-error": colors.error,
  "--brand-logo-bg": colors.logoBg,
  "--brand-hero-pad-top": colors.heroPadTop,
};

/** Reference-template palette variables. Components select the active set by
 * switching the root data-theme attribute. */
export const templateThemeCssVars = {
  "--cmg-dark-primary": templateColors.dark.primary,
  "--cmg-dark-secondary": templateColors.dark.secondary,
  "--cmg-dark-accent": templateColors.dark.accent,
  "--cmg-dark-bg": templateColors.dark.bg,
  "--cmg-dark-surface": templateColors.dark.surface,
  "--cmg-dark-surface-alt": templateColors.dark.surfaceAlt,
  "--cmg-dark-ink": templateColors.dark.ink,
  "--cmg-dark-muted": templateColors.dark.muted,
  "--cmg-dark-border": templateColors.dark.border,
  "--cmg-dark-on-primary": templateColors.dark.onPrimary,
  "--cmg-dark-success": templateColors.dark.success,
  "--cmg-light-primary": templateColors.light.primary,
  "--cmg-light-secondary": templateColors.light.secondary,
  "--cmg-light-accent": templateColors.light.accent,
  "--cmg-light-bg": templateColors.light.bg,
  "--cmg-light-surface": templateColors.light.surface,
  "--cmg-light-surface-alt": templateColors.light.surfaceAlt,
  "--cmg-light-ink": templateColors.light.ink,
  "--cmg-light-muted": templateColors.light.muted,
  "--cmg-light-border": templateColors.light.border,
  "--cmg-light-on-primary": templateColors.light.onPrimary,
  "--cmg-light-success": templateColors.light.success,
  "--cmg-template-primary-bright": "#ff3b5a",
  "--cmg-template-primary-highlight": "#ff6b7f",
  "--cmg-template-primary-pale": "#ffd2d8",
  "--cmg-template-deep-surface": "#04080f",
  "--cmg-template-modal-end": "#ff5269",
  "--cmg-template-nav-surface": "#05070b",
  "--cmg-template-nav-ink": "#f7f8fb",
  "--cmg-template-utility-surface": "#050912",
  "--cmg-template-utility-ink": "#f7f8fb",
  "--cmg-template-star": "#f2b94b",
  "--cmg-template-nav-cta": templateButtons.nav.background,
  "--cmg-template-nav-cta-text": templateButtons.nav.text,
  "--cmg-template-nav-cta-hover": templateButtons.nav.hoverBackground,
  "--cmg-template-nav-cta-hover-text": templateButtons.nav.hoverText,
  "--cmg-template-hero-cta-dark": templateButtons.hero.dark.background,
  "--cmg-template-hero-cta-dark-text": templateButtons.hero.dark.text,
  "--cmg-template-hero-cta-dark-hover": templateButtons.hero.dark.hoverBackground,
  "--cmg-template-hero-cta-dark-hover-text": templateButtons.hero.dark.hoverText,
  "--cmg-template-hero-cta-light": templateButtons.hero.light.background,
  "--cmg-template-hero-cta-light-text": templateButtons.hero.light.text,
  "--cmg-template-hero-cta-light-hover": templateButtons.hero.light.hoverBackground,
  "--cmg-template-hero-cta-light-hover-text": templateButtons.hero.light.hoverText,
};

export const theme = {
  colors,
  template: templateColors,
  buttons: templateButtons,
  radius: {
    sm: "0.375rem",
    md: "0.625rem",
    lg: "0.75rem",
    xl: "1rem",
    "2xl": "1.25rem",
    full: "9999px",
  },
  // Shadows stay very soft so the red palette does not glow around every card.
  shadows: {
    card: "0 1px 3px color-mix(in srgb, var(--brand-navy) 3%, transparent), 0 8px 24px color-mix(in srgb, var(--brand-navy) 5%, transparent)",
    cardHover: "0 6px 18px color-mix(in srgb, var(--brand-navy) 6%, transparent), 0 16px 34px color-mix(in srgb, var(--brand-navy) 6%, transparent)",
    dropdown: "0 16px 42px color-mix(in srgb, var(--brand-navy) 10%, transparent), 0 4px 12px color-mix(in srgb, var(--brand-navy) 4%, transparent)",
    banner: "0 8px 24px color-mix(in srgb, var(--brand-navy) 8%, transparent), 0 2px 8px color-mix(in srgb, var(--brand-navy) 4%, transparent)",
  },
};

export default theme;
