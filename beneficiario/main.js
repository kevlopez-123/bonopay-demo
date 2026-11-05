import {
  provideIdentifyServiceProvider
} from "./chunk-LFFV3CNE.js";
import {
  provideInvitationServiceProvider
} from "./chunk-VJESIHCJ.js";
import {
  provideOtpServiceProvider
} from "./chunk-FOHGEG6J.js";
import {
  provideRegistrationServiceProvider
} from "./chunk-BPAJBJI6.js";
import {
  provideProfileServiceProvider
} from "./chunk-SPWIXFIU.js";
import {
  provideCatalogsServiceProvider
} from "./chunk-EXI3YIIZ.js";
import {
  AuthContextStore
} from "./chunk-PATQ5ADP.js";
import {
  environment
} from "./chunk-AY7TB2CX.js";
import "./chunk-XVAJIT6I.js";
import {
  Router,
  RouterOutlet,
  bootstrapApplication,
  provideRouter,
  withInMemoryScrolling
} from "./chunk-6CR7NOLI.js";
import {
  ChangeDetectionStrategy,
  Component,
  HttpErrorResponse,
  HttpResponse,
  __spreadValues,
  catchError,
  inject,
  mergeMap,
  of,
  provideBrowserGlobalErrorListeners,
  provideHttpClient,
  setClassMetadata,
  throwError,
  timer,
  withFetch,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-QNDTW3UR.js";

// src/app/core/interceptors/auth-token.interceptor.ts
var authTokenInterceptor = (req, next) => {
  const token = inject(AuthContextStore).token();
  if (!token || !req.url.startsWith(environment.apiUrl)) {
    return next(req);
  }
  return next(req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }));
};

// src/app/core/interceptors/unauthorized.interceptor.ts
var unauthorizedInterceptor = (req, next) => {
  const router = inject(Router);
  return next(req).pipe(catchError((error) => {
    if (error instanceof HttpErrorResponse && error.status === 401 && !req.url.startsWith(environment.authUrl)) {
      void router.navigate(["/"]);
    }
    return throwError(() => error);
  }));
};

// src/app/core/demo/demo-data.ts
var DEMO_COMPANY_ID = 2;
var DEMO_INVALID_TOKEN = "invalido";
var DEMO_WRONG_OTP = "000000";
var DEMO_REGISTERED_DOCUMENT = "45678912";
var DEMO_INVITATION = {
  id_empresa: DEMO_COMPANY_ID,
  empresa_nombre: "Motiva Soluciones",
  logo_url: "/logo-motiva.svg",
  color_primario: "#00aeb8"
};
var DEMO_BANKS = [
  { nombre: "BCP", codigo: "002" },
  { nombre: "Interbank", codigo: "003" },
  { nombre: "BBVA", codigo: "011" },
  { nombre: "Scotiabank", codigo: "009" },
  { nombre: "Banco de la Naci\xF3n", codigo: "018" }
];
var DEMO_WALLETS = [{ nombre: "Yape" }, { nombre: "Plin" }];
var DEMO_VALORES = {
  id_empresa: DEMO_COMPANY_ID,
  operadores: ["Movistar", "Entel", "Bitel"],
  canales: ["Distribuidor", "Retail", "Mayorista"],
  tipos_cuenta: ["Cuenta de ahorros", "Cuenta corriente", "Cuenta sueldo"],
  tipos_documento: ["DNI", "CEX"],
  tipos_beneficiario: ["Vendedor", "Due\xF1o"]
};
function createRegisteredBeneficiary(now) {
  const threeDaysAgo = new Date(now.getTime() - 3 * 24 * 60 * 60 * 1e3);
  const monthAgo = new Date(now.getTime() - 32 * 24 * 60 * 60 * 1e3);
  return {
    id_empresa: DEMO_COMPANY_ID,
    nombres: "Rosa Elena",
    apellido_paterno: "Quispe",
    apellido_materno: "Huam\xE1n",
    tipo_documento: "DNI",
    documento: DEMO_REGISTERED_DOCUMENT,
    correo: "rosa.quispe@correo.pe",
    canal: "Distribuidor",
    tipo: "Vendedor",
    departamento: "Lima",
    provincia: "Lima",
    distrito: "Miraflores",
    banco: "BCP",
    tipo_cuenta: "Cuenta de ahorros",
    numero_cuenta: "19412345678901",
    cci: "00219400123456789012",
    numero_celular: "987654321",
    celular_billetera: "987654321",
    operador: "Movistar",
    billetera: "Yape",
    estado_registro: "COMPLETO",
    fecha_registro: toApiDateTime(monthAgo),
    fecha_actualizacion: toApiDateTime(threeDaysAgo)
  };
}
var NEW_BENEFICIARY_LOCATIONS = [
  ["Lima", "Lima", "San Isidro"],
  ["Arequipa", "Arequipa", "Cayma"],
  ["La Libertad", "Trujillo", "V\xEDctor Larco Herrera"],
  ["Cusco", "Cusco", "Wanchaq"],
  ["Piura", "Piura", "Castilla"]
];
function createPendingBeneficiary(documentType, document, now) {
  const seed = [...document].reduce((sum, digit) => sum + Number(digit || 0), 0);
  const [departamento, provincia, distrito] = NEW_BENEFICIARY_LOCATIONS[seed % NEW_BENEFICIARY_LOCATIONS.length];
  const phoneTail = document.slice(-6).padStart(6, "0");
  return {
    id_empresa: DEMO_COMPANY_ID,
    tipo_documento: documentType,
    documento: document,
    correo: null,
    canal: "Distribuidor",
    tipo: "Vendedor",
    departamento,
    provincia,
    distrito,
    numero_celular: `987${phoneTail}`,
    estado_registro: "INCOMPLETO",
    fecha_registro: toApiDateTime(new Date(now.getTime() - 24 * 60 * 60 * 1e3))
  };
}
function toApiDateTime(date) {
  const two = (value) => String(value).padStart(2, "0");
  return `${two(date.getDate())}-${two(date.getMonth() + 1)}-${date.getFullYear()} ${two(date.getHours())}:${two(date.getMinutes())}:${two(date.getSeconds())}`;
}
function toLimaIsoDateTime(date) {
  const LIMA_OFFSET_MS = 5 * 60 * 60 * 1e3;
  return new Date(date.getTime() - LIMA_OFFSET_MS).toISOString().slice(0, 19);
}

// src/app/core/demo/demo-backend.ts
var SESSION_MINUTES = 30;
var DemoBackend = class {
  beneficiaries = /* @__PURE__ */ new Map();
  currentDocument = "";
  handle({ method, path, body }) {
    const route = `${method.toUpperCase()} ${path.replace(/\/+$/, "")}`;
    const open = /^GET .*\/invitaciones\/abrir\/(.+)$/.exec(route);
    if (open) {
      return this.openInvitation(decodeURIComponent(open[1]));
    }
    if (route.endsWith("POST /auth/beneficiario/ingresar")) {
      return this.ingresar(body);
    }
    if (route.endsWith("POST /auth/beneficiario/verificar-otp")) {
      return this.verificarOtp(body);
    }
    if (route.endsWith("GET /api/beneficiarios/mis-datos")) {
      return this.misDatos();
    }
    if (route.endsWith("PUT /api/beneficiarios/mis-datos")) {
      return this.updateMisDatos(body);
    }
    if (route.endsWith("GET /api/bancos")) {
      return { status: 200, body: DEMO_BANKS };
    }
    if (route.endsWith("GET /api/billeteras")) {
      return { status: 200, body: DEMO_WALLETS };
    }
    if (route.endsWith("GET /api/valores")) {
      return { status: 200, body: DEMO_VALORES };
    }
    return { status: 404, body: { mensaje: "Recurso no disponible en el modo demo." } };
  }
  openInvitation(token) {
    if (!token.trim() || token.trim().toLowerCase() === DEMO_INVALID_TOKEN) {
      return { status: 404, body: { mensaje: "La invitaci\xF3n no es v\xE1lida." } };
    }
    return { status: 200, body: DEMO_INVITATION };
  }
  /** Identifies the beneficiary by document and "sends" an OTP to their phone. */
  ingresar(body) {
    const documentType = String(body?.["tipo_documento"] ?? "DNI").toUpperCase();
    const document = String(body?.["documento"] ?? "").trim();
    if (!document) {
      return { status: 400, body: { mensaje: "Ingresa tu n\xFAmero de documento." } };
    }
    const record = this.ensureBeneficiary(documentType, document);
    const phone = String(record.numero_celular ?? "");
    const response = {
      requiere_otp: true,
      identificador: `${document}|${DEMO_COMPANY_ID}`,
      canal: "WHATSAPP",
      celular: `+51 ******${phone.slice(-3)}`,
      otp_vigencia_minutos: 5,
      mensaje: "C\xF3digo enviado (demo: usa cualquier c\xF3digo de 6 d\xEDgitos, excepto 000000)."
    };
    return { status: 200, body: response };
  }
  verificarOtp(body) {
    const code = String(body?.["codigo"] ?? "").trim();
    const [document] = String(body?.["identificador"] ?? "").split("|");
    if (!code || code === DEMO_WRONG_OTP || !document) {
      return { status: 401, body: { mensaje: "El c\xF3digo es incorrecto o venci\xF3." } };
    }
    this.currentDocument = document;
    const record = this.beneficiaries.get(document);
    const fullName = record ? [record.nombres, record.apellido_paterno, record.apellido_materno].filter((part) => !!part).join(" ") : "";
    const expiresAt = new Date(Date.now() + SESSION_MINUTES * 60 * 1e3);
    const response = {
      nombre: fullName,
      rol: "BENEFICIARIO",
      id_empresa: DEMO_COMPANY_ID,
      token: `demo-token-${document}`,
      expiracion: toLimaIsoDateTime(expiresAt)
    };
    return { status: 200, body: response };
  }
  misDatos() {
    const record = this.beneficiaries.get(this.currentDocument);
    if (!record) {
      return { status: 401, body: { mensaje: "Sesi\xF3n no v\xE1lida." } };
    }
    return { status: 200, body: __spreadValues({}, record) };
  }
  /**
   * Same contract as the real PUT: it overwrites every editable column and answers
   * a bare result. The wire key `numero_celular` carries the wallet phone, so it
   * lands in `celular_billetera`; the login contact phone is immutable.
   */
  updateMisDatos(request) {
    const record = this.beneficiaries.get(this.currentDocument);
    if (!record) {
      return { status: 401, body: { mensaje: "Sesi\xF3n no v\xE1lida." } };
    }
    const keepStored = (next, stored) => next?.trim() ? next.trim() : stored ?? "";
    record.nombres = request.nombres;
    record.apellido_paterno = request.apellido_paterno;
    record.apellido_materno = request.apellido_materno;
    record.correo = request.correo;
    record.banco = request.banco;
    record.tipo_cuenta = request.tipo_cuenta;
    record.numero_cuenta = keepStored(request.numero_cuenta, record.numero_cuenta);
    record.cci = keepStored(request.cci, record.cci);
    record.celular_billetera = request.numero_celular;
    record.operador = request.operador;
    record.billetera = request.billetera;
    record.estado_registro = "COMPLETO";
    record.fecha_actualizacion = toApiDateTime(/* @__PURE__ */ new Date());
    return { status: 200, body: { mensaje: "Datos actualizados correctamente." } };
  }
  ensureBeneficiary(documentType, document) {
    let record = this.beneficiaries.get(document);
    if (!record) {
      const now = /* @__PURE__ */ new Date();
      record = document === DEMO_REGISTERED_DOCUMENT ? createRegisteredBeneficiary(now) : createPendingBeneficiary(documentType, document, now);
      this.beneficiaries.set(document, record);
    }
    return record;
  }
};

// src/app/core/interceptors/demo-backend.interceptor.ts
var MIN_LATENCY_MS = 300;
var MAX_LATENCY_MS = 600;
var backend = new DemoBackend();
var demoBackendInterceptor = (req, next) => {
  const isBackendCall = req.url.startsWith(environment.apiUrl) || req.url.startsWith(environment.authUrl);
  if (!isBackendCall) {
    return next(req);
  }
  const path = new URL(req.url, "http://demo.local").pathname;
  const latency = MIN_LATENCY_MS + Math.random() * (MAX_LATENCY_MS - MIN_LATENCY_MS);
  return timer(latency).pipe(mergeMap(() => {
    const { status, body } = backend.handle({ method: req.method, path, body: req.body });
    if (status >= 400) {
      return throwError(() => new HttpErrorResponse({ status, error: body, url: req.url, statusText: "Demo" }));
    }
    return of(new HttpResponse({ status, body, url: req.url }));
  }));
};

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    loadChildren: () => import("./chunk-KNIRH4UF.js")
  },
  { path: "**", redirectTo: "" }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: "enabled", anchorScrolling: "enabled" })),
    provideHttpClient(withFetch(), withInterceptors([
      authTokenInterceptor,
      unauthorizedInterceptor,
      //* demo only: innermost on purpose, so it stands in for the network while token/401 handling still runs
      ...environment.demo ? [demoBackendInterceptor] : []
    ])),
    provideIdentifyServiceProvider(),
    provideInvitationServiceProvider(),
    provideOtpServiceProvider(),
    provideRegistrationServiceProvider(),
    provideProfileServiceProvider(),
    provideCatalogsServiceProvider()
  ]
};

// src/app/app.ts
var App = class _App {
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 1, vars: 0, template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", imports: [RouterOutlet], changeDetection: ChangeDetectionStrategy.OnPush, template: "<router-outlet />\r\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 11 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
