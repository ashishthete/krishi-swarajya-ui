import { Error as HttpError, request } from 'app/lib/http';

export class Client {
  public readonly baseURL: string;
  public token?: string;

  constructor(baseURL: string, token: string | undefined) {
    this.baseURL = baseURL;
    this.token = token;
  }

  public async get(path: string, options: Options) {
    return this.request('GET', path, options);
  }

  public async post(path: string, options: Options) {
    return this.request('POST', path, options);
  }

  public async put(path: string, options: Options) {
    return this.request('PUT', path, options);
  }

  public async patch(path: string, options: Options) {
    return this.request('PATCH', path, options);
  }

  public async delete(path: string, options: Options) {
    return this.request('DELETE', path, options);
  }

  public async request(method: string, path: string, options: Options) {
    const body = options.body
      ? JSON.stringify(options.body)
      : '{}';
    const headers = this.headers(body, options.headers);
    const timeout = options.timeout;

    try {
      const response = await request(this.url(path, options.query), {
        method,
        headers,
        body,
        timeout
      });
      if (response.ok) {
        if (response.hasBody) {
          try {
            return response.json.data;
          } catch (error) {
            throw new Error.ProtocolError();
          }
        } else {
          return undefined;
        }
      } else {
        let details: object;

        try {
          details = response.json.error || {};
        } catch (error) {
          details = {};
        }
        throw new Error.ApplicationError(response.status, details);
      }
    } catch (error) {
      if (error instanceof HttpError.Timeout) {
        throw new Error.Timeout();
      } else if (error instanceof HttpError.NetworkError) {
        throw new Error.NetworkError(error.info);
      } else {
        throw error;
      }
    }
  }

  public url(path: string, query: Record<string, string> = {}) {
    return `${this.baseURL}${path}${encodeQuery(query)}`;
  }

  private headers(body: string | undefined, headers: Record<string, string> = {}) {
    const result: object = { ...headers, Accept: 'application/json'};

    if (body !== undefined) {
      result['Content-Type'] = 'application/json';
    }

    if (this.token !== undefined) {
      // tslint:disable-next-line:no-string-literal
      result['Authorization'] = `Bearer ${this.token}`;
    }

    return result;
  }
}

// Helpers

const encodeQuery = (q: Record<string, string> = {}) => {
  const result = Object.keys(q).map((key) =>
    `${encodeURIComponent(key)}=${encodeURIComponent(q[key])}`);
  return result.length > 0
    ? `?${result.join('&')}`
    : '';
};

// Types

export interface Options {
  query?: Record<string, string>;
  body?: Record<string, any>;
  headers?: Record<string, string>;
  timeout?: number;
}

export abstract class Error {
  public static Timeout = class extends Error {
    constructor() {
      super(599);
    }
  };

  public static NetworkError = class extends Error {
    public readonly info: ErrorEvent;

    constructor(info: ErrorEvent) {
      super(503);
      this.info = info;
    }
  };

  public static ProtocolError = class extends Error {
    constructor() {
      super(500);
    }
  };

  public static ApplicationError = class extends Error {
    public readonly info: object;

    constructor(code: number, info: object) {
      super(code);
      this.info = info;
    }
  };

  public readonly code: number;

  constructor(code: number) {
    this.code = code;
  }
}
