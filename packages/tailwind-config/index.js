/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Note: Changes here must be reflected in all apps and packages that use this config
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
    '../../apps/**/*.{js,ts,jsx,tsx}',
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
