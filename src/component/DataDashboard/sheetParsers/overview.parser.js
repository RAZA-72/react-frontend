
import { OVERVIEW_MAPPING } from "../Mappings/overview.mapping";
import { cleanLabel } from "../utils/cleanLabel";
import { setDeepValue } from "../utils/setDeepValue";

export const parseOverviewSheet = (rows, formData) => {
  let activeTable = null;

  rows.forEach(row => {
    const label = row.__EMPTY_1;
    const value = row.__EMPTY_2;

    if (!label) return;

    // Detect table start
    Object.values(OVERVIEW_MAPPING.tables).forEach(table => {
      if (cleanLabel(label) === cleanLabel(table.start)) {
        activeTable = table;
      }
    });

    if (!activeTable) return;

    // Match field
    Object.entries(activeTable.fields).forEach(([excelLabel, path]) => {
      if (cleanLabel(label) === cleanLabel(excelLabel)) {
        setDeepValue(formData, path, value);
      }
    });
  });

  return formData;
};
