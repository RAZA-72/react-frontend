
import * as React from "react";
import {
  Button,
  Typography,
  Card,
  CardContent,
  CardActionArea,
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

function TableParameterMember({ tableofir, filterofir }) {

  const [memberTableData, setMemberTableData] = React.useState(null);
  const [universeTableData, setUniverseTableData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  console.log("📊 TableParameterMember received tableofir:", tableofir);
  console.log("🎛️ Filter data:", filterofir);

  const getDefaultMemberData = () => ({
    columns: ["Parameters", "Member"],
    table: [
      { Parameters: "Minimum Interest Rate", Member: "0.00%" },
      { Parameters: "Maximum Interest Rate", Member: "0.00%" },
      { Parameters: "Weighted average Interest Rate", Member: "0.00%" }
    ],
  });

  const getDefaultUniverseData = () => ({
    columns: ["Parameters", "Universe"],
    table: [
      { Parameters: "Minimum Interest Rate", Universe: "0.00%" },
      { Parameters: "Maximum Interest Rate", Universe: "0.00%" },
      { Parameters: "Weighted average Interest Rate", Universe: "0.00%" }
    ],
  });

  React.useEffect(() => {
    setLoading(true);

    try {
      // Process Member Table
      if (tableofir && tableofir.table1_member) {
        const d = tableofir.table1_member;
        const name = d.member || "Member";

        setMemberTableData({
          columns: ["Parameters", name],
          table: [
            { Parameters: "Minimum Interest Rate", [name]: d.min_rate || "0.00%" },
            { Parameters: "Maximum Interest Rate", [name]: d.max_rate || "0.00%" },
            { Parameters: "Weighted average Interest Rate", [name]: d.wirr || "0.00%" }
          ]
        });
      } else {
        setMemberTableData(getDefaultMemberData());
      }

      // Process Universe Table
      if (tableofir && tableofir.table2_entity) {
        const d = tableofir.table2_entity;
        const name = d.entityType || "Universe";

        setUniverseTableData({
          columns: ["Parameters", name],
          table: [
            { Parameters: "Minimum Interest Rate", [name]: d.min_rate || "0.00%" },
            { Parameters: "Maximum Interest Rate", [name]: d.max_rate || "0.00%" },
            { Parameters: "Weighted average Interest Rate", [name]: d.wirr || "0.00%" }
          ]
        });
      } else {
        setUniverseTableData(getDefaultUniverseData());
      }

      setLoading(false);
    } catch (error) {
      console.error("❌ Error transforming data:", error);
      setMemberTableData(getDefaultMemberData());
      setUniverseTableData(getDefaultUniverseData());
      setLoading(false);
    }
  }, [tableofir]);

  const [memberOpen, setMemberOpen] = React.useState(false);
  const [universeOpen, setUniverseOpen] = React.useState(false);

  const downloadMemberPdf = () => {
    const pdf = new jsPDF();
    pdf.autoTable({ html: "#table-to-xls-ir-member" });
    pdf.save("interest-rate-member-report.pdf");
  };

  const downloadUniversePdf = () => {
    const pdf = new jsPDF();
    pdf.autoTable({ html: "#table-to-xls-ir-universe" });
    pdf.save("interest-rate-universe-report.pdf");
  };

  const getDynamicColumns = (tableData, defaultData) =>
    (tableData && tableData.columns || defaultData.columns).filter(c => c !== "Parameters");

  const isMonthSelected = () =>
    filterofir && filterofir.selectedPeriodType === "Month";

  const filterTableRows = (table) =>
    isMonthSelected()
      ? table.filter(r => r.Parameters !== "Weighted average Interest Rate")
      : table;

  const memberFinal = memberTableData || getDefaultMemberData();
  const universeFinal = universeTableData || getDefaultUniverseData();

  const memberRows = filterTableRows(memberFinal.table);
  const universeRows = filterTableRows(universeFinal.table);

  const memberCols = getDynamicColumns(memberTableData, getDefaultMemberData());
  const universeCols = getDynamicColumns(universeTableData, getDefaultUniverseData());

  const headerStyle = {
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: "#f5f5f5",
  };

  const dataCellStyle = { textAlign: "center", padding: "8px 12px" };
  const paramCellStyle = { textAlign: "left", padding: "8px 12px", fontWeight: 500 };
  const memberName =
  memberFinal &&
  memberFinal.columns &&
  memberFinal.columns.length > 1
    ? memberFinal.columns[1]
    : "Member";

const universeName =
  universeFinal &&
  universeFinal.columns &&
  universeFinal.columns.length > 1
    ? universeFinal.columns[1]
    : "Universe";


  return (
    <>

      {/* ------------------------------------------------------ */}
      {/* MEMBER TABLE (Wrapped in same template structure) */}
      {/* ------------------------------------------------------ */}
      <Grid xs={12} sm={12} md={12}>
        <Card style={{ paddingBottom: "20px", marginBottom: "20px" }}>
          <CardActionArea>
            <CardContent>

              {/* Header Row */}
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
              }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  style={{ fontSize: "18px", color: "#bd2f03", textAlign: "left" }}
                >
Interest Rate - {memberName}
                </Typography>

                <Dropdown
                  keepOpen
                  open={memberOpen}
                  trigger={
                    <Button
                      style={{
                        border: "1px solid #000",
                        borderRadius: "6px",
                        background: "#fff",
                        color: "#000",
                        height: "29px",
                        textTransform: "none",
                      }}
                      endIcon={<ArrowDropDownIcon />}
                    >
                      Download
                    </Button>
                  }
                  menu={[
                    <DropdownMenuItem key="excel-member">
                      <ReactHTMLTableToExcel
                        id="xls-member"
                        table="table-to-xls-ir-member"
                        filename="interest-rate-member-report"
                        filetype="xls"
                        sheet="Member Interest Rate Data"
                        buttonText={
                          <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                            EXCEL FORMAT <FileDownloadIcon fontSize="small" />
                          </span>
                        }
                      />
                    </DropdownMenuItem>,
                    <DropdownMenuItem key="pdf-member">
                      <Button
                        onClick={downloadMemberPdf}
                        style={{ color: "#000" }}
                        endIcon={<PictureAsPdfIcon />}
                      >
                        PDF Format
                      </Button>
                    </DropdownMenuItem>,
                  ]}
                />
              </div>

              {/* Table */}
              {loading ? (
                <Typography>Loading Member data...</Typography>
              ) : (
                <Table
                  id="table-to-xls-ir-member"
                  striped
                  bordered
                  hover
                  style={{ marginTop: "10px" }}
                >
                  <thead>
                    <tr>
                      {/* <th style={headerStyle}>Parameters</th> */}
                      <th style={{ ...headerStyle, textAlign: 'left' }}>Parameters</th>

                      {memberCols.map((c, i) => (
                        <th key={i} style={headerStyle}>{c}</th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {memberRows.map((row, i) => (
                      <tr key={i}>
                        <td style={paramCellStyle}>{row.Parameters}</td>
                        {memberCols.map((col, x) => (
                          <td key={x} style={dataCellStyle}>
                            {row[col] || "0.00%"}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}

            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      {/* ------------------------------------------------------ */}
      {/* UNIVERSE TABLE (Wrapped same as template) */}
      {/* ------------------------------------------------------ */}
      <Grid xs={12} sm={12} md={12}>
        <Card style={{ paddingBottom: "20px" }}>
          <CardActionArea>
            <CardContent>

              {/* Header Row */}
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
              }}>
                {/* <Typography
                  gutterBottom
                  variant="h5"
                  style={{ fontSize: "18px", color: "#bd2f03", textAlign: "left" }}
                >
                  Interest Rate Parameters
                </Typography> */}
<Typography
  gutterBottom
  variant="h5"
  style={{ fontSize: "18px", color: "#bd2f03", textAlign: "left" }}
>
  Interest Rate - {universeName}
</Typography>

                <Dropdown
                  keepOpen
                  open={universeOpen}
                  trigger={
                    <Button
                      style={{
                        border: "1px solid #000",
                        borderRadius: "6px",
                        background: "#fff",
                        color: "#000",
                        height: "29px",
                        textTransform: "none",
                      }}
                      endIcon={<ArrowDropDownIcon />}
                    >
                      Download
                    </Button>
                  }
                  menu={[
                    <DropdownMenuItem key="excel-universe">
                      <ReactHTMLTableToExcel
                        id="xls-universe"
                        table="table-to-xls-ir-universe"
                        filename="interest-rate-universe-report"
                        filetype="xls"
                        sheet="Universe Interest Rate Data"
                        buttonText={
                          <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                            EXCEL FORMAT <FileDownloadIcon fontSize="small" />
                          </span>
                        }
                      />
                    </DropdownMenuItem>,
                    <DropdownMenuItem key="pdf-universe">
                      <Button
                        onClick={downloadUniversePdf}
                        style={{ color: "#000" }}
                        endIcon={<PictureAsPdfIcon />}
                      >
                        PDF Format
                      </Button>
                    </DropdownMenuItem>,
                  ]}
                />
              </div>

              {/* Table */}
              {loading ? (
                <Typography>Loading Universe data...</Typography>
              ) : (
                <Table
                  id="table-to-xls-ir-universe"
                  striped
                  bordered
                  hover
                  style={{ marginTop: "10px" }}
                >
                  <thead>
                    <tr>

                      <th style={{ ...headerStyle, textAlign: 'left' }}>Parameters</th>

                      {universeCols.map((c, i) => (
                        <th key={i} style={headerStyle}>{c}</th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {universeRows.map((row, i) => (
                      <tr key={i}>
                        <td style={paramCellStyle}>{row.Parameters}</td>
                        {universeCols.map((col, x) => (
                          <td key={x} style={dataCellStyle}>
                            {row[col] || "0.00%"}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}

            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

    </>
  );
}

export default TableParameterMember;



