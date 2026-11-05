// src/app/features/participante/consts/otp.const.ts
var OTP_CODE_LENGTH = 6;
var OTP_RESEND_COOLDOWN_SECONDS = 60;

// src/app/features/participante/consts/profile.const.ts
var PROFILE_EDIT_LOCK_HOURS = 24;
var PROFILE_BRAND_LOGOS = {
  BCP: "/bcp.png",
  Interbank: "/interbank.png",
  BBVA: "/bbva.png",
  Scotiabank: "/scotiabank.png",
  "Banco de la Naci\xF3n": "/banco-de-la-nacion.jpeg",
  Yape: "/yape.png",
  Plin: "/plin.png"
};

// src/app/features/participante/consts/profile-edit-dialog.const.ts
var PROFILE_EDIT_DIALOG_SECTION_TITLES = {
  personal: "Editar datos",
  bank: "Editar datos bancarios",
  wallet: "Editar billetera"
};
var PROFILE_EDIT_DIALOG_SECTION_FIELDS = {
  personal: ["firstNames", "paternalLastName", "maternalLastName", "email"],
  bank: ["financialEntity", "accountType", "accountNumber", "cci"],
  wallet: ["wallet", "contactPhone", "operator"]
};
var PROFILE_EDIT_DIALOG_SECTION_HINTS = {
  personal: "Escr\xEDbelos tal como figuran en tu documento y en tu cuenta bancaria. Caso contrario, no se podr\xE1n realizar los incentivos.",
  bank: "Escr\xEDbelos tal como figuran en tu cuenta bancaria. Caso contrario, no se podr\xE1n realizar los incentivos.",
  wallet: "Escr\xEDbelos tal como figuran en tu billetera. Caso contrario, no se podr\xE1n realizar los incentivos."
};

export {
  OTP_CODE_LENGTH,
  OTP_RESEND_COOLDOWN_SECONDS,
  PROFILE_EDIT_LOCK_HOURS,
  PROFILE_BRAND_LOGOS,
  PROFILE_EDIT_DIALOG_SECTION_TITLES,
  PROFILE_EDIT_DIALOG_SECTION_FIELDS,
  PROFILE_EDIT_DIALOG_SECTION_HINTS
};
