import {
  UtilsHelper
} from "./chunk-AY7TB2CX.js";
import {
  Injectable,
  computed,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-QNDTW3UR.js";

// src/app/features/participante/state/participante.store.ts
var ParticipanteStore = class _ParticipanteStore {
  _documentType = signal("DNI", ...ngDevMode ? [{ debugName: "_documentType" }] : (
    /* istanbul ignore next */
    []
  ));
  _documentNumber = signal("", ...ngDevMode ? [{ debugName: "_documentNumber" }] : (
    /* istanbul ignore next */
    []
  ));
  _maskedPhone = signal("", ...ngDevMode ? [{ debugName: "_maskedPhone" }] : (
    /* istanbul ignore next */
    []
  ));
  _active = signal(false, ...ngDevMode ? [{ debugName: "_active" }] : (
    /* istanbul ignore next */
    []
  ));
  _profile = signal(null, ...ngDevMode ? [{ debugName: "_profile" }] : (
    /* istanbul ignore next */
    []
  ));
  documentType = this._documentType.asReadonly();
  documentNumber = this._documentNumber.asReadonly();
  maskedPhone = this._maskedPhone.asReadonly();
  active = this._active.asReadonly();
  profile = this._profile.asReadonly();
  documentLabel = computed(() => UtilsHelper.joinWithDash(this._documentType(), this._documentNumber()), ...ngDevMode ? [{ debugName: "documentLabel" }] : (
    /* istanbul ignore next */
    []
  ));
  setIdentity(documentType, documentNumber, maskedPhone) {
    this._documentType.set(documentType);
    this._documentNumber.set(documentNumber);
    this._maskedPhone.set(maskedPhone);
  }
  setActive(active) {
    this._active.set(active);
  }
  setProfile(profile) {
    this._profile.set(profile);
  }
  reset() {
    this._documentType.set("DNI");
    this._documentNumber.set("");
    this._maskedPhone.set("");
    this._active.set(false);
    this._profile.set(null);
  }
  static \u0275fac = function ParticipanteStore_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ParticipanteStore)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ParticipanteStore, factory: _ParticipanteStore.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParticipanteStore, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  ParticipanteStore
};
