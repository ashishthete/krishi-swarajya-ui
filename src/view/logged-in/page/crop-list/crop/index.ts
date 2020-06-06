import { em, percent } from 'csx';
import { h } from 'futura-dom';
import { style } from 'typestyle';

import { Crop } from 'app/state/logged-in/page/crop-list/crop';

export const view = (crop: Crop) =>
  h(`a.${styles.container}`, { attrs: { href: `/crops/${encodeURIComponent(crop.info.id)}` } }, [
    image(crop.info.imageURL),
    title(crop.info.name)
  ]);

const title = (title: string) =>
  h(`div.${styles.title}`, [title]);

const image = (url: string) =>
  h(`img.${styles.image}`, {
    attrs: {
      src: url
    }
  });

// Styles

namespace styles {
  export const container = style({
    display: 'flex',
    flexDirection: 'column'
  });

  export const image = style({
    maxHeight: percent(100),
    minWidth: percent(100),
    objectFit: 'cover',
    verticalAlign: 'bottom'
  });

  export const title = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    paddingBottom: em(1)
  });

  export const name = style({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  });
}
