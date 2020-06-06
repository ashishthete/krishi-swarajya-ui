import { em } from 'csx';
import { types } from 'typestyle';

import * as color from '../../color';

export const focus: types.NestedCSSProperties = {
  $nest: {
    '&:focus': {
      borderColor: color.fieryRose.fade(0.8).toString(),
      boxShadow: `0 0 ${em(4 / 16)} 0 ${color.fieryRose.fade(0.4)}`,
      outline: 'none'
    },
    '&[readonly]:focus': {
      borderColor: 'transparent',
      boxShadow: 'none'
    },
    '&:-moz-focusring': {
      outline: 'none'
    }
  },
  border: `${em(1 / 16)} solid transparent`,
  boxShadow: 'none',
  outline: 'none',
  transition: 'all 200ms ease-in-out'
};
