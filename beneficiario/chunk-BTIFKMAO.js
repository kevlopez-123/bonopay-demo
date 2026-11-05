import {
  IDENTIFY_PROVIDER
} from "./chunk-LFFV3CNE.js";
import {
  DocumentInputDirective,
  FieldErrorDirective
} from "./chunk-6X2Q37RP.js";
import {
  CATALOGS_PROVIDER
} from "./chunk-EXI3YIIZ.js";
import {
  ParticipanteStore
} from "./chunk-6PZ6VOJ4.js";
import "./chunk-PATQ5ADP.js";
import {
  DOCUMENT_PATTERNS,
  ValidatorsHelper
} from "./chunk-AY7TB2CX.js";
import {
  SessionStore
} from "./chunk-XFM6FQ5T.js";
import "./chunk-XVAJIT6I.js";
import {
  Router
} from "./chunk-6CR7NOLI.js";
import {
  Alert,
  DangerCircleBold,
  Select
} from "./chunk-IYV7F7WL.js";
import {
  takeUntilDestroyed
} from "./chunk-TUFQWTIF.js";
import {
  ChangeDetectionStrategy,
  Component,
  DefaultValueAccessor,
  DestroyRef,
  FormControlName,
  FormGroupDirective,
  HttpErrorResponse,
  NgControlStatus,
  NgControlStatusGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  inject,
  setClassMetadata,
  signal,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext
} from "./chunk-QNDTW3UR.js";

// src/app/features/participante/pages/identify/identify.ts
function Identify_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 13);
  }
}
function Identify_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-alert", 16);
    \u0275\u0275listener("closed", function Identify_Conditional_23_Template_app_alert_closed_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dismissNotFound());
    });
    \u0275\u0275elementEnd();
  }
}
var Identify = class _Identify {
  fb = inject(NonNullableFormBuilder);
  identifyRepo = inject(IDENTIFY_PROVIDER);
  catalogsRepo = inject(CATALOGS_PROVIDER);
  store = inject(ParticipanteStore);
  sessionStore = inject(SessionStore);
  router = inject(Router);
  destroyRef = inject(DestroyRef);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  documentTypes = signal(Object.keys(DOCUMENT_PATTERNS), ...ngDevMode ? [{ debugName: "documentTypes" }] : (
    /* istanbul ignore next */
    []
  ));
  documentType = signal("DNI", ...ngDevMode ? [{ debugName: "documentType" }] : (
    /* istanbul ignore next */
    []
  ));
  notFound = signal(false, ...ngDevMode ? [{ debugName: "notFound" }] : (
    /* istanbul ignore next */
    []
  ));
  form = this.fb.group({
    documentType: this.fb.control("DNI"),
    documentNumber: this.fb.control("", ValidatorsHelper.document("DNI"))
  });
  constructor() {
    this._resetSession();
    this._initForm();
    this._initCatalogs();
  }
  submit() {
    if (this.form.invalid || this.loading()) {
      return;
    }
    this.notFound.set(false);
    const { documentType, documentNumber } = this.form.getRawValue();
    this.loading.set(true);
    this.identifyRepo.identify({ documentType, documentNumber }).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (res) => {
        this.store.setIdentity(documentType, documentNumber, res.maskedPhone);
        void this.router.navigate(["/verificacion"]);
      },
      error: (error) => {
        this.loading.set(false);
        if (error instanceof HttpErrorResponse && error.status === 404) {
          this._showNotFound();
        }
      }
    });
  }
  dismissNotFound() {
    this.notFound.set(false);
  }
  _resetSession() {
    this.store.reset();
    this.sessionStore.clear();
  }
  _initForm() {
    this.form.controls.documentType.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((type) => {
      this.documentType.set(type);
      this.form.controls.documentNumber.setValidators(ValidatorsHelper.document(type));
      this.form.controls.documentNumber.updateValueAndValidity();
    });
  }
  _initCatalogs() {
    this.catalogsRepo.getDocumentTypes().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((types) => this.documentTypes.set(types));
  }
  _showNotFound() {
    this.notFound.set(true);
    this._paintDocumentError("notFound");
  }
  _paintDocumentError(key) {
    const control = this.form.controls.documentNumber;
    control.setErrors({ [key]: true });
    control.markAsTouched();
  }
  static \u0275fac = function Identify_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Identify)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Identify, selectors: [["app-identify-page"]], decls: 24, vars: 6, consts: [["documentError", "appFieldError"], [1, "overflow-hidden", "rounded-2xl", "bg-white", "shadow-[0_10px_30px_rgba(31,42,64,0.08)]"], [1, "h-3", "bg-primary"], [1, "px-5", "pt-7", "pb-8", 3, "ngSubmit", "formGroup"], [1, "text-center", "text-[26px]", "font-semibold"], [1, "mt-1", "text-center", "text-muted"], ["for", "document-type", 1, "mt-7", "block", "text-[15px]", "font-medium"], [1, "text-danger"], [1, "mt-2"], ["selectId", "document-type", "formControlName", "documentType", 3, "options"], ["for", "document-number", 1, "mt-6", "block", "text-[15px]", "font-medium"], [1, "relative", "mt-2"], ["id", "document-number", "formControlName", "documentNumber", "appFieldError", "", "type", "text", "autocomplete", "off", 1, "w-full", "rounded-xl", "border", "border-line", "bg-field", "px-4", "py-3.5", "pr-11", "text-[15px]", "outline-none", "placeholder:text-muted/70", "focus:border-ink", 3, "appDocumentInput"], ["solarDangerCircleBold", "", "aria-hidden", "true", 1, "pointer-events-none", "absolute", "top-1/2", "right-4", "h-5", "w-5", "-translate-y-1/2", "text-primary"], ["type", "submit", 1, "mt-9", "w-full", "rounded-full", "bg-primary", "py-3.5", "text-[15px]", "font-medium", "text-white", "transition", "hover:bg-primary-dark", "disabled:bg-[#e9e9e9]", "disabled:text-[#a9adb5]", 3, "disabled"], ["title", "Usuario no encontrado", "message", "Verifica e intenta de nuevo.", 1, "mt-6", "block"], ["title", "Usuario no encontrado", "message", "Verifica e intenta de nuevo.", 1, "mt-6", "block", 3, "closed"]], template: function Identify_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 1);
      \u0275\u0275element(1, "div", 2);
      \u0275\u0275elementStart(2, "form", 3);
      \u0275\u0275listener("ngSubmit", function Identify_Template_form_ngSubmit_2_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(3, "h1", 4);
      \u0275\u0275text(4, "Bienvenido");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 5);
      \u0275\u0275text(6, "Identificate antes de continuar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "label", 6);
      \u0275\u0275text(8, " Tipo de documento");
      \u0275\u0275elementStart(9, "span", 7);
      \u0275\u0275text(10, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 8);
      \u0275\u0275element(12, "app-select", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "label", 10);
      \u0275\u0275text(14, " N\xB0 de documento");
      \u0275\u0275elementStart(15, "span", 7);
      \u0275\u0275text(16, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 11);
      \u0275\u0275element(18, "input", 12, 0);
      \u0275\u0275conditionalCreate(20, Identify_Conditional_20_Template, 1, 0, ":svg:svg", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "button", 14);
      \u0275\u0275text(22, " Continuar ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(23, Identify_Conditional_23_Template, 1, 0, "app-alert", 15);
    }
    if (rf & 2) {
      const documentError_r3 = \u0275\u0275reference(19);
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(10);
      \u0275\u0275property("options", ctx.documentTypes());
      \u0275\u0275advance(6);
      \u0275\u0275property("appDocumentInput", ctx.documentType());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(documentError_r3.show() ? 20 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.form.invalid || ctx.loading());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.notFound() ? 23 : -1);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, Alert, Select, DocumentInputDirective, FieldErrorDirective, DangerCircleBold], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Identify, [{
    type: Component,
    args: [{ selector: "app-identify-page", imports: [ReactiveFormsModule, Alert, Select, DocumentInputDirective, FieldErrorDirective, DangerCircleBold], changeDetection: ChangeDetectionStrategy.OnPush, template: '<section class="overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(31,42,64,0.08)]">\r\n  <div class="h-3 bg-primary"></div>\r\n\r\n  <form class="px-5 pt-7 pb-8" [formGroup]="form" (ngSubmit)="submit()">\r\n    <h1 class="text-center text-[26px] font-semibold">Bienvenido</h1>\r\n    <p class="mt-1 text-center text-muted">Identificate antes de continuar</p>\r\n\r\n    <label class="mt-7 block text-[15px] font-medium" for="document-type">\r\n      Tipo de documento<span class="text-danger">*</span>\r\n    </label>\r\n    <div class="mt-2">\r\n      <app-select\r\n        selectId="document-type"\r\n        formControlName="documentType"\r\n        [options]="documentTypes()"\r\n      />\r\n    </div>\r\n\r\n    <label class="mt-6 block text-[15px] font-medium" for="document-number">\r\n      N\xB0 de documento<span class="text-danger">*</span>\r\n    </label>\r\n    <div class="relative mt-2">\r\n      <input\r\n        id="document-number"\r\n        formControlName="documentNumber"\r\n        [appDocumentInput]="documentType()"\r\n        appFieldError\r\n        #documentError="appFieldError"\r\n        type="text"\r\n        autocomplete="off"\r\n        class="w-full rounded-xl border border-line bg-field px-4 py-3.5 pr-11 text-[15px] outline-none placeholder:text-muted/70 focus:border-ink"\r\n      />\r\n      @if (documentError.show()) {\r\n        <svg\r\n          solarDangerCircleBold\r\n          class="pointer-events-none absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 text-primary"\r\n          aria-hidden="true"\r\n        ></svg>\r\n      }\r\n    </div>\r\n\r\n    <button\r\n      type="submit"\r\n      [disabled]="form.invalid || loading()"\r\n      class="mt-9 w-full rounded-full bg-primary py-3.5 text-[15px] font-medium text-white transition hover:bg-primary-dark disabled:bg-[#e9e9e9] disabled:text-[#a9adb5]"\r\n    >\r\n      Continuar\r\n    </button>\r\n  </form>\r\n</section>\r\n\r\n@if (notFound()) {\r\n  <app-alert\r\n    class="mt-6 block"\r\n    title="Usuario no encontrado"\r\n    message="Verifica e intenta de nuevo."\r\n    (closed)="dismissNotFound()"\r\n  />\r\n}\r\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Identify, { className: "Identify", filePath: "src/app/features/participante/pages/identify/identify.ts", lineNumber: 24 });
})();
export {
  Identify as default
};
