import * as XLSX from "xlsx";

import formFields from "../data/FormFields";
import { parseOverviewSheet } from "../sheetParsers/overview.parser";
import { parseStateEquitySheet } from "../sheetParsers/stateEquity.parser";
import { CleaningServices } from "@mui/icons-material";

export const importExcel = (file, existingData) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = e => {
            try {
                const workbook = XLSX.read(e.target.result, { type: "array" });
                let data = JSON.parse(JSON.stringify(existingData || formFields));
                console.log("workbook sheets", workbook)
                if (workbook.Sheets["Overview"]) {
                    const rows = XLSX.utils.sheet_to_json(
                        workbook.Sheets["Overview"],
                        { header: 4, defval: "" }
                    );

                    data = parseOverviewSheet(rows, data);
                    console.log("data of overview", data)
                }
                // ================= STATE & EQUITY =================
                if (workbook.Sheets["State&Equity"]) {
                    const rows = XLSX.utils.sheet_to_json(
                        workbook.Sheets["State&Equity"],
                        { defval: "" } // ⬅️ VERY IMPORTANT
                    );

                    data = parseStateEquitySheet(rows, data);

                    console.log("✅ States parsed from Excel", data.States);
                }



                resolve(data);
            } catch (err) {
                reject(err);
            }
        };

        reader.readAsArrayBuffer(file);
    });
};
