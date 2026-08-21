import type { Config } from "tailwindcss";

/**
 * MentionBee design palette (primary #FFC400, `primary-dark` for hovers, mention-* neutrals).
 */
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FFC400",
          dark: "#E0AC00",
        },
        mention: {
          dark: "#1A1A2E",
          gray: "#6B7280",
          light: "#F9FAFB",
          white: "#FFFFFF",
          /** Accessible yellow for text on light backgrounds (WCAG AA vs white). Not for CTA fills. */
          "yellow-text": "#8F6D00",
          "yellow-text-hover": "#6B5200",
        },
      },
    },
  },
} satisfies Config;
