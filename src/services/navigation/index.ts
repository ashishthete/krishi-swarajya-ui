import { Dispatch } from 'futura-dom';

import { Updated } from './events';
import { Path } from './path';

export class Navigation {
  constructor(
    private readonly title: string,
    private readonly dispatch: Dispatch
  ) {
    window.document.title = title;

    document.addEventListener('click', this.onClick, false);
    window.addEventListener('popstate', this.onPopState, false);
  }

  get path() {
    return Path.fromString(window.location.pathname);
  }

  get query(): URLSearchParams {
    const url = new URL(window.location.href);
    return new URLSearchParams(url.search);
  }

  get href() {
    return window.location.href;
  }

  public buildURL(segments: string[]): string {
    const location = window.location;
    const path = segments.map(encodeURIComponent).join('/');

    return `${location.protocol}//${location.host}/${path}`;
  }

  public newPath(segments: string[], title: string = ''): void {
    const path = Path.fromSegments(segments);
    window.history.pushState(null, '', path.toString());
    this.setTitle(title);
  }

  public replacePath(segments: string[], query?: Record<string, string>, title: string = ''): void {
    const path = Path.fromSegments(segments);
    const q = new URLSearchParams();
    if (query !== undefined) {
      for (const key of Object.keys(query)) {
        q.append(key, query[key]);
      }
    }
    const queryURL = q.toString();

    const state = `${path}${queryURL.length > 0 ? '?' + queryURL.replace(/%20/g, '+') : ''}`;
    window.history.replaceState(null, '', state.toString());
    this.setTitle(title);
  }

  public setTitle(title: string): void {
    window.document.title =
      title
        ? `${title} - ${this.title}`
        : `${this.title}`;
  }

  private onPopState = () => {
    const path = Path.fromString(window.location.pathname);
    this.setTitle('');
    this.dispatch(new Updated(path));
  }

  private onClick = (event: MouseEvent) => {
    // Middle click, cmd click, and ctrl click should open links in a new tab as normal.
    if (event.which > 1 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    const link = findLink(event.target as Element);
    if (link && link.indexOf('/') === 0) {
      event.preventDefault();

      const path = Path.fromString(link);
      window.history.pushState(null, '', path.toString());
      this.setTitle('');
      this.dispatch(new Updated(path));
    }
  }
}

// Events

export { Updated };

// Helpers

const findLink = (emitter: Element): string | null => {
  const anchor = findAnchor(emitter);

  if (anchor != null) {
    return anchor.getAttribute('href');
  }
  return null;
};

const findAnchor = (emitter: Element): Element | null => {
  for (let element: Element | null = emitter; element !== null; element = element.parentElement) {
    if (element.tagName.toLowerCase() === 'a') {
      return element;
    }
  }
  return null;
};
