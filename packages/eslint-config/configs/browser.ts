import globals from 'globals'
import { type Linter } from 'eslint'

import merge from 'lodash/merge'

//--

import base, { BASE_TS_CONFIG } from './base'

//--

/**
 * This config must be added before the base config block.
 * It's a constant and has to be added manually because it can be changed.
 */
export const BASE_BROWSER_TS_CONFIG = merge(
  {},
  BASE_TS_CONFIG,
  {
    // files: ['**/*.ts'],
    languageOptions: {
      globals: {
        ...globals.browser
      }
    }
  } satisfies Linter.Config
) as Linter.Config

export default [
  ...base
] as Linter.Config[]
