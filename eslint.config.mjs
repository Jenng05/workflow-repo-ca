import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,

  // Vanlig kode som kjører i nettleseren
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser },
    },
  },

  // Config-filer som kjører i Node
  {
    files: ['*.config.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: { ...globals.node },
    },
  },

  // Testfiler: Vitest-globaler
  {
    files: ['**/*.test.js'],
    languageOptions: {
      globals: {
        ...globals.node,
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        vi: 'readonly',
      },
    },
  },
    // Playwright-tester kjører i Node
  {
    files: ['tests/e2e/**/*.js'],
    languageOptions: {
      globals: { ...globals.node },
    },
  },
];