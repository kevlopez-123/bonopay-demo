import {
  AuthContextStore
} from "./chunk-PATQ5ADP.js";
import {
  ResponseRegistrationApiHelper,
  environment
} from "./chunk-AY7TB2CX.js";
import {
  HttpClient,
  Injectable,
  InjectionToken,
  inject,
  map,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-QNDTW3UR.js";

// src/app/shared/repositories/registration/registration.service.ts
var RegistrationService = class _RegistrationService {
  http = inject(HttpClient);
  authContext = inject(AuthContextStore);
  baseUrl = `${environment.apiUrl}/beneficiarios`;
  get() {
    return this.http.get(`${this.baseUrl}/mis-datos`).pipe(map((data) => ResponseRegistrationApiHelper.createRegisteredData(data, this.authContext.documentType(), this.authContext.maskedPhone())));
  }
  static \u0275fac = function RegistrationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegistrationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RegistrationService, factory: _RegistrationService.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegistrationService, [{
    type: Injectable
  }], null, null);
})();

// src/app/shared/repositories/registration/registration.provider.ts
var REGISTRATION_PROVIDER = new InjectionToken("IRegistrationProviderService");
function provideRegistrationServiceProvider() {
  return { provide: REGISTRATION_PROVIDER, useClass: RegistrationService };
}

export {
  REGISTRATION_PROVIDER,
  provideRegistrationServiceProvider
};
