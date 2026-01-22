// import { createStyles, makeStyles } from "@material-ui/styles";
// import {
//   Button,
//   Card,
//   CardActionArea,
//   Typography,
//   CircularProgress
// } from "@mui/material";
// import * as React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// import Box from "@mui/material/Box";
// import GrassIcon from "@mui/icons-material/Grass";
// import Grid from "@mui/material/Unstable_Grid2";
// import "bootstrap/dist/css/bootstrap.min.css";
// import {  useParams } from "react-router-dom";
// import Breadcrumb from "../common/Breadcrumb";

// import axios from "axios";
// import { useState, useEffect } from "react";


// const useStyle = makeStyles((theme) => createStyles({
//   buttonBg: {
//     backgroundColor: '#1976d2',
//     '&:hover': {
//       backgroundColor: '#1565c0',
//     },
//   }
// }));

// const RbiEditData = () => {

//   // ✅ YAHAN LAGANA HAI
//   const location = useLocation();
//   const params = new URLSearchParams(location.search);

//   const fy = params.get("fy");
//   const quarter = params.get("quarter");
//   const { id } = useParams();
//   const [formData, setFormData] = useState({
//     fy_year: "",
//     quarter: "",
//     Part: "",
//     document: null
//   });
//   const [existingDocument, setExistingDocument] = useState("");
//   const [message, setMessage] = useState("");
//   const [isError, setIsError] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [updating, setUpdating] = useState(false);
// const [partI, setPartI] = useState(null);
// const [partII, setPartII] = useState(null);

//   const navigate = useNavigate();
//   const classes = useStyle();

// useEffect(() => {
//   if (fy && quarter) {
//     fetchRecordData();
//   }
// }, [fy, quarter]);

// const fetchRecordData = async () => {
//   try {
//     setLoading(true);

//     const res = await axios.get(
//       "https://api.mfinindia.org/api/auth/rbi_data_edit",
//       { params: { fy, quarter } }
//     );

//     const records = res.data.data;

//     records.forEach(r => {
//       if (r.Part === "Part I") setPartI(r);
//       if (r.Part === "Part II") setPartII(r);
//     });

//     if (records.length > 0) {
//       setFormData({
//         fy_year: records[0].fy_year,
//         quarter: records[0].quarter,
//       });
//     }

//   } catch (e) {
//     setMessage("Data load nahi hua");
//     setIsError(true);
//   } finally {
//     setLoading(false);
//   }
// };


//   const handleInputChange = (field, value) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   const handleFileChange = (file) => {
//     setFormData(prev => ({
//       ...prev,
//       document: file
//     }));
//   };

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   if (!formData.fy_year || !formData.quarter || !formData.Part) {
//     setMessage("Please fill all required fields");
//     setIsError(true);
//     return;
//   }

//   try {
//     setUpdating(true);

//     const submitData = new FormData();
//     submitData.append("fy_year", formData.fy_year);
//     submitData.append("quarter", formData.quarter);
//     submitData.append("Part", formData.Part);

//     if (formData.document) {
//       submitData.append("document", formData.document);
//     }

//     const response = await axios.post(
//       `https://api.mfinindia.org/api/auth/rbi_data_update/${id}`,
//       submitData
//     );

//     if (response.status === 200) {
//       setMessage("Record updated successfully!");
//       setIsSuccess(true);
//       setIsError(false);

//       setTimeout(() => {
//         navigate("/rbi-data-list");
//       }, 1500);
//     }

//   } catch (err) {
//     console.error("Update error:", err);

//     const msg =
//       err.response &&
//       err.response.data &&
//       err.response.data.message
//         ? err.response.data.message
//         : "Error updating record";

//     setMessage(msg);
//     setIsError(true);
//   } finally {
//     setUpdating(false);
//   }
// };

//   const handleViewDocument = () => {
//     if (existingDocument) {
//       const fullUrl = existingDocument.startsWith('http') 
//         ? existingDocument 
//         : `https://api.mfinindia.org/public/${existingDocument}`;
//       window.open(fullUrl, '_blank');
//     }
//   };

//   if (loading) {
//     return (
//       <Box sx={{ flexGrow: 1 }} mt={10}>
//         <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '50vh' }}>
//           <CircularProgress />
//           <Typography style={{ marginLeft: '10px' }}>Loading record data...</Typography>
//         </Grid>
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ flexGrow: 1 }} mt={10}>
//       <Grid container spacing={1}>
//         <Grid xs={12} sm={12} md={12}>
//           <div role="presentation">
//             <Breadcrumb title="Edit RBI Data" icon={GrassIcon} />
//           </div>
//         </Grid>

//         <Card style={{ padding: "20px", marginTop: "30px", width: "100%" }}>
//           <CardActionArea>
//             <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
//               {message && (
//                 <div style={{ 
//                   padding: "10px", 
//                   marginBottom: "20px", 
//                   borderRadius: "4px",
//                   backgroundColor: isSuccess ? "#d4edda" : "#f8d7da",
//                   color: isSuccess ? "#155724" : "#721c24",
//                   border: `1px solid ${isSuccess ? "#c3e6cb" : "#f5c6cb"}`
//                 }}>
//                   <strong>{isSuccess ? "Success!" : "Error!"}</strong> {message}
//                 </div>
//               )}

//               <Typography variant="h6" gutterBottom style={{ color: "red", marginBottom: "20px" }}>
//                 <b>Edit RBI Data Record (ID: {id})</b>
//               </Typography>

//               <Grid container spacing={2}>
//                 <Grid xs={12} sm={6} md={4}>
//                   <label style={{ color: "red", marginBottom: "5px", display: "block" }}>
//                     <b>Financial Year *</b>
//                   </label>
//                   <input
//                     type="text"
//                     style={{ width: "100%" }}
//                     className="form-control"
//                     placeholder="e.g., FY 24-25"
//                     value={formData.fy_year}
//                     onChange={(e) => handleInputChange('fy_year', e.target.value)}
//                     required
//                   />
//                 </Grid>

//                 <Grid xs={12} sm={6} md={4}>
//                   <label style={{ color: "red", marginBottom: "5px", display: "block" }}>
//                     <b>Quarter *</b>
//                   </label>
//                   <input
//                     type="text"
//                     style={{ width: "100%" }}
//                     className="form-control"
//                     placeholder="e.g., Q1 FY 24-25"
//                     value={formData.quarter}
//                     onChange={(e) => handleInputChange('quarter', e.target.value)}
//                     required
//                   />
//                 </Grid>

//                 <Grid xs={12} sm={6} md={4}>
//                   <label style={{ color: "red", marginBottom: "5px", display: "block" }}>
//                     <b>Part *</b>
//                   </label>
//                   <select
//                     style={{ width: "100%" }}
//                     className="form-control"
//                     value={formData.Part}
//                     onChange={(e) => handleInputChange('Part', e.target.value)}
//                     required
//                   >
//                     <option value="">Select Part</option>
//                     <option value="Part I">Part I</option>
//                     <option value="Part II">Part II</option>
//                     <option value="Part III">Part III</option>
//                     <option value="Part IV">Part IV</option>
//                     <option value="Part V">Part V</option>
//                   </select>
//                 </Grid>

//                 <Grid xs={12} sm={12} md={12}>
//                   <label style={{ marginBottom: "5px", display: "block" }}>
//                     <b>Document (PDF/Excel)</b>
//                   </label>
//         {partI && (
//   <div>
//     <b>Part I (PDF)</b><br />
//     <Button
//       variant="outlined"
//       onClick={() =>
//         window.open(
//           `https://api.mfinindia.org/public/${partI.document}`,
//           "_blank"
//         )
//       }
//     >
//       View PDF
//     </Button>
//   </div>
// )}
// {partII && (
//   <div style={{ marginTop: "10px" }}>
//     <b>Part II (Excel)</b><br />
//     <Button
//       variant="outlined"
//       onClick={() => {
//         const link = document.createElement("a");
//         link.href = `https://api.mfinindia.org/public/${partII.document}`;
//         link.setAttribute("download", "");
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//       }}
//     >
//       Download Excel
//     </Button>
//   </div>
// )}


//                   <input
//                     type="file"
//                     style={{ width: "100%" }}
//                     className="form-control"
//                     accept=".pdf,.xlsx,.xls"
//                     onChange={(e) => handleFileChange(e.target.files[0])}
//                   />
//                   <small style={{ color: "#666" }}>Maximum file size: 5MB (PDF, Excel files allowed)</small>
//                 </Grid>

//                 <Grid xs={12} sm={12} md={12} style={{ marginTop: "20px" }}>
//                   <Button
//                     type="submit"
//                     variant="contained"
//                     className={classes.buttonBg}
//                     style={{ width: "150px", marginRight: "10px" }}
//                     disabled={updating}
//                   >
//                     {updating ? <CircularProgress size={24} /> : "Update Record"}
//                   </Button>
                  
//                   <Button
//                     variant="outlined"
//                     style={{ width: "150px", marginRight: "10px" }}
//                     onClick={() => navigate(-1)}
//                     disabled={updating}
//                   >
//                     Cancel
//                   </Button>

//                   <Button
//                     variant="outlined"
//                     color="secondary"
//                     style={{ width: "150px" }}
//                     onClick={() => navigate("/rbi-data-list")}
//                     disabled={updating}
//                   >
//                     Back to List
//                   </Button>
//                 </Grid>
//               </Grid>
//             </Box>
//           </CardActionArea>
//         </Card>
//       </Grid>
//     </Box>
//   );
// };

// export default RbiEditData;
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Typography,
  CircularProgress
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const RbiEditData = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);

  const fy = params.get("fy");
  const quarter = params.get("quarter");

  const [loading, setLoading] = useState(true);
  const [partI, setPartI] = useState(null);
  const [partII, setPartII] = useState(null);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://api.mfinindia.org/api/auth/rbi_data_edit",
        { params: { fy, quarter } }
      );

      res.data.data.forEach(r => {
        if (r.Part === "Part I") setPartI(r);
        if (r.Part === "Part II") setPartII(r);
      });

    } catch (e) {
      alert("Data load failed");
    } finally {
      setLoading(false);
    }
  };

const updateFile = async (record, file) => {
  const fd = new FormData();

  fd.append("fy_year", record.fy_year);   // ✅ MUST
  fd.append("quarter", record.quarter);   // ✅ MUST
  fd.append("Part", record.Part);         // ✅ MUST
  fd.append("document", file);            // ✅ file

  await axios.post(
    `https://api.mfinindia.org/api/auth/rbi_data_update/${record.id}`,
    fd,
    { headers: { "Content-Type": "multipart/form-data" } }
  );
};


const handleSave = async () => {
  try {
    setUpdating(true);

    // PART I UPDATE
    if (partI && partI.newFile) {
      await updateFile(partI, partI.newFile);
    }

    // PART II UPDATE
    if (partII && partII.newFile) {
      await updateFile(partII, partII.newFile);
    }

    alert("Updated successfully");
    navigate("/rbi-data-list");

  } catch (e) {
    alert("Update failed");
  } finally {
    setUpdating(false);
  }
};


  if (loading) return <CircularProgress />;

  return (
    <Card style={{ padding: 60 }}>
      <Typography variant="h6" color="red">
        Edit RBI Data
      </Typography>

      <Typography variant="body1" style={{ marginTop: 10 }}>
        <b>Financial Year:</b> {fy}
      </Typography>

      <Typography variant="body1">
        <b>Quarter:</b> {quarter}
      </Typography>
      {/* PART I */}
      {partI && (
        <div style={{ marginTop: 20 }}>
          <b>Part I (PDF)</b><br />
          <Button
            onClick={() =>
              window.open(
                `https://api.mfinindia.org/public/${partI.document}`,
                "_blank"
              )
            }
          >
            View PDF
          </Button>

          <input
            type="file"
            accept=".pdf"
            className="form-control mt-2"
            
            onChange={e =>
              setPartI({ ...partI, newFile: e.target.files[0] })
            }
          />
        </div>
      )}

      {/* PART II */}
      {partII && (
        <div style={{ marginTop: 20 }}>
          <b>Part II (Excel)</b><br />
          <Button
            onClick={() => {
              const a = document.createElement("a");
              a.href = `https://api.mfinindia.org/public/${partII.document}`;
              a.download = "";
              a.click();
            }}
          >
            Download Excel
          </Button>

          <input
            type="file"
            accept=".xls,.xlsx"
            className="form-control mt-2"
            onChange={e =>
              setPartII({ ...partII, newFile: e.target.files[0] })
            }
          />
        </div>
      )}

      <div style={{ marginTop: 30 }}>
        <Button
          variant="contained"
          onClick={handleSave}
          disabled={updating}
        >
          {updating ? "Updating..." : "Save Changes"}
        </Button>

        <Button
          style={{ marginLeft: 10 }}
          onClick={() => navigate(-1)}
        >
          Cancel
        </Button>
      </div>
    </Card>
  );
};

export default RbiEditData;
