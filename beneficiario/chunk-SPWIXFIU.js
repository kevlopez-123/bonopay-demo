import {
  AuthContextStore
} from "./chunk-PATQ5ADP.js";
import {
  RequestProfileApiHelper,
  ResponseProfileApiHelper,
  environment
} from "./chunk-AY7TB2CX.js";
import {
  HttpClient,
  HttpErrorResponse,
  Injectable,
  InjectionToken,
  __spreadProps,
  __spreadValues,
  catchError,
  inject,
  map,
  setClassMetadata,
  switchMap,
  throwError,
  ɵɵdefineInjectable
} from "./chunk-QNDTW3UR.js";

// src/app/core/exceptions/profile-edit-forbidden.error.ts
var ProfileEditForbiddenError = class extends Error {
  constructor() {
    super("Profile editing is not allowed in the current edit state");
    this.name = "ProfileEditForbiddenError";
  }
};

// src/app/shared/repositories/profile/profile.service.ts
var ProfileService = class _ProfileService {
  http = inject(HttpClient);
  authContext = inject(AuthContextStore);
  baseUrl = `${environment.apiUrl}/beneficiarios`;
  get() {
    return this.http.get(`${this.baseUrl}/mis-datos`).pipe(map((data) => ResponseProfileApiHelper.createParticipantProfile(data)));
  }
  save(draft) {
    return this._update(draft);
  }
  /**
   * The PUT overwrites EVERY editable column, so a partial section edit has to
   * ride on top of the current server profile before the full contract body is
   * sent — otherwise saving one section would blank the others.
   *
   * `accountNumber`/`cci` on the read profile are masked display values
   * (`**** **** 8910`), so they are blanked unless the section edit provides new
   * ones: the backend keeps the stored value on blank, but rejects a non-blank,
   * non-numeric one.
   */
  patch(fields) {
    return this.get().pipe(switchMap((profile) => this._update(__spreadValues(__spreadProps(__spreadValues({}, profile), { accountNumber: "", cci: "" }), fields))));
  }
  _update(draft) {
    const body = RequestProfileApiHelper.createMisDatosRequest(draft, this.authContext.documentType());
    return this.http.put(`${this.baseUrl}/mis-datos`, body).pipe(catchError((error) => throwError(() => error instanceof HttpErrorResponse && error.status === 403 ? new ProfileEditForbiddenError() : error)), switchMap(() => this.get()));
  }
  static \u0275fac = function ProfileService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProfileService, factory: _ProfileService.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileService, [{
    type: Injectable
  }], null, null);
})();

// src/app/shared/repositories/profile/profile.provider.ts
var PROFILE_PROVIDER = new InjectionToken("IProfileProviderService");
function provideProfileServiceProvider() {
  return { provide: PROFILE_PROVIDER, useClass: ProfileService };
}

export {
  ProfileEditForbiddenError,
  PROFILE_PROVIDER,
  provideProfileServiceProvider
};
