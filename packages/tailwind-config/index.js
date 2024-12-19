/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Note: Changes here must be reflected in all apps and packages that use this config
    '*.{js,ts,jsx,tsx}',
    '.*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
      },
    },
  },
  plugins: [],
}
