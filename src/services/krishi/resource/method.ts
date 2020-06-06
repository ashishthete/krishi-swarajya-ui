import { Dispatch } from 'futura-dom';
import { Client, Error as ClientError } from '../client';

export const get = <T>(client: Client, dispatch: Dispatch, path: string, decode: Decode<T>) =>
  async function get<Context, OkMessage, ErrorMessage>(
    Ok: Result<T, Context, OkMessage>,
    Error: Result<number, Context, ErrorMessage>,
    context?: Context
  ) {
    try {
      const result = await client.get(path, {});
      dispatch(new Ok(decode(result), context));
    } catch (e) {
      if (e instanceof ClientError) {
        dispatch(new Error(e.code, context));
      } else {
        throw e;
      }
    }
  };

export const list = <T>(client: Client, dispatch: Dispatch, path: string, decode: Decode<T>) =>
  async function list<Context, OkMessage, ErrorMessage>(
    query: Record<string, any>,
    Ok: Result<ReadonlyArray<T>, Context, OkMessage>,
    Error: Result<number, Context, ErrorMessage>,
    context?: Context
  ) {
    try {
      const result = await client.get(path, { query });
      dispatch(new Ok(result.map(decode), context));
    } catch (e) {
      if (e instanceof ClientError) {
        dispatch(new Error(e.code, context));
      } else {
        throw e;
      }
    }
  };

export const create = <T>(client: Client, dispatch: Dispatch, path: string, decode: Decode<T>) =>
  async function create<Context, OkMessage, ErrorMessage>(
    body: Record<string, any>,
    Ok?: Result<T, Context, OkMessage>,
    Error?: Result<ClientError, Context, ErrorMessage>,
    context?: Context
  ) {
    try {
      const result = await client.post(path, { body });
      if (Ok) {
        dispatch(new Ok(decode(result), context));
      }
    } catch (e) {
      if (e instanceof ClientError) {
        if (Error) {
          dispatch(new Error(e, context));
        }
      } else {
        throw e;
      }
    }
  };

export const update = <T>(client: Client, dispatch: Dispatch, path: string, decode: Decode<T>) =>
  async function update<Context, OkMessage, ErrorMessage>(
    body: Record<string, any>,
    Ok?: Result<T, Context, OkMessage>,
    Error?: Result<number, Context, ErrorMessage>,
    context?: Context
  ) {
    try {
      const result = await client.patch(path, { body });
      if (Ok) {
        dispatch(new Ok(decode(result), context));
      }
    } catch (e) {
      if (e instanceof ClientError) {
        if (Error) {
          dispatch(new Error(e.code, context));
        }
      } else {
        throw e;
      }
    }
  };

export const put = <T>(client: Client, dispatch: Dispatch, path: string, decode: Decode<T>) =>
  async function put<Context, OkMessage, ErrorMessage>(
    body: Record<string, any>,
    Ok?: Result<T, Context, OkMessage>,
    Error?: Result<ClientError, Context, ErrorMessage>,
    context?: Context
  ) {
    try {
      const result = await client.put(path, { body });
      if (Ok) {
        dispatch(new Ok(decode(result), context));
      }
    } catch (e) {
      if (e instanceof ClientError) {
        if (Error) {
          dispatch(new Error(e, context));
        }
      } else {
        throw e;
      }
    }
  };

export const del = <T>(client: Client, dispatch: Dispatch, path: string, decode: Decode<T>) =>
  async function del<Context, OkMessage, ErrorMessage>(
    Ok?: Empty<Context, OkMessage>,
    Error?: Result<number, Context, ErrorMessage>,
    context?: Context
  ) {
    try {
      await client.delete(path, {});
      if (Ok) {
        dispatch(new Ok(context));
      }
    } catch (e) {
      if (e instanceof ClientError) {
        if (Error) {
          dispatch(new Error(e.code, context));
        }
      } else {
        throw e;
      }
    }
  };

export type Decode<T> = (json: Record<string, any>) => T;

export interface Result<Model, Context, Message> {
  new(model: Model, context?: Context): Message;
}

export interface Empty<Context, Message> {
  new(context?: Context): Message;
}
