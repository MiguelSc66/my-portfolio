/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  theme: {
    extend: {
      toastStyle: {
        base: 'border-radius-10 bg-white text-green-600',
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      animation: ["hover", "focus", "group-hover"],
    },
  },
}

