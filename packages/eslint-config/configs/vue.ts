import pluginVue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import TSeslint from 'typescript-eslint'

import { type Linter } from 'eslint'
import merge from 'lodash/merge'

//--

import base from './base'
import { BASE_BROWSER_TS_CONFIG } from './browser'

//--

/**
 * This config must be added after the Vue config block.
 * It's a constant and has to be added manually because it can be changed.
 */
export const BASE_VUE_TS_CONFIG = merge(
  {},
  BASE_BROWSER_TS_CONFIG,
  {
    // files: ['*.vue', '**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: {
          // Use TS parser for <script lang='ts'>
          ts: TSeslint.parser
        },
        extraFileExtensions: ['.vue']
      }
    }
  } satisfies Linter.Config
) as Linter.Config

export default [
  ...base,
  ...pluginVue.configs['flat/recommended'],

  {
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/require-default-prop': 'off'
    }
  }
] as Linter.Config[]
