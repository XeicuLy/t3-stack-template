// @ts-nocheck
import js from '@eslint/js';
import tsEsLintPlugin from '@typescript-eslint/eslint-plugin';
import tsEsLintParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';

const config = [
  { ignores: ['dist'] },
  js.configs.recommended,
  eslintConfigPrettier,
  {
    plugins: {
      '@typescript-eslint': tsEsLintPlugin,
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.cts', '**/*.mts'],
    languageOptions: {
      parser: tsEsLintParser,
      parserOptions: {
        project: true,
      },
    },
    rules: {
      ...tsEsLintPlugin.configs['eslint-recommended'].overrides[0].rules,
      ...tsEsLintPlugin.configs['recommended-type-checked'].rules,
      '@typescript-eslint/no-explicit-any': 'error',
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
          alphabetize: { order: 'asc', caseInsensitive: true },
          pathGroups: [
            {
              pattern: '@/**',
              group: 'parent',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin', 'external', 'object', 'type'],
          'newlines-between': 'always',
        },
      ],
    },
  },
];

export default config;
