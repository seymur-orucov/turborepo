import tseslint from 'typescript-eslint'
import { config } from '@repo/eslint-config/base'

export default tseslint.config(...config)
