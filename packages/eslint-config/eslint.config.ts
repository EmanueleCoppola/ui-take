import merge from 'lodash/merge'
import { type Linter } from 'eslint'

//--

import { base, BASE_TS_CONFIG } from './'

//--

export default [
  merge(
    {},
    BASE_TS_CONFIG,
    {
      languageOptions: {
        parserOptions: {
          project: './tsconfig.json',
          tsconfigRootDir: __dirname
        }
      }
    } satisfies Linter.Config
  ),

  ...base
] as Linter.Config[]
