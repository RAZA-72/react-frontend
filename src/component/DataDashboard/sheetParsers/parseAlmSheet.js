
//from razzaq


import { ALM_MAPPING } from "../Mappings/alm.mapping";
import { cleanLabel } from "../utils/cleanLabel";
import { setDeepValue } from "../utils/setDeepValue";

export const parseAlmSheet = (rows, formData) => {
  let activeTable = null;

  rows.forEach(row => {
    const label = row.__EMPTY_1;
    if (!label) return;

    const cleanedLabel = cleanLabel(label);

    // 🔹 detect table
    Object.values(ALM_MAPPING.tables).forEach(table => {
      if (cleanLabel(table.start) === cleanedLabel) {
        activeTable = table;
      }
    });

    if (!activeTable || !activeTable.fields) return;

    Object.entries(activeTable.fields).forEach(([excelLabel, path]) => {
      if (cleanLabel(excelLabel) === cleanedLabel) {
        setDeepValue(formData, path, {
          lt1: row.__EMPTY_2 || 0,
          oneTo3: row.__EMPTY_3 || 0,
          threeTo6: row.__EMPTY_4 || 0,
          sixTo12: row.__EMPTY_5 || 0,
          gt12: row.__EMPTY_6 || 0,
          total: row.__EMPTY_7 || 0
        });
      }
    });
  });

  return formData;
};
