import {
  AuthContextStore
} from "./chunk-PATQ5ADP.js";
import {
  ResponseAuthApiHelper,
  ValidateHelper,
  environment
} from "./chunk-AY7TB2CX.js";
import {
  InvitationStore
} from "./chunk-XVAJIT6I.js";
import {
  HttpClient,
  Injectable,
  InjectionToken,
  inject,
  map,
  setClassMetadata,
  tap,
  throwError,
  ɵɵdefineInjectable
} from "./chunk-QNDTW3UR.js";

// src/app/shared/repositories/identify/identify.service.ts
var IdentifyService = class _IdentifyService {
  http = inject(HttpClient);
  authContext = inject(AuthContextStore);
  invitationStore = inject(InvitationStore);
  baseUrl = `${environment.authUrl}/beneficiario`;
  identify(request) {
    this.authContext.clear();
    const companyId = this.invitationStore.invitation()?.companyId;
    if (!companyId) {
      return throwError(() => new Error("Invitation-only access: no invitation empresa is available."));
    }
    return this.http.post(`${this.baseUrl}/ingresar`, {
      tipo_documento: request.documentType,
      documento: request.documentNumber,
      id_empresa: companyId
    }).pipe(tap((data) => {
      this.authContext.setIdentity(request.documentType, request.documentNumber);
      this.authContext.setLogin(ValidateHelper.toString(data?.identificador), ValidateHelper.toString(data?.celular));
    }), map((data) => ResponseAuthApiHelper.createIdentifyResponse(data)));
  }
  static \u0275fac = function IdentifyService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IdentifyService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _IdentifyService, factory: _IdentifyService.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IdentifyService, [{
    type: Injectable
  }], null, null);
})();

// src/app/shared/repositories/identify/identify.provider.ts
var IDENTIFY_PROVIDER = new InjectionToken("IIdentifyProviderService");
function provideIdentifyServiceProvider() {
  return { provide: IDENTIFY_PROVIDER, useClass: IdentifyService };
}

export {
  IDENTIFY_PROVIDER,
  provideIdentifyServiceProvider
};
