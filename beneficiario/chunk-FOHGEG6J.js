import {
  AuthContextStore
} from "./chunk-PATQ5ADP.js";
import {
  ResponseAuthApiHelper,
  ResponseOtpHelper,
  ValidateHelper,
  environment
} from "./chunk-AY7TB2CX.js";
import {
  InvitationStore
} from "./chunk-XVAJIT6I.js";
import {
  HttpClient,
  HttpErrorResponse,
  Injectable,
  InjectionToken,
  catchError,
  inject,
  map,
  of,
  setClassMetadata,
  tap,
  throwError,
  ɵɵdefineInjectable
} from "./chunk-QNDTW3UR.js";

// src/app/shared/repositories/otp/otp.service.ts
var RESEND_AFTER_SECONDS = 60;
var OtpService = class _OtpService {
  http = inject(HttpClient);
  authContext = inject(AuthContextStore);
  invitationStore = inject(InvitationStore);
  baseUrl = `${environment.authUrl}/beneficiario`;
  /**
   * Access is invitation-only, and the empresa exists nowhere but in the opened
   * invitation — a missing `id_empresa` normalizes to 0 — so without one the
   * request must never reach the backend.
   */
  send() {
    const companyId = this.invitationStore.invitation()?.companyId;
    //! no empresa, no request
    if (!companyId) {
      return throwError(() => new Error("Invitation-only access: no invitation empresa is available."));
    }
    return this.http.post(`${this.baseUrl}/ingresar`, {
      tipo_documento: this.authContext.documentType(),
      documento: this.authContext.documentNumber(),
      id_empresa: companyId
    }).pipe(tap((data) => this.authContext.setLogin(ValidateHelper.toString(data?.identificador), ValidateHelper.toString(data?.celular))), map(() => ResponseOtpHelper.createOtpSendResponse({ resendAfterSeconds: RESEND_AFTER_SECONDS })));
  }
  verify(code) {
    return this.http.post(`${this.baseUrl}/verificar-otp`, {
      identificador: this.authContext.identificador(),
      codigo: code
    }).pipe(tap((data) => this.authContext.setToken(ValidateHelper.toString(data?.token))), map((data) => ResponseAuthApiHelper.createOtpVerifyResponse(data)), catchError((error) => {
      if (error instanceof HttpErrorResponse && error.status === 401) {
        return of(ResponseOtpHelper.createOtpVerifyResponse({
          verified: false,
          active: false,
          sessionExpiresAt: 0
        }));
      }
      return throwError(() => error);
    }));
  }
  static \u0275fac = function OtpService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OtpService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OtpService, factory: _OtpService.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OtpService, [{
    type: Injectable
  }], null, null);
})();

// src/app/shared/repositories/otp/otp.provider.ts
var OTP_PROVIDER = new InjectionToken("IOtpProviderService");
function provideOtpServiceProvider() {
  return { provide: OTP_PROVIDER, useClass: OtpService };
}

export {
  OTP_PROVIDER,
  provideOtpServiceProvider
};
