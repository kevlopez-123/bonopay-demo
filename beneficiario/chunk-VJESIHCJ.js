import {
  ResponseInvitationApiHelper,
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

// src/app/shared/repositories/invitation/invitation.service.ts
var InvitationService = class _InvitationService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiUrl}/invitaciones`;
  open(token) {
    return this.http.get(`${this.baseUrl}/abrir/${token}`).pipe(map((data) => ResponseInvitationApiHelper.createInvitation(data)));
  }
  static \u0275fac = function InvitationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InvitationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _InvitationService, factory: _InvitationService.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InvitationService, [{
    type: Injectable
  }], null, null);
})();

// src/app/shared/repositories/invitation/invitation.provider.ts
var INVITATION_PROVIDER = new InjectionToken("IInvitationProviderService");
function provideInvitationServiceProvider() {
  return { provide: INVITATION_PROVIDER, useClass: InvitationService };
}

export {
  INVITATION_PROVIDER,
  provideInvitationServiceProvider
};
