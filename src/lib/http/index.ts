export const request = (url: string, options: Options = {}): Promise<Response> => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(options.method || 'GET', url, true);
    if (options.headers !== undefined) {
      Object.keys(options.headers).forEach((key) => {
        xhr.setRequestHeader(key, options.headers[key]);
      });
    }
    if (options.timeout !== undefined) {
      xhr.timeout = options.timeout;
    }

    xhr.onload = () => {
      resolve(new Response(xhr));
    };
    xhr.ontimeout = () => {
      reject(new Error.Timeout());
    };
    xhr.onerror = (details: ErrorEvent) => {
      reject(new Error.NetworkError(details));
    };

    xhr.send(options.body);
  });
};

export class Response {
  private readonly xhr: XMLHttpRequest;

  constructor(xhr: XMLHttpRequest) {
    this.xhr = xhr;
  }

  public get status() {
    return this.xhr.status;
  }

  public get ok() {
    const status = this.xhr.status;
    return status >= 200 && status < 300;
  }

  public get hasBody() {
    return this.xhr.responseText.length > 0;
  }

  public get json(): any {
    return JSON.parse(this.xhr.responseText);
  }

  public header(header: string) {
    const value = this.xhr.getResponseHeader(header);
    return value === null ? undefined : value;
  }
}

export abstract class Error {
  public static Timeout = class extends Error {
  };

  public static NetworkError = class extends Error {
    public readonly info: ErrorEvent;

    constructor(info: ErrorEvent) {
      super();
      this.info = info;
    }
  };
}

export interface Options {
  method?: string;
  headers?: any;
  body?: string;
  timeout?: number;
}
