import { percent } from 'csx';
import { program } from 'futura-dom';
import { cssRule, forceRenderStyles } from 'typestyle';

import { request as get } from './lib/http';
import * as color from './lib/view/color';
import * as font from './lib/view/font';
import { init, update } from './state';
import { view } from './view';

async function main(configUrl: string) {
  cssRule('html, body', {
    'background': color.whiteSmoke.toString(),
    'color': color.gunMetal.toString(),
    '-moz-osx-font-smoothing': 'grayscale',
    '-webkit-font-smoothing': 'antialiased'
  });
  cssRule('body, button, input, select, textarea', {
    fontFamily: font.family.primary,
    fontSize: percent(100),
    fontWeight: font.weight.normal
  });
  cssRule('select', {
    lineHeight: 1.2
  });
  cssRule('textarea', {
    lineHeight: 1.4
  });
  cssRule('button, input', {
    lineHeight: 1
  });
  cssRule('a', {
    color: 'inherit'
  });
  cssRule('*', {
    boxSizing: 'border-box'
  });
  forceRenderStyles();

  const config = (await get(configUrl)).json;
  program({ init: init(config), update })
    .embed(document.getElementById('app'), view);
}

declare var require: <T>(path: string) => T;
// tslint:disable-next-line:no-var-requires
const configUrl = require<string>('../config/app.json');
main(configUrl);
