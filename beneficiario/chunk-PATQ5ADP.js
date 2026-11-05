import {
  Injectable,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-QNDTW3UR.js";

// src/app/core/auth/auth-context.store.ts
var AuthContextStore = class _AuthContextStore {
  _documentType = signal("", ...ngDevMode ? [{ debugName: "_documentType" }] : (
    /* istanbul ignore next */
    []
  ));
  _documentNumber = signal("", ...ngDevMode ? [{ debugName: "_documentNumber" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Masked destination phone reported by `ingresar`, e.g. `+51 ******001`. */
  _maskedPhone = signal("", ...ngDevMode ? [{ debugName: "_maskedPhone" }] : (
    /* istanbul ignore next */
    []
  ));
  /** `{documento}|{idEmpresa}` issued by `ingresar`, required by `verificar-otp`. */
  _identificador = signal("", ...ngDevMode ? [{ debugName: "_identificador" }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * JWT issued by `verificar-otp`. Kept in memory only, so a full page reload
   * ends the session — same lifetime as the rest of the in-memory stores.
   */
  _token = signal("", ...ngDevMode ? [{ debugName: "_token" }] : (
    /* istanbul ignore next */
    []
  ));
  documentType = this._documentType.asReadonly();
  documentNumber = this._documentNumber.asReadonly();
  maskedPhone = this._maskedPhone.asReadonly();
  identificador = this._identificador.asReadonly();
  token = this._token.asReadonly();
  setIdentity(documentType, documentNumber) {
    this._documentType.set(documentType);
    this._documentNumber.set(documentNumber);
  }
  setLogin(identificador, maskedPhone) {
    this._identificador.set(identificador);
    this._maskedPhone.set(maskedPhone);
  }
  setToken(token) {
    this._token.set(token);
  }
  clear() {
    this._documentType.set("");
    this._documentNumber.set("");
    this._maskedPhone.set("");
    this._identificador.set("");
    this._token.set("");
  }
  static \u0275fac = function AuthContextStore_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthContextStore)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthContextStore, factory: _AuthContextStore.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthContextStore, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  AuthContextStore
};
