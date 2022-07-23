import type { ComplexStyleRule } from '@vanilla-extract/css'
import type {
  StyleWithSelectors,
  FeatureQueries,
} from '@vanilla-extract/css/dist/declarations/src/types'

export const overTablet = (
  rule: StyleWithSelectors & FeatureQueries<StyleWithSelectors>,
): ComplexStyleRule => {
  return {
    '@media': {
      '(min-width: 768px)': rule,
    },
  }
}
