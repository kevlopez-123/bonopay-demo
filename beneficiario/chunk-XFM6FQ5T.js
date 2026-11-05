import {
  Injectable,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-QNDTW3UR.js";

// src/app/core/auth/session.store.ts
var SessionStore = class _SessionStore {
  /**
   * Unix epoch milliseconds at which the backend session dies, as reported by
   * `verificar-otp`; `null` while there is no active session.
   */
  _expiresAt = signal(null, ...ngDevMode ? [{ debugName: "_expiresAt" }] : (
    /* istanbul ignore next */
    []
  ));
  expiresAt = this._expiresAt.asReadonly();
  setExpiresAt(epochMilliseconds) {
    this._expiresAt.set(epochMilliseconds);
  }
  clear() {
    this._expiresAt.set(null);
  }
  static \u0275fac = function SessionStore_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SessionStore)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SessionStore, factory: _SessionStore.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SessionStore, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  SessionStore
};
