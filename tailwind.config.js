/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0B132B',
          800: '#0F172A',
          700: '#1E293B',
          600: '#334155',
        },
        primary: {
          DEFAULT: '#0284C7', // Vivid plumbing sky/blue
          dark: '#0369A1',
          light: '#38BDF8',
          hover: '#075985',
        },
        accent: {
          DEFAULT: '#F97316', // Emergency orange/amber
          dark: '#EA580C',
          light: '#FDBA74',
          yellow: '#F59E0B',
        },
      },
    },
  },
  plugins: [],
}
