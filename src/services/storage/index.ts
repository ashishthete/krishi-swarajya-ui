export class Storage {
  public readonly token = {
    store: (token: string) =>
      store(Scope.SESSION, 'auth-token', token),
    load: () =>
      load(Scope.SESSION, 'auth-token'),
    erase: () =>
      erase(Scope.SESSION, 'auth-token')
  };
  public readonly lastOrgId = {
    store: (orgId: string) =>
      store(Scope.LOCAL, 'org-id', orgId),
    load: () =>
      load(Scope.LOCAL, 'org-id'),
    erase: () =>
      erase(Scope.LOCAL, 'org-id')
  };
  public readonly twoFactorToken = {
    store: (token: string) =>
      store(Scope.LOCAL, 'two-factor-token', token),
    load: () =>
      load(Scope.LOCAL, 'two-factor-token'),
    erase: () =>
      erase(Scope.LOCAL, 'two-factor-token')
  };
}

enum Scope {
  LOCAL,
  SESSION
}

const storage = (scope: Scope) =>
  scope === Scope.LOCAL ? window.localStorage : window.sessionStorage;

const store = (scope: Scope, key: string, value: string) => {
  try {
    storage(scope).setItem(key, value);
  } catch (error) {
    // IGNORE
  }
};

const load = (scope: Scope, key: string): string | undefined => {
  const value = storage(scope).getItem(key);
  return value !== null ? value : undefined;
};

const erase = (scope: Scope, key: string) => {
  try {
    storage(scope).removeItem(key);
  } catch (error) {
    // IGNORE
  }
};
