import {
  INVITATION_PROVIDER
} from "./chunk-VJESIHCJ.js";
import {
  ValidateHelper
} from "./chunk-AY7TB2CX.js";
import {
  InvitationStore
} from "./chunk-XVAJIT6I.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-6CR7NOLI.js";
import {
  takeUntilDestroyed
} from "./chunk-TUFQWTIF.js";
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-QNDTW3UR.js";

// src/app/features/participante/pages/registro/registro.ts
function Registro_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 3);
    \u0275\u0275domElementStart(1, "p", 4);
    \u0275\u0275text(2, "Validando tu invitaci\xF3n\u2026");
    \u0275\u0275domElementEnd();
  }
}
function Registro_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "h1", 5);
    \u0275\u0275text(1, "Enlace inv\xE1lido");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "p", 6);
    \u0275\u0275text(3, " El enlace no es v\xE1lido. Verifica que lo copiaste completo o solicita uno nuevo a tu empresa. ");
    \u0275\u0275domElementEnd();
  }
}
function Registro_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "h1", 5);
    \u0275\u0275text(1, "Acceso solo por invitaci\xF3n");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "p", 6);
    \u0275\u0275text(3, " Para completar tu registro, ingresa desde el enlace que te enviamos por invitaci\xF3n. ");
    \u0275\u0275domElementEnd();
  }
}
var Registro = class _Registro {
  route = inject(ActivatedRoute);
  invitationRepo = inject(INVITATION_PROVIDER);
  invitationStore = inject(InvitationStore);
  router = inject(Router);
  destroyRef = inject(DestroyRef);
  state = signal("validating", ...ngDevMode ? [{ debugName: "state" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    this._openInvitation();
  }
  /**
   * The `token` query-param name is fixed by the backend: `InvitacionService.LINK_BASE`
   * hardcodes `?token=` in the links it mints, so it is part of the contract.
   */
  _openInvitation() {
    this.invitationStore.clear();
    const token = ValidateHelper.toString(this.route.snapshot.queryParamMap.get("token"), {
      trim: true
    });
    if (ValidateHelper.isEmpty(token)) {
      this.state.set("missing");
      return;
    }
    this.invitationRepo.open(token).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (invitation) => {
        this._resolveInvitation(token, invitation);
      },
      error: () => this.state.set("invalid")
    });
  }
  _resolveInvitation(token, invitation) {
    this.invitationStore.setInvitation(token, invitation);
    void this.router.navigate(["/"]);
  }
  static \u0275fac = function Registro_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Registro)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Registro, selectors: [["app-registro-page"]], hostAttrs: [1, "my-auto"], decls: 6, vars: 1, consts: [[1, "overflow-hidden", "rounded-2xl", "bg-white", "shadow-[0_10px_30px_rgba(31,42,64,0.08)]"], [1, "h-3", "bg-primary"], [1, "px-5", "pt-7", "pb-8", "text-center"], ["aria-hidden", "true", 1, "mx-auto", "h-10", "w-10", "animate-spin", "rounded-full", "border-4", "border-line", "border-t-primary"], ["role", "status", 1, "mt-5", "text-muted"], [1, "text-[26px]", "font-semibold"], [1, "mt-3", "text-muted"]], template: function Registro_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0);
      \u0275\u0275domElement(1, "div", 1);
      \u0275\u0275domElementStart(2, "div", 2);
      \u0275\u0275conditionalCreate(3, Registro_Case_3_Template, 3, 0)(4, Registro_Case_4_Template, 4, 0)(5, Registro_Case_5_Template, 4, 0);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(3);
      \u0275\u0275conditional((tmp_0_0 = ctx.state()) === "validating" ? 3 : tmp_0_0 === "invalid" ? 4 : tmp_0_0 === "missing" ? 5 : -1);
    }
  }, encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Registro, [{
    type: Component,
    args: [{ selector: "app-registro-page", host: { class: "my-auto" }, changeDetection: ChangeDetectionStrategy.OnPush, template: `<section class="overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(31,42,64,0.08)]">\r
  <div class="h-3 bg-primary"></div>\r
\r
  <div class="px-5 pt-7 pb-8 text-center">\r
    @switch (state()) {\r
      @case ('validating') {\r
        <div\r
          class="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-line border-t-primary"\r
          aria-hidden="true"\r
        ></div>\r
        <p class="mt-5 text-muted" role="status">Validando tu invitaci\xF3n\u2026</p>\r
      }\r
      @case ('invalid') {\r
        <h1 class="text-[26px] font-semibold">Enlace inv\xE1lido</h1>\r
        <p class="mt-3 text-muted">\r
          El enlace no es v\xE1lido. Verifica que lo copiaste completo o solicita uno nuevo a tu\r
          empresa.\r
        </p>\r
      }\r
      @case ('missing') {\r
        <h1 class="text-[26px] font-semibold">Acceso solo por invitaci\xF3n</h1>\r
        <p class="mt-3 text-muted">\r
          Para completar tu registro, ingresa desde el enlace que te enviamos por invitaci\xF3n.\r
        </p>\r
      }\r
    }\r
  </div>\r
</section>\r
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Registro, { className: "Registro", filePath: "src/app/features/participante/pages/registro/registro.ts", lineNumber: 15 });
})();
export {
  Registro as default
};
