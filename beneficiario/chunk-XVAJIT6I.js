import {
  Injectable,
  computed,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-QNDTW3UR.js";

// src/app/core/auth/invitation.store.ts
var InvitationStore = class _InvitationStore {
  _token = signal("", ...ngDevMode ? [{ debugName: "_token" }] : (
    /* istanbul ignore next */
    []
  ));
  _invitation = signal(null, ...ngDevMode ? [{ debugName: "_invitation" }] : (
    /* istanbul ignore next */
    []
  ));
  token = this._token.asReadonly();
  invitation = this._invitation.asReadonly();
  hasInvitation = computed(() => this._invitation() !== null, ...ngDevMode ? [{ debugName: "hasInvitation" }] : (
    /* istanbul ignore next */
    []
  ));
  setInvitation(token, invitation) {
    this._token.set(token);
    this._invitation.set(invitation);
  }
  clear() {
    this._token.set("");
    this._invitation.set(null);
  }
  static \u0275fac = function InvitationStore_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InvitationStore)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _InvitationStore, factory: _InvitationStore.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InvitationStore, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  InvitationStore
};
