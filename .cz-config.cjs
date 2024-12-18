module.exports = {
  types: [
    { value: 'feat', name: 'feat:     A new feature' },
    { value: 'fix', name: 'fix:      A bug fix' },
    { value: 'docs', name: 'docs:     Documentation only changes' },
    { value: 'style', name: 'style:    Changes that do not affect the meaning of the code (white-space, formatting, etc)' },
    { value: 'refactor', name: 'refactor: A code change that neither fixes a bug nor adds a feature' },
    { value: 'perf', name: 'perf:     A code change that improves performance' },
    { value: 'test', name: 'test:     Adding missing tests or correcting existing tests' },
    { value: 'chore', name: 'chore:    Changes to the build process or auxiliary tools and libraries' }
  ],

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  subjectLimit: 50,
  skipQuestions: ['body', 'footer'],

  messages: {
    type: 'Select the type of change that you\'re committing:',
    scope: '\nWhat is the scope of this change (e.g. user-auth, dashboard, api)?',
    customScope: 'What is the custom scope for this change?',
    subject: 'Write a short description in imperative mood (e.g., "implement", not "implements" or "implemented"):\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?'
  },

  upperCaseSubject: false,
  allowTicketNumber: false,
  isTicketNumberRequired: false,
  
  // Enforce the rules
  subjectSeparator: ': ',
  skipEmptyScopes: false,
  
  // Examples in the help text
  helpMessage: `
Commit Message Format:
  type(scope): subject

Examples:
  feat(auth): implement JWT authentication
  fix(dashboard): resolve data loading issue
  docs(readme): update installation instructions
  refactor(api): simplify error handling logic

Rules:
- Use imperative, present tense ("change" not "changed" nor "changes")
- Don't capitalize the first letter of the subject
- No dot (.) at the end
- Maximum 50 characters for the subject
`
};
