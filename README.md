# Turborepo Project

This is a monorepo built with [Turborepo](https://turbo.build/) and [pnpm](https://pnpm.io/) workspace.

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18
- pnpm 9.0.0

### Installation

```bash
# Install pnpm if you haven't already
npm install -g pnpm@9.0.0

# Install dependencies
pnpm install
```

### Development

```bash
# Start all applications in development mode
pnpm dev

# Build all applications and packages
pnpm build

# Lint all applications and packages
pnpm lint

# Format code
pnpm format
```

## 📦 Project Structure

### Apps

- `account/` - Account management application with Storybook integration
- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app

### Packages

- `shared/` - Shared components and utilities
- `@repo/shared`: a stub React component library shared by both `web` and `docs` applications
- `eslint-config/` - Shared ESLint configurations
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `typescript-config/` - Shared TypeScript configurations
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

## 🛠 Technology Stack

- **Build Tool**: Turborepo
- **Package Manager**: pnpm 9.0.0
- **Language**: TypeScript 5.5.4
- **Formatting**: Prettier
- **Linting**: ESLint
- **Git Hooks**: Husky
- **UI Development**: Storybook

## 🔄 Development Workflow

1. Create a new branch following our [Git Convention](./docs/GIT_CONVENTION.md)
2. Make your changes
3. Run `pnpm lint` and `pnpm format` before committing
4. Create a Pull Request

## 📚 Documentation

- [Git Convention](./docs/GIT_CONVENTION.md) - Our git commit message and branching conventions
- [Turborepo Documentation](https://turbo.build/repo/docs)
- [pnpm Documentation](https://pnpm.io/motivation)

## 🔧 Configuration Files

- `turbo.json` - Turborepo pipeline configuration
- `pnpm-workspace.yaml` - pnpm workspace configuration
- `.npmrc` - npm configuration
- `.prettierrc` - Prettier configuration
- `eslint.config.js` - ESLint configuration

## 🤝 Contributing

1. All commits must follow our [Git Convention](./docs/GIT_CONVENTION.md)
2. Run tests and linting before pushing
3. Update documentation when adding new features
4. Create detailed Pull Request descriptions

## 📝 Scripts

- `pnpm dev` - Start development servers
- `pnpm build` - Build all applications and packages
- `pnpm lint` - Lint all code
- `pnpm format` - Format all code using Prettier

## 🔍 Future Scalability

When adding new applications or packages:

1. Create new directory in `apps/` or `packages/`
2. Update `pnpm-workspace.yaml` if needed
3. Add new pipeline configurations in `turbo.json`
4. Update this README with new app/package details

## 🤔 Need Help?

- Check the [Turborepo documentation](https://turbo.build/repo/docs)
- Review our [Git Convention](./docs/GIT_CONVENTION.md)
- Contact Team Lead: Seymur Orucov
