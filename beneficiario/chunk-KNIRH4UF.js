import {
  differenceInSeconds
} from "./chunk-E24Y4RF3.js";
import {
  SessionStore
} from "./chunk-XFM6FQ5T.js";
import {
  InvitationStore
} from "./chunk-XVAJIT6I.js";
import {
  NavigationEnd,
  Router,
  RouterOutlet
} from "./chunk-6CR7NOLI.js";
import "./chunk-S2SB26WJ.js";
import {
  Dialog,
  LegalDialogService,
  LegalDialogs
} from "./chunk-IYV7F7WL.js";
import {
  takeUntilDestroyed,
  toSignal
} from "./chunk-TUFQWTIF.js";
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  NgOptimizedImage,
  filter,
  inject,
  map,
  setClassMetadata,
  signal,
  startWith,
  timer,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-QNDTW3UR.js";

// src/app/core/guards/invitation.guard.ts
var invitationGuard = () => {
  const invitationStore = inject(InvitationStore);
  const router = inject(Router);
  return invitationStore.hasInvitation() ? true : router.createUrlTree(["/registro"]);
};

// src/app/core/guards/session.guard.ts
var sessionGuard = () => {
  const sessionStore = inject(SessionStore);
  const router = inject(Router);
  const expiresAt = sessionStore.expiresAt();
  return expiresAt !== null && expiresAt > Date.now() ? true : router.createUrlTree(["/"]);
};

// src/app/core/layout/portal-layout/portal-layout.ts
function PortalLayout_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngSrc", ctx_r0.invitation().logoUrl)("alt", ctx_r0.invitation().companyName);
  }
}
function PortalLayout_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "aside", 11);
    \u0275\u0275element(1, "img", 16);
    \u0275\u0275elementStart(2, "div", 17);
    \u0275\u0275element(3, "img", 18);
    \u0275\u0275elementStart(4, "p", 19);
    \u0275\u0275text(5, " Recibe bonos e incentivos directamente a tu cuenta bancaria ");
    \u0275\u0275elementEnd()()();
  }
}
var PortalLayout = class _PortalLayout {
  router = inject(Router);
  sessionStore = inject(SessionStore);
  invitationStore = inject(InvitationStore);
  destroyRef = inject(DestroyRef);
  legal = inject(LegalDialogService);
  expiredOpen = signal(false, ...ngDevMode ? [{ debugName: "expiredOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  invitation = this.invitationStore.invitation;
  brandPanel = toSignal(this.router.events.pipe(filter((event) => event instanceof NavigationEnd), startWith(null), map(() => this._deepestRouteBrandPanel())), { initialValue: false });
  constructor() {
    this._watchSessionExpiry();
  }
  endSession() {
    this.sessionStore.clear();
    this.expiredOpen.set(false);
    void this.router.navigate(["/"]);
  }
  /**
   * Dismissing the expired-session dialog by any means (X, Escape) ends the
   * session too: once the session died there is no valid state left to stay in.
   */
  onExpiredOpenChange(open) {
    this.expiredOpen.set(open);
    if (!open) {
      this.endSession();
    }
  }
  /**
   * Session expiry watchdog: a 1s tick compares the expiry timestamp reported by
   * the backend against the clock and announces the end when it hits zero.
   */
  _watchSessionExpiry() {
    timer(1e3, 1e3).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this._onSessionTick());
  }
  _onSessionTick() {
    const expiresAt = this.sessionStore.expiresAt();
    if (expiresAt === null) {
      return;
    }
    const remaining = differenceInSeconds(expiresAt, Date.now());
    if (remaining <= 0) {
      this._announceExpiredSession();
    }
  }
  /**
   * Clearing the store stops the watchdog until a new session starts. The
   * backend session died at that same timestamp, so any later request would 401
   * anyway.
   */
  _announceExpiredSession() {
    this.sessionStore.clear();
    this.expiredOpen.set(true);
  }
  _deepestRouteBrandPanel() {
    let route = this.router.routerState.snapshot.root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route.data["brandPanel"] === true;
  }
  static \u0275fac = function PortalLayout_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PortalLayout)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PortalLayout, selectors: [["app-portal-layout"]], decls: 26, vars: 11, consts: [[1, "min-h-dvh"], [1, "flex", "min-h-dvh", "flex-col"], [1, "mx-auto", "flex", "w-full", "items-center", "justify-between", "px-6", "pt-6", "pb-4"], [1, "company-logo-slot", "flex", "h-[28px]", "w-[78px]", "items-center"], ["width", "78", "height", "28", "priority", "", 3, "ngSrc", "alt"], ["ngSrc", "/logo-bonopay.svg", "width", "76", "height", "32", "alt", "BonoPay", "priority", ""], [1, "mx-auto", "flex", "w-full", "flex-1", "flex-col", "px-6", "pt-2"], [1, "mx-auto", "w-full", "px-6", "pt-10", "pb-8"], [1, "flex", "items-center", "justify-between", "px-2", "text-sm", "text-muted"], ["type", "button", 1, "underline", "underline-offset-2", "transition", "hover:text-ink", 3, "click"], [1, "mt-5", "text-center", "text-sm", "leading-relaxed", "text-muted"], [1, "relative", "hidden", "flex-col", "overflow-hidden", "bg-[#0b3d42]", "p-10", "text-white", "lg:flex"], ["title", "Sesi\xF3n finalizada", 3, "openChange", "open"], [1, "leading-relaxed", "text-muted"], ["dialogFooter", ""], ["type", "button", 1, "w-full", "rounded-full", "bg-primary", "py-3", "text-[15px]", "font-medium", "text-white", "transition", "hover:bg-primary-dark", 3, "click"], ["ngSrc", "/fondo-beneficiario.jpg", "fill", "", "priority", "", "alt", "", 1, "object-cover"], [1, "relative"], ["ngSrc", "/logo-bonopay-blanco.svg", "width", "105", "height", "44", "alt", "BonoPay", "priority", ""], [1, "mt-6", "max-w-[240px]", "text-[22px]", "leading-snug", "font-semibold"]], template: function PortalLayout_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "header", 2)(3, "div", 3);
      \u0275\u0275conditionalCreate(4, PortalLayout_Conditional_4_Template, 1, 2, "img", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275element(5, "img", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "main", 6);
      \u0275\u0275element(7, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "footer", 7)(9, "div", 8)(10, "button", 9);
      \u0275\u0275listener("click", function PortalLayout_Template_button_click_10_listener() {
        return ctx.legal.openTerms();
      });
      \u0275\u0275text(11, " T\xE9rminos de Uso ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 9);
      \u0275\u0275listener("click", function PortalLayout_Template_button_click_12_listener() {
        return ctx.legal.openPrivacy();
      });
      \u0275\u0275text(13, " Privacidad ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "p", 10);
      \u0275\u0275text(15, " \xA9 2026 BonoPay es marca registrada.");
      \u0275\u0275element(16, "br");
      \u0275\u0275text(17, " Todos los derechos reservados ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(18, PortalLayout_Conditional_18_Template, 6, 0, "aside", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275element(19, "app-legal-dialogs");
      \u0275\u0275elementStart(20, "app-dialog", 12);
      \u0275\u0275listener("openChange", function PortalLayout_Template_app_dialog_openChange_20_listener($event) {
        return ctx.onExpiredOpenChange($event);
      });
      \u0275\u0275elementStart(21, "p", 13);
      \u0275\u0275text(22, "Tu sesi\xF3n expir\xF3. Vuelve a ingresar para continuar.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 14)(24, "button", 15);
      \u0275\u0275listener("click", function PortalLayout_Template_button_click_24_listener() {
        return ctx.endSession();
      });
      \u0275\u0275text(25, " Volver a ingresar ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_2_0;
      \u0275\u0275classMap(ctx.brandPanel() ? "lg:grid lg:grid-cols-[1.15fr_1fr]" : "");
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.brandPanel() ? "max-w-[440px]" : "max-w-[440px] lg:max-w-3xl");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(((tmp_2_0 = ctx.invitation()) == null ? null : tmp_2_0.logoUrl) ? 4 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.brandPanel() ? "max-w-[440px]" : "max-w-[440px] lg:max-w-3xl");
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.brandPanel() ? "max-w-[440px]" : "max-w-[440px] lg:max-w-3xl");
      \u0275\u0275advance(10);
      \u0275\u0275conditional(ctx.brandPanel() ? 18 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("open", ctx.expiredOpen());
    }
  }, dependencies: [RouterOutlet, NgOptimizedImage, Dialog, LegalDialogs], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PortalLayout, [{
    type: Component,
    args: [{ selector: "app-portal-layout", imports: [RouterOutlet, NgOptimizedImage, Dialog, LegalDialogs], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="min-h-dvh" [class]="brandPanel() ? 'lg:grid lg:grid-cols-[1.15fr_1fr]' : ''">\r
  <div class="flex min-h-dvh flex-col">\r
    <header\r
      class="mx-auto flex w-full items-center justify-between px-6 pt-6 pb-4"\r
      [class]="brandPanel() ? 'max-w-[440px]' : 'max-w-[440px] lg:max-w-3xl'"\r
    >\r
      <div class="company-logo-slot flex h-[28px] w-[78px] items-center">\r
        @if (invitation()?.logoUrl) {\r
          <img [ngSrc]="invitation()!.logoUrl" width="78" height="28" [alt]="invitation()!.companyName" priority />\r
        }\r
      </div>\r
      <img ngSrc="/logo-bonopay.svg" width="76" height="32" alt="BonoPay" priority />\r
    </header>\r
\r
    <main\r
      class="mx-auto flex w-full flex-1 flex-col px-6 pt-2"\r
      [class]="brandPanel() ? 'max-w-[440px]' : 'max-w-[440px] lg:max-w-3xl'"\r
    >\r
      <router-outlet />\r
    </main>\r
\r
    <footer\r
      class="mx-auto w-full px-6 pt-10 pb-8"\r
      [class]="brandPanel() ? 'max-w-[440px]' : 'max-w-[440px] lg:max-w-3xl'"\r
    >\r
      <div class="flex items-center justify-between px-2 text-sm text-muted">\r
        <button\r
          type="button"\r
          (click)="legal.openTerms()"\r
          class="underline underline-offset-2 transition hover:text-ink"\r
        >\r
          T\xE9rminos de Uso\r
        </button>\r
        <button\r
          type="button"\r
          (click)="legal.openPrivacy()"\r
          class="underline underline-offset-2 transition hover:text-ink"\r
        >\r
          Privacidad\r
        </button>\r
      </div>\r
      <p class="mt-5 text-center text-sm leading-relaxed text-muted">\r
        \xA9 2026 BonoPay es marca registrada.<br />\r
        Todos los derechos reservados\r
      </p>\r
    </footer>\r
  </div>\r
\r
  @if (brandPanel()) {\r
    <!-- Brand panel, desktop only -->\r
    <aside class="relative hidden flex-col overflow-hidden bg-[#0b3d42] p-10 text-white lg:flex">\r
      <img ngSrc="/fondo-beneficiario.jpg" fill priority class="object-cover" alt="" />\r
      <div class="relative">\r
        <img ngSrc="/logo-bonopay-blanco.svg" width="105" height="44" alt="BonoPay" priority />\r
        <p class="mt-6 max-w-[240px] text-[22px] leading-snug font-semibold">\r
          Recibe bonos e incentivos directamente a tu cuenta bancaria\r
        </p>\r
      </div>\r
    </aside>\r
  }\r
</div>\r
\r
<app-legal-dialogs />\r
\r
<app-dialog\r
  [open]="expiredOpen()"\r
  (openChange)="onExpiredOpenChange($event)"\r
  title="Sesi\xF3n finalizada"\r
>\r
  <p class="leading-relaxed text-muted">Tu sesi\xF3n expir\xF3. Vuelve a ingresar para continuar.</p>\r
  <div dialogFooter>\r
    <button\r
      type="button"\r
      (click)="endSession()"\r
      class="w-full rounded-full bg-primary py-3 text-[15px] font-medium text-white transition hover:bg-primary-dark"\r
    >\r
      Volver a ingresar\r
    </button>\r
  </div>\r
</app-dialog>\r
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PortalLayout, { className: "PortalLayout", filePath: "src/app/core/layout/portal-layout/portal-layout.ts", lineNumber: 18 });
})();

// src/app/features/participante/participante.routes.ts
var participante_routes_default = [
  {
    path: "",
    component: PortalLayout,
    children: [
      {
        path: "",
        loadComponent: () => import("./chunk-BTIFKMAO.js"),
        canActivate: [invitationGuard],
        data: { brandPanel: true }
      },
      {
        path: "registro",
        loadComponent: () => import("./chunk-J6ZXJOWB.js"),
        data: { brandPanel: true }
      },
      {
        path: "verificacion",
        loadComponent: () => import("./chunk-YFF2RK42.js"),
        canActivate: [invitationGuard],
        data: { brandPanel: true }
      },
      {
        path: "actualizar",
        loadComponent: () => import("./chunk-XZDYM3E6.js"),
        canActivate: [sessionGuard]
      },
      {
        path: "perfil",
        loadComponent: () => import("./chunk-IDDYUGHK.js"),
        canActivate: [sessionGuard]
      }
    ]
  }
];
export {
  participante_routes_default as default
};
