export class Path {
  public static fromString(path: string): Path {
    const segments =
      path
        .split('/')
        .reduce((acc: string[], segment: string) =>
          segment !== ''
            ? [...acc, decodeURIComponent(segment)]
            : acc, []);
    return new Path(segments);
  }

  public static fromSegments(segments: string[]): Path {
    return new Path(segments);
  }

  public toString(): string {
    return `/${this.segments.map(encodeURIComponent).join('/')}`;
  }

  public match<T>(rules: ReadonlyArray<MatchRule<T>>, defaultCallback: MatchCallback<T>): T {
    const segments = this.segments;

    for (const { path: pattern, do: callback } of rules) {
      if (pattern.length === segments.length) {
        const matching = pattern.every((patternSegment, idx) =>
          patternSegment === null || patternSegment === segments[idx]);

        if (matching) {
          const args = pattern
            .reduce((acc, ps, idx) => ps === null ? [...acc, segments[idx]] : acc, []);
          return callback(...args);
        }
      }
    }

    return defaultCallback();
  }

  private constructor(
    public readonly segments: ReadonlyArray<string>
  ) {}
}

interface MatchRule<T> {
  path: ReadonlyArray<string | null>;
  do: MatchCallback<T>;
}

type MatchCallback<T> = (...segments: string[]) => T;
