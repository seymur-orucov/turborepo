import sharedConfig from '@repo/shared/postcss.config'

export default {
  ...sharedConfig,
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
