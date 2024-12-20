import type { Config } from 'tailwindcss'
import sharedConfig from '@repo/shared/tailwind-config'

export default {
  ...sharedConfig,
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
} satisfies Config
