import {
  PROFILE_BRAND_LOGOS,
  PROFILE_EDIT_DIALOG_SECTION_FIELDS,
  PROFILE_EDIT_DIALOG_SECTION_HINTS,
  PROFILE_EDIT_DIALOG_SECTION_TITLES,
  PROFILE_EDIT_LOCK_HOURS
} from "./chunk-QLIUZWYZ.js";
import {
  MapArrowRightLinear,
  MapPointOutline,
  PhoneOutline,
  ShieldCheckOutline,
  UserCircleOutline,
  UserIdOutline,
  UserOutline
} from "./chunk-LPPIOPLR.js";
import {
  PROFILE_PROVIDER,
  ProfileEditForbiddenError
} from "./chunk-SPWIXFIU.js";
import {
  FieldErrorDirective,
  PhoneFormatDirective
} from "./chunk-6X2Q37RP.js";
import {
  CATALOGS_PROVIDER
} from "./chunk-EXI3YIIZ.js";
import {
  ParticipanteStore
} from "./chunk-6PZ6VOJ4.js";
import "./chunk-PATQ5ADP.js";
import {
  ChannelPaymentRuleHelper,
  RequestProfileHelper,
  UtilsHelper,
  ValidatorsHelper,
  normalizeDates
} from "./chunk-AY7TB2CX.js";
import {
  getRoundingMethod
} from "./chunk-S2SB26WJ.js";
import {
  CheckCircleOutline,
  CustomFlagPe,
  DangerCircleBold,
  Dialog,
  InfoCircleOutline,
  LetterOutline,
  Pen2Outline,
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
  Input,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgOptimizedImage,
  NonNullableFormBuilder,
  Output,
  ReactiveFormsModule,
  Validators,
  computed,
  effect,
  inject,
  input,
  millisecondsInHour,
  output,
  setClassMetadata,
  signal,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-QNDTW3UR.js";

// node_modules/date-fns/differenceInHours.js
function differenceInHours(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  const diff = (+laterDate_ - +earlierDate_) / millisecondsInHour;
  return getRoundingMethod(options?.roundingMethod)(diff);
}

// src/app/features/participante/components/profile-edit-dialog/profile-edit-dialog.ts
var _c0 = () => ({ required: "Tienes que seleccionar una opci\xF3n" });
var _c1 = () => ({ pattern: "Ingresa un n\xFAmero de cuenta v\xE1lido" });
var _c2 = () => ({ pattern: "Ingresa un celular v\xE1lido" });
function ProfileEditDialog_Case_7_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 28);
  }
}
function ProfileEditDialog_Case_7_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const firstNamesError_r1 = \u0275\u0275reference(7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(firstNamesError_r1.message());
  }
}
function ProfileEditDialog_Case_7_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 28);
  }
}
function ProfileEditDialog_Case_7_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const paternalError_r2 = \u0275\u0275reference(17);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(paternalError_r2.message());
  }
}
function ProfileEditDialog_Case_7_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 28);
  }
}
function ProfileEditDialog_Case_7_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const maternalError_r3 = \u0275\u0275reference(27);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(maternalError_r3.message());
  }
}
function ProfileEditDialog_Case_7_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 28);
  }
}
function ProfileEditDialog_Case_7_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const emailError_r4 = \u0275\u0275reference(35);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(emailError_r4.message());
  }
}
function ProfileEditDialog_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 24);
    \u0275\u0275text(2, " Nombres");
    \u0275\u0275elementStart(3, "span", 25);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 26);
    \u0275\u0275element(6, "input", 27, 0);
    \u0275\u0275conditionalCreate(8, ProfileEditDialog_Case_7_Conditional_8_Template, 1, 0, ":svg:svg", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, ProfileEditDialog_Case_7_Conditional_9_Template, 2, 1, "p", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div")(11, "label", 30);
    \u0275\u0275text(12, " Apellido paterno");
    \u0275\u0275elementStart(13, "span", 25);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 26);
    \u0275\u0275element(16, "input", 31, 1);
    \u0275\u0275conditionalCreate(18, ProfileEditDialog_Case_7_Conditional_18_Template, 1, 0, ":svg:svg", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(19, ProfileEditDialog_Case_7_Conditional_19_Template, 2, 1, "p", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div")(21, "label", 32);
    \u0275\u0275text(22, " Apellido materno");
    \u0275\u0275elementStart(23, "span", 25);
    \u0275\u0275text(24, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 26);
    \u0275\u0275element(26, "input", 33, 2);
    \u0275\u0275conditionalCreate(28, ProfileEditDialog_Case_7_Conditional_28_Template, 1, 0, ":svg:svg", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(29, ProfileEditDialog_Case_7_Conditional_29_Template, 2, 1, "p", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div")(31, "label", 34);
    \u0275\u0275text(32, " Correo ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 26);
    \u0275\u0275element(34, "input", 35, 3);
    \u0275\u0275conditionalCreate(36, ProfileEditDialog_Case_7_Conditional_36_Template, 1, 0, ":svg:svg", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(37, ProfileEditDialog_Case_7_Conditional_37_Template, 2, 1, "p", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const firstNamesError_r1 = \u0275\u0275reference(7);
    const paternalError_r2 = \u0275\u0275reference(17);
    const maternalError_r3 = \u0275\u0275reference(27);
    const emailError_r4 = \u0275\u0275reference(35);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(firstNamesError_r1.show() ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(firstNamesError_r1.show() ? 9 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(paternalError_r2.show() ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(paternalError_r2.show() ? 19 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(maternalError_r3.show() ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(maternalError_r3.show() ? 29 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(emailError_r4.show() ? 36 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(emailError_r4.show() ? 37 : -1);
  }
}
function ProfileEditDialog_Case_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function ProfileEditDialog_Case_8_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const entityError_r5 = \u0275\u0275reference(6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(entityError_r5.message());
  }
}
function ProfileEditDialog_Case_8_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function ProfileEditDialog_Case_8_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const accountTypeError_r6 = \u0275\u0275reference(14);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(accountTypeError_r6.message());
  }
}
function ProfileEditDialog_Case_8_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function ProfileEditDialog_Case_8_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 43);
  }
}
function ProfileEditDialog_Case_8_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 28);
  }
}
function ProfileEditDialog_Case_8_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const accountError_r7 = \u0275\u0275reference(22);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(accountError_r7.message());
  }
}
function ProfileEditDialog_Case_8_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function ProfileEditDialog_Case_8_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 43);
  }
}
function ProfileEditDialog_Case_8_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 28);
  }
}
function ProfileEditDialog_Case_8_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const cciError_r8 = \u0275\u0275reference(32);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cciError_r8.message());
  }
}
function ProfileEditDialog_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 36);
    \u0275\u0275text(2, " Entidad financiera");
    \u0275\u0275conditionalCreate(3, ProfileEditDialog_Case_8_Conditional_3_Template, 2, 0, "span", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 37);
    \u0275\u0275element(5, "app-select", 38, 4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, ProfileEditDialog_Case_8_Conditional_7_Template, 2, 1, "p", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "label", 39);
    \u0275\u0275text(10, " Tipo de cuenta");
    \u0275\u0275conditionalCreate(11, ProfileEditDialog_Case_8_Conditional_11_Template, 2, 0, "span", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 37);
    \u0275\u0275element(13, "app-select", 40, 5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, ProfileEditDialog_Case_8_Conditional_15_Template, 2, 1, "p", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div")(17, "label", 41);
    \u0275\u0275text(18, " N\xB0 de Cuenta");
    \u0275\u0275conditionalCreate(19, ProfileEditDialog_Case_8_Conditional_19_Template, 2, 0, "span", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 26);
    \u0275\u0275element(21, "input", 42, 6);
    \u0275\u0275conditionalCreate(23, ProfileEditDialog_Case_8_Conditional_23_Template, 1, 0, ":svg:svg", 43);
    \u0275\u0275conditionalCreate(24, ProfileEditDialog_Case_8_Conditional_24_Template, 1, 0, ":svg:svg", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(25, ProfileEditDialog_Case_8_Conditional_25_Template, 2, 1, "p", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div")(27, "label", 44);
    \u0275\u0275text(28, " N\xB0 de Cuenta Interbancaria CCI");
    \u0275\u0275conditionalCreate(29, ProfileEditDialog_Case_8_Conditional_29_Template, 2, 0, "span", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 26);
    \u0275\u0275element(31, "input", 45, 7);
    \u0275\u0275conditionalCreate(33, ProfileEditDialog_Case_8_Conditional_33_Template, 1, 0, ":svg:svg", 43);
    \u0275\u0275conditionalCreate(34, ProfileEditDialog_Case_8_Conditional_34_Template, 1, 0, ":svg:svg", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(35, ProfileEditDialog_Case_8_Conditional_35_Template, 2, 1, "p", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entityError_r5 = \u0275\u0275reference(6);
    const accountTypeError_r6 = \u0275\u0275reference(14);
    const accountError_r7 = \u0275\u0275reference(22);
    const cciError_r8 = \u0275\u0275reference(32);
    const ctx_r8 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r8.bankRequired() ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r8.financialEntityOptions())("clearable", true)("errorMessages", \u0275\u0275pureFunction0(22, _c0))("invalid", entityError_r5.show());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(entityError_r5.show() ? 7 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r8.bankRequired() ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r8.accountTypes())("clearable", true)("errorMessages", \u0275\u0275pureFunction0(23, _c0))("invalid", accountTypeError_r6.show());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(accountTypeError_r6.show() ? 15 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r8.bankRequired() ? 19 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("errorMessages", \u0275\u0275pureFunction0(24, _c1));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r8.isValid("accountNumber") ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(accountError_r7.show() ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(accountError_r7.show() ? 25 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r8.bankRequired() ? 29 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("errorMessages", ctx_r8.cciErrorMessages());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r8.isValid("cci") ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(cciError_r8.show() ? 34 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(cciError_r8.show() ? 35 : -1);
  }
}
function ProfileEditDialog_Case_9_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function ProfileEditDialog_Case_9_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const walletError_r10 = \u0275\u0275reference(6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(walletError_r10.message());
  }
}
function ProfileEditDialog_Case_9_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function ProfileEditDialog_Case_9_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 53);
  }
}
function ProfileEditDialog_Case_9_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const contactPhoneError_r11 = \u0275\u0275reference(17);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(contactPhoneError_r11.message());
  }
}
function ProfileEditDialog_Case_9_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function ProfileEditDialog_Case_9_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const operatorError_r12 = \u0275\u0275reference(26);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(operatorError_r12.message());
  }
}
function ProfileEditDialog_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 46);
    \u0275\u0275text(2, " Billetera");
    \u0275\u0275conditionalCreate(3, ProfileEditDialog_Case_9_Conditional_3_Template, 2, 0, "span", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 37);
    \u0275\u0275element(5, "app-select", 47, 8);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, ProfileEditDialog_Case_9_Conditional_7_Template, 2, 1, "p", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "label", 48);
    \u0275\u0275text(10, " N\xB0 de Celular asociado a la billetera");
    \u0275\u0275conditionalCreate(11, ProfileEditDialog_Case_9_Conditional_11_Template, 2, 0, "span", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 49);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(13, "svg", 50);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "span", 51);
    \u0275\u0275text(15, "+51");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 52, 9);
    \u0275\u0275conditionalCreate(18, ProfileEditDialog_Case_9_Conditional_18_Template, 1, 0, ":svg:svg", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(19, ProfileEditDialog_Case_9_Conditional_19_Template, 2, 1, "p", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div")(21, "label", 54);
    \u0275\u0275text(22, " Operador celular");
    \u0275\u0275conditionalCreate(23, ProfileEditDialog_Case_9_Conditional_23_Template, 2, 0, "span", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 37);
    \u0275\u0275element(25, "app-select", 55, 10);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(27, ProfileEditDialog_Case_9_Conditional_27_Template, 2, 1, "p", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const walletError_r10 = \u0275\u0275reference(6);
    const contactPhoneError_r11 = \u0275\u0275reference(17);
    const operatorError_r12 = \u0275\u0275reference(26);
    const ctx_r8 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r8.walletRequired() ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r8.wallets())("clearable", true)("errorMessages", \u0275\u0275pureFunction0(18, _c0))("invalid", walletError_r10.show());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(walletError_r10.show() ? 7 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r8.walletRequired() ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275styleProp("border-color", contactPhoneError_r11.show() ? "var(--color-danger)" : null);
    \u0275\u0275advance(4);
    \u0275\u0275property("errorMessages", \u0275\u0275pureFunction0(19, _c2));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(contactPhoneError_r11.show() ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(contactPhoneError_r11.show() ? 19 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r8.walletRequired() ? 23 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r8.operators())("clearable", true)("errorMessages", \u0275\u0275pureFunction0(20, _c0))("invalid", operatorError_r12.show());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(operatorError_r12.show() ? 27 : -1);
  }
}
function ProfileEditDialog_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(1, "svg", 56);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(2, "p", 57);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r8 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r8.errorMessage());
  }
}
var ProfileEditDialog = class _ProfileEditDialog {
  section = input.required(...ngDevMode ? [{ debugName: "section" }] : (
    /* istanbul ignore next */
    []
  ));
  profile = input.required(...ngDevMode ? [{ debugName: "profile" }] : (
    /* istanbul ignore next */
    []
  ));
  saved = output();
  closed = output();
  /**
   * The PUT answered 403: the edit permission was consumed or revoked
   * server-side. The page reloads the profile to re-sync the affordances.
   */
  permissionDenied = output();
  fb = inject(NonNullableFormBuilder);
  catalogsRepo = inject(CATALOGS_PROVIDER);
  profileRepo = inject(PROFILE_PROVIDER);
  destroyRef = inject(DestroyRef);
  open = signal(true, ...ngDevMode ? [{ debugName: "open" }] : (
    /* istanbul ignore next */
    []
  ));
  confirmOpen = signal(false, ...ngDevMode ? [{ debugName: "confirmOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : (
    /* istanbul ignore next */
    []
  ));
  errorMessage = signal("", ...ngDevMode ? [{ debugName: "errorMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  financialEntities = signal([], ...ngDevMode ? [{ debugName: "financialEntities" }] : (
    /* istanbul ignore next */
    []
  ));
  accountTypes = signal([], ...ngDevMode ? [{ debugName: "accountTypes" }] : (
    /* istanbul ignore next */
    []
  ));
  wallets = signal([], ...ngDevMode ? [{ debugName: "wallets" }] : (
    /* istanbul ignore next */
    []
  ));
  operators = signal([], ...ngDevMode ? [{ debugName: "operators" }] : (
    /* istanbul ignore next */
    []
  ));
  title = computed(() => PROFILE_EDIT_DIALOG_SECTION_TITLES[this.section()], ...ngDevMode ? [{ debugName: "title" }] : (
    /* istanbul ignore next */
    []
  ));
  hint = computed(() => PROFILE_EDIT_DIALOG_SECTION_HINTS[this.section()], ...ngDevMode ? [{ debugName: "hint" }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Empresa-specific (divergencia Vendedor/Dueño): a `Vendedor` no longer has to
   * fill the bank group, a `Dueño` no longer has to fill the wallet group.
   * Both "Editar" actions stay reachable from the profile page and both
   * catalogs stay full — only the required-ness of the exempted group's
   * fields changes, applied in {@link _applyPaymentSectionRule} below.
   */
  paymentSection = computed(() => ChannelPaymentRuleHelper.sectionFor(this.profile().idEmpresa, this.profile().channelType), ...ngDevMode ? [{ debugName: "paymentSection" }] : (
    /* istanbul ignore next */
    []
  ));
  bankRequired = computed(() => this.paymentSection() !== "wallet", ...ngDevMode ? [{ debugName: "bankRequired" }] : (
    /* istanbul ignore next */
    []
  ));
  walletRequired = computed(() => this.paymentSection() !== "bank", ...ngDevMode ? [{ debugName: "walletRequired" }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * The select shows bank names, while `cciBankCode` tracks the selected bank's
   * CCI prefix so the validator and its error message can react to it.
   */
  financialEntityOptions = computed(() => this.financialEntities().map((entity) => entity.name), ...ngDevMode ? [{ debugName: "financialEntityOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  cciBankCode = signal(null, ...ngDevMode ? [{ debugName: "cciBankCode" }] : (
    /* istanbul ignore next */
    []
  ));
  cciErrorMessages = computed(() => {
    const messages = {
      pattern: "Son 20 d\xEDgitos",
      entityRequired: "Selecciona primero una entidad financiera"
    };
    const code = this.cciBankCode();
    if (code) {
      messages["cciPrefix"] = `El CCI debe empezar con ${code}`;
    }
    return messages;
  }, ...ngDevMode ? [{ debugName: "cciErrorMessages" }] : (
    /* istanbul ignore next */
    []
  ));
  form = this.fb.group({
    firstNames: this.fb.control("", Validators.required),
    paternalLastName: this.fb.control("", Validators.required),
    maternalLastName: this.fb.control("", Validators.required),
    email: this.fb.control("", Validators.email),
    financialEntity: this.fb.control("", Validators.required),
    accountType: this.fb.control("", Validators.required),
    accountNumber: this.fb.control("", ValidatorsHelper.accountNumber()),
    cci: this.fb.control("", ValidatorsHelper.cci(null, false)),
    wallet: this.fb.control("", Validators.required),
    contactPhone: this.fb.control("", ValidatorsHelper.phone()),
    operator: this.fb.control("", Validators.required)
  });
  constructor() {
    this._loadCatalogs();
    this._syncFormWithProfile();
    this._bindCciToFinancialEntity();
    this._applyPaymentSectionRule();
  }
  /**
   * `valid && dirty` alone is not enough for an exempted, optional group: an
   * empty value is valid (nothing to reject) and can end up dirty (typed then
   * cleared), so the checkmark needs a non-empty value too — otherwise it
   * shows next to a blank field.
   */
  isValid(controlName) {
    const control = this.form.controls[controlName];
    return !!control.value && UtilsHelper.isValidAndDirty(control);
  }
  onOpenChange(open) {
    this.open.set(open);
    if (!open) {
      this.closed.emit();
    }
  }
  /**
   * Saving triggers the 24h edit lock, so the warning comes BEFORE the PUT and the
   * beneficiary can still back out.
   *
   * Cancelling discards the edit and closes the whole dialog — it does not return
   * to the form.
   */
  requestSave() {
    if (this.form.invalid || this.saving()) {
      return;
    }
    this.confirmOpen.set(true);
  }
  onConfirmOpenChange(open) {
    if (!open) {
      this.cancelSave();
    }
  }
  confirmSave() {
    this.confirmOpen.set(false);
    this.submit();
  }
  cancelSave() {
    this.confirmOpen.set(false);
    this.onOpenChange(false);
  }
  submit() {
    if (this.form.invalid || this.saving()) {
      return;
    }
    this.saving.set(true);
    this.errorMessage.set("");
    const patch = RequestProfileHelper.createProfilePatch(this.form.value);
    this.profileRepo.patch(patch).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (profile) => {
        this.saved.emit(profile);
        this.open.set(false);
      },
      error: (error) => {
        this.saving.set(false);
        if (error instanceof ProfileEditForbiddenError) {
          this.errorMessage.set("Tu empresa a\xFAn no habilit\xF3 la edici\xF3n de tus datos. Int\xE9ntalo m\xE1s tarde.");
          this.permissionDenied.emit();
        } else {
          this.errorMessage.set("No pudimos guardar tus datos. Intenta de nuevo.");
        }
      }
    });
  }
  /**
   * Each section renders only its catalog-backed selects, so only those catalogs
   * are fetched: banks and account types for `bank`, wallets and operators for
   * `wallet`, none at all for `personal`.
   *
   * The `section` input is not readable at construction time, which is why this
   * runs inside an effect rather than in the constructor body.
   *
   * The CCI validator is re-applied once the bank codes land: the seeded bank was
   * set before the catalog resolved, so its prefix rule was not known yet.
   */
  _loadCatalogs() {
    effect(() => {
      const section = this.section();
      if (section === "bank") {
        this.catalogsRepo.getFinancialEntities().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((entities) => {
          this.financialEntities.set(entities);
          this._applyCciValidator(this.form.controls.financialEntity.value);
        });
        this.catalogsRepo.getAccountTypes().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((types) => this.accountTypes.set(types));
      }
      if (section === "wallet") {
        this.catalogsRepo.getWallets().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((wallets) => this.wallets.set(wallets));
        this.catalogsRepo.getOperators().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((operators) => this.operators.set(operators));
      }
    });
  }
  _syncFormWithProfile() {
    effect(() => {
      const profile = this.profile();
      this.form.setValue({
        firstNames: profile.firstNames,
        paternalLastName: profile.paternalLastName,
        maternalLastName: profile.maternalLastName,
        email: profile.email,
        financialEntity: profile.financialEntity,
        accountType: profile.accountType,
        accountNumber: profile.accountNumber,
        cci: profile.cci,
        wallet: profile.wallet,
        contactPhone: UtilsHelper.toLocalPhone(profile.contactPhone),
        operator: profile.operator
      });
      this._lockToSection();
    });
  }
  /**
   * Enables only the active section's fields, so validation and the patch body are
   * both scoped to it; everything else stays disabled.
   */
  _lockToSection() {
    const editable = PROFILE_EDIT_DIALOG_SECTION_FIELDS[this.section()];
    for (const name of Object.keys(this.form.controls)) {
      const control = this.form.get(name);
      if (editable.includes(name)) {
        control?.enable({ emitEvent: false });
      } else {
        control?.disable({ emitEvent: false });
      }
    }
  }
  /**
   * The CCI must start with the selected bank's code, so its validator is rebuilt
   * whenever the financial entity changes.
   */
  _bindCciToFinancialEntity() {
    this.form.controls.financialEntity.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((entityName) => this._applyCciValidator(entityName));
  }
  /**
   * Reads {@link bankRequired} at call time (not just from the toggle effect)
   * because this also runs from the bank-catalog HTTP callback and from
   * every `financialEntity` value change — either of which can fire after
   * the toggle effect's last run. `required` only toggles whether an empty
   * CCI is rejected; the prefix/length rules stay active either way, so an
   * exempted Vendedor who types something still gets validated against it.
   */
  _applyCciValidator(entityName) {
    const code = this.financialEntities().find((entity) => entity.name === entityName)?.code ?? null;
    this.cciBankCode.set(code);
    this._setValidators(this.form.controls.cci, ValidatorsHelper.cci(code, !!entityName, this.bankRequired()));
  }
  /**
   * Toggles the active section's required-ness per {@link bankRequired}/
   * {@link walletRequired} (both required elsewhere, matching today's
   * behavior). {@link _lockToSection} already disables every field outside
   * the active `section`, so only that section's fields matter here — this
   * only has visible effect while editing 'bank' or 'wallet'.
   * `accountNumber`/`cci`/`contactPhone` bake `required` into
   * {@link ValidatorsHelper} itself so their format/prefix rules stay active
   * even when the group is exempted — only an empty value stops being
   * rejected. `cci` re-runs {@link _applyCciValidator} to keep its
   * bank-prefix rule in sync too.
   */
  _applyPaymentSectionRule() {
    effect(() => {
      if (this.section() === "bank") {
        const bankRequired = this.bankRequired();
        this._setRequired(this.form.controls.financialEntity, bankRequired);
        this._setRequired(this.form.controls.accountType, bankRequired);
        this._setValidators(this.form.controls.accountNumber, ValidatorsHelper.accountNumber(bankRequired));
        this._applyCciValidator(this.form.controls.financialEntity.value);
      }
      if (this.section() === "wallet") {
        const walletRequired = this.walletRequired();
        this._setRequired(this.form.controls.wallet, walletRequired);
        this._setRequired(this.form.controls.operator, walletRequired);
        this._setValidators(this.form.controls.contactPhone, ValidatorsHelper.phone(walletRequired));
      }
    });
  }
  _setRequired(control, required) {
    this._setValidators(control, required ? [Validators.required] : []);
  }
  /**
   * No `{ emitEvent: false }` here: {@link FieldErrorDirective} only re-reads a
   * control's `invalid`/`errors` when the control's `events` stream fires — a
   * silent revalidation (e.g. switching to a bank with no CCI code) would leave
   * its icon/border showing the previous, now-stale error.
   */
  _setValidators(control, validators) {
    control.setValidators(validators);
    control.updateValueAndValidity();
  }
  static \u0275fac = function ProfileEditDialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileEditDialog)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileEditDialog, selectors: [["app-profile-edit-dialog"]], inputs: { section: [1, "section"], profile: [1, "profile"] }, outputs: { saved: "saved", closed: "closed", permissionDenied: "permissionDenied" }, decls: 21, vars: 8, consts: [["firstNamesError", "appFieldError"], ["paternalError", "appFieldError"], ["maternalError", "appFieldError"], ["emailError", "appFieldError"], ["entityError", "appFieldError"], ["accountTypeError", "appFieldError"], ["accountError", "appFieldError"], ["cciError", "appFieldError"], ["walletError", "appFieldError"], ["contactPhoneError", "appFieldError"], ["operatorError", "appFieldError"], [3, "openChange", "open", "title"], [3, "formGroup"], [1, "flex", "gap-3", "rounded-2xl", "bg-info-bg", "p-5"], ["solarInfoCircleOutline", "", "aria-hidden", "true", 1, "mt-0.5", "h-5", "w-5", "shrink-0", "text-info"], [1, "text-[15px]", "leading-relaxed"], [1, "mt-6", "space-y-5"], [1, "mt-5", "flex", "gap-3", "rounded-2xl", "border", "border-warn-border", "bg-warn-bg", "p-4"], ["dialogFooter", "", "type", "button", 1, "w-full", "rounded-full", "bg-primary", "py-3.5", "text-[15px]", "font-medium", "text-white", "transition", "hover:bg-primary-dark", "disabled:bg-[#e9e9e9]", "disabled:text-[#a9adb5]", 3, "click", "disabled"], ["title", "Confirmar cambios", 3, "openChange", "open"], [1, "leading-relaxed", "text-muted"], ["dialogFooter", "", 1, "flex", "gap-3"], ["type", "button", 1, "w-full", "rounded-full", "border", "border-line", "py-3.5", "text-[15px]", "font-medium", "transition", "hover:bg-field", 3, "click"], ["type", "button", 1, "w-full", "rounded-full", "bg-primary", "py-3.5", "text-[15px]", "font-medium", "text-white", "transition", "hover:bg-primary-dark", 3, "click"], ["for", "edit-first-names", 1, "block", "text-[15px]", "font-medium"], [1, "text-danger"], [1, "relative", "mt-2"], ["id", "edit-first-names", "formControlName", "firstNames", "appFieldError", "", "type", "text", "placeholder", "Ej: Mar\xEDa", 1, "w-full", "rounded-xl", "border", "border-line", "bg-field", "px-4", "py-3.5", "pr-11", "text-[15px]", "outline-none", "placeholder:text-muted/70", "focus:border-ink"], ["solarDangerCircleBold", "", "aria-hidden", "true", 1, "pointer-events-none", "absolute", "top-1/2", "right-4", "h-5", "w-5", "-translate-y-1/2", "text-danger"], [1, "mt-1.5", "text-sm", "text-danger"], ["for", "edit-paternal-last-name", 1, "block", "text-[15px]", "font-medium"], ["id", "edit-paternal-last-name", "formControlName", "paternalLastName", "appFieldError", "", "type", "text", "placeholder", "Ej: Garc\xEDa", 1, "w-full", "rounded-xl", "border", "border-line", "bg-field", "px-4", "py-3.5", "pr-11", "text-[15px]", "outline-none", "placeholder:text-muted/70", "focus:border-ink"], ["for", "edit-maternal-last-name", 1, "block", "text-[15px]", "font-medium"], ["id", "edit-maternal-last-name", "formControlName", "maternalLastName", "appFieldError", "", "type", "text", "placeholder", "Ej: S\xE1nchez", 1, "w-full", "rounded-xl", "border", "border-line", "bg-field", "px-4", "py-3.5", "pr-11", "text-[15px]", "outline-none", "placeholder:text-muted/70", "focus:border-ink"], ["for", "edit-email", 1, "block", "text-[15px]", "font-medium"], ["id", "edit-email", "formControlName", "email", "appFieldError", "", "type", "email", "placeholder", "correo@ejemplo.com", 1, "w-full", "rounded-xl", "border", "border-line", "bg-field", "px-4", "py-3.5", "pr-11", "text-[15px]", "outline-none", "placeholder:text-muted/70", "focus:border-ink"], ["for", "edit-financial-entity", 1, "block", "text-[15px]", "font-medium"], [1, "mt-2"], ["selectId", "edit-financial-entity", "formControlName", "financialEntity", "appFieldError", "", 3, "options", "clearable", "errorMessages", "invalid"], ["for", "edit-account-type", 1, "block", "text-[15px]", "font-medium"], ["selectId", "edit-account-type", "formControlName", "accountType", "appFieldError", "", 3, "options", "clearable", "errorMessages", "invalid"], ["for", "edit-account-number", 1, "block", "text-[15px]", "font-medium"], ["id", "edit-account-number", "formControlName", "accountNumber", "appFieldError", "", "type", "text", "inputmode", "numeric", "maxlength", "20", "autocomplete", "off", "placeholder", "Escribe aqu\xED", 1, "w-full", "rounded-xl", "border", "border-line", "bg-field", "px-4", "py-3.5", "pr-11", "text-[15px]", "outline-none", "placeholder:text-muted/70", "focus:border-ink", 3, "errorMessages"], ["solarCheckCircleOutline", "", "aria-hidden", "true", 1, "absolute", "top-1/2", "right-4", "h-5", "w-5", "-translate-y-1/2", "text-success"], ["for", "edit-cci", 1, "block", "text-[15px]", "font-medium"], ["id", "edit-cci", "formControlName", "cci", "appFieldError", "", "type", "text", "inputmode", "numeric", "maxlength", "20", "autocomplete", "off", "placeholder", "Escribe aqu\xED", 1, "w-full", "rounded-xl", "border", "border-line", "bg-field", "px-4", "py-3.5", "pr-11", "text-[15px]", "outline-none", "placeholder:text-muted/70", "focus:border-ink", 3, "errorMessages"], ["for", "edit-wallet", 1, "block", "text-[15px]", "font-medium"], ["selectId", "edit-wallet", "formControlName", "wallet", "appFieldError", "", 3, "options", "clearable", "errorMessages", "invalid"], ["for", "edit-contact-phone", 1, "block", "text-[15px]", "font-medium"], [1, "mt-2", "flex", "items-center", "gap-2", "rounded-xl", "border", "border-line", "bg-field", "px-4", "py-3.5", "focus-within:border-ink"], ["CustomFlagPe", "", "aria-hidden", "true", 1, "h-4", "w-6", "shrink-0", "overflow-hidden", "rounded-[3px]"], [1, "text-[15px]", "font-medium"], ["id", "edit-contact-phone", "name", "wallet-contact-phone-no-autofill", "formControlName", "contactPhone", "appPhoneFormat", "", "appFieldError", "", "type", "tel", "inputmode", "numeric", "maxlength", "11", "autocomplete", "wallet-contact-phone-no-autofill", "placeholder", "999 888 777", 1, "w-full", "bg-transparent", "text-[15px]", "outline-none", "placeholder:text-muted/70", 3, "errorMessages"], ["solarDangerCircleBold", "", "aria-hidden", "true", 1, "h-5", "w-5", "shrink-0", "text-danger"], ["for", "edit-operator", 1, "block", "text-[15px]", "font-medium"], ["selectId", "edit-operator", "formControlName", "operator", "appFieldError", "", 3, "options", "clearable", "errorMessages", "invalid"], ["solarDangerCircleBold", "", "aria-hidden", "true", 1, "mt-0.5", "h-5", "w-5", "shrink-0", "text-warn-ink"], [1, "text-[15px]", "leading-relaxed", "text-warn-ink"]], template: function ProfileEditDialog_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-dialog", 11);
      \u0275\u0275listener("openChange", function ProfileEditDialog_Template_app_dialog_openChange_0_listener($event) {
        return ctx.onOpenChange($event);
      });
      \u0275\u0275elementStart(1, "div", 12)(2, "div", 13);
      \u0275\u0275namespaceSVG();
      \u0275\u0275element(3, "svg", 14);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(4, "p", 15);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 16);
      \u0275\u0275conditionalCreate(7, ProfileEditDialog_Case_7_Template, 38, 8)(8, ProfileEditDialog_Case_8_Template, 36, 25)(9, ProfileEditDialog_Case_9_Template, 28, 21);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(10, ProfileEditDialog_Conditional_10_Template, 4, 1, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 18);
      \u0275\u0275listener("click", function ProfileEditDialog_Template_button_click_11_listener() {
        return ctx.requestSave();
      });
      \u0275\u0275text(12, " Guardar ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "app-dialog", 19);
      \u0275\u0275listener("openChange", function ProfileEditDialog_Template_app_dialog_openChange_13_listener($event) {
        return ctx.onConfirmOpenChange($event);
      });
      \u0275\u0275elementStart(14, "p", 20);
      \u0275\u0275text(15, " Al guardar, no podr\xE1s volver a editar tus datos hasta dentro de 24 horas. \xBFDeseas continuar? ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 21)(17, "button", 22);
      \u0275\u0275listener("click", function ProfileEditDialog_Template_button_click_17_listener() {
        return ctx.cancelSave();
      });
      \u0275\u0275text(18, " Cancelar ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "button", 23);
      \u0275\u0275listener("click", function ProfileEditDialog_Template_button_click_19_listener() {
        return ctx.confirmSave();
      });
      \u0275\u0275text(20, " S\xED ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_4_0;
      \u0275\u0275property("open", ctx.open())("title", ctx.title());
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.hint());
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_4_0 = ctx.section()) === "personal" ? 7 : tmp_4_0 === "bank" ? 8 : tmp_4_0 === "wallet" ? 9 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.errorMessage() ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.form.invalid || ctx.saving());
      \u0275\u0275advance(2);
      \u0275\u0275property("open", ctx.confirmOpen());
    }
  }, dependencies: [
    ReactiveFormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    MaxLengthValidator,
    FormGroupDirective,
    FormControlName,
    Dialog,
    Select,
    PhoneFormatDirective,
    FieldErrorDirective,
    InfoCircleOutline,
    CheckCircleOutline,
    DangerCircleBold,
    CustomFlagPe
  ], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileEditDialog, [{
    type: Component,
    args: [{ selector: "app-profile-edit-dialog", imports: [
      ReactiveFormsModule,
      Dialog,
      Select,
      PhoneFormatDirective,
      FieldErrorDirective,
      InfoCircleOutline,
      CheckCircleOutline,
      DangerCircleBold,
      CustomFlagPe
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<app-dialog [open]="open()" (openChange)="onOpenChange($event)" [title]="title()">\r
  <div [formGroup]="form">\r
    <!-- Info banner -->\r
    <div class="flex gap-3 rounded-2xl bg-info-bg p-5">\r
      <svg solarInfoCircleOutline class="mt-0.5 h-5 w-5 shrink-0 text-info" aria-hidden="true"></svg>\r
      <p class="text-[15px] leading-relaxed">{{ hint() }}</p>\r
    </div>\r
\r
    <div class="mt-6 space-y-5">\r
      @switch (section()) {\r
        @case ('personal') {\r
          <div>\r
            <label class="block text-[15px] font-medium" for="edit-first-names">\r
              Nombres<span class="text-danger">*</span>\r
            </label>\r
            <div class="relative mt-2">\r
              <input\r
                id="edit-first-names"\r
                formControlName="firstNames"\r
                appFieldError\r
                #firstNamesError="appFieldError"\r
                type="text"\r
                placeholder="Ej: Mar\xEDa"\r
                class="w-full rounded-xl border border-line bg-field px-4 py-3.5 pr-11 text-[15px] outline-none placeholder:text-muted/70 focus:border-ink"\r
              />\r
              @if (firstNamesError.show()) {\r
                <svg solarDangerCircleBold class="pointer-events-none absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 text-danger" aria-hidden="true"></svg>\r
              }\r
            </div>\r
            @if (firstNamesError.show()) {\r
              <p class="mt-1.5 text-sm text-danger">{{ firstNamesError.message() }}</p>\r
            }\r
          </div>\r
\r
          <div>\r
            <label class="block text-[15px] font-medium" for="edit-paternal-last-name">\r
              Apellido paterno<span class="text-danger">*</span>\r
            </label>\r
            <div class="relative mt-2">\r
              <input\r
                id="edit-paternal-last-name"\r
                formControlName="paternalLastName"\r
                appFieldError\r
                #paternalError="appFieldError"\r
                type="text"\r
                placeholder="Ej: Garc\xEDa"\r
                class="w-full rounded-xl border border-line bg-field px-4 py-3.5 pr-11 text-[15px] outline-none placeholder:text-muted/70 focus:border-ink"\r
              />\r
              @if (paternalError.show()) {\r
                <svg solarDangerCircleBold class="pointer-events-none absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 text-danger" aria-hidden="true"></svg>\r
              }\r
            </div>\r
            @if (paternalError.show()) {\r
              <p class="mt-1.5 text-sm text-danger">{{ paternalError.message() }}</p>\r
            }\r
          </div>\r
\r
          <div>\r
            <label class="block text-[15px] font-medium" for="edit-maternal-last-name">\r
              Apellido materno<span class="text-danger">*</span>\r
            </label>\r
            <div class="relative mt-2">\r
              <input\r
                id="edit-maternal-last-name"\r
                formControlName="maternalLastName"\r
                appFieldError\r
                #maternalError="appFieldError"\r
                type="text"\r
                placeholder="Ej: S\xE1nchez"\r
                class="w-full rounded-xl border border-line bg-field px-4 py-3.5 pr-11 text-[15px] outline-none placeholder:text-muted/70 focus:border-ink"\r
              />\r
              @if (maternalError.show()) {\r
                <svg solarDangerCircleBold class="pointer-events-none absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 text-danger" aria-hidden="true"></svg>\r
              }\r
            </div>\r
            @if (maternalError.show()) {\r
              <p class="mt-1.5 text-sm text-danger">{{ maternalError.message() }}</p>\r
            }\r
          </div>\r
\r
          <div>\r
            <label class="block text-[15px] font-medium" for="edit-email">\r
              Correo\r
            </label>\r
            <div class="relative mt-2">\r
              <input\r
                id="edit-email"\r
                formControlName="email"\r
                appFieldError\r
                #emailError="appFieldError"\r
                type="email"\r
                placeholder="correo@ejemplo.com"\r
                class="w-full rounded-xl border border-line bg-field px-4 py-3.5 pr-11 text-[15px] outline-none placeholder:text-muted/70 focus:border-ink"\r
              />\r
              @if (emailError.show()) {\r
                <svg solarDangerCircleBold class="pointer-events-none absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 text-danger" aria-hidden="true"></svg>\r
              }\r
            </div>\r
            @if (emailError.show()) {\r
              <p class="mt-1.5 text-sm text-danger">{{ emailError.message() }}</p>\r
            }\r
          </div>\r
        }\r
\r
        @case ('bank') {\r
          <div>\r
            <label class="block text-[15px] font-medium" for="edit-financial-entity">\r
              Entidad financiera@if (bankRequired()) {<span class="text-danger">*</span>}\r
            </label>\r
            <div class="mt-2">\r
              <app-select\r
                selectId="edit-financial-entity"\r
                formControlName="financialEntity"\r
                [options]="financialEntityOptions()"\r
                [clearable]="true"\r
                appFieldError\r
                [errorMessages]="{ required: 'Tienes que seleccionar una opci\xF3n' }"\r
                #entityError="appFieldError"\r
                [invalid]="entityError.show()"\r
              />\r
            </div>\r
            @if (entityError.show()) {\r
              <p class="mt-1.5 text-sm text-danger">{{ entityError.message() }}</p>\r
            }\r
          </div>\r
\r
          <div>\r
            <label class="block text-[15px] font-medium" for="edit-account-type">\r
              Tipo de cuenta@if (bankRequired()) {<span class="text-danger">*</span>}\r
            </label>\r
            <div class="mt-2">\r
              <app-select\r
                selectId="edit-account-type"\r
                formControlName="accountType"\r
                [options]="accountTypes()"\r
                [clearable]="true"\r
                appFieldError\r
                [errorMessages]="{ required: 'Tienes que seleccionar una opci\xF3n' }"\r
                #accountTypeError="appFieldError"\r
                [invalid]="accountTypeError.show()"\r
              />\r
            </div>\r
            @if (accountTypeError.show()) {\r
              <p class="mt-1.5 text-sm text-danger">{{ accountTypeError.message() }}</p>\r
            }\r
          </div>\r
\r
          <div>\r
            <label class="block text-[15px] font-medium" for="edit-account-number">\r
              N\xB0 de Cuenta@if (bankRequired()) {<span class="text-danger">*</span>}\r
            </label>\r
            <div class="relative mt-2">\r
              <input\r
                id="edit-account-number"\r
                formControlName="accountNumber"\r
                appFieldError\r
                [errorMessages]="{ pattern: 'Ingresa un n\xFAmero de cuenta v\xE1lido' }"\r
                #accountError="appFieldError"\r
                type="text"\r
                inputmode="numeric"\r
                maxlength="20"\r
                autocomplete="off"\r
                placeholder="Escribe aqu\xED"\r
                class="w-full rounded-xl border border-line bg-field px-4 py-3.5 pr-11 text-[15px] outline-none placeholder:text-muted/70 focus:border-ink"\r
              />\r
              @if (isValid('accountNumber')) {\r
                <svg solarCheckCircleOutline class="absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 text-success" aria-hidden="true"></svg>\r
              }\r
              @if (accountError.show()) {\r
                <svg solarDangerCircleBold class="pointer-events-none absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 text-danger" aria-hidden="true"></svg>\r
              }\r
            </div>\r
            @if (accountError.show()) {\r
              <p class="mt-1.5 text-sm text-danger">{{ accountError.message() }}</p>\r
            }\r
          </div>\r
\r
          <div>\r
            <label class="block text-[15px] font-medium" for="edit-cci">\r
              N\xB0 de Cuenta Interbancaria CCI@if (bankRequired()) {<span class="text-danger">*</span>}\r
            </label>\r
            <div class="relative mt-2">\r
              <input\r
                id="edit-cci"\r
                formControlName="cci"\r
                appFieldError\r
                [errorMessages]="cciErrorMessages()"\r
                #cciError="appFieldError"\r
                type="text"\r
                inputmode="numeric"\r
                maxlength="20"\r
                autocomplete="off"\r
                placeholder="Escribe aqu\xED"\r
                class="w-full rounded-xl border border-line bg-field px-4 py-3.5 pr-11 text-[15px] outline-none placeholder:text-muted/70 focus:border-ink"\r
              />\r
              @if (isValid('cci')) {\r
                <svg solarCheckCircleOutline class="absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 text-success" aria-hidden="true"></svg>\r
              }\r
              @if (cciError.show()) {\r
                <svg solarDangerCircleBold class="pointer-events-none absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 text-danger" aria-hidden="true"></svg>\r
              }\r
            </div>\r
            @if (cciError.show()) {\r
              <p class="mt-1.5 text-sm text-danger">{{ cciError.message() }}</p>\r
            }\r
          </div>\r
        }\r
\r
        @case ('wallet') {\r
          <div>\r
            <label class="block text-[15px] font-medium" for="edit-wallet">\r
              Billetera@if (walletRequired()) {<span class="text-danger">*</span>}\r
            </label>\r
            <div class="mt-2">\r
              <app-select\r
                selectId="edit-wallet"\r
                formControlName="wallet"\r
                [options]="wallets()"\r
                [clearable]="true"\r
                appFieldError\r
                [errorMessages]="{ required: 'Tienes que seleccionar una opci\xF3n' }"\r
                #walletError="appFieldError"\r
                [invalid]="walletError.show()"\r
              />\r
            </div>\r
            @if (walletError.show()) {\r
              <p class="mt-1.5 text-sm text-danger">{{ walletError.message() }}</p>\r
            }\r
          </div>\r
\r
          <div>\r
            <label class="block text-[15px] font-medium" for="edit-contact-phone">\r
              N\xB0 de Celular asociado a la billetera@if (walletRequired()) {<span class="text-danger">*</span>}\r
            </label>\r
            <div\r
              class="mt-2 flex items-center gap-2 rounded-xl border border-line bg-field px-4 py-3.5 focus-within:border-ink"\r
              [style.border-color]="contactPhoneError.show() ? 'var(--color-danger)' : null"\r
            >\r
              <svg CustomFlagPe class="h-4 w-6 shrink-0 overflow-hidden rounded-[3px]" aria-hidden="true"></svg>\r
              <span class="text-[15px] font-medium">+51</span>\r
              <input\r
                id="edit-contact-phone"\r
                name="wallet-contact-phone-no-autofill"\r
                formControlName="contactPhone"\r
                appPhoneFormat\r
                appFieldError\r
                [errorMessages]="{ pattern: 'Ingresa un celular v\xE1lido' }"\r
                #contactPhoneError="appFieldError"\r
                type="tel"\r
                inputmode="numeric"\r
                maxlength="11"\r
                autocomplete="wallet-contact-phone-no-autofill"\r
                placeholder="999 888 777"\r
                class="w-full bg-transparent text-[15px] outline-none placeholder:text-muted/70"\r
              />\r
              @if (contactPhoneError.show()) {\r
                <svg solarDangerCircleBold class="h-5 w-5 shrink-0 text-danger" aria-hidden="true"></svg>\r
              }\r
            </div>\r
            @if (contactPhoneError.show()) {\r
              <p class="mt-1.5 text-sm text-danger">{{ contactPhoneError.message() }}</p>\r
            }\r
          </div>\r
\r
          <div>\r
            <label class="block text-[15px] font-medium" for="edit-operator">\r
              Operador celular@if (walletRequired()) {<span class="text-danger">*</span>}\r
            </label>\r
            <div class="mt-2">\r
              <app-select\r
                selectId="edit-operator"\r
                formControlName="operator"\r
                [options]="operators()"\r
                [clearable]="true"\r
                appFieldError\r
                [errorMessages]="{ required: 'Tienes que seleccionar una opci\xF3n' }"\r
                #operatorError="appFieldError"\r
                [invalid]="operatorError.show()"\r
              />\r
            </div>\r
            @if (operatorError.show()) {\r
              <p class="mt-1.5 text-sm text-danger">{{ operatorError.message() }}</p>\r
            }\r
          </div>\r
        }\r
      }\r
    </div>\r
\r
    @if (errorMessage()) {\r
      <div class="mt-5 flex gap-3 rounded-2xl border border-warn-border bg-warn-bg p-4">\r
        <svg solarDangerCircleBold class="mt-0.5 h-5 w-5 shrink-0 text-warn-ink" aria-hidden="true"></svg>\r
        <p class="text-[15px] leading-relaxed text-warn-ink">{{ errorMessage() }}</p>\r
      </div>\r
    }\r
  </div>\r
\r
  <button\r
    dialogFooter\r
    type="button"\r
    [disabled]="form.invalid || saving()"\r
    (click)="requestSave()"\r
    class="w-full rounded-full bg-primary py-3.5 text-[15px] font-medium text-white transition hover:bg-primary-dark disabled:bg-[#e9e9e9] disabled:text-[#a9adb5]"\r
  >\r
    Guardar\r
  </button>\r
</app-dialog>\r
\r
<app-dialog\r
  [open]="confirmOpen()"\r
  (openChange)="onConfirmOpenChange($event)"\r
  title="Confirmar cambios"\r
>\r
  <p class="leading-relaxed text-muted">\r
    Al guardar, no podr\xE1s volver a editar tus datos hasta dentro de 24 horas. \xBFDeseas continuar?\r
  </p>\r
  <div dialogFooter class="flex gap-3">\r
    <button\r
      type="button"\r
      (click)="cancelSave()"\r
      class="w-full rounded-full border border-line py-3.5 text-[15px] font-medium transition hover:bg-field"\r
    >\r
      Cancelar\r
    </button>\r
    <button\r
      type="button"\r
      (click)="confirmSave()"\r
      class="w-full rounded-full bg-primary py-3.5 text-[15px] font-medium text-white transition hover:bg-primary-dark"\r
    >\r
      S\xED\r
    </button>\r
  </div>\r
</app-dialog>\r
` }]
  }], () => [], { section: [{ type: Input, args: [{ isSignal: true, alias: "section", required: true }] }], profile: [{ type: Input, args: [{ isSignal: true, alias: "profile", required: true }] }], saved: [{ type: Output, args: ["saved"] }], closed: [{ type: Output, args: ["closed"] }], permissionDenied: [{ type: Output, args: ["permissionDenied"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileEditDialog, { className: "ProfileEditDialog", filePath: "src/app/features/participante/components/profile-edit-dialog/profile-edit-dialog.ts", lineNumber: 51 });
})();

// src/app/features/participante/pages/profile/profile.ts
function Profile_Conditional_0_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function Profile_Conditional_0_Conditional_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit("personal"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(1, "svg", 39);
    \u0275\u0275text(2, " Editar ");
    \u0275\u0275elementEnd();
  }
}
function Profile_Conditional_0_Conditional_75_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 40);
  }
  if (rf & 2) {
    \u0275\u0275property("ngSrc", ctx);
  }
}
function Profile_Conditional_0_Conditional_75_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const profile_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", profile_r3.financialEntity.charAt(0), " ");
  }
}
function Profile_Conditional_0_Conditional_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, Profile_Conditional_0_Conditional_75_Conditional_0_Template, 1, 1, "img", 40)(1, Profile_Conditional_0_Conditional_75_Conditional_1_Template, 2, 1, "span", 41);
    \u0275\u0275elementStart(2, "span", 42);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const profile_r3 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_3_0 = ctx_r1.brandLogo(profile_r3.financialEntity)) ? 0 : 1, tmp_3_0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(profile_r3.financialEntity);
  }
}
function Profile_Conditional_0_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1, " N/S ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 44);
    \u0275\u0275text(3, "No seleccionado");
    \u0275\u0275elementEnd();
  }
}
function Profile_Conditional_0_Conditional_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function Profile_Conditional_0_Conditional_92_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit("bank"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(1, "svg", 39);
    \u0275\u0275text(2, " Editar ");
    \u0275\u0275elementEnd();
  }
}
function Profile_Conditional_0_Conditional_98_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 40);
  }
  if (rf & 2) {
    \u0275\u0275property("ngSrc", ctx);
  }
}
function Profile_Conditional_0_Conditional_98_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const profile_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", profile_r3.wallet.charAt(0), " ");
  }
}
function Profile_Conditional_0_Conditional_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, Profile_Conditional_0_Conditional_98_Conditional_0_Template, 1, 1, "img", 40)(1, Profile_Conditional_0_Conditional_98_Conditional_1_Template, 2, 1, "span", 46);
    \u0275\u0275elementStart(2, "span", 42);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const profile_r3 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_3_0 = ctx_r1.brandLogo(profile_r3.wallet)) ? 0 : 1, tmp_3_0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(profile_r3.wallet);
  }
}
function Profile_Conditional_0_Conditional_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1, " N/S ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 44);
    \u0275\u0275text(3, "No seleccionado");
    \u0275\u0275elementEnd();
  }
}
function Profile_Conditional_0_Conditional_110_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function Profile_Conditional_0_Conditional_110_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit("wallet"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(1, "svg", 39);
    \u0275\u0275text(2, " Editar ");
    \u0275\u0275elementEnd();
  }
}
function Profile_Conditional_0_Conditional_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 33);
    \u0275\u0275text(1, " Tu cambio en la informaci\xF3n bancaria est\xE1 en validaci\xF3n. Puede tardar hasta 24 horas en reflejarse. ");
    \u0275\u0275elementEnd();
  }
}
function Profile_Conditional_0_Conditional_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 33);
    \u0275\u0275text(1, " Recuerda que cualquier cambio en tu informaci\xF3n bancaria puede tardar hasta 24 horas en validarse. ");
    \u0275\u0275elementEnd();
  }
}
function Profile_Conditional_0_Conditional_120_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-profile-edit-dialog", 47);
    \u0275\u0275listener("saved", function Profile_Conditional_0_Conditional_120_Template_app_profile_edit_dialog_saved_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSaved($event));
    })("closed", function Profile_Conditional_0_Conditional_120_Template_app_profile_edit_dialog_closed_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editSection.set(null));
    })("permissionDenied", function Profile_Conditional_0_Conditional_120_Template_app_profile_edit_dialog_permissionDenied_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPermissionDenied());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const profile_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("section", ctx)("profile", profile_r3);
  }
}
function Profile_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 1);
    \u0275\u0275element(1, "div", 2);
    \u0275\u0275elementStart(2, "div", 3)(3, "h1", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 5);
    \u0275\u0275text(6, " Se han registrado tus datos de forma correcta. Te mantendremos informado. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "section", 6)(8, "h2", 7);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 8);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 9);
    \u0275\u0275text(13, " Usuario Activo ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "section", 10)(15, "div", 11)(16, "h2", 12);
    \u0275\u0275text(17, "Datos registrados");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(18, Profile_Conditional_0_Conditional_18_Template, 3, 0, "button", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "dl", 14)(20, "div", 15);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(21, "svg", 16);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(22, "div")(23, "dt", 17);
    \u0275\u0275text(24, "Nombre completo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "dd", 18);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 15);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(28, "svg", 19);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(29, "div")(30, "dt", 17);
    \u0275\u0275text(31, "Documento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "dd", 18);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 15);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(35, "svg", 20);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(36, "div")(37, "dt", 17);
    \u0275\u0275text(38, "Canal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "dd", 18);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 15);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(42, "svg", 21);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(43, "div")(44, "dt", 17);
    \u0275\u0275text(45, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "dd", 18);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 15);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(49, "svg", 22);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(50, "div")(51, "dt", 17);
    \u0275\u0275text(52, "Ubicaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "dd", 18);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(55, "div", 15);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(56, "svg", 23);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(57, "div")(58, "dt", 17);
    \u0275\u0275text(59, "Contacto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "dd", 18);
    \u0275\u0275text(61);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(62, "div", 15);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(63, "svg", 24);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(64, "div")(65, "dt", 17);
    \u0275\u0275text(66, "Correo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "dd", 18);
    \u0275\u0275text(68);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(69, "div", 25)(70, "section", 10)(71, "h2", 12);
    \u0275\u0275text(72, "Cuenta bancaria");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "div", 26)(74, "div", 27);
    \u0275\u0275conditionalCreate(75, Profile_Conditional_0_Conditional_75_Template, 4, 2)(76, Profile_Conditional_0_Conditional_76_Template, 4, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "div", 28)(78, "p", 17);
    \u0275\u0275text(79, "Tipo de cuenta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "p", 18);
    \u0275\u0275text(81);
    \u0275\u0275elementEnd();
    \u0275\u0275element(82, "hr", 29);
    \u0275\u0275elementStart(83, "p", 17);
    \u0275\u0275text(84, "N\xB0 de cuenta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "p", 18);
    \u0275\u0275text(86);
    \u0275\u0275elementEnd();
    \u0275\u0275element(87, "hr", 29);
    \u0275\u0275elementStart(88, "p", 17);
    \u0275\u0275text(89, "N\xB0 Cuenta interbancaria");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "p", 18);
    \u0275\u0275text(91);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(92, Profile_Conditional_0_Conditional_92_Template, 3, 0, "button", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "section", 10)(94, "h2", 12);
    \u0275\u0275text(95, "Billetera m\xF3vil");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "div", 26)(97, "div", 27);
    \u0275\u0275conditionalCreate(98, Profile_Conditional_0_Conditional_98_Template, 4, 2)(99, Profile_Conditional_0_Conditional_99_Template, 4, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "div", 28)(101, "p", 17);
    \u0275\u0275text(102, "N\xB0 de celular");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "p", 18);
    \u0275\u0275text(104);
    \u0275\u0275elementEnd();
    \u0275\u0275element(105, "hr", 29);
    \u0275\u0275elementStart(106, "p", 17);
    \u0275\u0275text(107, "Operador");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "p", 18);
    \u0275\u0275text(109);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(110, Profile_Conditional_0_Conditional_110_Template, 3, 0, "button", 30);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(111, "section", 31)(112, "h2", 32);
    \u0275\u0275text(113, "Ten en cuenta");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(114, Profile_Conditional_0_Conditional_114_Template, 2, 0, "p", 33)(115, Profile_Conditional_0_Conditional_115_Template, 2, 0, "p", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "div", 34)(117, "span", 35);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(118, "svg", 36);
    \u0275\u0275text(119, " Tu informaci\xF3n est\xE1 protegida ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(120, Profile_Conditional_0_Conditional_120_Template, 1, 2, "app-profile-edit-dialog", 37);
  }
  if (rf & 2) {
    let tmp_23_0;
    const profile_r3 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" \u{1F389} \xA1Bienvenido a BonoPay, ", ctx_r1.firstName(), "! ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(profile_r3.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Registrado el ", ctx_r1.registeredDate());
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.canEdit() ? 18 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(profile_r3.fullName);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.documentLabel(profile_r3));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(profile_r3.channel);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(profile_r3.channelType);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(profile_r3.location);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(profile_r3.contactNumber);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(profile_r3.email);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(profile_r3.financialEntity ? 75 : 76);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(profile_r3.accountType || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(profile_r3.accountNumber || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(profile_r3.cci || "-");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canEdit() ? 92 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(profile_r3.wallet ? 98 : 99);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(profile_r3.contactPhone || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(profile_r3.operator || "-");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canEdit() ? 110 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.bankPending() ? 114 : 115);
    \u0275\u0275advance(6);
    \u0275\u0275conditional((tmp_23_0 = ctx_r1.editSection()) ? 120 : -1, tmp_23_0);
  }
}
function Profile_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 0)(1, "p", 48);
    \u0275\u0275text(2, " No pudimos cargar tu informaci\xF3n. Intenta de nuevo. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 49);
    \u0275\u0275listener("click", function Profile_Conditional_1_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.retryLoad());
    });
    \u0275\u0275text(4, " Reintentar ");
    \u0275\u0275elementEnd()();
  }
}
var Profile = class _Profile {
  profileRepo = inject(PROFILE_PROVIDER);
  store = inject(ParticipanteStore);
  destroyRef = inject(DestroyRef);
  profile = signal(null, ...ngDevMode ? [{ debugName: "profile" }] : (
    /* istanbul ignore next */
    []
  ));
  editSection = signal(null, ...ngDevMode ? [{ debugName: "editSection" }] : (
    /* istanbul ignore next */
    []
  ));
  loadError = signal(false, ...ngDevMode ? [{ debugName: "loadError" }] : (
    /* istanbul ignore next */
    []
  ));
  firstName = computed(() => {
    const profile = this.profile();
    return profile ? UtilsHelper.firstWord(profile.firstNames) : "";
  }, ...ngDevMode ? [{ debugName: "firstName" }] : (
    /* istanbul ignore next */
    []
  ));
  bankPending = computed(() => this.profile()?.bankValidation === "pending", ...ngDevMode ? [{ debugName: "bankPending" }] : (
    /* istanbul ignore next */
    []
  ));
  registeredDate = computed(() => UtilsHelper.toDisplayDateTime(this.profile()?.registeredAt ?? ""), ...ngDevMode ? [{ debugName: "registeredDate" }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Self-correction window: editing is allowed until {@link PROFILE_EDIT_LOCK_HOURS}
   * pass since the last update. A missing or unparsable `updatedAt` means the
   * profile was never updated after creation, so it stays editable.
   */
  canEdit = computed(() => {
    const updatedAt = this.profile()?.updatedAt;
    if (!updatedAt)
      return true;
    const lastUpdate = UtilsHelper.parseBackendDate(updatedAt);
    if (!lastUpdate)
      return true;
    return differenceInHours(Date.now(), lastUpdate) >= PROFILE_EDIT_LOCK_HOURS;
  }, ...ngDevMode ? [{ debugName: "canEdit" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    this._loadProfile();
  }
  documentLabel(profile) {
    return UtilsHelper.joinWithDash(profile.documentType, profile.documentNumber);
  }
  brandLogo(name) {
    return PROFILE_BRAND_LOGOS[name] ?? null;
  }
  openEdit(section) {
    this.editSection.set(section);
  }
  onSaved(profile) {
    this.profile.set(profile);
    this.store.setProfile(profile);
    this.editSection.set(null);
  }
  /**
   * The PUT was rejected server-side while the dialog was open, so the profile is
   * re-read to reflect the server state. Defensive path only — per divergence 12
   * the owner PUT should always succeed.
   */
  onPermissionDenied() {
    this._loadProfile();
  }
  retryLoad() {
    this._loadProfile();
  }
  /** The server is the source of truth, so the profile always loads fresh on entry. */
  _loadProfile() {
    this.loadError.set(false);
    this.profileRepo.get().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (profile) => {
        this.profile.set(profile);
        this.store.setProfile(profile);
      },
      error: () => this.loadError.set(true)
    });
  }
  static \u0275fac = function Profile_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Profile)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Profile, selectors: [["app-profile-page"]], decls: 2, vars: 1, consts: [[1, "rounded-2xl", "border", "border-warn-border", "bg-warn-bg", "p-6", "text-center"], [1, "overflow-hidden", "rounded-2xl", "bg-white", "shadow-[0_10px_30px_rgba(31,42,64,0.08)]"], [1, "h-3", "bg-primary"], [1, "px-6", "pt-7", "pb-8", "text-center"], [1, "text-[22px]", "leading-snug", "font-semibold"], [1, "mx-auto", "mt-4", "max-w-[300px]", "leading-relaxed", "text-muted", "lg:max-w-none"], [1, "mt-5", "rounded-2xl", "bg-gradient-to-br", "from-primary", "to-primary-dark", "px-6", "py-7", "text-center", "text-white", "shadow-[0_10px_30px_rgba(0,174,184,0.3)]"], [1, "text-xl", "font-semibold"], [1, "mt-2", "text-white/90"], [1, "mt-4", "inline-block", "rounded-full", "border", "border-white/60", "bg-white/15", "px-4", "py-1.5", "text-sm", "font-medium"], [1, "mt-5", "rounded-2xl", "bg-white", "p-5", "shadow-[0_10px_30px_rgba(31,42,64,0.08)]"], [1, "flex", "items-center", "justify-between"], [1, "text-lg", "font-semibold"], ["type", "button", 1, "flex", "items-center", "gap-1.5", "rounded-full", "border", "border-line", "px-4", "py-2", "text-sm", "font-medium", "transition", "hover:bg-field"], [1, "mt-4", "space-y-4", "lg:grid", "lg:grid-cols-2", "lg:gap-x-8", "lg:gap-y-4", "lg:space-y-0"], [1, "flex", "gap-3"], ["solarUserOutline", "", "aria-hidden", "true", 1, "mt-0.5", "h-5", "w-5", "shrink-0", "text-muted"], [1, "text-sm", "text-muted"], [1, "text-[15px]"], ["solarUserIdOutline", "", "aria-hidden", "true", 1, "mt-0.5", "h-5", "w-5", "shrink-0", "text-muted"], ["solarMapArrowRightLinear", "", "aria-hidden", "true", 1, "mt-0.5", "h-5", "w-5", "shrink-0", "text-muted"], ["solarUserCircleOutline", "", "aria-hidden", "true", 1, "mt-0.5", "h-5", "w-5", "shrink-0", "text-muted"], ["solarMapPointOutline", "", "aria-hidden", "true", 1, "mt-0.5", "h-5", "w-5", "shrink-0", "text-muted"], ["solarPhoneOutline", "", "aria-hidden", "true", 1, "mt-0.5", "h-5", "w-5", "shrink-0", "text-muted"], ["solarLetterOutline", "", "aria-hidden", "true", 1, "mt-0.5", "h-5", "w-5", "shrink-0", "text-muted"], [1, "lg:grid", "lg:grid-cols-2", "lg:items-start", "lg:gap-5"], [1, "mt-4", "rounded-2xl", "bg-field", "p-4"], [1, "flex", "items-center", "gap-3"], [1, "mt-4", "rounded-xl", "bg-white", "px-4", "py-3"], [1, "my-3", "border-line"], ["type", "button", 1, "mt-4", "flex", "w-full", "items-center", "justify-center", "gap-1.5", "rounded-full", "border", "border-line", "bg-white", "py-2.5", "text-sm", "font-medium", "transition", "hover:bg-field"], [1, "mt-5", "rounded-2xl", "border", "border-warn-border", "bg-warn-bg", "p-5"], [1, "font-semibold", "text-warn-ink"], [1, "mt-2", "leading-relaxed", "text-warn-ink"], [1, "mt-6", "flex", "justify-center"], [1, "flex", "items-center", "gap-2", "rounded-full", "border", "border-primary/50", "bg-primary/5", "px-4", "py-2", "text-[15px]", "font-medium", "text-primary"], ["solarShieldCheckOutline", "", "aria-hidden", "true", 1, "h-4.5", "w-4.5"], [3, "section", "profile"], ["type", "button", 1, "flex", "items-center", "gap-1.5", "rounded-full", "border", "border-line", "px-4", "py-2", "text-sm", "font-medium", "transition", "hover:bg-field", 3, "click"], ["solarPen2Outline", "", "aria-hidden", "true", 1, "h-4", "w-4"], ["width", "36", "height", "36", "alt", "", 1, "h-9", "w-9", "rounded-full", 3, "ngSrc"], [1, "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-full", "bg-[#0f9f4f]", "text-sm", "font-bold", "text-white"], [1, "font-medium"], [1, "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-full", "border", "border-line", "bg-white", "text-[11px]", "font-bold", "text-muted"], [1, "font-medium", "text-muted"], ["type", "button", 1, "mt-4", "flex", "w-full", "items-center", "justify-center", "gap-1.5", "rounded-full", "border", "border-line", "bg-white", "py-2.5", "text-sm", "font-medium", "transition", "hover:bg-field", 3, "click"], [1, "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-full", "bg-[#722f8e]", "text-sm", "font-bold", "text-white", "lowercase"], [3, "saved", "closed", "permissionDenied", "section", "profile"], [1, "leading-relaxed", "text-warn-ink"], ["type", "button", 1, "mt-4", "rounded-full", "bg-primary", "px-6", "py-2.5", "text-sm", "font-medium", "text-white", "transition", "hover:bg-primary-dark", 3, "click"]], template: function Profile_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, Profile_Conditional_0_Template, 121, 22)(1, Profile_Conditional_1_Template, 5, 0, "section", 0);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional((tmp_0_0 = ctx.profile()) ? 0 : ctx.loadError() ? 1 : -1, tmp_0_0);
    }
  }, dependencies: [
    NgOptimizedImage,
    ProfileEditDialog,
    UserIdOutline,
    MapArrowRightLinear,
    UserOutline,
    UserCircleOutline,
    MapPointOutline,
    PhoneOutline,
    LetterOutline,
    Pen2Outline,
    ShieldCheckOutline
  ], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Profile, [{
    type: Component,
    args: [{ selector: "app-profile-page", imports: [
      NgOptimizedImage,
      ProfileEditDialog,
      UserIdOutline,
      MapArrowRightLinear,
      UserOutline,
      UserCircleOutline,
      MapPointOutline,
      PhoneOutline,
      LetterOutline,
      Pen2Outline,
      ShieldCheckOutline
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `@if (profile(); as profile) {\r
  <!-- Welcome card -->\r
  <section class="overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(31,42,64,0.08)]">\r
    <div class="h-3 bg-primary"></div>\r
    <div class="px-6 pt-7 pb-8 text-center">\r
      <h1 class="text-[22px] leading-snug font-semibold">\r
        \u{1F389} \xA1Bienvenido a BonoPay, {{ firstName() }}!\r
      </h1>\r
      <p class="mx-auto mt-4 max-w-[300px] leading-relaxed text-muted lg:max-w-none">\r
        Se han registrado tus datos de forma correcta. Te mantendremos informado.\r
      </p>\r
    </div>\r
  </section>\r
\r
  <!-- Status card -->\r
  <section class="mt-5 rounded-2xl bg-gradient-to-br from-primary to-primary-dark px-6 py-7 text-center text-white shadow-[0_10px_30px_rgba(0,174,184,0.3)]">\r
    <h2 class="text-xl font-semibold">{{ profile.fullName }}</h2>\r
    <p class="mt-2 text-white/90">Registrado el {{ registeredDate() }}</p>\r
    <span class="mt-4 inline-block rounded-full border border-white/60 bg-white/15 px-4 py-1.5 text-sm font-medium">\r
      Usuario Activo\r
    </span>\r
  </section>\r
\r
  <!-- Registered data -->\r
  <section class="mt-5 rounded-2xl bg-white p-5 shadow-[0_10px_30px_rgba(31,42,64,0.08)]">\r
    <div class="flex items-center justify-between">\r
      <h2 class="text-lg font-semibold">Datos registrados</h2>\r
      @if (canEdit()) {\r
        <button\r
          type="button"\r
          (click)="openEdit('personal')"\r
          class="flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm font-medium transition hover:bg-field"\r
        >\r
          <svg solarPen2Outline class="h-4 w-4" aria-hidden="true"></svg>\r
          Editar\r
        </button>\r
      }\r
    </div>\r
    <dl class="mt-4 space-y-4 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-4 lg:space-y-0">\r
      <div class="flex gap-3">\r
        <svg solarUserOutline class="mt-0.5 h-5 w-5 shrink-0 text-muted" aria-hidden="true"></svg>\r
        <div>\r
          <dt class="text-sm text-muted">Nombre completo</dt>\r
          <dd class="text-[15px]">{{ profile.fullName }}</dd>\r
        </div>\r
      </div>\r
      <div class="flex gap-3">\r
        <svg solarUserIdOutline class="mt-0.5 h-5 w-5 shrink-0 text-muted" aria-hidden="true"></svg>\r
        <div>\r
          <dt class="text-sm text-muted">Documento</dt>\r
          <dd class="text-[15px]">{{ documentLabel(profile) }}</dd>\r
        </div>\r
      </div>\r
      <div class="flex gap-3">\r
        <svg solarMapArrowRightLinear class="mt-0.5 h-5 w-5 shrink-0 text-muted" aria-hidden="true"></svg>\r
        <div>\r
          <dt class="text-sm text-muted">Canal</dt>\r
          <dd class="text-[15px]">{{ profile.channel }}</dd>\r
        </div>\r
      </div>\r
      <div class="flex gap-3">\r
        <svg solarUserCircleOutline class="mt-0.5 h-5 w-5 shrink-0 text-muted" aria-hidden="true"></svg>\r
        <div>\r
          <dt class="text-sm text-muted">Tipo</dt>\r
          <dd class="text-[15px]">{{ profile.channelType }}</dd>\r
        </div>\r
      </div>\r
      <div class="flex gap-3">\r
        <svg solarMapPointOutline class="mt-0.5 h-5 w-5 shrink-0 text-muted" aria-hidden="true"></svg>\r
        <div>\r
          <dt class="text-sm text-muted">Ubicaci\xF3n</dt>\r
          <dd class="text-[15px]">{{ profile.location }}</dd>\r
        </div>\r
      </div>\r
      <div class="flex gap-3">\r
        <svg solarPhoneOutline class="mt-0.5 h-5 w-5 shrink-0 text-muted" aria-hidden="true"></svg>\r
        <div>\r
          <dt class="text-sm text-muted">Contacto</dt>\r
          <dd class="text-[15px]">{{ profile.contactNumber }}</dd>\r
        </div>\r
      </div>\r
      <div class="flex gap-3">\r
        <svg solarLetterOutline class="mt-0.5 h-5 w-5 shrink-0 text-muted" aria-hidden="true"></svg>\r
        <div>\r
          <dt class="text-sm text-muted">Correo</dt>\r
          <dd class="text-[15px]">{{ profile.email }}</dd>\r
        </div>\r
      </div>\r
    </dl>\r
  </section>\r
\r
  <!-- Bank account + mobile wallet (side by side on desktop) -->\r
  <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-5">\r
  <section class="mt-5 rounded-2xl bg-white p-5 shadow-[0_10px_30px_rgba(31,42,64,0.08)]">\r
    <h2 class="text-lg font-semibold">Cuenta bancaria</h2>\r
    <div class="mt-4 rounded-2xl bg-field p-4">\r
      <div class="flex items-center gap-3">\r
        @if (profile.financialEntity) {\r
          @if (brandLogo(profile.financialEntity); as logo) {\r
            <img [ngSrc]="logo" width="36" height="36" class="h-9 w-9 rounded-full" alt="" />\r
          } @else {\r
            <span class="flex h-9 w-9 items-center justify-center rounded-full bg-[#0f9f4f] text-sm font-bold text-white">\r
              {{ profile.financialEntity.charAt(0) }}\r
            </span>\r
          }\r
          <span class="font-medium">{{ profile.financialEntity }}</span>\r
        } @else {\r
          <span class="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white text-[11px] font-bold text-muted">\r
            N/S\r
          </span>\r
          <span class="font-medium text-muted">No seleccionado</span>\r
        }\r
      </div>\r
      <div class="mt-4 rounded-xl bg-white px-4 py-3">\r
        <p class="text-sm text-muted">Tipo de cuenta</p>\r
        <p class="text-[15px]">{{ profile.accountType || '-' }}</p>\r
        <hr class="my-3 border-line" />\r
        <p class="text-sm text-muted">N\xB0 de cuenta</p>\r
        <p class="text-[15px]">{{ profile.accountNumber || '-' }}</p>\r
        <hr class="my-3 border-line" />\r
        <p class="text-sm text-muted">N\xB0 Cuenta interbancaria</p>\r
        <p class="text-[15px]">{{ profile.cci || '-' }}</p>\r
      </div>\r
      @if (canEdit()) {\r
        <button\r
          type="button"\r
          (click)="openEdit('bank')"\r
          class="mt-4 flex w-full items-center justify-center gap-1.5 rounded-full border border-line bg-white py-2.5 text-sm font-medium transition hover:bg-field"\r
        >\r
          <svg solarPen2Outline class="h-4 w-4" aria-hidden="true"></svg>\r
          Editar\r
        </button>\r
      }\r
    </div>\r
  </section>\r
\r
  <!-- Mobile wallet -->\r
  <section class="mt-5 rounded-2xl bg-white p-5 shadow-[0_10px_30px_rgba(31,42,64,0.08)]">\r
    <h2 class="text-lg font-semibold">Billetera m\xF3vil</h2>\r
    <div class="mt-4 rounded-2xl bg-field p-4">\r
      <div class="flex items-center gap-3">\r
        @if (profile.wallet) {\r
          @if (brandLogo(profile.wallet); as logo) {\r
            <img [ngSrc]="logo" width="36" height="36" class="h-9 w-9 rounded-full" alt="" />\r
          } @else {\r
            <span class="flex h-9 w-9 items-center justify-center rounded-full bg-[#722f8e] text-sm font-bold text-white lowercase">\r
              {{ profile.wallet.charAt(0) }}\r
            </span>\r
          }\r
          <span class="font-medium">{{ profile.wallet }}</span>\r
        } @else {\r
          <span class="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white text-[11px] font-bold text-muted">\r
            N/S\r
          </span>\r
          <span class="font-medium text-muted">No seleccionado</span>\r
        }\r
      </div>\r
      <div class="mt-4 rounded-xl bg-white px-4 py-3">\r
        <p class="text-sm text-muted">N\xB0 de celular</p>\r
        <p class="text-[15px]">{{ profile.contactPhone || '-' }}</p>\r
        <hr class="my-3 border-line" />\r
        <p class="text-sm text-muted">Operador</p>\r
        <p class="text-[15px]">{{ profile.operator || '-' }}</p>\r
      </div>\r
      @if (canEdit()) {\r
        <button\r
          type="button"\r
          (click)="openEdit('wallet')"\r
          class="mt-4 flex w-full items-center justify-center gap-1.5 rounded-full border border-line bg-white py-2.5 text-sm font-medium transition hover:bg-field"\r
        >\r
          <svg solarPen2Outline class="h-4 w-4" aria-hidden="true"></svg>\r
          Editar\r
        </button>\r
      }\r
    </div>\r
  </section>\r
  </div>\r
\r
  <!-- 24h validation notice -->\r
  <section class="mt-5 rounded-2xl border border-warn-border bg-warn-bg p-5">\r
    <h2 class="font-semibold text-warn-ink">Ten en cuenta</h2>\r
    @if (bankPending()) {\r
      <p class="mt-2 leading-relaxed text-warn-ink">\r
        Tu cambio en la informaci\xF3n bancaria est\xE1 en validaci\xF3n. Puede tardar hasta 24 horas en\r
        reflejarse.\r
      </p>\r
    } @else {\r
      <p class="mt-2 leading-relaxed text-warn-ink">\r
        Recuerda que cualquier cambio en tu informaci\xF3n bancaria puede tardar hasta 24 horas en\r
        validarse.\r
      </p>\r
    }\r
  </section>\r
\r
  <div class="mt-6 flex justify-center">\r
    <span class="flex items-center gap-2 rounded-full border border-primary/50 bg-primary/5 px-4 py-2 text-[15px] font-medium text-primary">\r
      <svg solarShieldCheckOutline class="h-4.5 w-4.5" aria-hidden="true"></svg>\r
      Tu informaci\xF3n est\xE1 protegida\r
    </span>\r
  </div>\r
\r
  @if (editSection(); as section) {\r
    <app-profile-edit-dialog\r
      [section]="section"\r
      [profile]="profile"\r
      (saved)="onSaved($event)"\r
      (closed)="editSection.set(null)"\r
      (permissionDenied)="onPermissionDenied()"\r
    />\r
  }\r
} @else if (loadError()) {\r
  <section class="rounded-2xl border border-warn-border bg-warn-bg p-6 text-center">\r
    <p class="leading-relaxed text-warn-ink">\r
      No pudimos cargar tu informaci\xF3n. Intenta de nuevo.\r
    </p>\r
    <button\r
      type="button"\r
      (click)="retryLoad()"\r
      class="mt-4 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-white transition hover:bg-primary-dark"\r
    >\r
      Reintentar\r
    </button>\r
  </section>\r
}\r
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Profile, { className: "Profile", filePath: "src/app/features/participante/pages/profile/profile.ts", lineNumber: 42 });
})();
export {
  Profile as default
};
