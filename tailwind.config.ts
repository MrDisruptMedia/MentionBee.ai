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
        },
      },
    },
  },
} satisfies Config;
