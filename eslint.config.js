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
    },
  },
];

export default config;
