import { percent, px } from 'csx';
import { h } from 'futura-dom';
import { style } from 'typestyle';

import { Post } from 'app/state/logged-in/page/post-list/post';

import { view as section } from '../../_layout/section';

export const view = (post: Post) =>
  section({
    title: post.info.title,
    content: image(post.info.imageURL)
  });

export const image = (url: string) =>
  h(`image.${styles.image}`, {
    attrs: {
      src: url,
      height: px(1024),
      width: px(463)
    }
  });

// Styles

namespace styles {
  export const image = style({
    width: percent(100)
  });
}
