import colors from "tailwindcss/colors";
import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
    mode: "jit",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                trueGray: colors.neutral,
            },
        },
        fontFamily: {
            sans: ["Inter", ...defaultTheme.fontFamily.sans],
            stock: defaultTheme.fontFamily.sans,
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
export default config;

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     darkMode: ["class"],
//     content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
//     theme: {
//         extend: {
//             colors: {
//                 border: "hsl(var(--border))",
//                 trueGray: colors.neutral,
//                 input: "hsl(var(--input))",
//                 ring: "hsl(var(--ring))",
//                 background: "hsl(var(--background))",
//                 foreground: "hsl(var(--foreground))",
//                 primary: {
//                     DEFAULT: "hsl(var(--primary))",
//                     foreground: "hsl(var(--primary-foreground))",
//                 },
//                 secondary: {
//                     DEFAULT: "hsl(var(--secondary))",
//                     foreground: "hsl(var(--secondary-foreground))",
//                 },
//                 destructive: {
//                     DEFAULT: "hsl(var(--destructive))",
//                     foreground: "hsl(var(--destructive-foreground))",
//                 },
//                 muted: {
//                     DEFAULT: "hsl(var(--muted))",
//                     foreground: "hsl(var(--muted-foreground))",
//                 },
//                 accent: {
//                     DEFAULT: "hsl(var(--accent))",
//                     foreground: "hsl(var(--accent-foreground))",
//                 },
//                 popover: {
//                     DEFAULT: "hsl(var(--popover))",
//                     foreground: "hsl(var(--popover-foreground))",
//                 },
//                 card: {
//                     DEFAULT: "hsl(var(--card))",
//                     foreground: "hsl(var(--card-foreground))",
//                 },
//             },
//             borderRadius: {
//                 lg: `var(--radius)`,
//                 md: `calc(var(--radius) - 2px)`,
//                 sm: "calc(var(--radius) - 4px)",
//             },
//             fontFamily: {
//                 sans: ["Inter", ...defaultTheme.fontFamily.sans],
//                 stock: [defaultTheme.fontFamily.sans],
//             },
//         },
//     },
//     plugins: [require("tailwindcss-animate")],
// }
