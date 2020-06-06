import { em, percent } from 'csx';
import { types } from 'typestyle';

import * as color from '../../color';

export const input: types.NestedCSSProperties = {
  $nest: {
    '&[readonly]': {
      borderColor: color.gunMetal.fade(0.1).toString(),
      boxShadow: 'none'
    },
    '&[readonly]:focus': {
      borderColor: color.gunMetal.fade(0.1).toString()
    },
    '&:disabled': {
      borderColor: color.gunMetal.fade(0.1).toString(),
      boxShadow: 'none'
    }
  },
  backgroundColor: color.white.toString(),
  borderColor: color.gunMetal.lighten(0.5).toString(),
  borderRadius: em(2 / 16),
  borderStyle: 'solid',
  borderWidth: em(1 / 16),
  boxShadow: `inset 0 0 ${em(4 / 16)} ${color.gunMetal.lighten(0.5).fade(0.4)}`,
  color: color.gunMetal.lighten(0.1).toString(),
  display: 'block',
  padding: `${em(0.5)} ${em(0.5)}`,
  width: percent(100)
};
