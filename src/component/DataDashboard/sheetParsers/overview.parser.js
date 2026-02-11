
import { OVERVIEW_MAPPING } from "../Mappings/overview.mapping";
import { cleanLabel } from "../utils/cleanLabel";
import { setDeepValue } from "../utils/setDeepValue";

const isAsOnRow = label =>
  cleanLabel(label).startsWith("as on");

export const parseOverviewSheet = (rows, formData) => {
  let activeTable = null;

  console.log("Parsing Overview Sheet with rows:", rows);
  console.log("Initial formData:", formData);
rows.forEach(row => {
  const label = row.__EMPTY_1;
  const value = row.__EMPTY_2;

  if (!label) return;

  // 👉 ADD THIS (VERY IMPORTANT)
  if (isAsOnRow(label)) {
    return; // ignore "As on December 2023"
  }

  let tableMatched = false;

  // Detect table start
  Object.values(OVERVIEW_MAPPING.tables).forEach(table => {
    if (cleanLabel(label) === cleanLabel(table.start)) {
      activeTable = table;
      tableMatched = true;
    }
  });

  // 👉 ADD THIS (RESET TABLE IF NEW SECTION STARTED)
  if (!tableMatched && label === label.toUpperCase()) {
    activeTable = null;
  }

  if (!activeTable) return;

  // Match field
  Object.entries(activeTable.fields).forEach(([excelLabel, path]) => {
    if (cleanLabel(label) === cleanLabel(excelLabel)) {
      setDeepValue(formData, path, value);
    }
  });
});
  // rows.forEach(row => {
  //   const label = row.__EMPTY_1;
  //   const value = row.__EMPTY_2;

  //   if (!label) return;

  //   // Detect table start
  //   Object.values(OVERVIEW_MAPPING.tables).forEach(table => {
  //     if (cleanLabel(label) === cleanLabel(table.start)) {
  //       activeTable = table;
  //     }
  //   });

  //   if (!activeTable) return;

  //   // Match field
  //   Object.entries(activeTable.fields).forEach(([excelLabel, path]) => {
  //     if (cleanLabel(label) === cleanLabel(excelLabel)) {
  //       setDeepValue(formData, path, value);
  //     }
  //   });
  // });

  return formData;
};
