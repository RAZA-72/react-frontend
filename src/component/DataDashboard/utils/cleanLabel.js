export const cleanLabel = (str = "") =>
  String(str).replace(/\s+/g, " ").trim().toLowerCase();
