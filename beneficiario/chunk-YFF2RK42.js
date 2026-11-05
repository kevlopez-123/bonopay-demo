import {
  OTP_PROVIDER
} from "./chunk-FOHGEG6J.js";
import {
  OTP_CODE_LENGTH,
  OTP_RESEND_COOLDOWN_SECONDS
} from "./chunk-QLIUZWYZ.js";
import {
  ParticipanteStore
} from "./chunk-6PZ6VOJ4.js";
import "./chunk-PATQ5ADP.js";
import {
  UtilsHelper
} from "./chunk-AY7TB2CX.js";
import {
  differenceInSeconds
} from "./chunk-E24Y4RF3.js";
import {
  SessionStore
} from "./chunk-XFM6FQ5T.js";
import "./chunk-XVAJIT6I.js";
import {
  Router,
  RouterLink
} from "./chunk-6CR7NOLI.js";
import "./chunk-S2SB26WJ.js";
import {
  Alert,
  CustomWhatsappFilled,
  RefreshOutline
} from "./chunk-IYV7F7WL.js";
import {
  takeUntilDestroyed
} from "./chunk-TUFQWTIF.js";
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  Subject,
  ViewChildren,
  afterNextRender,
  computed,
  constructFrom,
  inject,
  map,
  setClassMetadata,
  signal,
  startWith,
  switchMap,
  takeWhile,
  timer,
  toDate,
  viewChildren,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-QNDTW3UR.js";

// node_modules/date-fns/addMilliseconds.js
function addMilliseconds(date, amount, options) {
  return constructFrom(options?.in || date, +toDate(date) + amount);
}

// node_modules/date-fns/addSeconds.js
function addSeconds(date, amount, options) {
  return addMilliseconds(date, amount * 1e3, options);
}

// src/app/features/participante/pages/otp/otp.ts
var _c0 = ["digit"];
function Otp_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 20, 0);
    \u0275\u0275listener("input", function Otp_For_14_Template_input_input_0_listener($event) {
      const $index_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDigitInput($index_r2, $event));
    })("keydown", function Otp_For_14_Template_input_keydown_0_listener($event) {
      const $index_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDigitKeydown($index_r2, $event));
    })("paste", function Otp_For_14_Template_input_paste_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPaste($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const digit_r4 = ctx.$implicit;
    const $index_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("border-color", ctx_r2.wrongCode() ? "var(--color-danger)" : null);
    \u0275\u0275property("value", digit_r4);
    \u0275\u0275attribute("aria-label", "D\xEDgito " + ($index_r2 + 1));
  }
}
function Otp_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "button", 21);
    \u0275\u0275listener("click", function Otp_Conditional_17_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.resend());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(2, "svg", 22);
    \u0275\u0275text(3, " Reenviar c\xF3digo ");
    \u0275\u0275elementEnd()();
  }
}
function Otp_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, " Podr\xE1s solicitar uno nuevo en ");
    \u0275\u0275elementStart(2, "span", 23);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.secondsLeft(), "s");
  }
}
function Otp_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-alert", 24);
    \u0275\u0275listener("closed", function Otp_Conditional_24_Template_app_alert_closed_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dismissWrongCode());
    });
    \u0275\u0275elementEnd();
  }
}
function Otp_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-alert", 25);
    \u0275\u0275listener("closed", function Otp_Conditional_25_Template_app_alert_closed_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dismissResendFailed());
    });
    \u0275\u0275elementEnd();
  }
}
var Otp = class _Otp {
  otpRepo = inject(OTP_PROVIDER);
  store = inject(ParticipanteStore);
  sessionStore = inject(SessionStore);
  router = inject(Router);
  destroyRef = inject(DestroyRef);
  digitInputs = viewChildren("digit", ...ngDevMode ? [{ debugName: "digitInputs" }] : (
    /* istanbul ignore next */
    []
  ));
  cooldown$ = new Subject();
  digits = signal(Array(OTP_CODE_LENGTH).fill(""), ...ngDevMode ? [{ debugName: "digits" }] : (
    /* istanbul ignore next */
    []
  ));
  secondsLeft = signal(OTP_RESEND_COOLDOWN_SECONDS, ...ngDevMode ? [{ debugName: "secondsLeft" }] : (
    /* istanbul ignore next */
    []
  ));
  verifying = signal(false, ...ngDevMode ? [{ debugName: "verifying" }] : (
    /* istanbul ignore next */
    []
  ));
  wrongCode = signal(false, ...ngDevMode ? [{ debugName: "wrongCode" }] : (
    /* istanbul ignore next */
    []
  ));
  resendFailed = signal(false, ...ngDevMode ? [{ debugName: "resendFailed" }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * No fake fallback: reaching this step requires a phone — identify sets it from
   * the `ingresar` response — so the screen shows the real masked phone or nothing.
   */
  maskedPhone = this.store.maskedPhone;
  canResend = computed(() => this.secondsLeft() === 0, ...ngDevMode ? [{ debugName: "canResend" }] : (
    /* istanbul ignore next */
    []
  ));
  code = computed(() => this.digits().join(""), ...ngDevMode ? [{ debugName: "code" }] : (
    /* istanbul ignore next */
    []
  ));
  codeComplete = computed(() => this.code().length === OTP_CODE_LENGTH, ...ngDevMode ? [{ debugName: "codeComplete" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    this._initCooldown();
    this._focusFirstDigit();
  }
  onDigitInput(index, event) {
    this.wrongCode.set(false);
    const input = event.target;
    const value = UtilsHelper.onlyDigits(input.value).slice(-1);
    input.value = value;
    this.digits.update((digits) => digits.map((d, i) => i === index ? value : d));
    if (value && index < OTP_CODE_LENGTH - 1) {
      this.digitInputs()[index + 1]?.nativeElement.focus();
    }
  }
  onDigitKeydown(index, event) {
    if (event.key === "Backspace" && !this.digits()[index] && index > 0) {
      this.digitInputs()[index - 1]?.nativeElement.focus();
    }
  }
  onPaste(event) {
    event.preventDefault();
    const pasted = UtilsHelper.onlyDigits(event.clipboardData?.getData("text") ?? "");
    if (!pasted) {
      return;
    }
    this.wrongCode.set(false);
    const next = Array(OTP_CODE_LENGTH).fill("").map((_, i) => pasted[i] ?? "");
    this.digits.set(next);
    this.digitInputs().forEach((ref, i) => ref.nativeElement.value = next[i]);
    this.digitInputs()[Math.min(pasted.length, OTP_CODE_LENGTH) - 1]?.nativeElement.focus();
  }
  resend() {
    if (!this.canResend()) {
      return;
    }
    this.resendFailed.set(false);
    this.otpRepo.send().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => this.cooldown$.next(),
      error: () => this.resendFailed.set(true)
    });
  }
  dismissResendFailed() {
    this.resendFailed.set(false);
  }
  verify() {
    if (!this.codeComplete() || this.verifying()) {
      return;
    }
    this.verifying.set(true);
    this.otpRepo.verify(this.code()).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (response) => {
        if (!response.verified) {
          this.verifying.set(false);
          this.wrongCode.set(true);
          return;
        }
        this.sessionStore.setExpiresAt(response.sessionExpiresAt);
        this.store.setActive(response.active);
        void this.router.navigate([response.active ? "/perfil" : "/actualizar"]);
      },
      error: () => this.verifying.set(false)
    });
  }
  dismissWrongCode() {
    this.wrongCode.set(false);
  }
  _initCooldown() {
    this.cooldown$.pipe(startWith(void 0), switchMap(() => this._countdown$()), takeUntilDestroyed(this.destroyRef)).subscribe((seconds) => this.secondsLeft.set(seconds));
  }
  /**
   * Each tick re-reads the distance to a fixed target instead of subtracting one
   * from the previous value. Browsers throttle timers in background tabs and
   * stop them while the device sleeps, so a counter that decrements per tick
   * falls behind the wall clock and keeps the resend button locked long after
   * the cooldown really ended — this one catches up on the next tick.
   */
  _countdown$() {
    const targetAt = addSeconds(/* @__PURE__ */ new Date(), OTP_RESEND_COOLDOWN_SECONDS);
    return timer(0, 1e3).pipe(map(() => Math.max(differenceInSeconds(targetAt, /* @__PURE__ */ new Date(), { roundingMethod: "round" }), 0)), takeWhile((seconds) => seconds > 0, true));
  }
  _focusFirstDigit() {
    afterNextRender(() => this.digitInputs()[0]?.nativeElement.focus());
  }
  static \u0275fac = function Otp_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Otp)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Otp, selectors: [["app-otp-page"]], viewQuery: function Otp_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.digitInputs, _c0, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, decls: 26, vars: 7, consts: [["digit", ""], [1, "overflow-hidden", "rounded-2xl", "bg-white", "shadow-[0_10px_30px_rgba(31,42,64,0.08)]"], [1, "h-3", "bg-primary"], [1, "px-5", "pt-8", "pb-9"], [1, "mx-auto", "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-full", "bg-field"], ["CustomWhatsappFilled", "", "aria-hidden", "true", 1, "h-6", "w-6", "text-ink"], [1, "mt-4", "text-center", "text-[22px]", "font-semibold"], [1, "mx-auto", "mt-2", "max-w-[300px]", "text-center", "leading-relaxed", "text-muted"], [1, "font-semibold", "text-ink"], [3, "submit"], ["role", "group", "aria-label", "C\xF3digo de 6 d\xEDgitos", 1, "mt-6", "grid", "grid-cols-6", "overflow-hidden", "rounded-xl", "border", "border-line"], ["type", "text", "inputmode", "numeric", "maxlength", "1", "autocomplete", "one-time-code", 1, "h-14", "w-full", "border-l", "border-line", "text-center", "text-lg", "font-medium", "outline-none", "first:border-l-0", "focus:bg-field", 3, "value", "border-color"], [1, "mt-6", "text-center", "text-muted"], [1, "mt-3", "flex", "justify-center"], [1, "mt-1", "text-center", "text-muted"], ["type", "submit", 1, "mt-7", "w-full", "rounded-full", "bg-primary", "py-3.5", "text-[15px]", "font-medium", "text-white", "transition", "hover:bg-primary-dark", "disabled:bg-[#e9e9e9]", "disabled:text-[#a9adb5]", 3, "disabled"], [1, "mt-5", "text-center"], ["routerLink", "/", 1, "text-[15px]", "font-medium", "text-ink", "underline", "underline-offset-2"], ["title", "C\xF3digo incorrecto", "message", "Verifica e intenta de nuevo.", 1, "mt-6", "block"], ["title", "No pudimos reenviar el c\xF3digo", "message", "Intenta de nuevo en unos segundos.", 1, "mt-6", "block"], ["type", "text", "inputmode", "numeric", "maxlength", "1", "autocomplete", "one-time-code", 1, "h-14", "w-full", "border-l", "border-line", "text-center", "text-lg", "font-medium", "outline-none", "first:border-l-0", "focus:bg-field", 3, "input", "keydown", "paste", "value"], ["type", "button", 1, "flex", "items-center", "gap-2", "rounded-full", "bg-primary-soft", "px-5", "py-2.5", "text-[15px]", "font-medium", "text-primary", "transition", "hover:bg-primary/20", 3, "click"], ["solarRefreshOutline", "", "aria-hidden", "true", 1, "h-4", "w-4"], [1, "font-medium", "text-primary"], ["title", "C\xF3digo incorrecto", "message", "Verifica e intenta de nuevo.", 1, "mt-6", "block", 3, "closed"], ["title", "No pudimos reenviar el c\xF3digo", "message", "Intenta de nuevo en unos segundos.", 1, "mt-6", "block", 3, "closed"]], template: function Otp_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 1);
      \u0275\u0275element(1, "div", 2);
      \u0275\u0275elementStart(2, "div", 3)(3, "div", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275element(4, "svg", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(5, "h1", 6);
      \u0275\u0275text(6, "C\xF3digo de verificaci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 7);
      \u0275\u0275text(8, " Hemos enviado un c\xF3digo de 6 d\xEDgitos a tu WhatsApp ");
      \u0275\u0275elementStart(9, "strong", 8);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "form", 9);
      \u0275\u0275listener("submit", function Otp_Template_form_submit_11_listener($event) {
        $event.preventDefault();
        return ctx.verify();
      });
      \u0275\u0275elementStart(12, "div", 10);
      \u0275\u0275repeaterCreate(13, Otp_For_14_Template, 2, 4, "input", 11, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p", 12);
      \u0275\u0275text(16, "\xBFNo recibiste el c\xF3digo?");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(17, Otp_Conditional_17_Template, 4, 0, "div", 13)(18, Otp_Conditional_18_Template, 4, 1, "p", 14);
      \u0275\u0275elementStart(19, "button", 15);
      \u0275\u0275text(20, " Verificar c\xF3digo ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 16)(22, "a", 17);
      \u0275\u0275text(23, " Cancelar verificaci\xF3n ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(24, Otp_Conditional_24_Template, 1, 0, "app-alert", 18);
      \u0275\u0275conditionalCreate(25, Otp_Conditional_25_Template, 1, 0, "app-alert", 19);
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.maskedPhone());
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("border-color", ctx.wrongCode() ? "var(--color-danger)" : null);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.digits());
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.canResend() ? 17 : 18);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.codeComplete() || ctx.verifying());
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.wrongCode() ? 24 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.resendFailed() ? 25 : -1);
    }
  }, dependencies: [RouterLink, Alert, RefreshOutline, CustomWhatsappFilled], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Otp, [{
    type: Component,
    args: [{ selector: "app-otp-page", imports: [RouterLink, Alert, RefreshOutline, CustomWhatsappFilled], changeDetection: ChangeDetectionStrategy.OnPush, template: `<section class="overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(31,42,64,0.08)]">\r
  <div class="h-3 bg-primary"></div>\r
\r
  <div class="px-5 pt-8 pb-9">\r
    <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-field">\r
      <svg CustomWhatsappFilled class="h-6 w-6 text-ink" aria-hidden="true"></svg>\r
    </div>\r
\r
    <h1 class="mt-4 text-center text-[22px] font-semibold">C\xF3digo de verificaci\xF3n</h1>\r
    <p class="mx-auto mt-2 max-w-[300px] text-center leading-relaxed text-muted">\r
      Hemos enviado un c\xF3digo de 6 d\xEDgitos a tu WhatsApp\r
      <strong class="font-semibold text-ink">{{ maskedPhone() }}</strong>\r
    </p>\r
\r
    <form (submit)="$event.preventDefault(); verify()">\r
      <div\r
        class="mt-6 grid grid-cols-6 overflow-hidden rounded-xl border border-line"\r
        role="group"\r
        aria-label="C\xF3digo de 6 d\xEDgitos"\r
        [style.border-color]="wrongCode() ? 'var(--color-danger)' : null"\r
      >\r
        @for (digit of digits(); track $index) {\r
          <input\r
            #digit\r
            type="text"\r
            inputmode="numeric"\r
            maxlength="1"\r
            autocomplete="one-time-code"\r
            [attr.aria-label]="'D\xEDgito ' + ($index + 1)"\r
            [value]="digit"\r
            (input)="onDigitInput($index, $event)"\r
            (keydown)="onDigitKeydown($index, $event)"\r
            (paste)="onPaste($event)"\r
            class="h-14 w-full border-l border-line text-center text-lg font-medium outline-none first:border-l-0 focus:bg-field"\r
            [style.border-color]="wrongCode() ? 'var(--color-danger)' : null"\r
          />\r
        }\r
      </div>\r
\r
      <p class="mt-6 text-center text-muted">\xBFNo recibiste el c\xF3digo?</p>\r
\r
      @if (canResend()) {\r
        <div class="mt-3 flex justify-center">\r
          <button\r
            type="button"\r
            (click)="resend()"\r
            class="flex items-center gap-2 rounded-full bg-primary-soft px-5 py-2.5 text-[15px] font-medium text-primary transition hover:bg-primary/20"\r
          >\r
            <svg solarRefreshOutline class="h-4 w-4" aria-hidden="true"></svg>\r
            Reenviar c\xF3digo\r
          </button>\r
        </div>\r
      } @else {\r
        <p class="mt-1 text-center text-muted">\r
          Podr\xE1s solicitar uno nuevo en\r
          <span class="font-medium text-primary">{{ secondsLeft() }}s</span>\r
        </p>\r
      }\r
\r
      <button\r
        type="submit"\r
        [disabled]="!codeComplete() || verifying()"\r
        class="mt-7 w-full rounded-full bg-primary py-3.5 text-[15px] font-medium text-white transition hover:bg-primary-dark disabled:bg-[#e9e9e9] disabled:text-[#a9adb5]"\r
      >\r
        Verificar c\xF3digo\r
      </button>\r
    </form>\r
\r
    <div class="mt-5 text-center">\r
      <a routerLink="/" class="text-[15px] font-medium text-ink underline underline-offset-2">\r
        Cancelar verificaci\xF3n\r
      </a>\r
    </div>\r
  </div>\r
</section>\r
\r
@if (wrongCode()) {\r
  <app-alert\r
    class="mt-6 block"\r
    title="C\xF3digo incorrecto"\r
    message="Verifica e intenta de nuevo."\r
    (closed)="dismissWrongCode()"\r
  />\r
}\r
@if (resendFailed()) {\r
  <app-alert\r
    class="mt-6 block"\r
    title="No pudimos reenviar el c\xF3digo"\r
    message="Intenta de nuevo en unos segundos."\r
    (closed)="dismissResendFailed()"\r
  />\r
}\r
` }]
  }], () => [], { digitInputs: [{ type: ViewChildren, args: ["digit", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Otp, { className: "Otp", filePath: "src/app/features/participante/pages/otp/otp.ts", lineNumber: 33 });
})();
export {
  Otp as default
};
