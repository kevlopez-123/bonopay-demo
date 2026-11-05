import {
  DOCUMENT_INPUT_MODES,
  DOCUMENT_MAX_LENGTHS,
  DOCUMENT_PLACEHOLDERS,
  FIELD_ERROR_DEFAULT_MESSAGES,
  PHONE_FORMAT_GROUP_PATTERN,
  PHONE_FORMAT_MAX_DIGITS,
  UtilsHelper
} from "./chunk-AY7TB2CX.js";
import {
  takeUntilDestroyed
} from "./chunk-TUFQWTIF.js";
import {
  DestroyRef,
  Directive,
  Input,
  NgControl,
  __spreadProps,
  __spreadValues,
  computed,
  effect,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵɵattribute,
  ɵɵdefineDirective,
  ɵɵlistener,
  ɵɵstyleProp
} from "./chunk-QNDTW3UR.js";

// src/app/shared/directives/document-input.directive.ts
var DocumentInputDirective = class _DocumentInputDirective {
  ngControl = inject(NgControl);
  documentType = input.required(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "documentType" } : (
    /* istanbul ignore next */
    {}
  )), { alias: "appDocumentInput" }));
  maxLength = computed(() => DOCUMENT_MAX_LENGTHS[this.documentType()], ...ngDevMode ? [{ debugName: "maxLength" }] : (
    /* istanbul ignore next */
    []
  ));
  inputMode = computed(() => DOCUMENT_INPUT_MODES[this.documentType()], ...ngDevMode ? [{ debugName: "inputMode" }] : (
    /* istanbul ignore next */
    []
  ));
  placeholder = computed(() => DOCUMENT_PLACEHOLDERS[this.documentType()], ...ngDevMode ? [{ debugName: "placeholder" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    this._clearOnTypeChange();
  }
  _clearOnTypeChange() {
    let isFirstRun = true;
    effect(() => {
      this.documentType();
      if (isFirstRun) {
        isFirstRun = false;
        return;
      }
      this.ngControl.control?.reset("");
    });
  }
  static \u0275fac = function DocumentInputDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DocumentInputDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _DocumentInputDirective, selectors: [["input", "appDocumentInput", ""]], hostVars: 3, hostBindings: function DocumentInputDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("maxlength", ctx.maxLength())("inputmode", ctx.inputMode())("placeholder", ctx.placeholder());
    }
  }, inputs: { documentType: [1, "appDocumentInput", "documentType"] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocumentInputDirective, [{
    type: Directive,
    args: [{
      selector: "input[appDocumentInput]",
      host: {
        "[attr.maxlength]": "maxLength()",
        "[attr.inputmode]": "inputMode()",
        "[attr.placeholder]": "placeholder()"
      }
    }]
  }], () => [], { documentType: [{ type: Input, args: [{ isSignal: true, alias: "appDocumentInput", required: true }] }] });
})();

// src/app/shared/directives/field-error.directive.ts
var FieldErrorDirective = class _FieldErrorDirective {
  ngControl = inject(NgControl, { self: true });
  destroyRef = inject(DestroyRef);
  overrides = input({}, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "overrides" } : (
    /* istanbul ignore next */
    {}
  )), { alias: "errorMessages" }));
  tick = signal(0, ...ngDevMode ? [{ debugName: "tick" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this._trackControlEvents();
  }
  show = computed(() => {
    this.tick();
    const control = this.ngControl.control;
    return !!control && control.invalid && control.touched;
  }, ...ngDevMode ? [{ debugName: "show" }] : (
    /* istanbul ignore next */
    []
  ));
  message = computed(() => {
    this.tick();
    const errors = this.ngControl.control?.errors;
    if (!errors) {
      return "";
    }
    const key = Object.keys(errors)[0];
    return this.overrides()[key] ?? FIELD_ERROR_DEFAULT_MESSAGES[key] ?? "Revisa este campo";
  }, ...ngDevMode ? [{ debugName: "message" }] : (
    /* istanbul ignore next */
    []
  ));
  _trackControlEvents() {
    this.ngControl.control?.events.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.tick.update((value) => value + 1));
  }
  static \u0275fac = function FieldErrorDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FieldErrorDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _FieldErrorDirective, selectors: [["", "appFieldError", ""]], hostVars: 2, hostBindings: function FieldErrorDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275styleProp("border-color", ctx.show() ? "var(--color-danger)" : null);
    }
  }, inputs: { overrides: [1, "errorMessages", "overrides"] }, exportAs: ["appFieldError"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FieldErrorDirective, [{
    type: Directive,
    args: [{
      selector: "[appFieldError]",
      exportAs: "appFieldError",
      host: {
        "[style.border-color]": "show() ? 'var(--color-danger)' : null"
      }
    }]
  }], null, { overrides: [{ type: Input, args: [{ isSignal: true, alias: "errorMessages", required: false }] }] });
})();

// src/app/shared/directives/phone-format.directive.ts
var PhoneFormatDirective = class _PhoneFormatDirective {
  ngControl = inject(NgControl);
  formatValue(event) {
    const input2 = event.target;
    const digits = UtilsHelper.onlyDigits(input2.value).slice(0, PHONE_FORMAT_MAX_DIGITS);
    const formatted = digits.replace(PHONE_FORMAT_GROUP_PATTERN, "$1 ");
    if (formatted !== input2.value) {
      this.ngControl.control?.setValue(formatted);
    }
  }
  static \u0275fac = function PhoneFormatDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PhoneFormatDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _PhoneFormatDirective, selectors: [["input", "appPhoneFormat", ""]], hostBindings: function PhoneFormatDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("input", function PhoneFormatDirective_input_HostBindingHandler($event) {
        return ctx.formatValue($event);
      });
    }
  } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PhoneFormatDirective, [{
    type: Directive,
    args: [{
      selector: "input[appPhoneFormat]",
      host: { "(input)": "formatValue($event)" }
    }]
  }], null, null);
})();

export {
  DocumentInputDirective,
  FieldErrorDirective,
  PhoneFormatDirective
};
