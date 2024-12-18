# Git/GitLab Convention Guide

## Table of Contents

- [Commit Message Guidelines](#commit-message-guidelines)
- [Branching Strategy](#branching-strategy)
- [Git Best Practices](#git-best-practices)
- [References](#references)

## Commit Message Guidelines

### Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools and libraries

### Scope

The scope should be the name of the module/feature/component affected (e.g., user-auth, dashboard, api).

### Subject

- Use imperative, present tense: "change" not "changed" nor "changes"
- Don't capitalize the first letter
- No dot (.) at the end
- Maximum 50 characters

### Examples

```
feat(auth): implement JWT authentication
fix(dashboard): resolve data loading issue
docs(readme): update installation instructions
refactor(api): simplify error handling logic
```

## Branching Strategy

### Main Branches

- `main` - Production-ready code
- `develop` - Latest delivered development changes for the next release

### Supporting Branches

- Feature branches: `feature/<ticket-number>-description`
- Bugfix branches: `bugfix/<ticket-number>-description`
- Hotfix branches: `hotfix/<ticket-number>-description`
- Release branches: `release/v05.12.2024`

### Branch Naming Convention

- Use lowercase letters and hyphens
- Include ticket/issue number when applicable
- Be descriptive but concise

Examples:

```
feature/PROJ-123-user-authentication
bugfix/PROJ-456-fix-login-validation
hotfix/PROJ-789-security-vulnerability
release/v05.12.2024
```

## Git Best Practices

### DO's

1. Pull/rebase frequently to minimize merge conflicts
2. Write clear, concise commit messages
3. Create feature branches for all new work
4. Keep commits atomic and focused
5. Review your changes before committing
6. Use meaningful branch names

### DON'Ts

1. Don't commit directly to main/develop branches
2. Don't commit unfinished work
3. Don't commit generated files
4. Don't rewrite public history
5. Don't commit large binary files

### Keeping History Clean

```bash
# Squash multiple commits
git rebase -i HEAD~3

# Update commit message
git commit --amend

# Update branch with latest changes
git pull --rebase origin develop
```

### Useful Git Commands

```bash
# Create and switch to new branch
git checkout -b feature/new-feature

# Update feature branch with develop
git checkout feature/new-feature
git rebase develop

# Squash last 3 commits
git reset --soft HEAD~3
git commit -m "feat: comprehensive commit message"
```

## References

### Official Documentation

- [Git Documentation](https://git-scm.com/doc)
- [GitLab Documentation](https://docs.gitlab.com/)

### Style Guides

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Angular Commit Message Guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit)

### Tools

- [Commitizen](http://commitizen.github.io/cz-cli/) - Command line tool for standardized commit messages
- [Husky](https://typicode.github.io/husky/) - Git hooks made easy
- [commitlint](https://commitlint.js.org/) - Lint commit messages

---

_Last updated: 2024-12-19_

For any questions or suggestions about this convention guide, please contact the team lead.
