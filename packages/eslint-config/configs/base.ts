import eslintJS from '@eslint/js'
import TSeslint from 'typescript-eslint'

import stylistic from '@stylistic/eslint-plugin'

import { type Linter } from 'eslint'

//--

// these rules are shared between frontend (browser) and node

/**
 * This config must be added before the base config block.
 * It's a constant and has to be added manually because it can be changed.
 */
export const BASE_TS_CONFIG = {
  // files: ['**/*.ts'],
  languageOptions: {
    parser: TSeslint.parser,
    parserOptions: {
      projectService: true,
      tsconfigRootDir: process.cwd()
    }
  }
} as Linter.Config

export default [
  eslintJS.configs.recommended,
  ...TSeslint.configs.recommendedTypeChecked,

  // applied to all files unless files is specified
  {
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/no-extra-semi': 'error',
      '@stylistic/no-multiple-empty-lines': ['error', { max: 2, maxBOF: 1, maxEOF: 1 }],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/comma-spacing': ['error', { before: false, after: true }],
      '@stylistic/comma-dangle': ['error', { arrays: 'never', objects: 'never' }],
      '@stylistic/member-delimiter-style': [
        'error',
        {
          'multiline': {
            'delimiter': 'comma',
            'requireLast': false
          },
          'singleline': {
            'delimiter': 'comma',
            'requireLast': false
          }
        }
      ],
      '@stylistic/type-annotation-spacing': ['error', {
        before: false,
        after: true,
        overrides: {
          arrow: { before: true, after: true }
        }
      }],

      // TS-specific tweaks
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-duplicate-enum-values': 'off',
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports' }]
    }
  }
] as Linter.Config[]
