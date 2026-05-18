import type { Config } from "tailwindcss";

/**
 * MentionBee design palette (Tailwind utilities: bg-primary, text-primary-dark,
 * text-mention-dark, bg-mention-light, etc.)
 */
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F5A623",
          dark: "#D4891A",
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
