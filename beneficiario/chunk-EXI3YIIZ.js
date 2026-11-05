import {
  DOCUMENT_PATTERNS,
  ResponseCatalogsApiHelper,
  environment
} from "./chunk-AY7TB2CX.js";
import {
  HttpClient,
  Injectable,
  InjectionToken,
  inject,
  map,
  of,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-QNDTW3UR.js";

// src/app/shared/repositories/catalogs/catalogs.service.ts
var CatalogsService = class _CatalogsService {
  http = inject(HttpClient);
  baseUrl = environment.apiUrl;
  getFinancialEntities() {
    return this.http.get(`${this.baseUrl}/bancos`).pipe(map((data) => ResponseCatalogsApiHelper.createFinancialEntities(data)));
  }
  getWallets() {
    return this.http.get(`${this.baseUrl}/billeteras`).pipe(map((data) => ResponseCatalogsApiHelper.createNames(data)));
  }
  /**
   * Document types live in the per-empresa catalog (`GET /api/valores`), which
   * requires an authenticated user — but the identify page needs them BEFORE
   * login. That contract gap is why this serves the static set the validators
   * already support instead of calling the API.
   */
  getDocumentTypes() {
    return of(Object.keys(DOCUMENT_PATTERNS));
  }
  getAccountTypes() {
    return this.http.get(`${this.baseUrl}/valores`).pipe(map((data) => ResponseCatalogsApiHelper.createValueNames(data?.tipos_cuenta)));
  }
  getOperators() {
    return this.http.get(`${this.baseUrl}/valores`).pipe(map((data) => ResponseCatalogsApiHelper.createValueNames(data?.operadores)));
  }
  static \u0275fac = function CatalogsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CatalogsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CatalogsService, factory: _CatalogsService.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CatalogsService, [{
    type: Injectable
  }], null, null);
})();

// src/app/shared/repositories/catalogs/catalogs.provider.ts
var CATALOGS_PROVIDER = new InjectionToken("ICatalogsProviderService");
function provideCatalogsServiceProvider() {
  return { provide: CATALOGS_PROVIDER, useClass: CatalogsService };
}

export {
  CATALOGS_PROVIDER,
  provideCatalogsServiceProvider
};
