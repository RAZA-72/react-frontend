import * as React from "react";
import {
  Button,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import ReactHTMLTableToExcel from "react-html-table-to-excel-3";
import jsPDF from "jspdf";
import "jspdf-autotable";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { Dropdown, DropdownMenuItem } from "../../Mudra/dropdown";

function TableParameterIndustry({ tableofir }) {
  const [tableData, setTableData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  console.log("📊 TableParameterIndustry received tableofir:", tableofir);

  // Default static data with zeros
  const getDefaultData = () => {
    return {
      columns: ["Parameters", "Universe"],
      table: [
        {
          Parameters: "Minimum Interest Rate",
          Universe: "0.00%"
        },
        {
          Parameters: "Maximum Interest Rate",
          Universe: "0.00%"
        },
        {
          Parameters: "Weighted average Interest Rate",
          Universe: "0.00%"
        }
      ],
    };
  };

  // Transform API data when tableofir changes
  React.useEffect(() => {
    console.log("🔄 useEffect triggered");
    console.log("tableofir value:", tableofir);

    // Check if we have valid data from API
    if (tableofir && tableofir.table2_entity) {
      setLoading(true);

      try {
        console.log("🔄 Transforming API data...");

        const entityData = tableofir.table2_entity;

        // Get entity type
        const entityType = entityData.entityType || "Universe";

        console.log("📝 Entity Type:", entityType);

        // Transform the data into table format
        const transformedData = {
          columns: ["Parameters", entityType],
          table: [
            {
              Parameters: "Minimum Interest Rate",
              [entityType]: entityData.min_rate || "0.00%"
            },
            {
              Parameters: "Maximum Interest Rate",
              [entityType]: entityData.max_rate || "0.00%"
            },
            {
              Parameters: "Weighted average Interest Rate",
              [entityType]: entityData.wirr || "0.00%"
            }
          ],
        };

        console.log("✅ Transformed table data:", transformedData);
        setTableData(transformedData);
        setLoading(false);
      } catch (error) {
        console.error("❌ Error transforming table data:", error);
        setTableData(getDefaultData());
        setLoading(false);
      }
    } else {
      // No valid data - show default
      console.log("ℹ️ No valid data, using defaults");
      setTableData(getDefaultData());
      setLoading(false);
    }
  }, [tableofir]);

  const [open, setOpen] = React.useState(false);

  // PDF Export
  const downloadPdf = () => {
    const pdf = new jsPDF();
    pdf.autoTable({ html: "#table-to-xls-ir-industry" });
    pdf.save("interest-rate-industry-report.pdf");
  };

  // Get dynamic column names (excluding "Parameters")
  const getDynamicColumns = () => {
    if (tableData && tableData.columns) {
      return tableData.columns.filter(col => col !== "Parameters");
    }
    const defaultData = getDefaultData();
    return defaultData.columns.filter(col => col !== "Parameters");
  };

  const dynamicColumns = getDynamicColumns();
  const dataToShow = tableData || getDefaultData();

  // Styling
  const headerStyle = {
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: "#f5f5f5",
  };

  const dataCellStyle = {
    textAlign: "center",
    padding: "8px 12px",
  };

  const parameterCellStyle = {
    textAlign: "left",
    padding: "8px 12px",
    fontWeight: "500",
  };

  return (
    <Grid xs={12} sm={12} md={12}>
      {/* Header */}
      <Typography
        gutterBottom
        variant="h5"
        style={{ textAlign: "left", fontSize: "18px", color: "#bd2f03" }}
      >
        Interest Rate Parameters - Industry

        <span style={{ float: "right", marginRight: "10px" }}>
          <Dropdown
            keepOpen
            open={open}
            trigger={
              <Button
                style={{ borderBottom: "2px solid", color: "#000000" }}
                endIcon={<ArrowDropDownIcon />}
              >
                Download
              </Button>
            }
            menu={[
              <DropdownMenuItem key="excel">
                <Button style={{ color: "#000000" }} endIcon={<FileDownloadIcon />}>
                  <ReactHTMLTableToExcel
                    id="test-table-xls-button-ir-industry"
                    className="htmlToExcel"
                    table="table-to-xls-ir-industry"
                    filename="interest-rate-industry-report"
                    filetype="xls"
                    sheet="Interest Rate Industry Data"
                    buttonText="Excel Format"
                  />
                </Button>
              </DropdownMenuItem>,
              <DropdownMenuItem key="pdf">
                <Button
                  onClick={downloadPdf}
                  style={{ color: "#000000" }}
                  endIcon={<PictureAsPdfIcon />}
                >
                  PDF Format
                </Button>
              </DropdownMenuItem>,
            ]}
          />
        </span>
      </Typography>

      {/* Loading */}
      {loading && (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <Typography>Loading data...</Typography>
        </div>
      )}

      {/* Table */}
      {!loading && (
        <Table
          id="table-to-xls-ir-industry"
          striped
          bordered
          hover
          style={{ marginTop: "10px", width: "100%" }}
        >
          <thead>
            <tr>
              <th style={{ ...headerStyle, width: "50%" }}>Parameters</th>
              {dynamicColumns.map((column, index) => (
                <th key={index} style={{ ...headerStyle, width: "50%" }}>
                  {column}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {dataToShow.table.map((row, index) => (
              <tr key={index}>
                <td style={parameterCellStyle}>{row.Parameters}</td>
                {dynamicColumns.map((column, colIndex) => (
                  <td key={colIndex} style={dataCellStyle}>
                    {row[column] || "0.00%"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Grid>
  );
}

export default TableParameterIndustry;