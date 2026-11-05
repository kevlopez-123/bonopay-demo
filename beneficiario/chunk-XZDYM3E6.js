import {
  REGISTRATION_PROVIDER
} from "./chunk-BPAJBJI6.js";
import {
  MapArrowRightLinear,
  MapPointOutline,
  PhoneOutline,
  ShieldCheckOutline,
  UserCircleOutline,
  UserIdOutline
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
  ValidatorsHelper
} from "./chunk-AY7TB2CX.js";
import {
  Router,
  RouterLink
} from "./chunk-6CR7NOLI.js";
import {
  AltArrowDownOutline,
  CheckCircleOutline,
  CustomFlagPe,
  DangerCircleBold,
  InfoCircleOutline,
  LegalDialogService,
  Select
} from "./chunk-IYV7F7WL.js";
import {
  takeUntilDestroyed
} from "./chunk-TUFQWTIF.js";
import {
  ChangeDetectionStrategy,
  CheckboxControlValueAccessor,
  Component,
  DefaultValueAccessor,
  DestroyRef,
  FormControlName,
  FormGroupDirective,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
  computed,
  effect,
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
  ɵɵtextInterpolate
} from "./chunk-QNDTW3UR.js";

// src/app/features/participante/pages/update-info/update-info.ts
var _c0 = () => ({ required: "Tienes que seleccionar una opci\xF3n" });
var _c1 = () => ({ pattern: "Ingresa un n\xFAmero de cuenta v\xE1lido" });
var _c2 = () => ({ pattern: "Ingresa un celular v\xE1lido" });
function UpdateInfo_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "dl", 18)(1, "div", 71);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(2, "svg", 72);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "div")(4, "dt", 73);
    \u0275\u0275text(5, "Documento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "dd", 74);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 71);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(9, "svg", 75);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "div")(11, "dt", 73);
    \u0275\u0275text(12, "Canal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "dd", 74);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 71);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(16, "svg", 76);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "div")(18, "dt", 73);
    \u0275\u0275text(19, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "dd", 74);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 71);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(23, "svg", 77);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "div")(25, "dt", 73);
    \u0275\u0275text(26, "Ubicaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "dd", 74);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 71);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(30, "svg", 78);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(31, "div")(32, "dt", 73);
    \u0275\u0275text(33, "Contacto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "dd", 74);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.documentLabel(data_r2));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(data_r2.channel);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(data_r2.channelType);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(data_r2.location);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(data_r2.contactPhone);
  }
}
function UpdateInfo_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1, " No pudimos cargar tus datos registrados. Intenta de nuevo. ");
    \u0275\u0275elementEnd();
  }
}
function UpdateInfo_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 28);
  }
}
function UpdateInfo_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const firstNamesError_r4 = \u0275\u0275reference(24);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(firstNamesError_r4.message());
  }
}
function UpdateInfo_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 28);
  }
}
function UpdateInfo_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const paternalError_r5 = \u0275\u0275reference(34);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(paternalError_r5.message());
  }
}
function UpdateInfo_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 28);
  }
}
function UpdateInfo_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const maternalError_r6 = \u0275\u0275reference(44);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(maternalError_r6.message());
  }
}
function UpdateInfo_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 28);
  }
}
function UpdateInfo_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const emailError_r7 = \u0275\u0275reference(52);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(emailError_r7.message());
  }
}
function UpdateInfo_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function UpdateInfo_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const entityError_r8 = \u0275\u0275reference(61);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(entityError_r8.message());
  }
}
function UpdateInfo_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function UpdateInfo_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const accountTypeError_r9 = \u0275\u0275reference(69);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(accountTypeError_r9.message());
  }
}
function UpdateInfo_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function UpdateInfo_Conditional_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 45);
  }
}
function UpdateInfo_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 28);
  }
}
function UpdateInfo_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const accountError_r10 = \u0275\u0275reference(77);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(accountError_r10.message());
  }
}
function UpdateInfo_Conditional_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function UpdateInfo_Conditional_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 45);
  }
}
function UpdateInfo_Conditional_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 28);
  }
}
function UpdateInfo_Conditional_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const cciError_r11 = \u0275\u0275reference(87);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cciError_r11.message());
  }
}
function UpdateInfo_Conditional_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function UpdateInfo_Conditional_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const walletError_r12 = \u0275\u0275reference(97);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(walletError_r12.message());
  }
}
function UpdateInfo_Conditional_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function UpdateInfo_Conditional_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 56);
  }
}
function UpdateInfo_Conditional_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const contactPhoneError_r13 = \u0275\u0275reference(109);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(contactPhoneError_r13.message());
  }
}
function UpdateInfo_Conditional_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function UpdateInfo_Conditional_119_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const operatorError_r14 = \u0275\u0275reference(118);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(operatorError_r14.message());
  }
}
function UpdateInfo_Conditional_134_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(1, "svg", 79);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(2, "p", 80);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.saveError());
  }
}
var UpdateInfo = class _UpdateInfo {
  fb = inject(NonNullableFormBuilder);
  legal = inject(LegalDialogService);
  registrationRepo = inject(REGISTRATION_PROVIDER);
  catalogsRepo = inject(CATALOGS_PROVIDER);
  profileRepo = inject(PROFILE_PROVIDER);
  store = inject(ParticipanteStore);
  router = inject(Router);
  destroyRef = inject(DestroyRef);
  registration = signal(null, ...ngDevMode ? [{ debugName: "registration" }] : (
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
  saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : (
    /* istanbul ignore next */
    []
  ));
  saveError = signal("", ...ngDevMode ? [{ debugName: "saveError" }] : (
    /* istanbul ignore next */
    []
  ));
  registrationError = signal(false, ...ngDevMode ? [{ debugName: "registrationError" }] : (
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
  /**
   * Empresa-specific (divergencia Vendedor/Dueño): a `Vendedor` no longer has to
   * fill the bank group, a `Dueño` no longer has to fill the wallet group —
   * both sections stay visible and their catalogs stay full; only the
   * required-ness of the exempted group's fields changes. Any other empresa,
   * or a `channelType` outside those two exact values, keeps both required.
   */
  paymentSection = computed(() => ChannelPaymentRuleHelper.sectionFor(this.registration()?.idEmpresa ?? 0, this.registration()?.channelType ?? ""), ...ngDevMode ? [{ debugName: "paymentSection" }] : (
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
    operator: this.fb.control("", Validators.required),
    truthfulInfo: this.fb.control(false, Validators.requiredTrue),
    acceptTerms: this.fb.control(false, Validators.requiredTrue)
  });
  constructor() {
    this._loadRegistration();
    this._loadCatalogs();
    this._redirectIfComplete();
    this._bindCciToFinancialEntity();
    this._applyPaymentSectionRule();
  }
  documentLabel(data) {
    return UtilsHelper.joinWithDash(data.documentType, data.documentNumber);
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
  submit() {
    if (this.form.invalid || this.saving()) {
      return;
    }
    this.saving.set(true);
    this.saveError.set("");
    const request = RequestProfileHelper.createParticipantDraft(this.form.getRawValue());
    this.profileRepo.save(request).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (profile) => {
        this.store.setProfile(profile);
        this.store.setActive(true);
        void this.router.navigate(["/perfil"]);
      },
      error: (error) => {
        this.saving.set(false);
        if (error instanceof ProfileEditForbiddenError) {
          this.saveError.set("Tu empresa a\xFAn no habilit\xF3 la edici\xF3n de tus datos. Int\xE9ntalo m\xE1s tarde.");
        } else {
          this.saveError.set("No pudimos guardar tus datos. Intenta de nuevo.");
        }
      }
    });
  }
  _loadRegistration() {
    this.registrationError.set(false);
    this.registrationRepo.get().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (data) => {
        this.registration.set(data);
        this.form.controls.email.setValue(data.email ?? "");
      },
      error: () => this.registrationError.set(true)
    });
  }
  /**
   * A `COMPLETO` beneficiary can still land here through back/forward or a stale
   * bookmark, because the guard only checks JWT expiry.
   *
   * They are bounced to /perfil before they can submit a blank form — the PUT
   * overwrites every editable column, so that would wipe their real data.
   */
  _redirectIfComplete() {
    this.profileRepo.get().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((profile) => {
      if (profile.bankValidation === "validated") {
        void this.router.navigate(["/perfil"]);
      }
    });
  }
  _loadCatalogs() {
    this.catalogsRepo.getFinancialEntities().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((entities) => {
      this.financialEntities.set(entities);
      this._applyCciValidator(this.form.controls.financialEntity.value);
    });
    this.catalogsRepo.getAccountTypes().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((types) => this.accountTypes.set(types));
    this.catalogsRepo.getWallets().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((wallets) => this.wallets.set(wallets));
    this.catalogsRepo.getOperators().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((operators) => this.operators.set(operators));
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
   * because this also runs from a bank-catalog HTTP callback and from every
   * `financialEntity` value change — either of which can fire after the
   * toggle effect's last run. `required` only toggles whether an empty CCI is
   * rejected; the prefix/length rules stay active either way, so an exempted
   * exempt Vendedor who types something still gets validated against it.
   */
  _applyCciValidator(entityName) {
    const code = this.financialEntities().find((entity) => entity.name === entityName)?.code ?? null;
    this.cciBankCode.set(code);
    this._setValidators(this.form.controls.cci, ValidatorsHelper.cci(code, !!entityName, this.bankRequired()));
  }
  /**
   * Toggles each group's required-ness per {@link bankRequired}/{@link walletRequired}
   * (both required elsewhere, matching today's behavior). `accountNumber`/`cci`/
   * `contactPhone` bake `required` into {@link ValidatorsHelper} itself so their
   * format/prefix rules stay active even when the group is exempted — only an
   * empty value stops being rejected. `cci` re-runs {@link _applyCciValidator}
   * to keep its bank-prefix rule in sync too.
   */
  _applyPaymentSectionRule() {
    effect(() => {
      const bankRequired = this.bankRequired();
      const walletRequired = this.walletRequired();
      this._setRequired(this.form.controls.financialEntity, bankRequired);
      this._setRequired(this.form.controls.accountType, bankRequired);
      this._setValidators(this.form.controls.accountNumber, ValidatorsHelper.accountNumber(bankRequired));
      this._applyCciValidator(this.form.controls.financialEntity.value);
      this._setRequired(this.form.controls.wallet, walletRequired);
      this._setRequired(this.form.controls.operator, walletRequired);
      this._setValidators(this.form.controls.contactPhone, ValidatorsHelper.phone(walletRequired));
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
  static \u0275fac = function UpdateInfo_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UpdateInfo)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UpdateInfo, selectors: [["app-update-info-page"]], decls: 144, vars: 58, consts: [["firstNamesError", "appFieldError"], ["paternalError", "appFieldError"], ["maternalError", "appFieldError"], ["emailError", "appFieldError"], ["entityError", "appFieldError"], ["accountTypeError", "appFieldError"], ["accountError", "appFieldError"], ["cciError", "appFieldError"], ["walletError", "appFieldError"], ["contactPhoneError", "appFieldError"], ["operatorError", "appFieldError"], [1, "overflow-hidden", "rounded-2xl", "bg-white", "shadow-[0_10px_30px_rgba(31,42,64,0.08)]"], [1, "h-3", "bg-primary"], [1, "px-5", "pt-7", "pb-8", "lg:px-10"], [1, "text-center", "text-[24px]", "font-semibold"], [1, "mx-auto", "mt-2", "max-w-[280px]", "text-center", "leading-relaxed", "text-muted", "lg:max-w-none"], [1, "mt-6", "rounded-2xl", "border", "border-line", "p-5"], [1, "text-lg", "font-semibold"], [1, "mt-4", "space-y-4", "lg:grid", "lg:grid-cols-2", "lg:gap-x-8", "lg:gap-y-4", "lg:space-y-0"], [1, "mt-4", "text-sm", "text-warn-ink"], [1, "mt-5", "flex", "gap-3", "rounded-2xl", "bg-info-bg", "p-5"], ["solarInfoCircleOutline", "", "aria-hidden", "true", 1, "mt-0.5", "h-5", "w-5", "shrink-0", "text-info"], [1, "text-[15px]", "leading-relaxed"], [1, "mt-6", "lg:grid", "lg:grid-cols-2", "lg:gap-x-6", "lg:gap-y-5", 3, "ngSubmit", "formGroup"], ["for", "first-names", 1, "block", "text-[15px]", "font-medium"], [1, "text-danger"], [1, "relative", "mt-2"], ["id", "first-names", "formControlName", "firstNames", "appFieldError", "", "type", "text", "placeholder", "Ej: Mar\xEDa", 1, "w-full", "rounded-xl", "border", "border-line", "bg-field", "px-4", "py-3.5", "pr-11", "text-[15px]", "outline-none", "placeholder:text-muted/70", "focus:border-ink"], ["solarDangerCircleBold", "", "aria-hidden", "true", 1, "pointer-events-none", "absolute", "top-1/2", "right-4", "h-5", "w-5", "-translate-y-1/2", "text-danger"], [1, "mt-1.5", "text-sm", "text-danger"], [1, "mt-5", "lg:mt-0"], ["for", "paternal-last-name", 1, "block", "text-[15px]", "font-medium"], ["id", "paternal-last-name", "formControlName", "paternalLastName", "appFieldError", "", "type", "text", "placeholder", "Ej: Garc\xEDa", 1, "w-full", "rounded-xl", "border", "border-line", "bg-field", "px-4", "py-3.5", "pr-11", "text-[15px]", "outline-none", "placeholder:text-muted/70", "focus:border-ink"], ["for", "maternal-last-name", 1, "block", "text-[15px]", "font-medium"], ["id", "maternal-last-name", "formControlName", "maternalLastName", "appFieldError", "", "type", "text", "placeholder", "Ej: S\xE1nchez", 1, "w-full", "rounded-xl", "border", "border-line", "bg-field", "px-4", "py-3.5", "pr-11", "text-[15px]", "outline-none", "placeholder:text-muted/70", "focus:border-ink"], ["for", "email", 1, "block", "text-[15px]", "font-medium"], ["id", "email", "formControlName", "email", "appFieldError", "", "type", "email", "placeholder", "correo@ejemplo.com", 1, "w-full", "rounded-xl", "border", "border-line", "bg-field", "px-4", "py-3.5", "pr-11", "text-[15px]", "outline-none", "placeholder:text-muted/70", "focus:border-ink"], [1, "mt-5", "lg:col-span-2", "lg:mt-0"], ["for", "financial-entity", 1, "block", "text-[15px]", "font-medium"], [1, "mt-2"], ["selectId", "financial-entity", "formControlName", "financialEntity", "appFieldError", "", 3, "options", "clearable", "errorMessages", "invalid"], ["for", "account-type", 1, "block", "text-[15px]", "font-medium"], ["selectId", "account-type", "formControlName", "accountType", "appFieldError", "", 3, "options", "clearable", "errorMessages", "invalid"], ["for", "account-number", 1, "block", "text-[15px]", "font-medium"], ["id", "account-number", "formControlName", "accountNumber", "appFieldError", "", "type", "text", "inputmode", "numeric", "maxlength", "20", "autocomplete", "off", "placeholder", "Escribe aqu\xED", 1, "w-full", "rounded-xl", "border", "border-line", "bg-field", "px-4", "py-3.5", "pr-11", "text-[15px]", "outline-none", "placeholder:text-muted/70", "focus:border-ink", 3, "errorMessages"], ["solarCheckCircleOutline", "", "aria-hidden", "true", 1, "absolute", "top-1/2", "right-4", "h-5", "w-5", "-translate-y-1/2", "text-success"], ["for", "cci", 1, "block", "text-[15px]", "font-medium"], ["id", "cci", "formControlName", "cci", "appFieldError", "", "type", "text", "inputmode", "numeric", "maxlength", "20", "autocomplete", "off", "placeholder", "Escribe aqu\xED", 1, "w-full", "rounded-xl", "border", "border-line", "bg-field", "px-4", "py-3.5", "pr-11", "text-[15px]", "outline-none", "placeholder:text-muted/70", "focus:border-ink", 3, "errorMessages"], ["for", "wallet", 1, "block", "text-[15px]", "font-medium"], ["selectId", "wallet", "formControlName", "wallet", "appFieldError", "", 3, "options", "clearable", "errorMessages", "invalid"], ["for", "contact-phone", 1, "block", "text-[15px]", "font-medium"], [1, "mt-2", "flex", "items-center", "gap-2", "rounded-xl", "border", "border-line", "bg-field", "px-4", "py-3.5", "focus-within:border-ink"], ["CustomFlagPe", "", "aria-hidden", "true", 1, "h-4", "w-6", "shrink-0", "overflow-hidden", "rounded-[3px]"], ["solarAltArrowDownOutline", "", "aria-hidden", "true", 1, "h-3.5", "w-3.5", "shrink-0", "text-muted"], [1, "text-[15px]", "font-medium"], ["id", "contact-phone", "name", "wallet-contact-phone-no-autofill", "formControlName", "contactPhone", "appPhoneFormat", "", "appFieldError", "", "type", "tel", "inputmode", "numeric", "maxlength", "11", "autocomplete", "wallet-contact-phone-no-autofill", "placeholder", "999 888 777", 1, "w-full", "bg-transparent", "text-[15px]", "outline-none", "placeholder:text-muted/70", 3, "errorMessages"], ["solarDangerCircleBold", "", "aria-hidden", "true", 1, "h-5", "w-5", "shrink-0", "text-danger"], ["for", "operator", 1, "block", "text-[15px]", "font-medium"], ["selectId", "operator", "formControlName", "operator", "appFieldError", "", 3, "options", "clearable", "errorMessages", "invalid"], [1, "mt-7", "flex", "items-start", "gap-3", "lg:col-span-2", "lg:mt-2"], ["type", "checkbox", "formControlName", "truthfulInfo", 1, "mt-0.5", "h-5", "w-5", "shrink-0", "accent-ink"], [1, "mt-5", "flex", "items-start", "gap-3", "lg:col-span-2", "lg:mt-0"], ["type", "checkbox", "formControlName", "acceptTerms", 1, "mt-0.5", "h-5", "w-5", "shrink-0", "accent-ink"], ["type", "button", 1, "font-medium", "text-primary", "underline", "underline-offset-2", 3, "click"], [1, "mt-5", "flex", "gap-3", "rounded-2xl", "border", "border-warn-border", "bg-warn-bg", "p-4", "lg:col-span-2", "lg:mt-0"], ["type", "submit", 1, "mt-8", "w-full", "rounded-full", "bg-primary", "py-3.5", "text-[15px]", "font-medium", "text-white", "transition", "hover:bg-primary-dark", "disabled:bg-[#e9e9e9]", "disabled:text-[#a9adb5]", "lg:col-span-2", "lg:mt-3", 3, "disabled"], [1, "mt-5", "text-center", "lg:col-span-2", "lg:mt-0"], ["routerLink", "/", 1, "text-[15px]", "font-medium", "text-ink", "underline", "underline-offset-2"], [1, "mt-6", "flex", "justify-center"], [1, "flex", "items-center", "gap-2", "rounded-full", "border", "border-primary/50", "bg-primary/5", "px-4", "py-2", "text-[15px]", "font-medium", "text-primary"], ["solarShieldCheckOutline", "", "aria-hidden", "true", 1, "h-4.5", "w-4.5"], [1, "flex", "gap-3", "items-center"], ["solarUserIdOutline", "", "aria-hidden", "true", 1, "mt-0.5", "h-5", "w-5", "shrink-0", "text-muted"], [1, "text-sm", "text-muted"], [1, "text-[15px]"], ["solarMapArrowRightLinear", "", "aria-hidden", "true", 1, "mt-0.5", "h-5", "w-5", "shrink-0", "text-muted"], ["solarUserCircleOutline", "", "aria-hidden", "true", 1, "mt-0.5", "h-5", "w-5", "shrink-0", "text-muted"], ["solarMapPointOutline", "", "aria-hidden", "true", 1, "mt-0.5", "h-5", "w-5", "shrink-0", "text-muted"], ["solarPhoneOutline", "", "aria-hidden", "true", 1, "mt-0.5", "h-5", "w-5", "shrink-0", "text-muted"], ["solarDangerCircleBold", "", "aria-hidden", "true", 1, "mt-0.5", "h-5", "w-5", "shrink-0", "text-warn-ink"], [1, "text-[15px]", "leading-relaxed", "text-warn-ink"]], template: function UpdateInfo_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "section", 11);
      \u0275\u0275element(1, "div", 12);
      \u0275\u0275elementStart(2, "div", 13)(3, "h1", 14);
      \u0275\u0275text(4, "Actualiza tu informaci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 15);
      \u0275\u0275text(6, " Ingresa tus datos para empezar a recibir tus incentivos. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 16)(8, "h2", 17);
      \u0275\u0275text(9, "Datos registrados");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(10, UpdateInfo_Conditional_10_Template, 36, 5, "dl", 18)(11, UpdateInfo_Conditional_11_Template, 2, 0, "p", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 20);
      \u0275\u0275namespaceSVG();
      \u0275\u0275element(13, "svg", 21);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(14, "p", 22);
      \u0275\u0275text(15, " Escr\xEDbelos tal como figuran en tu documento de identidad, tu cuenta bancaria y el n\xFAmero de celular asociado a tu billetera. Caso contrario, no se podr\xE1n realizar los incentivos. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "form", 23);
      \u0275\u0275listener("ngSubmit", function UpdateInfo_Template_form_ngSubmit_16_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(17, "div")(18, "label", 24);
      \u0275\u0275text(19, " Nombres");
      \u0275\u0275elementStart(20, "span", 25);
      \u0275\u0275text(21, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 26);
      \u0275\u0275element(23, "input", 27, 0);
      \u0275\u0275conditionalCreate(25, UpdateInfo_Conditional_25_Template, 1, 0, ":svg:svg", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(26, UpdateInfo_Conditional_26_Template, 2, 1, "p", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 30)(28, "label", 31);
      \u0275\u0275text(29, " Apellido paterno");
      \u0275\u0275elementStart(30, "span", 25);
      \u0275\u0275text(31, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 26);
      \u0275\u0275element(33, "input", 32, 1);
      \u0275\u0275conditionalCreate(35, UpdateInfo_Conditional_35_Template, 1, 0, ":svg:svg", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(36, UpdateInfo_Conditional_36_Template, 2, 1, "p", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 30)(38, "label", 33);
      \u0275\u0275text(39, " Apellido materno");
      \u0275\u0275elementStart(40, "span", 25);
      \u0275\u0275text(41, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 26);
      \u0275\u0275element(43, "input", 34, 2);
      \u0275\u0275conditionalCreate(45, UpdateInfo_Conditional_45_Template, 1, 0, ":svg:svg", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(46, UpdateInfo_Conditional_46_Template, 2, 1, "p", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 30)(48, "label", 35);
      \u0275\u0275text(49, " Correo ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div", 26);
      \u0275\u0275element(51, "input", 36, 3);
      \u0275\u0275conditionalCreate(53, UpdateInfo_Conditional_53_Template, 1, 0, ":svg:svg", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(54, UpdateInfo_Conditional_54_Template, 2, 1, "p", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 37)(56, "label", 38);
      \u0275\u0275text(57, " Entidad financiera");
      \u0275\u0275conditionalCreate(58, UpdateInfo_Conditional_58_Template, 2, 0, "span", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 39);
      \u0275\u0275element(60, "app-select", 40, 4);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(62, UpdateInfo_Conditional_62_Template, 2, 1, "p", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "div", 30)(64, "label", 41);
      \u0275\u0275text(65, " Tipo de cuenta");
      \u0275\u0275conditionalCreate(66, UpdateInfo_Conditional_66_Template, 2, 0, "span", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "div", 39);
      \u0275\u0275element(68, "app-select", 42, 5);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(70, UpdateInfo_Conditional_70_Template, 2, 1, "p", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "div", 30)(72, "label", 43);
      \u0275\u0275text(73, " N\xB0 de Cuenta");
      \u0275\u0275conditionalCreate(74, UpdateInfo_Conditional_74_Template, 2, 0, "span", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "div", 26);
      \u0275\u0275element(76, "input", 44, 6);
      \u0275\u0275conditionalCreate(78, UpdateInfo_Conditional_78_Template, 1, 0, ":svg:svg", 45);
      \u0275\u0275conditionalCreate(79, UpdateInfo_Conditional_79_Template, 1, 0, ":svg:svg", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(80, UpdateInfo_Conditional_80_Template, 2, 1, "p", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "div", 30)(82, "label", 46);
      \u0275\u0275text(83, " N\xB0 de Cuenta Interbancaria CCI");
      \u0275\u0275conditionalCreate(84, UpdateInfo_Conditional_84_Template, 2, 0, "span", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "div", 26);
      \u0275\u0275element(86, "input", 47, 7);
      \u0275\u0275conditionalCreate(88, UpdateInfo_Conditional_88_Template, 1, 0, ":svg:svg", 45);
      \u0275\u0275conditionalCreate(89, UpdateInfo_Conditional_89_Template, 1, 0, ":svg:svg", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(90, UpdateInfo_Conditional_90_Template, 2, 1, "p", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "div", 30)(92, "label", 48);
      \u0275\u0275text(93, " Billetera");
      \u0275\u0275conditionalCreate(94, UpdateInfo_Conditional_94_Template, 2, 0, "span", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "div", 39);
      \u0275\u0275element(96, "app-select", 49, 8);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(98, UpdateInfo_Conditional_98_Template, 2, 1, "p", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "div", 30)(100, "label", 50);
      \u0275\u0275text(101, " N\xB0 de celular asociado a la billetera");
      \u0275\u0275conditionalCreate(102, UpdateInfo_Conditional_102_Template, 2, 0, "span", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "div", 51);
      \u0275\u0275namespaceSVG();
      \u0275\u0275element(104, "svg", 52)(105, "svg", 53);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(106, "span", 54);
      \u0275\u0275text(107, "+51");
      \u0275\u0275elementEnd();
      \u0275\u0275element(108, "input", 55, 9);
      \u0275\u0275conditionalCreate(110, UpdateInfo_Conditional_110_Template, 1, 0, ":svg:svg", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(111, UpdateInfo_Conditional_111_Template, 2, 1, "p", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "div", 30)(113, "label", 57);
      \u0275\u0275text(114, " Operador celular");
      \u0275\u0275conditionalCreate(115, UpdateInfo_Conditional_115_Template, 2, 0, "span", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "div", 39);
      \u0275\u0275element(117, "app-select", 58, 10);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(119, UpdateInfo_Conditional_119_Template, 2, 1, "p", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "label", 59);
      \u0275\u0275element(121, "input", 60);
      \u0275\u0275elementStart(122, "span", 22);
      \u0275\u0275text(123, " Declaro que la informaci\xF3n ingresada es veraz y coincide con mis documentos oficiales y cuentas bancarias. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(124, "label", 61);
      \u0275\u0275element(125, "input", 62);
      \u0275\u0275elementStart(126, "span", 22);
      \u0275\u0275text(127, " He le\xEDdo y acepto los ");
      \u0275\u0275elementStart(128, "button", 63);
      \u0275\u0275listener("click", function UpdateInfo_Template_button_click_128_listener($event) {
        \u0275\u0275restoreView(_r1);
        ctx.legal.openTerms();
        return \u0275\u0275resetView($event.stopPropagation());
      });
      \u0275\u0275text(129, " T\xE9rminos de uso ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(130, " y ");
      \u0275\u0275elementStart(131, "button", 63);
      \u0275\u0275listener("click", function UpdateInfo_Template_button_click_131_listener($event) {
        \u0275\u0275restoreView(_r1);
        ctx.legal.openPrivacy();
        return \u0275\u0275resetView($event.stopPropagation());
      });
      \u0275\u0275text(132, " Pol\xEDtica de Privacidad ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(133, " de BonoPay. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(134, UpdateInfo_Conditional_134_Template, 4, 1, "div", 64);
      \u0275\u0275elementStart(135, "button", 65);
      \u0275\u0275text(136, " Guardar informaci\xF3n ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "div", 66)(138, "a", 67);
      \u0275\u0275text(139, " Cancelar registro ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(140, "div", 68)(141, "span", 69);
      \u0275\u0275namespaceSVG();
      \u0275\u0275element(142, "svg", 70);
      \u0275\u0275text(143, " Tu informaci\xF3n est\xE1 protegida ");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_11_0;
      const firstNamesError_r4 = \u0275\u0275reference(24);
      const paternalError_r5 = \u0275\u0275reference(34);
      const maternalError_r6 = \u0275\u0275reference(44);
      const emailError_r7 = \u0275\u0275reference(52);
      const entityError_r8 = \u0275\u0275reference(61);
      const accountTypeError_r9 = \u0275\u0275reference(69);
      const accountError_r10 = \u0275\u0275reference(77);
      const cciError_r11 = \u0275\u0275reference(87);
      const walletError_r12 = \u0275\u0275reference(97);
      const contactPhoneError_r13 = \u0275\u0275reference(109);
      const operatorError_r14 = \u0275\u0275reference(118);
      \u0275\u0275advance(10);
      \u0275\u0275conditional((tmp_11_0 = ctx.registration()) ? 10 : ctx.registrationError() ? 11 : -1, tmp_11_0);
      \u0275\u0275advance(6);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(9);
      \u0275\u0275conditional(firstNamesError_r4.show() ? 25 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(firstNamesError_r4.show() ? 26 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275conditional(paternalError_r5.show() ? 35 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(paternalError_r5.show() ? 36 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275conditional(maternalError_r6.show() ? 45 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(maternalError_r6.show() ? 46 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275conditional(emailError_r7.show() ? 53 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(emailError_r7.show() ? 54 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.bankRequired() ? 58 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("options", ctx.financialEntityOptions())("clearable", true)("errorMessages", \u0275\u0275pureFunction0(52, _c0))("invalid", entityError_r8.show());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(entityError_r8.show() ? 62 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.bankRequired() ? 66 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("options", ctx.accountTypes())("clearable", true)("errorMessages", \u0275\u0275pureFunction0(53, _c0))("invalid", accountTypeError_r9.show());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(accountTypeError_r9.show() ? 70 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.bankRequired() ? 74 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("errorMessages", \u0275\u0275pureFunction0(54, _c1));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isValid("accountNumber") ? 78 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(accountError_r10.show() ? 79 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(accountError_r10.show() ? 80 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.bankRequired() ? 84 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("errorMessages", ctx.cciErrorMessages());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isValid("cci") ? 88 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(cciError_r11.show() ? 89 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(cciError_r11.show() ? 90 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.walletRequired() ? 94 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("options", ctx.wallets())("clearable", true)("errorMessages", \u0275\u0275pureFunction0(55, _c0))("invalid", walletError_r12.show());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(walletError_r12.show() ? 98 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.walletRequired() ? 102 : -1);
      \u0275\u0275advance();
      \u0275\u0275styleProp("border-color", contactPhoneError_r13.show() ? "var(--color-danger)" : null);
      \u0275\u0275advance(5);
      \u0275\u0275property("errorMessages", \u0275\u0275pureFunction0(56, _c2));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(contactPhoneError_r13.show() ? 110 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(contactPhoneError_r13.show() ? 111 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.walletRequired() ? 115 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("options", ctx.operators())("clearable", true)("errorMessages", \u0275\u0275pureFunction0(57, _c0))("invalid", operatorError_r14.show());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(operatorError_r14.show() ? 119 : -1);
      \u0275\u0275advance(15);
      \u0275\u0275conditional(ctx.saveError() ? 134 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.form.invalid || ctx.saving());
    }
  }, dependencies: [
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    CheckboxControlValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    MaxLengthValidator,
    FormGroupDirective,
    FormControlName,
    RouterLink,
    PhoneFormatDirective,
    FieldErrorDirective,
    Select,
    CustomFlagPe,
    UserIdOutline,
    MapArrowRightLinear,
    UserCircleOutline,
    MapPointOutline,
    PhoneOutline,
    InfoCircleOutline,
    AltArrowDownOutline,
    CheckCircleOutline,
    DangerCircleBold,
    ShieldCheckOutline
  ], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UpdateInfo, [{
    type: Component,
    args: [{ selector: "app-update-info-page", imports: [
      ReactiveFormsModule,
      RouterLink,
      PhoneFormatDirective,
      FieldErrorDirective,
      Select,
      CustomFlagPe,
      UserIdOutline,
      MapArrowRightLinear,
      UserCircleOutline,
      MapPointOutline,
      PhoneOutline,
      InfoCircleOutline,
      AltArrowDownOutline,
      CheckCircleOutline,
      DangerCircleBold,
      ShieldCheckOutline
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<section class="overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(31,42,64,0.08)]">\r
  <div class="h-3 bg-primary"></div>\r
\r
  <div class="px-5 pt-7 pb-8 lg:px-10">\r
    <h1 class="text-center text-[24px] font-semibold">Actualiza tu informaci\xF3n</h1>\r
    <p class="mx-auto mt-2 max-w-[280px] text-center leading-relaxed text-muted lg:max-w-none">\r
      Ingresa tus datos para empezar a recibir tus incentivos.\r
    </p>\r
\r
    <!-- Registered data -->\r
    <div class="mt-6 rounded-2xl border border-line p-5">\r
      <h2 class="text-lg font-semibold">Datos registrados</h2>\r
      @if (registration(); as data) {\r
        <dl class="mt-4 space-y-4 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-4 lg:space-y-0">\r
          <div class="flex gap-3 items-center">\r
            <svg solarUserIdOutline class="mt-0.5 h-5 w-5 shrink-0 text-muted" aria-hidden="true"></svg>\r
            <div>\r
              <dt class="text-sm text-muted">Documento</dt>\r
              <dd class="text-[15px]">{{ documentLabel(data) }}</dd>\r
            </div>\r
          </div>\r
          <div class="flex gap-3 items-center">\r
            <svg solarMapArrowRightLinear class="mt-0.5 h-5 w-5 shrink-0 text-muted" aria-hidden="true"></svg>\r
            <div>\r
              <dt class="text-sm text-muted">Canal</dt>\r
              <dd class="text-[15px]">{{ data.channel }}</dd>\r
            </div>\r
          </div>\r
          <div class="flex gap-3 items-center">\r
            <svg solarUserCircleOutline class="mt-0.5 h-5 w-5 shrink-0 text-muted" aria-hidden="true"></svg>\r
            <div>\r
              <dt class="text-sm text-muted">Tipo</dt>\r
              <dd class="text-[15px]">{{ data.channelType }}</dd>\r
            </div>\r
          </div>\r
          <div class="flex gap-3 items-center">\r
            <svg solarMapPointOutline class="mt-0.5 h-5 w-5 shrink-0 text-muted" aria-hidden="true"></svg>\r
            <div>\r
              <dt class="text-sm text-muted">Ubicaci\xF3n</dt>\r
              <dd class="text-[15px]">{{ data.location }}</dd>\r
            </div>\r
          </div>\r
          <div class="flex gap-3 items-center">\r
            <svg solarPhoneOutline class="mt-0.5 h-5 w-5 shrink-0 text-muted" aria-hidden="true"></svg>\r
            <div>\r
              <dt class="text-sm text-muted">Contacto</dt>\r
              <dd class="text-[15px]">{{ data.contactPhone }}</dd>\r
            </div>\r
          </div>\r
        </dl>\r
      } @else if (registrationError()) {\r
        <p class="mt-4 text-sm text-warn-ink">\r
          No pudimos cargar tus datos registrados. Intenta de nuevo.\r
        </p>\r
      }\r
    </div>\r
\r
    <!-- Info banner -->\r
    <div class="mt-5 flex gap-3 rounded-2xl bg-info-bg p-5">\r
      <svg solarInfoCircleOutline class="mt-0.5 h-5 w-5 shrink-0 text-info" aria-hidden="true"></svg>\r
      <p class="text-[15px] leading-relaxed">\r
        Escr\xEDbelos tal como figuran en tu documento de identidad, tu cuenta bancaria y el n\xFAmero de\r
        celular asociado a tu billetera. Caso contrario, no se podr\xE1n realizar los incentivos.\r
      </p>\r
    </div>\r
\r
    <!-- Form -->\r
    <form class="mt-6 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:gap-y-5" [formGroup]="form" (ngSubmit)="submit()">\r
      <div>\r
        <label class="block text-[15px] font-medium" for="first-names">\r
          Nombres<span class="text-danger">*</span>\r
        </label>\r
        <div class="relative mt-2">\r
          <input\r
            id="first-names"\r
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
      <div class="mt-5 lg:mt-0">\r
        <label class="block text-[15px] font-medium" for="paternal-last-name">\r
          Apellido paterno<span class="text-danger">*</span>\r
        </label>\r
        <div class="relative mt-2">\r
          <input\r
            id="paternal-last-name"\r
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
      <div class="mt-5 lg:mt-0">\r
        <label class="block text-[15px] font-medium" for="maternal-last-name">\r
          Apellido materno<span class="text-danger">*</span>\r
        </label>\r
        <div class="relative mt-2">\r
          <input\r
            id="maternal-last-name"\r
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
      <div class="mt-5 lg:mt-0">\r
        <label class="block text-[15px] font-medium" for="email">\r
          Correo\r
        </label>\r
        <div class="relative mt-2">\r
          <input\r
            id="email"\r
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
\r
      <div class="mt-5 lg:col-span-2 lg:mt-0">\r
        <label class="block text-[15px] font-medium" for="financial-entity">\r
          Entidad financiera@if (bankRequired()) {<span class="text-danger">*</span>}\r
        </label>\r
        <div class="mt-2">\r
          <app-select\r
            selectId="financial-entity"\r
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
      <div class="mt-5 lg:mt-0">\r
        <label class="block text-[15px] font-medium" for="account-type">\r
          Tipo de cuenta@if (bankRequired()) {<span class="text-danger">*</span>}\r
        </label>\r
        <div class="mt-2">\r
          <app-select\r
            selectId="account-type"\r
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
      <div class="mt-5 lg:mt-0">\r
        <label class="block text-[15px] font-medium" for="account-number">\r
          N\xB0 de Cuenta@if (bankRequired()) {<span class="text-danger">*</span>}\r
        </label>\r
        <div class="relative mt-2">\r
          <input\r
            id="account-number"\r
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
      <div class="mt-5 lg:mt-0">\r
        <label class="block text-[15px] font-medium" for="cci">\r
          N\xB0 de Cuenta Interbancaria CCI@if (bankRequired()) {<span class="text-danger">*</span>}\r
        </label>\r
        <div class="relative mt-2">\r
          <input\r
            id="cci"\r
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
\r
      <div class="mt-5 lg:mt-0">\r
        <label class="block text-[15px] font-medium" for="wallet">\r
          Billetera@if (walletRequired()) {<span class="text-danger">*</span>}\r
        </label>\r
        <div class="mt-2">\r
          <app-select\r
            selectId="wallet"\r
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
      <div class="mt-5 lg:mt-0">\r
        <label class="block text-[15px] font-medium" for="contact-phone">\r
          N\xB0 de celular asociado a la billetera@if (walletRequired()) {<span class="text-danger">*</span>}\r
        </label>\r
        <div\r
          class="mt-2 flex items-center gap-2 rounded-xl border border-line bg-field px-4 py-3.5 focus-within:border-ink"\r
          [style.border-color]="contactPhoneError.show() ? 'var(--color-danger)' : null"\r
        >\r
          <svg CustomFlagPe class="h-4 w-6 shrink-0 overflow-hidden rounded-[3px]" aria-hidden="true"></svg>\r
          <svg solarAltArrowDownOutline class="h-3.5 w-3.5 shrink-0 text-muted" aria-hidden="true"></svg>\r
          <span class="text-[15px] font-medium">+51</span>\r
          <input\r
            id="contact-phone"\r
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
      <div class="mt-5 lg:mt-0">\r
        <label class="block text-[15px] font-medium" for="operator">\r
          Operador celular@if (walletRequired()) {<span class="text-danger">*</span>}\r
        </label>\r
        <div class="mt-2">\r
          <app-select\r
            selectId="operator"\r
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
\r
      <label class="mt-7 flex items-start gap-3 lg:col-span-2 lg:mt-2">\r
        <input\r
          type="checkbox"\r
          formControlName="truthfulInfo"\r
          class="mt-0.5 h-5 w-5 shrink-0 accent-ink"\r
        />\r
        <span class="text-[15px] leading-relaxed">\r
          Declaro que la informaci\xF3n ingresada es veraz y coincide con mis documentos oficiales y\r
          cuentas bancarias.\r
        </span>\r
      </label>\r
\r
      <label class="mt-5 flex items-start gap-3 lg:col-span-2 lg:mt-0">\r
        <input\r
          type="checkbox"\r
          formControlName="acceptTerms"\r
          class="mt-0.5 h-5 w-5 shrink-0 accent-ink"\r
        />\r
        <span class="text-[15px] leading-relaxed">\r
          He le\xEDdo y acepto los\r
          <button\r
            type="button"\r
            (click)="legal.openTerms(); $event.stopPropagation()"\r
            class="font-medium text-primary underline underline-offset-2"\r
          >\r
            T\xE9rminos de uso\r
          </button>\r
          y\r
          <button\r
            type="button"\r
            (click)="legal.openPrivacy(); $event.stopPropagation()"\r
            class="font-medium text-primary underline underline-offset-2"\r
          >\r
            Pol\xEDtica de Privacidad\r
          </button>\r
          de BonoPay.\r
        </span>\r
      </label>\r
\r
      @if (saveError()) {\r
        <div class="mt-5 flex gap-3 rounded-2xl border border-warn-border bg-warn-bg p-4 lg:col-span-2 lg:mt-0">\r
          <svg solarDangerCircleBold class="mt-0.5 h-5 w-5 shrink-0 text-warn-ink" aria-hidden="true"></svg>\r
          <p class="text-[15px] leading-relaxed text-warn-ink">{{ saveError() }}</p>\r
        </div>\r
      }\r
\r
      <button\r
        type="submit"\r
        [disabled]="form.invalid || saving()"\r
        class="mt-8 w-full rounded-full bg-primary py-3.5 text-[15px] font-medium text-white transition hover:bg-primary-dark disabled:bg-[#e9e9e9] disabled:text-[#a9adb5] lg:col-span-2 lg:mt-3"\r
      >\r
        Guardar informaci\xF3n\r
      </button>\r
\r
      <div class="mt-5 text-center lg:col-span-2 lg:mt-0">\r
        <a routerLink="/" class="text-[15px] font-medium text-ink underline underline-offset-2">\r
          Cancelar registro\r
        </a>\r
      </div>\r
    </form>\r
  </div>\r
</section>\r
\r
<div class="mt-6 flex justify-center">\r
  <span class="flex items-center gap-2 rounded-full border border-primary/50 bg-primary/5 px-4 py-2 text-[15px] font-medium text-primary">\r
    <svg solarShieldCheckOutline class="h-4.5 w-4.5" aria-hidden="true"></svg>\r
    Tu informaci\xF3n est\xE1 protegida\r
  </span>\r
</div>\r
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UpdateInfo, { className: "UpdateInfo", filePath: "src/app/features/participante/pages/update-info/update-info.ts", lineNumber: 66 });
})();
export {
  UpdateInfo as default
};
