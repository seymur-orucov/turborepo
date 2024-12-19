import tseslint from 'typescript-eslint'
import { config } from '@repo/eslint-config'

export default tseslint.config(...config)
