/** @type {import('tailwindcss').Config} */
import sharedConfig from '@repo/tailwind-config'

export default {
  // Spread the shared config
  ...sharedConfig,
  // Override content to only include current app's content
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
}
