import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  DestroyRef,
  Directive,
  Injectable,
  Input,
  NG_VALUE_ACCESSOR,
  Output,
  ViewChild,
  ViewEncapsulation,
  computed,
  effect,
  forwardRef,
  inject,
  input,
  model,
  output,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-QNDTW3UR.js";

// node_modules/@solar-icons/angular/dist/lib/icon-base.js
var IconBase = class _IconBase {
  alt = input(...ngDevMode ? [void 0, {
    debugName: "alt"
  }] : []);
  size = input("1em", ...ngDevMode ? [{
    debugName: "size"
  }] : []);
  color = input("currentColor", ...ngDevMode ? [{
    debugName: "color"
  }] : []);
  mirrored = input(false, ...ngDevMode ? [{
    debugName: "mirrored"
  }] : []);
  static \u0275fac = function IconBase_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IconBase)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _IconBase,
    hostAttrs: ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", 1, "solar-icon"],
    hostVars: 6,
    hostBindings: function IconBase_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("width", ctx.size())("height", ctx.size())("transform", ctx.mirrored() ? "scale(-1, 1)" : null)("aria-hidden", ctx.alt() ? null : "true");
        \u0275\u0275styleProp("color", ctx.color());
      }
    },
    inputs: {
      alt: [1, "alt"],
      size: [1, "size"],
      color: [1, "color"],
      mirrored: [1, "mirrored"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconBase, [{
    type: Directive,
    args: [{
      standalone: true,
      host: {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
        class: "solar-icon",
        "[attr.width]": "size()",
        "[attr.height]": "size()",
        "[style.color]": "color()",
        "[attr.transform]": 'mirrored() ? "scale(-1, 1)" : null',
        "[attr.aria-hidden]": 'alt() ? null : "true"'
      }
    }]
  }], null, {
    alt: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "alt",
        required: false
      }]
    }],
    size: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "size",
        required: false
      }]
    }],
    color: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "color",
        required: false
      }]
    }],
    mirrored: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "mirrored",
        required: false
      }]
    }]
  });
})();

// node_modules/@solar-icons/angular/dist/icons/arrows/Outline/AltArrowDownOutline.js
var _c0 = ["solarAltArrowDownOutline", ""];
function AltArrowDownOutline_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "title");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx);
  }
}
var AltArrowDownOutline = class _AltArrowDownOutline extends IconBase {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AltArrowDownOutline_BaseFactory;
    return function AltArrowDownOutline_Factory(__ngFactoryType__) {
      return (\u0275AltArrowDownOutline_BaseFactory || (\u0275AltArrowDownOutline_BaseFactory = \u0275\u0275getInheritedFactory(_AltArrowDownOutline)))(__ngFactoryType__ || _AltArrowDownOutline);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _AltArrowDownOutline,
    selectors: [["svg", "solarAltArrowDownOutline", ""]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c0,
    decls: 2,
    vars: 1,
    consts: [["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M4.43057 8.51192C4.70014 8.19743 5.17361 8.161 5.48811 8.43057L12 14.0122L18.5119 8.43057C18.8264 8.16101 19.2999 8.19743 19.5695 8.51192C19.839 8.82642 19.8026 9.29989 19.4881 9.56946L12.4881 15.5695C12.2072 15.8102 11.7928 15.8102 11.5119 15.5695L4.51192 9.56946C4.19743 9.29989 4.161 8.82641 4.43057 8.51192Z", "fill", "currentColor"]],
    template: function AltArrowDownOutline_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, AltArrowDownOutline_Conditional_0_Template, 2, 1, "title");
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(1, "path", 0);
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional((tmp_0_0 = ctx.alt()) ? 0 : -1, tmp_0_0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AltArrowDownOutline, [{
    type: Component,
    args: [{
      selector: "svg[solarAltArrowDownOutline]",
      template: `@if (alt(); as title) { <title>{{ title }}</title> }<svg:path fill-rule="evenodd" clip-rule="evenodd" d="M4.43057 8.51192C4.70014 8.19743 5.17361 8.161 5.48811 8.43057L12 14.0122L18.5119 8.43057C18.8264 8.16101 19.2999 8.19743 19.5695 8.51192C19.839 8.82642 19.8026 9.29989 19.4881 9.56946L12.4881 15.5695C12.2072 15.8102 11.7928 15.8102 11.5119 15.5695L4.51192 9.56946C4.19743 9.29989 4.161 8.82641 4.43057 8.51192Z" fill="currentColor"></svg:path>`,
      standalone: true,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();

// node_modules/@solar-icons/angular/dist/icons/arrows/Outline/RefreshOutline.js
var _c02 = ["solarRefreshOutline", ""];
function RefreshOutline_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "title");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx);
  }
}
var RefreshOutline = class _RefreshOutline extends IconBase {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RefreshOutline_BaseFactory;
    return function RefreshOutline_Factory(__ngFactoryType__) {
      return (\u0275RefreshOutline_BaseFactory || (\u0275RefreshOutline_BaseFactory = \u0275\u0275getInheritedFactory(_RefreshOutline)))(__ngFactoryType__ || _RefreshOutline);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _RefreshOutline,
    selectors: [["svg", "solarRefreshOutline", ""]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c02,
    decls: 2,
    vars: 1,
    consts: [["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M2.93077 11.2003C3.00244 6.23968 7.07619 2.25 12.0789 2.25C15.3873 2.25 18.287 3.99427 19.8934 6.60721C20.1103 6.96007 20.0001 7.42199 19.6473 7.63892C19.2944 7.85585 18.8325 7.74565 18.6156 7.39279C17.2727 5.20845 14.8484 3.75 12.0789 3.75C7.8945 3.75 4.50372 7.0777 4.431 11.1982L4.83138 10.8009C5.12542 10.5092 5.60029 10.511 5.89203 10.8051C6.18377 11.0991 6.18191 11.574 5.88787 11.8657L4.20805 13.5324C3.91565 13.8225 3.44398 13.8225 3.15157 13.5324L1.47176 11.8657C1.17772 11.574 1.17585 11.0991 1.46759 10.8051C1.75933 10.5111 2.2342 10.5092 2.52824 10.8009L2.93077 11.2003ZM19.7864 10.4666C20.0786 10.1778 20.5487 10.1778 20.8409 10.4666L22.5271 12.1333C22.8217 12.4244 22.8245 12.8993 22.5333 13.1939C22.2421 13.4885 21.7673 13.4913 21.4727 13.2001L21.0628 12.7949C20.9934 17.7604 16.9017 21.75 11.8825 21.75C8.56379 21.75 5.65381 20.007 4.0412 17.3939C3.82366 17.0414 3.93307 16.5793 4.28557 16.3618C4.63806 16.1442 5.10016 16.2536 5.31769 16.6061C6.6656 18.7903 9.09999 20.25 11.8825 20.25C16.0887 20.25 19.4922 16.9171 19.5625 12.7969L19.1546 13.2001C18.86 13.4913 18.3852 13.4885 18.094 13.1939C17.8028 12.8993 17.8056 12.4244 18.1002 12.1333L19.7864 10.4666Z", "fill", "currentColor"]],
    template: function RefreshOutline_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, RefreshOutline_Conditional_0_Template, 2, 1, "title");
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(1, "path", 0);
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional((tmp_0_0 = ctx.alt()) ? 0 : -1, tmp_0_0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RefreshOutline, [{
    type: Component,
    args: [{
      selector: "svg[solarRefreshOutline]",
      template: `@if (alt(); as title) { <title>{{ title }}</title> }<svg:path fill-rule="evenodd" clip-rule="evenodd" d="M2.93077 11.2003C3.00244 6.23968 7.07619 2.25 12.0789 2.25C15.3873 2.25 18.287 3.99427 19.8934 6.60721C20.1103 6.96007 20.0001 7.42199 19.6473 7.63892C19.2944 7.85585 18.8325 7.74565 18.6156 7.39279C17.2727 5.20845 14.8484 3.75 12.0789 3.75C7.8945 3.75 4.50372 7.0777 4.431 11.1982L4.83138 10.8009C5.12542 10.5092 5.60029 10.511 5.89203 10.8051C6.18377 11.0991 6.18191 11.574 5.88787 11.8657L4.20805 13.5324C3.91565 13.8225 3.44398 13.8225 3.15157 13.5324L1.47176 11.8657C1.17772 11.574 1.17585 11.0991 1.46759 10.8051C1.75933 10.5111 2.2342 10.5092 2.52824 10.8009L2.93077 11.2003ZM19.7864 10.4666C20.0786 10.1778 20.5487 10.1778 20.8409 10.4666L22.5271 12.1333C22.8217 12.4244 22.8245 12.8993 22.5333 13.1939C22.2421 13.4885 21.7673 13.4913 21.4727 13.2001L21.0628 12.7949C20.9934 17.7604 16.9017 21.75 11.8825 21.75C8.56379 21.75 5.65381 20.007 4.0412 17.3939C3.82366 17.0414 3.93307 16.5793 4.28557 16.3618C4.63806 16.1442 5.10016 16.2536 5.31769 16.6061C6.6656 18.7903 9.09999 20.25 11.8825 20.25C16.0887 20.25 19.4922 16.9171 19.5625 12.7969L19.1546 13.2001C18.86 13.4913 18.3852 13.4885 18.094 13.1939C17.8028 12.8993 17.8056 12.4244 18.1002 12.1333L19.7864 10.4666Z" fill="currentColor"></svg:path>`,
      standalone: true,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();

// node_modules/@solar-icons/angular/dist/icons/messages/Outline/LetterOutline.js
var _c03 = ["solarLetterOutline", ""];
function LetterOutline_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "title");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx);
  }
}
var LetterOutline = class _LetterOutline extends IconBase {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275LetterOutline_BaseFactory;
    return function LetterOutline_Factory(__ngFactoryType__) {
      return (\u0275LetterOutline_BaseFactory || (\u0275LetterOutline_BaseFactory = \u0275\u0275getInheritedFactory(_LetterOutline)))(__ngFactoryType__ || _LetterOutline);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _LetterOutline,
    selectors: [["svg", "solarLetterOutline", ""]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c03,
    decls: 2,
    vars: 1,
    consts: [["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M9.94358 3.25H14.0564C15.8942 3.24998 17.3498 3.24997 18.489 3.40314C19.6614 3.56076 20.6104 3.89288 21.3588 4.64124C22.1071 5.38961 22.4392 6.33856 22.5969 7.51098C22.75 8.65019 22.75 10.1058 22.75 11.9436V12.0564C22.75 13.8942 22.75 15.3498 22.5969 16.489C22.4392 17.6614 22.1071 18.6104 21.3588 19.3588C20.6104 20.1071 19.6614 20.4392 18.489 20.5969C17.3498 20.75 15.8942 20.75 14.0564 20.75H9.94359C8.10583 20.75 6.65019 20.75 5.51098 20.5969C4.33856 20.4392 3.38961 20.1071 2.64124 19.3588C1.89288 18.6104 1.56076 17.6614 1.40314 16.489C1.24997 15.3498 1.24998 13.8942 1.25 12.0564V11.9436C1.24998 10.1058 1.24997 8.65019 1.40314 7.51098C1.56076 6.33856 1.89288 5.38961 2.64124 4.64124C3.38961 3.89288 4.33856 3.56076 5.51098 3.40314C6.65019 3.24997 8.10582 3.24998 9.94358 3.25ZM5.71085 4.88976C4.70476 5.02502 4.12511 5.27869 3.7019 5.7019C3.27869 6.12511 3.02502 6.70476 2.88976 7.71085C2.75159 8.73851 2.75 10.0932 2.75 12C2.75 13.9068 2.75159 15.2615 2.88976 16.2892C3.02502 17.2952 3.27869 17.8749 3.7019 18.2981C4.12511 18.7213 4.70476 18.975 5.71085 19.1102C6.73851 19.2484 8.09318 19.25 10 19.25H14C15.9068 19.25 17.2615 19.2484 18.2892 19.1102C19.2952 18.975 19.8749 18.7213 20.2981 18.2981C20.7213 17.8749 20.975 17.2952 21.1102 16.2892C21.2484 15.2615 21.25 13.9068 21.25 12C21.25 10.0932 21.2484 8.73851 21.1102 7.71085C20.975 6.70476 20.7213 6.12511 20.2981 5.7019C19.8749 5.27869 19.2952 5.02502 18.2892 4.88976C17.2615 4.75159 15.9068 4.75 14 4.75H10C8.09318 4.75 6.73851 4.75159 5.71085 4.88976ZM5.42383 7.51986C5.68901 7.20165 6.16193 7.15866 6.48014 7.42383L8.63903 9.22291C9.57199 10.0004 10.2197 10.5384 10.7666 10.8901C11.2959 11.2306 11.6549 11.3449 12 11.3449C12.3451 11.3449 12.7041 11.2306 13.2334 10.8901C13.7803 10.5384 14.428 10.0004 15.361 9.22291L17.5199 7.42383C17.8381 7.15866 18.311 7.20165 18.5762 7.51986C18.8413 7.83807 18.7983 8.31099 18.4801 8.57617L16.2836 10.4066C15.3973 11.1452 14.6789 11.7439 14.0448 12.1517C13.3843 12.5765 12.7411 12.8449 12 12.8449C11.2589 12.8449 10.6157 12.5765 9.95518 12.1517C9.32112 11.7439 8.60272 11.1452 7.71636 10.4066L5.51986 8.57617C5.20165 8.31099 5.15866 7.83807 5.42383 7.51986Z", "fill", "currentColor"]],
    template: function LetterOutline_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, LetterOutline_Conditional_0_Template, 2, 1, "title");
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(1, "path", 0);
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional((tmp_0_0 = ctx.alt()) ? 0 : -1, tmp_0_0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LetterOutline, [{
    type: Component,
    args: [{
      selector: "svg[solarLetterOutline]",
      template: `@if (alt(); as title) { <title>{{ title }}</title> }<svg:path fill-rule="evenodd" clip-rule="evenodd" d="M9.94358 3.25H14.0564C15.8942 3.24998 17.3498 3.24997 18.489 3.40314C19.6614 3.56076 20.6104 3.89288 21.3588 4.64124C22.1071 5.38961 22.4392 6.33856 22.5969 7.51098C22.75 8.65019 22.75 10.1058 22.75 11.9436V12.0564C22.75 13.8942 22.75 15.3498 22.5969 16.489C22.4392 17.6614 22.1071 18.6104 21.3588 19.3588C20.6104 20.1071 19.6614 20.4392 18.489 20.5969C17.3498 20.75 15.8942 20.75 14.0564 20.75H9.94359C8.10583 20.75 6.65019 20.75 5.51098 20.5969C4.33856 20.4392 3.38961 20.1071 2.64124 19.3588C1.89288 18.6104 1.56076 17.6614 1.40314 16.489C1.24997 15.3498 1.24998 13.8942 1.25 12.0564V11.9436C1.24998 10.1058 1.24997 8.65019 1.40314 7.51098C1.56076 6.33856 1.89288 5.38961 2.64124 4.64124C3.38961 3.89288 4.33856 3.56076 5.51098 3.40314C6.65019 3.24997 8.10582 3.24998 9.94358 3.25ZM5.71085 4.88976C4.70476 5.02502 4.12511 5.27869 3.7019 5.7019C3.27869 6.12511 3.02502 6.70476 2.88976 7.71085C2.75159 8.73851 2.75 10.0932 2.75 12C2.75 13.9068 2.75159 15.2615 2.88976 16.2892C3.02502 17.2952 3.27869 17.8749 3.7019 18.2981C4.12511 18.7213 4.70476 18.975 5.71085 19.1102C6.73851 19.2484 8.09318 19.25 10 19.25H14C15.9068 19.25 17.2615 19.2484 18.2892 19.1102C19.2952 18.975 19.8749 18.7213 20.2981 18.2981C20.7213 17.8749 20.975 17.2952 21.1102 16.2892C21.2484 15.2615 21.25 13.9068 21.25 12C21.25 10.0932 21.2484 8.73851 21.1102 7.71085C20.975 6.70476 20.7213 6.12511 20.2981 5.7019C19.8749 5.27869 19.2952 5.02502 18.2892 4.88976C17.2615 4.75159 15.9068 4.75 14 4.75H10C8.09318 4.75 6.73851 4.75159 5.71085 4.88976ZM5.42383 7.51986C5.68901 7.20165 6.16193 7.15866 6.48014 7.42383L8.63903 9.22291C9.57199 10.0004 10.2197 10.5384 10.7666 10.8901C11.2959 11.2306 11.6549 11.3449 12 11.3449C12.3451 11.3449 12.7041 11.2306 13.2334 10.8901C13.7803 10.5384 14.428 10.0004 15.361 9.22291L17.5199 7.42383C17.8381 7.15866 18.311 7.20165 18.5762 7.51986C18.8413 7.83807 18.7983 8.31099 18.4801 8.57617L16.2836 10.4066C15.3973 11.1452 14.6789 11.7439 14.0448 12.1517C13.3843 12.5765 12.7411 12.8449 12 12.8449C11.2589 12.8449 10.6157 12.5765 9.95518 12.1517C9.32112 11.7439 8.60272 11.1452 7.71636 10.4066L5.51986 8.57617C5.20165 8.31099 5.15866 7.83807 5.42383 7.51986Z" fill="currentColor"></svg:path>`,
      standalone: true,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();

// node_modules/@solar-icons/angular/dist/icons/messages/Outline/Pen2Outline.js
var _c04 = ["solarPen2Outline", ""];
function Pen2Outline_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "title");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx);
  }
}
var Pen2Outline = class _Pen2Outline extends IconBase {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Pen2Outline_BaseFactory;
    return function Pen2Outline_Factory(__ngFactoryType__) {
      return (\u0275Pen2Outline_BaseFactory || (\u0275Pen2Outline_BaseFactory = \u0275\u0275getInheritedFactory(_Pen2Outline)))(__ngFactoryType__ || _Pen2Outline);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Pen2Outline,
    selectors: [["svg", "solarPen2Outline", ""]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c04,
    decls: 2,
    vars: 1,
    consts: [["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M14.0992 2.39109C15.6207 0.869636 18.0875 0.869636 19.6089 2.39109C21.1304 3.91255 21.1304 6.37932 19.6089 7.90077L12.0149 15.4948C11.5869 15.9228 11.3255 16.1842 11.0342 16.4115C10.691 16.6792 10.3196 16.9087 9.92667 17.096C9.59315 17.2549 9.24244 17.3718 8.66818 17.5632L5.99553 18.4541L5.35386 18.668C4.77951 18.8594 4.14629 18.7099 3.7182 18.2818C3.2901 17.8537 3.14062 17.2205 3.33207 16.6462L4.43683 13.3318C4.62822 12.7576 4.7451 12.4069 4.90405 12.0734C5.09132 11.6804 5.32084 11.309 5.58856 10.9658C5.81578 10.6745 6.07719 10.4131 6.50525 9.98509L14.0992 2.39109ZM5.96092 16.8845L5.11556 16.0391L5.84398 13.8538C6.05606 13.2176 6.14366 12.9589 6.25814 12.7187C6.39854 12.4241 6.57061 12.1457 6.77132 11.8883C6.93497 11.6785 7.12718 11.4845 7.60141 11.0102L13.4924 5.11927C13.7355 5.72927 14.147 6.46549 14.8408 7.15927C15.5345 7.85306 16.2708 8.26447 16.8807 8.50764L10.9898 14.3986C10.5155 14.8728 10.3215 15.065 10.1117 15.2287C9.85436 15.4294 9.57594 15.6015 9.28134 15.7419C9.04113 15.8564 8.78244 15.944 8.14619 16.156L5.96092 16.8845ZM18.076 7.31241C17.9521 7.28522 17.7973 7.24432 17.6213 7.18325C17.1373 7.01532 16.5006 6.69778 15.9014 6.09861C15.3022 5.49944 14.9847 4.86276 14.8168 4.37873C14.7557 4.2027 14.7148 4.04787 14.6876 3.92404L15.1599 3.45175C16.0956 2.51608 17.6126 2.51608 18.5483 3.45175C19.4839 4.38742 19.4839 5.90444 18.5483 6.84011L18.076 7.31241ZM3.25002 22C3.25002 21.5858 3.58581 21.25 4.00002 21.25H20V22.75H4.00002C3.58581 22.75 3.25002 22.4142 3.25002 22Z", "fill", "currentColor"]],
    template: function Pen2Outline_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, Pen2Outline_Conditional_0_Template, 2, 1, "title");
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(1, "path", 0);
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional((tmp_0_0 = ctx.alt()) ? 0 : -1, tmp_0_0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Pen2Outline, [{
    type: Component,
    args: [{
      selector: "svg[solarPen2Outline]",
      template: `@if (alt(); as title) { <title>{{ title }}</title> }<svg:path fill-rule="evenodd" clip-rule="evenodd" d="M14.0992 2.39109C15.6207 0.869636 18.0875 0.869636 19.6089 2.39109C21.1304 3.91255 21.1304 6.37932 19.6089 7.90077L12.0149 15.4948C11.5869 15.9228 11.3255 16.1842 11.0342 16.4115C10.691 16.6792 10.3196 16.9087 9.92667 17.096C9.59315 17.2549 9.24244 17.3718 8.66818 17.5632L5.99553 18.4541L5.35386 18.668C4.77951 18.8594 4.14629 18.7099 3.7182 18.2818C3.2901 17.8537 3.14062 17.2205 3.33207 16.6462L4.43683 13.3318C4.62822 12.7576 4.7451 12.4069 4.90405 12.0734C5.09132 11.6804 5.32084 11.309 5.58856 10.9658C5.81578 10.6745 6.07719 10.4131 6.50525 9.98509L14.0992 2.39109ZM5.96092 16.8845L5.11556 16.0391L5.84398 13.8538C6.05606 13.2176 6.14366 12.9589 6.25814 12.7187C6.39854 12.4241 6.57061 12.1457 6.77132 11.8883C6.93497 11.6785 7.12718 11.4845 7.60141 11.0102L13.4924 5.11927C13.7355 5.72927 14.147 6.46549 14.8408 7.15927C15.5345 7.85306 16.2708 8.26447 16.8807 8.50764L10.9898 14.3986C10.5155 14.8728 10.3215 15.065 10.1117 15.2287C9.85436 15.4294 9.57594 15.6015 9.28134 15.7419C9.04113 15.8564 8.78244 15.944 8.14619 16.156L5.96092 16.8845ZM18.076 7.31241C17.9521 7.28522 17.7973 7.24432 17.6213 7.18325C17.1373 7.01532 16.5006 6.69778 15.9014 6.09861C15.3022 5.49944 14.9847 4.86276 14.8168 4.37873C14.7557 4.2027 14.7148 4.04787 14.6876 3.92404L15.1599 3.45175C16.0956 2.51608 17.6126 2.51608 18.5483 3.45175C19.4839 4.38742 19.4839 5.90444 18.5483 6.84011L18.076 7.31241ZM3.25002 22C3.25002 21.5858 3.58581 21.25 4.00002 21.25H20V22.75H4.00002C3.58581 22.75 3.25002 22.4142 3.25002 22Z" fill="currentColor"></svg:path>`,
      standalone: true,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();

// node_modules/@solar-icons/angular/dist/icons/messages/LineDuotone/UnreadLineDuotone.js
var _c05 = ["solarUnreadLineDuotone", ""];
function UnreadLineDuotone_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "title");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx);
  }
}
var UnreadLineDuotone = class _UnreadLineDuotone extends IconBase {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275UnreadLineDuotone_BaseFactory;
    return function UnreadLineDuotone_Factory(__ngFactoryType__) {
      return (\u0275UnreadLineDuotone_BaseFactory || (\u0275UnreadLineDuotone_BaseFactory = \u0275\u0275getInheritedFactory(_UnreadLineDuotone)))(__ngFactoryType__ || _UnreadLineDuotone);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _UnreadLineDuotone,
    selectors: [["svg", "solarUnreadLineDuotone", ""]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c05,
    decls: 2,
    vars: 1,
    consts: [["d", "M7 12.9L10.1429 16.5L18 7.5", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"]],
    template: function UnreadLineDuotone_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, UnreadLineDuotone_Conditional_0_Template, 2, 1, "title");
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(1, "path", 0);
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional((tmp_0_0 = ctx.alt()) ? 0 : -1, tmp_0_0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnreadLineDuotone, [{
    type: Component,
    args: [{
      selector: "svg[solarUnreadLineDuotone]",
      template: `@if (alt(); as title) { <title>{{ title }}</title> }<svg:path d="M7 12.9L10.1429 16.5L18 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></svg:path>`,
      standalone: true,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();

// node_modules/@solar-icons/angular/dist/icons/ui/Outline/CheckCircleOutline.js
var _c06 = ["solarCheckCircleOutline", ""];
function CheckCircleOutline_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "title");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx);
  }
}
var CheckCircleOutline = class _CheckCircleOutline extends IconBase {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CheckCircleOutline_BaseFactory;
    return function CheckCircleOutline_Factory(__ngFactoryType__) {
      return (\u0275CheckCircleOutline_BaseFactory || (\u0275CheckCircleOutline_BaseFactory = \u0275\u0275getInheritedFactory(_CheckCircleOutline)))(__ngFactoryType__ || _CheckCircleOutline);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CheckCircleOutline,
    selectors: [["svg", "solarCheckCircleOutline", ""]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c06,
    decls: 3,
    vars: 1,
    consts: [["d", "M16.0303 10.0303C16.3232 9.73744 16.3232 9.26256 16.0303 8.96967C15.7374 8.67678 15.2626 8.67678 14.9697 8.96967L10.5 13.4393L9.03033 11.9697C8.73744 11.6768 8.26256 11.6768 7.96967 11.9697C7.67678 12.2626 7.67678 12.7374 7.96967 13.0303L9.96967 15.0303C10.2626 15.3232 10.7374 15.3232 11.0303 15.0303L16.0303 10.0303Z", "fill", "currentColor"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z", "fill", "currentColor"]],
    template: function CheckCircleOutline_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, CheckCircleOutline_Conditional_0_Template, 2, 1, "title");
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(1, "path", 0)(2, "path", 1);
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional((tmp_0_0 = ctx.alt()) ? 0 : -1, tmp_0_0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckCircleOutline, [{
    type: Component,
    args: [{
      selector: "svg[solarCheckCircleOutline]",
      template: `@if (alt(); as title) { <title>{{ title }}</title> }<svg:path d="M16.0303 10.0303C16.3232 9.73744 16.3232 9.26256 16.0303 8.96967C15.7374 8.67678 15.2626 8.67678 14.9697 8.96967L10.5 13.4393L9.03033 11.9697C8.73744 11.6768 8.26256 11.6768 7.96967 11.9697C7.67678 12.2626 7.67678 12.7374 7.96967 13.0303L9.96967 15.0303C10.2626 15.3232 10.7374 15.3232 11.0303 15.0303L16.0303 10.0303Z" fill="currentColor"></svg:path><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z" fill="currentColor"></svg:path>`,
      standalone: true,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();

// node_modules/@solar-icons/angular/dist/icons/ui/Bold/DangerCircleBold.js
var _c07 = ["solarDangerCircleBold", ""];
function DangerCircleBold_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "title");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx);
  }
}
var DangerCircleBold = class _DangerCircleBold extends IconBase {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275DangerCircleBold_BaseFactory;
    return function DangerCircleBold_Factory(__ngFactoryType__) {
      return (\u0275DangerCircleBold_BaseFactory || (\u0275DangerCircleBold_BaseFactory = \u0275\u0275getInheritedFactory(_DangerCircleBold)))(__ngFactoryType__ || _DangerCircleBold);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _DangerCircleBold,
    selectors: [["svg", "solarDangerCircleBold", ""]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c07,
    decls: 2,
    vars: 1,
    consts: [["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12ZM12 6.25C12.4142 6.25 12.75 6.58579 12.75 7V13C12.75 13.4142 12.4142 13.75 12 13.75C11.5858 13.75 11.25 13.4142 11.25 13V7C11.25 6.58579 11.5858 6.25 12 6.25ZM12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z", "fill", "currentColor"]],
    template: function DangerCircleBold_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, DangerCircleBold_Conditional_0_Template, 2, 1, "title");
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(1, "path", 0);
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional((tmp_0_0 = ctx.alt()) ? 0 : -1, tmp_0_0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DangerCircleBold, [{
    type: Component,
    args: [{
      selector: "svg[solarDangerCircleBold]",
      template: `@if (alt(); as title) { <title>{{ title }}</title> }<svg:path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12ZM12 6.25C12.4142 6.25 12.75 6.58579 12.75 7V13C12.75 13.4142 12.4142 13.75 12 13.75C11.5858 13.75 11.25 13.4142 11.25 13V7C11.25 6.58579 11.5858 6.25 12 6.25ZM12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z" fill="currentColor"></svg:path>`,
      standalone: true,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();

// node_modules/@solar-icons/angular/dist/icons/ui/Outline/InfoCircleOutline.js
var _c08 = ["solarInfoCircleOutline", ""];
function InfoCircleOutline_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "title");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx);
  }
}
var InfoCircleOutline = class _InfoCircleOutline extends IconBase {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275InfoCircleOutline_BaseFactory;
    return function InfoCircleOutline_Factory(__ngFactoryType__) {
      return (\u0275InfoCircleOutline_BaseFactory || (\u0275InfoCircleOutline_BaseFactory = \u0275\u0275getInheritedFactory(_InfoCircleOutline)))(__ngFactoryType__ || _InfoCircleOutline);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _InfoCircleOutline,
    selectors: [["svg", "solarInfoCircleOutline", ""]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c08,
    decls: 4,
    vars: 1,
    consts: [["d", "M12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75Z", "fill", "currentColor"], ["d", "M12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z", "fill", "currentColor"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75Z", "fill", "currentColor"]],
    template: function InfoCircleOutline_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, InfoCircleOutline_Conditional_0_Template, 2, 1, "title");
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(1, "path", 0)(2, "path", 1)(3, "path", 2);
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional((tmp_0_0 = ctx.alt()) ? 0 : -1, tmp_0_0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InfoCircleOutline, [{
    type: Component,
    args: [{
      selector: "svg[solarInfoCircleOutline]",
      template: `@if (alt(); as title) { <title>{{ title }}</title> }<svg:path d="M12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75Z" fill="currentColor"></svg:path><svg:path d="M12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z" fill="currentColor"></svg:path><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75Z" fill="currentColor"></svg:path>`,
      standalone: true,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();

// node_modules/@solar-icons/angular/dist/icons/ui/Outline/CloseCircleOutline.js
var _c09 = ["solarCloseCircleOutline", ""];
function CloseCircleOutline_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "title");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx);
  }
}
var CloseCircleOutline = class _CloseCircleOutline extends IconBase {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CloseCircleOutline_BaseFactory;
    return function CloseCircleOutline_Factory(__ngFactoryType__) {
      return (\u0275CloseCircleOutline_BaseFactory || (\u0275CloseCircleOutline_BaseFactory = \u0275\u0275getInheritedFactory(_CloseCircleOutline)))(__ngFactoryType__ || _CloseCircleOutline);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CloseCircleOutline,
    selectors: [["svg", "solarCloseCircleOutline", ""]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c09,
    decls: 3,
    vars: 1,
    consts: [["d", "M10.0303 8.96965C9.73741 8.67676 9.26253 8.67676 8.96964 8.96965C8.67675 9.26255 8.67675 9.73742 8.96964 10.0303L10.9393 12L8.96966 13.9697C8.67677 14.2625 8.67677 14.7374 8.96966 15.0303C9.26255 15.3232 9.73743 15.3232 10.0303 15.0303L12 13.0607L13.9696 15.0303C14.2625 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2625 15.0303 13.9696L13.0606 12L15.0303 10.0303C15.3232 9.73744 15.3232 9.26257 15.0303 8.96968C14.7374 8.67678 14.2625 8.67678 13.9696 8.96968L12 10.9393L10.0303 8.96965Z", "fill", "currentColor"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z", "fill", "currentColor"]],
    template: function CloseCircleOutline_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, CloseCircleOutline_Conditional_0_Template, 2, 1, "title");
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(1, "path", 0)(2, "path", 1);
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional((tmp_0_0 = ctx.alt()) ? 0 : -1, tmp_0_0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CloseCircleOutline, [{
    type: Component,
    args: [{
      selector: "svg[solarCloseCircleOutline]",
      template: `@if (alt(); as title) { <title>{{ title }}</title> }<svg:path d="M10.0303 8.96965C9.73741 8.67676 9.26253 8.67676 8.96964 8.96965C8.67675 9.26255 8.67675 9.73742 8.96964 10.0303L10.9393 12L8.96966 13.9697C8.67677 14.2625 8.67677 14.7374 8.96966 15.0303C9.26255 15.3232 9.73743 15.3232 10.0303 15.0303L12 13.0607L13.9696 15.0303C14.2625 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2625 15.0303 13.9696L13.0606 12L15.0303 10.0303C15.3232 9.73744 15.3232 9.26257 15.0303 8.96968C14.7374 8.67678 14.2625 8.67678 13.9696 8.96968L12 10.9393L10.0303 8.96965Z" fill="currentColor"></svg:path><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z" fill="currentColor"></svg:path>`,
      standalone: true,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();

// src/app/shared/icons/custom-flag-pe.ts
var _c010 = ["CustomFlagPe", ""];
var CustomFlagPe = class _CustomFlagPe {
  static \u0275fac = function CustomFlagPe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CustomFlagPe)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomFlagPe, selectors: [["svg", "CustomFlagPe", ""]], hostAttrs: ["viewBox", "0 0 24 16"], attrs: _c010, decls: 3, vars: 0, consts: [["width", "8", "height", "16", "fill", "#da291c"], ["x", "8", "width", "8", "height", "16", "fill", "#ffffff"], ["x", "16", "width", "8", "height", "16", "fill", "#da291c"]], template: function CustomFlagPe_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElement(0, "rect", 0)(1, "rect", 1)(2, "rect", 2);
    }
  }, encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomFlagPe, [{
    type: Component,
    args: [{
      selector: "svg[CustomFlagPe]",
      template: `<svg:rect width="8" height="16" fill="#da291c" /><svg:rect x="8" width="8" height="16" fill="#ffffff" /><svg:rect x="16" width="8" height="16" fill="#da291c" />`,
      host: {
        viewBox: "0 0 24 16"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomFlagPe, { className: "CustomFlagPe", filePath: "src/app/shared/icons/custom-flag-pe.ts", lineNumber: 21 });
})();

// src/app/shared/icons/custom-whatsapp-filled.ts
var _c011 = ["CustomWhatsappFilled", ""];
var CustomWhatsappFilled = class _CustomWhatsappFilled {
  static \u0275fac = function CustomWhatsappFilled_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CustomWhatsappFilled)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomWhatsappFilled, selectors: [["svg", "CustomWhatsappFilled", ""]], hostAttrs: ["viewBox", "0 0 24 24", "fill", "currentColor"], attrs: _c011, decls: 1, vars: 0, consts: [["d", "M12 2A9.94 9.94 0 0 0 2 11.9c0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.38a10.1 10.1 0 0 0 4.7 1.18h.01A9.94 9.94 0 0 0 22 11.91 9.86 9.86 0 0 0 12 2Zm0 18.13h-.01a8.4 8.4 0 0 1-4.27-1.17l-.3-.18-3.15.82.84-3.05-.2-.31a8.18 8.18 0 0 1-1.26-4.34A8.27 8.27 0 0 1 12 3.67a8.2 8.2 0 0 1 8.33 8.24 8.27 8.27 0 0 1-8.33 8.22Zm4.56-6.16c-.25-.12-1.47-.72-1.7-.8-.23-.09-.4-.13-.56.12-.17.25-.64.8-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.38-2-1.23-.74-.65-1.24-1.45-1.39-1.7-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.13-.56-1.34-.77-1.84-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.84-.87 2.05 0 1.2.89 2.37 1.01 2.53.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.6.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29Z"]], template: function CustomWhatsappFilled_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElement(0, "path", 0);
    }
  }, encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomWhatsappFilled, [{
    type: Component,
    args: [{
      selector: "svg[CustomWhatsappFilled]",
      template: `<svg:path
    d="M12 2A9.94 9.94 0 0 0 2 11.9c0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.38a10.1 10.1 0 0 0 4.7 1.18h.01A9.94 9.94 0 0 0 22 11.91 9.86 9.86 0 0 0 12 2Zm0 18.13h-.01a8.4 8.4 0 0 1-4.27-1.17l-.3-.18-3.15.82.84-3.05-.2-.31a8.18 8.18 0 0 1-1.26-4.34A8.27 8.27 0 0 1 12 3.67a8.2 8.2 0 0 1 8.33 8.24 8.27 8.27 0 0 1-8.33 8.22Zm4.56-6.16c-.25-.12-1.47-.72-1.7-.8-.23-.09-.4-.13-.56.12-.17.25-.64.8-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.38-2-1.23-.74-.65-1.24-1.45-1.39-1.7-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.13-.56-1.34-.77-1.84-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.84-.87 2.05 0 1.2.89 2.37 1.01 2.53.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.6.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29Z"
  />`,
      host: {
        viewBox: "0 0 24 24",
        fill: "currentColor"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomWhatsappFilled, { className: "CustomWhatsappFilled", filePath: "src/app/shared/icons/custom-whatsapp-filled.ts", lineNumber: 21 });
})();

// src/app/shared/icons/custom-close-outline.ts
var _c012 = ["CustomCloseOutline", ""];
var CustomCloseOutline = class _CustomCloseOutline {
  static \u0275fac = function CustomCloseOutline_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CustomCloseOutline)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomCloseOutline, selectors: [["svg", "CustomCloseOutline", ""]], hostAttrs: ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], attrs: _c012, decls: 1, vars: 0, consts: [["d", "M6 6l12 12M18 6 6 18"]], template: function CustomCloseOutline_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElement(0, "path", 0);
    }
  }, encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomCloseOutline, [{
    type: Component,
    args: [{
      selector: "svg[CustomCloseOutline]",
      template: `<svg:path d="M6 6l12 12M18 6 6 18" />`,
      host: {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomCloseOutline, { className: "CustomCloseOutline", filePath: "src/app/shared/icons/custom-close-outline.ts", lineNumber: 27 });
})();

// src/app/shared/components/alert/alert.ts
function Alert_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.message());
  }
}
var Alert = class _Alert {
  title = input.required(...ngDevMode ? [{ debugName: "title" }] : (
    /* istanbul ignore next */
    []
  ));
  message = input("", ...ngDevMode ? [{ debugName: "message" }] : (
    /* istanbul ignore next */
    []
  ));
  closed = output();
  static \u0275fac = function Alert_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Alert)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Alert, selectors: [["app-alert"]], inputs: { title: [1, "title"], message: [1, "message"] }, outputs: { closed: "closed" }, decls: 8, vars: 2, consts: [["role", "alert", 1, "rounded-2xl", "bg-danger-bg", "px-4", "py-4", "text-danger"], [1, "flex", "items-center", "gap-2.5"], ["solarInfoCircleOutline", "", "aria-hidden", "true", 1, "h-5", "w-5", "shrink-0"], [1, "text-[15px]", "font-semibold"], ["type", "button", "aria-label", "Cerrar", 1, "ml-auto", "shrink-0", "rounded-full", "p-1", "transition", "hover:bg-danger/10", 3, "click"], ["CustomCloseOutline", "", "aria-hidden", "true", 1, "h-4", "w-4"], [1, "mt-1", "pl-[30px]", "text-[14px]"]], template: function Alert_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275namespaceSVG();
      \u0275\u0275element(2, "svg", 2);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(3, "p", 3);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 4);
      \u0275\u0275listener("click", function Alert_Template_button_click_5_listener() {
        return ctx.closed.emit();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275element(6, "svg", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(7, Alert_Conditional_7_Template, 2, 1, "p", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.title());
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.message() ? 7 : -1);
    }
  }, dependencies: [InfoCircleOutline, CustomCloseOutline], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Alert, [{
    type: Component,
    args: [{
      selector: "app-alert",
      imports: [InfoCircleOutline, CustomCloseOutline],
      template: `
    <div role="alert" class="rounded-2xl bg-danger-bg px-4 py-4 text-danger">
      <div class="flex items-center gap-2.5">
        <svg solarInfoCircleOutline class="h-5 w-5 shrink-0" aria-hidden="true"></svg>
        <p class="text-[15px] font-semibold">{{ title() }}</p>
        <button
          type="button"
          aria-label="Cerrar"
          (click)="closed.emit()"
          class="ml-auto shrink-0 rounded-full p-1 transition hover:bg-danger/10"
        >
          <svg CustomCloseOutline class="h-4 w-4" aria-hidden="true"></svg>
        </button>
      </div>
      @if (message()) {
        <p class="mt-1 pl-[30px] text-[14px]">{{ message() }}</p>
      }
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, { title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: true }] }], message: [{ type: Input, args: [{ isSignal: true, alias: "message", required: false }] }], closed: [{ type: Output, args: ["closed"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Alert, { className: "Alert", filePath: "src/app/shared/components/alert/alert.ts", lineNumber: 35 });
})();

// src/app/shared/components/legal-dialogs/legal-dialog.service.ts
var LegalDialogService = class _LegalDialogService {
  termsOpen = signal(false, ...ngDevMode ? [{ debugName: "termsOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  privacyOpen = signal(false, ...ngDevMode ? [{ debugName: "privacyOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  openTerms() {
    this.termsOpen.set(true);
  }
  openPrivacy() {
    this.privacyOpen.set(true);
  }
  static \u0275fac = function LegalDialogService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LegalDialogService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LegalDialogService, factory: _LegalDialogService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LegalDialogService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/shared/components/select/select.ts
var _c013 = ["trigger"];
var _forTrack0 = ($index, $item) => $item.value;
function Select_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 3);
  }
}
function Select_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("rotate-180", ctx_r0.open());
  }
}
function Select_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function Select_Conditional_6_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.clear($event));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(1, "svg", 9);
    \u0275\u0275elementEnd();
  }
}
function Select_Conditional_7_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 13);
  }
  if (rf & 2) {
    \u0275\u0275property("size", 18)("color", "#1f2430");
  }
}
function Select_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 11)(1, "button", 12);
    \u0275\u0275listener("mousedown", function Select_Conditional_7_For_2_Template_button_mousedown_1_listener($event) {
      return $event.preventDefault();
    })("click", function Select_Conditional_7_For_2_Template_button_click_1_listener() {
      const option_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectOption(option_r4.value));
    });
    \u0275\u0275text(2);
    \u0275\u0275conditionalCreate(3, Select_Conditional_7_For_2_Conditional_3_Template, 1, 2, ":svg:svg", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    const \u0275$index_20_r5 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("id", ctx_r0.optionId(\u0275$index_20_r5));
    \u0275\u0275attribute("aria-selected", option_r4.value === ctx_r0.value());
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-field", \u0275$index_20_r5 === ctx_r0.activeIndex())("font-medium", option_r4.value === ctx_r0.value());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r4.label, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(option_r4.value === ctx_r0.value() ? 3 : -1);
  }
}
function Select_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 10);
    \u0275\u0275repeaterCreate(1, Select_Conditional_7_For_2_Template, 4, 8, "li", 11, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", ctx_r0.position().left, "px")("width", ctx_r0.position().width, "px")("top", ctx_r0.position().top, "px")("bottom", ctx_r0.position().bottom, "px")("max-height", ctx_r0.position().maxHeight, "px");
    \u0275\u0275property("id", ctx_r0.listboxId());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.normalizedOptions());
  }
}
var Select = class _Select {
  selectId = input.required(...ngDevMode ? [{ debugName: "selectId" }] : (
    /* istanbul ignore next */
    []
  ));
  options = input.required(...ngDevMode ? [{ debugName: "options" }] : (
    /* istanbul ignore next */
    []
  ));
  placeholder = input("Selecciona una opci\xF3n", ...ngDevMode ? [{ debugName: "placeholder" }] : (
    /* istanbul ignore next */
    []
  ));
  invalid = input(false, ...ngDevMode ? [{ debugName: "invalid" }] : (
    /* istanbul ignore next */
    []
  ));
  clearable = input(false, ...ngDevMode ? [{ debugName: "clearable" }] : (
    /* istanbul ignore next */
    []
  ));
  normalizedOptions = computed(() => this.options().map((option) => typeof option === "string" ? { value: option, label: option } : option), ...ngDevMode ? [{ debugName: "normalizedOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  value = signal("", ...ngDevMode ? [{ debugName: "value" }] : (
    /* istanbul ignore next */
    []
  ));
  open = signal(false, ...ngDevMode ? [{ debugName: "open" }] : (
    /* istanbul ignore next */
    []
  ));
  disabled = signal(false, ...ngDevMode ? [{ debugName: "disabled" }] : (
    /* istanbul ignore next */
    []
  ));
  activeIndex = signal(-1, ...ngDevMode ? [{ debugName: "activeIndex" }] : (
    /* istanbul ignore next */
    []
  ));
  position = signal({
    left: 0,
    width: 0,
    top: 0,
    bottom: null,
    maxHeight: 240
  }, ...ngDevMode ? [{ debugName: "position" }] : (
    /* istanbul ignore next */
    []
  ));
  document = inject(DOCUMENT);
  trigger = viewChild.required("trigger");
  constructor() {
    this._initListboxReposition();
  }
  selectedLabel = computed(() => this.normalizedOptions().find((option) => option.value === this.value())?.label ?? "", ...ngDevMode ? [{ debugName: "selectedLabel" }] : (
    /* istanbul ignore next */
    []
  ));
  showClear = computed(() => this.clearable() && !!this.value(), ...ngDevMode ? [{ debugName: "showClear" }] : (
    /* istanbul ignore next */
    []
  ));
  listboxId = computed(() => `${this.selectId()}-listbox`, ...ngDevMode ? [{ debugName: "listboxId" }] : (
    /* istanbul ignore next */
    []
  ));
  activeOptionId = computed(() => this.open() && this.activeIndex() >= 0 ? this.optionId(this.activeIndex()) : null, ...ngDevMode ? [{ debugName: "activeOptionId" }] : (
    /* istanbul ignore next */
    []
  ));
  onChange = () => void 0;
  onTouched = () => void 0;
  writeValue(value) {
    this.value.set(value ?? "");
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(disabled) {
    this.disabled.set(disabled);
  }
  optionId(index) {
    return `${this.selectId()}-option-${index}`;
  }
  toggle() {
    this.open() ? this._close() : this._openList();
  }
  selectOption(value) {
    this.value.set(value);
    this.onChange(value);
    this._close();
  }
  clear(event) {
    event.stopPropagation();
    this.value.set("");
    this.onChange("");
    this.onTouched();
    this._close();
  }
  onKeydown(event) {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        this.open() ? this._moveActive(1) : this._openList();
        break;
      case "ArrowUp":
        event.preventDefault();
        this.open() ? this._moveActive(-1) : this._openList();
        break;
      case "Enter":
      case " ":
        if (this.open()) {
          event.preventDefault();
          const active = this.normalizedOptions()[this.activeIndex()];
          if (active !== void 0) {
            this.selectOption(active.value);
          }
        }
        break;
      case "Escape":
        this._close();
        break;
      case "Home":
      case "End":
        if (this.open()) {
          event.preventDefault();
          this.activeIndex.set(event.key === "Home" ? 0 : this.normalizedOptions().length - 1);
        }
        break;
    }
  }
  onFocusOut(event) {
    const target = event.relatedTarget;
    if (target instanceof Node && event.currentTarget.contains(target)) {
      return;
    }
    this._close();
    this.onTouched();
  }
  /**
   * While open, keeps the fixed-positioned listbox glued to the trigger as the
   * modal body (or any other ancestor) scrolls and as the viewport resizes.
   */
  _initListboxReposition() {
    effect((onCleanup) => {
      if (!this.open()) {
        return;
      }
      const view = this.document.defaultView;
      if (!view) {
        return;
      }
      const reposition = () => this._updatePosition();
      view.addEventListener("scroll", reposition, true);
      view.addEventListener("resize", reposition);
      onCleanup(() => {
        view.removeEventListener("scroll", reposition, true);
        view.removeEventListener("resize", reposition);
      });
    });
  }
  _openList() {
    if (this.disabled()) {
      return;
    }
    const selected = this.normalizedOptions().findIndex((option) => option.value === this.value());
    this.activeIndex.set(selected >= 0 ? selected : 0);
    this._updatePosition();
    this.open.set(true);
  }
  /**
   * Positions the listbox with `position: fixed` relative to the viewport so it
   * escapes any ancestor scroll/overflow context (e.g. the modal body). Flips
   * above the trigger when there isn't enough room below, and caps its height
   * to the available space so it never spills off-screen.
   */
  _updatePosition() {
    const view = this.document.defaultView;
    if (!view) {
      return;
    }
    const rect = this.trigger().nativeElement.getBoundingClientRect();
    const margin = 8;
    const maxDropdownHeight = 240;
    const spaceBelow = view.innerHeight - rect.bottom;
    const spaceAbove = rect.top;
    const openUp = spaceBelow < maxDropdownHeight + margin && spaceAbove > spaceBelow;
    const available = (openUp ? spaceAbove : spaceBelow) - margin * 2;
    this.position.set({
      left: rect.left,
      width: rect.width,
      top: openUp ? null : rect.bottom + margin,
      bottom: openUp ? view.innerHeight - rect.top + margin : null,
      maxHeight: Math.max(120, Math.min(maxDropdownHeight, available))
    });
  }
  _close() {
    this.open.set(false);
    this.activeIndex.set(-1);
  }
  _moveActive(delta) {
    const count = this.normalizedOptions().length;
    if (count === 0) {
      return;
    }
    const next = Math.min(count - 1, Math.max(0, this.activeIndex() + delta));
    this.activeIndex.set(next);
  }
  static \u0275fac = function Select_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Select)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Select, selectors: [["app-select"]], viewQuery: function Select_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.trigger, _c013, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, hostBindings: function Select_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("focusout", function Select_focusout_HostBindingHandler($event) {
        return ctx.onFocusOut($event);
      });
    }
  }, inputs: { selectId: [1, "selectId"], options: [1, "options"], placeholder: [1, "placeholder"], invalid: [1, "invalid"], clearable: [1, "clearable"] }, features: [\u0275\u0275ProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => _Select), multi: true }])], decls: 8, vars: 13, consts: [["trigger", ""], [1, "relative"], ["type", "button", "role", "combobox", "aria-haspopup", "listbox", 1, "w-full", "rounded-xl", "border", "border-line", "bg-field", "px-4", "py-3.5", "pr-11", "text-left", "text-[15px]", "outline-none", "focus:border-ink", 3, "click", "keydown", "id", "disabled"], ["solarDangerCircleBold", "", "aria-hidden", "true", 1, "pointer-events-none", "absolute", "top-1/2", "right-4", "h-5", "w-5", "-translate-y-1/2", "text-primary"], ["solarAltArrowDownOutline", "", "aria-hidden", "true", 1, "pointer-events-none", "absolute", "top-1/2", "right-4", "h-4", "w-4", "-translate-y-1/2", "text-ink", "transition-transform", 3, "rotate-180"], ["type", "button", "aria-label", "Limpiar selecci\xF3n", 1, "absolute", "top-1/2", "right-4", "h-5", "w-5", "-translate-y-1/2", "text-muted", "transition", "hover:text-ink"], ["role", "listbox", 1, "fixed", "z-50", "overflow-auto", "rounded-xl", "border", "border-line", "bg-white", "py-2", "shadow-[0_10px_30px_rgba(31,42,64,0.15)]", 3, "id", "left", "width", "top", "bottom", "maxHeight"], ["solarAltArrowDownOutline", "", "aria-hidden", "true", 1, "pointer-events-none", "absolute", "top-1/2", "right-4", "h-4", "w-4", "-translate-y-1/2", "text-ink", "transition-transform"], ["type", "button", "aria-label", "Limpiar selecci\xF3n", 1, "absolute", "top-1/2", "right-4", "h-5", "w-5", "-translate-y-1/2", "text-muted", "transition", "hover:text-ink", 3, "click"], ["solarCloseCircleOutline", "", "aria-hidden", "true", 1, "h-full", "w-full"], ["role", "listbox", 1, "fixed", "z-50", "overflow-auto", "rounded-xl", "border", "border-line", "bg-white", "py-2", "shadow-[0_10px_30px_rgba(31,42,64,0.15)]", 3, "id"], ["role", "option", 3, "id"], ["type", "button", "tabindex", "-1", 1, "flex", "w-full", "items-center", "justify-between", "gap-3", "px-4", "py-3", "text-left", "text-[15px]", "transition", "hover:bg-field", 3, "mousedown", "click"], ["solarUnreadLineDuotone", "", "aria-hidden", "true", 1, "shrink-0", 3, "size", "color"]], template: function Select_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "button", 2, 0);
      \u0275\u0275listener("click", function Select_Template_button_click_1_listener() {
        return ctx.toggle();
      })("keydown", function Select_Template_button_keydown_1_listener($event) {
        return ctx.onKeydown($event);
      });
      \u0275\u0275text(3);
      \u0275\u0275conditionalCreate(4, Select_Conditional_4_Template, 1, 0, ":svg:svg", 3)(5, Select_Conditional_5_Template, 1, 2, ":svg:svg", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(6, Select_Conditional_6_Template, 2, 0, "button", 5);
      \u0275\u0275conditionalCreate(7, Select_Conditional_7_Template, 3, 11, "ul", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275styleProp("border-color", ctx.invalid() ? "var(--color-danger)" : null);
      \u0275\u0275classProp("text-muted", !ctx.selectedLabel());
      \u0275\u0275property("id", ctx.selectId())("disabled", ctx.disabled());
      \u0275\u0275attribute("aria-expanded", ctx.open())("aria-controls", ctx.listboxId())("aria-activedescendant", ctx.activeOptionId());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.selectedLabel() || ctx.placeholder(), " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.invalid() ? 4 : !ctx.showClear() ? 5 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.invalid() && ctx.showClear() ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.open() ? 7 : -1);
    }
  }, dependencies: [AltArrowDownOutline, CloseCircleOutline, DangerCircleBold, UnreadLineDuotone], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Select, [{
    type: Component,
    args: [{
      selector: "app-select",
      imports: [AltArrowDownOutline, CloseCircleOutline, DangerCircleBold, UnreadLineDuotone],
      providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => Select), multi: true }],
      host: { "(focusout)": "onFocusOut($event)" },
      template: `
    <div class="relative">
      <button
        #trigger
        type="button"
        role="combobox"
        [id]="selectId()"
        [disabled]="disabled()"
        aria-haspopup="listbox"
        [attr.aria-expanded]="open()"
        [attr.aria-controls]="listboxId()"
        [attr.aria-activedescendant]="activeOptionId()"
        (click)="toggle()"
        (keydown)="onKeydown($event)"
        class="w-full rounded-xl border border-line bg-field px-4 py-3.5 pr-11 text-left text-[15px] outline-none focus:border-ink"
        [class.text-muted]="!selectedLabel()"
        [style.border-color]="invalid() ? 'var(--color-danger)' : null"
      >
        {{ selectedLabel() || placeholder() }}
        @if (invalid()) {
          <svg
            solarDangerCircleBold
            class="pointer-events-none absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 text-primary"
            aria-hidden="true"
          ></svg>
        } @else if (!showClear()) {
          <svg
            solarAltArrowDownOutline
            class="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-ink transition-transform"
            [class.rotate-180]="open()"
            aria-hidden="true"
          ></svg>
        }
      </button>

      @if (!invalid() && showClear()) {
        <button
          type="button"
          aria-label="Limpiar selecci\xF3n"
          (click)="clear($event)"
          class="absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 text-muted transition hover:text-ink"
        >
          <svg solarCloseCircleOutline class="h-full w-full" aria-hidden="true"></svg>
        </button>
      }

      @if (open()) {
        <ul
          [id]="listboxId()"
          role="listbox"
          class="fixed z-50 overflow-auto rounded-xl border border-line bg-white py-2 shadow-[0_10px_30px_rgba(31,42,64,0.15)]"
          [style.left.px]="position().left"
          [style.width.px]="position().width"
          [style.top.px]="position().top"
          [style.bottom.px]="position().bottom"
          [style.maxHeight.px]="position().maxHeight"
        >
          @for (option of normalizedOptions(); track option.value; let i = $index) {
            <li [id]="optionId(i)" role="option" [attr.aria-selected]="option.value === value()">
              <button
                type="button"
                tabindex="-1"
                (mousedown)="$event.preventDefault()"
                (click)="selectOption(option.value)"
                class="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-[15px] transition hover:bg-field"
                [class.bg-field]="i === activeIndex()"
                [class.font-medium]="option.value === value()"
              >
                {{ option.label }}
                @if (option.value === value()) {
                  <svg solarUnreadLineDuotone [size]="18" [color]="'#1f2430'" class="shrink-0" aria-hidden="true"></svg>
                }
              </button>
            </li>
          }
        </ul>
      }
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], () => [], { selectId: [{ type: Input, args: [{ isSignal: true, alias: "selectId", required: true }] }], options: [{ type: Input, args: [{ isSignal: true, alias: "options", required: true }] }], placeholder: [{ type: Input, args: [{ isSignal: true, alias: "placeholder", required: false }] }], invalid: [{ type: Input, args: [{ isSignal: true, alias: "invalid", required: false }] }], clearable: [{ type: Input, args: [{ isSignal: true, alias: "clearable", required: false }] }], trigger: [{ type: ViewChild, args: ["trigger", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Select, { className: "Select", filePath: "src/app/shared/components/select/select.ts", lineNumber: 109 });
})();

// src/app/shared/components/dialog/dialog.ts
var _c014 = ["panel"];
var _c1 = ["*", [["", "dialogFooter", ""]]];
var _c2 = ["*", "[dialogFooter]"];
function Dialog_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275projection(1, 1);
    \u0275\u0275elementEnd();
  }
}
function Dialog_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2, 0);
    \u0275\u0275listener("keydown", function Dialog_Conditional_0_Template_div_keydown_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onKeydown($event));
    });
    \u0275\u0275elementStart(3, "div", 3)(4, "h2", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 5);
    \u0275\u0275listener("click", function Dialog_Conditional_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(7, "svg", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 7);
    \u0275\u0275projection(9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, Dialog_Conditional_0_Conditional_10_Template, 2, 0, "div", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.title());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.title());
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.hasFooter() ? 10 : -1);
  }
}
var Dialog = class _Dialog {
  open = model.required(...ngDevMode ? [{ debugName: "open" }] : (
    /* istanbul ignore next */
    []
  ));
  title = input.required(...ngDevMode ? [{ debugName: "title" }] : (
    /* istanbul ignore next */
    []
  ));
  hasFooter = input(true, ...ngDevMode ? [{ debugName: "hasFooter" }] : (
    /* istanbul ignore next */
    []
  ));
  document = inject(DOCUMENT);
  panel = viewChild("panel", ...ngDevMode ? [{ debugName: "panel" }] : (
    /* istanbul ignore next */
    []
  ));
  previousFocus = null;
  constructor() {
    this._restoreBodyOnDestroy();
    this._syncScrollLockAndFocus();
  }
  close() {
    this.open.set(false);
  }
  onKeydown(event) {
    if (event.key === "Escape") {
      event.preventDefault();
      this.close();
      return;
    }
    if (event.key !== "Tab") {
      return;
    }
    const focusables = this._focusableElements();
    if (focusables.length === 0) {
      event.preventDefault();
      return;
    }
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const active = this.document.activeElement;
    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  }
  _focusableElements() {
    const panel = this.panel()?.nativeElement;
    if (!panel) {
      return [];
    }
    const selector = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
    return Array.from(panel.querySelectorAll(selector));
  }
  _restoreBodyOnDestroy() {
    inject(DestroyRef).onDestroy(() => {
      this.document.body.style.overflow = "";
      this.previousFocus?.focus?.();
    });
  }
  _syncScrollLockAndFocus() {
    effect(() => {
      const isOpen = this.open();
      const panel = this.panel()?.nativeElement;
      if (isOpen && panel) {
        this.previousFocus = this.document.activeElement;
        this.document.body.style.overflow = "hidden";
        panel.focus();
      } else if (!isOpen) {
        this.document.body.style.overflow = "";
        this.previousFocus?.focus?.();
        this.previousFocus = null;
      }
    });
  }
  static \u0275fac = function Dialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Dialog)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Dialog, selectors: [["app-dialog"]], viewQuery: function Dialog_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.panel, _c014, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, inputs: { open: [1, "open"], title: [1, "title"], hasFooter: [1, "hasFooter"] }, outputs: { open: "openChange" }, ngContentSelectors: _c2, decls: 1, vars: 1, consts: [["panel", ""], [1, "fixed", "inset-0", "z-50", "flex", "items-end", "justify-center", "bg-ink/60", "sm:items-center", "sm:p-4"], ["role", "dialog", "aria-modal", "true", "tabindex", "-1", 1, "flex", "max-h-[90dvh]", "w-full", "max-w-[480px]", "flex-col", "overflow-hidden", "rounded-t-3xl", "bg-white", "shadow-[0_20px_60px_rgba(31,42,64,0.35)]", "outline-none", "sm:rounded-3xl", 3, "keydown"], [1, "flex", "items-center", "justify-between", "gap-4", "border-b", "border-line", "px-6", "py-5"], [1, "text-[22px]", "font-semibold"], ["type", "button", "aria-label", "Cerrar", 1, "-mr-1", "flex", "h-9", "w-9", "shrink-0", "items-center", "justify-center", "rounded-full", "text-muted", "transition", "hover:bg-field", "hover:text-ink", "focus-visible:bg-field", "focus-visible:text-ink", 3, "click"], ["CustomCloseOutline", "", "aria-hidden", "true", 1, "h-5", "w-5"], [1, "flex-1", "overflow-y-auto", "px-6", "py-5"], [1, "border-t", "border-line", "px-6", "py-5"]], template: function Dialog_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c1);
      \u0275\u0275conditionalCreate(0, Dialog_Conditional_0_Template, 11, 3, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.open() ? 0 : -1);
    }
  }, dependencies: [CustomCloseOutline], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dialog, [{
    type: Component,
    args: [{
      selector: "app-dialog",
      imports: [CustomCloseOutline],
      template: `
    @if (open()) {
      <!-- The backdrop is intentionally inert: dialogs only close via the close
           button or Escape, never by an accidental click outside the panel. -->
      <div
        class="fixed inset-0 z-50 flex items-end justify-center bg-ink/60 sm:items-center sm:p-4"
      >
        <div
          #panel
          role="dialog"
          aria-modal="true"
          [attr.aria-label]="title()"
          tabindex="-1"
          (keydown)="onKeydown($event)"
          class="flex max-h-[90dvh] w-full max-w-[480px] flex-col overflow-hidden rounded-t-3xl bg-white shadow-[0_20px_60px_rgba(31,42,64,0.35)] outline-none sm:rounded-3xl"
        >
          <div class="flex items-center justify-between gap-4 border-b border-line px-6 py-5">
            <h2 class="text-[22px] font-semibold">{{ title() }}</h2>
            <button
              type="button"
              (click)="close()"
              aria-label="Cerrar"
              class="-mr-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted transition hover:bg-field hover:text-ink focus-visible:bg-field focus-visible:text-ink"
            >
              <svg CustomCloseOutline class="h-5 w-5" aria-hidden="true"></svg>
            </button>
          </div>

          <div class="flex-1 overflow-y-auto px-6 py-5">
            <ng-content />
          </div>

          @if (hasFooter()) {
            <div class="border-t border-line px-6 py-5">
              <ng-content select="[dialogFooter]" />
            </div>
          }
        </div>
      </div>
    }
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], () => [], { open: [{ type: Input, args: [{ isSignal: true, alias: "open", required: true }] }, { type: Output, args: ["openChange"] }], title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: true }] }], hasFooter: [{ type: Input, args: [{ isSignal: true, alias: "hasFooter", required: false }] }], panel: [{ type: ViewChild, args: ["panel", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Dialog, { className: "Dialog", filePath: "src/app/shared/components/dialog/dialog.ts", lineNumber: 61 });
})();

// src/app/shared/components/legal-dialogs/legal-dialogs.ts
var LegalDialogs = class _LegalDialogs {
  legal = inject(LegalDialogService);
  static \u0275fac = function LegalDialogs_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LegalDialogs)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LegalDialogs, selectors: [["app-legal-dialogs"]], decls: 2614, vars: 2, consts: [["title", "T\xE9rminos de uso", 3, "openChange", "open"], [1, "space-y-1", "text-[15px]", "leading-relaxed", "text-ink"], [1, "text-muted"], [1, "mt-8", "text-[13px]", "font-semibold", "uppercase", "tracking-wide", "text-primary"], [1, "mt-4", "font-medium"], [1, "mt-1", "text-muted"], [1, "mt-1", "list-disc", "space-y-1", "pl-5", "text-muted"], ["dialogFooter", "", "type", "button", 1, "w-full", "rounded-full", "bg-primary", "py-3.5", "text-[15px]", "font-medium", "text-white", "transition", "hover:bg-primary-dark", 3, "click"], ["title", "Pol\xEDtica de privacidad", 3, "openChange", "open"], [1, "text-[13px]", "font-semibold", "uppercase", "tracking-wide", "text-primary"]], template: function LegalDialogs_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-dialog", 0);
      \u0275\u0275listener("openChange", function LegalDialogs_Template_app_dialog_openChange_0_listener($event) {
        return ctx.legal.termsOpen.set($event);
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "p", 2);
      \u0275\u0275text(3, " T\xE9rminos y Condiciones de Uso de la Plataforma BonoPay para Beneficiarios. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h3", 3);
      \u0275\u0275text(5, "CAP\xCDTULO I \u2014 DISPOSICIONES GENERALES");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h4", 4);
      \u0275\u0275text(7, "1. Objeto");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 5);
      \u0275\u0275text(9, 'Los presentes T\xE9rminos y Condiciones regulan el acceso, registro y uso de la plataforma tecnol\xF3gica BonoPay (la "Plataforma") por parte de las personas naturales que, por designaci\xF3n de una empresa, cliente de BonoPay (la "Empresa"), sean invitadas a registrarse con la finalidad de recibir incentivos monetarios otorgados exclusivamente por dicha Empresa.');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 5);
      \u0275\u0275text(11, "BonoPay proporciona una infraestructura tecnol\xF3gica que permite al Beneficiario registrar y mantener actualizada la informaci\xF3n necesaria para facilitar el procesamiento de los pagos instruidos por la Empresa a trav\xE9s de procesadores de pago y entidades financieras autorizadas.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p", 5);
      \u0275\u0275text(13, "La aceptaci\xF3n de estos T\xE9rminos y Condiciones constituye un acuerdo jur\xEDdicamente vinculante entre el Beneficiario y BonoPay respecto del uso de la Plataforma.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "h4", 4);
      \u0275\u0275text(15, "2. Identificaci\xF3n de BonoPay");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "p", 5);
      \u0275\u0275text(17, "La Plataforma es operada por MOTIVA SOLUCIONES S.A.C., sociedad constituida conforme a las leyes de la Rep\xFAblica del Per\xFA, identificada con RUC N\xBA 20537879751, con domicilio en Av. Benavides 768, oficina 306, Miraflores, quien act\xFAa como proveedor de la Plataforma.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p", 5);
      \u0275\u0275text(19, 'Para efectos de estos T\xE9rminos y Condiciones, cualquier referencia a "BonoPay" comprender\xE1 a la sociedad operadora de la Plataforma, sus sucesores, cesionarios autorizados y, cuando corresponda, a las sociedades pertenecientes a su mismo grupo empresarial que participen en la prestaci\xF3n del servicio.');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "h4", 4);
      \u0275\u0275text(21, "3. Naturaleza de la Plataforma");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "p", 5);
      \u0275\u0275text(23, "BonoPay es una plataforma tecnol\xF3gica operada por Motiva Soluciones S.A.C., desarrollada para facilitar la administraci\xF3n de programas de incentivos, el registro de Beneficiarios, la validaci\xF3n de identidad, la gesti\xF3n de informaci\xF3n necesaria para el procesamiento de pagos y la integraci\xF3n con proveedores tecnol\xF3gicos especializados.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "p", 5);
      \u0275\u0275text(25, "Motiva presta servicios tecnol\xF3gicos a las empresas que utilizan BonoPay para administrar programas de incentivos dirigidos a sus colaboradores, clientes, proveedores u otros beneficiarios.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "p", 5);
      \u0275\u0275text(27, "En el marco de la prestaci\xF3n de dichos servicios, Motiva act\xFAa como responsable del tratamiento de los datos personales tratados mediante la Plataforma, conforme a lo dispuesto en la Ley N\xB0 29733, su Reglamento y la Pol\xEDtica de Privacidad de BonoPay.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "p", 5);
      \u0275\u0275text(29, "La Plataforma constituye una infraestructura tecnol\xF3gica destinada a facilitar la administraci\xF3n de programas de incentivos y el procesamiento de operaciones asociadas a dichos programas.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "p", 5);
      \u0275\u0275text(31, "En ning\xFAn caso BonoPay:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "p", 5);
      \u0275\u0275text(33, "a) otorga cr\xE9ditos;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "p", 5);
      \u0275\u0275text(35, "b) recibe dep\xF3sitos del p\xFAblico;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "p", 5);
      \u0275\u0275text(37, "c) realiza actividades propias de una empresa del sistema financiero;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "p", 5);
      \u0275\u0275text(39, "d) administra fondos propios de los Beneficiarios;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "p", 5);
      \u0275\u0275text(41, "e) presta servicios financieros regulados.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "p", 5);
      \u0275\u0275text(43, "Asimismo, BonoPay no decide el otorgamiento de incentivos econ\xF3micos, cuya asignaci\xF3n corresponde a la empresa cliente conforme a las reglas de cada programa.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "h4", 4);
      \u0275\u0275text(45, "4. Relaci\xF3n entre las Partes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "p", 5);
      \u0275\u0275text(47, "En la utilizaci\xF3n de la Plataforma intervienen diversos sujetos con funciones independientes:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "p", 5);
      \u0275\u0275text(49, "a) Motiva");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "p", 5);
      \u0275\u0275text(51, "Motiva Soluciones S.A.C. administra y opera la Plataforma BonoPay.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "p", 5);
      \u0275\u0275text(53, "Como responsable del tratamiento de los datos personales recopilados mediante la Plataforma, Motiva determina las finalidades y los medios del tratamiento conforme a la Pol\xEDtica de Privacidad y a la legislaci\xF3n aplicable.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "p", 5);
      \u0275\u0275text(55, "Asimismo, Motiva presta los servicios tecnol\xF3gicos necesarios para la administraci\xF3n del registro de Beneficiarios, la autenticaci\xF3n de usuarios, la gesti\xF3n de la informaci\xF3n necesaria para el procesamiento de incentivos y la integraci\xF3n con proveedores tecnol\xF3gicos.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "p", 5);
      \u0275\u0275text(57, "b) Empresa Cliente");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "p", 5);
      \u0275\u0275text(59, "La Empresa Cliente utiliza BonoPay para administrar sus programas de incentivos y determinar:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "ul", 6)(61, "li");
      \u0275\u0275text(62, "los beneficiarios;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "li");
      \u0275\u0275text(64, "los criterios de elegibilidad;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "li");
      \u0275\u0275text(66, "los montos de los incentivos;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "li");
      \u0275\u0275text(68, "las instrucciones de pago.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "p", 5);
      \u0275\u0275text(70, "La Empresa Cliente es responsable de la informaci\xF3n que proporciona a Motiva y garantiza que cuenta con la base legal correspondiente para comunicar dicha informaci\xF3n cuando ello sea necesario para la prestaci\xF3n de los Servicios.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "p", 5);
      \u0275\u0275text(72, "c) BonoPay");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "p", 5);
      \u0275\u0275text(74, "Motiva, a trav\xE9s de la Plataforma BonoPay, presta exclusivamente servicios tecnol\xF3gicos relacionados con:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "ul", 6)(76, "li");
      \u0275\u0275text(77, "el registro del Beneficiario;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "li");
      \u0275\u0275text(79, "la validaci\xF3n de identidad;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "li");
      \u0275\u0275text(81, "la autenticaci\xF3n de usuarios;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "li");
      \u0275\u0275text(83, "la administraci\xF3n de informaci\xF3n necesaria para los pagos;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "li");
      \u0275\u0275text(85, "la integraci\xF3n tecnol\xF3gica con procesadores de pago;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "li");
      \u0275\u0275text(87, "la conservaci\xF3n de registros electr\xF3nicos;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "li");
      \u0275\u0275text(89, "la trazabilidad de las operaciones realizadas en la Plataforma.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(90, "p", 5);
      \u0275\u0275text(91, "d) Procesadores de Pago y Entidades Financieras");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "p", 5);
      \u0275\u0275text(93, "La ejecuci\xF3n material de las transferencias de fondos es realizada por terceros especializados, tales como procesadores de pago, entidades financieras, operadores de billeteras m\xF3viles u otras entidades participantes en la cadena de pago.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "p", 5);
      \u0275\u0275text(95, "La intervenci\xF3n de dichos terceros se encuentra sujeta a sus propias condiciones operativas, regulatorias y tecnol\xF3gicas.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "h4", 4);
      \u0275\u0275text(97, "5. Aceptaci\xF3n de los T\xE9rminos y Condiciones");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "p", 5);
      \u0275\u0275text(99, "El acceso y utilizaci\xF3n de la Plataforma requiere la aceptaci\xF3n expresa de los presentes T\xE9rminos y Condiciones.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "p", 5);
      \u0275\u0275text(101, "La aceptaci\xF3n podr\xE1 efectuarse mediante cualquier mecanismo de contrataci\xF3n electr\xF3nica implementado por BonoPay, incluyendo, entre otros:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "ul", 6)(103, "li");
      \u0275\u0275text(104, 'la selecci\xF3n de casillas de aceptaci\xF3n ("checkbox");');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "li");
      \u0275\u0275text(106, "la confirmaci\xF3n mediante botones de aceptaci\xF3n;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "li");
      \u0275\u0275text(108, "mecanismos de autenticaci\xF3n electr\xF3nica;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "li");
      \u0275\u0275text(110, "validaciones mediante c\xF3digos de un solo uso (OTP);");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "li");
      \u0275\u0275text(112, "otros mecanismos tecnol\xF3gicos razonablemente equivalentes que permitan acreditar la manifestaci\xF3n de voluntad del Beneficiario.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(113, "p", 5);
      \u0275\u0275text(114, "La aceptaci\xF3n producir\xE1 plenos efectos jur\xEDdicos desde el momento en que quede registrada en los sistemas de BonoPay.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "p", 5);
      \u0275\u0275text(116, "El Beneficiario declara haber le\xEDdo \xEDntegramente estos T\xE9rminos y Condiciones, comprender su contenido y aceptar voluntariamente todas sus disposiciones.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "h4", 4);
      \u0275\u0275text(118, "6. Capacidad para utilizar la Plataforma");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "p", 5);
      \u0275\u0275text(120, "El Beneficiario declara que cuenta con capacidad legal suficiente para celebrar el presente acuerdo y utilizar la Plataforma.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "p", 5);
      \u0275\u0275text(122, "Cuando la legislaci\xF3n aplicable exija requisitos adicionales para determinadas categor\xEDas de usuarios, el Beneficiario declara cumplirlos \xEDntegramente.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "p", 5);
      \u0275\u0275text(124, "Motiva podr\xE1 solicitar informaci\xF3n adicional destinada a verificar la identidad o capacidad del Beneficiario cuando ello resulte necesario para la adecuada prestaci\xF3n del servicio, la prevenci\xF3n del fraude o el cumplimiento de obligaciones legales.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "h4", 4);
      \u0275\u0275text(126, "7. Definiciones");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "p", 5);
      \u0275\u0275text(128, "Para efectos de estos T\xE9rminos y Condiciones, los siguientes t\xE9rminos tendr\xE1n el significado que se les asigna a continuaci\xF3n:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "ul", 6)(130, "li");
      \u0275\u0275text(131, "Beneficiario: Persona natural invitada por el Empresa para registrarse en la Plataforma y recibir incentivos monetarios.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "li");
      \u0275\u0275text(133, "Empresa: Persona jur\xEDdica que contrata los servicios de BonoPay para gestionar programas de incentivos.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "li");
      \u0275\u0275text(135, "Cuenta: Registro electr\xF3nico asociado al Beneficiario dentro de la Plataforma.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "li");
      \u0275\u0275text(137, "Incentivo: Pago monetario cuya entrega es decidida y autorizada exclusivamente por el Empresa.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "li");
      \u0275\u0275text(139, "OTP (One Time Password): C\xF3digo de un solo uso utilizado como mecanismo de autenticaci\xF3n del Beneficiario.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "li");
      \u0275\u0275text(141, "Procesador de Pago: Tercero especializado encargado de ejecutar instrucciones de pago transmitidas por BonoPay.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "li");
      \u0275\u0275text(143, "Plataforma: El conjunto de aplicaciones, interfaces, bases de datos, servicios, infraestructura tecnol\xF3gica y dem\xE1s componentes operados por BonoPay para la gesti\xF3n del registro de Beneficiarios y el procesamiento de instrucciones de pago.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "li");
      \u0275\u0275text(145, "Servicios: Los servicios tecnol\xF3gicos prestados por BonoPay a trav\xE9s de la Plataforma.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(146, "h4", 4);
      \u0275\u0275text(147, "8. Modificaciones");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "p", 5);
      \u0275\u0275text(149, "Motiva podr\xE1 modificar los presentes T\xE9rminos y Condiciones cuando resulte necesario para:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "ul", 6)(151, "li");
      \u0275\u0275text(152, "incorporar nuevas funcionalidades;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "li");
      \u0275\u0275text(154, "adecuarse a cambios normativos;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "li");
      \u0275\u0275text(156, "implementar mejoras de seguridad;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "li");
      \u0275\u0275text(158, "integrar nuevos proveedores tecnol\xF3gicos;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(159, "li");
      \u0275\u0275text(160, "incorporar nuevos medios de autenticaci\xF3n;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "li");
      \u0275\u0275text(162, "optimizar la prestaci\xF3n del servicio.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(163, "p", 5);
      \u0275\u0275text(164, "Las modificaciones ser\xE1n comunicadas mediante la Plataforma, correo electr\xF3nico, WhatsApp u otros medios electr\xF3nicos razonablemente id\xF3neos.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(165, "p", 5);
      \u0275\u0275text(166, "Cuando la naturaleza de la modificaci\xF3n as\xED lo requiera, Motiva podr\xE1 solicitar una nueva aceptaci\xF3n de los T\xE9rminos y Condiciones antes de permitir el acceso continuado a la Plataforma.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(167, "p", 5);
      \u0275\u0275text(168, "La continuidad en el uso de la Plataforma despu\xE9s de la entrada en vigor de las modificaciones constituir\xE1 aceptaci\xF3n de estas, salvo cuando la normativa aplicable exija un mecanismo distinto de manifestaci\xF3n de voluntad.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(169, "h3", 3);
      \u0275\u0275text(170, "CAP\xCDTULO II \u2014 REGISTRO DEL BENEFICIARIO, VALIDACI\xD3N DE IDENTIDAD Y CREACI\xD3N DE LA CUENTA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(171, "h4", 4);
      \u0275\u0275text(172, "9. Invitaci\xF3n al Beneficiario");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "p", 5);
      \u0275\u0275text(174, "El acceso a la Plataforma \xFAnicamente podr\xE1 realizarse mediante una invitaci\xF3n generada por BonoPay a solicitud de la Empresa.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "p", 5);
      \u0275\u0275text(176, "Para tal efecto, la Empresa proporcionar\xE1 a BonoPay la informaci\xF3n m\xEDnima necesaria para identificar al potencial Beneficiario y remitir la invitaci\xF3n correspondiente, incluyendo, entre otros, el tipo y n\xFAmero de documento de identidad, el n\xFAmero de tel\xE9fono m\xF3vil asociado a la cuenta de WhatsApp del Beneficiario y cualquier otra informaci\xF3n que resulte necesaria para la administraci\xF3n del programa de incentivos.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "p", 5);
      \u0275\u0275text(178, "La invitaci\xF3n ser\xE1 remitida al n\xFAmero telef\xF3nico informado por la Empresa utilizando los canales de comunicaci\xF3n habilitados por BonoPay, incluyendo WhatsApp u otros medios electr\xF3nicos que puedan implementarse en el futuro.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "p", 5);
      \u0275\u0275text(180, "El Beneficiario reconoce que BonoPay remite dicha invitaci\xF3n sobre la base de la informaci\xF3n proporcionada por la Empresa y que no participa en la obtenci\xF3n inicial de dichos datos personales.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(181, "p", 5);
      \u0275\u0275text(182, "En consecuencia, el Beneficiario reconoce que cualquier consulta, observaci\xF3n o reclamaci\xF3n relacionada con la incorporaci\xF3n inicial de su n\xFAmero telef\xF3nico o dem\xE1s datos suministrados por la Empresa deber\xE1 dirigirse, en lo que corresponda, a dicho Empresa, sin perjuicio de los derechos que le asistan conforme a la normativa sobre protecci\xF3n de datos personales.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(183, "h4", 4);
      \u0275\u0275text(184, "10. Declaraci\xF3n del Empresa respecto de la informaci\xF3n inicial");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(185, "p", 5);
      \u0275\u0275text(186, "BonoPay presta el servicio sobre la base de la informaci\xF3n proporcionada por la Empresa.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(187, "p", 5);
      \u0275\u0275text(188, "La Empresa declara que (i) la informaci\xF3n entregada es exacta, actualizada y obtenida l\xEDcitamente, siendo la Empresa la \xFAnica responsable de contar con base legal para su tratamiento; y (ii) mantiene indemne a BonoPay/Motiva frente a sanciones, multas o reclamaciones derivadas de la obtenci\xF3n il\xEDcita de los datos, ausencia de consentimiento o incumplimiento de deberes de informaci\xF3n frente a los Beneficiarios.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(189, "p", 5);
      \u0275\u0275text(190, "En consecuencia, BonoPay act\xFAa bajo la declaraci\xF3n y garant\xEDa de la Empresa de que cuenta con la autorizaci\xF3n, consentimiento, base legal u otro mecanismo habilitante exigido por la legislaci\xF3n aplicable para comunicar a BonoPay los datos personales necesarios para la identificaci\xF3n del Beneficiario y la prestaci\xF3n del servicio.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(191, "p", 5);
      \u0275\u0275text(192, "El Beneficiario reconoce que BonoPay utiliza dicha informaci\xF3n exclusivamente para facilitar el proceso de registro, autenticaci\xF3n y procesamiento de los incentivos monetarios autorizados por la Empresa.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(193, "h4", 4);
      \u0275\u0275text(194, "11. Acceso al enlace de registro");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(195, "p", 5);
      \u0275\u0275text(196, "La invitaci\xF3n contendr\xE1 un enlace electr\xF3nico personal destinado exclusivamente al Beneficiario identificado por la Empresa.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(197, "p", 5);
      \u0275\u0275text(198, "El Beneficiario deber\xE1 adoptar las medidas razonables para preservar la confidencialidad del enlace recibido y abstenerse de compartirlo con terceros.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(199, "p", 5);
      \u0275\u0275text(200, "Motiva podr\xE1 establecer mecanismos adicionales de seguridad cuando detecte riesgos de acceso no autorizado, fraude, uso indebido o cualquier circunstancia que pudiera comprometer la seguridad de la Plataforma.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(201, "p", 5);
      \u0275\u0275text(202, "El acceso al enlace no garantiza por s\xED mismo la habilitaci\xF3n para recibir incentivos monetarios, la cual estar\xE1 condicionada al cumplimiento del procedimiento de registro previsto en estos T\xE9rminos y Condiciones.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(203, "h4", 4);
      \u0275\u0275text(204, "12. Validaci\xF3n de identidad");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(205, "p", 5);
      \u0275\u0275text(206, "Como condici\xF3n previa para el uso de la Plataforma, el Beneficiario deber\xE1 validar su identidad mediante el ingreso de la informaci\xF3n solicitada por BonoPay.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(207, "p", 5);
      \u0275\u0275text(208, "BonoPay valida la identidad \xFAnicamente para fines de autenticaci\xF3n y seguridad, sin decidir la elegibilidad del Beneficiario para el programa de incentivos, facultad que corresponde exclusivamente a la Empresa.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(209, "p", 5);
      \u0275\u0275text(210, "La Plataforma verificar\xE1 que la informaci\xF3n proporcionada coincida con aquella previamente registrada por el Empresa.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(211, "p", 5);
      \u0275\u0275text(212, "Cuando la validaci\xF3n resulte satisfactoria, el Beneficiario podr\xE1 continuar con el proceso de registro.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(213, "p", 5);
      \u0275\u0275text(214, "Si la informaci\xF3n no coincide con los registros disponibles o existen inconsistencias que impidan verificar razonablemente la identidad del Beneficiario, Motiva podr\xE1 impedir temporalmente el avance del proceso, solicitar informaci\xF3n adicional o disponer la suspensi\xF3n del registro hasta que la situaci\xF3n sea aclarada.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(215, "p", 5);
      \u0275\u0275text(216, "La validaci\xF3n de identidad constituye un mecanismo de seguridad destinado a reducir riesgos de fraude, suplantaci\xF3n de identidad, accesos no autorizados y errores en el procesamiento de incentivos.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(217, "h4", 4);
      \u0275\u0275text(218, "13. Autenticaci\xF3n mediante c\xF3digos OTP");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(219, "p", 5);
      \u0275\u0275text(220, "Una vez validada la identidad del Beneficiario, Motiva podr\xE1 remitir un c\xF3digo de verificaci\xF3n de un solo uso (OTP) al n\xFAmero telef\xF3nico registrado.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(221, "p", 5);
      \u0275\u0275text(222, "El Beneficiario reconoce que el OTP constituye un mecanismo de autenticaci\xF3n electr\xF3nica destinado a verificar que mantiene el control del n\xFAmero telef\xF3nico registrado durante el proceso de incorporaci\xF3n.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "p", 5);
      \u0275\u0275text(224, "El Beneficiario se obliga a mantener la confidencialidad del OTP y a no compartirlo con terceros.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(225, "p", 5);
      \u0275\u0275text(226, "BonoPay nunca solicitar\xE1 al Beneficiario que revele un c\xF3digo OTP fuera de los canales oficiales de autenticaci\xF3n implementados en la Plataforma.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(227, "p", 5);
      \u0275\u0275text(228, "Toda autenticaci\xF3n realizada mediante un OTP correctamente validado generar\xE1 un registro electr\xF3nico que podr\xE1 ser utilizado como evidencia de la autenticaci\xF3n realizada.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(229, "p", 5);
      \u0275\u0275text(230, "Cuando existan indicios razonables de fraude, accesos irregulares, intentos reiterados de autenticaci\xF3n fallida o cualquier circunstancia que comprometa la seguridad del proceso, Motiva podr\xE1 requerir mecanismos adicionales de validaci\xF3n antes de habilitar el acceso a la Plataforma.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(231, "h4", 4);
      \u0275\u0275text(232, "14. Registro de informaci\xF3n personal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(233, "p", 5);
      \u0275\u0275text(234, "Una vez superadas las etapas de validaci\xF3n y autenticaci\xF3n, el Beneficiario deber\xE1 completar la informaci\xF3n requerida por la Plataforma.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(235, "p", 5);
      \u0275\u0275text(236, "La informaci\xF3n podr\xE1 comprender, entre otros:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(237, "ul", 6)(238, "li");
      \u0275\u0275text(239, "nombres y apellidos;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(240, "li");
      \u0275\u0275text(241, "correo electr\xF3nico;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(242, "li");
      \u0275\u0275text(243, "informaci\xF3n de contacto;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(244, "li");
      \u0275\u0275text(245, "entidad financiera;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(246, "li");
      \u0275\u0275text(247, "n\xFAmero de cuenta;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(248, "li");
      \u0275\u0275text(249, "c\xF3digo de cuenta interbancaria (CCI);");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(250, "li");
      \u0275\u0275text(251, "informaci\xF3n de billeteras m\xF3viles;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(252, "li");
      \u0275\u0275text(253, "dem\xE1s datos necesarios para la prestaci\xF3n del servicio.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(254, "p", 5);
      \u0275\u0275text(255, "La informaci\xF3n registrada deber\xE1 ser completa, exacta, vigente y verificable.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(256, "p", 5);
      \u0275\u0275text(257, "El Beneficiario asume plena responsabilidad por la veracidad y actualizaci\xF3n de los datos suministrados.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(258, "h4", 4);
      \u0275\u0275text(259, "15. Registro de informaci\xF3n financiera");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(260, "p", 5);
      \u0275\u0275text(261, "La informaci\xF3n financiera registrada por el Beneficiario ser\xE1 utilizada exclusivamente para facilitar el procesamiento de los incentivos monetarios autorizados por la Empresa.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(262, "p", 5);
      \u0275\u0275text(263, "El Beneficiario declara que la cuenta bancaria, billetera m\xF3vil u otro medio de pago registrado le pertenece o que cuenta con las autorizaciones necesarias para su utilizaci\xF3n conforme a la legislaci\xF3n aplicable.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(264, "p", 5);
      \u0275\u0275text(265, "Motiva podr\xE1 establecer validaciones autom\xE1ticas o manuales destinadas a verificar la consistencia de la informaci\xF3n financiera registrada, sin que ello implique asumir obligaci\xF3n alguna de confirmar la titularidad efectiva de las cuentas registradas.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(266, "p", 5);
      \u0275\u0275text(267, "El Beneficiario podr\xE1 actualizar dicha informaci\xF3n utilizando los mecanismos habilitados por la Plataforma.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(268, "p", 5);
      \u0275\u0275text(269, "Las modificaciones producir\xE1n efectos \xFAnicamente respecto de los pagos cuya instrucci\xF3n a\xFAn no hubiera sido transmitida al procesador correspondiente.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(270, "h4", 4);
      \u0275\u0275text(271, "16. Declaraciones y garant\xEDas del Beneficiario");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(272, "p", 5);
      \u0275\u0275text(273, "Al completar el proceso de registro, el Beneficiario declara y garantiza que:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(274, "p", 5);
      \u0275\u0275text(275, "a) toda la informaci\xF3n proporcionada es verdadera, completa, exacta y vigente;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(276, "p", 5);
      \u0275\u0275text(277, "b) mantendr\xE1 actualizada dicha informaci\xF3n durante todo el tiempo que utilice la Plataforma;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(278, "p", 5);
      \u0275\u0275text(279, "c) es el leg\xEDtimo usuario del n\xFAmero telef\xF3nico utilizado para el proceso de autenticaci\xF3n;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(280, "p", 5);
      \u0275\u0275text(281, "d) custodiar\xE1 adecuadamente el dispositivo desde el cual accede a la Plataforma;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(282, "p", 5);
      \u0275\u0275text(283, "e) proteger\xE1 la confidencialidad de los c\xF3digos OTP y dem\xE1s mecanismos de autenticaci\xF3n;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(284, "p", 5);
      \u0275\u0275text(285, "f) utilizar\xE1 la Plataforma \xFAnicamente para los fines previstos en estos T\xE9rminos y Condiciones;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(286, "p", 5);
      \u0275\u0275text(287, "g) no realizar\xE1 actos de fraude, suplantaci\xF3n de identidad, manipulaci\xF3n de informaci\xF3n o cualquier otra conducta destinada a obtener incentivos de manera indebida;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(288, "p", 5);
      \u0275\u0275text(289, "h) notificar\xE1 oportunamente a BonoPay cualquier acceso no autorizado, p\xE9rdida de control de su dispositivo, sospecha de fraude o cualquier incidente de seguridad que pudiera afectar su cuenta.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(290, "h4", 4);
      \u0275\u0275text(291, "17. Evidencia electr\xF3nica del proceso de registro");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(292, "p", 5);
      \u0275\u0275text(293, "El Beneficiario reconoce y acepta que BonoPay conservar\xE1 evidencia electr\xF3nica relacionada con el proceso de incorporaci\xF3n y uso de la Plataforma por un plazo m\xE1ximo de 5 a\xF1os.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(294, "p", 5);
      \u0275\u0275text(295, "Dicha evidencia podr\xE1 comprender, entre otros elementos:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(296, "ul", 6)(297, "li");
      \u0275\u0275text(298, "fecha y hora de cada operaci\xF3n;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(299, "li");
      \u0275\u0275text(300, "direcciones IP;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(301, "li");
      \u0275\u0275text(302, "identificadores de sesi\xF3n;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(303, "li");
      \u0275\u0275text(304, "registros de autenticaci\xF3n;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(305, "li");
      \u0275\u0275text(306, "aceptaci\xF3n de los presentes T\xE9rminos y Condiciones;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(307, "li");
      \u0275\u0275text(308, "aceptaci\xF3n de la Pol\xEDtica de Privacidad;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(309, "li");
      \u0275\u0275text(310, "validaciones OTP;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(311, "li");
      \u0275\u0275text(312, "historial de modificaciones;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(313, "li");
      \u0275\u0275text(314, "registros de auditor\xEDa;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(315, "li");
      \u0275\u0275text(316, "dem\xE1s evidencias t\xE9cnicas generadas por la Plataforma.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(317, "p", 5);
      \u0275\u0275text(318, "Salvo prueba en contrario, dichos registros constituir\xE1n evidencia suficiente de las actuaciones realizadas por el Beneficiario a trav\xE9s de la Plataforma y podr\xE1n ser utilizados para fines de auditor\xEDa, prevenci\xF3n de fraude, atenci\xF3n de reclamaciones, cumplimiento de obligaciones legales y, cuando corresponda, como medio probatorio ante las autoridades competentes.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(319, "h3", 3);
      \u0275\u0275text(320, "CAP\xCDTULO III \u2014 USO DE LA PLATAFORMA, OBLIGACIONES DEL BENEFICIARIO Y COMUNICACIONES ELECTR\xD3NICAS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(321, "h4", 4);
      \u0275\u0275text(322, "18. Derecho de uso de la Plataforma");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(323, "p", 5);
      \u0275\u0275text(324, "Una vez concluido satisfactoriamente el proceso de registro y aceptaci\xF3n de los presentes T\xE9rminos y Condiciones, BonoPay otorgar\xE1 al Beneficiario una autorizaci\xF3n personal, limitada, revocable, no exclusiva, intransferible y no sublicenciable para acceder y utilizar la Plataforma exclusivamente para los fines previstos en este documento.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(325, "p", 5);
      \u0275\u0275text(326, "Dicha autorizaci\xF3n no implica la transferencia de derecho alguno sobre la Plataforma, su software, bases de datos, interfaces, algoritmos, desarrollos tecnol\xF3gicos, contenidos o cualquier otro activo de propiedad intelectual de BonoPay.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(327, "p", 5);
      \u0275\u0275text(328, "El Beneficiario \xFAnicamente podr\xE1 utilizar la Plataforma para gestionar la informaci\xF3n necesaria para recibir los incentivos monetarios autorizados por el Empresa.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(329, "h4", 4);
      \u0275\u0275text(330, "19. Obligaciones generales del Beneficiario");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(331, "p", 5);
      \u0275\u0275text(332, "Durante la utilizaci\xF3n de la Plataforma, el Beneficiario se obliga a:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(333, "p", 5);
      \u0275\u0275text(334, "a) proporcionar informaci\xF3n completa, exacta y veraz;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(335, "p", 5);
      \u0275\u0275text(336, "b) mantener permanentemente actualizados sus datos personales y financieros;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(337, "p", 5);
      \u0275\u0275text(338, "c) custodiar adecuadamente el dispositivo utilizado para acceder a la Plataforma;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(339, "p", 5);
      \u0275\u0275text(340, "d) mantener bajo estricta confidencialidad los mecanismos de autenticaci\xF3n utilizados por BonoPay;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(341, "p", 5);
      \u0275\u0275text(342, "e) utilizar exclusivamente cuentas bancarias o billeteras m\xF3viles respecto de las cuales se encuentre leg\xEDtimamente autorizado;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(343, "p", 5);
      \u0275\u0275text(344, "f) revisar peri\xF3dicamente la informaci\xF3n registrada en la Plataforma;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(345, "p", 5);
      \u0275\u0275text(346, "g) comunicar inmediatamente a BonoPay cualquier circunstancia que pueda comprometer la seguridad de su cuenta;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(347, "p", 5);
      \u0275\u0275text(348, "h) utilizar la Plataforma conforme a la legislaci\xF3n peruana y a los presentes T\xE9rminos y Condiciones;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(349, "p", 5);
      \u0275\u0275text(350, "i) colaborar razonablemente en los procesos de verificaci\xF3n que BonoPay pueda implementar para prevenir fraude o cumplir obligaciones regulatorias.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(351, "h4", 4);
      \u0275\u0275text(352, "20. Conductas prohibidas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(353, "p", 5);
      \u0275\u0275text(354, "El Beneficiario se abstendr\xE1 de realizar, entre otras, las siguientes conductas:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(355, "p", 5);
      \u0275\u0275text(356, "a) proporcionar informaci\xF3n falsa, incompleta o inexacta;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(357, "p", 5);
      \u0275\u0275text(358, "b) registrar cuentas bancarias pertenecientes a terceros sin autorizaci\xF3n;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(359, "p", 5);
      \u0275\u0275text(360, "c) intentar acceder a registros correspondientes a otros Beneficiarios;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(361, "p", 5);
      \u0275\u0275text(362, "d) eludir los mecanismos de autenticaci\xF3n implementados por BonoPay;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(363, "p", 5);
      \u0275\u0275text(364, "e) compartir c\xF3digos OTP o mecanismos de autenticaci\xF3n;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(365, "p", 5);
      \u0275\u0275text(366, "f) utilizar programas automatizados, robots, scripts o mecanismos similares para interactuar con la Plataforma;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(367, "p", 5);
      \u0275\u0275text(368, "g) interferir en el funcionamiento de la Plataforma o intentar vulnerar sus medidas de seguridad;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(369, "p", 5);
      \u0275\u0275text(370, "h) realizar actividades fraudulentas o destinadas a obtener incentivos de manera indebida;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(371, "p", 5);
      \u0275\u0275text(372, "i) utilizar la Plataforma con fines distintos de aquellos previstos en estos T\xE9rminos y Condiciones;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(373, "p", 5);
      \u0275\u0275text(374, "j) desarrollar cualquier actividad que pueda afectar la disponibilidad, integridad, confidencialidad o seguridad de la Plataforma.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(375, "p", 5);
      \u0275\u0275text(376, "El incumplimiento de estas obligaciones podr\xE1 dar lugar a la suspensi\xF3n o terminaci\xF3n del acceso, sin perjuicio de las acciones legales que pudieran corresponder.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(377, "h4", 4);
      \u0275\u0275text(378, "21. Actualizaci\xF3n de la informaci\xF3n registrada");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(379, "p", 5);
      \u0275\u0275text(380, "El Beneficiario podr\xE1 actualizar la informaci\xF3n registrada utilizando los mecanismos habilitados por BonoPay.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(381, "p", 5);
      \u0275\u0275text(382, "Toda modificaci\xF3n realizada deber\xE1 corresponder a informaci\xF3n verdadera, vigente y verificable.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(383, "p", 5);
      \u0275\u0275text(384, "Las modificaciones efectuadas no afectar\xE1n las instrucciones de pago que ya hubieran sido transmitidas al procesador de pagos correspondiente.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(385, "p", 5);
      \u0275\u0275text(386, "Cuando BonoPay detecte modificaciones inusuales, inconsistentes o que puedan representar un riesgo de fraude, podr\xE1 requerir validaciones adicionales antes de habilitar el uso de la nueva informaci\xF3n registrada.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(387, "h4", 4);
      \u0275\u0275text(388, "22. Comunicaciones electr\xF3nicas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(389, "p", 5);
      \u0275\u0275text(390, "El Beneficiario acepta que todas las comunicaciones relacionadas con la prestaci\xF3n del servicio podr\xE1n realizarse por medios electr\xF3nicos.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(391, "p", 5);
      \u0275\u0275text(392, "Estas comunicaciones podr\xE1n efectuarse mediante:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(393, "ul", 6)(394, "li");
      \u0275\u0275text(395, "WhatsApp;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(396, "li");
      \u0275\u0275text(397, "correo electr\xF3nico;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(398, "li");
      \u0275\u0275text(399, "mensajes SMS;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(400, "li");
      \u0275\u0275text(401, "notificaciones dentro de la Plataforma;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(402, "li");
      \u0275\u0275text(403, "otros canales tecnol\xF3gicos que BonoPay implemente razonablemente en el futuro.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(404, "p", 5);
      \u0275\u0275text(405, "Las comunicaciones podr\xE1n comprender, entre otras:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(406, "ul", 6)(407, "li");
      \u0275\u0275text(408, "invitaciones para registrarse;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(409, "li");
      \u0275\u0275text(410, "autenticaci\xF3n mediante OTP;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(411, "li");
      \u0275\u0275text(412, "confirmaciones de registro;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(413, "li");
      \u0275\u0275text(414, "validaciones de identidad;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(415, "li");
      \u0275\u0275text(416, "actualizaci\xF3n de informaci\xF3n;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(417, "li");
      \u0275\u0275text(418, "notificaciones relacionadas con el procesamiento de incentivos;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(419, "li");
      \u0275\u0275text(420, "alertas de seguridad;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(421, "li");
      \u0275\u0275text(422, "comunicaciones operativas necesarias para la prestaci\xF3n del servicio.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(423, "p", 5);
      \u0275\u0275text(424, "El Beneficiario reconoce que dichas comunicaciones constituyen comunicaciones operativas indispensables para el funcionamiento de la Plataforma y no necesariamente tienen naturaleza publicitaria.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(425, "h4", 4);
      \u0275\u0275text(426, "23. Responsabilidad respecto del dispositivo y canales de comunicaci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(427, "p", 5);
      \u0275\u0275text(428, "El Beneficiario ser\xE1 responsable de mantener bajo su control el dispositivo m\xF3vil, n\xFAmero telef\xF3nico, cuenta de correo electr\xF3nico y dem\xE1s medios utilizados para acceder a la Plataforma.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(429, "p", 5);
      \u0275\u0275text(430, "En consecuencia, el Beneficiario asume la responsabilidad derivada de:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(431, "ul", 6)(432, "li");
      \u0275\u0275text(433, "p\xE9rdida del dispositivo;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(434, "li");
      \u0275\u0275text(435, "cambio del n\xFAmero telef\xF3nico sin actualizar la informaci\xF3n correspondiente;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(436, "li");
      \u0275\u0275text(437, "acceso por personas no autorizadas;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(438, "li");
      \u0275\u0275text(439, "instalaci\xF3n de programas maliciosos;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(440, "li");
      \u0275\u0275text(441, "utilizaci\xF3n de redes inseguras;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(442, "li");
      \u0275\u0275text(443, "cualquier otra circunstancia atribuible a la falta de diligencia en la protecci\xF3n de sus dispositivos o credenciales.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(444, "p", 5);
      \u0275\u0275text(445, "BonoPay no ser\xE1 responsable por los perjuicios derivados del acceso realizado por terceros utilizando credenciales, dispositivos o mecanismos de autenticaci\xF3n que se encontraban bajo el control del Beneficiario, salvo que dicho acceso sea consecuencia de una falla atribuible a BonoPay.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(446, "h4", 4);
      \u0275\u0275text(447, "24. Medidas de seguridad");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(448, "p", 5);
      \u0275\u0275text(449, "Motiva podr\xE1 implementar en cualquier momento medidas t\xE9cnicas, organizativas o procedimentales destinadas a preservar la seguridad de la Plataforma.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(450, "p", 5);
      \u0275\u0275text(451, "Entre dichas medidas podr\xE1n incluirse:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(452, "ul", 6)(453, "li");
      \u0275\u0275text(454, "autenticaci\xF3n multifactor;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(455, "li");
      \u0275\u0275text(456, "validaciones biom\xE9tricas;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(457, "li");
      \u0275\u0275text(458, "verificaci\xF3n documental;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(459, "li");
      \u0275\u0275text(460, "validaciones autom\xE1ticas;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(461, "li");
      \u0275\u0275text(462, "monitoreo de operaciones;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(463, "li");
      \u0275\u0275text(464, "an\xE1lisis de riesgo;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(465, "li");
      \u0275\u0275text(466, "controles antifraude;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(467, "li");
      \u0275\u0275text(468, "bloqueos preventivos;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(469, "li");
      \u0275\u0275text(470, "verificaciones adicionales de identidad.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(471, "p", 5);
      \u0275\u0275text(472, "El Beneficiario acepta colaborar razonablemente con la implementaci\xF3n de dichas medidas cuando resulten necesarias para proteger la seguridad de la Plataforma o de los dem\xE1s usuarios.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(473, "h4", 4);
      \u0275\u0275text(474, "25. Facultades de BonoPay para restringir el acceso");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(475, "p", 5);
      \u0275\u0275text(476, "Motiva podr\xE1 restringir temporalmente determinadas funcionalidades o suspender preventivamente el acceso del Beneficiario cuando existan indicios razonables de:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(477, "p", 5);
      \u0275\u0275text(478, "a) fraude;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(479, "p", 5);
      \u0275\u0275text(480, "b) intento de suplantaci\xF3n de identidad;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(481, "p", 5);
      \u0275\u0275text(482, "c) inconsistencias significativas en la informaci\xF3n registrada;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(483, "p", 5);
      \u0275\u0275text(484, "d) accesos inusuales o de alto riesgo;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(485, "p", 5);
      \u0275\u0275text(486, "e) incumplimiento de estos T\xE9rminos y Condiciones;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(487, "p", 5);
      \u0275\u0275text(488, "f) requerimientos emitidos por autoridades competentes;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(489, "p", 5);
      \u0275\u0275text(490, "g) incidentes de ciberseguridad;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(491, "p", 5);
      \u0275\u0275text(492, "h) utilizaci\xF3n indebida de la Plataforma.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(493, "p", 5);
      \u0275\u0275text(494, "Siempre que resulte razonablemente posible y ello no comprometa investigaciones de fraude o la seguridad de la Plataforma, BonoPay informar\xE1 al Beneficiario sobre la adopci\xF3n de dichas medidas.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(495, "p", 5);
      \u0275\u0275text(496, "La suspensi\xF3n preventiva tendr\xE1 por finalidad preservar la seguridad del servicio y no constituir\xE1, por s\xED sola, un reconocimiento de responsabilidad por parte de BonoPay.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(497, "h4", 4);
      \u0275\u0275text(498, "26. Conservaci\xF3n de la seguridad de la Plataforma");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(499, "p", 5);
      \u0275\u0275text(500, "El Beneficiario reconoce que la seguridad de la Plataforma constituye una responsabilidad compartida.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(501, "p", 5);
      \u0275\u0275text(502, "En consecuencia, se compromete a actuar con la diligencia razonablemente exigible para prevenir accesos indebidos, fraudes, suplantaciones de identidad y cualquier utilizaci\xF3n no autorizada de la Plataforma.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(503, "p", 5);
      \u0275\u0275text(504, "Toda actuaci\xF3n destinada a comprometer deliberadamente la seguridad de la Plataforma podr\xE1 dar lugar a la adopci\xF3n inmediata de medidas de protecci\xF3n, incluyendo la suspensi\xF3n del acceso, la comunicaci\xF3n a las autoridades competentes y el ejercicio de las acciones legales que correspondan.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(505, "h4", 4);
      \u0275\u0275text(506, "27. Atenci\xF3n de consultas e incidencias");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(507, "p", 5);
      \u0275\u0275text(508, "BonoPay pondr\xE1 a disposici\xF3n del Beneficiario canales razonables de atenci\xF3n para la recepci\xF3n de consultas, reportes de incidencias, solicitudes de actualizaci\xF3n de informaci\xF3n y comunicaciones relacionadas con el funcionamiento de la Plataforma.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(509, "p", 5);
      \u0275\u0275text(510, "La utilizaci\xF3n de dichos canales no implicar\xE1 reconocimiento de responsabilidad por parte de BonoPay respecto de los hechos reportados, los cuales ser\xE1n evaluados conforme a la naturaleza de cada caso.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(511, "p", 5);
      \u0275\u0275text(512, "Cuando la incidencia se encuentre relacionada exclusivamente con decisiones adoptadas por la Empresa, incluyendo la determinaci\xF3n de beneficiarios, la aprobaci\xF3n de incentivos o la definici\xF3n de sus montos, Motiva podr\xE1 orientar al Beneficiario para que dirija su consulta a la Empresa correspondiente.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(513, "h3", 3);
      \u0275\u0275text(514, "CAP\xCDTULO IV \u2014 PROCESAMIENTO DE INCENTIVOS MONETARIOS, INTERVENCI\xD3N DE TERCEROS Y ASIGNACI\xD3N DE RESPONSABILIDADES");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(515, "h4", 4);
      \u0275\u0275text(516, "28. Naturaleza del servicio prestado por BonoPay");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(517, "p", 5);
      \u0275\u0275text(518, "BonoPay presta exclusivamente un servicio tecnol\xF3gico destinado a facilitar el registro de Beneficiarios, la administraci\xF3n de la informaci\xF3n necesaria para el procesamiento de incentivos monetarios y la integraci\xF3n tecnol\xF3gica con terceros encargados de ejecutar las correspondientes instrucciones de pago.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(519, "p", 5);
      \u0275\u0275text(520, "En ning\xFAn caso BonoPay act\xFAa como pagador de los incentivos, entidad financiera, empresa administradora de fondos, fiduciario, mandatario para la administraci\xF3n de recursos de la Empresa o responsable del programa comercial implementado por este.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(521, "p", 5);
      \u0275\u0275text(522, "El Beneficiario reconoce expresamente que los incentivos monetarios son otorgados exclusivamente por la Empresa y que BonoPay interviene \xFAnicamente como proveedor de la infraestructura tecnol\xF3gica necesaria para facilitar su procesamiento.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(523, "h4", 4);
      \u0275\u0275text(524, "29. Determinaci\xF3n de los incentivos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(525, "p", 5);
      \u0275\u0275text(526, "La decisi\xF3n de otorgar un incentivo monetario corresponde exclusivamente a la Empresa.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(527, "p", 5);
      \u0275\u0275text(528, "En consecuencia, BonoPay no participa ni interviene en:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(529, "p", 5);
      \u0275\u0275text(530, "a) la determinaci\xF3n de los Beneficiarios;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(531, "p", 5);
      \u0275\u0275text(532, "b) la evaluaci\xF3n del cumplimiento de metas, condiciones o requisitos;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(533, "p", 5);
      \u0275\u0275text(534, "c) la determinaci\xF3n del monto de los incentivos;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(535, "p", 5);
      \u0275\u0275text(536, "d) la aprobaci\xF3n o rechazo de incentivos;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(537, "p", 5);
      \u0275\u0275text(538, "e) la modificaci\xF3n de los programas implementados por el Empresa;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(539, "p", 5);
      \u0275\u0275text(540, "f) la cancelaci\xF3n de incentivos.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(541, "p", 5);
      \u0275\u0275text(542, "Toda consulta relacionada con dichas materias deber\xE1 ser dirigida por el Beneficiario a la Empresa correspondiente.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(543, "h4", 4);
      \u0275\u0275text(544, "30. Instrucciones de pago");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(545, "p", 5);
      \u0275\u0275text(546, "Una vez que la Empresa apruebe un incentivo, remitir\xE1 a BonoPay la correspondiente instrucci\xF3n de pago utilizando los mecanismos tecnol\xF3gicos habilitados para tal efecto.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(547, "p", 5);
      \u0275\u0275text(548, "Las instrucciones podr\xE1n contener, entre otra informaci\xF3n:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(549, "ul", 6)(550, "li");
      \u0275\u0275text(551, "identificaci\xF3n del Beneficiario;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(552, "li");
      \u0275\u0275text(553, "monto autorizado;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(554, "li");
      \u0275\u0275text(555, "concepto del incentivo;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(556, "li");
      \u0275\u0275text(557, "medio de pago;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(558, "li");
      \u0275\u0275text(559, "dem\xE1s informaci\xF3n necesaria para el procesamiento de la operaci\xF3n.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(560, "p", 5);
      \u0275\u0275text(561, "BonoPay procesar\xE1 dichas instrucciones conforme a los procedimientos tecnol\xF3gicos implementados para la prestaci\xF3n del servicio.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(562, "h4", 4);
      \u0275\u0275text(563, "31. Transmisi\xF3n de instrucciones a procesadores de pago");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(564, "p", 5);
      \u0275\u0275text(565, "Recibida la instrucci\xF3n emitida por la Empresa, Motiva podr\xE1 transmitirla al procesador de pago, entidad financiera, operador de billetera m\xF3vil u otro proveedor tecnol\xF3gico que corresponda para la ejecuci\xF3n material de la operaci\xF3n.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(566, "p", 5);
      \u0275\u0275text(567, "Cuando resulte necesario para garantizar la interoperabilidad entre los sistemas participantes, Motiva podr\xE1 complementar, transformar o adaptar t\xE9cnicamente la informaci\xF3n recibida de la Empresa sin alterar el contenido sustancial de la instrucci\xF3n de pago.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(568, "p", 5);
      \u0275\u0275text(569, "Estas actividades constituyen exclusivamente tareas de procesamiento tecnol\xF3gico y no implican modificaci\xF3n de la decisi\xF3n adoptada por la Empresa respecto del incentivo.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(570, "h4", 4);
      \u0275\u0275text(571, "32. Intervenci\xF3n de terceros");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(572, "p", 5);
      \u0275\u0275text(573, "El Beneficiario reconoce y acepta que la prestaci\xF3n del servicio puede requerir la intervenci\xF3n de terceros independientes, incluyendo, entre otros:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(574, "ul", 6)(575, "li");
      \u0275\u0275text(576, "procesadores de pago;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(577, "li");
      \u0275\u0275text(578, "entidades financieras;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(579, "li");
      \u0275\u0275text(580, "operadores de billeteras digitales;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(581, "li");
      \u0275\u0275text(582, "proveedores de servicios de autenticaci\xF3n;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(583, "li");
      \u0275\u0275text(584, "operadores de mensajer\xEDa;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(585, "li");
      \u0275\u0275text(586, "proveedores de infraestructura tecnol\xF3gica;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(587, "li");
      \u0275\u0275text(588, "proveedores de servicios en la nube;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(589, "li");
      \u0275\u0275text(590, "otros proveedores especializados que BonoPay incorpore para la adecuada prestaci\xF3n del servicio.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(591, "p", 5);
      \u0275\u0275text(592, "Cada uno de dichos terceros actuar\xE1 conforme a sus propios procedimientos operativos, est\xE1ndares de seguridad y condiciones de servicio.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(593, "h4", 4);
      \u0275\u0275text(594, "33. Ejecuci\xF3n del pago");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(595, "p", 5);
      \u0275\u0275text(596, "La ejecuci\xF3n material de la transferencia de fondos ser\xE1 realizada exclusivamente por el procesador de pago, entidad financiera o proveedor que corresponda.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(597, "p", 5);
      \u0275\u0275text(598, "La obligaci\xF3n de BonoPay respecto de la instrucci\xF3n de pago se entender\xE1 cumplida cuando esta haya sido transmitida correctamente al tercero encargado de su ejecuci\xF3n, conforme a los procedimientos establecidos para la prestaci\xF3n del servicio.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(599, "p", 5);
      \u0275\u0275text(600, "La acreditaci\xF3n efectiva de los fondos depender\xE1 adicionalmente de los procesos internos de las entidades participantes en la cadena de pago.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(601, "h4", 4);
      \u0275\u0275text(602, "34. Rechazo de operaciones");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(603, "p", 5);
      \u0275\u0275text(604, "Una operaci\xF3n podr\xE1 ser rechazada por causas atribuibles, entre otras, a:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(605, "p", 5);
      \u0275\u0275text(606, "a) inconsistencias en la informaci\xF3n registrada;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(607, "p", 5);
      \u0275\u0275text(608, "b) cuentas bancarias inexistentes;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(609, "p", 5);
      \u0275\u0275text(610, "c) cuentas bloqueadas;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(611, "p", 5);
      \u0275\u0275text(612, "d) cuentas cerradas;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(613, "p", 5);
      \u0275\u0275text(614, "e) CCI incorrecto;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(615, "p", 5);
      \u0275\u0275text(616, "f) billeteras m\xF3viles no habilitadas;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(617, "p", 5);
      \u0275\u0275text(618, "g) rechazo de la entidad financiera;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(619, "p", 5);
      \u0275\u0275text(620, "h) rechazo del procesador de pagos;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(621, "p", 5);
      \u0275\u0275text(622, "i) restricciones regulatorias;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(623, "p", 5);
      \u0275\u0275text(624, "j) validaciones antifraude;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(625, "p", 5);
      \u0275\u0275text(626, "k) errores en la informaci\xF3n proporcionada por el Empresa;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(627, "p", 5);
      \u0275\u0275text(628, "l) cualquier otra circunstancia ajena al control razonable de BonoPay.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(629, "p", 5);
      \u0275\u0275text(630, "La ocurrencia de cualquiera de dichos supuestos no implicar\xE1 incumplimiento contractual por parte de BonoPay.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(631, "h4", 4);
      \u0275\u0275text(632, "35. Actualizaci\xF3n de informaci\xF3n antes del procesamiento");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(633, "p", 5);
      \u0275\u0275text(634, "El Beneficiario reconoce que \xFAnicamente ser\xE1 responsable de mantener actualizada su informaci\xF3n financiera antes de que la Empresa emita la correspondiente instrucci\xF3n de pago.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(635, "p", 5);
      \u0275\u0275text(636, "Una vez transmitida la instrucci\xF3n al procesador de pago, las modificaciones posteriores efectuadas por el Beneficiario no afectar\xE1n dicha operaci\xF3n, salvo que t\xE9cnicamente resulte posible y ello sea autorizado por la Empresa y por los terceros participantes en la ejecuci\xF3n del pago.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(637, "h4", 4);
      \u0275\u0275text(638, "36. Confirmaci\xF3n del estado de la operaci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(639, "p", 5);
      \u0275\u0275text(640, "Una vez procesada la instrucci\xF3n correspondiente, Motiva podr\xE1 registrar el estado informado por el procesador de pago.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(641, "p", 5);
      \u0275\u0275text(642, "Entre otros, podr\xE1n registrarse estados tales como:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(643, "ul", 6)(644, "li");
      \u0275\u0275text(645, "En proceso;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(646, "li");
      \u0275\u0275text(647, "Enviado;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(648, "li");
      \u0275\u0275text(649, "Pagado;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(650, "li");
      \u0275\u0275text(651, "Rechazado;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(652, "li");
      \u0275\u0275text(653, "Pendiente de validaci\xF3n;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(654, "li");
      \u0275\u0275text(655, "Observado;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(656, "li");
      \u0275\u0275text(657, "Cancelado;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(658, "li");
      \u0275\u0275text(659, "otros estados operativos implementados por la Plataforma.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(660, "p", 5);
      \u0275\u0275text(661, "Dichos estados tendr\xE1n car\xE1cter meramente informativo y reflejar\xE1n la informaci\xF3n comunicada por el tercero encargado de la ejecuci\xF3n de la operaci\xF3n.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(662, "h4", 4);
      \u0275\u0275text(663, "37. Limitaci\xF3n de responsabilidad respecto del procesamiento de pagos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(664, "p", 5);
      \u0275\u0275text(665, "Sin perjuicio de las dem\xE1s limitaciones previstas en estos T\xE9rminos y Condiciones, BonoPay no ser\xE1 responsable por:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(666, "p", 5);
      \u0275\u0275text(667, "a) la decisi\xF3n del Empresa de otorgar, modificar o cancelar incentivos;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(668, "p", 5);
      \u0275\u0275text(669, "b) errores contenidos en las instrucciones remitidas por el Empresa;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(670, "p", 5);
      \u0275\u0275text(671, "c) la exactitud de la informaci\xF3n entregada por la Empresa para el procesamiento de los pagos;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(672, "p", 5);
      \u0275\u0275text(673, "d) demoras atribuibles a entidades financieras;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(674, "p", 5);
      \u0275\u0275text(675, "e) rechazos efectuados por procesadores de pago;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(676, "p", 5);
      \u0275\u0275text(677, "f) indisponibilidad de sistemas pertenecientes a terceros;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(678, "p", 5);
      \u0275\u0275text(679, "g) errores derivados de la informaci\xF3n registrada por el Beneficiario;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(680, "p", 5);
      \u0275\u0275text(681, "h) restricciones impuestas por autoridades competentes;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(682, "p", 5);
      \u0275\u0275text(683, "i) validaciones de prevenci\xF3n de fraude;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(684, "p", 5);
      \u0275\u0275text(685, "j) mantenimientos programados de terceros;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(686, "p", 5);
      \u0275\u0275text(687, "k) fallas en servicios de telecomunicaciones o Internet;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(688, "p", 5);
      \u0275\u0275text(689, "l) eventos de caso fortuito o fuerza mayor.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(690, "p", 5);
      \u0275\u0275text(691, "En consecuencia, la responsabilidad de BonoPay se limitar\xE1 exclusivamente al correcto funcionamiento de los procesos tecnol\xF3gicos que se encuentren razonablemente bajo su control.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(692, "h4", 4);
      \u0275\u0275text(693, "38. Deber de colaboraci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(694, "p", 5);
      \u0275\u0275text(695, "Cuando una operaci\xF3n resulte observada, rechazada o requiera validaciones adicionales, el Beneficiario se compromete a colaborar razonablemente con BonoPay proporcionando la informaci\xF3n que resulte necesaria para la adecuada atenci\xF3n de la incidencia.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(696, "p", 5);
      \u0275\u0275text(697, "Motiva podr\xE1 coordinar con la Empresa, procesadores de pago o entidades financieras las gestiones necesarias para determinar el origen de la incidencia, sin que ello implique asumir responsabilidad respecto del resultado final de la operaci\xF3n.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(698, "h4", 4);
      \u0275\u0275text(699, "39. Trazabilidad de las operaciones");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(700, "p", 5);
      \u0275\u0275text(701, "Con la finalidad de garantizar la transparencia, seguridad y adecuada gesti\xF3n de los incentivos, BonoPay mantendr\xE1 registros electr\xF3nicos de las operaciones procesadas a trav\xE9s de la Plataforma.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(702, "p", 5);
      \u0275\u0275text(703, "Dichos registros podr\xE1n comprender, entre otros:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(704, "ul", 6)(705, "li");
      \u0275\u0275text(706, "identificaci\xF3n de la instrucci\xF3n;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(707, "li");
      \u0275\u0275text(708, "fecha y hora de recepci\xF3n;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(709, "li");
      \u0275\u0275text(710, "fecha y hora de transmisi\xF3n;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(711, "li");
      \u0275\u0275text(712, "procesador utilizado;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(713, "li");
      \u0275\u0275text(714, "estados de la operaci\xF3n;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(715, "li");
      \u0275\u0275text(716, "registros de auditor\xEDa;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(717, "li");
      \u0275\u0275text(718, "validaciones de seguridad;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(719, "li");
      \u0275\u0275text(720, "eventos relevantes asociados al procesamiento.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(721, "p", 5);
      \u0275\u0275text(722, "La informaci\xF3n ser\xE1 conservada durante los plazos establecidos por la normativa aplicable o por las pol\xEDticas internas de conservaci\xF3n de BonoPay.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(723, "h4", 4);
      \u0275\u0275text(724, "40. Ausencia de garant\xEDa respecto del otorgamiento de incentivos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(725, "p", 5);
      \u0275\u0275text(726, "El uso de la Plataforma no genera derecho alguno a favor del Beneficiario para exigir el otorgamiento de incentivos monetarios.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(727, "p", 5);
      \u0275\u0275text(728, "La existencia de un registro activo en la Plataforma, la utilizaci\xF3n de esta o la recepci\xF3n de comunicaciones por parte de BonoPay no constituyen promesa, oferta ni garant\xEDa de pago.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(729, "p", 5);
      \u0275\u0275text(730, "El derecho del Beneficiario a recibir un incentivo depender\xE1 exclusivamente de la decisi\xF3n adoptada por la Empresa conforme a las reglas del programa correspondiente.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(731, "h3", 3);
      \u0275\u0275text(732, "CAP\xCDTULO V \u2014 SEGURIDAD DE LA PLATAFORMA, PREVENCI\xD3N DEL FRAUDE Y VALIDEZ DE LOS REGISTROS ELECTR\xD3NICOS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(733, "h4", 4);
      \u0275\u0275text(734, "41. Principios de seguridad de la Plataforma");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(735, "p", 5);
      \u0275\u0275text(736, "La seguridad constituye un elemento esencial para la adecuada prestaci\xF3n de los servicios ofrecidos por BonoPay.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(737, "p", 5);
      \u0275\u0275text(738, "En tal sentido, BonoPay procurar\xE1 operar la Plataforma conforme a principios de seguridad, confidencialidad, integridad, disponibilidad, trazabilidad, proporcionalidad, mejora continua y gesti\xF3n razonable de riesgos, implementando medidas t\xE9cnicas y organizativas acordes con la naturaleza del servicio y los riesgos identificados.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(739, "p", 5);
      \u0275\u0275text(740, "El Beneficiario reconoce que la seguridad de la Plataforma constituye una responsabilidad compartida entre BonoPay y los usuarios, por lo que se compromete a actuar diligentemente durante toda la utilizaci\xF3n del servicio.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(741, "h4", 4);
      \u0275\u0275text(742, "42. Medidas de seguridad");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(743, "p", 5);
      \u0275\u0275text(744, "Con el objeto de proteger la Plataforma, los datos procesados y las operaciones realizadas, Motiva podr\xE1 implementar, modificar o sustituir, en cualquier momento, medidas de seguridad tales como:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(745, "p", 5);
      \u0275\u0275text(746, "a) autenticaci\xF3n multifactor;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(747, "p", 5);
      \u0275\u0275text(748, "b) c\xF3digos OTP;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(749, "p", 5);
      \u0275\u0275text(750, "c) verificaciones documentarias;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(751, "p", 5);
      \u0275\u0275text(752, "d) validaciones automatizadas;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(753, "p", 5);
      \u0275\u0275text(754, "e) controles de consistencia de informaci\xF3n;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(755, "p", 5);
      \u0275\u0275text(756, "f) an\xE1lisis de patrones de comportamiento;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(757, "p", 5);
      \u0275\u0275text(758, "g) monitoreo de operaciones;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(759, "p", 5);
      \u0275\u0275text(760, "h) mecanismos de detecci\xF3n de fraude;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(761, "p", 5);
      \u0275\u0275text(762, "i) controles de acceso;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(763, "p", 5);
      \u0275\u0275text(764, "j) cifrado de informaci\xF3n;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(765, "p", 5);
      \u0275\u0275text(766, "k) registros de auditor\xEDa;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(767, "p", 5);
      \u0275\u0275text(768, "l) otras medidas que resulten razonablemente necesarias para preservar la seguridad de la Plataforma.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(769, "p", 5);
      \u0275\u0275text(770, "La implementaci\xF3n de tales medidas no constituye garant\xEDa absoluta frente a incidentes de seguridad, fraude, ataques inform\xE1ticos u otros riesgos inherentes al entorno digital.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(771, "h4", 4);
      \u0275\u0275text(772, "43. Obligaciones del Beneficiario en materia de seguridad");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(773, "p", 5);
      \u0275\u0275text(774, "El Beneficiario se obliga a adoptar medidas razonables para proteger el acceso a la Plataforma.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(775, "p", 5);
      \u0275\u0275text(776, "En particular, deber\xE1:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(777, "p", 5);
      \u0275\u0275text(778, "a) mantener bajo su exclusivo control el dispositivo utilizado para acceder a la Plataforma;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(779, "p", 5);
      \u0275\u0275text(780, "b) evitar compartir c\xF3digos OTP, enlaces de acceso o credenciales con terceros;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(781, "p", 5);
      \u0275\u0275text(782, "c) proteger sus dispositivos mediante mecanismos de seguridad apropiados;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(783, "p", 5);
      \u0275\u0275text(784, "d) abstenerse de acceder a la Plataforma utilizando equipos p\xFAblicos o redes cuya seguridad no pueda verificar razonablemente;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(785, "p", 5);
      \u0275\u0275text(786, "e) comunicar a BonoPay cualquier sospecha de acceso no autorizado, p\xE9rdida del dispositivo, robo de informaci\xF3n o cualquier incidente que pueda comprometer la seguridad de su cuenta;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(787, "p", 5);
      \u0275\u0275text(788, "f) seguir las instrucciones de seguridad que BonoPay comunique oportunamente.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(789, "p", 5);
      \u0275\u0275text(790, "El incumplimiento de estas obligaciones podr\xE1 ser considerado al evaluar la responsabilidad derivada de un incidente de seguridad.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(791, "h4", 4);
      \u0275\u0275text(792, "44. Prevenci\xF3n del fraude y de la suplantaci\xF3n de identidad");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(793, "p", 5);
      \u0275\u0275text(794, "Motiva podr\xE1 implementar mecanismos destinados a prevenir, detectar, investigar y mitigar situaciones que razonablemente puedan constituir fraude, intento de fraude, suplantaci\xF3n de identidad, utilizaci\xF3n indebida de la Plataforma o cualquier otra conducta que comprometa la seguridad del servicio.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(795, "p", 5);
      \u0275\u0275text(796, "Para tales efectos, Motiva podr\xE1:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(797, "p", 5);
      \u0275\u0275text(798, "a) efectuar validaciones adicionales de identidad;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(799, "p", 5);
      \u0275\u0275text(800, "b) requerir documentaci\xF3n complementaria;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(801, "p", 5);
      \u0275\u0275text(802, "c) solicitar la actualizaci\xF3n de informaci\xF3n;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(803, "p", 5);
      \u0275\u0275text(804, "d) suspender temporalmente determinadas funcionalidades;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(805, "p", 5);
      \u0275\u0275text(806, "e) rechazar registros cuando existan inconsistencias relevantes;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(807, "p", 5);
      \u0275\u0275text(808, "f) restringir el acceso hasta concluir las verificaciones correspondientes;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(809, "p", 5);
      \u0275\u0275text(810, "g) comunicar los hechos a la Empresa cuando ello resulte necesario para proteger la integridad del programa de incentivos;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(811, "p", 5);
      \u0275\u0275text(812, "h) colaborar con las autoridades competentes cuando exista una obligaci\xF3n legal o un requerimiento v\xE1lido.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(813, "p", 5);
      \u0275\u0275text(814, "La adopci\xF3n de estas medidas tendr\xE1 car\xE1cter preventivo y no implicar\xE1 reconocimiento de responsabilidad por parte de BonoPay.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(815, "h4", 4);
      \u0275\u0275text(816, "45. Monitoreo de operaciones");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(817, "p", 5);
      \u0275\u0275text(818, "Con el objeto de preservar la seguridad del servicio y prevenir actividades il\xEDcitas, Motiva podr\xE1 realizar monitoreos autom\xE1ticos o manuales de las operaciones efectuadas en la Plataforma.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(819, "p", 5);
      \u0275\u0275text(820, "Dichos monitoreos podr\xE1n considerar, entre otros elementos:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(821, "ul", 6)(822, "li");
      \u0275\u0275text(823, "frecuencia de acceso;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(824, "li");
      \u0275\u0275text(825, "cambios reiterados de informaci\xF3n;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(826, "li");
      \u0275\u0275text(827, "modificaciones de cuentas bancarias;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(828, "li");
      \u0275\u0275text(829, "intentos fallidos de autenticaci\xF3n;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(830, "li");
      \u0275\u0275text(831, "comportamientos at\xEDpicos;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(832, "li");
      \u0275\u0275text(833, "inconsistencias entre la informaci\xF3n registrada y la utilizada en las operaciones;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(834, "li");
      \u0275\u0275text(835, "otros indicadores razonablemente relacionados con la prevenci\xF3n del fraude.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(836, "p", 5);
      \u0275\u0275text(837, "El monitoreo se realizar\xE1 respetando la legislaci\xF3n aplicable en materia de protecci\xF3n de datos personales y las finalidades informadas al Beneficiario.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(838, "h4", 4);
      \u0275\u0275text(839, "46. Incidentes de seguridad");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(840, "p", 5);
      \u0275\u0275text(841, "Cuando BonoPay detecte un incidente que pueda comprometer la seguridad de la Plataforma, podr\xE1 adoptar inmediatamente las medidas que resulten razonablemente necesarias para contener sus efectos, incluyendo, entre otras:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(842, "p", 5);
      \u0275\u0275text(843, "a) suspensi\xF3n temporal de accesos;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(844, "p", 5);
      \u0275\u0275text(845, "b) bloqueo preventivo de cuentas;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(846, "p", 5);
      \u0275\u0275text(847, "c) invalidaci\xF3n de sesiones activas;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(848, "p", 5);
      \u0275\u0275text(849, "d) requerimiento de nuevas autenticaciones;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(850, "p", 5);
      \u0275\u0275text(851, "e) restablecimiento de mecanismos de seguridad;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(852, "p", 5);
      \u0275\u0275text(853, "f) investigaci\xF3n de los hechos.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(854, "p", 5);
      \u0275\u0275text(855, "Siempre que ello resulte posible y no comprometa la eficacia de las medidas adoptadas o investigaciones en curso, BonoPay informar\xE1 al Beneficiario sobre la ocurrencia del incidente y las acciones que deba realizar.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(856, "h4", 4);
      \u0275\u0275text(857, "47. Registros electr\xF3nicos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(858, "p", 5);
      \u0275\u0275text(859, "BonoPay mantendr\xE1 registros electr\xF3nicos de las actuaciones realizadas a trav\xE9s de la Plataforma con la finalidad de garantizar la trazabilidad de las operaciones, atender reclamaciones, prevenir fraude, cumplir obligaciones legales y mejorar la seguridad del servicio.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(860, "p", 5);
      \u0275\u0275text(861, "Dichos registros podr\xE1n comprender, entre otros:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(862, "p", 5);
      \u0275\u0275text(863, "a) aceptaci\xF3n de los presentes T\xE9rminos y Condiciones;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(864, "p", 5);
      \u0275\u0275text(865, "b) aceptaci\xF3n de la Pol\xEDtica de Privacidad;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(866, "p", 5);
      \u0275\u0275text(867, "c) autenticaciones mediante OTP;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(868, "p", 5);
      \u0275\u0275text(869, "d) fecha y hora de las operaciones;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(870, "p", 5);
      \u0275\u0275text(871, "e) direcciones IP;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(872, "p", 5);
      \u0275\u0275text(873, "f) registros de acceso;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(874, "p", 5);
      \u0275\u0275text(875, "g) historial de modificaciones de informaci\xF3n;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(876, "p", 5);
      \u0275\u0275text(877, "h) eventos relevantes asociados a las operaciones;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(878, "p", 5);
      \u0275\u0275text(879, "i) registros de auditor\xEDa;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(880, "p", 5);
      \u0275\u0275text(881, "j) dem\xE1s evidencias t\xE9cnicas generadas por la Plataforma.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(882, "h4", 4);
      \u0275\u0275text(883, "48. Valor probatorio de los registros electr\xF3nicos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(884, "p", 5);
      \u0275\u0275text(885, "El Beneficiario reconoce y acepta que los registros electr\xF3nicos generados por la Plataforma constituyen evidencia de las actuaciones realizadas a trav\xE9s de ella.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(886, "p", 5);
      \u0275\u0275text(887, "Sin perjuicio del derecho de las partes a aportar otros medios de prueba conforme a la legislaci\xF3n aplicable, los registros electr\xF3nicos conservados por Motiva podr\xE1n ser utilizados para acreditar, entre otros aspectos:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(888, "p", 5);
      \u0275\u0275text(889, "a) el acceso a la Plataforma;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(890, "p", 5);
      \u0275\u0275text(891, "b) la aceptaci\xF3n de los presentes T\xE9rminos y Condiciones;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(892, "p", 5);
      \u0275\u0275text(893, "c) la aceptaci\xF3n de la Pol\xEDtica de Privacidad;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(894, "p", 5);
      \u0275\u0275text(895, "d) la autenticaci\xF3n mediante c\xF3digos OTP;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(896, "p", 5);
      \u0275\u0275text(897, "e) la actualizaci\xF3n de informaci\xF3n personal o financiera;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(898, "p", 5);
      \u0275\u0275text(899, "f) las comunicaciones remitidas por BonoPay;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(900, "p", 5);
      \u0275\u0275text(901, "g) el estado de las operaciones procesadas.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(902, "p", 5);
      \u0275\u0275text(903, "La valoraci\xF3n de dichos registros corresponder\xE1, en su caso, a la autoridad administrativa o judicial competente conforme a las reglas aplicables sobre prueba y contrataci\xF3n electr\xF3nica.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(904, "h4", 4);
      \u0275\u0275text(905, "49. Conservaci\xF3n de la evidencia electr\xF3nica");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(906, "p", 5);
      \u0275\u0275text(907, "Los registros electr\xF3nicos ser\xE1n conservados durante el tiempo que resulte necesario para cumplir las finalidades descritas en estos T\xE9rminos y Condiciones y durante los plazos exigidos por la legislaci\xF3n aplicable, as\xED como por necesidades razonables de auditor\xEDa, gesti\xF3n de riesgos, atenci\xF3n de controversias, prevenci\xF3n del fraude o defensa de los derechos e intereses leg\xEDtimos de BonoPay.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(908, "p", 5);
      \u0275\u0275text(909, "La conservaci\xF3n de dichos registros podr\xE1 realizarse mediante infraestructura tecnol\xF3gica propia o de proveedores especializados, siempre que se adopten medidas razonables para preservar su integridad, disponibilidad y confidencialidad.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(910, "h4", 4);
      \u0275\u0275text(911, "50. Cooperaci\xF3n del Beneficiario");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(912, "p", 5);
      \u0275\u0275text(913, "El Beneficiario se compromete a colaborar de buena fe en cualquier procedimiento de verificaci\xF3n o investigaci\xF3n relacionado con incidentes de seguridad, intentos de fraude, accesos no autorizados o cualquier situaci\xF3n que pueda comprometer el adecuado funcionamiento de la Plataforma.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(914, "p", 5);
      \u0275\u0275text(915, "La negativa injustificada a colaborar podr\xE1 ser considerada por BonoPay al evaluar la continuidad del acceso a la Plataforma, sin perjuicio de los derechos que asistan al Beneficiario conforme a la legislaci\xF3n aplicable.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(916, "h3", 3);
      \u0275\u0275text(917, "CAP\xCDTULO VI \u2014 TRATAMIENTO DE DATOS PERSONALES");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(918, "h4", 4);
      \u0275\u0275text(919, "Art\xEDculo 51.- Responsable del tratamiento");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(920, "p", 5);
      \u0275\u0275text(921, "Motiva Soluciones S.A.C., titular de la plataforma BonoPay, es el responsable del tratamiento de los datos personales recopilados y tratados con ocasi\xF3n del registro, acceso y utilizaci\xF3n de la Plataforma.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(922, "p", 5);
      \u0275\u0275text(923, "El tratamiento de dichos datos se realizar\xE1 conforme a la Ley N\xB0 29733, su Reglamento y la Pol\xEDtica de Privacidad de BonoPay.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(924, "h4", 4);
      \u0275\u0275text(925, "Art\xEDculo 52.- Pol\xEDtica de Privacidad");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(926, "p", 5);
      \u0275\u0275text(927, "La Pol\xEDtica de Privacidad forma parte integrante de los presentes T\xE9rminos y Condiciones.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(928, "p", 5);
      \u0275\u0275text(929, "En ella se describen, entre otros aspectos:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(930, "ul", 6)(931, "li");
      \u0275\u0275text(932, "las categor\xEDas de datos personales tratados;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(933, "li");
      \u0275\u0275text(934, "las finalidades del tratamiento;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(935, "li");
      \u0275\u0275text(936, "las bases legales aplicables;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(937, "li");
      \u0275\u0275text(938, "las comunicaciones y transferencias de datos;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(939, "li");
      \u0275\u0275text(940, "las medidas de seguridad implementadas;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(941, "li");
      \u0275\u0275text(942, "los derechos de los titulares;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(943, "li");
      \u0275\u0275text(944, "los per\xEDodos de conservaci\xF3n;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(945, "li");
      \u0275\u0275text(946, "los canales para ejercer derechos.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(947, "p", 5);
      \u0275\u0275text(948, "El Beneficiario declara haber tenido acceso a dicha Pol\xEDtica antes de aceptar los presentes T\xE9rminos y Condiciones.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(949, "h4", 4);
      \u0275\u0275text(950, "Art\xEDculo 53.- Finalidades del tratamiento");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(951, "p", 5);
      \u0275\u0275text(952, "Motiva tratar\xE1 los datos personales del Beneficiario con la finalidad de:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(953, "p", 5);
      \u0275\u0275text(954, "a) registrar al Beneficiario en la Plataforma;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(955, "p", 5);
      \u0275\u0275text(956, "b) validar su identidad;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(957, "p", 5);
      \u0275\u0275text(958, "c) autenticar el acceso a la Plataforma;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(959, "p", 5);
      \u0275\u0275text(960, "d) administrar la cuenta del Beneficiario;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(961, "p", 5);
      \u0275\u0275text(962, "e) gestionar la entrega de incentivos;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(963, "p", 5);
      \u0275\u0275text(964, "f) procesar operaciones relacionadas con la prestaci\xF3n de los Servicios;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(965, "p", 5);
      \u0275\u0275text(966, "g) prevenir fraudes y proteger la seguridad de la Plataforma;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(967, "p", 5);
      \u0275\u0275text(968, "h) cumplir obligaciones legales;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(969, "p", 5);
      \u0275\u0275text(970, "i) atender consultas, solicitudes y reclamos;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(971, "p", 5);
      \u0275\u0275text(972, "j) ejercer y defender los derechos e intereses leg\xEDtimos de Motiva.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(973, "h4", 4);
      \u0275\u0275text(974, "Art\xEDculo 54.- Comunicaci\xF3n de datos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(975, "p", 5);
      \u0275\u0275text(976, "Motiva podr\xE1 comunicar datos personales a proveedores tecnol\xF3gicos, procesadores de pago, entidades financieras, empresas clientes y autoridades competentes cuando ello resulte necesario para la prestaci\xF3n de los Servicios o para el cumplimiento de obligaciones legales.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(977, "p", 5);
      \u0275\u0275text(978, "Toda comunicaci\xF3n de datos se realizar\xE1 conforme a la Pol\xEDtica de Privacidad y a la legislaci\xF3n aplicable.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(979, "h4", 4);
      \u0275\u0275text(980, "Art\xEDculo 55.- Derechos del Beneficiario");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(981, "p", 5);
      \u0275\u0275text(982, "El Beneficiario podr\xE1 ejercer los derechos que le reconoce la legislaci\xF3n sobre protecci\xF3n de datos personales utilizando los canales indicados en la Pol\xEDtica de Privacidad.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(983, "p", 5);
      \u0275\u0275text(984, "Motiva atender\xE1 dichas solicitudes conforme a los procedimientos y plazos previstos por la legislaci\xF3n vigente.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(985, "h4", 4);
      \u0275\u0275text(986, "Art\xEDculo 56.- Conservaci\xF3n de los datos personales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(987, "p", 5);
      \u0275\u0275text(988, "Los datos personales ser\xE1n conservados durante el tiempo necesario para cumplir las finalidades del tratamiento, atender obligaciones legales y ejercer o defender derechos, conforme a los criterios establecidos en la Pol\xEDtica de Privacidad.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(989, "h4", 4);
      \u0275\u0275text(990, "Art\xEDculo 57.- Modificaciones");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(991, "p", 5);
      \u0275\u0275text(992, "Motiva podr\xE1 actualizar la Pol\xEDtica de Privacidad cuando ello resulte necesario por cambios normativos, tecnol\xF3gicos, operativos o de negocio.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(993, "p", 5);
      \u0275\u0275text(994, "Cuando corresponda, dichas modificaciones ser\xE1n comunicadas al Beneficiario mediante los canales habilitados por la Plataforma.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(995, "h4", 4);
      \u0275\u0275text(996, "Art\xEDculo 58.- Prevalencia");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(997, "p", 5);
      \u0275\u0275text(998, "En caso de cualquier discrepancia entre los presentes T\xE9rminos y Condiciones y la Pol\xEDtica de Privacidad respecto del tratamiento de datos personales, prevalecer\xE1n las disposiciones contenidas en la Pol\xEDtica de Privacidad.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(999, "h3", 3);
      \u0275\u0275text(1e3, "CAP\xCDTULO VII \u2014 PROPIEDAD INTELECTUAL Y USO DE LA PLATAFORMA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1001, "h4", 4);
      \u0275\u0275text(1002, "61. Titularidad de la Plataforma");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1003, "p", 5);
      \u0275\u0275text(1004, "La Plataforma BonoPay, incluyendo su software, c\xF3digo fuente, c\xF3digo objeto, arquitectura, interfaces, dise\xF1os, estructura, funcionalidades, bases de datos, documentaci\xF3n t\xE9cnica, algoritmos, procesos, modelos operativos, APIs, integraciones, nombres comerciales, marcas, logotipos, elementos gr\xE1ficos, contenidos y cualquier otro componente que la integre, constituye propiedad exclusiva de BonoPay o de los terceros que hayan autorizado leg\xEDtimamente su utilizaci\xF3n.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1005, "p", 5);
      \u0275\u0275text(1006, "Ninguna disposici\xF3n contenida en los presentes T\xE9rminos y Condiciones podr\xE1 interpretarse como una cesi\xF3n, transferencia o licencia distinta de la expresamente otorgada para el uso de la Plataforma.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1007, "h4", 4);
      \u0275\u0275text(1008, "62. Licencia de uso");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1009, "p", 5);
      \u0275\u0275text(1010, "BonoPay concede al Beneficiario una licencia de uso personal, limitada, revocable, no exclusiva, intransferible y no sublicenciable para acceder y utilizar la Plataforma \xFAnicamente durante la vigencia de la relaci\xF3n regulada por estos T\xE9rminos y Condiciones y exclusivamente para los fines previstos en ellos.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1011, "p", 5);
      \u0275\u0275text(1012, "La licencia conferida no otorga derecho alguno sobre la propiedad intelectual de BonoPay ni autoriza el desarrollo de actividades distintas del uso ordinario de la Plataforma.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1013, "h4", 4);
      \u0275\u0275text(1014, "63. Restricciones de uso");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1015, "p", 5);
      \u0275\u0275text(1016, "El Beneficiario se obliga a no realizar, directa o indirectamente, cualquiera de las siguientes conductas:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1017, "p", 5);
      \u0275\u0275text(1018, "a) copiar, reproducir o distribuir la Plataforma o cualquiera de sus componentes;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1019, "p", 5);
      \u0275\u0275text(1020, "b) modificar, adaptar, traducir o crear obras derivadas de la Plataforma;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1021, "p", 5);
      \u0275\u0275text(1022, "c) descompilar, desensamblar, realizar ingenier\xEDa inversa o intentar obtener el c\xF3digo fuente, salvo en los casos expresamente permitidos por la legislaci\xF3n aplicable;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1023, "p", 5);
      \u0275\u0275text(1024, "d) eliminar, alterar u ocultar avisos de propiedad intelectual o medidas tecnol\xF3gicas de protecci\xF3n;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1025, "p", 5);
      \u0275\u0275text(1026, "e) utilizar herramientas automatizadas para extraer informaci\xF3n de la Plataforma;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1027, "p", 5);
      \u0275\u0275text(1028, "f) acceder a interfaces, APIs o funcionalidades no destinadas al Beneficiario;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1029, "p", 5);
      \u0275\u0275text(1030, "g) utilizar la Plataforma para desarrollar productos o servicios que compitan con BonoPay;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1031, "p", 5);
      \u0275\u0275text(1032, "h) explotar comercialmente la Plataforma o cualquiera de sus componentes sin autorizaci\xF3n previa y por escrito de BonoPay.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1033, "h4", 4);
      \u0275\u0275text(1034, "64. Marcas y signos distintivos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1035, "p", 5);
      \u0275\u0275text(1036, "Las marcas, nombres comerciales, logotipos, dominios y dem\xE1s signos distintivos utilizados en la Plataforma pertenecen a BonoPay o a sus respectivos titulares.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1037, "p", 5);
      \u0275\u0275text(1038, "Su utilizaci\xF3n por parte del Beneficiario no le confiere derecho alguno sobre dichos signos distintivos.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1039, "p", 5);
      \u0275\u0275text(1040, "Queda prohibido utilizar las marcas o signos distintivos de BonoPay de manera que pueda generar confusi\xF3n respecto de la existencia de una relaci\xF3n comercial distinta de la regulada en estos T\xE9rminos y Condiciones.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1041, "h4", 4);
      \u0275\u0275text(1042, "65. Retroalimentaci\xF3n y sugerencias");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1043, "p", 5);
      \u0275\u0275text(1044, "Las observaciones, recomendaciones, comentarios o sugerencias que el Beneficiario formule respecto del funcionamiento de la Plataforma podr\xE1n ser utilizados por BonoPay para mejorar sus servicios.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1045, "p", 5);
      \u0275\u0275text(1046, "Salvo pacto expreso en contrario, el env\xEDo de tales comentarios no generar\xE1 derecho a compensaci\xF3n econ\xF3mica alguna ni implicar\xE1 obligaci\xF3n de BonoPay de implementar las sugerencias recibidas.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1047, "p", 5);
      \u0275\u0275text(1048, "El Beneficiario declara que cualquier sugerencia proporcionada podr\xE1 ser utilizada por BonoPay sin restricciones, en la medida permitida por la legislaci\xF3n aplicable y sin afectar los derechos morales que pudieran corresponder cuando estos sean irrenunciables.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1049, "h4", 4);
      \u0275\u0275text(1050, "66. Integraciones tecnol\xF3gicas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1051, "p", 5);
      \u0275\u0275text(1052, "Motiva podr\xE1 incorporar nuevas funcionalidades, interfaces de programaci\xF3n (API), integraciones con terceros, mecanismos de autenticaci\xF3n, herramientas de interoperabilidad, servicios en la nube, billeteras digitales, entidades financieras u otras soluciones tecnol\xF3gicas destinadas a mejorar la prestaci\xF3n del servicio.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1053, "p", 5);
      \u0275\u0275text(1054, "La incorporaci\xF3n, sustituci\xF3n o eliminaci\xF3n de dichas integraciones no alterar\xE1 la naturaleza jur\xEDdica de los Servicios ni generar\xE1 derecho alguno a favor del Beneficiario para exigir la permanencia de una determinada funcionalidad o integraci\xF3n tecnol\xF3gica.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1055, "h4", 4);
      \u0275\u0275text(1056, "67. Actualizaciones de la Plataforma");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1057, "p", 5);
      \u0275\u0275text(1058, "Motiva podr\xE1 realizar actualizaciones, mejoras, modificaciones, correcciones, mantenimientos, cambios de arquitectura, migraciones tecnol\xF3gicas o cualquier otra intervenci\xF3n destinada a optimizar la seguridad, estabilidad, interoperabilidad o funcionalidad de la Plataforma.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1059, "p", 5);
      \u0275\u0275text(1060, "Cuando ello resulte razonablemente posible, BonoPay procurar\xE1 ejecutar dichas actividades minimizando las afectaciones a los usuarios.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1061, "p", 5);
      \u0275\u0275text(1062, "Las actualizaciones realizadas no otorgar\xE1n derecho a compensaci\xF3n alguna, salvo que la legislaci\xF3n aplicable disponga expresamente lo contrario.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1063, "h4", 4);
      \u0275\u0275text(1064, "68. Protecci\xF3n de los activos tecnol\xF3gicos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1065, "p", 5);
      \u0275\u0275text(1066, "El Beneficiario reconoce que la Plataforma constituye un activo tecnol\xF3gico de alto valor y se obliga a abstenerse de ejecutar cualquier conducta que pueda afectar su funcionamiento, disponibilidad, integridad, confidencialidad o seguridad.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1067, "p", 5);
      \u0275\u0275text(1068, "En caso de detectarse actividades que razonablemente puedan comprometer los activos tecnol\xF3gicos de BonoPay, esta podr\xE1 adoptar inmediatamente las medidas de protecci\xF3n previstas en los presentes T\xE9rminos y Condiciones, sin perjuicio de las acciones civiles, administrativas o penales que correspondan.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1069, "h4", 4);
      \u0275\u0275text(1070, "69. Reserva de derechos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1071, "p", 5);
      \u0275\u0275text(1072, "Todos los derechos que no hayan sido expresamente concedidos al Beneficiario mediante estos T\xE9rminos y Condiciones se entienden reservados a favor de BonoPay o de sus respectivos titulares.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1073, "p", 5);
      \u0275\u0275text(1074, "La falta de ejercicio inmediato de cualquier derecho por parte de BonoPay no constituir\xE1 renuncia a su ejercicio futuro.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1075, "h3", 3);
      \u0275\u0275text(1076, "CAP\xCDTULO VIII \u2014 DISPONIBILIDAD DE LA PLATAFORMA, CONTINUIDAD OPERATIVA Y EVOLUCI\xD3N TECNOL\xD3GICA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1077, "h4", 4);
      \u0275\u0275text(1078, "70. Disponibilidad de la Plataforma");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1079, "p", 5);
      \u0275\u0275text(1080, "BonoPay realizar\xE1 esfuerzos comercialmente razonables para mantener la disponibilidad, estabilidad y funcionamiento de la Plataforma durante la vigencia de la relaci\xF3n contractual.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1081, "p", 5);
      \u0275\u0275text(1082, "No obstante, el Beneficiario reconoce que, por la naturaleza de los servicios tecnol\xF3gicos, la disponibilidad absoluta, permanente e ininterrumpida no puede garantizarse.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1083, "p", 5);
      \u0275\u0275text(1084, "En consecuencia, podr\xE1n producirse interrupciones temporales derivadas de mantenimientos, actualizaciones, incidencias t\xE9cnicas, fallas de infraestructura, eventos de ciberseguridad o cualquier otra circunstancia razonablemente necesaria para preservar la continuidad y seguridad del servicio.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1085, "h4", 4);
      \u0275\u0275text(1086, "71. Mantenimiento de la Plataforma");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1087, "p", 5);
      \u0275\u0275text(1088, "Motiva podr\xE1 realizar mantenimientos preventivos, correctivos, evolutivos o de emergencia cuando ello resulte necesario para:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1089, "p", 5);
      \u0275\u0275text(1090, "a) corregir errores;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1091, "p", 5);
      \u0275\u0275text(1092, "b) mejorar el rendimiento;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1093, "p", 5);
      \u0275\u0275text(1094, "c) implementar nuevas funcionalidades;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1095, "p", 5);
      \u0275\u0275text(1096, "d) reforzar la seguridad;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1097, "p", 5);
      \u0275\u0275text(1098, "e) actualizar componentes tecnol\xF3gicos;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1099, "p", 5);
      \u0275\u0275text(1100, "f) cumplir obligaciones regulatorias;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1101, "p", 5);
      \u0275\u0275text(1102, "g) preservar la continuidad del servicio.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1103, "p", 5);
      \u0275\u0275text(1104, "Siempre que resulte razonablemente posible, BonoPay procurar\xE1 programar los mantenimientos de manera que generen la menor afectaci\xF3n posible para los usuarios.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1105, "h4", 4);
      \u0275\u0275text(1106, "72. Actualizaciones tecnol\xF3gicas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1107, "p", 5);
      \u0275\u0275text(1108, "Con el objeto de mejorar continuamente la Plataforma, Motiva podr\xE1 introducir modificaciones relacionadas con:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1109, "ul", 6)(1110, "li");
      \u0275\u0275text(1111, "nuevas funcionalidades;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1112, "li");
      \u0275\u0275text(1113, "mejoras en la experiencia del usuario;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1114, "li");
      \u0275\u0275text(1115, "nuevos mecanismos de autenticaci\xF3n;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1116, "li");
      \u0275\u0275text(1117, "nuevas interfaces de programaci\xF3n (API);");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1118, "li");
      \u0275\u0275text(1119, "integraci\xF3n con nuevos procesadores de pago;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1120, "li");
      \u0275\u0275text(1121, "integraci\xF3n con nuevas entidades financieras;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1122, "li");
      \u0275\u0275text(1123, "nuevos mecanismos de validaci\xF3n;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1124, "li");
      \u0275\u0275text(1125, "automatizaci\xF3n de procesos;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1126, "li");
      \u0275\u0275text(1127, "mejoras de seguridad;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1128, "li");
      \u0275\u0275text(1129, "cualquier otra evoluci\xF3n tecnol\xF3gica compatible con la naturaleza de los Servicios.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1130, "p", 5);
      \u0275\u0275text(1131, "La incorporaci\xF3n de dichas mejoras no implicar\xE1 modificaci\xF3n de la naturaleza jur\xEDdica del servicio prestado por BonoPay.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1132, "h4", 4);
      \u0275\u0275text(1133, "73. Dependencia de servicios de terceros");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1134, "p", 5);
      \u0275\u0275text(1135, "El Beneficiario reconoce que la adecuada prestaci\xF3n de los Servicios puede depender de la disponibilidad de servicios proporcionados por terceros independientes.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1136, "p", 5);
      \u0275\u0275text(1137, "Entre ellos podr\xE1n encontrarse:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1138, "p", 5);
      \u0275\u0275text(1139, "a) operadores de telecomunicaciones;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1140, "p", 5);
      \u0275\u0275text(1141, "b) proveedores de Internet;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1142, "p", 5);
      \u0275\u0275text(1143, "c) servicios de mensajer\xEDa electr\xF3nica;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1144, "p", 5);
      \u0275\u0275text(1145, "d) WhatsApp u otros canales de comunicaci\xF3n;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1146, "p", 5);
      \u0275\u0275text(1147, "e) proveedores de autenticaci\xF3n;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1148, "p", 5);
      \u0275\u0275text(1149, "f) procesadores de pago;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1150, "p", 5);
      \u0275\u0275text(1151, "g) entidades financieras;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1152, "p", 5);
      \u0275\u0275text(1153, "h) proveedores de infraestructura en la nube;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1154, "p", 5);
      \u0275\u0275text(1155, "i) servicios de alojamiento tecnol\xF3gico;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1156, "p", 5);
      \u0275\u0275text(1157, "j) otros proveedores especializados.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1158, "p", 5);
      \u0275\u0275text(1159, "BonoPay no controla la disponibilidad operativa de dichos terceros.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1160, "h4", 4);
      \u0275\u0275text(1161, "74. Interrupciones ajenas al control de BonoPay");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1162, "p", 5);
      \u0275\u0275text(1163, "BonoPay no ser\xE1 responsable por interrupciones, retrasos o limitaciones en la prestaci\xF3n del servicio cuando estos deriven, entre otros, de:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1164, "p", 5);
      \u0275\u0275text(1165, "a) fallas en servicios de telecomunicaciones;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1166, "p", 5);
      \u0275\u0275text(1167, "b) indisponibilidad de Internet;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1168, "p", 5);
      \u0275\u0275text(1169, "c) interrupciones de energ\xEDa el\xE9ctrica;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1170, "p", 5);
      \u0275\u0275text(1171, "d) indisponibilidad de servicios de mensajer\xEDa;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1172, "p", 5);
      \u0275\u0275text(1173, "e) fallas de procesadores de pago;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1174, "p", 5);
      \u0275\u0275text(1175, "f) indisponibilidad de entidades financieras;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1176, "p", 5);
      \u0275\u0275text(1177, "g) incidentes de ciberseguridad atribuibles a terceros;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1178, "p", 5);
      \u0275\u0275text(1179, "h) decisiones regulatorias;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1180, "p", 5);
      \u0275\u0275text(1181, "i) medidas adoptadas por autoridades competentes;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1182, "p", 5);
      \u0275\u0275text(1183, "j) cualquier otra circunstancia razonablemente ajena al control de BonoPay.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1184, "h4", 4);
      \u0275\u0275text(1185, "75. Continuidad operativa");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1186, "p", 5);
      \u0275\u0275text(1187, "BonoPay procurar\xE1 adoptar medidas razonables destinadas a favorecer la continuidad de los Servicios frente a incidentes tecnol\xF3gicos.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1188, "p", 5);
      \u0275\u0275text(1189, "Entre dichas medidas podr\xE1n incluirse:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1190, "ul", 6)(1191, "li");
      \u0275\u0275text(1192, "mecanismos de respaldo;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1193, "li");
      \u0275\u0275text(1194, "redundancia tecnol\xF3gica;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1195, "li");
      \u0275\u0275text(1196, "monitoreo de infraestructura;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1197, "li");
      \u0275\u0275text(1198, "planes de recuperaci\xF3n;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1199, "li");
      \u0275\u0275text(1200, "procedimientos internos de gesti\xF3n de incidentes;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1201, "li");
      \u0275\u0275text(1202, "controles destinados a minimizar interrupciones.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1203, "p", 5);
      \u0275\u0275text(1204, "La implementaci\xF3n de tales medidas no implica garantizar la inexistencia absoluta de interrupciones o contingencias.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1205, "h4", 4);
      \u0275\u0275text(1206, "76. Suspensi\xF3n temporal del servicio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1207, "p", 5);
      \u0275\u0275text(1208, "Motiva podr\xE1 suspender temporalmente total o parcialmente la disponibilidad de la Plataforma cuando ello resulte razonablemente necesario para:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1209, "p", 5);
      \u0275\u0275text(1210, "a) preservar la seguridad del servicio;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1211, "p", 5);
      \u0275\u0275text(1212, "b) ejecutar mantenimientos urgentes;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1213, "p", 5);
      \u0275\u0275text(1214, "c) atender incidentes tecnol\xF3gicos;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1215, "p", 5);
      \u0275\u0275text(1216, "d) implementar medidas de protecci\xF3n frente a amenazas de seguridad;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1217, "p", 5);
      \u0275\u0275text(1218, "e) cumplir requerimientos de autoridades competentes;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1219, "p", 5);
      \u0275\u0275text(1220, "f) proteger la integridad de los datos procesados.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1221, "p", 5);
      \u0275\u0275text(1222, "Cuando las circunstancias lo permitan, BonoPay procurar\xE1 informar previamente a los usuarios respecto de dichas suspensiones.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1223, "h4", 4);
      \u0275\u0275text(1224, "77. Evoluci\xF3n de la Plataforma");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1225, "p", 5);
      \u0275\u0275text(1226, "El Beneficiario reconoce que la Plataforma constituye un servicio tecnol\xF3gico en permanente evoluci\xF3n.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1227, "p", 5);
      \u0275\u0275text(1228, "En consecuencia, Motiva podr\xE1 modificar la arquitectura tecnol\xF3gica, los procesos internos, los mecanismos de autenticaci\xF3n, las interfaces de usuario, los procesos de integraci\xF3n con terceros y dem\xE1s componentes del servicio cuando ello resulte conveniente para mejorar su funcionamiento o adaptarlo a nuevas necesidades operativas, tecnol\xF3gicas o regulatorias.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1229, "p", 5);
      \u0275\u0275text(1230, "Dichas modificaciones no constituir\xE1n incumplimiento contractual siempre que no desnaturalicen el objeto principal de los Servicios.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1231, "h4", 4);
      \u0275\u0275text(1232, "78. Ausencia de garant\xEDa de disponibilidad absoluta");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1233, "p", 5);
      \u0275\u0275text(1234, "Salvo disposici\xF3n legal imperativa en contrario, BonoPay no garantiza:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1235, "p", 5);
      \u0275\u0275text(1236, "a) disponibilidad continua e ininterrumpida de la Plataforma;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1237, "p", 5);
      \u0275\u0275text(1238, "b) ausencia absoluta de errores;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1239, "p", 5);
      \u0275\u0275text(1240, "c) inexistencia de interrupciones;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1241, "p", 5);
      \u0275\u0275text(1242, "d) compatibilidad con cualquier dispositivo o software;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1243, "p", 5);
      \u0275\u0275text(1244, "e) disponibilidad permanente de servicios proporcionados por terceros.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1245, "p", 5);
      \u0275\u0275text(1246, "No obstante, BonoPay actuar\xE1 con la diligencia razonablemente exigible para restablecer el funcionamiento de la Plataforma cuando se produzcan incidencias bajo su control.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1247, "h4", 4);
      \u0275\u0275text(1248, "79. Mejoras continuas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1249, "p", 5);
      \u0275\u0275text(1250, "El Beneficiario reconoce que la incorporaci\xF3n permanente de mejoras constituye una caracter\xEDstica esencial de los Servicios prestados por BonoPay.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1251, "p", 5);
      \u0275\u0275text(1252, "En consecuencia, las modificaciones tecnol\xF3gicas destinadas a incrementar la seguridad, eficiencia, interoperabilidad, automatizaci\xF3n o funcionalidad de la Plataforma no conferir\xE1n derecho alguno a mantener versiones anteriores ni generar\xE1n compensaci\xF3n econ\xF3mica a favor del Beneficiario.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1253, "h3", 3);
      \u0275\u0275text(1254, "CAP\xCDTULO IX \u2014 R\xC9GIMEN DE RESPONSABILIDAD, DISTRIBUCI\xD3N DE RIESGOS Y LIMITACIONES DE RESPONSABILIDAD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1255, "h4", 4);
      \u0275\u0275text(1256, "80. Principios generales de responsabilidad");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1257, "p", 5);
      \u0275\u0275text(1258, "Cada una de las partes que interviene en la operaci\xF3n de la Plataforma responder\xE1 exclusivamente por los actos, omisiones y obligaciones que le correspondan conforme a la legislaci\xF3n aplicable, a los presentes T\xE9rminos y Condiciones y a la naturaleza de su participaci\xF3n en el servicio.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1259, "p", 5);
      \u0275\u0275text(1260, "El Beneficiario reconoce que la operaci\xF3n de la Plataforma comprende la intervenci\xF3n coordinada de diversos sujetos independientes, entre ellos el Empresa, BonoPay, procesadores de pago, entidades financieras y otros proveedores tecnol\xF3gicos, cada uno con funciones y responsabilidades propias.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1261, "p", 5);
      \u0275\u0275text(1262, "En consecuencia, la eventual responsabilidad de BonoPay deber\xE1 analizarse considerando \xFAnicamente aquellas actuaciones que se encuentren razonablemente bajo su control y dentro del alcance de los Servicios que presta.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1263, "h4", 4);
      \u0275\u0275text(1264, "81. Responsabilidad del Beneficiario");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1265, "p", 5);
      \u0275\u0275text(1266, "El Beneficiario ser\xE1 responsable de:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1267, "p", 5);
      \u0275\u0275text(1268, "a) la veracidad, integridad y actualizaci\xF3n de la informaci\xF3n registrada en la Plataforma;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1269, "p", 5);
      \u0275\u0275text(1270, "b) la custodia de su dispositivo m\xF3vil, n\xFAmero telef\xF3nico, correo electr\xF3nico y dem\xE1s mecanismos utilizados para acceder a la Plataforma;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1271, "p", 5);
      \u0275\u0275text(1272, "c) la confidencialidad de los c\xF3digos OTP y dem\xE1s mecanismos de autenticaci\xF3n;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1273, "p", 5);
      \u0275\u0275text(1274, "d) las operaciones realizadas utilizando sus credenciales o mecanismos de autenticaci\xF3n, salvo que demuestre que fueron consecuencia de una vulneraci\xF3n atribuible a BonoPay;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1275, "p", 5);
      \u0275\u0275text(1276, "e) las consecuencias derivadas del registro de informaci\xF3n bancaria o financiera incorrecta, incompleta, desactualizada o inconsistente;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1277, "p", 5);
      \u0275\u0275text(1278, "f) cualquier perjuicio ocasionado por el incumplimiento de las obligaciones asumidas en estos T\xE9rminos y Condiciones.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1279, "h4", 4);
      \u0275\u0275text(1280, "82. Responsabilidad de la Empresa");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1281, "p", 5);
      \u0275\u0275text(1282, "El Beneficiario reconoce que corresponde exclusivamente a la Empresa:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1283, "p", 5);
      \u0275\u0275text(1284, "a) determinar los criterios de elegibilidad para recibir incentivos;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1285, "p", 5);
      \u0275\u0275text(1286, "b) seleccionar a los Beneficiarios;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1287, "p", 5);
      \u0275\u0275text(1288, "c) definir el monto de los incentivos;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1289, "p", 5);
      \u0275\u0275text(1290, "d) aprobar, modificar, suspender o cancelar incentivos;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1291, "p", 5);
      \u0275\u0275text(1292, "e) proporcionar a BonoPay la informaci\xF3n inicial necesaria para la incorporaci\xF3n del Beneficiario;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1293, "p", 5);
      \u0275\u0275text(1294, "f) contar con las autorizaciones, consentimientos, bases legales u otros mecanismos habilitantes exigidos para comunicar dicha informaci\xF3n a BonoPay;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1295, "p", 5);
      \u0275\u0275text(1296, "g) emitir las instrucciones de pago que correspondan.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1297, "p", 5);
      \u0275\u0275text(1298, "En consecuencia, BonoPay no responder\xE1 por decisiones adoptadas exclusivamente por la Empresa en el ejercicio de dichas facultades.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1299, "h4", 4);
      \u0275\u0275text(1300, "83. Responsabilidad de BonoPay");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1301, "p", 5);
      \u0275\u0275text(1302, "BonoPay responder\xE1 por el adecuado funcionamiento de los procesos tecnol\xF3gicos que razonablemente se encuentren bajo su control y que resulten necesarios para la prestaci\xF3n de los Servicios, actuando con la diligencia exigible conforme a la naturaleza de una plataforma tecnol\xF3gica.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1303, "p", 5);
      \u0275\u0275text(1304, "Ello comprende, entre otros aspectos:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1305, "p", 5);
      \u0275\u0275text(1306, "a) la administraci\xF3n de la Plataforma;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1307, "p", 5);
      \u0275\u0275text(1308, "b) la gesti\xF3n del proceso de registro;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1309, "p", 5);
      \u0275\u0275text(1310, "c) la autenticaci\xF3n de usuarios;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1311, "p", 5);
      \u0275\u0275text(1312, "d) la transmisi\xF3n de instrucciones de pago conforme a la informaci\xF3n recibida del Empresa;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1313, "p", 5);
      \u0275\u0275text(1314, "e) la conservaci\xF3n de registros electr\xF3nicos;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1315, "p", 5);
      \u0275\u0275text(1316, "f) la implementaci\xF3n de medidas razonables de seguridad.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1317, "p", 5);
      \u0275\u0275text(1318, "La responsabilidad de BonoPay no comprender\xE1 actuaciones, decisiones o eventos que correspondan exclusivamente a la Empresa, a los procesadores de pago, a las entidades financieras u otros terceros independientes.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1319, "h4", 4);
      \u0275\u0275text(1320, "84. Responsabilidad de terceros");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1321, "p", 5);
      \u0275\u0275text(1322, "Los procesadores de pago, entidades financieras, operadores de billeteras m\xF3viles, proveedores de infraestructura tecnol\xF3gica, operadores de telecomunicaciones y dem\xE1s terceros que participen en la prestaci\xF3n del servicio actuar\xE1n bajo su propia responsabilidad.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1323, "p", 5);
      \u0275\u0275text(1324, "La intervenci\xF3n de dichos terceros no implica la existencia de representaci\xF3n, mandato, sociedad, agencia ni relaci\xF3n laboral con BonoPay.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1325, "p", 5);
      \u0275\u0275text(1326, "Cada tercero ser\xE1 responsable exclusivamente por las obligaciones derivadas de los servicios que presta.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1327, "h4", 4);
      \u0275\u0275text(1328, "85. Circunstancias ajenas al control de BonoPay");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1329, "p", 5);
      \u0275\u0275text(1330, "BonoPay no ser\xE1 responsable por perjuicios derivados de circunstancias que razonablemente escapen a su control, incluyendo, entre otras:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1331, "p", 5);
      \u0275\u0275text(1332, "a) errores en la informaci\xF3n proporcionada por la Empresa;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1333, "p", 5);
      \u0275\u0275text(1334, "b) errores en la informaci\xF3n registrada por el Beneficiario;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1335, "p", 5);
      \u0275\u0275text(1336, "c) rechazo de operaciones por entidades financieras o procesadores de pago;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1337, "p", 5);
      \u0275\u0275text(1338, "d) indisponibilidad de redes de telecomunicaciones;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1339, "p", 5);
      \u0275\u0275text(1340, "e) fallas de Internet;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1341, "p", 5);
      \u0275\u0275text(1342, "f) interrupciones de proveedores tecnol\xF3gicos;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1343, "p", 5);
      \u0275\u0275text(1344, "g) medidas adoptadas por autoridades competentes;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1345, "p", 5);
      \u0275\u0275text(1346, "h) ataques inform\xE1ticos dirigidos contra terceros;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1347, "p", 5);
      \u0275\u0275text(1348, "i) indisponibilidad de servicios de mensajer\xEDa;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1349, "p", 5);
      \u0275\u0275text(1350, "j) eventos de fuerza mayor o caso fortuito.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1351, "h4", 4);
      \u0275\u0275text(1352, "86. Mitigaci\xF3n de da\xF1os");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1353, "p", 5);
      \u0275\u0275text(1354, "El Beneficiario se compromete a adoptar medidas razonables para evitar o reducir los da\xF1os que pudieran derivarse de un incidente relacionado con la Plataforma.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1355, "p", 5);
      \u0275\u0275text(1356, "En particular, deber\xE1 comunicar oportunamente cualquier situaci\xF3n que pueda comprometer la seguridad de su cuenta, la exactitud de la informaci\xF3n registrada o el adecuado procesamiento de los incentivos.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1357, "p", 5);
      \u0275\u0275text(1358, "BonoPay procurar\xE1 colaborar razonablemente con el Beneficiario para investigar los hechos y adoptar las medidas que resulten procedentes dentro del \xE1mbito de sus competencias.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1359, "h4", 4);
      \u0275\u0275text(1360, "87. Fuerza mayor y caso fortuito");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1361, "p", 5);
      \u0275\u0275text(1362, "Ninguna de las partes ser\xE1 responsable por el incumplimiento o retraso en el cumplimiento de sus obligaciones cuando ello sea consecuencia directa de un evento de fuerza mayor o caso fortuito, conforme a la legislaci\xF3n peruana.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1363, "p", 5);
      \u0275\u0275text(1364, "Se consideran comprendidos, entre otros, desastres naturales, conflictos armados, actos de autoridad, disturbios civiles, pandemias, fallas generalizadas de infraestructura cr\xEDtica, interrupciones masivas de telecomunicaciones, ciberataques de gran escala u otros acontecimientos imprevisibles o inevitables que imposibiliten razonablemente la prestaci\xF3n del servicio.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1365, "p", 5);
      \u0275\u0275text(1366, "La parte afectada procurar\xE1 informar a la otra sobre la ocurrencia del evento y adoptar\xE1 medidas razonables para mitigar sus efectos cuando ello sea posible.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1367, "h4", 4);
      \u0275\u0275text(1368, "88. Exclusi\xF3n de da\xF1os indirectos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1369, "p", 5);
      \u0275\u0275text(1370, "Salvo disposici\xF3n legal imperativa en contrario, BonoPay no responder\xE1 por da\xF1os indirectos, incidentales, consecuenciales, p\xE9rdida de oportunidades de negocio, lucro cesante, p\xE9rdida de informaci\xF3n o cualquier otro perjuicio que no constituya una consecuencia directa e inmediata del incumplimiento imputable a BonoPay.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1371, "p", 5);
      \u0275\u0275text(1372, "La presente cl\xE1usula no excluye la responsabilidad que no pueda limitarse o excluirse conforme a la legislaci\xF3n aplicable.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1373, "h4", 4);
      \u0275\u0275text(1374, "89. Interpretaci\xF3n de las limitaciones de responsabilidad");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1375, "p", 5);
      \u0275\u0275text(1376, "Las limitaciones de responsabilidad previstas en estos T\xE9rminos y Condiciones deber\xE1n interpretarse de manera compatible con la legislaci\xF3n peruana, el principio de buena fe contractual y los derechos irrenunciables reconocidos al Beneficiario.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1377, "p", 5);
      \u0275\u0275text(1378, "En ning\xFAn caso podr\xE1n interpretarse como una exclusi\xF3n de responsabilidad respecto de obligaciones cuya limitaci\xF3n o exclusi\xF3n se encuentre prohibida por normas de orden p\xFAblico.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1379, "h4", 4);
      \u0275\u0275text(1380, "90. Conservaci\xF3n de acciones");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1381, "p", 5);
      \u0275\u0275text(1382, "La falta de ejercicio inmediato por parte de BonoPay de cualquiera de los derechos o facultades previstos en estos T\xE9rminos y Condiciones no constituir\xE1 renuncia a ellos ni impedir\xE1 su ejercicio posterior.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1383, "p", 5);
      \u0275\u0275text(1384, "El ejercicio parcial de un derecho tampoco impedir\xE1 el ejercicio de otros derechos o acciones que correspondan conforme al contrato o a la legislaci\xF3n aplicable.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1385, "h3", 3);
      \u0275\u0275text(1386, "CAP\xCDTULO X \u2014 SUSPENSI\xD3N, RESTRICCI\xD3N, TERMINACI\xD3N DEL ACCESO Y EFECTOS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1387, "h4", 4);
      \u0275\u0275text(1388, "91. Facultad de suspensi\xF3n preventiva");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1389, "p", 5);
      \u0275\u0275text(1390, "Motiva podr\xE1 suspender temporalmente el acceso del Beneficiario a la Plataforma, total o parcialmente, cuando existan circunstancias objetivas que razonablemente hagan necesario proteger la seguridad, integridad o adecuado funcionamiento de los Servicios.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1391, "p", 5);
      \u0275\u0275text(1392, "La suspensi\xF3n preventiva constituye una medida de gesti\xF3n del riesgo y no implica, por s\xED sola, la existencia de incumplimiento por parte del Beneficiario ni el reconocimiento de responsabilidad por parte de BonoPay.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1393, "p", 5);
      \u0275\u0275text(1394, "Siempre que ello resulte posible y no comprometa investigaciones de fraude, medidas de seguridad o requerimientos de autoridad competente, BonoPay procurar\xE1 informar al Beneficiario acerca de la suspensi\xF3n y de las acciones necesarias para su levantamiento.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1395, "h4", 4);
      \u0275\u0275text(1396, "92. Causales de suspensi\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1397, "p", 5);
      \u0275\u0275text(1398, "Motiva podr\xE1 suspender temporalmente el acceso a la Plataforma, entre otros supuestos, cuando:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1399, "p", 5);
      \u0275\u0275text(1400, "a) existan indicios razonables de fraude;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1401, "p", 5);
      \u0275\u0275text(1402, "b) se detecten intentos de suplantaci\xF3n de identidad;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1403, "p", 5);
      \u0275\u0275text(1404, "c) existan inconsistencias relevantes en la informaci\xF3n registrada;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1405, "p", 5);
      \u0275\u0275text(1406, "d) se detecten accesos inusuales o potencialmente riesgosos;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1407, "p", 5);
      \u0275\u0275text(1408, "e) se registren m\xFAltiples intentos fallidos de autenticaci\xF3n;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1409, "p", 5);
      \u0275\u0275text(1410, "f) existan incidentes de ciberseguridad;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1411, "p", 5);
      \u0275\u0275text(1412, "g) resulte necesario realizar verificaciones adicionales de identidad;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1413, "p", 5);
      \u0275\u0275text(1414, "h) existan requerimientos emitidos por autoridades competentes;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1415, "p", 5);
      \u0275\u0275text(1416, "i) sea necesario ejecutar actividades cr\xEDticas de mantenimiento o protecci\xF3n de la Plataforma;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1417, "p", 5);
      \u0275\u0275text(1418, "j) el Beneficiario incumpla los presentes T\xE9rminos y Condiciones.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1419, "h4", 4);
      \u0275\u0275text(1420, "93. Restricci\xF3n de funcionalidades");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1421, "p", 5);
      \u0275\u0275text(1422, "Cuando la naturaleza del riesgo lo permita, Motiva podr\xE1 restringir \xFAnicamente determinadas funcionalidades de la Plataforma, manteniendo disponibles aquellas que no representen un riesgo para la seguridad del servicio.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1423, "p", 5);
      \u0275\u0275text(1424, "La adopci\xF3n de medidas parciales ser\xE1 evaluada por BonoPay atendiendo a la naturaleza de cada incidencia.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1425, "h4", 4);
      \u0275\u0275text(1426, "94. Procedimiento de verificaci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1427, "p", 5);
      \u0275\u0275text(1428, "Cuando una suspensi\xF3n tenga por finalidad verificar la autenticidad de determinada informaci\xF3n o prevenir un posible fraude, Motiva podr\xE1 solicitar al Beneficiario documentaci\xF3n o informaci\xF3n adicional razonablemente necesaria para concluir el proceso de verificaci\xF3n.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1429, "p", 5);
      \u0275\u0275text(1430, "El Beneficiario se compromete a colaborar de buena fe proporcionando la informaci\xF3n solicitada dentro de un plazo razonable.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1431, "p", 5);
      \u0275\u0275text(1432, "La falta de colaboraci\xF3n podr\xE1 ser considerada por BonoPay al evaluar la continuidad del acceso a la Plataforma.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1433, "h4", 4);
      \u0275\u0275text(1434, "95. Terminaci\xF3n del acceso");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1435, "p", 5);
      \u0275\u0275text(1436, "Motiva podr\xE1 dar por terminado el acceso del Beneficiario a la Plataforma cuando:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1437, "p", 5);
      \u0275\u0275text(1438, "a) el Beneficiario incurra en fraude debidamente verificado;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1439, "p", 5);
      \u0275\u0275text(1440, "b) se compruebe la utilizaci\xF3n de informaci\xF3n falsa;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1441, "p", 5);
      \u0275\u0275text(1442, "c) exista utilizaci\xF3n indebida de la Plataforma;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1443, "p", 5);
      \u0275\u0275text(1444, "d) se determine la existencia de suplantaci\xF3n de identidad;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1445, "p", 5);
      \u0275\u0275text(1446, "e) el Beneficiario incumpla gravemente los presentes T\xE9rminos y Condiciones;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1447, "p", 5);
      \u0275\u0275text(1448, "f) exista imposibilidad legal de continuar prestando el servicio;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1449, "p", 5);
      \u0275\u0275text(1450, "g) la Empresa comunique la finalizaci\xF3n del programa de incentivos respecto del Beneficiario, cuando ello implique la imposibilidad de continuar utilizando la Plataforma para la finalidad prevista.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1451, "p", 5);
      \u0275\u0275text(1452, "La terminaci\xF3n se realizar\xE1 respetando la legislaci\xF3n aplicable y no afectar\xE1 los derechos adquiridos con anterioridad a su fecha de efectividad.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1453, "h4", 4);
      \u0275\u0275text(1454, "96. Terminaci\xF3n por decisi\xF3n del Empresa");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1455, "p", 5);
      \u0275\u0275text(1456, "El Beneficiario reconoce que la continuidad de su participaci\xF3n en el programa de incentivos depende de las decisiones adoptadas por el Empresa.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1457, "p", 5);
      \u0275\u0275text(1458, "Cuando la Empresa comunique a BonoPay la conclusi\xF3n de la relaci\xF3n que justific\xF3 el registro del Beneficiario o la finalizaci\xF3n del programa correspondiente, Motiva podr\xE1 restringir o finalizar el acceso a aquellas funcionalidades que dependan exclusivamente de dicho programa.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1459, "p", 5);
      \u0275\u0275text(1460, "Ello no impedir\xE1 la conservaci\xF3n de la informaci\xF3n que BonoPay deba mantener por obligaci\xF3n legal, fines de auditor\xEDa, prevenci\xF3n del fraude o defensa de derechos.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1461, "h4", 4);
      \u0275\u0275text(1462, "97. Conservaci\xF3n de informaci\xF3n despu\xE9s de la terminaci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1463, "p", 5);
      \u0275\u0275text(1464, "La suspensi\xF3n o terminaci\xF3n del acceso no implicar\xE1 la eliminaci\xF3n inmediata de la informaci\xF3n registrada en la Plataforma.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1465, "p", 5);
      \u0275\u0275text(1466, "Motiva podr\xE1 conservar los datos y registros electr\xF3nicos durante los plazos necesarios para:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1467, "p", 5);
      \u0275\u0275text(1468, "a) cumplir obligaciones legales;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1469, "p", 5);
      \u0275\u0275text(1470, "b) atender requerimientos de autoridades competentes;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1471, "p", 5);
      \u0275\u0275text(1472, "c) resolver reclamaciones;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1473, "p", 5);
      \u0275\u0275text(1474, "d) prevenir fraude;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1475, "p", 5);
      \u0275\u0275text(1476, "e) efectuar auditor\xEDas;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1477, "p", 5);
      \u0275\u0275text(1478, "f) ejercer o defender derechos en procedimientos administrativos, arbitrales o judiciales;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1479, "p", 5);
      \u0275\u0275text(1480, "g) cumplir las pol\xEDticas internas de conservaci\xF3n de informaci\xF3n.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1481, "p", 5);
      \u0275\u0275text(1482, "La conservaci\xF3n de dicha informaci\xF3n se realizar\xE1 conforme a la legislaci\xF3n aplicable en materia de protecci\xF3n de datos personales.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1483, "h4", 4);
      \u0275\u0275text(1484, "98. Restablecimiento del acceso");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1485, "p", 5);
      \u0275\u0275text(1486, "Cuando desaparezcan las circunstancias que motivaron una suspensi\xF3n preventiva y se hayan superado satisfactoriamente las verificaciones correspondientes, Motiva podr\xE1 restablecer el acceso del Beneficiario a la Plataforma.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1487, "p", 5);
      \u0275\u0275text(1488, "La decisi\xF3n de restablecimiento ser\xE1 adoptada considerando la naturaleza del incidente, los riesgos identificados y la informaci\xF3n disponible al momento de la evaluaci\xF3n.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1489, "h4", 4);
      \u0275\u0275text(1490, "99. Efectos de la terminaci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1491, "p", 5);
      \u0275\u0275text(1492, "La terminaci\xF3n del acceso producir\xE1, entre otros, los siguientes efectos:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1493, "p", 5);
      \u0275\u0275text(1494, "a) cesar\xE1 el derecho del Beneficiario a utilizar la Plataforma;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1495, "p", 5);
      \u0275\u0275text(1496, "b) Motiva podr\xE1 deshabilitar las credenciales de acceso;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1497, "p", 5);
      \u0275\u0275text(1498, "c) continuar\xE1n vigentes aquellas obligaciones que, por su naturaleza, deban subsistir despu\xE9s de la terminaci\xF3n, incluyendo las relativas a confidencialidad, protecci\xF3n de datos, conservaci\xF3n de registros, propiedad intelectual, limitaci\xF3n de responsabilidad y resoluci\xF3n de controversias;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1499, "p", 5);
      \u0275\u0275text(1500, "d) la terminaci\xF3n no afectar\xE1 la validez de las operaciones ejecutadas con anterioridad a su efectividad;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1501, "p", 5);
      \u0275\u0275text(1502, "e) la terminaci\xF3n no extinguir\xE1 las obligaciones legales pendientes de cumplimiento por cualquiera de las partes.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1503, "h4", 4);
      \u0275\u0275text(1504, "100. Ausencia de renuncia de derechos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1505, "p", 5);
      \u0275\u0275text(1506, "La suspensi\xF3n, restricci\xF3n o terminaci\xF3n del acceso no constituir\xE1 renuncia por parte de BonoPay al ejercicio de cualquier otro derecho, acci\xF3n o facultad que pudiera corresponderle conforme a los presentes T\xE9rminos y Condiciones o a la legislaci\xF3n aplicable.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1507, "h3", 3);
      \u0275\u0275text(1508, "CAP\xCDTULO XI \u2014 DISPOSICIONES FINALES");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1509, "h4", 4);
      \u0275\u0275text(1510, "101. Comunicaciones entre las partes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1511, "p", 5);
      \u0275\u0275text(1512, "Toda comunicaci\xF3n relacionada con la utilizaci\xF3n de la Plataforma podr\xE1 efectuarse mediante medios electr\xF3nicos, incluyendo, entre otros:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1513, "p", 5);
      \u0275\u0275text(1514, "a) correo electr\xF3nico;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1515, "p", 5);
      \u0275\u0275text(1516, "b) mensajes enviados mediante la Plataforma;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1517, "p", 5);
      \u0275\u0275text(1518, "c) WhatsApp;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1519, "p", 5);
      \u0275\u0275text(1520, "d) mensajes SMS;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1521, "p", 5);
      \u0275\u0275text(1522, "e) otros medios tecnol\xF3gicos razonablemente implementados por BonoPay.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1523, "p", 5);
      \u0275\u0275text(1524, "Las comunicaciones remitidas por dichos medios producir\xE1n efectos desde el momento en que sean enviadas o puestas a disposici\xF3n del Beneficiario, salvo disposici\xF3n legal imperativa en contrario.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1525, "h4", 4);
      \u0275\u0275text(1526, "102. Integridad contractual");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1527, "p", 5);
      \u0275\u0275text(1528, "Los presentes T\xE9rminos y Condiciones, conjuntamente con la Pol\xEDtica de Privacidad y aquellos documentos cuya aceptaci\xF3n sea expresamente requerida durante el proceso de registro, constituyen el acuerdo \xEDntegro entre BonoPay y el Beneficiario respecto de la utilizaci\xF3n de la Plataforma.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1529, "p", 5);
      \u0275\u0275text(1530, "Toda comunicaci\xF3n, propuesta o entendimiento previo relacionado con el objeto de estos T\xE9rminos y Condiciones quedar\xE1 sustituido por el presente documento desde su aceptaci\xF3n.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1531, "h4", 4);
      \u0275\u0275text(1532, "103. Independencia de las cl\xE1usulas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1533, "p", 5);
      \u0275\u0275text(1534, "La eventual nulidad, invalidez o inaplicabilidad de cualquiera de las disposiciones contenidas en estos T\xE9rminos y Condiciones no afectar\xE1 la validez de las dem\xE1s cl\xE1usulas, las cuales continuar\xE1n produciendo plenamente sus efectos.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1535, "p", 5);
      \u0275\u0275text(1536, "Las disposiciones afectadas ser\xE1n interpretadas o, cuando corresponda, sustituidas en la medida necesaria para preservar la finalidad econ\xF3mica y jur\xEDdica del contrato, siempre que ello sea compatible con la legislaci\xF3n aplicable.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1537, "h4", 4);
      \u0275\u0275text(1538, "104. Cesi\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1539, "p", 5);
      \u0275\u0275text(1540, "Motiva podr\xE1 ceder total o parcialmente los derechos y obligaciones derivados de estos T\xE9rminos y Condiciones a empresas vinculadas, sucesoras, adquirentes de unidades de negocio o terceros que contin\xFAen la prestaci\xF3n de los Servicios, siempre que dicha cesi\xF3n no implique una reducci\xF3n de los derechos reconocidos al Beneficiario por la legislaci\xF3n aplicable.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1541, "p", 5);
      \u0275\u0275text(1542, "El Beneficiario no podr\xE1 ceder, transferir o delegar los derechos u obligaciones derivados de estos T\xE9rminos y Condiciones sin autorizaci\xF3n previa y por escrito de BonoPay.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1543, "h4", 4);
      \u0275\u0275text(1544, "105. Renuncia");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1545, "p", 5);
      \u0275\u0275text(1546, "La falta de ejercicio o el ejercicio tard\xEDo por parte de BonoPay de cualquier derecho, acci\xF3n o facultad prevista en estos T\xE9rminos y Condiciones no constituir\xE1 renuncia a su ejercicio posterior.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1547, "p", 5);
      \u0275\u0275text(1548, "La renuncia \xFAnicamente ser\xE1 v\xE1lida cuando conste expresamente por escrito.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1549, "h4", 4);
      \u0275\u0275text(1550, "106. Interpretaci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1551, "p", 5);
      \u0275\u0275text(1552, "Los presentes T\xE9rminos y Condiciones deber\xE1n interpretarse conforme a los principios de buena fe, razonabilidad, equilibrio contractual, transparencia, seguridad jur\xEDdica y conservaci\xF3n del negocio jur\xEDdico.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1553, "p", 5);
      \u0275\u0275text(1554, "En caso de duda sobre el alcance de una disposici\xF3n, deber\xE1 preferirse la interpretaci\xF3n que resulte compatible con la naturaleza tecnol\xF3gica de los Servicios y con la legislaci\xF3n aplicable.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1555, "h4", 4);
      \u0275\u0275text(1556, "107. Modificaciones");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1557, "p", 5);
      \u0275\u0275text(1558, "Motiva podr\xE1 modificar los presentes T\xE9rminos y Condiciones cuando ello resulte necesario para:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1559, "p", 5);
      \u0275\u0275text(1560, "a) adecuarse a cambios legislativos o regulatorios;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1561, "p", 5);
      \u0275\u0275text(1562, "b) incorporar nuevas funcionalidades o tecnolog\xEDas;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1563, "p", 5);
      \u0275\u0275text(1564, "c) mejorar la seguridad de la Plataforma;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1565, "p", 5);
      \u0275\u0275text(1566, "d) implementar nuevos mecanismos de autenticaci\xF3n;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1567, "p", 5);
      \u0275\u0275text(1568, "e) incorporar nuevos proveedores tecnol\xF3gicos;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1569, "p", 5);
      \u0275\u0275text(1570, "f) optimizar la prestaci\xF3n de los Servicios.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1571, "p", 5);
      \u0275\u0275text(1572, "Las modificaciones ser\xE1n comunicadas por medios electr\xF3nicos razonablemente id\xF3neos.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1573, "p", 5);
      \u0275\u0275text(1574, "Cuando la naturaleza de la modificaci\xF3n as\xED lo requiera, BonoPay solicitar\xE1 una nueva aceptaci\xF3n antes de permitir el uso continuado de la Plataforma.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1575, "h4", 4);
      \u0275\u0275text(1576, "108. Ley aplicable");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1577, "p", 5);
      \u0275\u0275text(1578, "Los presentes T\xE9rminos y Condiciones se regir\xE1n e interpretar\xE1n de conformidad con las leyes de la Rep\xFAblica del Per\xFA.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1579, "p", 5);
      \u0275\u0275text(1580, "Las disposiciones contenidas en este documento se entender\xE1n complementadas por la normativa peruana aplicable en materia de contrataci\xF3n electr\xF3nica, protecci\xF3n de datos personales, protecci\xF3n al consumidor y dem\xE1s normas que resulten pertinentes.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1581, "h4", 4);
      \u0275\u0275text(1582, "109. Soluci\xF3n de controversias");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1583, "p", 5);
      \u0275\u0275text(1584, "Las partes procurar\xE1n resolver de buena fe cualquier controversia relacionada con la interpretaci\xF3n o ejecuci\xF3n de los presentes T\xE9rminos y Condiciones mediante negociaciones directas.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1585, "p", 5);
      \u0275\u0275text(1586, "De no alcanzarse una soluci\xF3n dentro de un plazo razonable, la controversia ser\xE1 sometida a la jurisdicci\xF3n de los jueces y tribunales competentes de la Rep\xFAblica del Per\xFA, salvo que una norma imperativa establezca un mecanismo distinto o las partes acuerden v\xE1lidamente un medio alternativo de soluci\xF3n de controversias.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1587, "p", 5);
      \u0275\u0275text(1588, "Lo anterior no limita el derecho del Beneficiario de acudir a las autoridades administrativas competentes cuando la legislaci\xF3n le reconozca tal facultad.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1589, "h4", 4);
      \u0275\u0275text(1590, "110. Entrada en vigor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1591, "p", 5);
      \u0275\u0275text(1592, "Los presentes T\xE9rminos y Condiciones entrar\xE1n en vigor desde el momento en que el Beneficiario manifieste su aceptaci\xF3n mediante cualquiera de los mecanismos de contrataci\xF3n electr\xF3nica habilitados por BonoPay.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1593, "p", 5);
      \u0275\u0275text(1594, "Dicha aceptaci\xF3n permanecer\xE1 vigente mientras el Beneficiario utilice la Plataforma o subsistan obligaciones derivadas de la relaci\xF3n contractual que, por su naturaleza, deban mantenerse con posterioridad a la terminaci\xF3n del acceso.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1595, "button", 7);
      \u0275\u0275listener("click", function LegalDialogs_Template_button_click_1595_listener() {
        return ctx.legal.termsOpen.set(false);
      });
      \u0275\u0275text(1596, " Entendido ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1597, "app-dialog", 8);
      \u0275\u0275listener("openChange", function LegalDialogs_Template_app_dialog_openChange_1597_listener($event) {
        return ctx.legal.privacyOpen.set($event);
      });
      \u0275\u0275elementStart(1598, "div", 1)(1599, "h3", 9);
      \u0275\u0275text(1600, "CAP\xCDTULO I \u2014 DISPOSICIONES GENERALES");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1601, "h4", 4);
      \u0275\u0275text(1602, "Art\xEDculo 1.- Objeto de la Pol\xEDtica");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1603, "p", 5);
      \u0275\u0275text(1604, 'La presente Pol\xEDtica de Privacidad tiene por objeto informar de manera clara, transparente y accesible la forma en que Motiva Soluciones S.A.C. (en adelante, "Motiva"), en su calidad de titular de la plataforma tecnol\xF3gica BonoPay, recopila, utiliza, almacena, organiza, conserva, comparte, transfiere, protege y, en general, trata los datos personales de los Beneficiarios que utilizan la Plataforma.');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1605, "p", 5);
      \u0275\u0275text(1606, "Asimismo, esta Pol\xEDtica establece los derechos que asisten a los titulares de los datos personales y los mecanismos disponibles para ejercerlos, de conformidad con la Ley N\xB0 29733, Ley de Protecci\xF3n de Datos Personales, su Reglamento aprobado mediante Decreto Supremo N\xB0 003-2013-JUS y dem\xE1s normas complementarias que resulten aplicables.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1607, "p", 5);
      \u0275\u0275text(1608, "La presente Pol\xEDtica forma parte integrante de los T\xE9rminos y Condiciones de Uso de BonoPay y deber\xE1 interpretarse conjuntamente con ellos.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1609, "h4", 4);
      \u0275\u0275text(1610, "Art\xEDculo 2.- Responsable del tratamiento");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1611, "p", 5);
      \u0275\u0275text(1612, "Motiva Soluciones S.A.C., titular de la plataforma BonoPay, es el responsable del tratamiento de los datos personales recopilados y tratados a trav\xE9s de la Plataforma.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1613, "p", 5);
      \u0275\u0275text(1614, "En tal condici\xF3n, Motiva determina las finalidades y los medios esenciales del tratamiento de los datos personales, administra el banco de datos personales correspondiente, implementa las medidas de seguridad exigidas por la normativa vigente y atiende el ejercicio de los derechos de los titulares de los datos personales.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1615, "p", 5);
      \u0275\u0275text(1616, "Motiva realiza el tratamiento de los datos personales conforme a los principios y obligaciones previstos en la Ley N\xB0 29733, su Reglamento y dem\xE1s disposiciones aplicables.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1617, "h4", 4);
      \u0275\u0275text(1618, "Art\xEDculo 3.- Compromiso con la protecci\xF3n de datos personales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1619, "p", 5);
      \u0275\u0275text(1620, "Motiva reconoce la importancia de la privacidad y de la protecci\xF3n de los datos personales de los Beneficiarios que utilizan BonoPay.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1621, "p", 5);
      \u0275\u0275text(1622, "Por ello, se compromete a realizar el tratamiento de los datos personales de manera l\xEDcita, transparente, proporcional, segura y confidencial, adoptando las medidas t\xE9cnicas, organizativas y legales razonablemente necesarias para prevenir su alteraci\xF3n, p\xE9rdida, acceso no autorizado, uso indebido o cualquier otro tratamiento contrario a la legislaci\xF3n vigente.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1623, "p", 5);
      \u0275\u0275text(1624, "La protecci\xF3n de los datos personales constituye un componente esencial del dise\xF1o, operaci\xF3n y mejora continua de la Plataforma BonoPay.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1625, "h4", 4);
      \u0275\u0275text(1626, "Art\xEDculo 4.- Principios aplicables al tratamiento");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1627, "p", 5);
      \u0275\u0275text(1628, "Motiva realiza el tratamiento de los datos personales respetando los principios previstos en la Ley N\xB0 29733 y su Reglamento, entre ellos:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1629, "p", 5);
      \u0275\u0275text(1630, "a) Principio de legalidad.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1631, "p", 5);
      \u0275\u0275text(1632, "b) Principio de consentimiento, cuando resulte exigible.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1633, "p", 5);
      \u0275\u0275text(1634, "c) Principio de finalidad.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1635, "p", 5);
      \u0275\u0275text(1636, "d) Principio de proporcionalidad.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1637, "p", 5);
      \u0275\u0275text(1638, "e) Principio de calidad.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1639, "p", 5);
      \u0275\u0275text(1640, "f) Principio de seguridad.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1641, "p", 5);
      \u0275\u0275text(1642, "g) Principio de disposici\xF3n de recurso.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1643, "p", 5);
      \u0275\u0275text(1644, "h) Principio de nivel de protecci\xF3n adecuado.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1645, "p", 5);
      \u0275\u0275text(1646, "Estos principios orientan todas las actividades de tratamiento desarrolladas por Motiva a trav\xE9s de la Plataforma BonoPay.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1647, "h4", 4);
      \u0275\u0275text(1648, "Art\xEDculo 5.- \xC1mbito de aplicaci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1649, "p", 5);
      \u0275\u0275text(1650, "La presente Pol\xEDtica resulta aplicable a todos los datos personales tratados por Motiva mediante la Plataforma BonoPay respecto de los Beneficiarios registrados o que utilicen los servicios ofrecidos a trav\xE9s de ella.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1651, "p", 5);
      \u0275\u0275text(1652, "Asimismo, comprende el tratamiento de los datos personales que resulte necesario para:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1653, "ul", 6)(1654, "li");
      \u0275\u0275text(1655, "el registro de Beneficiarios;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1656, "li");
      \u0275\u0275text(1657, "la validaci\xF3n de identidad;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1658, "li");
      \u0275\u0275text(1659, "la autenticaci\xF3n de usuarios;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1660, "li");
      \u0275\u0275text(1661, "la administraci\xF3n de perfiles;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1662, "li");
      \u0275\u0275text(1663, "la gesti\xF3n de incentivos y beneficios;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1664, "li");
      \u0275\u0275text(1665, "la atenci\xF3n de consultas y solicitudes;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1666, "li");
      \u0275\u0275text(1667, "la prevenci\xF3n del fraude;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1668, "li");
      \u0275\u0275text(1669, "el cumplimiento de obligaciones legales y regulatorias;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1670, "li");
      \u0275\u0275text(1671, "la seguridad de la Plataforma; y");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1672, "li");
      \u0275\u0275text(1673, "la mejora continua de los servicios ofrecidos.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1674, "h4", 4);
      \u0275\u0275text(1675, "Art\xEDculo 6.- Cumplimiento normativo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1676, "p", 5);
      \u0275\u0275text(1677, "Motiva desarrolla todas las actividades de tratamiento de datos personales procurando garantizar el cumplimiento permanente de la legislaci\xF3n peruana sobre protecci\xF3n de datos personales, as\xED como de las mejores pr\xE1cticas en materia de privacidad y seguridad de la informaci\xF3n.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1678, "p", 5);
      \u0275\u0275text(1679, "Cuando corresponda, Motiva adoptar\xE1 las medidas necesarias para actualizar sus procedimientos internos, contratos, pol\xEDticas y mecanismos de seguridad con la finalidad de mantener un adecuado nivel de protecci\xF3n de los datos personales tratados mediante la Plataforma.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1680, "h4", 4);
      \u0275\u0275text(1681, "Art\xEDculo 7.- Banco de datos personales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1682, "p", 5);
      \u0275\u0275text(1683, "Los datos personales tratados mediante la Plataforma BonoPay forman parte del banco de datos personales cuya titularidad y administraci\xF3n corresponden a Motiva Soluciones S.A.C., el cual ser\xE1 registrado y administrado conforme a la legislaci\xF3n vigente ante el Registro Nacional de Protecci\xF3n de Datos Personales, cuando ello resulte aplicable.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1684, "p", 5);
      \u0275\u0275text(1685, "Motiva ser\xE1 responsable de garantizar el cumplimiento de las obligaciones derivadas de la administraci\xF3n del referido banco de datos personales.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1686, "p", 5);
      \u0275\u0275text(1687, "Cuando para la prestaci\xF3n de los servicios resulte necesario que determinados terceros tengan acceso a datos personales, Motiva adoptar\xE1 las medidas contractuales y organizativas necesarias para asegurar que dicho tratamiento se realice conforme a la legislaci\xF3n aplicable.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1688, "h4", 4);
      \u0275\u0275text(1689, "Art\xEDculo 8.- Relaci\xF3n con otras pol\xEDticas y documentos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1690, "p", 5);
      \u0275\u0275text(1691, "La presente Pol\xEDtica complementa los T\xE9rminos y Condiciones de Uso de BonoPay y cualquier otro aviso o pol\xEDtica espec\xEDfica de privacidad que Motiva ponga a disposici\xF3n de los Beneficiarios para determinados servicios o funcionalidades.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1692, "p", 5);
      \u0275\u0275text(1693, "En caso de existir disposiciones especiales aplicables a un determinado tratamiento de datos personales, estas prevalecer\xE1n respecto de la presente Pol\xEDtica \xFAnicamente en aquello que resulte espec\xEDfico.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1694, "h4", 4);
      \u0275\u0275text(1695, "Art\xEDculo 9.- Actualizaciones de la Pol\xEDtica");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1696, "p", 5);
      \u0275\u0275text(1697, "Motiva podr\xE1 modificar o actualizar la presente Pol\xEDtica cuando ello resulte necesario para adecuarse a cambios normativos, tecnol\xF3gicos, operativos o de negocio, as\xED como para incorporar nuevas funcionalidades o servicios de la Plataforma BonoPay.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1698, "p", 5);
      \u0275\u0275text(1699, "Cuando las modificaciones tengan un impacto relevante sobre el tratamiento de los datos personales o sobre los derechos de los titulares, Motiva las comunicar\xE1 mediante los canales que considere razonablemente adecuados y, cuando la legislaci\xF3n lo requiera, solicitar\xE1 nuevamente el consentimiento correspondiente.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1700, "h3", 3);
      \u0275\u0275text(1701, "CAP\xCDTULO II \u2014 DEFINICIONES");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1702, "h4", 4);
      \u0275\u0275text(1703, "Art\xEDculo 10.- Definiciones");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1704, "p", 5);
      \u0275\u0275text(1705, "Para efectos de la presente Pol\xEDtica, los t\xE9rminos que se indican a continuaci\xF3n tendr\xE1n el significado que se les atribuye en el presente art\xEDculo, sin perjuicio de las definiciones contenidas en la Ley N\xB0 29733, su Reglamento y dem\xE1s normativa aplicable.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1706, "p", 5);
      \u0275\u0275text(1707, "Beneficiario");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1708, "p", 5);
      \u0275\u0275text(1709, "Persona natural que utiliza la plataforma BonoPay para registrarse, acceder o recibir los incentivos, beneficios, premios, bonificaciones, reembolsos u otros conceptos administrados a trav\xE9s de la Plataforma.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1710, "p", 5);
      \u0275\u0275text(1711, "BonoPay");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1712, "p", 5);
      \u0275\u0275text(1713, "Plataforma tecnol\xF3gica desarrollada y operada por Motiva Soluciones S.A.C., mediante la cual se gestionan programas de incentivos, beneficios, recompensas, promociones, reembolsos y otros servicios ofrecidos a los Beneficiarios.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1714, "p", 5);
      \u0275\u0275text(1715, "Cliente");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1716, "p", 5);
      \u0275\u0275text(1717, "Persona jur\xEDdica que contrata los servicios de Motiva para implementar programas de incentivos o beneficios utilizando la plataforma BonoPay.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1718, "p", 5);
      \u0275\u0275text(1719, "La contrataci\xF3n de dichos servicios no implica que el Cliente sea responsable del tratamiento de los datos personales regulados por la presente Pol\xEDtica, salvo que expresamente se establezca un tratamiento independiente sujeto a una pol\xEDtica distinta.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1720, "p", 5);
      \u0275\u0275text(1721, "Datos Personales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1722, "p", 5);
      \u0275\u0275text(1723, "Toda informaci\xF3n sobre una persona natural que la identifica o la hace identificable mediante medios que puedan ser razonablemente utilizados, conforme a la Ley N\xB0 29733.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1724, "p", 5);
      \u0275\u0275text(1725, "Datos Sensibles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1726, "p", 5);
      \u0275\u0275text(1727, "Datos personales constituidos por informaci\xF3n biom\xE9trica que permita identificar al titular, as\xED como aquellos referidos al origen racial o \xE9tnico, ingresos econ\xF3micos, opiniones o convicciones pol\xEDticas, religiosas, filos\xF3ficas o morales, afiliaci\xF3n sindical e informaci\xF3n relacionada con la salud o la vida sexual, conforme a la legislaci\xF3n vigente.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1728, "p", 5);
      \u0275\u0275text(1729, "Plataforma");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1730, "p", 5);
      \u0275\u0275text(1731, "La plataforma tecnol\xF3gica BonoPay, incluyendo el sitio web, la aplicaci\xF3n m\xF3vil, los servicios digitales y dem\xE1s componentes tecnol\xF3gicos administrados por Motiva.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1732, "p", 5);
      \u0275\u0275text(1733, "Responsable del Tratamiento");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1734, "p", 5);
      \u0275\u0275text(1735, "Motiva Soluciones S.A.C., quien determina las finalidades y los medios esenciales del tratamiento de los datos personales regulados por la presente Pol\xEDtica.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1736, "p", 5);
      \u0275\u0275text(1737, "Tratamiento");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1738, "p", 5);
      \u0275\u0275text(1739, "Cualquier operaci\xF3n o procedimiento t\xE9cnico, automatizado o no, que permita recopilar, registrar, organizar, almacenar, conservar, modificar, consultar, utilizar, bloquear, suprimir, transferir o realizar cualquier otra forma de procesamiento de datos personales.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1740, "p", 5);
      \u0275\u0275text(1741, "Banco de Datos Personales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1742, "p", 5);
      \u0275\u0275text(1743, "Conjunto organizado de datos personales administrado por Motiva conforme a la Ley N\xB0 29733 y su Reglamento.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1744, "p", 5);
      \u0275\u0275text(1745, "Titular de los Datos Personales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1746, "p", 5);
      \u0275\u0275text(1747, "Persona natural a quien corresponden los datos personales objeto de tratamiento.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1748, "p", 5);
      \u0275\u0275text(1749, "Consentimiento");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1750, "p", 5);
      \u0275\u0275text(1751, "Manifestaci\xF3n de voluntad libre, previa, expresa, informada e inequ\xEDvoca mediante la cual el titular autoriza el tratamiento de sus datos personales, cuando dicho consentimiento resulte exigible conforme a la legislaci\xF3n aplicable.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1752, "p", 5);
      \u0275\u0275text(1753, "Autoridad Nacional");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1754, "p", 5);
      \u0275\u0275text(1755, "La Autoridad Nacional de Protecci\xF3n de Datos Personales del Ministerio de Justicia y Derechos Humanos o la entidad que la sustituya.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1756, "p", 5);
      \u0275\u0275text(1757, "Ley");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1758, "p", 5);
      \u0275\u0275text(1759, "La Ley N\xB0 29733, Ley de Protecci\xF3n de Datos Personales, su Reglamento y dem\xE1s disposiciones complementarias.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1760, "p", 5);
      \u0275\u0275text(1761, "Reglamento");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1762, "p", 5);
      \u0275\u0275text(1763, "El Reglamento de la Ley N\xB0 29733, aprobado mediante Decreto Supremo N\xB0 003-2013-JUS, as\xED como sus modificatorias.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1764, "p", 5);
      \u0275\u0275text(1765, "Servicios");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1766, "p", 5);
      \u0275\u0275text(1767, "Los servicios tecnol\xF3gicos prestados por Motiva mediante la plataforma BonoPay.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1768, "h3", 3);
      \u0275\u0275text(1769, "CAP\xCDTULO III \u2014 DATOS PERSONALES OBJETO DE TRATAMIENTO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1770, "h4", 4);
      \u0275\u0275text(1771, "Art\xEDculo 11.- Datos personales que recopilamos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1772, "p", 5);
      \u0275\u0275text(1773, "Motiva podr\xE1 recopilar y tratar los datos personales que resulten necesarios para la adecuada prestaci\xF3n de los servicios ofrecidos mediante la plataforma BonoPay, as\xED como para el cumplimiento de obligaciones legales y contractuales.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1774, "p", 5);
      \u0275\u0275text(1775, "Los datos personales tratados depender\xE1n de la interacci\xF3n del Beneficiario con la Plataforma y de los servicios utilizados en cada caso.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1776, "h4", 4);
      \u0275\u0275text(1777, "Art\xEDculo 12.- Categor\xEDas de datos personales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1778, "p", 5);
      \u0275\u0275text(1779, "Con car\xE1cter enunciativo mas no limitativo, Motiva podr\xE1 tratar las siguientes categor\xEDas de datos personales:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1780, "p", 5);
      \u0275\u0275text(1781, "a) Datos de identificaci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1782, "ul", 6)(1783, "li");
      \u0275\u0275text(1784, "Nombres y apellidos.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1785, "li");
      \u0275\u0275text(1786, "Documento Nacional de Identidad o documento equivalente.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1787, "li");
      \u0275\u0275text(1788, "Fecha de nacimiento.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1789, "li");
      \u0275\u0275text(1790, "Nacionalidad.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1791, "li");
      \u0275\u0275text(1792, "Fotograf\xEDa, cuando resulte necesaria para procesos de validaci\xF3n de identidad.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1793, "p", 5);
      \u0275\u0275text(1794, "b) Datos de contacto");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1795, "ul", 6)(1796, "li");
      \u0275\u0275text(1797, "Direcci\xF3n de correo electr\xF3nico.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1798, "li");
      \u0275\u0275text(1799, "N\xFAmero de tel\xE9fono m\xF3vil.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1800, "li");
      \u0275\u0275text(1801, "Domicilio, cuando corresponda.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1802, "p", 5);
      \u0275\u0275text(1803, "c) Datos de acceso y autenticaci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1804, "ul", 6)(1805, "li");
      \u0275\u0275text(1806, "Usuario.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1807, "li");
      \u0275\u0275text(1808, "Contrase\xF1a cifrada.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1809, "li");
      \u0275\u0275text(1810, "C\xF3digo OTP.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1811, "li");
      \u0275\u0275text(1812, "Historial de autenticaciones.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1813, "li");
      \u0275\u0275text(1814, "Fecha y hora de acceso.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1815, "li");
      \u0275\u0275text(1816, "Direcci\xF3n IP.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1817, "li");
      \u0275\u0275text(1818, "Identificadores del dispositivo.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1819, "p", 5);
      \u0275\u0275text(1820, "d) Datos relacionados con la utilizaci\xF3n de BonoPay");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1821, "ul", 6)(1822, "li");
      \u0275\u0275text(1823, "Registro de operaciones realizadas.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1824, "li");
      \u0275\u0275text(1825, "Beneficios asignados.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1826, "li");
      \u0275\u0275text(1827, "Incentivos recibidos.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1828, "li");
      \u0275\u0275text(1829, "Estado de las transacciones.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1830, "li");
      \u0275\u0275text(1831, "Historial de utilizaci\xF3n de la Plataforma.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1832, "p", 5);
      \u0275\u0275text(1833, "e) Datos t\xE9cnicos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1834, "ul", 6)(1835, "li");
      \u0275\u0275text(1836, "Tipo de navegador.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1837, "li");
      \u0275\u0275text(1838, "Sistema operativo.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1839, "li");
      \u0275\u0275text(1840, "Cookies y tecnolog\xEDas similares.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1841, "li");
      \u0275\u0275text(1842, "Identificadores t\xE9cnicos del dispositivo.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1843, "li");
      \u0275\u0275text(1844, "Registros de actividad (logs).");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1845, "h4", 4);
      \u0275\u0275text(1846, "Art\xEDculo 13.- Datos proporcionados por el Beneficiario");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1847, "p", 5);
      \u0275\u0275text(1848, "Motiva podr\xE1 tratar los datos personales que el propio Beneficiario proporcione durante:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1849, "ul", 6)(1850, "li");
      \u0275\u0275text(1851, "el proceso de registro;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1852, "li");
      \u0275\u0275text(1853, "la actualizaci\xF3n de su perfil;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1854, "li");
      \u0275\u0275text(1855, "la utilizaci\xF3n de los servicios ofrecidos mediante BonoPay;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1856, "li");
      \u0275\u0275text(1857, "la atenci\xF3n de consultas;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1858, "li");
      \u0275\u0275text(1859, "el ejercicio de sus derechos;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1860, "li");
      \u0275\u0275text(1861, "cualquier otra interacci\xF3n realizada a trav\xE9s de la Plataforma.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1862, "p", 5);
      \u0275\u0275text(1863, "El Beneficiario declara que los datos personales proporcionados son veraces, completos y actualizados, comprometi\xE9ndose a comunicar oportunamente cualquier modificaci\xF3n que resulte relevante.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1864, "h4", 4);
      \u0275\u0275text(1865, "Art\xEDculo 14.- Datos obtenidos autom\xE1ticamente");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1866, "p", 5);
      \u0275\u0275text(1867, "Durante la utilizaci\xF3n de BonoPay, Motiva podr\xE1 recopilar autom\xE1ticamente determinada informaci\xF3n t\xE9cnica necesaria para garantizar la seguridad, disponibilidad y correcto funcionamiento de la Plataforma.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1868, "p", 5);
      \u0275\u0275text(1869, "Esta informaci\xF3n podr\xE1 incluir, entre otros:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1870, "ul", 6)(1871, "li");
      \u0275\u0275text(1872, "direcci\xF3n IP;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1873, "li");
      \u0275\u0275text(1874, "fecha y hora de acceso;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1875, "li");
      \u0275\u0275text(1876, "identificadores del dispositivo;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1877, "li");
      \u0275\u0275text(1878, "registros de eventos;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1879, "li");
      \u0275\u0275text(1880, "informaci\xF3n del navegador;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1881, "li");
      \u0275\u0275text(1882, "sistema operativo;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1883, "li");
      \u0275\u0275text(1884, "ubicaci\xF3n aproximada obtenida a partir de la direcci\xF3n IP, cuando resulte t\xE9cnicamente posible.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1885, "h4", 4);
      \u0275\u0275text(1886, "Art\xEDculo 15.- Datos proporcionados por terceros");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1887, "p", 5);
      \u0275\u0275text(1888, "Motiva podr\xE1 recibir datos personales provenientes de terceros cuando ello resulte necesario para la prestaci\xF3n de los servicios ofrecidos mediante BonoPay.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1889, "p", 5);
      \u0275\u0275text(1890, "Entre dichos terceros podr\xE1n encontrarse:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1891, "ul", 6)(1892, "li");
      \u0275\u0275text(1893, "empresas clientes que implementen programas de incentivos;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1894, "li");
      \u0275\u0275text(1895, "proveedores tecnol\xF3gicos;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1896, "li");
      \u0275\u0275text(1897, "procesadores de pago;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1898, "li");
      \u0275\u0275text(1899, "proveedores de servicios de verificaci\xF3n de identidad;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1900, "li");
      \u0275\u0275text(1901, "otras fuentes cuya utilizaci\xF3n se encuentre permitida por la legislaci\xF3n aplicable.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1902, "p", 5);
      \u0275\u0275text(1903, "En todos los casos, Motiva adoptar\xE1 medidas razonables para verificar que la obtenci\xF3n y comunicaci\xF3n de dichos datos personales se haya realizado conforme a la legislaci\xF3n vigente.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1904, "p", 5);
      \u0275\u0275text(1905, "Cuando los datos personales sean proporcionados por empresas clientes, Motiva tratar\xE1 dicha informaci\xF3n sobre la base de la declaraci\xF3n y garant\xEDa de dichas empresas de que cuentan con la base legal correspondiente para su obtenci\xF3n, tratamiento y comunicaci\xF3n a Motiva. Sin perjuicio de ello, Motiva podr\xE1 adoptar medidas razonables destinadas a requerir o confirmar el cumplimiento de las obligaciones aplicables en materia de protecci\xF3n de datos personales cuando las circunstancias as\xED lo justifiquen");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1906, "h4", 4);
      \u0275\u0275text(1907, "Art\xEDculo 16.- Exactitud de los datos personales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1908, "p", 5);
      \u0275\u0275text(1909, "El Beneficiario es responsable de proporcionar datos personales veraces, completos y actualizados.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1910, "p", 5);
      \u0275\u0275text(1911, "Motiva podr\xE1 solicitar la actualizaci\xF3n o rectificaci\xF3n de la informaci\xF3n cuando detecte inconsistencias que puedan afectar la correcta prestaci\xF3n de los servicios o el cumplimiento de obligaciones legales.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1912, "h4", 4);
      \u0275\u0275text(1913, "Art\xEDculo 17.- Datos personales de menores de edad");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1914, "p", 5);
      \u0275\u0275text(1915, "La plataforma BonoPay no est\xE1 dirigida a menores de edad, salvo que un programa espec\xEDfico administrado mediante la Plataforma permita su participaci\xF3n conforme a la legislaci\xF3n aplicable.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1916, "p", 5);
      \u0275\u0275text(1917, "En aquellos casos en que el tratamiento de datos personales de menores resulte legalmente procedente, Motiva adoptar\xE1 las medidas razonables para garantizar el cumplimiento de los requisitos previstos por la normativa vigente.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1918, "h4", 4);
      \u0275\u0275text(1919, "Art\xEDculo 18.- Datos sensibles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1920, "p", 5);
      \u0275\u0275text(1921, "Como regla general, Motiva no solicita ni trata datos personales sensibles.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1922, "p", 5);
      \u0275\u0275text(1923, "Excepcionalmente, cuando la prestaci\xF3n de un determinado servicio requiera el tratamiento de datos sensibles, este se realizar\xE1 \xFAnicamente cuando exista una base legal que lo habilite y se adopten las medidas de seguridad reforzadas previstas por la legislaci\xF3n aplicable.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1924, "h4", 4);
      \u0275\u0275text(1925, "Art\xEDculo 19.- Calidad y minimizaci\xF3n de datos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1926, "p", 5);
      \u0275\u0275text(1927, "Motiva procurar\xE1 que los datos personales objeto de tratamiento sean adecuados, pertinentes y limitados a lo estrictamente necesario para el cumplimiento de las finalidades descritas en la presente Pol\xEDtica.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1928, "p", 5);
      \u0275\u0275text(1929, "Cuando determinados datos personales dejen de resultar necesarios para dichas finalidades, ser\xE1n eliminados, anonimizados o conservados \xFAnicamente cuando exista una obligaci\xF3n legal que justifique su mantenimiento.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1930, "h3", 3);
      \u0275\u0275text(1931, "CAP\xCDTULO IV \u2014 FINALIDADES DEL TRATAMIENTO DE DATOS PERSONALES");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1932, "h4", 4);
      \u0275\u0275text(1933, "Art\xEDculo 20.- Finalidad general del tratamiento");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1934, "p", 5);
      \u0275\u0275text(1935, "Motiva trata los datos personales de los Beneficiarios con la finalidad de operar, administrar y mejorar la plataforma BonoPay, permitiendo la gesti\xF3n de programas de incentivos, beneficios, recompensas, promociones, reembolsos y dem\xE1s servicios ofrecidos mediante la Plataforma, as\xED como para cumplir obligaciones legales y contractuales.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1936, "p", 5);
      \u0275\u0275text(1937, "El tratamiento de los datos personales se realizar\xE1 \xFAnicamente respecto de finalidades determinadas, expl\xEDcitas y leg\xEDtimas, conforme a la presente Pol\xEDtica y a la legislaci\xF3n aplicable.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1938, "h4", 4);
      \u0275\u0275text(1939, "Art\xEDculo 21.- Finalidades relacionadas con la prestaci\xF3n del servicio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1940, "p", 5);
      \u0275\u0275text(1941, "Motiva podr\xE1 tratar los datos personales para las siguientes finalidades directamente vinculadas con la prestaci\xF3n de los servicios ofrecidos mediante BonoPay:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1942, "p", 5);
      \u0275\u0275text(1943, "a) Registrar al Beneficiario en la Plataforma.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1944, "p", 5);
      \u0275\u0275text(1945, "b) Crear y administrar la cuenta del Beneficiario.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1946, "p", 5);
      \u0275\u0275text(1947, "c) Validar la identidad del Beneficiario.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1948, "p", 5);
      \u0275\u0275text(1949, "d) Permitir el acceso seguro a la Plataforma.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1950, "p", 5);
      \u0275\u0275text(1951, "e) Gestionar la asignaci\xF3n, administraci\xF3n y entrega de incentivos, beneficios o recompensas.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1952, "p", 5);
      \u0275\u0275text(1953, "f) Ejecutar las transacciones solicitadas por el Beneficiario.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1954, "p", 5);
      \u0275\u0275text(1955, "g) Administrar el perfil del Beneficiario.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1956, "p", 5);
      \u0275\u0275text(1957, "h) Brindar soporte t\xE9cnico y atenci\xF3n de consultas.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1958, "p", 5);
      \u0275\u0275text(1959, "i) Gestionar solicitudes, reclamos y requerimientos relacionados con la utilizaci\xF3n de BonoPay.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1960, "h4", 4);
      \u0275\u0275text(1961, "Art\xEDculo 22.- Finalidades relacionadas con la seguridad");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1962, "p", 5);
      \u0275\u0275text(1963, "Motiva podr\xE1 tratar datos personales con la finalidad de:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1964, "p", 5);
      \u0275\u0275text(1965, "a) Prevenir fraudes.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1966, "p", 5);
      \u0275\u0275text(1967, "b) Detectar accesos no autorizados.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1968, "p", 5);
      \u0275\u0275text(1969, "c) Validar la autenticidad de las operaciones realizadas.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1970, "p", 5);
      \u0275\u0275text(1971, "d) Gestionar incidentes de seguridad.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1972, "p", 5);
      \u0275\u0275text(1973, "e) Proteger la integridad de la Plataforma.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1974, "p", 5);
      \u0275\u0275text(1975, "f) Investigar actividades potencialmente fraudulentas o contrarias a los T\xE9rminos y Condiciones.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1976, "p", 5);
      \u0275\u0275text(1977, "g) Cumplir obligaciones relacionadas con la prevenci\xF3n de delitos inform\xE1ticos y otras obligaciones legales.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1978, "h4", 4);
      \u0275\u0275text(1979, "Art\xEDculo 23.- Finalidades operativas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1980, "p", 5);
      \u0275\u0275text(1981, "Motiva podr\xE1 utilizar los datos personales para:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1982, "p", 5);
      \u0275\u0275text(1983, "a) Mantener el correcto funcionamiento de la Plataforma.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1984, "p", 5);
      \u0275\u0275text(1985, "b) Corregir errores.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1986, "p", 5);
      \u0275\u0275text(1987, "c) Implementar mejoras tecnol\xF3gicas.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1988, "p", 5);
      \u0275\u0275text(1989, "d) Desarrollar nuevas funcionalidades.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1990, "p", 5);
      \u0275\u0275text(1991, "e) Realizar pruebas t\xE9cnicas.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1992, "p", 5);
      \u0275\u0275text(1993, "f) Administrar la infraestructura tecnol\xF3gica.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1994, "p", 5);
      \u0275\u0275text(1995, "g) Gestionar respaldos y recuperaci\xF3n de informaci\xF3n.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1996, "h4", 4);
      \u0275\u0275text(1997, "Art\xEDculo 24.- Finalidades relacionadas con el cumplimiento normativo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1998, "p", 5);
      \u0275\u0275text(1999, "Motiva podr\xE1 tratar los datos personales cuando ello resulte necesario para:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2e3, "p", 5);
      \u0275\u0275text(2001, "a) Cumplir obligaciones legales o regulatorias.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2002, "p", 5);
      \u0275\u0275text(2003, "b) Atender requerimientos de autoridades competentes.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2004, "p", 5);
      \u0275\u0275text(2005, "c) Ejercer o defender derechos en procedimientos administrativos, judiciales o arbitrales.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2006, "p", 5);
      \u0275\u0275text(2007, "d) Cumplir obligaciones tributarias, contables y societarias.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2008, "p", 5);
      \u0275\u0275text(2009, "e) Gestionar auditor\xEDas internas o externas.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2010, "h4", 4);
      \u0275\u0275text(2011, "Art\xEDculo 25.- Comunicaciones relacionadas con el servicio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2012, "p", 5);
      \u0275\u0275text(2013, "Motiva podr\xE1 utilizar los datos de contacto del Beneficiario para remitir comunicaciones necesarias para la adecuada prestaci\xF3n de los servicios, incluyendo:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2014, "p", 5);
      \u0275\u0275text(2015, "a) Confirmaciones de registro.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2016, "p", 5);
      \u0275\u0275text(2017, "b) Autenticaci\xF3n mediante c\xF3digos OTP.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2018, "p", 5);
      \u0275\u0275text(2019, "c) Notificaciones de seguridad.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2020, "p", 5);
      \u0275\u0275text(2021, "d) Confirmaciones de transacciones.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2022, "p", 5);
      \u0275\u0275text(2023, "e) Avisos sobre incidencias t\xE9cnicas.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2024, "p", 5);
      \u0275\u0275text(2025, "f) Comunicaciones relacionadas con el ejercicio de derechos.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2026, "p", 5);
      \u0275\u0275text(2027, "Estas comunicaciones tienen car\xE1cter operativo y forman parte de la prestaci\xF3n de los servicios ofrecidos mediante BonoPay.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2028, "h4", 4);
      \u0275\u0275text(2029, "Art\xEDculo 26.- Comunicaciones comerciales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2030, "p", 5);
      \u0275\u0275text(2031, "Motiva \xFAnicamente remitir\xE1 comunicaciones comerciales, promociones o informaci\xF3n publicitaria cuando cuente con la base legal correspondiente, de conformidad con la legislaci\xF3n aplicable.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2032, "p", 5);
      \u0275\u0275text(2033, "El Beneficiario podr\xE1 revocar dicha autorizaci\xF3n en cualquier momento mediante los mecanismos habilitados por Motiva, sin que ello afecte la prestaci\xF3n de los servicios contratados.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2034, "h4", 4);
      \u0275\u0275text(2035, "Art\xEDculo 27.- Mejora de la Plataforma");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2036, "p", 5);
      \u0275\u0275text(2037, "Motiva podr\xE1 utilizar informaci\xF3n obtenida mediante la utilizaci\xF3n de BonoPay para:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2038, "p", 5);
      \u0275\u0275text(2039, "a) Analizar tendencias de uso.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2040, "p", 5);
      \u0275\u0275text(2041, "b) Mejorar la experiencia del usuario.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2042, "p", 5);
      \u0275\u0275text(2043, "c) Optimizar el rendimiento de la Plataforma.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2044, "p", 5);
      \u0275\u0275text(2045, "d) Desarrollar nuevos servicios.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2046, "p", 5);
      \u0275\u0275text(2047, "Siempre que sea posible, dichas actividades se realizar\xE1n utilizando informaci\xF3n anonimizada o agregada.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2048, "h4", 4);
      \u0275\u0275text(2049, "Art\xEDculo 28.- Tratamientos compatibles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2050, "p", 5);
      \u0275\u0275text(2051, "Cuando resulte necesario utilizar los datos personales para una finalidad compatible con aquella que motiv\xF3 originalmente su recopilaci\xF3n, Motiva verificar\xE1 previamente la compatibilidad entre ambas finalidades y adoptar\xE1 las medidas necesarias para garantizar el respeto de los derechos de los titulares.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2052, "p", 5);
      \u0275\u0275text(2053, "Cuando la legislaci\xF3n lo exija, Motiva solicitar\xE1 el consentimiento correspondiente antes de realizar un tratamiento para una finalidad distinta.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2054, "h4", 4);
      \u0275\u0275text(2055, "Art\xEDculo 29.- Limitaci\xF3n de la finalidad");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2056, "p", 5);
      \u0275\u0275text(2057, "Motiva no utilizar\xE1 los datos personales para finalidades incompatibles con aquellas informadas en la presente Pol\xEDtica, salvo que exista una obligaci\xF3n legal que lo permita o una nueva base legal que habilite dicho tratamiento.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2058, "h4", 4);
      \u0275\u0275text(2059, "Art\xEDculo 30.- Actualizaci\xF3n de las finalidades");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2060, "p", 5);
      \u0275\u0275text(2061, "En caso de incorporarse nuevas finalidades de tratamiento que impliquen modificaciones sustanciales respecto de las informadas en la presente Pol\xEDtica, Motiva actualizar\xE1 el presente documento y, cuando corresponda, informar\xE1 a los titulares de los datos personales y obtendr\xE1 las autorizaciones exigidas por la legislaci\xF3n aplicable.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2062, "h3", 3);
      \u0275\u0275text(2063, "CAP\xCDTULO V \u2014 BASES LEGALES DEL TRATAMIENTO DE DATOS PERSONALES");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2064, "h4", 4);
      \u0275\u0275text(2065, "Art\xEDculo 31.- Bases legales del tratamiento");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2066, "p", 5);
      \u0275\u0275text(2067, "Motiva realizar\xE1 el tratamiento de datos personales \xFAnicamente cuando exista una base legal que lo legitime, de conformidad con la Ley N\xB0 29733, su Reglamento y dem\xE1s normativa aplicable.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2068, "p", 5);
      \u0275\u0275text(2069, "Dependiendo de la naturaleza de cada tratamiento, Motiva podr\xE1 sustentar el tratamiento de datos personales en una o m\xE1s de las bases legales previstas en la legislaci\xF3n vigente.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2070, "h4", 4);
      \u0275\u0275text(2071, "Art\xEDculo 32.- Consentimiento del titular");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2072, "p", 5);
      \u0275\u0275text(2073, "Cuando el tratamiento de datos personales requiera el consentimiento del titular, Motiva lo obtendr\xE1 de manera libre, previa, expresa, informada e inequ\xEDvoca.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2074, "p", 5);
      \u0275\u0275text(2075, "El consentimiento podr\xE1 ser otorgado mediante mecanismos f\xEDsicos, electr\xF3nicos o cualquier otro medio que permita acreditar razonablemente la voluntad del titular, conforme a la legislaci\xF3n aplicable.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2076, "p", 5);
      \u0275\u0275text(2077, "El titular podr\xE1 revocar su consentimiento cuando la legislaci\xF3n lo permita, sin efectos retroactivos sobre los tratamientos realizados con anterioridad a dicha revocaci\xF3n.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2078, "h4", 4);
      \u0275\u0275text(2079, "Art\xEDculo 33.- Ejecuci\xF3n de la relaci\xF3n con el Beneficiario");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2080, "p", 5);
      \u0275\u0275text(2081, "Motiva podr\xE1 tratar los datos personales cuando ello resulte necesario para prestar los servicios ofrecidos mediante la plataforma BonoPay, incluyendo, entre otros:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2082, "ul", 6)(2083, "li");
      \u0275\u0275text(2084, "el registro del Beneficiario;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2085, "li");
      \u0275\u0275text(2086, "la autenticaci\xF3n de usuarios;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2087, "li");
      \u0275\u0275text(2088, "la administraci\xF3n de cuentas;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2089, "li");
      \u0275\u0275text(2090, "la asignaci\xF3n y entrega de incentivos;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2091, "li");
      \u0275\u0275text(2092, "la ejecuci\xF3n de operaciones solicitadas por el Beneficiario;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2093, "li");
      \u0275\u0275text(2094, "la atenci\xF3n de consultas, solicitudes y reclamos.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2095, "h4", 4);
      \u0275\u0275text(2096, "Art\xEDculo 34.- Cumplimiento de obligaciones legales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2097, "p", 5);
      \u0275\u0275text(2098, "Motiva podr\xE1 tratar datos personales cuando ello resulte necesario para cumplir obligaciones establecidas por la legislaci\xF3n peruana, incluyendo aquellas relacionadas con:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2099, "ul", 6)(2100, "li");
      \u0275\u0275text(2101, "requerimientos formulados por autoridades competentes;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2102, "li");
      \u0275\u0275text(2103, "obligaciones tributarias;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2104, "li");
      \u0275\u0275text(2105, "obligaciones contables;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2106, "li");
      \u0275\u0275text(2107, "conservaci\xF3n de informaci\xF3n;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2108, "li");
      \u0275\u0275text(2109, "prevenci\xF3n del fraude;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2110, "li");
      \u0275\u0275text(2111, "seguridad de la informaci\xF3n;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2112, "li");
      \u0275\u0275text(2113, "investigaciones administrativas o judiciales.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2114, "p", 5);
      \u0275\u0275text(2115, "El Cliente es responsable del origen, licitud y comunicaci\xF3n a Motiva de los datos personales que proporcione, y deber\xE1 contar con la base legal correspondiente para su tratamiento y comunicaci\xF3n, conforme a la legislaci\xF3n aplicable.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2116, "h4", 4);
      \u0275\u0275text(2117, "Art\xEDculo 35.- Ejercicio y defensa de derechos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2118, "p", 5);
      \u0275\u0275text(2119, "Motiva podr\xE1 tratar datos personales cuando ello resulte necesario para ejercer, proteger o defender sus derechos e intereses leg\xEDtimos en procedimientos administrativos, judiciales, arbitrales o de cualquier otra naturaleza permitida por la legislaci\xF3n.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2120, "h4", 4);
      \u0275\u0275text(2121, "Art\xEDculo 36.- Prevenci\xF3n del fraude y seguridad");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2122, "p", 5);
      \u0275\u0275text(2123, "Con la finalidad de garantizar la seguridad de la Plataforma y proteger tanto a los Beneficiarios como a Motiva frente a actividades fraudulentas o il\xEDcitas, Motiva podr\xE1 tratar datos personales relacionados con:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2124, "ul", 6)(2125, "li");
      \u0275\u0275text(2126, "autenticaci\xF3n;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2127, "li");
      \u0275\u0275text(2128, "validaci\xF3n de identidad;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2129, "li");
      \u0275\u0275text(2130, "monitoreo de accesos;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2131, "li");
      \u0275\u0275text(2132, "registros de actividad;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2133, "li");
      \u0275\u0275text(2134, "an\xE1lisis de riesgos;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2135, "li");
      \u0275\u0275text(2136, "prevenci\xF3n de fraudes;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2137, "li");
      \u0275\u0275text(2138, "detecci\xF3n de operaciones inusuales.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2139, "p", 5);
      \u0275\u0275text(2140, "Estos tratamientos se realizar\xE1n observando los principios de necesidad, proporcionalidad y seguridad previstos por la legislaci\xF3n aplicable.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2141, "h4", 4);
      \u0275\u0275text(2142, "Art\xEDculo 37.- Tratamiento de datos sensibles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2143, "p", 5);
      \u0275\u0275text(2144, "Como regla general, Motiva no solicita ni trata datos personales sensibles. Cuando excepcionalmente resulte necesario tratar esta categor\xEDa de datos, dicho tratamiento se realizar\xE1 \xFAnicamente cuando exista una base legal suficiente y se implementen las medidas de seguridad reforzadas exigidas por la legislaci\xF3n vigente.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2145, "h4", 4);
      \u0275\u0275text(2146, "Art\xEDculo 38.- Tratamientos adicionales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2147, "p", 5);
      \u0275\u0275text(2148, "Si en el futuro Motiva incorpora nuevos servicios o funcionalidades que impliquen tratamientos distintos a los descritos en la presente Pol\xEDtica, verificar\xE1 previamente la existencia de una base legal que habilite dicho tratamiento y actualizar\xE1 la presente Pol\xEDtica cuando corresponda.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2149, "h4", 4);
      \u0275\u0275text(2150, "Art\xEDculo 39.- Revocatoria del consentimiento");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2151, "p", 5);
      \u0275\u0275text(2152, "Cuando el tratamiento se base en el consentimiento del titular, \xE9ste podr\xE1 revocarlo en cualquier momento mediante los canales habilitados por Motiva.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2153, "p", 5);
      \u0275\u0275text(2154, "La revocatoria no afectar\xE1 la licitud de los tratamientos realizados con anterioridad ni impedir\xE1 aquellos tratamientos que deban continuar realiz\xE1ndose en virtud de otra base legal.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2155, "h4", 4);
      \u0275\u0275text(2156, "Art\xEDculo 40.- Tratamientos autorizados por ley");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2157, "p", 5);
      \u0275\u0275text(2158, "Nada de lo previsto en la presente Pol\xEDtica limitar\xE1 la facultad de Motiva para realizar tratamientos de datos personales cuando \xE9stos se encuentren expresamente autorizados o exigidos por la legislaci\xF3n aplicable o por mandato de autoridad competente.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2159, "h3", 3);
      \u0275\u0275text(2160, "CAP\xCDTULO VI \u2014 COMUNICACI\xD3N, ACCESO Y TRANSFERENCIA DE DATOS PERSONALES");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2161, "h4", 4);
      \u0275\u0275text(2162, "Art\xEDculo 41.- Regla general");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2163, "p", 5);
      \u0275\u0275text(2164, "Motiva tratar\xE1 los datos personales de los Beneficiarios de manera confidencial y \xFAnicamente permitir\xE1 su acceso, comunicaci\xF3n o transferencia en los casos previstos en la presente Pol\xEDtica, cuando exista una base legal que lo habilite o cuando resulte necesario para la adecuada prestaci\xF3n de los servicios ofrecidos mediante la plataforma BonoPay.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2165, "p", 5);
      \u0275\u0275text(2166, "En ning\xFAn caso Motiva comercializar\xE1 los datos personales de los Beneficiarios ni los utilizar\xE1 para finalidades incompatibles con las informadas en la presente Pol\xEDtica.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2167, "h4", 4);
      \u0275\u0275text(2168, "Art\xEDculo 42.- Acceso interno");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2169, "p", 5);
      \u0275\u0275text(2170, "Los datos personales podr\xE1n ser accesibles \xFAnicamente por el personal de Motiva que requiera conocer dicha informaci\xF3n para el cumplimiento de sus funciones.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2171, "p", 5);
      \u0275\u0275text(2172, "Motiva implementar\xE1 controles internos destinados a garantizar que el acceso a los datos personales se limite al personal autorizado, de acuerdo con el principio de necesidad de acceso.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2173, "h4", 4);
      \u0275\u0275text(2174, "Art\xEDculo 43.- Proveedores de servicios");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2175, "p", 5);
      \u0275\u0275text(2176, "Motiva podr\xE1 permitir el acceso a datos personales a proveedores que presten servicios necesarios para la operaci\xF3n de BonoPay, incluyendo, entre otros:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2177, "ul", 6)(2178, "li");
      \u0275\u0275text(2179, "proveedores de infraestructura tecnol\xF3gica;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2180, "li");
      \u0275\u0275text(2181, "servicios de alojamiento en la nube;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2182, "li");
      \u0275\u0275text(2183, "proveedores de autenticaci\xF3n;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2184, "li");
      \u0275\u0275text(2185, "procesadores de pago;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2186, "li");
      \u0275\u0275text(2187, "proveedores de mensajer\xEDa electr\xF3nica o SMS;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2188, "li");
      \u0275\u0275text(2189, "servicios de soporte tecnol\xF3gico;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2190, "li");
      \u0275\u0275text(2191, "proveedores de ciberseguridad;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2192, "li");
      \u0275\u0275text(2193, "proveedores de an\xE1lisis de fraude;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2194, "li");
      \u0275\u0275text(2195, "auditores y consultores especializados.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2196, "p", 5);
      \u0275\u0275text(2197, "En todos los casos, Motiva procurar\xE1 que dichos proveedores asuman obligaciones contractuales de confidencialidad, seguridad de la informaci\xF3n y protecci\xF3n de datos personales acordes con la legislaci\xF3n aplicable.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2198, "h4", 4);
      \u0275\u0275text(2199, "Art\xEDculo 44.- Empresas clientes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2200, "p", 5);
      \u0275\u0275text(2201, "Cuando resulte necesario para la ejecuci\xF3n de los programas de incentivos o beneficios administrados mediante BonoPay, Motiva podr\xE1 comunicar a las empresas clientes la informaci\xF3n estrictamente necesaria para:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2202, "ul", 6)(2203, "li");
      \u0275\u0275text(2204, "validar la condici\xF3n de Beneficiario;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2205, "li");
      \u0275\u0275text(2206, "administrar el programa correspondiente;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2207, "li");
      \u0275\u0275text(2208, "verificar la entrega de incentivos;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2209, "li");
      \u0275\u0275text(2210, "atender incidencias relacionadas con el programa;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2211, "li");
      \u0275\u0275text(2212, "cumplir obligaciones contractuales asumidas con dichas empresas.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2213, "p", 5);
      \u0275\u0275text(2214, "En todos los casos, la comunicaci\xF3n de datos personales se limitar\xE1 a la informaci\xF3n necesaria para el cumplimiento de las finalidades descritas en la presente Pol\xEDtica.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2215, "h4", 4);
      \u0275\u0275text(2216, "Art\xEDculo 45.- Autoridades competentes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2217, "p", 5);
      \u0275\u0275text(2218, "Motiva podr\xE1 comunicar datos personales cuando ello sea requerido por autoridad administrativa, judicial, arbitral o fiscal competente, siempre que el requerimiento se formule conforme a la legislaci\xF3n aplicable.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2219, "p", 5);
      \u0275\u0275text(2220, "Asimismo, Motiva podr\xE1 conservar o entregar informaci\xF3n cuando ello resulte necesario para:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2221, "ul", 6)(2222, "li");
      \u0275\u0275text(2223, "cumplir obligaciones legales;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2224, "li");
      \u0275\u0275text(2225, "prevenir o investigar actividades il\xEDcitas;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2226, "li");
      \u0275\u0275text(2227, "proteger derechos propios o de terceros;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2228, "li");
      \u0275\u0275text(2229, "colaborar con investigaciones oficiales.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2230, "h4", 4);
      \u0275\u0275text(2231, "Art\xEDculo 46.- Transferencias nacionales e internacionales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2232, "p", 5);
      \u0275\u0275text(2233, "Con ocasi\xF3n de la prestaci\xF3n de los servicios ofrecidos mediante BonoPay, determinados datos personales podr\xE1n ser objeto de transferencia dentro o fuera del territorio peruano cuando ello resulte necesario para la operaci\xF3n de la Plataforma.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2234, "p", 5);
      \u0275\u0275text(2235, "Cuando dichas transferencias impliquen el tratamiento de datos personales por proveedores ubicados en otras jurisdicciones, Motiva adoptar\xE1 medidas razonables para asegurar que los datos personales contin\xFAen siendo tratados con un nivel adecuado de protecci\xF3n conforme a la legislaci\xF3n aplicable.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2236, "h4", 4);
      \u0275\u0275text(2237, "Art\xEDculo 47.- Proveedores tecnol\xF3gicos internacionales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2238, "p", 5);
      \u0275\u0275text(2239, "La infraestructura tecnol\xF3gica utilizada por BonoPay podr\xE1 apoyarse en servicios proporcionados por empresas ubicadas dentro o fuera del Per\xFA.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2240, "p", 5);
      \u0275\u0275text(2241, "En tales casos, Motiva procurar\xE1 seleccionar proveedores que implementen est\xE1ndares adecuados de seguridad de la informaci\xF3n y protecci\xF3n de datos personales, as\xED como mecanismos contractuales apropiados para garantizar la confidencialidad y seguridad de la informaci\xF3n.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2242, "h4", 4);
      \u0275\u0275text(2243, "Art\xEDculo 48.- Procesadores de pago");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2244, "p", 5);
      \u0275\u0275text(2245, "Cuando el Beneficiario utilice funcionalidades que involucren operaciones de pago, los datos personales estrictamente necesarios podr\xE1n ser comunicados a los proveedores de servicios de pago con la finalidad de procesar las operaciones correspondientes.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2246, "p", 5);
      \u0275\u0275text(2247, "Motiva no almacena informaci\xF3n financiera m\xE1s all\xE1 de aquella que resulte necesaria para la administraci\xF3n de la operaci\xF3n y conforme a las medidas de seguridad implementadas por los proveedores especializados y la legislaci\xF3n aplicable.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2248, "h4", 4);
      \u0275\u0275text(2249, "Art\xEDculo 49.- Confidencialidad");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2250, "p", 5);
      \u0275\u0275text(2251, "Toda persona que tenga acceso a datos personales tratados por Motiva deber\xE1 mantener la confidencialidad de dicha informaci\xF3n, incluso despu\xE9s de finalizada la relaci\xF3n que motiv\xF3 dicho acceso, salvo que exista obligaci\xF3n legal que disponga lo contrario.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2252, "h4", 4);
      \u0275\u0275text(2253, "Art\xEDculo 50.- Limitaci\xF3n de las comunicaciones");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2254, "p", 5);
      \u0275\u0275text(2255, "Motiva \xFAnicamente comunicar\xE1 o permitir\xE1 el acceso a datos personales cuando ello resulte necesario para el cumplimiento de las finalidades previstas en la presente Pol\xEDtica, procurando que la informaci\xF3n compartida sea adecuada, pertinente y limitada a lo estrictamente necesario para cada caso.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2256, "h4", 4);
      \u0275\u0275text(2257, "Art\xEDculo 51.- Servicios de computaci\xF3n en la nube");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2258, "p", 5);
      \u0275\u0275text(2259, "Motiva podr\xE1 utilizar servicios de infraestructura, almacenamiento, procesamiento o respaldo provistos por terceros especializados en computaci\xF3n en la nube para la operaci\xF3n de BonoPay.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2260, "p", 5);
      \u0275\u0275text(2261, "La contrataci\xF3n de dichos servicios no implica una transferencia de la responsabilidad sobre el tratamiento de los datos personales, la cual continuar\xE1 siendo asumida por Motiva.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2262, "p", 5);
      \u0275\u0275text(2263, "Motiva procurar\xE1 que dichos proveedores implementen medidas de seguridad acordes con est\xE1ndares internacionalmente reconocidos y asuman obligaciones contractuales de confidencialidad y protecci\xF3n de datos personales.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2264, "h3", 3);
      \u0275\u0275text(2265, "CAP\xCDTULO VII \u2014 SEGURIDAD DE LA INFORMACI\xD3N Y PROTECCI\xD3N DE LOS DATOS PERSONALES");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2266, "h4", 4);
      \u0275\u0275text(2267, "Art\xEDculo 52.- Compromiso con la seguridad de la informaci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2268, "p", 5);
      \u0275\u0275text(2269, "Motiva reconoce que la seguridad de la informaci\xF3n constituye un elemento esencial para garantizar la protecci\xF3n de los datos personales tratados mediante la plataforma BonoPay.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2270, "p", 5);
      \u0275\u0275text(2271, "En tal sentido, implementa medidas t\xE9cnicas, organizativas y administrativas razonables destinadas a preservar la confidencialidad, integridad, disponibilidad y resiliencia de los datos personales, procurando reducir los riesgos asociados a su tratamiento.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2272, "h4", 4);
      \u0275\u0275text(2273, "Art\xEDculo 53.- Medidas de seguridad");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2274, "p", 5);
      \u0275\u0275text(2275, "Motiva implementar\xE1 medidas de seguridad apropiadas considerando, entre otros factores:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2276, "p", 5);
      \u0275\u0275text(2277, "a) La naturaleza de los datos personales tratados.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2278, "p", 5);
      \u0275\u0275text(2279, "b) Los riesgos asociados al tratamiento.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2280, "p", 5);
      \u0275\u0275text(2281, "c) El estado de la tecnolog\xEDa.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2282, "p", 5);
      \u0275\u0275text(2283, "d) Los costos de implementaci\xF3n.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2284, "p", 5);
      \u0275\u0275text(2285, "e) La probabilidad e impacto de un incidente de seguridad.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2286, "p", 5);
      \u0275\u0275text(2287, "Las medidas de seguridad ser\xE1n revisadas peri\xF3dicamente con la finalidad de mantener un nivel adecuado de protecci\xF3n frente a riesgos tecnol\xF3gicos y operativos.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2288, "h4", 4);
      \u0275\u0275text(2289, "Art\xEDculo 54.- Controles de acceso");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2290, "p", 5);
      \u0275\u0275text(2291, "Motiva adoptar\xE1 mecanismos destinados a garantizar que \xFAnicamente las personas debidamente autorizadas puedan acceder a los datos personales.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2292, "p", 5);
      \u0275\u0275text(2293, "Entre otros, podr\xE1n implementarse controles relacionados con:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2294, "ul", 6)(2295, "li");
      \u0275\u0275text(2296, "autenticaci\xF3n de usuarios;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2297, "li");
      \u0275\u0275text(2298, "perfiles de acceso;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2299, "li");
      \u0275\u0275text(2300, "segregaci\xF3n de funciones;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2301, "li");
      \u0275\u0275text(2302, "registros de acceso;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2303, "li");
      \u0275\u0275text(2304, "mecanismos de trazabilidad;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2305, "li");
      \u0275\u0275text(2306, "revisi\xF3n peri\xF3dica de privilegios.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2307, "h4", 4);
      \u0275\u0275text(2308, "Art\xEDculo 55.- Seguridad de la infraestructura tecnol\xF3gica");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2309, "p", 5);
      \u0275\u0275text(2310, "Motiva procurar\xE1 mantener una infraestructura tecnol\xF3gica que incorpore medidas de seguridad razonables para proteger la Plataforma BonoPay frente a amenazas internas y externas.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2311, "p", 5);
      \u0275\u0275text(2312, "Estas medidas podr\xE1n comprender, entre otras:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2313, "ul", 6)(2314, "li");
      \u0275\u0275text(2315, "cifrado de comunicaciones;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2316, "li");
      \u0275\u0275text(2317, "mecanismos de autenticaci\xF3n multifactor cuando corresponda;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2318, "li");
      \u0275\u0275text(2319, "respaldo peri\xF3dico de informaci\xF3n;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2320, "li");
      \u0275\u0275text(2321, "monitoreo de seguridad;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2322, "li");
      \u0275\u0275text(2323, "protecci\xF3n contra software malicioso;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2324, "li");
      \u0275\u0275text(2325, "actualizaci\xF3n de componentes tecnol\xF3gicos.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2326, "h4", 4);
      \u0275\u0275text(2327, "Art\xEDculo 56.- Gesti\xF3n de incidentes de seguridad");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2328, "p", 5);
      \u0275\u0275text(2329, "Motiva contar\xE1 con procedimientos internos destinados a identificar, registrar, evaluar, contener y gestionar incidentes de seguridad que puedan afectar los datos personales tratados mediante la Plataforma.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2330, "p", 5);
      \u0275\u0275text(2331, "Cuando corresponda conforme a la legislaci\xF3n aplicable, Motiva adoptar\xE1 las medidas necesarias para mitigar los efectos del incidente y atender las obligaciones legales que resulten aplicables.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2332, "h4", 4);
      \u0275\u0275text(2333, "Art\xEDculo 57.- Confidencialidad");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2334, "p", 5);
      \u0275\u0275text(2335, "Toda persona que intervenga en el tratamiento de datos personales por cuenta de Motiva estar\xE1 obligada a mantener la confidencialidad de la informaci\xF3n a la que tenga acceso.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2336, "p", 5);
      \u0275\u0275text(2337, "Dicha obligaci\xF3n subsistir\xE1 incluso despu\xE9s de concluida la relaci\xF3n laboral, contractual o comercial que motiv\xF3 el acceso a los datos personales.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2338, "h4", 4);
      \u0275\u0275text(2339, "Art\xEDculo 58.- Capacitaci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2340, "p", 5);
      \u0275\u0275text(2341, "Motiva promover\xE1 que su personal reciba capacitaci\xF3n peri\xF3dica en materia de protecci\xF3n de datos personales, seguridad de la informaci\xF3n y buenas pr\xE1cticas relacionadas con el tratamiento de informaci\xF3n personal.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2342, "h4", 4);
      \u0275\u0275text(2343, "Art\xEDculo 59.- Evaluaci\xF3n y mejora continua");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2344, "p", 5);
      \u0275\u0275text(2345, "Motiva podr\xE1 revisar peri\xF3dicamente sus procedimientos, controles y medidas de seguridad con la finalidad de identificar oportunidades de mejora y fortalecer continuamente la protecci\xF3n de los datos personales tratados mediante BonoPay.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2346, "h4", 4);
      \u0275\u0275text(2347, "Art\xEDculo 60.- Conservaci\xF3n segura de la informaci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2348, "p", 5);
      \u0275\u0275text(2349, "Durante todo el per\xEDodo en que los datos personales sean tratados o conservados por Motiva, se adoptar\xE1n medidas razonables para evitar su p\xE9rdida, alteraci\xF3n, destrucci\xF3n, acceso no autorizado o cualquier otro tratamiento incompatible con la presente Pol\xEDtica y con la legislaci\xF3n aplicable.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2350, "h4", 4);
      \u0275\u0275text(2351, "Art\xEDculo 61.- Seguridad de proveedores y terceros");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2352, "p", 5);
      \u0275\u0275text(2353, "Cuando Motiva contrate a terceros que, con motivo de la prestaci\xF3n de un servicio, puedan acceder a datos personales tratados mediante la plataforma BonoPay, procurar\xE1 verificar que dichos terceros implementen medidas de seguridad apropiadas y asuman obligaciones contractuales relacionadas con la confidencialidad, la protecci\xF3n de datos personales y la seguridad de la informaci\xF3n.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2354, "p", 5);
      \u0275\u0275text(2355, "La contrataci\xF3n de dichos proveedores no exime a Motiva de las responsabilidades que le correspondan como responsable del tratamiento.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2356, "h3", 3);
      \u0275\u0275text(2357, "CAP\xCDTULO VIII \u2014 DERECHOS DE LOS TITULARES DE LOS DATOS PERSONALES");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2358, "h4", 4);
      \u0275\u0275text(2359, "Art\xEDculo 62.- Derechos de los titulares");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2360, "p", 5);
      \u0275\u0275text(2361, "Los titulares de los datos personales podr\xE1n ejercer los derechos que les reconoce la Ley N\xB0 29733, su Reglamento y dem\xE1s normas aplicables respecto de los datos personales tratados por Motiva.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2362, "p", 5);
      \u0275\u0275text(2363, "Motiva adoptar\xE1 las medidas necesarias para garantizar que dichos derechos puedan ejercerse de manera sencilla, gratuita y dentro de los plazos establecidos por la legislaci\xF3n vigente.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2364, "h4", 4);
      \u0275\u0275text(2365, "Art\xEDculo 63.- Derecho de informaci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2366, "p", 5);
      \u0275\u0275text(2367, "El titular podr\xE1 solicitar informaci\xF3n respecto del tratamiento de sus datos personales, incluyendo, cuando corresponda:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2368, "ul", 6)(2369, "li");
      \u0275\u0275text(2370, "la existencia de tratamiento;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2371, "li");
      \u0275\u0275text(2372, "las finalidades del tratamiento;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2373, "li");
      \u0275\u0275text(2374, "las categor\xEDas de datos tratados;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2375, "li");
      \u0275\u0275text(2376, "los destinatarios o categor\xEDas de destinatarios;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2377, "li");
      \u0275\u0275text(2378, "el tiempo de conservaci\xF3n de la informaci\xF3n;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2379, "li");
      \u0275\u0275text(2380, "los mecanismos para ejercer sus derechos.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2381, "h4", 4);
      \u0275\u0275text(2382, "Art\xEDculo 64.- Derecho de acceso");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2383, "p", 5);
      \u0275\u0275text(2384, "El titular podr\xE1 solicitar conocer los datos personales que Motiva mantiene sobre \xE9l, as\xED como cualquier otra informaci\xF3n prevista en la legislaci\xF3n aplicable relacionada con dicho tratamiento.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2385, "h4", 4);
      \u0275\u0275text(2386, "Art\xEDculo 65.- Derecho de rectificaci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2387, "p", 5);
      \u0275\u0275text(2388, "El titular podr\xE1 solicitar la actualizaci\xF3n, inclusi\xF3n o rectificaci\xF3n de los datos personales que resulten inexactos, incompletos o desactualizados.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2389, "p", 5);
      \u0275\u0275text(2390, "Motiva podr\xE1 solicitar la documentaci\xF3n necesaria para verificar la procedencia de la solicitud.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2391, "h4", 4);
      \u0275\u0275text(2392, "Art\xEDculo 66.- Derecho de cancelaci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2393, "p", 5);
      \u0275\u0275text(2394, "El titular podr\xE1 solicitar la supresi\xF3n o cancelaci\xF3n de sus datos personales cuando corresponda conforme a la legislaci\xF3n aplicable.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2395, "p", 5);
      \u0275\u0275text(2396, "La cancelaci\xF3n no proceder\xE1 cuando exista una obligaci\xF3n legal o contractual que justifique la conservaci\xF3n de los datos personales durante un per\xEDodo determinado.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2397, "h4", 4);
      \u0275\u0275text(2398, "Art\xEDculo 67.- Derecho de oposici\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2399, "p", 5);
      \u0275\u0275text(2400, "El titular podr\xE1 oponerse al tratamiento de sus datos personales cuando la legislaci\xF3n aplicable as\xED lo permita y existan motivos fundados relacionados con su situaci\xF3n particular.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2401, "p", 5);
      \u0275\u0275text(2402, "Motiva evaluar\xE1 cada solicitud considerando la naturaleza del tratamiento y las obligaciones legales que resulten aplicables.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2403, "h4", 4);
      \u0275\u0275text(2404, "Art\xEDculo 68.- Ejercicio de derechos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2405, "p", 5);
      \u0275\u0275text(2406, "Los derechos previstos en la presente Pol\xEDtica podr\xE1n ejercerse mediante los canales de atenci\xF3n habilitados por Motiva, los cuales ser\xE1n informados permanentemente en la Plataforma y en el Cap\xEDtulo X de la presente Pol\xEDtica.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2407, "p", 5);
      \u0275\u0275text(2408, "Las solicitudes deber\xE1n contener la informaci\xF3n m\xEDnima necesaria para identificar al titular y atender adecuadamente el requerimiento.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2409, "h4", 4);
      \u0275\u0275text(2410, "Art\xEDculo 69.- Verificaci\xF3n de identidad");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2411, "p", 5);
      \u0275\u0275text(2412, "Con la finalidad de proteger la confidencialidad de los datos personales, Motiva podr\xE1 adoptar medidas razonables para verificar la identidad del solicitante antes de atender cualquier solicitud relacionada con el ejercicio de derechos.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2413, "p", 5);
      \u0275\u0275text(2414, "Cuando act\xFAe un representante, podr\xE1 requerirse la acreditaci\xF3n de la representaci\xF3n correspondiente.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2415, "h4", 4);
      \u0275\u0275text(2416, "Art\xEDculo 70.- Atenci\xF3n de solicitudes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2417, "p", 5);
      \u0275\u0275text(2418, "Motiva atender\xE1 las solicitudes presentadas por los titulares dentro de los plazos previstos por la legislaci\xF3n aplicable.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2419, "p", 5);
      \u0275\u0275text(2420, "Cuando resulte necesario solicitar informaci\xF3n adicional para atender una solicitud, Motiva informar\xE1 oportunamente dicha circunstancia al solicitante.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2421, "h4", 4);
      \u0275\u0275text(2422, "Art\xEDculo 71.- Improcedencia de solicitudes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2423, "p", 5);
      \u0275\u0275text(2424, "Motiva podr\xE1 declarar improcedente una solicitud cuando:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2425, "p", 5);
      \u0275\u0275text(2426, "a) quien la formule no acredite ser titular de los datos o su representante;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2427, "p", 5);
      \u0275\u0275text(2428, "b) la solicitud resulte manifiestamente infundada;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2429, "p", 5);
      \u0275\u0275text(2430, "c) exista una obligaci\xF3n legal que impida acceder a lo solicitado;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2431, "p", 5);
      \u0275\u0275text(2432, "d) la legislaci\xF3n aplicable establezca una limitaci\xF3n al ejercicio del derecho correspondiente.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2433, "p", 5);
      \u0275\u0275text(2434, "La decisi\xF3n ser\xE1 comunicada al solicitante indicando las razones que la sustentan.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2435, "h4", 4);
      \u0275\u0275text(2436, "Art\xEDculo 72.- Conservaci\xF3n durante el tr\xE1mite");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2437, "p", 5);
      \u0275\u0275text(2438, "La presentaci\xF3n de una solicitud relacionada con el ejercicio de derechos no implicar\xE1 la eliminaci\xF3n inmediata de los datos personales cuando exista obligaci\xF3n legal de conservarlos o cuando su conservaci\xF3n resulte necesaria para la atenci\xF3n de la propia solicitud.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2439, "h4", 4);
      \u0275\u0275text(2440, "Art\xEDculo 73.- Atenci\xF3n gratuita");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2441, "p", 5);
      \u0275\u0275text(2442, "El ejercicio de los derechos reconocidos en la presente Pol\xEDtica ser\xE1 gratuito, salvo los supuestos expresamente previstos por la legislaci\xF3n aplicable.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2443, "h4", 4);
      \u0275\u0275text(2444, "Art\xEDculo 74.- Autoridad competente");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2445, "p", 5);
      \u0275\u0275text(2446, "Si el titular considera que Motiva no ha atendido adecuadamente su solicitud o ha vulnerado sus derechos en materia de protecci\xF3n de datos personales, podr\xE1 acudir a la Autoridad Nacional de Protecci\xF3n de Datos Personales conforme al procedimiento previsto en la legislaci\xF3n vigente, sin perjuicio de cualquier otro mecanismo legal que resulte aplicable.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2447, "h4", 4);
      \u0275\u0275text(2448, "Art\xEDculo 75.- Registro de solicitudes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2449, "p", 5);
      \u0275\u0275text(2450, "Motiva podr\xE1 mantener un registro interno de las solicitudes relacionadas con el ejercicio de los derechos de los titulares, con la finalidad de acreditar el cumplimiento de sus obligaciones legales, mejorar sus procedimientos internos y atender eventuales requerimientos de la Autoridad Nacional de Protecci\xF3n de Datos Personales.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2451, "h3", 3);
      \u0275\u0275text(2452, "CAP\xCDTULO IX \u2014 CONSERVACI\xD3N Y ELIMINACI\xD3N DE LOS DATOS PERSONALES");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2453, "h4", 4);
      \u0275\u0275text(2454, "Art\xEDculo 76.- Principio general de conservaci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2455, "p", 5);
      \u0275\u0275text(2456, "Motiva conservar\xE1 los datos personales \xFAnicamente durante el tiempo que resulte necesario para cumplir las finalidades descritas en la presente Pol\xEDtica, atender las obligaciones legales o contractuales aplicables, ejercer o defender derechos y cumplir con los per\xEDodos de conservaci\xF3n previstos por la legislaci\xF3n vigente.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2457, "p", 5);
      \u0275\u0275text(2458, "Una vez cumplidas dichas finalidades, los datos personales ser\xE1n eliminados, anonimizados o bloqueados, seg\xFAn corresponda.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2459, "h4", 4);
      \u0275\u0275text(2460, "Art\xEDculo 77.- Criterios para determinar el plazo de conservaci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2461, "p", 5);
      \u0275\u0275text(2462, "El per\xEDodo de conservaci\xF3n de los datos personales ser\xE1 determinado considerando, entre otros factores:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2463, "p", 5);
      \u0275\u0275text(2464, "a) La finalidad para la cual fueron recopilados.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2465, "p", 5);
      \u0275\u0275text(2466, "b) La naturaleza de los datos personales.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2467, "p", 5);
      \u0275\u0275text(2468, "c) Las obligaciones legales o regulatorias aplicables.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2469, "p", 5);
      \u0275\u0275text(2470, "d) Los plazos de prescripci\xF3n previstos por la legislaci\xF3n.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2471, "p", 5);
      \u0275\u0275text(2472, "e) La necesidad de atender reclamos, auditor\xEDas, investigaciones o procedimientos administrativos, judiciales o arbitrales.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2473, "p", 5);
      \u0275\u0275text(2474, "f) Los requerimientos de seguridad de la informaci\xF3n y continuidad del negocio.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2475, "h4", 4);
      \u0275\u0275text(2476, "Art\xEDculo 78.- Conservaci\xF3n por obligaciones legales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2477, "p", 5);
      \u0275\u0275text(2478, "Cuando una disposici\xF3n legal, una orden de autoridad competente o una obligaci\xF3n contractual exija conservar determinada informaci\xF3n durante un per\xEDodo espec\xEDfico, Motiva mantendr\xE1 dichos datos personales durante el plazo correspondiente, aun cuando la finalidad principal del tratamiento hubiera concluido.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2479, "h4", 4);
      \u0275\u0275text(2480, "Art\xEDculo 79.- Conservaci\xF3n para la defensa de derechos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2481, "p", 5);
      \u0275\u0275text(2482, "Motiva podr\xE1 conservar los datos personales cuando ello resulte razonablemente necesario para ejercer, proteger o defender sus derechos en procedimientos administrativos, judiciales, arbitrales o de cualquier otra naturaleza.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2483, "h4", 4);
      \u0275\u0275text(2484, "Art\xEDculo 80.- Eliminaci\xF3n de los datos personales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2485, "p", 5);
      \u0275\u0275text(2486, "Cuando los datos personales dejen de ser necesarios para las finalidades que motivaron su recopilaci\xF3n y no exista una obligaci\xF3n legal que justifique su conservaci\xF3n, Motiva proceder\xE1 a su eliminaci\xF3n segura o a su anonimizaci\xF3n, seg\xFAn resulte t\xE9cnicamente y legalmente procedente.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2487, "p", 5);
      \u0275\u0275text(2488, "La eliminaci\xF3n se realizar\xE1 procurando evitar la recuperaci\xF3n no autorizada de la informaci\xF3n.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2489, "h4", 4);
      \u0275\u0275text(2490, "Art\xEDculo 81.- Anonimizaci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2491, "p", 5);
      \u0275\u0275text(2492, "Motiva podr\xE1 anonimizar determinados conjuntos de informaci\xF3n cuando ello permita cumplir finalidades estad\xEDsticas, anal\xEDticas, de mejora de servicios o de investigaci\xF3n, siempre que la informaci\xF3n resultante no permita identificar razonablemente a una persona natural.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2493, "p", 5);
      \u0275\u0275text(2494, "La informaci\xF3n anonimizada dejar\xE1 de tener el car\xE1cter de dato personal mientras no sea posible reidentificar al titular.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2495, "h4", 4);
      \u0275\u0275text(2496, "Art\xEDculo 82.- Copias de seguridad");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2497, "p", 5);
      \u0275\u0275text(2498, "Con la finalidad de garantizar la continuidad operativa, recuperaci\xF3n ante desastres y seguridad de la informaci\xF3n, Motiva podr\xE1 mantener copias de respaldo que contengan datos personales.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2499, "p", 5);
      \u0275\u0275text(2500, "Dichas copias estar\xE1n sujetas a medidas de seguridad apropiadas y ser\xE1n conservadas \xFAnicamente durante el tiempo necesario para cumplir su finalidad.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2501, "h4", 4);
      \u0275\u0275text(2502, "Art\xEDculo 83.- Eliminaci\xF3n en sistemas de terceros");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2503, "p", 5);
      \u0275\u0275text(2504, "Cuando Motiva utilice proveedores tecnol\xF3gicos para la prestaci\xF3n de los servicios ofrecidos mediante BonoPay, procurar\xE1 que la eliminaci\xF3n o supresi\xF3n de los datos personales tambi\xE9n sea implementada por dichos proveedores cuando corresponda conforme a la relaci\xF3n contractual y a la legislaci\xF3n aplicable.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2505, "h4", 4);
      \u0275\u0275text(2506, "Art\xEDculo 84.- Conservaci\xF3n de registros de seguridad");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2507, "p", 5);
      \u0275\u0275text(2508, "Los registros de auditor\xEDa, autenticaci\xF3n, accesos, eventos de seguridad y dem\xE1s informaci\xF3n t\xE9cnica podr\xE1n conservarse durante el tiempo necesario para garantizar la seguridad de la Plataforma, prevenir fraudes, atender incidentes y cumplir obligaciones legales o regulatorias.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2509, "h4", 4);
      \u0275\u0275text(2510, "Art\xEDculo 85.- Revisi\xF3n peri\xF3dica");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2511, "p", 5);
      \u0275\u0275text(2512, "Motiva revisar\xE1 peri\xF3dicamente sus criterios de conservaci\xF3n de datos personales con la finalidad de verificar que la informaci\xF3n no sea conservada por per\xEDodos superiores a los necesarios para cumplir las finalidades descritas en la presente Pol\xEDtica.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2513, "h3", 3);
      \u0275\u0275text(2514, "CAP\xCDTULO X \u2014 CONTACTO, ATENCI\xD3N DE CONSULTAS Y DISPOSICIONES FINALES");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2515, "h4", 4);
      \u0275\u0275text(2516, "Art\xEDculo 86.- Identificaci\xF3n del responsable del tratamiento");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2517, "p", 5);
      \u0275\u0275text(2518, "El responsable del tratamiento de los datos personales regulados por la presente Pol\xEDtica es Motiva Soluciones S.A.C., titular de la plataforma tecnol\xF3gica BonoPay.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2519, "p", 5);
      \u0275\u0275text(2520, "Motiva realiza el tratamiento de los datos personales conforme a la Ley N\xB0 29733, Ley de Protecci\xF3n de Datos Personales, su Reglamento y dem\xE1s normas aplicables.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2521, "p", 5);
      \u0275\u0275text(2522, "La informaci\xF3n de identificaci\xF3n, domicilio y dem\xE1s datos corporativos de Motiva ser\xE1n puestos a disposici\xF3n de los Beneficiarios a trav\xE9s de la Plataforma y de los canales oficiales de atenci\xF3n.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2523, "h4", 4);
      \u0275\u0275text(2524, "Art\xEDculo 87.- Canal de atenci\xF3n en materia de privacidad");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2525, "p", 5);
      \u0275\u0275text(2526, "Los titulares de los datos personales podr\xE1n formular consultas, solicitudes relacionadas con el tratamiento de sus datos personales o ejercer los derechos reconocidos por la legislaci\xF3n aplicable mediante los canales de atenci\xF3n habilitados por Motiva.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2527, "p", 5);
      \u0275\u0275text(2528, "Motiva procurar\xE1 mantener permanentemente actualizados dichos canales de comunicaci\xF3n y brindar atenci\xF3n dentro de los plazos previstos por la legislaci\xF3n vigente.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2529, "h4", 4);
      \u0275\u0275text(2530, "Art\xEDculo 88.- Comunicaciones");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2531, "p", 5);
      \u0275\u0275text(2532, "Toda comunicaci\xF3n relacionada con la presente Pol\xEDtica podr\xE1 realizarse por medios f\xEDsicos o electr\xF3nicos, incluyendo correo electr\xF3nico, notificaciones dentro de la Plataforma u otros mecanismos que Motiva habilite para tal efecto.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2533, "p", 5);
      \u0275\u0275text(2534, "Cuando la legislaci\xF3n lo requiera, Motiva podr\xE1 solicitar confirmaci\xF3n de recepci\xF3n o aceptaci\xF3n de determinadas comunicaciones.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2535, "h4", 4);
      \u0275\u0275text(2536, "Art\xEDculo 89.- Actualizaci\xF3n de la informaci\xF3n del Beneficiario");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2537, "p", 5);
      \u0275\u0275text(2538, "El Beneficiario se compromete a mantener actualizados los datos personales proporcionados a Motiva.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2539, "p", 5);
      \u0275\u0275text(2540, "En caso de producirse modificaciones relevantes respecto de la informaci\xF3n registrada, el Beneficiario deber\xE1 actualizarlos utilizando los mecanismos habilitados por la Plataforma o comunic\xE1ndose con Motiva.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2541, "p", 5);
      \u0275\u0275text(2542, "Motiva no ser\xE1 responsable por los perjuicios derivados de la falta de actualizaci\xF3n de los datos personales cuando ello impida la adecuada prestaci\xF3n de los servicios o la correcta atenci\xF3n de comunicaciones relacionadas con la Plataforma.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2543, "h4", 4);
      \u0275\u0275text(2544, "Art\xEDculo 90.- Conservaci\xF3n de evidencia");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2545, "p", 5);
      \u0275\u0275text(2546, "Motiva podr\xE1 conservar registros electr\xF3nicos relacionados con la aceptaci\xF3n de la presente Pol\xEDtica, el otorgamiento del consentimiento cuando resulte exigible, las comunicaciones remitidas al Beneficiario y dem\xE1s actuaciones relevantes vinculadas con el tratamiento de datos personales, con la finalidad de acreditar el cumplimiento de sus obligaciones legales y contractuales.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2547, "h4", 4);
      \u0275\u0275text(2548, "Art\xEDculo 91.- Integraci\xF3n con los T\xE9rminos y Condiciones");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2549, "p", 5);
      \u0275\u0275text(2550, "La presente Pol\xEDtica forma parte integrante de los T\xE9rminos y Condiciones de Uso de BonoPay.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2551, "p", 5);
      \u0275\u0275text(2552, "Ambos documentos deber\xE1n interpretarse de manera arm\xF3nica y complementaria.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2553, "p", 5);
      \u0275\u0275text(2554, "En caso de conflicto respecto del tratamiento de datos personales, prevalecer\xE1n las disposiciones contenidas en la presente Pol\xEDtica.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2555, "h4", 4);
      \u0275\u0275text(2556, "Art\xEDculo 92.- Independencia de las disposiciones");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2557, "p", 5);
      \u0275\u0275text(2558, "La eventual nulidad, invalidez o inaplicabilidad de alguna disposici\xF3n de la presente Pol\xEDtica no afectar\xE1 la validez de las dem\xE1s disposiciones, las cuales continuar\xE1n plenamente vigentes en aquello que resulte compatible con la legislaci\xF3n aplicable.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2559, "h4", 4);
      \u0275\u0275text(2560, "Art\xEDculo 93.- Modificaciones de la Pol\xEDtica");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2561, "p", 5);
      \u0275\u0275text(2562, "Motiva podr\xE1 modificar la presente Pol\xEDtica cuando ello resulte necesario para:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2563, "ul", 6)(2564, "li");
      \u0275\u0275text(2565, "adecuarse a cambios legislativos;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2566, "li");
      \u0275\u0275text(2567, "incorporar nuevas funcionalidades de BonoPay;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2568, "li");
      \u0275\u0275text(2569, "modificar procesos internos relacionados con el tratamiento de datos personales;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2570, "li");
      \u0275\u0275text(2571, "implementar mejoras tecnol\xF3gicas;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2572, "li");
      \u0275\u0275text(2573, "fortalecer las medidas de seguridad; o");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2574, "li");
      \u0275\u0275text(2575, "responder a cambios en el modelo de negocio.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2576, "p", 5);
      \u0275\u0275text(2577, "Cuando las modificaciones resulten sustanciales o afecten la forma en que se tratan los datos personales, Motiva las comunicar\xE1 a los Beneficiarios utilizando medios razonablemente adecuados y, cuando corresponda, solicitar\xE1 nuevamente el consentimiento exigido por la legislaci\xF3n.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2578, "h4", 4);
      \u0275\u0275text(2579, "Art\xEDculo 94.- Interpretaci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2580, "p", 5);
      \u0275\u0275text(2581, "La presente Pol\xEDtica deber\xE1 interpretarse conforme a la legislaci\xF3n peruana sobre protecci\xF3n de datos personales y procurando garantizar el mayor nivel posible de protecci\xF3n de los derechos de los titulares.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2582, "h4", 4);
      \u0275\u0275text(2583, "Art\xEDculo 95.- Legislaci\xF3n aplicable");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2584, "p", 5);
      \u0275\u0275text(2585, "La presente Pol\xEDtica se rige por la Ley N\xB0 29733, su Reglamento y las dem\xE1s normas peruanas que regulen el tratamiento de datos personales.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2586, "h4", 4);
      \u0275\u0275text(2587, "Art\xEDculo 96.- Soluci\xF3n de consultas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2588, "p", 5);
      \u0275\u0275text(2589, "Las consultas relacionadas con la interpretaci\xF3n o aplicaci\xF3n de la presente Pol\xEDtica podr\xE1n dirigirse a Motiva mediante los canales oficiales de atenci\xF3n indicados en la Plataforma.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2590, "h4", 4);
      \u0275\u0275text(2591, "Art\xEDculo 97.- Vigencia");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2592, "p", 5);
      \u0275\u0275text(2593, "La presente Pol\xEDtica entrar\xE1 en vigencia desde la fecha de su publicaci\xF3n en la plataforma BonoPay y permanecer\xE1 vigente hasta que sea sustituida por una nueva versi\xF3n.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2594, "p", 5);
      \u0275\u0275text(2595, "Las versiones actualizadas ser\xE1n publicadas oportunamente para conocimiento de los Beneficiarios.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2596, "h4", 4);
      \u0275\u0275text(2597, "Art\xEDculo 98.- Publicidad de la Pol\xEDtica");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2598, "p", 5);
      \u0275\u0275text(2599, "La versi\xF3n vigente de la presente Pol\xEDtica permanecer\xE1 disponible para consulta permanente a trav\xE9s de la plataforma BonoPay y dem\xE1s medios que Motiva considere apropiados.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2600, "h4", 4);
      \u0275\u0275text(2601, "Art\xEDculo 99.- Idioma oficial");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2602, "p", 5);
      \u0275\u0275text(2603, "La presente Pol\xEDtica ha sido redactada en idioma espa\xF1ol.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2604, "p", 5);
      \u0275\u0275text(2605, "En caso de que Motiva publique traducciones a otros idiomas, la versi\xF3n en espa\xF1ol prevalecer\xE1 para efectos de su interpretaci\xF3n, salvo disposici\xF3n legal en contrario.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2606, "h4", 4);
      \u0275\u0275text(2607, "Art\xEDculo 100.- Declaraci\xF3n final");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2608, "p", 5);
      \u0275\u0275text(2609, "Motiva reafirma su compromiso con la protecci\xF3n de los datos personales y con el respeto de los derechos de sus titulares, procurando que el tratamiento de la informaci\xF3n personal se realice de manera transparente, segura, responsable y conforme a la legislaci\xF3n peruana vigente.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2610, "p", 5);
      \u0275\u0275text(2611, "La protecci\xF3n de los datos personales constituye un elemento esencial para el desarrollo de los servicios ofrecidos mediante la plataforma BonoPay y para la generaci\xF3n de confianza entre Motiva, sus clientes y los Beneficiarios que utilizan la Plataforma.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2612, "button", 7);
      \u0275\u0275listener("click", function LegalDialogs_Template_button_click_2612_listener() {
        return ctx.legal.privacyOpen.set(false);
      });
      \u0275\u0275text(2613, " Entendido ");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("open", ctx.legal.termsOpen());
      \u0275\u0275advance(1597);
      \u0275\u0275property("open", ctx.legal.privacyOpen());
    }
  }, dependencies: [Dialog], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LegalDialogs, [{
    type: Component,
    args: [{
      selector: "app-legal-dialogs",
      imports: [Dialog],
      template: `
    <app-dialog
      [open]="legal.termsOpen()"
      (openChange)="legal.termsOpen.set($event)"
      title="T\xE9rminos de uso"
    >
      <div class="space-y-1 text-[15px] leading-relaxed text-ink">
        <p class="text-muted">
          T\xE9rminos y Condiciones de Uso de la Plataforma BonoPay para Beneficiarios.
        </p>

        <h3 class="mt-8 text-[13px] font-semibold uppercase tracking-wide text-primary">CAP\xCDTULO I &mdash; DISPOSICIONES GENERALES</h3>
        <h4 class="mt-4 font-medium">1. Objeto</h4>
        <p class="mt-1 text-muted">Los presentes T\xE9rminos y Condiciones regulan el acceso, registro y uso de la plataforma tecnol\xF3gica BonoPay (la "Plataforma") por parte de las personas naturales que, por designaci\xF3n de una empresa, cliente de BonoPay (la "Empresa"), sean invitadas a registrarse con la finalidad de recibir incentivos monetarios otorgados exclusivamente por dicha Empresa.</p>
        <p class="mt-1 text-muted">BonoPay proporciona una infraestructura tecnol\xF3gica que permite al Beneficiario registrar y mantener actualizada la informaci\xF3n necesaria para facilitar el procesamiento de los pagos instruidos por la Empresa a trav\xE9s de procesadores de pago y entidades financieras autorizadas.</p>
        <p class="mt-1 text-muted">La aceptaci\xF3n de estos T\xE9rminos y Condiciones constituye un acuerdo jur\xEDdicamente vinculante entre el Beneficiario y BonoPay respecto del uso de la Plataforma.</p>
        <h4 class="mt-4 font-medium">2. Identificaci\xF3n de BonoPay</h4>
        <p class="mt-1 text-muted">La Plataforma es operada por MOTIVA SOLUCIONES S.A.C., sociedad constituida conforme a las leyes de la Rep\xFAblica del Per\xFA, identificada con RUC N\xBA 20537879751, con domicilio en Av. Benavides 768, oficina 306, Miraflores, quien act\xFAa como proveedor de la Plataforma.</p>
        <p class="mt-1 text-muted">Para efectos de estos T\xE9rminos y Condiciones, cualquier referencia a "BonoPay" comprender\xE1 a la sociedad operadora de la Plataforma, sus sucesores, cesionarios autorizados y, cuando corresponda, a las sociedades pertenecientes a su mismo grupo empresarial que participen en la prestaci\xF3n del servicio.</p>
        <h4 class="mt-4 font-medium">3. Naturaleza de la Plataforma</h4>
        <p class="mt-1 text-muted">BonoPay es una plataforma tecnol\xF3gica operada por Motiva Soluciones S.A.C., desarrollada para facilitar la administraci\xF3n de programas de incentivos, el registro de Beneficiarios, la validaci\xF3n de identidad, la gesti\xF3n de informaci\xF3n necesaria para el procesamiento de pagos y la integraci\xF3n con proveedores tecnol\xF3gicos especializados.</p>
        <p class="mt-1 text-muted">Motiva presta servicios tecnol\xF3gicos a las empresas que utilizan BonoPay para administrar programas de incentivos dirigidos a sus colaboradores, clientes, proveedores u otros beneficiarios.</p>
        <p class="mt-1 text-muted">En el marco de la prestaci\xF3n de dichos servicios, Motiva act\xFAa como responsable del tratamiento de los datos personales tratados mediante la Plataforma, conforme a lo dispuesto en la Ley N\xB0 29733, su Reglamento y la Pol\xEDtica de Privacidad de BonoPay.</p>
        <p class="mt-1 text-muted">La Plataforma constituye una infraestructura tecnol\xF3gica destinada a facilitar la administraci\xF3n de programas de incentivos y el procesamiento de operaciones asociadas a dichos programas.</p>
        <p class="mt-1 text-muted">En ning\xFAn caso BonoPay:</p>
        <p class="mt-1 text-muted">a) otorga cr\xE9ditos;</p>
        <p class="mt-1 text-muted">b) recibe dep\xF3sitos del p\xFAblico;</p>
        <p class="mt-1 text-muted">c) realiza actividades propias de una empresa del sistema financiero;</p>
        <p class="mt-1 text-muted">d) administra fondos propios de los Beneficiarios;</p>
        <p class="mt-1 text-muted">e) presta servicios financieros regulados.</p>
        <p class="mt-1 text-muted">Asimismo, BonoPay no decide el otorgamiento de incentivos econ\xF3micos, cuya asignaci\xF3n corresponde a la empresa cliente conforme a las reglas de cada programa.</p>
        <h4 class="mt-4 font-medium">4. Relaci\xF3n entre las Partes</h4>
        <p class="mt-1 text-muted">En la utilizaci\xF3n de la Plataforma intervienen diversos sujetos con funciones independientes:</p>
        <p class="mt-1 text-muted">a) Motiva</p>
        <p class="mt-1 text-muted">Motiva Soluciones S.A.C. administra y opera la Plataforma BonoPay.</p>
        <p class="mt-1 text-muted">Como responsable del tratamiento de los datos personales recopilados mediante la Plataforma, Motiva determina las finalidades y los medios del tratamiento conforme a la Pol\xEDtica de Privacidad y a la legislaci\xF3n aplicable.</p>
        <p class="mt-1 text-muted">Asimismo, Motiva presta los servicios tecnol\xF3gicos necesarios para la administraci\xF3n del registro de Beneficiarios, la autenticaci\xF3n de usuarios, la gesti\xF3n de la informaci\xF3n necesaria para el procesamiento de incentivos y la integraci\xF3n con proveedores tecnol\xF3gicos.</p>
        <p class="mt-1 text-muted">b) Empresa Cliente</p>
        <p class="mt-1 text-muted">La Empresa Cliente utiliza BonoPay para administrar sus programas de incentivos y determinar:</p>
        <ul class="mt-1 list-disc space-y-1 pl-5 text-muted">
          <li>los beneficiarios;</li>
          <li>los criterios de elegibilidad;</li>
          <li>los montos de los incentivos;</li>
          <li>las instrucciones de pago.</li>
        </ul>
        <p class="mt-1 text-muted">La Empresa Cliente es responsable de la informaci\xF3n que proporciona a Motiva y garantiza que cuenta con la base legal correspondiente para comunicar dicha informaci\xF3n cuando ello sea necesario para la prestaci\xF3n de los Servicios.</p>
        <p class="mt-1 text-muted">c) BonoPay</p>
        <p class="mt-1 text-muted">Motiva, a trav\xE9s de la Plataforma BonoPay, presta exclusivamente servicios tecnol\xF3gicos relacionados con:</p>
        <ul class="mt-1 list-disc space-y-1 pl-5 text-muted">
          <li>el registro del Beneficiario;</li>
          <li>la validaci\xF3n de identidad;</li>
          <li>la autenticaci\xF3n de usuarios;</li>
          <li>la administraci\xF3n de informaci\xF3n necesaria para los pagos;</li>
          <li>la integraci\xF3n tecnol\xF3gica con procesadores de pago;</li>
          <li>la conservaci\xF3n de registros electr\xF3nicos;</li>
          <li>la trazabilidad de las operaciones realizadas en la Plataforma.</li>
        </ul>
        <p class="mt-1 text-muted">d) Procesadores de Pago y Entidades Financieras</p>
        <p class="mt-1 text-muted">La ejecuci\xF3n material de las transferencias de fondos es realizada por terceros especializados, tales como procesadores de pago, entidades financieras, operadores de billeteras m\xF3viles u otras entidades participantes en la cadena de pago.</p>
        <p class="mt-1 text-muted">La intervenci\xF3n de dichos terceros se encuentra sujeta a sus propias condiciones operativas, regulatorias y tecnol\xF3gicas.</p>
        <h4 class="mt-4 font-medium">5. Aceptaci\xF3n de los T\xE9rminos y Condiciones</h4>
        <p class="mt-1 text-muted">El acceso y utilizaci\xF3n de la Plataforma requiere la aceptaci\xF3n expresa de los presentes T\xE9rminos y Condiciones.</p>
        <p class="mt-1 text-muted">La aceptaci\xF3n podr\xE1 efectuarse mediante cualquier mecanismo de contrataci\xF3n electr\xF3nica implementado por BonoPay, incluyendo, entre otros:</p>
        <ul class="mt-1 list-disc space-y-1 pl-5 text-muted">
          <li>la selecci\xF3n de casillas de aceptaci\xF3n ("checkbox");</li>
          <li>la confirmaci\xF3n mediante botones de aceptaci\xF3n;</li>
          <li>mecanismos de autenticaci\xF3n electr\xF3nica;</li>
          <li>validaciones mediante c\xF3digos de un solo uso (OTP);</li>
          <li>otros mecanismos tecnol\xF3gicos razonablemente equivalentes que permitan acreditar la manifestaci\xF3n de voluntad del Beneficiario.</li>
        </ul>
        <p class="mt-1 text-muted">La aceptaci\xF3n producir\xE1 plenos efectos jur\xEDdicos desde el momento en que quede registrada en los sistemas de BonoPay.</p>
        <p class="mt-1 text-muted">El Beneficiario declara haber le\xEDdo \xEDntegramente estos T\xE9rminos y Condiciones, comprender su contenido y aceptar voluntariamente todas sus disposiciones.</p>
        <h4 class="mt-4 font-medium">6. Capacidad para utilizar la Plataforma</h4>
        <p class="mt-1 text-muted">El Beneficiario declara que cuenta con capacidad legal suficiente para celebrar el presente acuerdo y utilizar la Plataforma.</p>
        <p class="mt-1 text-muted">Cuando la legislaci\xF3n aplicable exija requisitos adicionales para determinadas categor\xEDas de usuarios, el Beneficiario declara cumplirlos \xEDntegramente.</p>
        <p class="mt-1 text-muted">Motiva podr\xE1 solicitar informaci\xF3n adicional destinada a verificar la identidad o capacidad del Beneficiario cuando ello resulte necesario para la adecuada prestaci\xF3n del servicio, la prevenci\xF3n del fraude o el cumplimiento de obligaciones legales.</p>
        <h4 class="mt-4 font-medium">7. Definiciones</h4>
        <p class="mt-1 text-muted">Para efectos de estos T\xE9rminos y Condiciones, los siguientes t\xE9rminos tendr\xE1n el significado que se les asigna a continuaci\xF3n:</p>
        <ul class="mt-1 list-disc space-y-1 pl-5 text-muted">
          <li>Beneficiario: Persona natural invitada por el Empresa para registrarse en la Plataforma y recibir incentivos monetarios.</li>
          <li>Empresa: Persona jur\xEDdica que contrata los servicios de BonoPay para gestionar programas de incentivos.</li>
          <li>Cuenta: Registro electr\xF3nico asociado al Beneficiario dentro de la Plataforma.</li>
          <li>Incentivo: Pago monetario cuya entrega es decidida y autorizada exclusivamente por el Empresa.</li>
          <li>OTP (One Time Password): C\xF3digo de un solo uso utilizado como mecanismo de autenticaci\xF3n del Beneficiario.</li>
          <li>Procesador de Pago: Tercero especializado encargado de ejecutar instrucciones de pago transmitidas por BonoPay.</li>
          <li>Plataforma: El conjunto de aplicaciones, interfaces, bases de datos, servicios, infraestructura tecnol\xF3gica y dem\xE1s componentes operados por BonoPay para la gesti\xF3n del registro de Beneficiarios y el procesamiento de instrucciones de pago.</li>
          <li>Servicios: Los servicios tecnol\xF3gicos prestados por BonoPay a trav\xE9s de la Plataforma.</li>
        </ul>
        <h4 class="mt-4 font-medium">8. Modificaciones</h4>
        <p class="mt-1 text-muted">Motiva podr\xE1 modificar los presentes T\xE9rminos y Condiciones cuando resulte necesario para:</p>
        <ul class="mt-1 list-disc space-y-1 pl-5 text-muted">
          <li>incorporar nuevas funcionalidades;</li>
          <li>adecuarse a cambios normativos;</li>
          <li>implementar mejoras de seguridad;</li>
          <li>integrar nuevos proveedores tecnol\xF3gicos;</li>
          <li>incorporar nuevos medios de autenticaci\xF3n;</li>
          <li>optimizar la prestaci\xF3n del servicio.</li>
        </ul>
        <p class="mt-1 text-muted">Las modificaciones ser\xE1n comunicadas mediante la Plataforma, correo electr\xF3nico, WhatsApp u otros medios electr\xF3nicos razonablemente id\xF3neos.</p>
        <p class="mt-1 text-muted">Cuando la naturaleza de la modificaci\xF3n as\xED lo requiera, Motiva podr\xE1 solicitar una nueva aceptaci\xF3n de los T\xE9rminos y Condiciones antes de permitir el acceso continuado a la Plataforma.</p>
        <p class="mt-1 text-muted">La continuidad en el uso de la Plataforma despu\xE9s de la entrada en vigor de las modificaciones constituir\xE1 aceptaci\xF3n de estas, salvo cuando la normativa aplicable exija un mecanismo distinto de manifestaci\xF3n de voluntad.</p>

        <h3 class="mt-8 text-[13px] font-semibold uppercase tracking-wide text-primary">CAP\xCDTULO II &mdash; REGISTRO DEL BENEFICIARIO, VALIDACI\xD3N DE IDENTIDAD Y CREACI\xD3N DE LA CUENTA</h3>
        <h4 class="mt-4 font-medium">9. Invitaci\xF3n al Beneficiario</h4>
        <p class="mt-1 text-muted">El acceso a la Plataforma \xFAnicamente podr\xE1 realizarse mediante una invitaci\xF3n generada por BonoPay a solicitud de la Empresa.</p>
        <p class="mt-1 text-muted">Para tal efecto, la Empresa proporcionar\xE1 a BonoPay la informaci\xF3n m\xEDnima necesaria para identificar al potencial Beneficiario y remitir la invitaci\xF3n correspondiente, incluyendo, entre otros, el tipo y n\xFAmero de documento de identidad, el n\xFAmero de tel\xE9fono m\xF3vil asociado a la cuenta de WhatsApp del Beneficiario y cualquier otra informaci\xF3n que resulte necesaria para la administraci\xF3n del programa de incentivos.</p>
        <p class="mt-1 text-muted">La invitaci\xF3n ser\xE1 remitida al n\xFAmero telef\xF3nico informado por la Empresa utilizando los canales de comunicaci\xF3n habilitados por BonoPay, incluyendo WhatsApp u otros medios electr\xF3nicos que puedan implementarse en el futuro.</p>
        <p class="mt-1 text-muted">El Beneficiario reconoce que BonoPay remite dicha invitaci\xF3n sobre la base de la informaci\xF3n proporcionada por la Empresa y que no participa en la obtenci\xF3n inicial de dichos datos personales.</p>
        <p class="mt-1 text-muted">En consecuencia, el Beneficiario reconoce que cualquier consulta, observaci\xF3n o reclamaci\xF3n relacionada con la incorporaci\xF3n inicial de su n\xFAmero telef\xF3nico o dem\xE1s datos suministrados por la Empresa deber\xE1 dirigirse, en lo que corresponda, a dicho Empresa, sin perjuicio de los derechos que le asistan conforme a la normativa sobre protecci\xF3n de datos personales.</p>
        <h4 class="mt-4 font-medium">10. Declaraci\xF3n del Empresa respecto de la informaci\xF3n inicial</h4>
        <p class="mt-1 text-muted">BonoPay presta el servicio sobre la base de la informaci\xF3n proporcionada por la Empresa.</p>
        <p class="mt-1 text-muted">La Empresa declara que (i) la informaci\xF3n entregada es exacta, actualizada y obtenida l\xEDcitamente, siendo la Empresa la \xFAnica responsable de contar con base legal para su tratamiento; y (ii) mantiene indemne a BonoPay/Motiva frente a sanciones, multas o reclamaciones derivadas de la obtenci\xF3n il\xEDcita de los datos, ausencia de consentimiento o incumplimiento de deberes de informaci\xF3n frente a los Beneficiarios.</p>
        <p class="mt-1 text-muted">En consecuencia, BonoPay act\xFAa bajo la declaraci\xF3n y garant\xEDa de la Empresa de que cuenta con la autorizaci\xF3n, consentimiento, base legal u otro mecanismo habilitante exigido por la legislaci\xF3n aplicable para comunicar a BonoPay los datos personales necesarios para la identificaci\xF3n del Beneficiario y la prestaci\xF3n del servicio.</p>
        <p class="mt-1 text-muted">El Beneficiario reconoce que BonoPay utiliza dicha informaci\xF3n exclusivamente para facilitar el proceso de registro, autenticaci\xF3n y procesamiento de los incentivos monetarios autorizados por la Empresa.</p>
        <h4 class="mt-4 font-medium">11. Acceso al enlace de registro</h4>
        <p class="mt-1 text-muted">La invitaci\xF3n contendr\xE1 un enlace electr\xF3nico personal destinado exclusivamente al Beneficiario identificado por la Empresa.</p>
        <p class="mt-1 text-muted">El Beneficiario deber\xE1 adoptar las medidas razonables para preservar la confidencialidad del enlace recibido y abstenerse de compartirlo con terceros.</p>
        <p class="mt-1 text-muted">Motiva podr\xE1 establecer mecanismos adicionales de seguridad cuando detecte riesgos de acceso no autorizado, fraude, uso indebido o cualquier circunstancia que pudiera comprometer la seguridad de la Plataforma.</p>
        <p class="mt-1 text-muted">El acceso al enlace no garantiza por s\xED mismo la habilitaci\xF3n para recibir incentivos monetarios, la cual estar\xE1 condicionada al cumplimiento del procedimiento de registro previsto en estos T\xE9rminos y Condiciones.</p>
        <h4 class="mt-4 font-medium">12. Validaci\xF3n de identidad</h4>
        <p class="mt-1 text-muted">Como condici\xF3n previa para el uso de la Plataforma, el Beneficiario deber\xE1 validar su identidad mediante el ingreso de la informaci\xF3n solicitada por BonoPay.</p>
        <p class="mt-1 text-muted">BonoPay valida la identidad \xFAnicamente para fines de autenticaci\xF3n y seguridad, sin decidir la elegibilidad del Beneficiario para el programa de incentivos, facultad que corresponde exclusivamente a la Empresa.</p>
        <p class="mt-1 text-muted">La Plataforma verificar\xE1 que la informaci\xF3n proporcionada coincida con aquella previamente registrada por el Empresa.</p>
        <p class="mt-1 text-muted">Cuando la validaci\xF3n resulte satisfactoria, el Beneficiario podr\xE1 continuar con el proceso de registro.</p>
        <p class="mt-1 text-muted">Si la informaci\xF3n no coincide con los registros disponibles o existen inconsistencias que impidan verificar razonablemente la identidad del Beneficiario, Motiva podr\xE1 impedir temporalmente el avance del proceso, solicitar informaci\xF3n adicional o disponer la suspensi\xF3n del registro hasta que la situaci\xF3n sea aclarada.</p>
        <p class="mt-1 text-muted">La validaci\xF3n de identidad constituye un mecanismo de seguridad destinado a reducir riesgos de fraude, suplantaci\xF3n de identidad, accesos no autorizados y errores en el procesamiento de incentivos.</p>
        <h4 class="mt-4 font-medium">13. Autenticaci\xF3n mediante c\xF3digos OTP</h4>
        <p class="mt-1 text-muted">Una vez validada la identidad del Beneficiario, Motiva podr\xE1 remitir un c\xF3digo de verificaci\xF3n de un solo uso (OTP) al n\xFAmero telef\xF3nico registrado.</p>
        <p class="mt-1 text-muted">El Beneficiario reconoce que el OTP constituye un mecanismo de autenticaci\xF3n electr\xF3nica destinado a verificar que mantiene el control del n\xFAmero telef\xF3nico registrado durante el proceso de incorporaci\xF3n.</p>
        <p class="mt-1 text-muted">El Beneficiario se obliga a mantener la confidencialidad del OTP y a no compartirlo con terceros.</p>
        <p class="mt-1 text-muted">BonoPay nunca solicitar\xE1 al Beneficiario que revele un c\xF3digo OTP fuera de los canales oficiales de autenticaci\xF3n implementados en la Plataforma.</p>
        <p class="mt-1 text-muted">Toda autenticaci\xF3n realizada mediante un OTP correctamente validado generar\xE1 un registro electr\xF3nico que podr\xE1 ser utilizado como evidencia de la autenticaci\xF3n realizada.</p>
        <p class="mt-1 text-muted">Cuando existan indicios razonables de fraude, accesos irregulares, intentos reiterados de autenticaci\xF3n fallida o cualquier circunstancia que comprometa la seguridad del proceso, Motiva podr\xE1 requerir mecanismos adicionales de validaci\xF3n antes de habilitar el acceso a la Plataforma.</p>
        <h4 class="mt-4 font-medium">14. Registro de informaci\xF3n personal</h4>
        <p class="mt-1 text-muted">Una vez superadas las etapas de validaci\xF3n y autenticaci\xF3n, el Beneficiario deber\xE1 completar la informaci\xF3n requerida por la Plataforma.</p>
        <p class="mt-1 text-muted">La informaci\xF3n podr\xE1 comprender, entre otros:</p>
        <ul class="mt-1 list-disc space-y-1 pl-5 text-muted">
          <li>nombres y apellidos;</li>
          <li>correo electr\xF3nico;</li>
          <li>informaci\xF3n de contacto;</li>
          <li>entidad financiera;</li>
          <li>n\xFAmero de cuenta;</li>
          <li>c\xF3digo de cuenta interbancaria (CCI);</li>
          <li>informaci\xF3n de billeteras m\xF3viles;</li>
          <li>dem\xE1s datos necesarios para la prestaci\xF3n del servicio.</li>
        </ul>
        <p class="mt-1 text-muted">La informaci\xF3n registrada deber\xE1 ser completa, exacta, vigente y verificable.</p>
        <p class="mt-1 text-muted">El Beneficiario asume plena responsabilidad por la veracidad y actualizaci\xF3n de los datos suministrados.</p>
        <h4 class="mt-4 font-medium">15. Registro de informaci\xF3n financiera</h4>
        <p class="mt-1 text-muted">La informaci\xF3n financiera registrada por el Beneficiario ser\xE1 utilizada exclusivamente para facilitar el procesamiento de los incentivos monetarios autorizados por la Empresa.</p>
        <p class="mt-1 text-muted">El Beneficiario declara que la cuenta bancaria, billetera m\xF3vil u otro medio de pago registrado le pertenece o que cuenta con las autorizaciones necesarias para su utilizaci\xF3n conforme a la legislaci\xF3n aplicable.</p>
        <p class="mt-1 text-muted">Motiva podr\xE1 establecer validaciones autom\xE1ticas o manuales destinadas a verificar la consistencia de la informaci\xF3n financiera registrada, sin que ello implique asumir obligaci\xF3n alguna de confirmar la titularidad efectiva de las cuentas registradas.</p>
        <p class="mt-1 text-muted">El Beneficiario podr\xE1 actualizar dicha informaci\xF3n utilizando los mecanismos habilitados por la Plataforma.</p>
        <p class="mt-1 text-muted">Las modificaciones producir\xE1n efectos \xFAnicamente respecto de los pagos cuya instrucci\xF3n a\xFAn no hubiera sido transmitida al procesador correspondiente.</p>
        <h4 class="mt-4 font-medium">16. Declaraciones y garant\xEDas del Beneficiario</h4>
        <p class="mt-1 text-muted">Al completar el proceso de registro, el Beneficiario declara y garantiza que:</p>
        <p class="mt-1 text-muted">a) toda la informaci\xF3n proporcionada es verdadera, completa, exacta y vigente;</p>
        <p class="mt-1 text-muted">b) mantendr\xE1 actualizada dicha informaci\xF3n durante todo el tiempo que utilice la Plataforma;</p>
        <p class="mt-1 text-muted">c) es el leg\xEDtimo usuario del n\xFAmero telef\xF3nico utilizado para el proceso de autenticaci\xF3n;</p>
        <p class="mt-1 text-muted">d) custodiar\xE1 adecuadamente el dispositivo desde el cual accede a la Plataforma;</p>
        <p class="mt-1 text-muted">e) proteger\xE1 la confidencialidad de los c\xF3digos OTP y dem\xE1s mecanismos de autenticaci\xF3n;</p>
        <p class="mt-1 text-muted">f) utilizar\xE1 la Plataforma \xFAnicamente para los fines previstos en estos T\xE9rminos y Condiciones;</p>
        <p class="mt-1 text-muted">g) no realizar\xE1 actos de fraude, suplantaci\xF3n de identidad, manipulaci\xF3n de informaci\xF3n o cualquier otra conducta destinada a obtener incentivos de manera indebida;</p>
        <p class="mt-1 text-muted">h) notificar\xE1 oportunamente a BonoPay cualquier acceso no autorizado, p\xE9rdida de control de su dispositivo, sospecha de fraude o cualquier incidente de seguridad que pudiera afectar su cuenta.</p>
        <h4 class="mt-4 font-medium">17. Evidencia electr\xF3nica del proceso de registro</h4>
        <p class="mt-1 text-muted">El Beneficiario reconoce y acepta que BonoPay conservar\xE1 evidencia electr\xF3nica relacionada con el proceso de incorporaci\xF3n y uso de la Plataforma por un plazo m\xE1ximo de 5 a\xF1os.</p>
        <p class="mt-1 text-muted">Dicha evidencia podr\xE1 comprender, entre otros elementos:</p>
        <ul class="mt-1 list-disc space-y-1 pl-5 text-muted">
          <li>fecha y hora de cada operaci\xF3n;</li>
          <li>direcciones IP;</li>
          <li>identificadores de sesi\xF3n;</li>
          <li>registros de autenticaci\xF3n;</li>
          <li>aceptaci\xF3n de los presentes T\xE9rminos y Condiciones;</li>
          <li>aceptaci\xF3n de la Pol\xEDtica de Privacidad;</li>
          <li>validaciones OTP;</li>
          <li>historial de modificaciones;</li>
          <li>registros de auditor\xEDa;</li>
          <li>dem\xE1s evidencias t\xE9cnicas generadas por la Plataforma.</li>
        </ul>
        <p class="mt-1 text-muted">Salvo prueba en contrario, dichos registros constituir\xE1n evidencia suficiente de las actuaciones realizadas por el Beneficiario a trav\xE9s de la Plataforma y podr\xE1n ser utilizados para fines de auditor\xEDa, prevenci\xF3n de fraude, atenci\xF3n de reclamaciones, cumplimiento de obligaciones legales y, cuando corresponda, como medio probatorio ante las autoridades competentes.</p>

        <h3 class="mt-8 text-[13px] font-semibold uppercase tracking-wide text-primary">CAP\xCDTULO III &mdash; USO DE LA PLATAFORMA, OBLIGACIONES DEL BENEFICIARIO Y COMUNICACIONES ELECTR\xD3NICAS</h3>
        <h4 class="mt-4 font-medium">18. Derecho de uso de la Plataforma</h4>
        <p class="mt-1 text-muted">Una vez concluido satisfactoriamente el proceso de registro y aceptaci\xF3n de los presentes T\xE9rminos y Condiciones, BonoPay otorgar\xE1 al Beneficiario una autorizaci\xF3n personal, limitada, revocable, no exclusiva, intransferible y no sublicenciable para acceder y utilizar la Plataforma exclusivamente para los fines previstos en este documento.</p>
        <p class="mt-1 text-muted">Dicha autorizaci\xF3n no implica la transferencia de derecho alguno sobre la Plataforma, su software, bases de datos, interfaces, algoritmos, desarrollos tecnol\xF3gicos, contenidos o cualquier otro activo de propiedad intelectual de BonoPay.</p>
        <p class="mt-1 text-muted">El Beneficiario \xFAnicamente podr\xE1 utilizar la Plataforma para gestionar la informaci\xF3n necesaria para recibir los incentivos monetarios autorizados por el Empresa.</p>
        <h4 class="mt-4 font-medium">19. Obligaciones generales del Beneficiario</h4>
        <p class="mt-1 text-muted">Durante la utilizaci\xF3n de la Plataforma, el Beneficiario se obliga a:</p>
        <p class="mt-1 text-muted">a) proporcionar informaci\xF3n completa, exacta y veraz;</p>
        <p class="mt-1 text-muted">b) mantener permanentemente actualizados sus datos personales y financieros;</p>
        <p class="mt-1 text-muted">c) custodiar adecuadamente el dispositivo utilizado para acceder a la Plataforma;</p>
        <p class="mt-1 text-muted">d) mantener bajo estricta confidencialidad los mecanismos de autenticaci\xF3n utilizados por BonoPay;</p>
        <p class="mt-1 text-muted">e) utilizar exclusivamente cuentas bancarias o billeteras m\xF3viles respecto de las cuales se encuentre leg\xEDtimamente autorizado;</p>
        <p class="mt-1 text-muted">f) revisar peri\xF3dicamente la informaci\xF3n registrada en la Plataforma;</p>
        <p class="mt-1 text-muted">g) comunicar inmediatamente a BonoPay cualquier circunstancia que pueda comprometer la seguridad de su cuenta;</p>
        <p class="mt-1 text-muted">h) utilizar la Plataforma conforme a la legislaci\xF3n peruana y a los presentes T\xE9rminos y Condiciones;</p>
        <p class="mt-1 text-muted">i) colaborar razonablemente en los procesos de verificaci\xF3n que BonoPay pueda implementar para prevenir fraude o cumplir obligaciones regulatorias.</p>
        <h4 class="mt-4 font-medium">20. Conductas prohibidas</h4>
        <p class="mt-1 text-muted">El Beneficiario se abstendr\xE1 de realizar, entre otras, las siguientes conductas:</p>
        <p class="mt-1 text-muted">a) proporcionar informaci\xF3n falsa, incompleta o inexacta;</p>
        <p class="mt-1 text-muted">b) registrar cuentas bancarias pertenecientes a terceros sin autorizaci\xF3n;</p>
        <p class="mt-1 text-muted">c) intentar acceder a registros correspondientes a otros Beneficiarios;</p>
        <p class="mt-1 text-muted">d) eludir los mecanismos de autenticaci\xF3n implementados por BonoPay;</p>
        <p class="mt-1 text-muted">e) compartir c\xF3digos OTP o mecanismos de autenticaci\xF3n;</p>
        <p class="mt-1 text-muted">f) utilizar programas automatizados, robots, scripts o mecanismos similares para interactuar con la Plataforma;</p>
        <p class="mt-1 text-muted">g) interferir en el funcionamiento de la Plataforma o intentar vulnerar sus medidas de seguridad;</p>
        <p class="mt-1 text-muted">h) realizar actividades fraudulentas o destinadas a obtener incentivos de manera indebida;</p>
        <p class="mt-1 text-muted">i) utilizar la Plataforma con fines distintos de aquellos previstos en estos T\xE9rminos y Condiciones;</p>
        <p class="mt-1 text-muted">j) desarrollar cualquier actividad que pueda afectar la disponibilidad, integridad, confidencialidad o seguridad de la Plataforma.</p>
        <p class="mt-1 text-muted">El incumplimiento de estas obligaciones podr\xE1 dar lugar a la suspensi\xF3n o terminaci\xF3n del acceso, sin perjuicio de las acciones legales que pudieran corresponder.</p>
        <h4 class="mt-4 font-medium">21. Actualizaci\xF3n de la informaci\xF3n registrada</h4>
        <p class="mt-1 text-muted">El Beneficiario podr\xE1 actualizar la informaci\xF3n registrada utilizando los mecanismos habilitados por BonoPay.</p>
        <p class="mt-1 text-muted">Toda modificaci\xF3n realizada deber\xE1 corresponder a informaci\xF3n verdadera, vigente y verificable.</p>
        <p class="mt-1 text-muted">Las modificaciones efectuadas no afectar\xE1n las instrucciones de pago que ya hubieran sido transmitidas al procesador de pagos correspondiente.</p>
        <p class="mt-1 text-muted">Cuando BonoPay detecte modificaciones inusuales, inconsistentes o que puedan representar un riesgo de fraude, podr\xE1 requerir validaciones adicionales antes de habilitar el uso de la nueva informaci\xF3n registrada.</p>
        <h4 class="mt-4 font-medium">22. Comunicaciones electr\xF3nicas</h4>
        <p class="mt-1 text-muted">El Beneficiario acepta que todas las comunicaciones relacionadas con la prestaci\xF3n del servicio podr\xE1n realizarse por medios electr\xF3nicos.</p>
        <p class="mt-1 text-muted">Estas comunicaciones podr\xE1n efectuarse mediante:</p>
        <ul class="mt-1 list-disc space-y-1 pl-5 text-muted">
          <li>WhatsApp;</li>
          <li>correo electr\xF3nico;</li>
          <li>mensajes SMS;</li>
          <li>notificaciones dentro de la Plataforma;</li>
          <li>otros canales tecnol\xF3gicos que BonoPay implemente razonablemente en el futuro.</li>
        </ul>
        <p class="mt-1 text-muted">Las comunicaciones podr\xE1n comprender, entre otras:</p>
        <ul class="mt-1 list-disc space-y-1 pl-5 text-muted">
          <li>invitaciones para registrarse;</li>
          <li>autenticaci\xF3n mediante OTP;</li>
          <li>confirmaciones de registro;</li>
          <li>validaciones de identidad;</li>
          <li>actualizaci\xF3n de informaci\xF3n;</li>
          <li>notificaciones relacionadas con el procesamiento de incentivos;</li>
          <li>alertas de seguridad;</li>
          <li>comunicaciones operativas necesarias para la prestaci\xF3n del servicio.</li>
        </ul>
        <p class="mt-1 text-muted">El Beneficiario reconoce que dichas comunicaciones constituyen comunicaciones operativas indispensables para el funcionamiento de la Plataforma y no necesariamente tienen naturaleza publicitaria.</p>
        <h4 class="mt-4 font-medium">23. Responsabilidad respecto del dispositivo y canales de comunicaci\xF3n</h4>
        <p class="mt-1 text-muted">El Beneficiario ser\xE1 responsable de mantener bajo su control el dispositivo m\xF3vil, n\xFAmero telef\xF3nico, cuenta de correo electr\xF3nico y dem\xE1s medios utilizados para acceder a la Plataforma.</p>
        <p class="mt-1 text-muted">En consecuencia, el Beneficiario asume la responsabilidad derivada de:</p>
        <ul class="mt-1 list-disc space-y-1 pl-5 text-muted">
          <li>p\xE9rdida del dispositivo;</li>
          <li>cambio del n\xFAmero telef\xF3nico sin actualizar la informaci\xF3n correspondiente;</li>
          <li>acceso por personas no autorizadas;</li>
          <li>instalaci\xF3n de programas maliciosos;</li>
          <li>utilizaci\xF3n de redes inseguras;</li>
          <li>cualquier otra circunstancia atribuible a la falta de diligencia en la protecci\xF3n de sus dispositivos o credenciales.</li>
        </ul>
        <p class="mt-1 text-muted">BonoPay no ser\xE1 responsable por los perjuicios derivados del acceso realizado por terceros utilizando credenciales, dispositivos o mecanismos de autenticaci\xF3n que se encontraban bajo el control del Beneficiario, salvo que dicho acceso sea consecuencia de una falla atribuible a BonoPay.</p>
        <h4 class="mt-4 font-medium">24. Medidas de seguridad</h4>
        <p class="mt-1 text-muted">Motiva podr\xE1 implementar en cualquier momento medidas t\xE9cnicas, organizativas o procedimentales destinadas a preservar la seguridad de la Plataforma.</p>
        <p class="mt-1 text-muted">Entre dichas medidas podr\xE1n incluirse:</p>
        <ul class="mt-1 list-disc space-y-1 pl-5 text-muted">
          <li>autenticaci\xF3n multifactor;</li>
          <li>validaciones biom\xE9tricas;</li>
          <li>verificaci\xF3n documental;</li>
          <li>validaciones autom\xE1ticas;</li>
          <li>monitoreo de operaciones;</li>
          <li>an\xE1lisis de riesgo;</li>
          <li>controles antifraude;</li>
          <li>bloqueos preventivos;</li>
          <li>verificaciones adicionales de identidad.</li>
        </ul>
        <p class="mt-1 text-muted">El Beneficiario acepta colaborar razonablemente con la implementaci\xF3n de dichas medidas cuando resulten necesarias para proteger la seguridad de la Plataforma o de los dem\xE1s usuarios.</p>
        <h4 class="mt-4 font-medium">25. Facultades de BonoPay para restringir el acceso</h4>
        <p class="mt-1 text-muted">Motiva podr\xE1 restringir temporalmente determinadas funcionalidades o suspender preventivamente el acceso del Beneficiario cuando existan indicios razonables de:</p>
        <p class="mt-1 text-muted">a) fraude;</p>
        <p class="mt-1 text-muted">b) intento de suplantaci\xF3n de identidad;</p>
        <p class="mt-1 text-muted">c) inconsistencias significativas en la informaci\xF3n registrada;</p>
        <p class="mt-1 text-muted">d) accesos inusuales o de alto riesgo;</p>
        <p class="mt-1 text-muted">e) incumplimiento de estos T\xE9rminos y Condiciones;</p>
        <p class="mt-1 text-muted">f) requerimientos emitidos por autoridades competentes;</p>
        <p class="mt-1 text-muted">g) incidentes de ciberseguridad;</p>
        <p class="mt-1 text-muted">h) utilizaci\xF3n indebida de la Plataforma.</p>
        <p class="mt-1 text-muted">Siempre que resulte razonablemente posible y ello no comprometa investigaciones de fraude o la seguridad de la Plataforma, BonoPay informar\xE1 al Beneficiario sobre la adopci\xF3n de dichas medidas.</p>
        <p class="mt-1 text-muted">La suspensi\xF3n preventiva tendr\xE1 por finalidad preservar la seguridad del servicio y no constituir\xE1, por s\xED sola, un reconocimiento de responsabilidad por parte de BonoPay.</p>
        <h4 class="mt-4 font-medium">26. Conservaci\xF3n de la seguridad de la Plataforma</h4>
        <p class="mt-1 text-muted">El Beneficiario reconoce que la seguridad de la Plataforma constituye una responsabilidad compartida.</p>
        <p class="mt-1 text-muted">En consecuencia, se compromete a actuar con la diligencia razonablemente exigible para prevenir accesos indebidos, fraudes, suplantaciones de identidad y cualquier utilizaci\xF3n no autorizada de la Plataforma.</p>
        <p class="mt-1 text-muted">Toda actuaci\xF3n destinada a comprometer deliberadamente la seguridad de la Plataforma podr\xE1 dar lugar a la adopci\xF3n inmediata de medidas de protecci\xF3n, incluyendo la suspensi\xF3n del acceso, la comunicaci\xF3n a las autoridades competentes y el ejercicio de las acciones legales que correspondan.</p>
        <h4 class="mt-4 font-medium">27. Atenci\xF3n de consultas e incidencias</h4>
        <p class="mt-1 text-muted">BonoPay pondr\xE1 a disposici\xF3n del Beneficiario canales razonables de atenci\xF3n para la recepci\xF3n de consultas, reportes de incidencias, solicitudes de actualizaci\xF3n de informaci\xF3n y comunicaciones relacionadas con el funcionamiento de la Plataforma.</p>
        <p class="mt-1 text-muted">La utilizaci\xF3n de dichos canales no implicar\xE1 reconocimiento de responsabilidad por parte de BonoPay respecto de los hechos reportados, los cuales ser\xE1n evaluados conforme a la naturaleza de cada caso.</p>
        <p class="mt-1 text-muted">Cuando la incidencia se encuentre relacionada exclusivamente con decisiones adoptadas por la Empresa, incluyendo la determinaci\xF3n de beneficiarios, la aprobaci\xF3n de incentivos o la definici\xF3n de sus montos, Motiva podr\xE1 orientar al Beneficiario para que dirija su consulta a la Empresa correspondiente.</p>

        <h3 class="mt-8 text-[13px] font-semibold uppercase tracking-wide text-primary">CAP\xCDTULO IV &mdash; PROCESAMIENTO DE INCENTIVOS MONETARIOS, INTERVENCI\xD3N DE TERCEROS Y ASIGNACI\xD3N DE RESPONSABILIDADES</h3>
        <h4 class="mt-4 font-medium">28. Naturaleza del servicio prestado por BonoPay</h4>
        <p class="mt-1 text-muted">BonoPay presta exclusivamente un servicio tecnol\xF3gico destinado a facilitar el registro de Beneficiarios, la administraci\xF3n de la informaci\xF3n necesaria para el procesamiento de incentivos monetarios y la integraci\xF3n tecnol\xF3gica con terceros encargados de ejecutar las correspondientes instrucciones de pago.</p>
        <p class="mt-1 text-muted">En ning\xFAn caso BonoPay act\xFAa como pagador de los incentivos, entidad financiera, empresa administradora de fondos, fiduciario, mandatario para la administraci\xF3n de recursos de la Empresa o responsable del programa comercial implementado por este.</p>
        <p class="mt-1 text-muted">El Beneficiario reconoce expresamente que los incentivos monetarios son otorgados exclusivamente por la Empresa y que BonoPay interviene \xFAnicamente como proveedor de la infraestructura tecnol\xF3gica necesaria para facilitar su procesamiento.</p>
        <h4 class="mt-4 font-medium">29. Determinaci\xF3n de los incentivos</h4>
        <p class="mt-1 text-muted">La decisi\xF3n de otorgar un incentivo monetario corresponde exclusivamente a la Empresa.</p>
        <p class="mt-1 text-muted">En consecuencia, BonoPay no participa ni interviene en:</p>
        <p class="mt-1 text-muted">a) la determinaci\xF3n de los Beneficiarios;</p>
        <p class="mt-1 text-muted">b) la evaluaci\xF3n del cumplimiento de metas, condiciones o requisitos;</p>
        <p class="mt-1 text-muted">c) la determinaci\xF3n del monto de los incentivos;</p>
        <p class="mt-1 text-muted">d) la aprobaci\xF3n o rechazo de incentivos;</p>
        <p class="mt-1 text-muted">e) la modificaci\xF3n de los programas implementados por el Empresa;</p>
        <p class="mt-1 text-muted">f) la cancelaci\xF3n de incentivos.</p>
        <p class="mt-1 text-muted">Toda consulta relacionada con dichas materias deber\xE1 ser dirigida por el Beneficiario a la Empresa correspondiente.</p>
        <h4 class="mt-4 font-medium">30. Instrucciones de pago</h4>
        <p class="mt-1 text-muted">Una vez que la Empresa apruebe un incentivo, remitir\xE1 a BonoPay la correspondiente instrucci\xF3n de pago utilizando los mecanismos tecnol\xF3gicos habilitados para tal efecto.</p>
        <p class="mt-1 text-muted">Las instrucciones podr\xE1n contener, entre otra informaci\xF3n:</p>
        <ul class="mt-1 list-disc space-y-1 pl-5 text-muted">
          <li>identificaci\xF3n del Beneficiario;</li>
          <li>monto autorizado;</li>
          <li>concepto del incentivo;</li>
          <li>medio de pago;</li>
          <li>dem\xE1s informaci\xF3n necesaria para el procesamiento de la operaci\xF3n.</li>
        </ul>
        <p class="mt-1 text-muted">BonoPay procesar\xE1 dichas instrucciones conforme a los procedimientos tecnol\xF3gicos implementados para la prestaci\xF3n del servicio.</p>
        <h4 class="mt-4 font-medium">31. Transmisi\xF3n de instrucciones a procesadores de pago</h4>
        <p class="mt-1 text-muted">Recibida la instrucci\xF3n emitida por la Empresa, Motiva podr\xE1 transmitirla al procesador de pago, entidad financiera, operador de billetera m\xF3vil u otro proveedor tecnol\xF3gico que corresponda para la ejecuci\xF3n material de la operaci\xF3n.</p>
        <p class="mt-1 text-muted">Cuando resulte necesario para garantizar la interoperabilidad entre los sistemas participantes, Motiva podr\xE1 complementar, transformar o adaptar t\xE9cnicamente la informaci\xF3n recibida de la Empresa sin alterar el contenido sustancial de la instrucci\xF3n de pago.</p>
        <p class="mt-1 text-muted">Estas actividades constituyen exclusivamente tareas de procesamiento tecnol\xF3gico y no implican modificaci\xF3n de la decisi\xF3n adoptada por la Empresa respecto del incentivo.</p>
        <h4 class="mt-4 font-medium">32. Intervenci\xF3n de terceros</h4>
        <p class="mt-1 text-muted">El Beneficiario reconoce y acepta que la prestaci\xF3n del servicio puede requerir la intervenci\xF3n de terceros independientes, incluyendo, entre otros:</p>
        <ul class="mt-1 list-disc space-y-1 pl-5 text-muted">
          <li>procesadores de pago;</li>
          <li>entidades financieras;</li>
          <li>operadores de billeteras digitales;</li>
          <li>proveedores de servicios de autenticaci\xF3n;</li>
          <li>operadores de mensajer\xEDa;</li>
          <li>proveedores de infraestructura tecnol\xF3gica;</li>
          <li>proveedores de servicios en la nube;</li>
          <li>otros proveedores especializados que BonoPay incorpore para la adecuada prestaci\xF3n del servicio.</li>
        </ul>
        <p class="mt-1 text-muted">Cada uno de dichos terceros actuar\xE1 conforme a sus propios procedimientos operativos, est\xE1ndares de seguridad y condiciones de servicio.</p>
        <h4 class="mt-4 font-medium">33. Ejecuci\xF3n del pago</h4>
        <p class="mt-1 text-muted">La ejecuci\xF3n material de la transferencia de fondos ser\xE1 realizada exclusivamente por el procesador de pago, entidad financiera o proveedor que corresponda.</p>
        <p class="mt-1 text-muted">La obligaci\xF3n de BonoPay respecto de la instrucci\xF3n de pago se entender\xE1 cumplida cuando esta haya sido transmitida correctamente al tercero encargado de su ejecuci\xF3n, conforme a los procedimientos establecidos para la prestaci\xF3n del servicio.</p>
        <p class="mt-1 text-muted">La acreditaci\xF3n efectiva de los fondos depender\xE1 adicionalmente de los procesos internos de las entidades participantes en la cadena de pago.</p>
        <h4 class="mt-4 font-medium">34. Rechazo de operaciones</h4>
        <p class="mt-1 text-muted">Una operaci\xF3n podr\xE1 ser rechazada por causas atribuibles, entre otras, a:</p>
        <p class="mt-1 text-muted">a) inconsistencias en la informaci\xF3n registrada;</p>
        <p class="mt-1 text-muted">b) cuentas bancarias inexistentes;</p>
        <p class="mt-1 text-muted">c) cuentas bloqueadas;</p>
        <p class="mt-1 text-muted">d) cuentas cerradas;</p>
        <p class="mt-1 text-muted">e) CCI incorrecto;</p>
        <p class="mt-1 text-muted">f) billeteras m\xF3viles no habilitadas;</p>
        <p class="mt-1 text-muted">g) rechazo de la entidad financiera;</p>
        <p class="mt-1 text-muted">h) rechazo del procesador de pagos;</p>
        <p class="mt-1 text-muted">i) restricciones regulatorias;</p>
        <p class="mt-1 text-muted">j) validaciones antifraude;</p>
        <p class="mt-1 text-muted">k) errores en la informaci\xF3n proporcionada por el Empresa;</p>
        <p class="mt-1 text-muted">l) cualquier otra circunstancia ajena al control razonable de BonoPay.</p>
        <p class="mt-1 text-muted">La ocurrencia de cualquiera de dichos supuestos no implicar\xE1 incumplimiento contractual por parte de BonoPay.</p>
        <h4 class="mt-4 font-medium">35. Actualizaci\xF3n de informaci\xF3n antes del procesamiento</h4>
        <p class="mt-1 text-muted">El Beneficiario reconoce que \xFAnicamente ser\xE1 responsable de mantener actualizada su informaci\xF3n financiera antes de que la Empresa emita la correspondiente instrucci\xF3n de pago.</p>
        <p class="mt-1 text-muted">Una vez transmitida la instrucci\xF3n al procesador de pago, las modificaciones posteriores efectuadas por el Beneficiario no afectar\xE1n dicha operaci\xF3n, salvo que t\xE9cnicamente resulte posible y ello sea autorizado por la Empresa y por los terceros participantes en la ejecuci\xF3n del pago.</p>
        <h4 class="mt-4 font-medium">36. Confirmaci\xF3n del estado de la operaci\xF3n</h4>
        <p class="mt-1 text-muted">Una vez procesada la instrucci\xF3n correspondiente, Motiva podr\xE1 registrar el estado informado por el procesador de pago.</p>
        <p class="mt-1 text-muted">Entre otros, podr\xE1n registrarse estados tales como:</p>
        <ul class="mt-1 list-disc space-y-1 pl-5 text-muted">
          <li>En proceso;</li>
          <li>Enviado;</li>
          <li>Pagado;</li>
          <li>Rechazado;</li>
          <li>Pendiente de validaci\xF3n;</li>
          <li>Observado;</li>
          <li>Cancelado;</li>
          <li>otros estados operativos implementados por la Plataforma.</li>
        </ul>
        <p class="mt-1 text-muted">Dichos estados tendr\xE1n car\xE1cter meramente informativo y reflejar\xE1n la informaci\xF3n comunicada por el tercero encargado de la ejecuci\xF3n de la operaci\xF3n.</p>
        <h4 class="mt-4 font-medium">37. Limitaci\xF3n de responsabilidad respecto del procesamiento de pagos</h4>
        <p class="mt-1 text-muted">Sin perjuicio de las dem\xE1s limitaciones previstas en estos T\xE9rminos y Condiciones, BonoPay no ser\xE1 responsable por:</p>
        <p class="mt-1 text-muted">a) la decisi\xF3n del Empresa de otorgar, modificar o cancelar incentivos;</p>
        <p class="mt-1 text-muted">b) errores contenidos en las instrucciones remitidas por el Empresa;</p>
        <p class="mt-1 text-muted">c) la exactitud de la informaci\xF3n entregada por la Empresa para el procesamiento de los pagos;</p>
        <p class="mt-1 text-muted">d) demoras atribuibles a entidades financieras;</p>
        <p class="mt-1 text-muted">e) rechazos efectuados por procesadores de pago;</p>
        <p class="mt-1 text-muted">f) indisponibilidad de sistemas pertenecientes a terceros;</p>
        <p class="mt-1 text-muted">g) errores derivados de la informaci\xF3n registrada por el Beneficiario;</p>
        <p class="mt-1 text-muted">h) restricciones impuestas por autoridades competentes;</p>
        <p class="mt-1 text-muted">i) validaciones de prevenci\xF3n de fraude;</p>
        <p class="mt-1 text-muted">j) mantenimientos programados de terceros;</p>
        <p class="mt-1 text-muted">k) fallas en servicios de telecomunicaciones o Internet;</p>
        <p class="mt-1 text-muted">l) eventos de caso fortuito o fuerza mayor.</p>
        <p class="mt-1 text-muted">En consecuencia, la responsabilidad de BonoPay se limitar\xE1 exclusivamente al correcto funcionamiento de los procesos tecnol\xF3gicos que se encuentren razonablemente bajo su control.</p>
        <h4 class="mt-4 font-medium">38. Deber de colaboraci\xF3n</h4>
        <p class="mt-1 text-muted">Cuando una operaci\xF3n resulte observada, rechazada o requiera validaciones adicionales, el Beneficiario se compromete a colaborar razonablemente con BonoPay proporcionando la informaci\xF3n que resulte necesaria para la adecuada atenci\xF3n de la incidencia.</p>
        <p class="mt-1 text-muted">Motiva podr\xE1 coordinar con la Empresa, procesadores de pago o entidades financieras las gestiones necesarias para determinar el origen de la incidencia, sin que ello implique asumir responsabilidad respecto del resultado final de la operaci\xF3n.</p>
        <h4 class="mt-4 font-medium">39. Trazabilidad de las operaciones</h4>
        <p class="mt-1 text-muted">Con la finalidad de garantizar la transparencia, seguridad y adecuada gesti\xF3n de los incentivos, BonoPay mantendr\xE1 registros electr\xF3nicos de las operaciones procesadas a trav\xE9s de la Plataforma.</p>
        <p class="mt-1 text-muted">Dichos registros podr\xE1n comprender, entre otros:</p>
        <ul class="mt-1 list-disc space-y-1 pl-5 text-muted">
          <li>identificaci\xF3n de la instrucci\xF3n;</li>
          <li>fecha y hora de recepci\xF3n;</li>
          <li>fecha y hora de transmisi\xF3n;</li>
          <li>procesador utilizado;</li>
          <li>estados de la operaci\xF3n;</li>
          <li>registros de auditor\xEDa;</li>
          <li>validaciones de seguridad;</li>
          <li>eventos relevantes asociados al procesamiento.</li>
        </ul>
        <p class="mt-1 text-muted">La informaci\xF3n ser\xE1 conservada durante los plazos establecidos por la normativa aplicable o por las pol\xEDticas internas de conservaci\xF3n de BonoPay.</p>
        <h4 class="mt-4 font-medium">40. Ausencia de garant\xEDa respecto del otorgamiento de incentivos</h4>
        <p class="mt-1 text-muted">El uso de la Plataforma no genera derecho alguno a favor del Beneficiario para exigir el otorgamiento de incentivos monetarios.</p>
        <p class="mt-1 text-muted">La existencia de un registro activo en la Plataforma, la utilizaci\xF3n de esta o la recepci\xF3n de comunicaciones por parte de BonoPay no constituyen promesa, oferta ni garant\xEDa de pago.</p>
        <p class="mt-1 text-muted">El derecho del Beneficiario a recibir un incentivo depender\xE1 exclusivamente de la decisi\xF3n adoptada por la Empresa conforme a las reglas del programa correspondiente.</p>

        <h3 class="mt-8 text-[13px] font-semibold uppercase tracking-wide text-primary">CAP\xCDTULO V &mdash; SEGURIDAD DE LA PLATAFORMA, PREVENCI\xD3N DEL FRAUDE Y VALIDEZ DE LOS REGISTROS ELECTR\xD3NICOS</h3>
        <h4 class="mt-4 font-medium">41. Principios de seguridad de la Plataforma</h4>
        <p class="mt-1 text-muted">La seguridad constituye un elemento esencial para la adecuada prestaci\xF3n de los servicios ofrecidos por BonoPay.</p>
        <p class="mt-1 text-muted">En tal sentido, BonoPay procurar\xE1 operar la Plataforma conforme a principios de seguridad, confidencialidad, integridad, disponibilidad, trazabilidad, proporcionalidad, mejora continua y gesti\xF3n razonable de riesgos, implementando medidas t\xE9cnicas y organizativas acordes con la naturaleza del servicio y los riesgos identificados.</p>
        <p class="mt-1 text-muted">El Beneficiario reconoce que la seguridad de la Plataforma constituye una responsabilidad compartida entre BonoPay y los usuarios, por lo que se compromete a actuar diligentemente durante toda la utilizaci\xF3n del servicio.</p>
        <h4 class="mt-4 font-medium">42. Medidas de seguridad</h4>
        <p class="mt-1 text-muted">Con el objeto de proteger la Plataforma, los datos procesados y las operaciones realizadas, Motiva podr\xE1 implementar, modificar o sustituir, en cualquier momento, medidas de seguridad tales como:</p>
        <p class="mt-1 text-muted">a) autenticaci\xF3n multifactor;</p>
        <p class="mt-1 text-muted">b) c\xF3digos OTP;</p>
        <p class="mt-1 text-muted">c) verificaciones documentarias;</p>
        <p class="mt-1 text-muted">d) validaciones automatizadas;</p>
        <p class="mt-1 text-muted">e) controles de consistencia de informaci\xF3n;</p>
        <p class="mt-1 text-muted">f) an\xE1lisis de patrones de comportamiento;</p>
        <p class="mt-1 text-muted">g) monitoreo de operaciones;</p>
        <p class="mt-1 text-muted">h) mecanismos de detecci\xF3n de fraude;</p>
        <p class="mt-1 text-muted">i) controles de acceso;</p>
        <p class="mt-1 text-muted">j) cifrado de informaci\xF3n;</p>
        <p class="mt-1 text-muted">k) registros de auditor\xEDa;</p>
        <p class="mt-1 text-muted">l) otras medidas que resulten razonablemente necesarias para preservar la seguridad de la Plataforma.</p>
        <p class="mt-1 text-muted">La implementaci\xF3n de tales medidas no constituye garant\xEDa absoluta frente a incidentes de seguridad, fraude, ataques inform\xE1ticos u otros riesgos inherentes al entorno digital.</p>
        <h4 class="mt-4 font-medium">43. Obligaciones del Beneficiario en materia de seguridad</h4>
        <p class="mt-1 text-muted">El Beneficiario se obliga a adoptar medidas razonables para proteger el acceso a la Plataforma.</p>
        <p class="mt-1 text-muted">En particular, deber\xE1:</p>
        <p class="mt-1 text-muted">a) mantener bajo su exclusivo control el dispositivo utilizado para acceder a la Plataforma;</p>
        <p class="mt-1 text-muted">b) evitar compartir c\xF3digos OTP, enlaces de acceso o credenciales con terceros;</p>
        <p class="mt-1 text-muted">c) proteger sus dispositivos mediante mecanismos de seguridad apropiados;</p>
        <p class="mt-1 text-muted">d) abstenerse de acceder a la Plataforma utilizando equipos p\xFAblicos o redes cuya seguridad no pueda verificar razonablemente;</p>
        <p class="mt-1 text-muted">e) comunicar a BonoPay cualquier sospecha de acceso no autorizado, p\xE9rdida del dispositivo, robo de informaci\xF3n o cualquier incidente que pueda comprometer la seguridad de su cuenta;</p>
        <p class="mt-1 text-muted">f) seguir las instrucciones de seguridad que BonoPay comunique oportunamente.</p>
        <p class="mt-1 text-muted">El incumplimiento de estas obligaciones podr\xE1 ser considerado al evaluar la responsabilidad derivada de un incidente de seguridad.</p>
        <h4 class="mt-4 font-medium">44. Prevenci\xF3n del fraude y de la suplantaci\xF3n de identidad</h4>
        <p class="mt-1 text-muted">Motiva podr\xE1 implementar mecanismos destinados a prevenir, detectar, investigar y mitigar situaciones que razonablemente puedan constituir fraude, intento de fraude, suplantaci\xF3n de identidad, utilizaci\xF3n indebida de la Plataforma o cualquier otra conducta que comprometa la seguridad del servicio.</p>
        <p class="mt-1 text-muted">Para tales efectos, Motiva podr\xE1:</p>
        <p class="mt-1 text-muted">a) efectuar validaciones adicionales de identidad;</p>
        <p class="mt-1 text-muted">b) requerir documentaci\xF3n complementaria;</p>
        <p class="mt-1 text-muted">c) solicitar la actualizaci\xF3n de informaci\xF3n;</p>
        <p class="mt-1 text-muted">d) suspender temporalmente determinadas funcionalidades;</p>
        <p class="mt-1 text-muted">e) rechazar registros cuando existan inconsistencias relevantes;</p>
        <p class="mt-1 text-muted">f) restringir el acceso hasta concluir las verificaciones correspondientes;</p>
        <p class="mt-1 text-muted">g) comunicar los hechos a la Empresa cuando ello resulte necesario para proteger la integridad del programa de incentivos;</p>
        <p class="mt-1 text-muted">h) colaborar con las autoridades competentes cuando exista una obligaci\xF3n legal o un requerimiento v\xE1lido.</p>
        <p class="mt-1 text-muted">La adopci\xF3n de estas medidas tendr\xE1 car\xE1cter preventivo y no implicar\xE1 reconocimiento de responsabilidad por parte de BonoPay.</p>
        <h4 class="mt-4 font-medium">45. Monitoreo de operaciones</h4>
        <p class="mt-1 text-muted">Con el objeto de preservar la seguridad del servicio y prevenir actividades il\xEDcitas, Motiva podr\xE1 realizar monitoreos autom\xE1ticos o manuales de las operaciones efectuadas en la Plataforma.</p>
        <p class="mt-1 text-muted">Dichos monitoreos podr\xE1n considerar, entre otros elementos:</p>
        <ul class="mt-1 list-disc space-y-1 pl-5 text-muted">
          <li>frecuencia de acceso;</li>
          <li>cambios reiterados de informaci\xF3n;</li>
          <li>modificaciones de cuentas bancarias;</li>
          <li>intentos fallidos de autenticaci\xF3n;</li>
          <li>comportamientos at\xEDpicos;</li>
          <li>inconsistencias entre la informaci\xF3n registrada y la utilizada en las operaciones;</li>
          <li>otros indicadores razonablemente relacionados con la prevenci\xF3n del fraude.</li>
        </ul>
        <p class="mt-1 text-muted">El monitoreo se realizar\xE1 respetando la legislaci\xF3n aplicable en materia de protecci\xF3n de datos personales y las finalidades informadas al Beneficiario.</p>
        <h4 class="mt-4 font-medium">46. Incidentes de seguridad</h4>
        <p class="mt-1 text-muted">Cuando BonoPay detecte un incidente que pueda comprometer la seguridad de la Plataforma, podr\xE1 adoptar inmediatamente las medidas que resulten razonablemente necesarias para contener sus efectos, incluyendo, entre otras:</p>
        <p class="mt-1 text-muted">a) suspensi\xF3n temporal de accesos;</p>
        <p class="mt-1 text-muted">b) bloqueo preventivo de cuentas;</p>
        <p class="mt-1 text-muted">c) invalidaci\xF3n de sesiones activas;</p>
        <p class="mt-1 text-muted">d) requerimiento de nuevas autenticaciones;</p>
        <p class="mt-1 text-muted">e) restablecimiento de mecanismos de seguridad;</p>
        <p class="mt-1 text-muted">f) investigaci\xF3n de los hechos.</p>
        <p class="mt-1 text-muted">Siempre que ello resulte posible y no comprometa la eficacia de las medidas adoptadas o investigaciones en curso, BonoPay informar\xE1 al Beneficiario sobre la ocurrencia del incidente y las acciones que deba realizar.</p>
        <h4 class="mt-4 font-medium">47. Registros electr\xF3nicos</h4>
        <p class="mt-1 text-muted">BonoPay mantendr\xE1 registros electr\xF3nicos de las actuaciones realizadas a trav\xE9s de la Plataforma con la finalidad de garantizar la trazabilidad de las operaciones, atender reclamaciones, prevenir fraude, cumplir obligaciones legales y mejorar la seguridad del servicio.</p>
        <p class="mt-1 text-muted">Dichos registros podr\xE1n comprender, entre otros:</p>
        <p class="mt-1 text-muted">a) aceptaci\xF3n de los presentes T\xE9rminos y Condiciones;</p>
        <p class="mt-1 text-muted">b) aceptaci\xF3n de la Pol\xEDtica de Privacidad;</p>
        <p class="mt-1 text-muted">c) autenticaciones mediante OTP;</p>
        <p class="mt-1 text-muted">d) fecha y hora de las operaciones;</p>
        <p class="mt-1 text-muted">e) direcciones IP;</p>
        <p class="mt-1 text-muted">f) registros de acceso;</p>
        <p class="mt-1 text-muted">g) historial de modificaciones de informaci\xF3n;</p>
        <p class="mt-1 text-muted">h) eventos relevantes asociados a las operaciones;</p>
        <p class="mt-1 text-muted">i) registros de auditor\xEDa;</p>
        <p class="mt-1 text-muted">j) dem\xE1s evidencias t\xE9cnicas generadas por la Plataforma.</p>
        <h4 class="mt-4 font-medium">48. Valor probatorio de los registros electr\xF3nicos</h4>
        <p class="mt-1 text-muted">El Beneficiario reconoce y acepta que los registros electr\xF3nicos generados por la Plataforma constituyen evidencia de las actuaciones realizadas a trav\xE9s de ella.</p>
        <p class="mt-1 text-muted">Sin perjuicio del derecho de las partes a aportar otros medios de prueba conforme a la legislaci\xF3n aplicable, los registros electr\xF3nicos conservados por Motiva podr\xE1n ser utilizados para acreditar, entre otros aspectos:</p>
        <p class="mt-1 text-muted">a) el acceso a la Plataforma;</p>
        <p class="mt-1 text-muted">b) la aceptaci\xF3n de los presentes T\xE9rminos y Condiciones;</p>
        <p class="mt-1 text-muted">c) la aceptaci\xF3n de la Pol\xEDtica de Privacidad;</p>
        <p class="mt-1 text-muted">d) la autenticaci\xF3n mediante c\xF3digos OTP;</p>
        <p class="mt-1 text-muted">e) la actualizaci\xF3n de informaci\xF3n personal o financiera;</p>
        <p class="mt-1 text-muted">f) las comunicaciones remitidas por BonoPay;</p>
        <p class="mt-1 text-muted">g) el estado de las operaciones procesadas.</p>
        <p class="mt-1 text-muted">La valoraci\xF3n de dichos registros corresponder\xE1, en su caso, a la autoridad administrativa o judicial competente conforme a las reglas aplicables sobre prueba y contrataci\xF3n electr\xF3nica.</p>
        <h4 class="mt-4 font-medium">49. Conservaci\xF3n de la evidencia electr\xF3nica</h4>
        <p class="mt-1 text-muted">Los registros electr\xF3nicos ser\xE1n conservados durante el tiempo que resulte necesario para cumplir las finalidades descritas en estos T\xE9rminos y Condiciones y durante los plazos exigidos por la legislaci\xF3n aplicable, as\xED como por necesidades razonables de auditor\xEDa, gesti\xF3n de riesgos, atenci\xF3n de controversias, prevenci\xF3n del fraude o defensa de los derechos e intereses leg\xEDtimos de BonoPay.</p>
        <p class="mt-1 text-muted">La conservaci\xF3n de dichos registros podr\xE1 realizarse mediante infraestructura tecnol\xF3gica propia o de proveedores especializados, siempre que se adopten medidas razonables para preservar su integridad, disponibilidad y confidencialidad.</p>
        <h4 class="mt-4 font-medium">50. Cooperaci\xF3n del Beneficiario</h4>
        <p class="mt-1 text-muted">El Beneficiario se compromete a colaborar de buena fe en cualquier procedimiento de verificaci\xF3n o investigaci\xF3n relacionado con incidentes de seguridad, intentos de fraude, accesos no autorizados o cualquier situaci\xF3n que pueda comprometer el adecuado funcionamiento de la Plataforma.</p>
        <p class="mt-1 text-muted">La negativa injustificada a colaborar podr\xE1 ser considerada por BonoPay al evaluar la continuidad del acceso a la Plataforma, sin perjuicio de los derechos que asistan al Beneficiario conforme a la legislaci\xF3n aplicable.</p>

        <h3 class="mt-8 text-[13px] font-semibold uppercase tracking-wide text-primary">CAP\xCDTULO VI &mdash; TRATAMIENTO DE DATOS PERSONALES</h3>
        <h4 class="mt-4 font-medium">Art\xEDculo 51.- Responsable del tratamiento</h4>
        <p class="mt-1 text-muted">Motiva Soluciones S.A.C., titular de la plataforma BonoPay, es el responsable del tratamiento de los datos personales recopilados y tratados con ocasi\xF3n del registro, acceso y utilizaci\xF3n de la Plataforma.</p>
        <p class="mt-1 text-muted">El tratamiento de dichos datos se realizar\xE1 conforme a la Ley N\xB0 29733, su Reglamento y la Pol\xEDtica de Privacidad de BonoPay.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 52.- Pol\xEDtica de Privacidad</h4>
        <p class="mt-1 text-muted">La Pol\xEDtica de Privacidad forma parte integrante de los presentes T\xE9rminos y Condiciones.</p>
        <p class="mt-1 text-muted">En ella se describen, entre otros aspectos:</p>
        <ul class="mt-1 list-disc space-y-1 pl-5 text-muted">
          <li>las categor\xEDas de datos personales tratados;</li>
          <li>las finalidades del tratamiento;</li>
          <li>las bases legales aplicables;</li>
          <li>las comunicaciones y transferencias de datos;</li>
          <li>las medidas de seguridad implementadas;</li>
          <li>los derechos de los titulares;</li>
          <li>los per\xEDodos de conservaci\xF3n;</li>
          <li>los canales para ejercer derechos.</li>
        </ul>
        <p class="mt-1 text-muted">El Beneficiario declara haber tenido acceso a dicha Pol\xEDtica antes de aceptar los presentes T\xE9rminos y Condiciones.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 53.- Finalidades del tratamiento</h4>
        <p class="mt-1 text-muted">Motiva tratar\xE1 los datos personales del Beneficiario con la finalidad de:</p>
        <p class="mt-1 text-muted">a) registrar al Beneficiario en la Plataforma;</p>
        <p class="mt-1 text-muted">b) validar su identidad;</p>
        <p class="mt-1 text-muted">c) autenticar el acceso a la Plataforma;</p>
        <p class="mt-1 text-muted">d) administrar la cuenta del Beneficiario;</p>
        <p class="mt-1 text-muted">e) gestionar la entrega de incentivos;</p>
        <p class="mt-1 text-muted">f) procesar operaciones relacionadas con la prestaci\xF3n de los Servicios;</p>
        <p class="mt-1 text-muted">g) prevenir fraudes y proteger la seguridad de la Plataforma;</p>
        <p class="mt-1 text-muted">h) cumplir obligaciones legales;</p>
        <p class="mt-1 text-muted">i) atender consultas, solicitudes y reclamos;</p>
        <p class="mt-1 text-muted">j) ejercer y defender los derechos e intereses leg\xEDtimos de Motiva.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 54.- Comunicaci\xF3n de datos</h4>
        <p class="mt-1 text-muted">Motiva podr\xE1 comunicar datos personales a proveedores tecnol\xF3gicos, procesadores de pago, entidades financieras, empresas clientes y autoridades competentes cuando ello resulte necesario para la prestaci\xF3n de los Servicios o para el cumplimiento de obligaciones legales.</p>
        <p class="mt-1 text-muted">Toda comunicaci\xF3n de datos se realizar\xE1 conforme a la Pol\xEDtica de Privacidad y a la legislaci\xF3n aplicable.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 55.- Derechos del Beneficiario</h4>
        <p class="mt-1 text-muted">El Beneficiario podr\xE1 ejercer los derechos que le reconoce la legislaci\xF3n sobre protecci\xF3n de datos personales utilizando los canales indicados en la Pol\xEDtica de Privacidad.</p>
        <p class="mt-1 text-muted">Motiva atender\xE1 dichas solicitudes conforme a los procedimientos y plazos previstos por la legislaci\xF3n vigente.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 56.- Conservaci\xF3n de los datos personales</h4>
        <p class="mt-1 text-muted">Los datos personales ser\xE1n conservados durante el tiempo necesario para cumplir las finalidades del tratamiento, atender obligaciones legales y ejercer o defender derechos, conforme a los criterios establecidos en la Pol\xEDtica de Privacidad.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 57.- Modificaciones</h4>
        <p class="mt-1 text-muted">Motiva podr\xE1 actualizar la Pol\xEDtica de Privacidad cuando ello resulte necesario por cambios normativos, tecnol\xF3gicos, operativos o de negocio.</p>
        <p class="mt-1 text-muted">Cuando corresponda, dichas modificaciones ser\xE1n comunicadas al Beneficiario mediante los canales habilitados por la Plataforma.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 58.- Prevalencia</h4>
        <p class="mt-1 text-muted">En caso de cualquier discrepancia entre los presentes T\xE9rminos y Condiciones y la Pol\xEDtica de Privacidad respecto del tratamiento de datos personales, prevalecer\xE1n las disposiciones contenidas en la Pol\xEDtica de Privacidad.</p>

        <h3 class="mt-8 text-[13px] font-semibold uppercase tracking-wide text-primary">CAP\xCDTULO VII &mdash; PROPIEDAD INTELECTUAL Y USO DE LA PLATAFORMA</h3>
        <h4 class="mt-4 font-medium">61. Titularidad de la Plataforma</h4>
        <p class="mt-1 text-muted">La Plataforma BonoPay, incluyendo su software, c\xF3digo fuente, c\xF3digo objeto, arquitectura, interfaces, dise\xF1os, estructura, funcionalidades, bases de datos, documentaci\xF3n t\xE9cnica, algoritmos, procesos, modelos operativos, APIs, integraciones, nombres comerciales, marcas, logotipos, elementos gr\xE1ficos, contenidos y cualquier otro componente que la integre, constituye propiedad exclusiva de BonoPay o de los terceros que hayan autorizado leg\xEDtimamente su utilizaci\xF3n.</p>
        <p class="mt-1 text-muted">Ninguna disposici\xF3n contenida en los presentes T\xE9rminos y Condiciones podr\xE1 interpretarse como una cesi\xF3n, transferencia o licencia distinta de la expresamente otorgada para el uso de la Plataforma.</p>
        <h4 class="mt-4 font-medium">62. Licencia de uso</h4>
        <p class="mt-1 text-muted">BonoPay concede al Beneficiario una licencia de uso personal, limitada, revocable, no exclusiva, intransferible y no sublicenciable para acceder y utilizar la Plataforma \xFAnicamente durante la vigencia de la relaci\xF3n regulada por estos T\xE9rminos y Condiciones y exclusivamente para los fines previstos en ellos.</p>
        <p class="mt-1 text-muted">La licencia conferida no otorga derecho alguno sobre la propiedad intelectual de BonoPay ni autoriza el desarrollo de actividades distintas del uso ordinario de la Plataforma.</p>
        <h4 class="mt-4 font-medium">63. Restricciones de uso</h4>
        <p class="mt-1 text-muted">El Beneficiario se obliga a no realizar, directa o indirectamente, cualquiera de las siguientes conductas:</p>
        <p class="mt-1 text-muted">a) copiar, reproducir o distribuir la Plataforma o cualquiera de sus componentes;</p>
        <p class="mt-1 text-muted">b) modificar, adaptar, traducir o crear obras derivadas de la Plataforma;</p>
        <p class="mt-1 text-muted">c) descompilar, desensamblar, realizar ingenier\xEDa inversa o intentar obtener el c\xF3digo fuente, salvo en los casos expresamente permitidos por la legislaci\xF3n aplicable;</p>
        <p class="mt-1 text-muted">d) eliminar, alterar u ocultar avisos de propiedad intelectual o medidas tecnol\xF3gicas de protecci\xF3n;</p>
        <p class="mt-1 text-muted">e) utilizar herramientas automatizadas para extraer informaci\xF3n de la Plataforma;</p>
        <p class="mt-1 text-muted">f) acceder a interfaces, APIs o funcionalidades no destinadas al Beneficiario;</p>
        <p class="mt-1 text-muted">g) utilizar la Plataforma para desarrollar productos o servicios que compitan con BonoPay;</p>
        <p class="mt-1 text-muted">h) explotar comercialmente la Plataforma o cualquiera de sus componentes sin autorizaci\xF3n previa y por escrito de BonoPay.</p>
        <h4 class="mt-4 font-medium">64. Marcas y signos distintivos</h4>
        <p class="mt-1 text-muted">Las marcas, nombres comerciales, logotipos, dominios y dem\xE1s signos distintivos utilizados en la Plataforma pertenecen a BonoPay o a sus respectivos titulares.</p>
        <p class="mt-1 text-muted">Su utilizaci\xF3n por parte del Beneficiario no le confiere derecho alguno sobre dichos signos distintivos.</p>
        <p class="mt-1 text-muted">Queda prohibido utilizar las marcas o signos distintivos de BonoPay de manera que pueda generar confusi\xF3n respecto de la existencia de una relaci\xF3n comercial distinta de la regulada en estos T\xE9rminos y Condiciones.</p>
        <h4 class="mt-4 font-medium">65. Retroalimentaci\xF3n y sugerencias</h4>
        <p class="mt-1 text-muted">Las observaciones, recomendaciones, comentarios o sugerencias que el Beneficiario formule respecto del funcionamiento de la Plataforma podr\xE1n ser utilizados por BonoPay para mejorar sus servicios.</p>
        <p class="mt-1 text-muted">Salvo pacto expreso en contrario, el env\xEDo de tales comentarios no generar\xE1 derecho a compensaci\xF3n econ\xF3mica alguna ni implicar\xE1 obligaci\xF3n de BonoPay de implementar las sugerencias recibidas.</p>
        <p class="mt-1 text-muted">El Beneficiario declara que cualquier sugerencia proporcionada podr\xE1 ser utilizada por BonoPay sin restricciones, en la medida permitida por la legislaci\xF3n aplicable y sin afectar los derechos morales que pudieran corresponder cuando estos sean irrenunciables.</p>
        <h4 class="mt-4 font-medium">66. Integraciones tecnol\xF3gicas</h4>
        <p class="mt-1 text-muted">Motiva podr\xE1 incorporar nuevas funcionalidades, interfaces de programaci\xF3n (API), integraciones con terceros, mecanismos de autenticaci\xF3n, herramientas de interoperabilidad, servicios en la nube, billeteras digitales, entidades financieras u otras soluciones tecnol\xF3gicas destinadas a mejorar la prestaci\xF3n del servicio.</p>
        <p class="mt-1 text-muted">La incorporaci\xF3n, sustituci\xF3n o eliminaci\xF3n de dichas integraciones no alterar\xE1 la naturaleza jur\xEDdica de los Servicios ni generar\xE1 derecho alguno a favor del Beneficiario para exigir la permanencia de una determinada funcionalidad o integraci\xF3n tecnol\xF3gica.</p>
        <h4 class="mt-4 font-medium">67. Actualizaciones de la Plataforma</h4>
        <p class="mt-1 text-muted">Motiva podr\xE1 realizar actualizaciones, mejoras, modificaciones, correcciones, mantenimientos, cambios de arquitectura, migraciones tecnol\xF3gicas o cualquier otra intervenci\xF3n destinada a optimizar la seguridad, estabilidad, interoperabilidad o funcionalidad de la Plataforma.</p>
        <p class="mt-1 text-muted">Cuando ello resulte razonablemente posible, BonoPay procurar\xE1 ejecutar dichas actividades minimizando las afectaciones a los usuarios.</p>
        <p class="mt-1 text-muted">Las actualizaciones realizadas no otorgar\xE1n derecho a compensaci\xF3n alguna, salvo que la legislaci\xF3n aplicable disponga expresamente lo contrario.</p>
        <h4 class="mt-4 font-medium">68. Protecci\xF3n de los activos tecnol\xF3gicos</h4>
        <p class="mt-1 text-muted">El Beneficiario reconoce que la Plataforma constituye un activo tecnol\xF3gico de alto valor y se obliga a abstenerse de ejecutar cualquier conducta que pueda afectar su funcionamiento, disponibilidad, integridad, confidencialidad o seguridad.</p>
        <p class="mt-1 text-muted">En caso de detectarse actividades que razonablemente puedan comprometer los activos tecnol\xF3gicos de BonoPay, esta podr\xE1 adoptar inmediatamente las medidas de protecci\xF3n previstas en los presentes T\xE9rminos y Condiciones, sin perjuicio de las acciones civiles, administrativas o penales que correspondan.</p>
        <h4 class="mt-4 font-medium">69. Reserva de derechos</h4>
        <p class="mt-1 text-muted">Todos los derechos que no hayan sido expresamente concedidos al Beneficiario mediante estos T\xE9rminos y Condiciones se entienden reservados a favor de BonoPay o de sus respectivos titulares.</p>
        <p class="mt-1 text-muted">La falta de ejercicio inmediato de cualquier derecho por parte de BonoPay no constituir\xE1 renuncia a su ejercicio futuro.</p>

        <h3 class="mt-8 text-[13px] font-semibold uppercase tracking-wide text-primary">CAP\xCDTULO VIII &mdash; DISPONIBILIDAD DE LA PLATAFORMA, CONTINUIDAD OPERATIVA Y EVOLUCI\xD3N TECNOL\xD3GICA</h3>
        <h4 class="mt-4 font-medium">70. Disponibilidad de la Plataforma</h4>
        <p class="mt-1 text-muted">BonoPay realizar\xE1 esfuerzos comercialmente razonables para mantener la disponibilidad, estabilidad y funcionamiento de la Plataforma durante la vigencia de la relaci\xF3n contractual.</p>
        <p class="mt-1 text-muted">No obstante, el Beneficiario reconoce que, por la naturaleza de los servicios tecnol\xF3gicos, la disponibilidad absoluta, permanente e ininterrumpida no puede garantizarse.</p>
        <p class="mt-1 text-muted">En consecuencia, podr\xE1n producirse interrupciones temporales derivadas de mantenimientos, actualizaciones, incidencias t\xE9cnicas, fallas de infraestructura, eventos de ciberseguridad o cualquier otra circunstancia razonablemente necesaria para preservar la continuidad y seguridad del servicio.</p>
        <h4 class="mt-4 font-medium">71. Mantenimiento de la Plataforma</h4>
        <p class="mt-1 text-muted">Motiva podr\xE1 realizar mantenimientos preventivos, correctivos, evolutivos o de emergencia cuando ello resulte necesario para:</p>
        <p class="mt-1 text-muted">a) corregir errores;</p>
        <p class="mt-1 text-muted">b) mejorar el rendimiento;</p>
        <p class="mt-1 text-muted">c) implementar nuevas funcionalidades;</p>
        <p class="mt-1 text-muted">d) reforzar la seguridad;</p>
        <p class="mt-1 text-muted">e) actualizar componentes tecnol\xF3gicos;</p>
        <p class="mt-1 text-muted">f) cumplir obligaciones regulatorias;</p>
        <p class="mt-1 text-muted">g) preservar la continuidad del servicio.</p>
        <p class="mt-1 text-muted">Siempre que resulte razonablemente posible, BonoPay procurar\xE1 programar los mantenimientos de manera que generen la menor afectaci\xF3n posible para los usuarios.</p>
        <h4 class="mt-4 font-medium">72. Actualizaciones tecnol\xF3gicas</h4>
        <p class="mt-1 text-muted">Con el objeto de mejorar continuamente la Plataforma, Motiva podr\xE1 introducir modificaciones relacionadas con:</p>
        <ul class="mt-1 list-disc space-y-1 pl-5 text-muted">
          <li>nuevas funcionalidades;</li>
          <li>mejoras en la experiencia del usuario;</li>
          <li>nuevos mecanismos de autenticaci\xF3n;</li>
          <li>nuevas interfaces de programaci\xF3n (API);</li>
          <li>integraci\xF3n con nuevos procesadores de pago;</li>
          <li>integraci\xF3n con nuevas entidades financieras;</li>
          <li>nuevos mecanismos de validaci\xF3n;</li>
          <li>automatizaci\xF3n de procesos;</li>
          <li>mejoras de seguridad;</li>
          <li>cualquier otra evoluci\xF3n tecnol\xF3gica compatible con la naturaleza de los Servicios.</li>
        </ul>
        <p class="mt-1 text-muted">La incorporaci\xF3n de dichas mejoras no implicar\xE1 modificaci\xF3n de la naturaleza jur\xEDdica del servicio prestado por BonoPay.</p>
        <h4 class="mt-4 font-medium">73. Dependencia de servicios de terceros</h4>
        <p class="mt-1 text-muted">El Beneficiario reconoce que la adecuada prestaci\xF3n de los Servicios puede depender de la disponibilidad de servicios proporcionados por terceros independientes.</p>
        <p class="mt-1 text-muted">Entre ellos podr\xE1n encontrarse:</p>
        <p class="mt-1 text-muted">a) operadores de telecomunicaciones;</p>
        <p class="mt-1 text-muted">b) proveedores de Internet;</p>
        <p class="mt-1 text-muted">c) servicios de mensajer\xEDa electr\xF3nica;</p>
        <p class="mt-1 text-muted">d) WhatsApp u otros canales de comunicaci\xF3n;</p>
        <p class="mt-1 text-muted">e) proveedores de autenticaci\xF3n;</p>
        <p class="mt-1 text-muted">f) procesadores de pago;</p>
        <p class="mt-1 text-muted">g) entidades financieras;</p>
        <p class="mt-1 text-muted">h) proveedores de infraestructura en la nube;</p>
        <p class="mt-1 text-muted">i) servicios de alojamiento tecnol\xF3gico;</p>
        <p class="mt-1 text-muted">j) otros proveedores especializados.</p>
        <p class="mt-1 text-muted">BonoPay no controla la disponibilidad operativa de dichos terceros.</p>
        <h4 class="mt-4 font-medium">74. Interrupciones ajenas al control de BonoPay</h4>
        <p class="mt-1 text-muted">BonoPay no ser\xE1 responsable por interrupciones, retrasos o limitaciones en la prestaci\xF3n del servicio cuando estos deriven, entre otros, de:</p>
        <p class="mt-1 text-muted">a) fallas en servicios de telecomunicaciones;</p>
        <p class="mt-1 text-muted">b) indisponibilidad de Internet;</p>
        <p class="mt-1 text-muted">c) interrupciones de energ\xEDa el\xE9ctrica;</p>
        <p class="mt-1 text-muted">d) indisponibilidad de servicios de mensajer\xEDa;</p>
        <p class="mt-1 text-muted">e) fallas de procesadores de pago;</p>
        <p class="mt-1 text-muted">f) indisponibilidad de entidades financieras;</p>
        <p class="mt-1 text-muted">g) incidentes de ciberseguridad atribuibles a terceros;</p>
        <p class="mt-1 text-muted">h) decisiones regulatorias;</p>
        <p class="mt-1 text-muted">i) medidas adoptadas por autoridades competentes;</p>
        <p class="mt-1 text-muted">j) cualquier otra circunstancia razonablemente ajena al control de BonoPay.</p>
        <h4 class="mt-4 font-medium">75. Continuidad operativa</h4>
        <p class="mt-1 text-muted">BonoPay procurar\xE1 adoptar medidas razonables destinadas a favorecer la continuidad de los Servicios frente a incidentes tecnol\xF3gicos.</p>
        <p class="mt-1 text-muted">Entre dichas medidas podr\xE1n incluirse:</p>
        <ul class="mt-1 list-disc space-y-1 pl-5 text-muted">
          <li>mecanismos de respaldo;</li>
          <li>redundancia tecnol\xF3gica;</li>
          <li>monitoreo de infraestructura;</li>
          <li>planes de recuperaci\xF3n;</li>
          <li>procedimientos internos de gesti\xF3n de incidentes;</li>
          <li>controles destinados a minimizar interrupciones.</li>
        </ul>
        <p class="mt-1 text-muted">La implementaci\xF3n de tales medidas no implica garantizar la inexistencia absoluta de interrupciones o contingencias.</p>
        <h4 class="mt-4 font-medium">76. Suspensi\xF3n temporal del servicio</h4>
        <p class="mt-1 text-muted">Motiva podr\xE1 suspender temporalmente total o parcialmente la disponibilidad de la Plataforma cuando ello resulte razonablemente necesario para:</p>
        <p class="mt-1 text-muted">a) preservar la seguridad del servicio;</p>
        <p class="mt-1 text-muted">b) ejecutar mantenimientos urgentes;</p>
        <p class="mt-1 text-muted">c) atender incidentes tecnol\xF3gicos;</p>
        <p class="mt-1 text-muted">d) implementar medidas de protecci\xF3n frente a amenazas de seguridad;</p>
        <p class="mt-1 text-muted">e) cumplir requerimientos de autoridades competentes;</p>
        <p class="mt-1 text-muted">f) proteger la integridad de los datos procesados.</p>
        <p class="mt-1 text-muted">Cuando las circunstancias lo permitan, BonoPay procurar\xE1 informar previamente a los usuarios respecto de dichas suspensiones.</p>
        <h4 class="mt-4 font-medium">77. Evoluci\xF3n de la Plataforma</h4>
        <p class="mt-1 text-muted">El Beneficiario reconoce que la Plataforma constituye un servicio tecnol\xF3gico en permanente evoluci\xF3n.</p>
        <p class="mt-1 text-muted">En consecuencia, Motiva podr\xE1 modificar la arquitectura tecnol\xF3gica, los procesos internos, los mecanismos de autenticaci\xF3n, las interfaces de usuario, los procesos de integraci\xF3n con terceros y dem\xE1s componentes del servicio cuando ello resulte conveniente para mejorar su funcionamiento o adaptarlo a nuevas necesidades operativas, tecnol\xF3gicas o regulatorias.</p>
        <p class="mt-1 text-muted">Dichas modificaciones no constituir\xE1n incumplimiento contractual siempre que no desnaturalicen el objeto principal de los Servicios.</p>
        <h4 class="mt-4 font-medium">78. Ausencia de garant\xEDa de disponibilidad absoluta</h4>
        <p class="mt-1 text-muted">Salvo disposici\xF3n legal imperativa en contrario, BonoPay no garantiza:</p>
        <p class="mt-1 text-muted">a) disponibilidad continua e ininterrumpida de la Plataforma;</p>
        <p class="mt-1 text-muted">b) ausencia absoluta de errores;</p>
        <p class="mt-1 text-muted">c) inexistencia de interrupciones;</p>
        <p class="mt-1 text-muted">d) compatibilidad con cualquier dispositivo o software;</p>
        <p class="mt-1 text-muted">e) disponibilidad permanente de servicios proporcionados por terceros.</p>
        <p class="mt-1 text-muted">No obstante, BonoPay actuar\xE1 con la diligencia razonablemente exigible para restablecer el funcionamiento de la Plataforma cuando se produzcan incidencias bajo su control.</p>
        <h4 class="mt-4 font-medium">79. Mejoras continuas</h4>
        <p class="mt-1 text-muted">El Beneficiario reconoce que la incorporaci\xF3n permanente de mejoras constituye una caracter\xEDstica esencial de los Servicios prestados por BonoPay.</p>
        <p class="mt-1 text-muted">En consecuencia, las modificaciones tecnol\xF3gicas destinadas a incrementar la seguridad, eficiencia, interoperabilidad, automatizaci\xF3n o funcionalidad de la Plataforma no conferir\xE1n derecho alguno a mantener versiones anteriores ni generar\xE1n compensaci\xF3n econ\xF3mica a favor del Beneficiario.</p>

        <h3 class="mt-8 text-[13px] font-semibold uppercase tracking-wide text-primary">CAP\xCDTULO IX &mdash; R\xC9GIMEN DE RESPONSABILIDAD, DISTRIBUCI\xD3N DE RIESGOS Y LIMITACIONES DE RESPONSABILIDAD</h3>
        <h4 class="mt-4 font-medium">80. Principios generales de responsabilidad</h4>
        <p class="mt-1 text-muted">Cada una de las partes que interviene en la operaci\xF3n de la Plataforma responder\xE1 exclusivamente por los actos, omisiones y obligaciones que le correspondan conforme a la legislaci\xF3n aplicable, a los presentes T\xE9rminos y Condiciones y a la naturaleza de su participaci\xF3n en el servicio.</p>
        <p class="mt-1 text-muted">El Beneficiario reconoce que la operaci\xF3n de la Plataforma comprende la intervenci\xF3n coordinada de diversos sujetos independientes, entre ellos el Empresa, BonoPay, procesadores de pago, entidades financieras y otros proveedores tecnol\xF3gicos, cada uno con funciones y responsabilidades propias.</p>
        <p class="mt-1 text-muted">En consecuencia, la eventual responsabilidad de BonoPay deber\xE1 analizarse considerando \xFAnicamente aquellas actuaciones que se encuentren razonablemente bajo su control y dentro del alcance de los Servicios que presta.</p>
        <h4 class="mt-4 font-medium">81. Responsabilidad del Beneficiario</h4>
        <p class="mt-1 text-muted">El Beneficiario ser\xE1 responsable de:</p>
        <p class="mt-1 text-muted">a) la veracidad, integridad y actualizaci\xF3n de la informaci\xF3n registrada en la Plataforma;</p>
        <p class="mt-1 text-muted">b) la custodia de su dispositivo m\xF3vil, n\xFAmero telef\xF3nico, correo electr\xF3nico y dem\xE1s mecanismos utilizados para acceder a la Plataforma;</p>
        <p class="mt-1 text-muted">c) la confidencialidad de los c\xF3digos OTP y dem\xE1s mecanismos de autenticaci\xF3n;</p>
        <p class="mt-1 text-muted">d) las operaciones realizadas utilizando sus credenciales o mecanismos de autenticaci\xF3n, salvo que demuestre que fueron consecuencia de una vulneraci\xF3n atribuible a BonoPay;</p>
        <p class="mt-1 text-muted">e) las consecuencias derivadas del registro de informaci\xF3n bancaria o financiera incorrecta, incompleta, desactualizada o inconsistente;</p>
        <p class="mt-1 text-muted">f) cualquier perjuicio ocasionado por el incumplimiento de las obligaciones asumidas en estos T\xE9rminos y Condiciones.</p>
        <h4 class="mt-4 font-medium">82. Responsabilidad de la Empresa</h4>
        <p class="mt-1 text-muted">El Beneficiario reconoce que corresponde exclusivamente a la Empresa:</p>
        <p class="mt-1 text-muted">a) determinar los criterios de elegibilidad para recibir incentivos;</p>
        <p class="mt-1 text-muted">b) seleccionar a los Beneficiarios;</p>
        <p class="mt-1 text-muted">c) definir el monto de los incentivos;</p>
        <p class="mt-1 text-muted">d) aprobar, modificar, suspender o cancelar incentivos;</p>
        <p class="mt-1 text-muted">e) proporcionar a BonoPay la informaci\xF3n inicial necesaria para la incorporaci\xF3n del Beneficiario;</p>
        <p class="mt-1 text-muted">f) contar con las autorizaciones, consentimientos, bases legales u otros mecanismos habilitantes exigidos para comunicar dicha informaci\xF3n a BonoPay;</p>
        <p class="mt-1 text-muted">g) emitir las instrucciones de pago que correspondan.</p>
        <p class="mt-1 text-muted">En consecuencia, BonoPay no responder\xE1 por decisiones adoptadas exclusivamente por la Empresa en el ejercicio de dichas facultades.</p>
        <h4 class="mt-4 font-medium">83. Responsabilidad de BonoPay</h4>
        <p class="mt-1 text-muted">BonoPay responder\xE1 por el adecuado funcionamiento de los procesos tecnol\xF3gicos que razonablemente se encuentren bajo su control y que resulten necesarios para la prestaci\xF3n de los Servicios, actuando con la diligencia exigible conforme a la naturaleza de una plataforma tecnol\xF3gica.</p>
        <p class="mt-1 text-muted">Ello comprende, entre otros aspectos:</p>
        <p class="mt-1 text-muted">a) la administraci\xF3n de la Plataforma;</p>
        <p class="mt-1 text-muted">b) la gesti\xF3n del proceso de registro;</p>
        <p class="mt-1 text-muted">c) la autenticaci\xF3n de usuarios;</p>
        <p class="mt-1 text-muted">d) la transmisi\xF3n de instrucciones de pago conforme a la informaci\xF3n recibida del Empresa;</p>
        <p class="mt-1 text-muted">e) la conservaci\xF3n de registros electr\xF3nicos;</p>
        <p class="mt-1 text-muted">f) la implementaci\xF3n de medidas razonables de seguridad.</p>
        <p class="mt-1 text-muted">La responsabilidad de BonoPay no comprender\xE1 actuaciones, decisiones o eventos que correspondan exclusivamente a la Empresa, a los procesadores de pago, a las entidades financieras u otros terceros independientes.</p>
        <h4 class="mt-4 font-medium">84. Responsabilidad de terceros</h4>
        <p class="mt-1 text-muted">Los procesadores de pago, entidades financieras, operadores de billeteras m\xF3viles, proveedores de infraestructura tecnol\xF3gica, operadores de telecomunicaciones y dem\xE1s terceros que participen en la prestaci\xF3n del servicio actuar\xE1n bajo su propia responsabilidad.</p>
        <p class="mt-1 text-muted">La intervenci\xF3n de dichos terceros no implica la existencia de representaci\xF3n, mandato, sociedad, agencia ni relaci\xF3n laboral con BonoPay.</p>
        <p class="mt-1 text-muted">Cada tercero ser\xE1 responsable exclusivamente por las obligaciones derivadas de los servicios que presta.</p>
        <h4 class="mt-4 font-medium">85. Circunstancias ajenas al control de BonoPay</h4>
        <p class="mt-1 text-muted">BonoPay no ser\xE1 responsable por perjuicios derivados de circunstancias que razonablemente escapen a su control, incluyendo, entre otras:</p>
        <p class="mt-1 text-muted">a) errores en la informaci\xF3n proporcionada por la Empresa;</p>
        <p class="mt-1 text-muted">b) errores en la informaci\xF3n registrada por el Beneficiario;</p>
        <p class="mt-1 text-muted">c) rechazo de operaciones por entidades financieras o procesadores de pago;</p>
        <p class="mt-1 text-muted">d) indisponibilidad de redes de telecomunicaciones;</p>
        <p class="mt-1 text-muted">e) fallas de Internet;</p>
        <p class="mt-1 text-muted">f) interrupciones de proveedores tecnol\xF3gicos;</p>
        <p class="mt-1 text-muted">g) medidas adoptadas por autoridades competentes;</p>
        <p class="mt-1 text-muted">h) ataques inform\xE1ticos dirigidos contra terceros;</p>
        <p class="mt-1 text-muted">i) indisponibilidad de servicios de mensajer\xEDa;</p>
        <p class="mt-1 text-muted">j) eventos de fuerza mayor o caso fortuito.</p>
        <h4 class="mt-4 font-medium">86. Mitigaci\xF3n de da\xF1os</h4>
        <p class="mt-1 text-muted">El Beneficiario se compromete a adoptar medidas razonables para evitar o reducir los da\xF1os que pudieran derivarse de un incidente relacionado con la Plataforma.</p>
        <p class="mt-1 text-muted">En particular, deber\xE1 comunicar oportunamente cualquier situaci\xF3n que pueda comprometer la seguridad de su cuenta, la exactitud de la informaci\xF3n registrada o el adecuado procesamiento de los incentivos.</p>
        <p class="mt-1 text-muted">BonoPay procurar\xE1 colaborar razonablemente con el Beneficiario para investigar los hechos y adoptar las medidas que resulten procedentes dentro del \xE1mbito de sus competencias.</p>
        <h4 class="mt-4 font-medium">87. Fuerza mayor y caso fortuito</h4>
        <p class="mt-1 text-muted">Ninguna de las partes ser\xE1 responsable por el incumplimiento o retraso en el cumplimiento de sus obligaciones cuando ello sea consecuencia directa de un evento de fuerza mayor o caso fortuito, conforme a la legislaci\xF3n peruana.</p>
        <p class="mt-1 text-muted">Se consideran comprendidos, entre otros, desastres naturales, conflictos armados, actos de autoridad, disturbios civiles, pandemias, fallas generalizadas de infraestructura cr\xEDtica, interrupciones masivas de telecomunicaciones, ciberataques de gran escala u otros acontecimientos imprevisibles o inevitables que imposibiliten razonablemente la prestaci\xF3n del servicio.</p>
        <p class="mt-1 text-muted">La parte afectada procurar\xE1 informar a la otra sobre la ocurrencia del evento y adoptar\xE1 medidas razonables para mitigar sus efectos cuando ello sea posible.</p>
        <h4 class="mt-4 font-medium">88. Exclusi\xF3n de da\xF1os indirectos</h4>
        <p class="mt-1 text-muted">Salvo disposici\xF3n legal imperativa en contrario, BonoPay no responder\xE1 por da\xF1os indirectos, incidentales, consecuenciales, p\xE9rdida de oportunidades de negocio, lucro cesante, p\xE9rdida de informaci\xF3n o cualquier otro perjuicio que no constituya una consecuencia directa e inmediata del incumplimiento imputable a BonoPay.</p>
        <p class="mt-1 text-muted">La presente cl\xE1usula no excluye la responsabilidad que no pueda limitarse o excluirse conforme a la legislaci\xF3n aplicable.</p>
        <h4 class="mt-4 font-medium">89. Interpretaci\xF3n de las limitaciones de responsabilidad</h4>
        <p class="mt-1 text-muted">Las limitaciones de responsabilidad previstas en estos T\xE9rminos y Condiciones deber\xE1n interpretarse de manera compatible con la legislaci\xF3n peruana, el principio de buena fe contractual y los derechos irrenunciables reconocidos al Beneficiario.</p>
        <p class="mt-1 text-muted">En ning\xFAn caso podr\xE1n interpretarse como una exclusi\xF3n de responsabilidad respecto de obligaciones cuya limitaci\xF3n o exclusi\xF3n se encuentre prohibida por normas de orden p\xFAblico.</p>
        <h4 class="mt-4 font-medium">90. Conservaci\xF3n de acciones</h4>
        <p class="mt-1 text-muted">La falta de ejercicio inmediato por parte de BonoPay de cualquiera de los derechos o facultades previstos en estos T\xE9rminos y Condiciones no constituir\xE1 renuncia a ellos ni impedir\xE1 su ejercicio posterior.</p>
        <p class="mt-1 text-muted">El ejercicio parcial de un derecho tampoco impedir\xE1 el ejercicio de otros derechos o acciones que correspondan conforme al contrato o a la legislaci\xF3n aplicable.</p>

        <h3 class="mt-8 text-[13px] font-semibold uppercase tracking-wide text-primary">CAP\xCDTULO X &mdash; SUSPENSI\xD3N, RESTRICCI\xD3N, TERMINACI\xD3N DEL ACCESO Y EFECTOS</h3>
        <h4 class="mt-4 font-medium">91. Facultad de suspensi\xF3n preventiva</h4>
        <p class="mt-1 text-muted">Motiva podr\xE1 suspender temporalmente el acceso del Beneficiario a la Plataforma, total o parcialmente, cuando existan circunstancias objetivas que razonablemente hagan necesario proteger la seguridad, integridad o adecuado funcionamiento de los Servicios.</p>
        <p class="mt-1 text-muted">La suspensi\xF3n preventiva constituye una medida de gesti\xF3n del riesgo y no implica, por s\xED sola, la existencia de incumplimiento por parte del Beneficiario ni el reconocimiento de responsabilidad por parte de BonoPay.</p>
        <p class="mt-1 text-muted">Siempre que ello resulte posible y no comprometa investigaciones de fraude, medidas de seguridad o requerimientos de autoridad competente, BonoPay procurar\xE1 informar al Beneficiario acerca de la suspensi\xF3n y de las acciones necesarias para su levantamiento.</p>
        <h4 class="mt-4 font-medium">92. Causales de suspensi\xF3n</h4>
        <p class="mt-1 text-muted">Motiva podr\xE1 suspender temporalmente el acceso a la Plataforma, entre otros supuestos, cuando:</p>
        <p class="mt-1 text-muted">a) existan indicios razonables de fraude;</p>
        <p class="mt-1 text-muted">b) se detecten intentos de suplantaci\xF3n de identidad;</p>
        <p class="mt-1 text-muted">c) existan inconsistencias relevantes en la informaci\xF3n registrada;</p>
        <p class="mt-1 text-muted">d) se detecten accesos inusuales o potencialmente riesgosos;</p>
        <p class="mt-1 text-muted">e) se registren m\xFAltiples intentos fallidos de autenticaci\xF3n;</p>
        <p class="mt-1 text-muted">f) existan incidentes de ciberseguridad;</p>
        <p class="mt-1 text-muted">g) resulte necesario realizar verificaciones adicionales de identidad;</p>
        <p class="mt-1 text-muted">h) existan requerimientos emitidos por autoridades competentes;</p>
        <p class="mt-1 text-muted">i) sea necesario ejecutar actividades cr\xEDticas de mantenimiento o protecci\xF3n de la Plataforma;</p>
        <p class="mt-1 text-muted">j) el Beneficiario incumpla los presentes T\xE9rminos y Condiciones.</p>
        <h4 class="mt-4 font-medium">93. Restricci\xF3n de funcionalidades</h4>
        <p class="mt-1 text-muted">Cuando la naturaleza del riesgo lo permita, Motiva podr\xE1 restringir \xFAnicamente determinadas funcionalidades de la Plataforma, manteniendo disponibles aquellas que no representen un riesgo para la seguridad del servicio.</p>
        <p class="mt-1 text-muted">La adopci\xF3n de medidas parciales ser\xE1 evaluada por BonoPay atendiendo a la naturaleza de cada incidencia.</p>
        <h4 class="mt-4 font-medium">94. Procedimiento de verificaci\xF3n</h4>
        <p class="mt-1 text-muted">Cuando una suspensi\xF3n tenga por finalidad verificar la autenticidad de determinada informaci\xF3n o prevenir un posible fraude, Motiva podr\xE1 solicitar al Beneficiario documentaci\xF3n o informaci\xF3n adicional razonablemente necesaria para concluir el proceso de verificaci\xF3n.</p>
        <p class="mt-1 text-muted">El Beneficiario se compromete a colaborar de buena fe proporcionando la informaci\xF3n solicitada dentro de un plazo razonable.</p>
        <p class="mt-1 text-muted">La falta de colaboraci\xF3n podr\xE1 ser considerada por BonoPay al evaluar la continuidad del acceso a la Plataforma.</p>
        <h4 class="mt-4 font-medium">95. Terminaci\xF3n del acceso</h4>
        <p class="mt-1 text-muted">Motiva podr\xE1 dar por terminado el acceso del Beneficiario a la Plataforma cuando:</p>
        <p class="mt-1 text-muted">a) el Beneficiario incurra en fraude debidamente verificado;</p>
        <p class="mt-1 text-muted">b) se compruebe la utilizaci\xF3n de informaci\xF3n falsa;</p>
        <p class="mt-1 text-muted">c) exista utilizaci\xF3n indebida de la Plataforma;</p>
        <p class="mt-1 text-muted">d) se determine la existencia de suplantaci\xF3n de identidad;</p>
        <p class="mt-1 text-muted">e) el Beneficiario incumpla gravemente los presentes T\xE9rminos y Condiciones;</p>
        <p class="mt-1 text-muted">f) exista imposibilidad legal de continuar prestando el servicio;</p>
        <p class="mt-1 text-muted">g) la Empresa comunique la finalizaci\xF3n del programa de incentivos respecto del Beneficiario, cuando ello implique la imposibilidad de continuar utilizando la Plataforma para la finalidad prevista.</p>
        <p class="mt-1 text-muted">La terminaci\xF3n se realizar\xE1 respetando la legislaci\xF3n aplicable y no afectar\xE1 los derechos adquiridos con anterioridad a su fecha de efectividad.</p>
        <h4 class="mt-4 font-medium">96. Terminaci\xF3n por decisi\xF3n del Empresa</h4>
        <p class="mt-1 text-muted">El Beneficiario reconoce que la continuidad de su participaci\xF3n en el programa de incentivos depende de las decisiones adoptadas por el Empresa.</p>
        <p class="mt-1 text-muted">Cuando la Empresa comunique a BonoPay la conclusi\xF3n de la relaci\xF3n que justific\xF3 el registro del Beneficiario o la finalizaci\xF3n del programa correspondiente, Motiva podr\xE1 restringir o finalizar el acceso a aquellas funcionalidades que dependan exclusivamente de dicho programa.</p>
        <p class="mt-1 text-muted">Ello no impedir\xE1 la conservaci\xF3n de la informaci\xF3n que BonoPay deba mantener por obligaci\xF3n legal, fines de auditor\xEDa, prevenci\xF3n del fraude o defensa de derechos.</p>
        <h4 class="mt-4 font-medium">97. Conservaci\xF3n de informaci\xF3n despu\xE9s de la terminaci\xF3n</h4>
        <p class="mt-1 text-muted">La suspensi\xF3n o terminaci\xF3n del acceso no implicar\xE1 la eliminaci\xF3n inmediata de la informaci\xF3n registrada en la Plataforma.</p>
        <p class="mt-1 text-muted">Motiva podr\xE1 conservar los datos y registros electr\xF3nicos durante los plazos necesarios para:</p>
        <p class="mt-1 text-muted">a) cumplir obligaciones legales;</p>
        <p class="mt-1 text-muted">b) atender requerimientos de autoridades competentes;</p>
        <p class="mt-1 text-muted">c) resolver reclamaciones;</p>
        <p class="mt-1 text-muted">d) prevenir fraude;</p>
        <p class="mt-1 text-muted">e) efectuar auditor\xEDas;</p>
        <p class="mt-1 text-muted">f) ejercer o defender derechos en procedimientos administrativos, arbitrales o judiciales;</p>
        <p class="mt-1 text-muted">g) cumplir las pol\xEDticas internas de conservaci\xF3n de informaci\xF3n.</p>
        <p class="mt-1 text-muted">La conservaci\xF3n de dicha informaci\xF3n se realizar\xE1 conforme a la legislaci\xF3n aplicable en materia de protecci\xF3n de datos personales.</p>
        <h4 class="mt-4 font-medium">98. Restablecimiento del acceso</h4>
        <p class="mt-1 text-muted">Cuando desaparezcan las circunstancias que motivaron una suspensi\xF3n preventiva y se hayan superado satisfactoriamente las verificaciones correspondientes, Motiva podr\xE1 restablecer el acceso del Beneficiario a la Plataforma.</p>
        <p class="mt-1 text-muted">La decisi\xF3n de restablecimiento ser\xE1 adoptada considerando la naturaleza del incidente, los riesgos identificados y la informaci\xF3n disponible al momento de la evaluaci\xF3n.</p>
        <h4 class="mt-4 font-medium">99. Efectos de la terminaci\xF3n</h4>
        <p class="mt-1 text-muted">La terminaci\xF3n del acceso producir\xE1, entre otros, los siguientes efectos:</p>
        <p class="mt-1 text-muted">a) cesar\xE1 el derecho del Beneficiario a utilizar la Plataforma;</p>
        <p class="mt-1 text-muted">b) Motiva podr\xE1 deshabilitar las credenciales de acceso;</p>
        <p class="mt-1 text-muted">c) continuar\xE1n vigentes aquellas obligaciones que, por su naturaleza, deban subsistir despu\xE9s de la terminaci\xF3n, incluyendo las relativas a confidencialidad, protecci\xF3n de datos, conservaci\xF3n de registros, propiedad intelectual, limitaci\xF3n de responsabilidad y resoluci\xF3n de controversias;</p>
        <p class="mt-1 text-muted">d) la terminaci\xF3n no afectar\xE1 la validez de las operaciones ejecutadas con anterioridad a su efectividad;</p>
        <p class="mt-1 text-muted">e) la terminaci\xF3n no extinguir\xE1 las obligaciones legales pendientes de cumplimiento por cualquiera de las partes.</p>
        <h4 class="mt-4 font-medium">100. Ausencia de renuncia de derechos</h4>
        <p class="mt-1 text-muted">La suspensi\xF3n, restricci\xF3n o terminaci\xF3n del acceso no constituir\xE1 renuncia por parte de BonoPay al ejercicio de cualquier otro derecho, acci\xF3n o facultad que pudiera corresponderle conforme a los presentes T\xE9rminos y Condiciones o a la legislaci\xF3n aplicable.</p>

        <h3 class="mt-8 text-[13px] font-semibold uppercase tracking-wide text-primary">CAP\xCDTULO XI &mdash; DISPOSICIONES FINALES</h3>
        <h4 class="mt-4 font-medium">101. Comunicaciones entre las partes</h4>
        <p class="mt-1 text-muted">Toda comunicaci\xF3n relacionada con la utilizaci\xF3n de la Plataforma podr\xE1 efectuarse mediante medios electr\xF3nicos, incluyendo, entre otros:</p>
        <p class="mt-1 text-muted">a) correo electr\xF3nico;</p>
        <p class="mt-1 text-muted">b) mensajes enviados mediante la Plataforma;</p>
        <p class="mt-1 text-muted">c) WhatsApp;</p>
        <p class="mt-1 text-muted">d) mensajes SMS;</p>
        <p class="mt-1 text-muted">e) otros medios tecnol\xF3gicos razonablemente implementados por BonoPay.</p>
        <p class="mt-1 text-muted">Las comunicaciones remitidas por dichos medios producir\xE1n efectos desde el momento en que sean enviadas o puestas a disposici\xF3n del Beneficiario, salvo disposici\xF3n legal imperativa en contrario.</p>
        <h4 class="mt-4 font-medium">102. Integridad contractual</h4>
        <p class="mt-1 text-muted">Los presentes T\xE9rminos y Condiciones, conjuntamente con la Pol\xEDtica de Privacidad y aquellos documentos cuya aceptaci\xF3n sea expresamente requerida durante el proceso de registro, constituyen el acuerdo \xEDntegro entre BonoPay y el Beneficiario respecto de la utilizaci\xF3n de la Plataforma.</p>
        <p class="mt-1 text-muted">Toda comunicaci\xF3n, propuesta o entendimiento previo relacionado con el objeto de estos T\xE9rminos y Condiciones quedar\xE1 sustituido por el presente documento desde su aceptaci\xF3n.</p>
        <h4 class="mt-4 font-medium">103. Independencia de las cl\xE1usulas</h4>
        <p class="mt-1 text-muted">La eventual nulidad, invalidez o inaplicabilidad de cualquiera de las disposiciones contenidas en estos T\xE9rminos y Condiciones no afectar\xE1 la validez de las dem\xE1s cl\xE1usulas, las cuales continuar\xE1n produciendo plenamente sus efectos.</p>
        <p class="mt-1 text-muted">Las disposiciones afectadas ser\xE1n interpretadas o, cuando corresponda, sustituidas en la medida necesaria para preservar la finalidad econ\xF3mica y jur\xEDdica del contrato, siempre que ello sea compatible con la legislaci\xF3n aplicable.</p>
        <h4 class="mt-4 font-medium">104. Cesi\xF3n</h4>
        <p class="mt-1 text-muted">Motiva podr\xE1 ceder total o parcialmente los derechos y obligaciones derivados de estos T\xE9rminos y Condiciones a empresas vinculadas, sucesoras, adquirentes de unidades de negocio o terceros que contin\xFAen la prestaci\xF3n de los Servicios, siempre que dicha cesi\xF3n no implique una reducci\xF3n de los derechos reconocidos al Beneficiario por la legislaci\xF3n aplicable.</p>
        <p class="mt-1 text-muted">El Beneficiario no podr\xE1 ceder, transferir o delegar los derechos u obligaciones derivados de estos T\xE9rminos y Condiciones sin autorizaci\xF3n previa y por escrito de BonoPay.</p>
        <h4 class="mt-4 font-medium">105. Renuncia</h4>
        <p class="mt-1 text-muted">La falta de ejercicio o el ejercicio tard\xEDo por parte de BonoPay de cualquier derecho, acci\xF3n o facultad prevista en estos T\xE9rminos y Condiciones no constituir\xE1 renuncia a su ejercicio posterior.</p>
        <p class="mt-1 text-muted">La renuncia \xFAnicamente ser\xE1 v\xE1lida cuando conste expresamente por escrito.</p>
        <h4 class="mt-4 font-medium">106. Interpretaci\xF3n</h4>
        <p class="mt-1 text-muted">Los presentes T\xE9rminos y Condiciones deber\xE1n interpretarse conforme a los principios de buena fe, razonabilidad, equilibrio contractual, transparencia, seguridad jur\xEDdica y conservaci\xF3n del negocio jur\xEDdico.</p>
        <p class="mt-1 text-muted">En caso de duda sobre el alcance de una disposici\xF3n, deber\xE1 preferirse la interpretaci\xF3n que resulte compatible con la naturaleza tecnol\xF3gica de los Servicios y con la legislaci\xF3n aplicable.</p>
        <h4 class="mt-4 font-medium">107. Modificaciones</h4>
        <p class="mt-1 text-muted">Motiva podr\xE1 modificar los presentes T\xE9rminos y Condiciones cuando ello resulte necesario para:</p>
        <p class="mt-1 text-muted">a) adecuarse a cambios legislativos o regulatorios;</p>
        <p class="mt-1 text-muted">b) incorporar nuevas funcionalidades o tecnolog\xEDas;</p>
        <p class="mt-1 text-muted">c) mejorar la seguridad de la Plataforma;</p>
        <p class="mt-1 text-muted">d) implementar nuevos mecanismos de autenticaci\xF3n;</p>
        <p class="mt-1 text-muted">e) incorporar nuevos proveedores tecnol\xF3gicos;</p>
        <p class="mt-1 text-muted">f) optimizar la prestaci\xF3n de los Servicios.</p>
        <p class="mt-1 text-muted">Las modificaciones ser\xE1n comunicadas por medios electr\xF3nicos razonablemente id\xF3neos.</p>
        <p class="mt-1 text-muted">Cuando la naturaleza de la modificaci\xF3n as\xED lo requiera, BonoPay solicitar\xE1 una nueva aceptaci\xF3n antes de permitir el uso continuado de la Plataforma.</p>
        <h4 class="mt-4 font-medium">108. Ley aplicable</h4>
        <p class="mt-1 text-muted">Los presentes T\xE9rminos y Condiciones se regir\xE1n e interpretar\xE1n de conformidad con las leyes de la Rep\xFAblica del Per\xFA.</p>
        <p class="mt-1 text-muted">Las disposiciones contenidas en este documento se entender\xE1n complementadas por la normativa peruana aplicable en materia de contrataci\xF3n electr\xF3nica, protecci\xF3n de datos personales, protecci\xF3n al consumidor y dem\xE1s normas que resulten pertinentes.</p>
        <h4 class="mt-4 font-medium">109. Soluci\xF3n de controversias</h4>
        <p class="mt-1 text-muted">Las partes procurar\xE1n resolver de buena fe cualquier controversia relacionada con la interpretaci\xF3n o ejecuci\xF3n de los presentes T\xE9rminos y Condiciones mediante negociaciones directas.</p>
        <p class="mt-1 text-muted">De no alcanzarse una soluci\xF3n dentro de un plazo razonable, la controversia ser\xE1 sometida a la jurisdicci\xF3n de los jueces y tribunales competentes de la Rep\xFAblica del Per\xFA, salvo que una norma imperativa establezca un mecanismo distinto o las partes acuerden v\xE1lidamente un medio alternativo de soluci\xF3n de controversias.</p>
        <p class="mt-1 text-muted">Lo anterior no limita el derecho del Beneficiario de acudir a las autoridades administrativas competentes cuando la legislaci\xF3n le reconozca tal facultad.</p>
        <h4 class="mt-4 font-medium">110. Entrada en vigor</h4>
        <p class="mt-1 text-muted">Los presentes T\xE9rminos y Condiciones entrar\xE1n en vigor desde el momento en que el Beneficiario manifieste su aceptaci\xF3n mediante cualquiera de los mecanismos de contrataci\xF3n electr\xF3nica habilitados por BonoPay.</p>
        <p class="mt-1 text-muted">Dicha aceptaci\xF3n permanecer\xE1 vigente mientras el Beneficiario utilice la Plataforma o subsistan obligaciones derivadas de la relaci\xF3n contractual que, por su naturaleza, deban mantenerse con posterioridad a la terminaci\xF3n del acceso.</p>
      </div>

      <button
        dialogFooter
        type="button"
        (click)="legal.termsOpen.set(false)"
        class="w-full rounded-full bg-primary py-3.5 text-[15px] font-medium text-white transition hover:bg-primary-dark"
      >
        Entendido
      </button>
    </app-dialog>

    <app-dialog
      [open]="legal.privacyOpen()"
      (openChange)="legal.privacyOpen.set($event)"
      title="Pol\xEDtica de privacidad"
    >
      <div class="space-y-1 text-[15px] leading-relaxed text-ink">
        <h3 class="text-[13px] font-semibold uppercase tracking-wide text-primary">CAP\xCDTULO I &mdash; DISPOSICIONES GENERALES</h3>
        <h4 class="mt-4 font-medium">Art\xEDculo 1.- Objeto de la Pol\xEDtica</h4>
        <p class="mt-1 text-muted">La presente Pol\xEDtica de Privacidad tiene por objeto informar de manera clara, transparente y accesible la forma en que Motiva Soluciones S.A.C. (en adelante, "Motiva"), en su calidad de titular de la plataforma tecnol\xF3gica BonoPay, recopila, utiliza, almacena, organiza, conserva, comparte, transfiere, protege y, en general, trata los datos personales de los Beneficiarios que utilizan la Plataforma.</p>
        <p class="mt-1 text-muted">Asimismo, esta Pol\xEDtica establece los derechos que asisten a los titulares de los datos personales y los mecanismos disponibles para ejercerlos, de conformidad con la Ley N\xB0 29733, Ley de Protecci\xF3n de Datos Personales, su Reglamento aprobado mediante Decreto Supremo N\xB0 003-2013-JUS y dem\xE1s normas complementarias que resulten aplicables.</p>
        <p class="mt-1 text-muted">La presente Pol\xEDtica forma parte integrante de los T\xE9rminos y Condiciones de Uso de BonoPay y deber\xE1 interpretarse conjuntamente con ellos.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 2.- Responsable del tratamiento</h4>
        <p class="mt-1 text-muted">Motiva Soluciones S.A.C., titular de la plataforma BonoPay, es el responsable del tratamiento de los datos personales recopilados y tratados a trav\xE9s de la Plataforma.</p>
        <p class="mt-1 text-muted">En tal condici\xF3n, Motiva determina las finalidades y los medios esenciales del tratamiento de los datos personales, administra el banco de datos personales correspondiente, implementa las medidas de seguridad exigidas por la normativa vigente y atiende el ejercicio de los derechos de los titulares de los datos personales.</p>
        <p class="mt-1 text-muted">Motiva realiza el tratamiento de los datos personales conforme a los principios y obligaciones previstos en la Ley N\xB0 29733, su Reglamento y dem\xE1s disposiciones aplicables.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 3.- Compromiso con la protecci\xF3n de datos personales</h4>
        <p class="mt-1 text-muted">Motiva reconoce la importancia de la privacidad y de la protecci\xF3n de los datos personales de los Beneficiarios que utilizan BonoPay.</p>
        <p class="mt-1 text-muted">Por ello, se compromete a realizar el tratamiento de los datos personales de manera l\xEDcita, transparente, proporcional, segura y confidencial, adoptando las medidas t\xE9cnicas, organizativas y legales razonablemente necesarias para prevenir su alteraci\xF3n, p\xE9rdida, acceso no autorizado, uso indebido o cualquier otro tratamiento contrario a la legislaci\xF3n vigente.</p>
        <p class="mt-1 text-muted">La protecci\xF3n de los datos personales constituye un componente esencial del dise\xF1o, operaci\xF3n y mejora continua de la Plataforma BonoPay.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 4.- Principios aplicables al tratamiento</h4>
        <p class="mt-1 text-muted">Motiva realiza el tratamiento de los datos personales respetando los principios previstos en la Ley N\xB0 29733 y su Reglamento, entre ellos:</p>
        <p class="mt-1 text-muted">a) Principio de legalidad.</p>
        <p class="mt-1 text-muted">b) Principio de consentimiento, cuando resulte exigible.</p>
        <p class="mt-1 text-muted">c) Principio de finalidad.</p>
        <p class="mt-1 text-muted">d) Principio de proporcionalidad.</p>
        <p class="mt-1 text-muted">e) Principio de calidad.</p>
        <p class="mt-1 text-muted">f) Principio de seguridad.</p>
        <p class="mt-1 text-muted">g) Principio de disposici\xF3n de recurso.</p>
        <p class="mt-1 text-muted">h) Principio de nivel de protecci\xF3n adecuado.</p>
        <p class="mt-1 text-muted">Estos principios orientan todas las actividades de tratamiento desarrolladas por Motiva a trav\xE9s de la Plataforma BonoPay.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 5.- \xC1mbito de aplicaci\xF3n</h4>
        <p class="mt-1 text-muted">La presente Pol\xEDtica resulta aplicable a todos los datos personales tratados por Motiva mediante la Plataforma BonoPay respecto de los Beneficiarios registrados o que utilicen los servicios ofrecidos a trav\xE9s de ella.</p>
        <p class="mt-1 text-muted">Asimismo, comprende el tratamiento de los datos personales que resulte necesario para:</p>
        <ul class="mt-1 list-disc space-y-1 pl-5 text-muted">
          <li>el registro de Beneficiarios;</li>
          <li>la validaci\xF3n de identidad;</li>
          <li>la autenticaci\xF3n de usuarios;</li>
          <li>la administraci\xF3n de perfiles;</li>
          <li>la gesti\xF3n de incentivos y beneficios;</li>
          <li>la atenci\xF3n de consultas y solicitudes;</li>
          <li>la prevenci\xF3n del fraude;</li>
          <li>el cumplimiento de obligaciones legales y regulatorias;</li>
          <li>la seguridad de la Plataforma; y</li>
          <li>la mejora continua de los servicios ofrecidos.</li>
        </ul>
        <h4 class="mt-4 font-medium">Art\xEDculo 6.- Cumplimiento normativo</h4>
        <p class="mt-1 text-muted">Motiva desarrolla todas las actividades de tratamiento de datos personales procurando garantizar el cumplimiento permanente de la legislaci\xF3n peruana sobre protecci\xF3n de datos personales, as\xED como de las mejores pr\xE1cticas en materia de privacidad y seguridad de la informaci\xF3n.</p>
        <p class="mt-1 text-muted">Cuando corresponda, Motiva adoptar\xE1 las medidas necesarias para actualizar sus procedimientos internos, contratos, pol\xEDticas y mecanismos de seguridad con la finalidad de mantener un adecuado nivel de protecci\xF3n de los datos personales tratados mediante la Plataforma.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 7.- Banco de datos personales</h4>
        <p class="mt-1 text-muted">Los datos personales tratados mediante la Plataforma BonoPay forman parte del banco de datos personales cuya titularidad y administraci\xF3n corresponden a Motiva Soluciones S.A.C., el cual ser\xE1 registrado y administrado conforme a la legislaci\xF3n vigente ante el Registro Nacional de Protecci\xF3n de Datos Personales, cuando ello resulte aplicable.</p>
        <p class="mt-1 text-muted">Motiva ser\xE1 responsable de garantizar el cumplimiento de las obligaciones derivadas de la administraci\xF3n del referido banco de datos personales.</p>
        <p class="mt-1 text-muted">Cuando para la prestaci\xF3n de los servicios resulte necesario que determinados terceros tengan acceso a datos personales, Motiva adoptar\xE1 las medidas contractuales y organizativas necesarias para asegurar que dicho tratamiento se realice conforme a la legislaci\xF3n aplicable.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 8.- Relaci\xF3n con otras pol\xEDticas y documentos</h4>
        <p class="mt-1 text-muted">La presente Pol\xEDtica complementa los T\xE9rminos y Condiciones de Uso de BonoPay y cualquier otro aviso o pol\xEDtica espec\xEDfica de privacidad que Motiva ponga a disposici\xF3n de los Beneficiarios para determinados servicios o funcionalidades.</p>
        <p class="mt-1 text-muted">En caso de existir disposiciones especiales aplicables a un determinado tratamiento de datos personales, estas prevalecer\xE1n respecto de la presente Pol\xEDtica \xFAnicamente en aquello que resulte espec\xEDfico.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 9.- Actualizaciones de la Pol\xEDtica</h4>
        <p class="mt-1 text-muted">Motiva podr\xE1 modificar o actualizar la presente Pol\xEDtica cuando ello resulte necesario para adecuarse a cambios normativos, tecnol\xF3gicos, operativos o de negocio, as\xED como para incorporar nuevas funcionalidades o servicios de la Plataforma BonoPay.</p>
        <p class="mt-1 text-muted">Cuando las modificaciones tengan un impacto relevante sobre el tratamiento de los datos personales o sobre los derechos de los titulares, Motiva las comunicar\xE1 mediante los canales que considere razonablemente adecuados y, cuando la legislaci\xF3n lo requiera, solicitar\xE1 nuevamente el consentimiento correspondiente.</p>

        <h3 class="mt-8 text-[13px] font-semibold uppercase tracking-wide text-primary">CAP\xCDTULO II &mdash; DEFINICIONES</h3>
        <h4 class="mt-4 font-medium">Art\xEDculo 10.- Definiciones</h4>
        <p class="mt-1 text-muted">Para efectos de la presente Pol\xEDtica, los t\xE9rminos que se indican a continuaci\xF3n tendr\xE1n el significado que se les atribuye en el presente art\xEDculo, sin perjuicio de las definiciones contenidas en la Ley N\xB0 29733, su Reglamento y dem\xE1s normativa aplicable.</p>
        <p class="mt-1 text-muted">Beneficiario</p>
        <p class="mt-1 text-muted">Persona natural que utiliza la plataforma BonoPay para registrarse, acceder o recibir los incentivos, beneficios, premios, bonificaciones, reembolsos u otros conceptos administrados a trav\xE9s de la Plataforma.</p>
        <p class="mt-1 text-muted">BonoPay</p>
        <p class="mt-1 text-muted">Plataforma tecnol\xF3gica desarrollada y operada por Motiva Soluciones S.A.C., mediante la cual se gestionan programas de incentivos, beneficios, recompensas, promociones, reembolsos y otros servicios ofrecidos a los Beneficiarios.</p>
        <p class="mt-1 text-muted">Cliente</p>
        <p class="mt-1 text-muted">Persona jur\xEDdica que contrata los servicios de Motiva para implementar programas de incentivos o beneficios utilizando la plataforma BonoPay.</p>
        <p class="mt-1 text-muted">La contrataci\xF3n de dichos servicios no implica que el Cliente sea responsable del tratamiento de los datos personales regulados por la presente Pol\xEDtica, salvo que expresamente se establezca un tratamiento independiente sujeto a una pol\xEDtica distinta.</p>
        <p class="mt-1 text-muted">Datos Personales</p>
        <p class="mt-1 text-muted">Toda informaci\xF3n sobre una persona natural que la identifica o la hace identificable mediante medios que puedan ser razonablemente utilizados, conforme a la Ley N\xB0 29733.</p>
        <p class="mt-1 text-muted">Datos Sensibles</p>
        <p class="mt-1 text-muted">Datos personales constituidos por informaci\xF3n biom\xE9trica que permita identificar al titular, as\xED como aquellos referidos al origen racial o \xE9tnico, ingresos econ\xF3micos, opiniones o convicciones pol\xEDticas, religiosas, filos\xF3ficas o morales, afiliaci\xF3n sindical e informaci\xF3n relacionada con la salud o la vida sexual, conforme a la legislaci\xF3n vigente.</p>
        <p class="mt-1 text-muted">Plataforma</p>
        <p class="mt-1 text-muted">La plataforma tecnol\xF3gica BonoPay, incluyendo el sitio web, la aplicaci\xF3n m\xF3vil, los servicios digitales y dem\xE1s componentes tecnol\xF3gicos administrados por Motiva.</p>
        <p class="mt-1 text-muted">Responsable del Tratamiento</p>
        <p class="mt-1 text-muted">Motiva Soluciones S.A.C., quien determina las finalidades y los medios esenciales del tratamiento de los datos personales regulados por la presente Pol\xEDtica.</p>
        <p class="mt-1 text-muted">Tratamiento</p>
        <p class="mt-1 text-muted">Cualquier operaci\xF3n o procedimiento t\xE9cnico, automatizado o no, que permita recopilar, registrar, organizar, almacenar, conservar, modificar, consultar, utilizar, bloquear, suprimir, transferir o realizar cualquier otra forma de procesamiento de datos personales.</p>
        <p class="mt-1 text-muted">Banco de Datos Personales</p>
        <p class="mt-1 text-muted">Conjunto organizado de datos personales administrado por Motiva conforme a la Ley N\xB0 29733 y su Reglamento.</p>
        <p class="mt-1 text-muted">Titular de los Datos Personales</p>
        <p class="mt-1 text-muted">Persona natural a quien corresponden los datos personales objeto de tratamiento.</p>
        <p class="mt-1 text-muted">Consentimiento</p>
        <p class="mt-1 text-muted">Manifestaci\xF3n de voluntad libre, previa, expresa, informada e inequ\xEDvoca mediante la cual el titular autoriza el tratamiento de sus datos personales, cuando dicho consentimiento resulte exigible conforme a la legislaci\xF3n aplicable.</p>
        <p class="mt-1 text-muted">Autoridad Nacional</p>
        <p class="mt-1 text-muted">La Autoridad Nacional de Protecci\xF3n de Datos Personales del Ministerio de Justicia y Derechos Humanos o la entidad que la sustituya.</p>
        <p class="mt-1 text-muted">Ley</p>
        <p class="mt-1 text-muted">La Ley N\xB0 29733, Ley de Protecci\xF3n de Datos Personales, su Reglamento y dem\xE1s disposiciones complementarias.</p>
        <p class="mt-1 text-muted">Reglamento</p>
        <p class="mt-1 text-muted">El Reglamento de la Ley N\xB0 29733, aprobado mediante Decreto Supremo N\xB0 003-2013-JUS, as\xED como sus modificatorias.</p>
        <p class="mt-1 text-muted">Servicios</p>
        <p class="mt-1 text-muted">Los servicios tecnol\xF3gicos prestados por Motiva mediante la plataforma BonoPay.</p>

        <h3 class="mt-8 text-[13px] font-semibold uppercase tracking-wide text-primary">CAP\xCDTULO III &mdash; DATOS PERSONALES OBJETO DE TRATAMIENTO</h3>
        <h4 class="mt-4 font-medium">Art\xEDculo 11.- Datos personales que recopilamos</h4>
        <p class="mt-1 text-muted">Motiva podr\xE1 recopilar y tratar los datos personales que resulten necesarios para la adecuada prestaci\xF3n de los servicios ofrecidos mediante la plataforma BonoPay, as\xED como para el cumplimiento de obligaciones legales y contractuales.</p>
        <p class="mt-1 text-muted">Los datos personales tratados depender\xE1n de la interacci\xF3n del Beneficiario con la Plataforma y de los servicios utilizados en cada caso.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 12.- Categor\xEDas de datos personales</h4>
        <p class="mt-1 text-muted">Con car\xE1cter enunciativo mas no limitativo, Motiva podr\xE1 tratar las siguientes categor\xEDas de datos personales:</p>
        <p class="mt-1 text-muted">a) Datos de identificaci\xF3n</p>
        <ul class="mt-1 list-disc space-y-1 pl-5 text-muted">
          <li>Nombres y apellidos.</li>
          <li>Documento Nacional de Identidad o documento equivalente.</li>
          <li>Fecha de nacimiento.</li>
          <li>Nacionalidad.</li>
          <li>Fotograf\xEDa, cuando resulte necesaria para procesos de validaci\xF3n de identidad.</li>
        </ul>
        <p class="mt-1 text-muted">b) Datos de contacto</p>
        <ul class="mt-1 list-disc space-y-1 pl-5 text-muted">
          <li>Direcci\xF3n de correo electr\xF3nico.</li>
          <li>N\xFAmero de tel\xE9fono m\xF3vil.</li>
          <li>Domicilio, cuando corresponda.</li>
        </ul>
        <p class="mt-1 text-muted">c) Datos de acceso y autenticaci\xF3n</p>
        <ul class="mt-1 list-disc space-y-1 pl-5 text-muted">
          <li>Usuario.</li>
          <li>Contrase\xF1a cifrada.</li>
          <li>C\xF3digo OTP.</li>
          <li>Historial de autenticaciones.</li>
          <li>Fecha y hora de acceso.</li>
          <li>Direcci\xF3n IP.</li>
          <li>Identificadores del dispositivo.</li>
        </ul>
        <p class="mt-1 text-muted">d) Datos relacionados con la utilizaci\xF3n de BonoPay</p>
        <ul class="mt-1 list-disc space-y-1 pl-5 text-muted">
          <li>Registro de operaciones realizadas.</li>
          <li>Beneficios asignados.</li>
          <li>Incentivos recibidos.</li>
          <li>Estado de las transacciones.</li>
          <li>Historial de utilizaci\xF3n de la Plataforma.</li>
        </ul>
        <p class="mt-1 text-muted">e) Datos t\xE9cnicos</p>
        <ul class="mt-1 list-disc space-y-1 pl-5 text-muted">
          <li>Tipo de navegador.</li>
          <li>Sistema operativo.</li>
          <li>Cookies y tecnolog\xEDas similares.</li>
          <li>Identificadores t\xE9cnicos del dispositivo.</li>
          <li>Registros de actividad (logs).</li>
        </ul>
        <h4 class="mt-4 font-medium">Art\xEDculo 13.- Datos proporcionados por el Beneficiario</h4>
        <p class="mt-1 text-muted">Motiva podr\xE1 tratar los datos personales que el propio Beneficiario proporcione durante:</p>
        <ul class="mt-1 list-disc space-y-1 pl-5 text-muted">
          <li>el proceso de registro;</li>
          <li>la actualizaci\xF3n de su perfil;</li>
          <li>la utilizaci\xF3n de los servicios ofrecidos mediante BonoPay;</li>
          <li>la atenci\xF3n de consultas;</li>
          <li>el ejercicio de sus derechos;</li>
          <li>cualquier otra interacci\xF3n realizada a trav\xE9s de la Plataforma.</li>
        </ul>
        <p class="mt-1 text-muted">El Beneficiario declara que los datos personales proporcionados son veraces, completos y actualizados, comprometi\xE9ndose a comunicar oportunamente cualquier modificaci\xF3n que resulte relevante.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 14.- Datos obtenidos autom\xE1ticamente</h4>
        <p class="mt-1 text-muted">Durante la utilizaci\xF3n de BonoPay, Motiva podr\xE1 recopilar autom\xE1ticamente determinada informaci\xF3n t\xE9cnica necesaria para garantizar la seguridad, disponibilidad y correcto funcionamiento de la Plataforma.</p>
        <p class="mt-1 text-muted">Esta informaci\xF3n podr\xE1 incluir, entre otros:</p>
        <ul class="mt-1 list-disc space-y-1 pl-5 text-muted">
          <li>direcci\xF3n IP;</li>
          <li>fecha y hora de acceso;</li>
          <li>identificadores del dispositivo;</li>
          <li>registros de eventos;</li>
          <li>informaci\xF3n del navegador;</li>
          <li>sistema operativo;</li>
          <li>ubicaci\xF3n aproximada obtenida a partir de la direcci\xF3n IP, cuando resulte t\xE9cnicamente posible.</li>
        </ul>
        <h4 class="mt-4 font-medium">Art\xEDculo 15.- Datos proporcionados por terceros</h4>
        <p class="mt-1 text-muted">Motiva podr\xE1 recibir datos personales provenientes de terceros cuando ello resulte necesario para la prestaci\xF3n de los servicios ofrecidos mediante BonoPay.</p>
        <p class="mt-1 text-muted">Entre dichos terceros podr\xE1n encontrarse:</p>
        <ul class="mt-1 list-disc space-y-1 pl-5 text-muted">
          <li>empresas clientes que implementen programas de incentivos;</li>
          <li>proveedores tecnol\xF3gicos;</li>
          <li>procesadores de pago;</li>
          <li>proveedores de servicios de verificaci\xF3n de identidad;</li>
          <li>otras fuentes cuya utilizaci\xF3n se encuentre permitida por la legislaci\xF3n aplicable.</li>
        </ul>
        <p class="mt-1 text-muted">En todos los casos, Motiva adoptar\xE1 medidas razonables para verificar que la obtenci\xF3n y comunicaci\xF3n de dichos datos personales se haya realizado conforme a la legislaci\xF3n vigente.</p>
        <p class="mt-1 text-muted">Cuando los datos personales sean proporcionados por empresas clientes, Motiva tratar\xE1 dicha informaci\xF3n sobre la base de la declaraci\xF3n y garant\xEDa de dichas empresas de que cuentan con la base legal correspondiente para su obtenci\xF3n, tratamiento y comunicaci\xF3n a Motiva. Sin perjuicio de ello, Motiva podr\xE1 adoptar medidas razonables destinadas a requerir o confirmar el cumplimiento de las obligaciones aplicables en materia de protecci\xF3n de datos personales cuando las circunstancias as\xED lo justifiquen</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 16.- Exactitud de los datos personales</h4>
        <p class="mt-1 text-muted">El Beneficiario es responsable de proporcionar datos personales veraces, completos y actualizados.</p>
        <p class="mt-1 text-muted">Motiva podr\xE1 solicitar la actualizaci\xF3n o rectificaci\xF3n de la informaci\xF3n cuando detecte inconsistencias que puedan afectar la correcta prestaci\xF3n de los servicios o el cumplimiento de obligaciones legales.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 17.- Datos personales de menores de edad</h4>
        <p class="mt-1 text-muted">La plataforma BonoPay no est\xE1 dirigida a menores de edad, salvo que un programa espec\xEDfico administrado mediante la Plataforma permita su participaci\xF3n conforme a la legislaci\xF3n aplicable.</p>
        <p class="mt-1 text-muted">En aquellos casos en que el tratamiento de datos personales de menores resulte legalmente procedente, Motiva adoptar\xE1 las medidas razonables para garantizar el cumplimiento de los requisitos previstos por la normativa vigente.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 18.- Datos sensibles</h4>
        <p class="mt-1 text-muted">Como regla general, Motiva no solicita ni trata datos personales sensibles.</p>
        <p class="mt-1 text-muted">Excepcionalmente, cuando la prestaci\xF3n de un determinado servicio requiera el tratamiento de datos sensibles, este se realizar\xE1 \xFAnicamente cuando exista una base legal que lo habilite y se adopten las medidas de seguridad reforzadas previstas por la legislaci\xF3n aplicable.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 19.- Calidad y minimizaci\xF3n de datos</h4>
        <p class="mt-1 text-muted">Motiva procurar\xE1 que los datos personales objeto de tratamiento sean adecuados, pertinentes y limitados a lo estrictamente necesario para el cumplimiento de las finalidades descritas en la presente Pol\xEDtica.</p>
        <p class="mt-1 text-muted">Cuando determinados datos personales dejen de resultar necesarios para dichas finalidades, ser\xE1n eliminados, anonimizados o conservados \xFAnicamente cuando exista una obligaci\xF3n legal que justifique su mantenimiento.</p>

        <h3 class="mt-8 text-[13px] font-semibold uppercase tracking-wide text-primary">CAP\xCDTULO IV &mdash; FINALIDADES DEL TRATAMIENTO DE DATOS PERSONALES</h3>
        <h4 class="mt-4 font-medium">Art\xEDculo 20.- Finalidad general del tratamiento</h4>
        <p class="mt-1 text-muted">Motiva trata los datos personales de los Beneficiarios con la finalidad de operar, administrar y mejorar la plataforma BonoPay, permitiendo la gesti\xF3n de programas de incentivos, beneficios, recompensas, promociones, reembolsos y dem\xE1s servicios ofrecidos mediante la Plataforma, as\xED como para cumplir obligaciones legales y contractuales.</p>
        <p class="mt-1 text-muted">El tratamiento de los datos personales se realizar\xE1 \xFAnicamente respecto de finalidades determinadas, expl\xEDcitas y leg\xEDtimas, conforme a la presente Pol\xEDtica y a la legislaci\xF3n aplicable.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 21.- Finalidades relacionadas con la prestaci\xF3n del servicio</h4>
        <p class="mt-1 text-muted">Motiva podr\xE1 tratar los datos personales para las siguientes finalidades directamente vinculadas con la prestaci\xF3n de los servicios ofrecidos mediante BonoPay:</p>
        <p class="mt-1 text-muted">a) Registrar al Beneficiario en la Plataforma.</p>
        <p class="mt-1 text-muted">b) Crear y administrar la cuenta del Beneficiario.</p>
        <p class="mt-1 text-muted">c) Validar la identidad del Beneficiario.</p>
        <p class="mt-1 text-muted">d) Permitir el acceso seguro a la Plataforma.</p>
        <p class="mt-1 text-muted">e) Gestionar la asignaci\xF3n, administraci\xF3n y entrega de incentivos, beneficios o recompensas.</p>
        <p class="mt-1 text-muted">f) Ejecutar las transacciones solicitadas por el Beneficiario.</p>
        <p class="mt-1 text-muted">g) Administrar el perfil del Beneficiario.</p>
        <p class="mt-1 text-muted">h) Brindar soporte t\xE9cnico y atenci\xF3n de consultas.</p>
        <p class="mt-1 text-muted">i) Gestionar solicitudes, reclamos y requerimientos relacionados con la utilizaci\xF3n de BonoPay.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 22.- Finalidades relacionadas con la seguridad</h4>
        <p class="mt-1 text-muted">Motiva podr\xE1 tratar datos personales con la finalidad de:</p>
        <p class="mt-1 text-muted">a) Prevenir fraudes.</p>
        <p class="mt-1 text-muted">b) Detectar accesos no autorizados.</p>
        <p class="mt-1 text-muted">c) Validar la autenticidad de las operaciones realizadas.</p>
        <p class="mt-1 text-muted">d) Gestionar incidentes de seguridad.</p>
        <p class="mt-1 text-muted">e) Proteger la integridad de la Plataforma.</p>
        <p class="mt-1 text-muted">f) Investigar actividades potencialmente fraudulentas o contrarias a los T\xE9rminos y Condiciones.</p>
        <p class="mt-1 text-muted">g) Cumplir obligaciones relacionadas con la prevenci\xF3n de delitos inform\xE1ticos y otras obligaciones legales.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 23.- Finalidades operativas</h4>
        <p class="mt-1 text-muted">Motiva podr\xE1 utilizar los datos personales para:</p>
        <p class="mt-1 text-muted">a) Mantener el correcto funcionamiento de la Plataforma.</p>
        <p class="mt-1 text-muted">b) Corregir errores.</p>
        <p class="mt-1 text-muted">c) Implementar mejoras tecnol\xF3gicas.</p>
        <p class="mt-1 text-muted">d) Desarrollar nuevas funcionalidades.</p>
        <p class="mt-1 text-muted">e) Realizar pruebas t\xE9cnicas.</p>
        <p class="mt-1 text-muted">f) Administrar la infraestructura tecnol\xF3gica.</p>
        <p class="mt-1 text-muted">g) Gestionar respaldos y recuperaci\xF3n de informaci\xF3n.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 24.- Finalidades relacionadas con el cumplimiento normativo</h4>
        <p class="mt-1 text-muted">Motiva podr\xE1 tratar los datos personales cuando ello resulte necesario para:</p>
        <p class="mt-1 text-muted">a) Cumplir obligaciones legales o regulatorias.</p>
        <p class="mt-1 text-muted">b) Atender requerimientos de autoridades competentes.</p>
        <p class="mt-1 text-muted">c) Ejercer o defender derechos en procedimientos administrativos, judiciales o arbitrales.</p>
        <p class="mt-1 text-muted">d) Cumplir obligaciones tributarias, contables y societarias.</p>
        <p class="mt-1 text-muted">e) Gestionar auditor\xEDas internas o externas.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 25.- Comunicaciones relacionadas con el servicio</h4>
        <p class="mt-1 text-muted">Motiva podr\xE1 utilizar los datos de contacto del Beneficiario para remitir comunicaciones necesarias para la adecuada prestaci\xF3n de los servicios, incluyendo:</p>
        <p class="mt-1 text-muted">a) Confirmaciones de registro.</p>
        <p class="mt-1 text-muted">b) Autenticaci\xF3n mediante c\xF3digos OTP.</p>
        <p class="mt-1 text-muted">c) Notificaciones de seguridad.</p>
        <p class="mt-1 text-muted">d) Confirmaciones de transacciones.</p>
        <p class="mt-1 text-muted">e) Avisos sobre incidencias t\xE9cnicas.</p>
        <p class="mt-1 text-muted">f) Comunicaciones relacionadas con el ejercicio de derechos.</p>
        <p class="mt-1 text-muted">Estas comunicaciones tienen car\xE1cter operativo y forman parte de la prestaci\xF3n de los servicios ofrecidos mediante BonoPay.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 26.- Comunicaciones comerciales</h4>
        <p class="mt-1 text-muted">Motiva \xFAnicamente remitir\xE1 comunicaciones comerciales, promociones o informaci\xF3n publicitaria cuando cuente con la base legal correspondiente, de conformidad con la legislaci\xF3n aplicable.</p>
        <p class="mt-1 text-muted">El Beneficiario podr\xE1 revocar dicha autorizaci\xF3n en cualquier momento mediante los mecanismos habilitados por Motiva, sin que ello afecte la prestaci\xF3n de los servicios contratados.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 27.- Mejora de la Plataforma</h4>
        <p class="mt-1 text-muted">Motiva podr\xE1 utilizar informaci\xF3n obtenida mediante la utilizaci\xF3n de BonoPay para:</p>
        <p class="mt-1 text-muted">a) Analizar tendencias de uso.</p>
        <p class="mt-1 text-muted">b) Mejorar la experiencia del usuario.</p>
        <p class="mt-1 text-muted">c) Optimizar el rendimiento de la Plataforma.</p>
        <p class="mt-1 text-muted">d) Desarrollar nuevos servicios.</p>
        <p class="mt-1 text-muted">Siempre que sea posible, dichas actividades se realizar\xE1n utilizando informaci\xF3n anonimizada o agregada.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 28.- Tratamientos compatibles</h4>
        <p class="mt-1 text-muted">Cuando resulte necesario utilizar los datos personales para una finalidad compatible con aquella que motiv\xF3 originalmente su recopilaci\xF3n, Motiva verificar\xE1 previamente la compatibilidad entre ambas finalidades y adoptar\xE1 las medidas necesarias para garantizar el respeto de los derechos de los titulares.</p>
        <p class="mt-1 text-muted">Cuando la legislaci\xF3n lo exija, Motiva solicitar\xE1 el consentimiento correspondiente antes de realizar un tratamiento para una finalidad distinta.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 29.- Limitaci\xF3n de la finalidad</h4>
        <p class="mt-1 text-muted">Motiva no utilizar\xE1 los datos personales para finalidades incompatibles con aquellas informadas en la presente Pol\xEDtica, salvo que exista una obligaci\xF3n legal que lo permita o una nueva base legal que habilite dicho tratamiento.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 30.- Actualizaci\xF3n de las finalidades</h4>
        <p class="mt-1 text-muted">En caso de incorporarse nuevas finalidades de tratamiento que impliquen modificaciones sustanciales respecto de las informadas en la presente Pol\xEDtica, Motiva actualizar\xE1 el presente documento y, cuando corresponda, informar\xE1 a los titulares de los datos personales y obtendr\xE1 las autorizaciones exigidas por la legislaci\xF3n aplicable.</p>

        <h3 class="mt-8 text-[13px] font-semibold uppercase tracking-wide text-primary">CAP\xCDTULO V &mdash; BASES LEGALES DEL TRATAMIENTO DE DATOS PERSONALES</h3>
        <h4 class="mt-4 font-medium">Art\xEDculo 31.- Bases legales del tratamiento</h4>
        <p class="mt-1 text-muted">Motiva realizar\xE1 el tratamiento de datos personales \xFAnicamente cuando exista una base legal que lo legitime, de conformidad con la Ley N\xB0 29733, su Reglamento y dem\xE1s normativa aplicable.</p>
        <p class="mt-1 text-muted">Dependiendo de la naturaleza de cada tratamiento, Motiva podr\xE1 sustentar el tratamiento de datos personales en una o m\xE1s de las bases legales previstas en la legislaci\xF3n vigente.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 32.- Consentimiento del titular</h4>
        <p class="mt-1 text-muted">Cuando el tratamiento de datos personales requiera el consentimiento del titular, Motiva lo obtendr\xE1 de manera libre, previa, expresa, informada e inequ\xEDvoca.</p>
        <p class="mt-1 text-muted">El consentimiento podr\xE1 ser otorgado mediante mecanismos f\xEDsicos, electr\xF3nicos o cualquier otro medio que permita acreditar razonablemente la voluntad del titular, conforme a la legislaci\xF3n aplicable.</p>
        <p class="mt-1 text-muted">El titular podr\xE1 revocar su consentimiento cuando la legislaci\xF3n lo permita, sin efectos retroactivos sobre los tratamientos realizados con anterioridad a dicha revocaci\xF3n.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 33.- Ejecuci\xF3n de la relaci\xF3n con el Beneficiario</h4>
        <p class="mt-1 text-muted">Motiva podr\xE1 tratar los datos personales cuando ello resulte necesario para prestar los servicios ofrecidos mediante la plataforma BonoPay, incluyendo, entre otros:</p>
        <ul class="mt-1 list-disc space-y-1 pl-5 text-muted">
          <li>el registro del Beneficiario;</li>
          <li>la autenticaci\xF3n de usuarios;</li>
          <li>la administraci\xF3n de cuentas;</li>
          <li>la asignaci\xF3n y entrega de incentivos;</li>
          <li>la ejecuci\xF3n de operaciones solicitadas por el Beneficiario;</li>
          <li>la atenci\xF3n de consultas, solicitudes y reclamos.</li>
        </ul>
        <h4 class="mt-4 font-medium">Art\xEDculo 34.- Cumplimiento de obligaciones legales</h4>
        <p class="mt-1 text-muted">Motiva podr\xE1 tratar datos personales cuando ello resulte necesario para cumplir obligaciones establecidas por la legislaci\xF3n peruana, incluyendo aquellas relacionadas con:</p>
        <ul class="mt-1 list-disc space-y-1 pl-5 text-muted">
          <li>requerimientos formulados por autoridades competentes;</li>
          <li>obligaciones tributarias;</li>
          <li>obligaciones contables;</li>
          <li>conservaci\xF3n de informaci\xF3n;</li>
          <li>prevenci\xF3n del fraude;</li>
          <li>seguridad de la informaci\xF3n;</li>
          <li>investigaciones administrativas o judiciales.</li>
        </ul>
        <p class="mt-1 text-muted">El Cliente es responsable del origen, licitud y comunicaci\xF3n a Motiva de los datos personales que proporcione, y deber\xE1 contar con la base legal correspondiente para su tratamiento y comunicaci\xF3n, conforme a la legislaci\xF3n aplicable.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 35.- Ejercicio y defensa de derechos</h4>
        <p class="mt-1 text-muted">Motiva podr\xE1 tratar datos personales cuando ello resulte necesario para ejercer, proteger o defender sus derechos e intereses leg\xEDtimos en procedimientos administrativos, judiciales, arbitrales o de cualquier otra naturaleza permitida por la legislaci\xF3n.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 36.- Prevenci\xF3n del fraude y seguridad</h4>
        <p class="mt-1 text-muted">Con la finalidad de garantizar la seguridad de la Plataforma y proteger tanto a los Beneficiarios como a Motiva frente a actividades fraudulentas o il\xEDcitas, Motiva podr\xE1 tratar datos personales relacionados con:</p>
        <ul class="mt-1 list-disc space-y-1 pl-5 text-muted">
          <li>autenticaci\xF3n;</li>
          <li>validaci\xF3n de identidad;</li>
          <li>monitoreo de accesos;</li>
          <li>registros de actividad;</li>
          <li>an\xE1lisis de riesgos;</li>
          <li>prevenci\xF3n de fraudes;</li>
          <li>detecci\xF3n de operaciones inusuales.</li>
        </ul>
        <p class="mt-1 text-muted">Estos tratamientos se realizar\xE1n observando los principios de necesidad, proporcionalidad y seguridad previstos por la legislaci\xF3n aplicable.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 37.- Tratamiento de datos sensibles</h4>
        <p class="mt-1 text-muted">Como regla general, Motiva no solicita ni trata datos personales sensibles. Cuando excepcionalmente resulte necesario tratar esta categor\xEDa de datos, dicho tratamiento se realizar\xE1 \xFAnicamente cuando exista una base legal suficiente y se implementen las medidas de seguridad reforzadas exigidas por la legislaci\xF3n vigente.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 38.- Tratamientos adicionales</h4>
        <p class="mt-1 text-muted">Si en el futuro Motiva incorpora nuevos servicios o funcionalidades que impliquen tratamientos distintos a los descritos en la presente Pol\xEDtica, verificar\xE1 previamente la existencia de una base legal que habilite dicho tratamiento y actualizar\xE1 la presente Pol\xEDtica cuando corresponda.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 39.- Revocatoria del consentimiento</h4>
        <p class="mt-1 text-muted">Cuando el tratamiento se base en el consentimiento del titular, \xE9ste podr\xE1 revocarlo en cualquier momento mediante los canales habilitados por Motiva.</p>
        <p class="mt-1 text-muted">La revocatoria no afectar\xE1 la licitud de los tratamientos realizados con anterioridad ni impedir\xE1 aquellos tratamientos que deban continuar realiz\xE1ndose en virtud de otra base legal.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 40.- Tratamientos autorizados por ley</h4>
        <p class="mt-1 text-muted">Nada de lo previsto en la presente Pol\xEDtica limitar\xE1 la facultad de Motiva para realizar tratamientos de datos personales cuando \xE9stos se encuentren expresamente autorizados o exigidos por la legislaci\xF3n aplicable o por mandato de autoridad competente.</p>

        <h3 class="mt-8 text-[13px] font-semibold uppercase tracking-wide text-primary">CAP\xCDTULO VI &mdash; COMUNICACI\xD3N, ACCESO Y TRANSFERENCIA DE DATOS PERSONALES</h3>
        <h4 class="mt-4 font-medium">Art\xEDculo 41.- Regla general</h4>
        <p class="mt-1 text-muted">Motiva tratar\xE1 los datos personales de los Beneficiarios de manera confidencial y \xFAnicamente permitir\xE1 su acceso, comunicaci\xF3n o transferencia en los casos previstos en la presente Pol\xEDtica, cuando exista una base legal que lo habilite o cuando resulte necesario para la adecuada prestaci\xF3n de los servicios ofrecidos mediante la plataforma BonoPay.</p>
        <p class="mt-1 text-muted">En ning\xFAn caso Motiva comercializar\xE1 los datos personales de los Beneficiarios ni los utilizar\xE1 para finalidades incompatibles con las informadas en la presente Pol\xEDtica.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 42.- Acceso interno</h4>
        <p class="mt-1 text-muted">Los datos personales podr\xE1n ser accesibles \xFAnicamente por el personal de Motiva que requiera conocer dicha informaci\xF3n para el cumplimiento de sus funciones.</p>
        <p class="mt-1 text-muted">Motiva implementar\xE1 controles internos destinados a garantizar que el acceso a los datos personales se limite al personal autorizado, de acuerdo con el principio de necesidad de acceso.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 43.- Proveedores de servicios</h4>
        <p class="mt-1 text-muted">Motiva podr\xE1 permitir el acceso a datos personales a proveedores que presten servicios necesarios para la operaci\xF3n de BonoPay, incluyendo, entre otros:</p>
        <ul class="mt-1 list-disc space-y-1 pl-5 text-muted">
          <li>proveedores de infraestructura tecnol\xF3gica;</li>
          <li>servicios de alojamiento en la nube;</li>
          <li>proveedores de autenticaci\xF3n;</li>
          <li>procesadores de pago;</li>
          <li>proveedores de mensajer\xEDa electr\xF3nica o SMS;</li>
          <li>servicios de soporte tecnol\xF3gico;</li>
          <li>proveedores de ciberseguridad;</li>
          <li>proveedores de an\xE1lisis de fraude;</li>
          <li>auditores y consultores especializados.</li>
        </ul>
        <p class="mt-1 text-muted">En todos los casos, Motiva procurar\xE1 que dichos proveedores asuman obligaciones contractuales de confidencialidad, seguridad de la informaci\xF3n y protecci\xF3n de datos personales acordes con la legislaci\xF3n aplicable.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 44.- Empresas clientes</h4>
        <p class="mt-1 text-muted">Cuando resulte necesario para la ejecuci\xF3n de los programas de incentivos o beneficios administrados mediante BonoPay, Motiva podr\xE1 comunicar a las empresas clientes la informaci\xF3n estrictamente necesaria para:</p>
        <ul class="mt-1 list-disc space-y-1 pl-5 text-muted">
          <li>validar la condici\xF3n de Beneficiario;</li>
          <li>administrar el programa correspondiente;</li>
          <li>verificar la entrega de incentivos;</li>
          <li>atender incidencias relacionadas con el programa;</li>
          <li>cumplir obligaciones contractuales asumidas con dichas empresas.</li>
        </ul>
        <p class="mt-1 text-muted">En todos los casos, la comunicaci\xF3n de datos personales se limitar\xE1 a la informaci\xF3n necesaria para el cumplimiento de las finalidades descritas en la presente Pol\xEDtica.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 45.- Autoridades competentes</h4>
        <p class="mt-1 text-muted">Motiva podr\xE1 comunicar datos personales cuando ello sea requerido por autoridad administrativa, judicial, arbitral o fiscal competente, siempre que el requerimiento se formule conforme a la legislaci\xF3n aplicable.</p>
        <p class="mt-1 text-muted">Asimismo, Motiva podr\xE1 conservar o entregar informaci\xF3n cuando ello resulte necesario para:</p>
        <ul class="mt-1 list-disc space-y-1 pl-5 text-muted">
          <li>cumplir obligaciones legales;</li>
          <li>prevenir o investigar actividades il\xEDcitas;</li>
          <li>proteger derechos propios o de terceros;</li>
          <li>colaborar con investigaciones oficiales.</li>
        </ul>
        <h4 class="mt-4 font-medium">Art\xEDculo 46.- Transferencias nacionales e internacionales</h4>
        <p class="mt-1 text-muted">Con ocasi\xF3n de la prestaci\xF3n de los servicios ofrecidos mediante BonoPay, determinados datos personales podr\xE1n ser objeto de transferencia dentro o fuera del territorio peruano cuando ello resulte necesario para la operaci\xF3n de la Plataforma.</p>
        <p class="mt-1 text-muted">Cuando dichas transferencias impliquen el tratamiento de datos personales por proveedores ubicados en otras jurisdicciones, Motiva adoptar\xE1 medidas razonables para asegurar que los datos personales contin\xFAen siendo tratados con un nivel adecuado de protecci\xF3n conforme a la legislaci\xF3n aplicable.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 47.- Proveedores tecnol\xF3gicos internacionales</h4>
        <p class="mt-1 text-muted">La infraestructura tecnol\xF3gica utilizada por BonoPay podr\xE1 apoyarse en servicios proporcionados por empresas ubicadas dentro o fuera del Per\xFA.</p>
        <p class="mt-1 text-muted">En tales casos, Motiva procurar\xE1 seleccionar proveedores que implementen est\xE1ndares adecuados de seguridad de la informaci\xF3n y protecci\xF3n de datos personales, as\xED como mecanismos contractuales apropiados para garantizar la confidencialidad y seguridad de la informaci\xF3n.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 48.- Procesadores de pago</h4>
        <p class="mt-1 text-muted">Cuando el Beneficiario utilice funcionalidades que involucren operaciones de pago, los datos personales estrictamente necesarios podr\xE1n ser comunicados a los proveedores de servicios de pago con la finalidad de procesar las operaciones correspondientes.</p>
        <p class="mt-1 text-muted">Motiva no almacena informaci\xF3n financiera m\xE1s all\xE1 de aquella que resulte necesaria para la administraci\xF3n de la operaci\xF3n y conforme a las medidas de seguridad implementadas por los proveedores especializados y la legislaci\xF3n aplicable.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 49.- Confidencialidad</h4>
        <p class="mt-1 text-muted">Toda persona que tenga acceso a datos personales tratados por Motiva deber\xE1 mantener la confidencialidad de dicha informaci\xF3n, incluso despu\xE9s de finalizada la relaci\xF3n que motiv\xF3 dicho acceso, salvo que exista obligaci\xF3n legal que disponga lo contrario.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 50.- Limitaci\xF3n de las comunicaciones</h4>
        <p class="mt-1 text-muted">Motiva \xFAnicamente comunicar\xE1 o permitir\xE1 el acceso a datos personales cuando ello resulte necesario para el cumplimiento de las finalidades previstas en la presente Pol\xEDtica, procurando que la informaci\xF3n compartida sea adecuada, pertinente y limitada a lo estrictamente necesario para cada caso.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 51.- Servicios de computaci\xF3n en la nube</h4>
        <p class="mt-1 text-muted">Motiva podr\xE1 utilizar servicios de infraestructura, almacenamiento, procesamiento o respaldo provistos por terceros especializados en computaci\xF3n en la nube para la operaci\xF3n de BonoPay.</p>
        <p class="mt-1 text-muted">La contrataci\xF3n de dichos servicios no implica una transferencia de la responsabilidad sobre el tratamiento de los datos personales, la cual continuar\xE1 siendo asumida por Motiva.</p>
        <p class="mt-1 text-muted">Motiva procurar\xE1 que dichos proveedores implementen medidas de seguridad acordes con est\xE1ndares internacionalmente reconocidos y asuman obligaciones contractuales de confidencialidad y protecci\xF3n de datos personales.</p>

        <h3 class="mt-8 text-[13px] font-semibold uppercase tracking-wide text-primary">CAP\xCDTULO VII &mdash; SEGURIDAD DE LA INFORMACI\xD3N Y PROTECCI\xD3N DE LOS DATOS PERSONALES</h3>
        <h4 class="mt-4 font-medium">Art\xEDculo 52.- Compromiso con la seguridad de la informaci\xF3n</h4>
        <p class="mt-1 text-muted">Motiva reconoce que la seguridad de la informaci\xF3n constituye un elemento esencial para garantizar la protecci\xF3n de los datos personales tratados mediante la plataforma BonoPay.</p>
        <p class="mt-1 text-muted">En tal sentido, implementa medidas t\xE9cnicas, organizativas y administrativas razonables destinadas a preservar la confidencialidad, integridad, disponibilidad y resiliencia de los datos personales, procurando reducir los riesgos asociados a su tratamiento.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 53.- Medidas de seguridad</h4>
        <p class="mt-1 text-muted">Motiva implementar\xE1 medidas de seguridad apropiadas considerando, entre otros factores:</p>
        <p class="mt-1 text-muted">a) La naturaleza de los datos personales tratados.</p>
        <p class="mt-1 text-muted">b) Los riesgos asociados al tratamiento.</p>
        <p class="mt-1 text-muted">c) El estado de la tecnolog\xEDa.</p>
        <p class="mt-1 text-muted">d) Los costos de implementaci\xF3n.</p>
        <p class="mt-1 text-muted">e) La probabilidad e impacto de un incidente de seguridad.</p>
        <p class="mt-1 text-muted">Las medidas de seguridad ser\xE1n revisadas peri\xF3dicamente con la finalidad de mantener un nivel adecuado de protecci\xF3n frente a riesgos tecnol\xF3gicos y operativos.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 54.- Controles de acceso</h4>
        <p class="mt-1 text-muted">Motiva adoptar\xE1 mecanismos destinados a garantizar que \xFAnicamente las personas debidamente autorizadas puedan acceder a los datos personales.</p>
        <p class="mt-1 text-muted">Entre otros, podr\xE1n implementarse controles relacionados con:</p>
        <ul class="mt-1 list-disc space-y-1 pl-5 text-muted">
          <li>autenticaci\xF3n de usuarios;</li>
          <li>perfiles de acceso;</li>
          <li>segregaci\xF3n de funciones;</li>
          <li>registros de acceso;</li>
          <li>mecanismos de trazabilidad;</li>
          <li>revisi\xF3n peri\xF3dica de privilegios.</li>
        </ul>
        <h4 class="mt-4 font-medium">Art\xEDculo 55.- Seguridad de la infraestructura tecnol\xF3gica</h4>
        <p class="mt-1 text-muted">Motiva procurar\xE1 mantener una infraestructura tecnol\xF3gica que incorpore medidas de seguridad razonables para proteger la Plataforma BonoPay frente a amenazas internas y externas.</p>
        <p class="mt-1 text-muted">Estas medidas podr\xE1n comprender, entre otras:</p>
        <ul class="mt-1 list-disc space-y-1 pl-5 text-muted">
          <li>cifrado de comunicaciones;</li>
          <li>mecanismos de autenticaci\xF3n multifactor cuando corresponda;</li>
          <li>respaldo peri\xF3dico de informaci\xF3n;</li>
          <li>monitoreo de seguridad;</li>
          <li>protecci\xF3n contra software malicioso;</li>
          <li>actualizaci\xF3n de componentes tecnol\xF3gicos.</li>
        </ul>
        <h4 class="mt-4 font-medium">Art\xEDculo 56.- Gesti\xF3n de incidentes de seguridad</h4>
        <p class="mt-1 text-muted">Motiva contar\xE1 con procedimientos internos destinados a identificar, registrar, evaluar, contener y gestionar incidentes de seguridad que puedan afectar los datos personales tratados mediante la Plataforma.</p>
        <p class="mt-1 text-muted">Cuando corresponda conforme a la legislaci\xF3n aplicable, Motiva adoptar\xE1 las medidas necesarias para mitigar los efectos del incidente y atender las obligaciones legales que resulten aplicables.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 57.- Confidencialidad</h4>
        <p class="mt-1 text-muted">Toda persona que intervenga en el tratamiento de datos personales por cuenta de Motiva estar\xE1 obligada a mantener la confidencialidad de la informaci\xF3n a la que tenga acceso.</p>
        <p class="mt-1 text-muted">Dicha obligaci\xF3n subsistir\xE1 incluso despu\xE9s de concluida la relaci\xF3n laboral, contractual o comercial que motiv\xF3 el acceso a los datos personales.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 58.- Capacitaci\xF3n</h4>
        <p class="mt-1 text-muted">Motiva promover\xE1 que su personal reciba capacitaci\xF3n peri\xF3dica en materia de protecci\xF3n de datos personales, seguridad de la informaci\xF3n y buenas pr\xE1cticas relacionadas con el tratamiento de informaci\xF3n personal.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 59.- Evaluaci\xF3n y mejora continua</h4>
        <p class="mt-1 text-muted">Motiva podr\xE1 revisar peri\xF3dicamente sus procedimientos, controles y medidas de seguridad con la finalidad de identificar oportunidades de mejora y fortalecer continuamente la protecci\xF3n de los datos personales tratados mediante BonoPay.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 60.- Conservaci\xF3n segura de la informaci\xF3n</h4>
        <p class="mt-1 text-muted">Durante todo el per\xEDodo en que los datos personales sean tratados o conservados por Motiva, se adoptar\xE1n medidas razonables para evitar su p\xE9rdida, alteraci\xF3n, destrucci\xF3n, acceso no autorizado o cualquier otro tratamiento incompatible con la presente Pol\xEDtica y con la legislaci\xF3n aplicable.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 61.- Seguridad de proveedores y terceros</h4>
        <p class="mt-1 text-muted">Cuando Motiva contrate a terceros que, con motivo de la prestaci\xF3n de un servicio, puedan acceder a datos personales tratados mediante la plataforma BonoPay, procurar\xE1 verificar que dichos terceros implementen medidas de seguridad apropiadas y asuman obligaciones contractuales relacionadas con la confidencialidad, la protecci\xF3n de datos personales y la seguridad de la informaci\xF3n.</p>
        <p class="mt-1 text-muted">La contrataci\xF3n de dichos proveedores no exime a Motiva de las responsabilidades que le correspondan como responsable del tratamiento.</p>

        <h3 class="mt-8 text-[13px] font-semibold uppercase tracking-wide text-primary">CAP\xCDTULO VIII &mdash; DERECHOS DE LOS TITULARES DE LOS DATOS PERSONALES</h3>
        <h4 class="mt-4 font-medium">Art\xEDculo 62.- Derechos de los titulares</h4>
        <p class="mt-1 text-muted">Los titulares de los datos personales podr\xE1n ejercer los derechos que les reconoce la Ley N\xB0 29733, su Reglamento y dem\xE1s normas aplicables respecto de los datos personales tratados por Motiva.</p>
        <p class="mt-1 text-muted">Motiva adoptar\xE1 las medidas necesarias para garantizar que dichos derechos puedan ejercerse de manera sencilla, gratuita y dentro de los plazos establecidos por la legislaci\xF3n vigente.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 63.- Derecho de informaci\xF3n</h4>
        <p class="mt-1 text-muted">El titular podr\xE1 solicitar informaci\xF3n respecto del tratamiento de sus datos personales, incluyendo, cuando corresponda:</p>
        <ul class="mt-1 list-disc space-y-1 pl-5 text-muted">
          <li>la existencia de tratamiento;</li>
          <li>las finalidades del tratamiento;</li>
          <li>las categor\xEDas de datos tratados;</li>
          <li>los destinatarios o categor\xEDas de destinatarios;</li>
          <li>el tiempo de conservaci\xF3n de la informaci\xF3n;</li>
          <li>los mecanismos para ejercer sus derechos.</li>
        </ul>
        <h4 class="mt-4 font-medium">Art\xEDculo 64.- Derecho de acceso</h4>
        <p class="mt-1 text-muted">El titular podr\xE1 solicitar conocer los datos personales que Motiva mantiene sobre \xE9l, as\xED como cualquier otra informaci\xF3n prevista en la legislaci\xF3n aplicable relacionada con dicho tratamiento.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 65.- Derecho de rectificaci\xF3n</h4>
        <p class="mt-1 text-muted">El titular podr\xE1 solicitar la actualizaci\xF3n, inclusi\xF3n o rectificaci\xF3n de los datos personales que resulten inexactos, incompletos o desactualizados.</p>
        <p class="mt-1 text-muted">Motiva podr\xE1 solicitar la documentaci\xF3n necesaria para verificar la procedencia de la solicitud.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 66.- Derecho de cancelaci\xF3n</h4>
        <p class="mt-1 text-muted">El titular podr\xE1 solicitar la supresi\xF3n o cancelaci\xF3n de sus datos personales cuando corresponda conforme a la legislaci\xF3n aplicable.</p>
        <p class="mt-1 text-muted">La cancelaci\xF3n no proceder\xE1 cuando exista una obligaci\xF3n legal o contractual que justifique la conservaci\xF3n de los datos personales durante un per\xEDodo determinado.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 67.- Derecho de oposici\xF3n</h4>
        <p class="mt-1 text-muted">El titular podr\xE1 oponerse al tratamiento de sus datos personales cuando la legislaci\xF3n aplicable as\xED lo permita y existan motivos fundados relacionados con su situaci\xF3n particular.</p>
        <p class="mt-1 text-muted">Motiva evaluar\xE1 cada solicitud considerando la naturaleza del tratamiento y las obligaciones legales que resulten aplicables.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 68.- Ejercicio de derechos</h4>
        <p class="mt-1 text-muted">Los derechos previstos en la presente Pol\xEDtica podr\xE1n ejercerse mediante los canales de atenci\xF3n habilitados por Motiva, los cuales ser\xE1n informados permanentemente en la Plataforma y en el Cap\xEDtulo X de la presente Pol\xEDtica.</p>
        <p class="mt-1 text-muted">Las solicitudes deber\xE1n contener la informaci\xF3n m\xEDnima necesaria para identificar al titular y atender adecuadamente el requerimiento.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 69.- Verificaci\xF3n de identidad</h4>
        <p class="mt-1 text-muted">Con la finalidad de proteger la confidencialidad de los datos personales, Motiva podr\xE1 adoptar medidas razonables para verificar la identidad del solicitante antes de atender cualquier solicitud relacionada con el ejercicio de derechos.</p>
        <p class="mt-1 text-muted">Cuando act\xFAe un representante, podr\xE1 requerirse la acreditaci\xF3n de la representaci\xF3n correspondiente.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 70.- Atenci\xF3n de solicitudes</h4>
        <p class="mt-1 text-muted">Motiva atender\xE1 las solicitudes presentadas por los titulares dentro de los plazos previstos por la legislaci\xF3n aplicable.</p>
        <p class="mt-1 text-muted">Cuando resulte necesario solicitar informaci\xF3n adicional para atender una solicitud, Motiva informar\xE1 oportunamente dicha circunstancia al solicitante.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 71.- Improcedencia de solicitudes</h4>
        <p class="mt-1 text-muted">Motiva podr\xE1 declarar improcedente una solicitud cuando:</p>
        <p class="mt-1 text-muted">a) quien la formule no acredite ser titular de los datos o su representante;</p>
        <p class="mt-1 text-muted">b) la solicitud resulte manifiestamente infundada;</p>
        <p class="mt-1 text-muted">c) exista una obligaci\xF3n legal que impida acceder a lo solicitado;</p>
        <p class="mt-1 text-muted">d) la legislaci\xF3n aplicable establezca una limitaci\xF3n al ejercicio del derecho correspondiente.</p>
        <p class="mt-1 text-muted">La decisi\xF3n ser\xE1 comunicada al solicitante indicando las razones que la sustentan.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 72.- Conservaci\xF3n durante el tr\xE1mite</h4>
        <p class="mt-1 text-muted">La presentaci\xF3n de una solicitud relacionada con el ejercicio de derechos no implicar\xE1 la eliminaci\xF3n inmediata de los datos personales cuando exista obligaci\xF3n legal de conservarlos o cuando su conservaci\xF3n resulte necesaria para la atenci\xF3n de la propia solicitud.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 73.- Atenci\xF3n gratuita</h4>
        <p class="mt-1 text-muted">El ejercicio de los derechos reconocidos en la presente Pol\xEDtica ser\xE1 gratuito, salvo los supuestos expresamente previstos por la legislaci\xF3n aplicable.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 74.- Autoridad competente</h4>
        <p class="mt-1 text-muted">Si el titular considera que Motiva no ha atendido adecuadamente su solicitud o ha vulnerado sus derechos en materia de protecci\xF3n de datos personales, podr\xE1 acudir a la Autoridad Nacional de Protecci\xF3n de Datos Personales conforme al procedimiento previsto en la legislaci\xF3n vigente, sin perjuicio de cualquier otro mecanismo legal que resulte aplicable.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 75.- Registro de solicitudes</h4>
        <p class="mt-1 text-muted">Motiva podr\xE1 mantener un registro interno de las solicitudes relacionadas con el ejercicio de los derechos de los titulares, con la finalidad de acreditar el cumplimiento de sus obligaciones legales, mejorar sus procedimientos internos y atender eventuales requerimientos de la Autoridad Nacional de Protecci\xF3n de Datos Personales.</p>

        <h3 class="mt-8 text-[13px] font-semibold uppercase tracking-wide text-primary">CAP\xCDTULO IX &mdash; CONSERVACI\xD3N Y ELIMINACI\xD3N DE LOS DATOS PERSONALES</h3>
        <h4 class="mt-4 font-medium">Art\xEDculo 76.- Principio general de conservaci\xF3n</h4>
        <p class="mt-1 text-muted">Motiva conservar\xE1 los datos personales \xFAnicamente durante el tiempo que resulte necesario para cumplir las finalidades descritas en la presente Pol\xEDtica, atender las obligaciones legales o contractuales aplicables, ejercer o defender derechos y cumplir con los per\xEDodos de conservaci\xF3n previstos por la legislaci\xF3n vigente.</p>
        <p class="mt-1 text-muted">Una vez cumplidas dichas finalidades, los datos personales ser\xE1n eliminados, anonimizados o bloqueados, seg\xFAn corresponda.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 77.- Criterios para determinar el plazo de conservaci\xF3n</h4>
        <p class="mt-1 text-muted">El per\xEDodo de conservaci\xF3n de los datos personales ser\xE1 determinado considerando, entre otros factores:</p>
        <p class="mt-1 text-muted">a) La finalidad para la cual fueron recopilados.</p>
        <p class="mt-1 text-muted">b) La naturaleza de los datos personales.</p>
        <p class="mt-1 text-muted">c) Las obligaciones legales o regulatorias aplicables.</p>
        <p class="mt-1 text-muted">d) Los plazos de prescripci\xF3n previstos por la legislaci\xF3n.</p>
        <p class="mt-1 text-muted">e) La necesidad de atender reclamos, auditor\xEDas, investigaciones o procedimientos administrativos, judiciales o arbitrales.</p>
        <p class="mt-1 text-muted">f) Los requerimientos de seguridad de la informaci\xF3n y continuidad del negocio.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 78.- Conservaci\xF3n por obligaciones legales</h4>
        <p class="mt-1 text-muted">Cuando una disposici\xF3n legal, una orden de autoridad competente o una obligaci\xF3n contractual exija conservar determinada informaci\xF3n durante un per\xEDodo espec\xEDfico, Motiva mantendr\xE1 dichos datos personales durante el plazo correspondiente, aun cuando la finalidad principal del tratamiento hubiera concluido.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 79.- Conservaci\xF3n para la defensa de derechos</h4>
        <p class="mt-1 text-muted">Motiva podr\xE1 conservar los datos personales cuando ello resulte razonablemente necesario para ejercer, proteger o defender sus derechos en procedimientos administrativos, judiciales, arbitrales o de cualquier otra naturaleza.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 80.- Eliminaci\xF3n de los datos personales</h4>
        <p class="mt-1 text-muted">Cuando los datos personales dejen de ser necesarios para las finalidades que motivaron su recopilaci\xF3n y no exista una obligaci\xF3n legal que justifique su conservaci\xF3n, Motiva proceder\xE1 a su eliminaci\xF3n segura o a su anonimizaci\xF3n, seg\xFAn resulte t\xE9cnicamente y legalmente procedente.</p>
        <p class="mt-1 text-muted">La eliminaci\xF3n se realizar\xE1 procurando evitar la recuperaci\xF3n no autorizada de la informaci\xF3n.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 81.- Anonimizaci\xF3n</h4>
        <p class="mt-1 text-muted">Motiva podr\xE1 anonimizar determinados conjuntos de informaci\xF3n cuando ello permita cumplir finalidades estad\xEDsticas, anal\xEDticas, de mejora de servicios o de investigaci\xF3n, siempre que la informaci\xF3n resultante no permita identificar razonablemente a una persona natural.</p>
        <p class="mt-1 text-muted">La informaci\xF3n anonimizada dejar\xE1 de tener el car\xE1cter de dato personal mientras no sea posible reidentificar al titular.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 82.- Copias de seguridad</h4>
        <p class="mt-1 text-muted">Con la finalidad de garantizar la continuidad operativa, recuperaci\xF3n ante desastres y seguridad de la informaci\xF3n, Motiva podr\xE1 mantener copias de respaldo que contengan datos personales.</p>
        <p class="mt-1 text-muted">Dichas copias estar\xE1n sujetas a medidas de seguridad apropiadas y ser\xE1n conservadas \xFAnicamente durante el tiempo necesario para cumplir su finalidad.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 83.- Eliminaci\xF3n en sistemas de terceros</h4>
        <p class="mt-1 text-muted">Cuando Motiva utilice proveedores tecnol\xF3gicos para la prestaci\xF3n de los servicios ofrecidos mediante BonoPay, procurar\xE1 que la eliminaci\xF3n o supresi\xF3n de los datos personales tambi\xE9n sea implementada por dichos proveedores cuando corresponda conforme a la relaci\xF3n contractual y a la legislaci\xF3n aplicable.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 84.- Conservaci\xF3n de registros de seguridad</h4>
        <p class="mt-1 text-muted">Los registros de auditor\xEDa, autenticaci\xF3n, accesos, eventos de seguridad y dem\xE1s informaci\xF3n t\xE9cnica podr\xE1n conservarse durante el tiempo necesario para garantizar la seguridad de la Plataforma, prevenir fraudes, atender incidentes y cumplir obligaciones legales o regulatorias.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 85.- Revisi\xF3n peri\xF3dica</h4>
        <p class="mt-1 text-muted">Motiva revisar\xE1 peri\xF3dicamente sus criterios de conservaci\xF3n de datos personales con la finalidad de verificar que la informaci\xF3n no sea conservada por per\xEDodos superiores a los necesarios para cumplir las finalidades descritas en la presente Pol\xEDtica.</p>

        <h3 class="mt-8 text-[13px] font-semibold uppercase tracking-wide text-primary">CAP\xCDTULO X &mdash; CONTACTO, ATENCI\xD3N DE CONSULTAS Y DISPOSICIONES FINALES</h3>
        <h4 class="mt-4 font-medium">Art\xEDculo 86.- Identificaci\xF3n del responsable del tratamiento</h4>
        <p class="mt-1 text-muted">El responsable del tratamiento de los datos personales regulados por la presente Pol\xEDtica es Motiva Soluciones S.A.C., titular de la plataforma tecnol\xF3gica BonoPay.</p>
        <p class="mt-1 text-muted">Motiva realiza el tratamiento de los datos personales conforme a la Ley N\xB0 29733, Ley de Protecci\xF3n de Datos Personales, su Reglamento y dem\xE1s normas aplicables.</p>
        <p class="mt-1 text-muted">La informaci\xF3n de identificaci\xF3n, domicilio y dem\xE1s datos corporativos de Motiva ser\xE1n puestos a disposici\xF3n de los Beneficiarios a trav\xE9s de la Plataforma y de los canales oficiales de atenci\xF3n.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 87.- Canal de atenci\xF3n en materia de privacidad</h4>
        <p class="mt-1 text-muted">Los titulares de los datos personales podr\xE1n formular consultas, solicitudes relacionadas con el tratamiento de sus datos personales o ejercer los derechos reconocidos por la legislaci\xF3n aplicable mediante los canales de atenci\xF3n habilitados por Motiva.</p>
        <p class="mt-1 text-muted">Motiva procurar\xE1 mantener permanentemente actualizados dichos canales de comunicaci\xF3n y brindar atenci\xF3n dentro de los plazos previstos por la legislaci\xF3n vigente.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 88.- Comunicaciones</h4>
        <p class="mt-1 text-muted">Toda comunicaci\xF3n relacionada con la presente Pol\xEDtica podr\xE1 realizarse por medios f\xEDsicos o electr\xF3nicos, incluyendo correo electr\xF3nico, notificaciones dentro de la Plataforma u otros mecanismos que Motiva habilite para tal efecto.</p>
        <p class="mt-1 text-muted">Cuando la legislaci\xF3n lo requiera, Motiva podr\xE1 solicitar confirmaci\xF3n de recepci\xF3n o aceptaci\xF3n de determinadas comunicaciones.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 89.- Actualizaci\xF3n de la informaci\xF3n del Beneficiario</h4>
        <p class="mt-1 text-muted">El Beneficiario se compromete a mantener actualizados los datos personales proporcionados a Motiva.</p>
        <p class="mt-1 text-muted">En caso de producirse modificaciones relevantes respecto de la informaci\xF3n registrada, el Beneficiario deber\xE1 actualizarlos utilizando los mecanismos habilitados por la Plataforma o comunic\xE1ndose con Motiva.</p>
        <p class="mt-1 text-muted">Motiva no ser\xE1 responsable por los perjuicios derivados de la falta de actualizaci\xF3n de los datos personales cuando ello impida la adecuada prestaci\xF3n de los servicios o la correcta atenci\xF3n de comunicaciones relacionadas con la Plataforma.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 90.- Conservaci\xF3n de evidencia</h4>
        <p class="mt-1 text-muted">Motiva podr\xE1 conservar registros electr\xF3nicos relacionados con la aceptaci\xF3n de la presente Pol\xEDtica, el otorgamiento del consentimiento cuando resulte exigible, las comunicaciones remitidas al Beneficiario y dem\xE1s actuaciones relevantes vinculadas con el tratamiento de datos personales, con la finalidad de acreditar el cumplimiento de sus obligaciones legales y contractuales.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 91.- Integraci\xF3n con los T\xE9rminos y Condiciones</h4>
        <p class="mt-1 text-muted">La presente Pol\xEDtica forma parte integrante de los T\xE9rminos y Condiciones de Uso de BonoPay.</p>
        <p class="mt-1 text-muted">Ambos documentos deber\xE1n interpretarse de manera arm\xF3nica y complementaria.</p>
        <p class="mt-1 text-muted">En caso de conflicto respecto del tratamiento de datos personales, prevalecer\xE1n las disposiciones contenidas en la presente Pol\xEDtica.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 92.- Independencia de las disposiciones</h4>
        <p class="mt-1 text-muted">La eventual nulidad, invalidez o inaplicabilidad de alguna disposici\xF3n de la presente Pol\xEDtica no afectar\xE1 la validez de las dem\xE1s disposiciones, las cuales continuar\xE1n plenamente vigentes en aquello que resulte compatible con la legislaci\xF3n aplicable.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 93.- Modificaciones de la Pol\xEDtica</h4>
        <p class="mt-1 text-muted">Motiva podr\xE1 modificar la presente Pol\xEDtica cuando ello resulte necesario para:</p>
        <ul class="mt-1 list-disc space-y-1 pl-5 text-muted">
          <li>adecuarse a cambios legislativos;</li>
          <li>incorporar nuevas funcionalidades de BonoPay;</li>
          <li>modificar procesos internos relacionados con el tratamiento de datos personales;</li>
          <li>implementar mejoras tecnol\xF3gicas;</li>
          <li>fortalecer las medidas de seguridad; o</li>
          <li>responder a cambios en el modelo de negocio.</li>
        </ul>
        <p class="mt-1 text-muted">Cuando las modificaciones resulten sustanciales o afecten la forma en que se tratan los datos personales, Motiva las comunicar\xE1 a los Beneficiarios utilizando medios razonablemente adecuados y, cuando corresponda, solicitar\xE1 nuevamente el consentimiento exigido por la legislaci\xF3n.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 94.- Interpretaci\xF3n</h4>
        <p class="mt-1 text-muted">La presente Pol\xEDtica deber\xE1 interpretarse conforme a la legislaci\xF3n peruana sobre protecci\xF3n de datos personales y procurando garantizar el mayor nivel posible de protecci\xF3n de los derechos de los titulares.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 95.- Legislaci\xF3n aplicable</h4>
        <p class="mt-1 text-muted">La presente Pol\xEDtica se rige por la Ley N\xB0 29733, su Reglamento y las dem\xE1s normas peruanas que regulen el tratamiento de datos personales.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 96.- Soluci\xF3n de consultas</h4>
        <p class="mt-1 text-muted">Las consultas relacionadas con la interpretaci\xF3n o aplicaci\xF3n de la presente Pol\xEDtica podr\xE1n dirigirse a Motiva mediante los canales oficiales de atenci\xF3n indicados en la Plataforma.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 97.- Vigencia</h4>
        <p class="mt-1 text-muted">La presente Pol\xEDtica entrar\xE1 en vigencia desde la fecha de su publicaci\xF3n en la plataforma BonoPay y permanecer\xE1 vigente hasta que sea sustituida por una nueva versi\xF3n.</p>
        <p class="mt-1 text-muted">Las versiones actualizadas ser\xE1n publicadas oportunamente para conocimiento de los Beneficiarios.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 98.- Publicidad de la Pol\xEDtica</h4>
        <p class="mt-1 text-muted">La versi\xF3n vigente de la presente Pol\xEDtica permanecer\xE1 disponible para consulta permanente a trav\xE9s de la plataforma BonoPay y dem\xE1s medios que Motiva considere apropiados.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 99.- Idioma oficial</h4>
        <p class="mt-1 text-muted">La presente Pol\xEDtica ha sido redactada en idioma espa\xF1ol.</p>
        <p class="mt-1 text-muted">En caso de que Motiva publique traducciones a otros idiomas, la versi\xF3n en espa\xF1ol prevalecer\xE1 para efectos de su interpretaci\xF3n, salvo disposici\xF3n legal en contrario.</p>
        <h4 class="mt-4 font-medium">Art\xEDculo 100.- Declaraci\xF3n final</h4>
        <p class="mt-1 text-muted">Motiva reafirma su compromiso con la protecci\xF3n de los datos personales y con el respeto de los derechos de sus titulares, procurando que el tratamiento de la informaci\xF3n personal se realice de manera transparente, segura, responsable y conforme a la legislaci\xF3n peruana vigente.</p>
        <p class="mt-1 text-muted">La protecci\xF3n de los datos personales constituye un elemento esencial para el desarrollo de los servicios ofrecidos mediante la plataforma BonoPay y para la generaci\xF3n de confianza entre Motiva, sus clientes y los Beneficiarios que utilizan la Plataforma.</p>
      </div>

      <button
        dialogFooter
        type="button"
        (click)="legal.privacyOpen.set(false)"
        class="w-full rounded-full bg-primary py-3.5 text-[15px] font-medium text-white transition hover:bg-primary-dark"
      >
        Entendido
      </button>
    </app-dialog>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LegalDialogs, { className: "LegalDialogs", filePath: "src/app/shared/components/legal-dialogs/legal-dialogs.ts", lineNumber: 1429 });
})();

export {
  IconBase,
  AltArrowDownOutline,
  RefreshOutline,
  LetterOutline,
  Pen2Outline,
  CheckCircleOutline,
  DangerCircleBold,
  InfoCircleOutline,
  CustomFlagPe,
  CustomWhatsappFilled,
  Alert,
  Dialog,
  LegalDialogService,
  LegalDialogs,
  Select
};
