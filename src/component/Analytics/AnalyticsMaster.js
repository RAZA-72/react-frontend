// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import {
//   Box,
//   Card,
//   CardContent,
//   Typography,
//   CircularProgress,
//   Grid,
//   Divider,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   Paper,
// } from "@mui/material";

// const API_URL = "https://api.mfinindia.org/api/auth/analytics/all";

// const ALLOWED_MODULES = [
//   "Microfinance Universe",
//   "MFIN Members",
//   "DRI-State",
//   "Custom Reports",
//   "Benchmark",
//   "SRO",
//   "Micrometer",
// ];

// const AnalyticsMaster = () => {
//   const [loading, setLoading] = useState(true);
//   const [data, setData] = useState(null);
//   const [error, setError] = useState("");

//   const navigate = useNavigate(); // ✅ navigation

//   useEffect(() => {
//     axios
//       .get(API_URL)
//       .then((res) => {
//         if (res.data && res.data.status) {
//           setData(res.data);
//         } else {
//           setError("Invalid response from server");
//         }
//       })
//       .catch(() => setError("Failed to load analytics"))
//       .finally(() => setLoading(false));
//   }, []);

//   if (loading) {
//     return (
//       <Box sx={{ mt: 12, textAlign: "center" }}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (error || !data) {
//     return (
//       <Box sx={{ mt: 12, textAlign: "center" }}>
//         <Typography color="error">{error}</Typography>
//       </Box>
//     );
//   }

//   const { kpi, modules } = data;

//   /* ✅ ONLY REQUIRED MODULES */
//   const filteredModules = modules.filter((m) =>
//     ALLOWED_MODULES.some((name) =>
//       m.module.toLowerCase().includes(name.toLowerCase())
//     )
//   );

//   /* user list */
//   const userList = filteredModules.map((m, i) => ({
//     id: i + 1,
//     module: m.module,
//     users: m.users,
//     avgTime: Math.floor(m.avg_time / 60) + " min",
//   }));

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         p: 5,
//         background:
//           "linear-gradient(180deg, #f4f6fb 0%, #eef1f7 100%)",
//       }}
//     >
//       {/* ================= KPI STRIP ================= */}
//       <Grid container spacing={4} mb={7}>
//         {[
//           { label: "TOTAL USERS", value: kpi.total_users },
//           { label: "TOTAL SESSIONS", value: kpi.total_sessions },
//           {
//             label: "AVG SESSION TIME",
//             value:
//               Math.floor(kpi.avg_session_time_seconds / 60) + " min",
//           },
//           { label: "ACTIVE MODULES", value: filteredModules.length },
//         ].map((item, i) => (
//           <Grid item xs={12} sm={6} md={3} key={i}>
//             <Card
//               sx={{
//                 borderRadius: 4,
//                 background: "rgba(255,255,255,0.9)",
//                 boxShadow: "0 14px 40px rgba(0,0,0,0.08)",
//               }}
//             >
//               <CardContent>
//                 <Typography
//                   variant="caption"
//                   sx={{ letterSpacing: 2, color: "text.secondary" }}
//                 >
//                   {item.label}
//                 </Typography>
//                 <Typography variant="h3" fontWeight="bold" sx={{ mt: 1 }}>
//                   {item.value}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       {/* ================= MODULE PERFORMANCE ================= */}
//       <Box sx={{ mb: 3 }}>
//         <Typography variant="h4" fontWeight="bold">
//           Module Performance
//         </Typography>
//         <Typography color="text.secondary">
//           Engagement and activity by module
//         </Typography>
//       </Box>

//       <Divider sx={{ mb: 5 }} />

//       <Grid container spacing={4} mb={8}>
//         {filteredModules.map((m, i) => (
//           <Grid item xs={12} sm={6} md={4} key={i}>
//             <Card
//               onClick={() =>
//                 navigate(`/ModuleAnalyticsDetail/${encodeURIComponent(m.module)}`)
//               }
//               sx={{
//                 cursor: "pointer",
//                 height: "100%",
//                 borderRadius: 4,
//                 background:
//                   "linear-gradient(180deg, #ffffff 0%, #f5f7fb 100%)",
//                 transition: "0.35s",
//                 "&:hover": {
//                   transform: "translateY(-10px)",
//                   boxShadow: "0 24px 55px rgba(0,0,0,0.14)",
//                 },
//               }}
//             >
//               <CardContent>
//                 <Typography
//                   variant="overline"
//                   sx={{ letterSpacing: 2, color: "primary.main" }}
//                 >
//                   MODULE
//                 </Typography>

//                 <Typography
//                   variant="h5"
//                   fontWeight="bold"
//                   sx={{ textTransform: "uppercase", mb: 2 }}
//                 >
//                   {m.module}
//                 </Typography>

//                 <Divider sx={{ mb: 2 }} />

//                 <Typography variant="body2" sx={{ mb: 1 }}>
//                   👥 Users: <b>{m.users}</b>
//                 </Typography>
//                 <Typography variant="body2" sx={{ mb: 1 }}>
//                   📊 Hits: <b>{m.hits}</b>
//                 </Typography>
//                 <Typography variant="body2">
//                   ⏱ Avg Time:{" "}
//                   <b>{Math.floor(m.avg_time / 60)} min</b>
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       {/* ================= USER LIST ================= */}
//       <Box sx={{ mb: 3 }}>
//         <Typography variant="h4" fontWeight="bold">
//           User List Overview
//         </Typography>
//         <Typography color="text.secondary">
//           Users grouped by analytics modules
//         </Typography>
//       </Box>

//       <Paper
//         sx={{
//           borderRadius: 4,
//           overflow: "hidden",
//           boxShadow: "0 18px 45px rgba(0,0,0,0.12)",
//         }}
//       >
//         <Table>
//           <TableHead>
//             <TableRow sx={{ background: "#f3f4f6" }}>
//               <TableCell><b>ID</b></TableCell>
//               <TableCell><b>Module</b></TableCell>
//               <TableCell><b>Total Users</b></TableCell>
//               <TableCell><b>Avg Time</b></TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {userList.map((u) => (
//               <TableRow key={u.id} hover>
//                 <TableCell>{u.id}</TableCell>
//                 <TableCell>{u.module.toUpperCase()}</TableCell>
//                 <TableCell>{u.users}</TableCell>
//                 <TableCell>{u.avgTime}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </Paper>
//     </Box>
//   );
// };

// export default AnalyticsMaster;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import {
//   Box,
//   Card,
//   CardContent,
//   Typography,
//   CircularProgress,
//   Grid,
//   Button,
//   TextField,
// } from "@mui/material";
// import {
//   Public as PublicIcon,
//   People as PeopleIcon,
//   TrendingUp as TrendingUpIcon,
//   Assessment as AssessmentIcon,
//   BarChart as BarChartIcon,
//   Business as BusinessIcon,
//   Description as DescriptionIcon,
// } from "@mui/icons-material";

// const API_URL = "https://api.mfinindia.org/api/auth/analytics/all";

// // Only these modules will be displayed
// const ALLOWED_MODULES = [
//   { name: "Microfinance Universe", displayName: "Universe", icon: PublicIcon },
//   { name: "MFIN Members", displayName: "MFIN Members", icon: PeopleIcon },
//   { name: "DRI-State", displayName: "DRI – State", icon: BarChartIcon },
//   { name: "Custom Reports", displayName: "Custom Report", icon: AssessmentIcon },
//   { name: "Benchmark", displayName: "Benchmark", icon: TrendingUpIcon },
//   { name: "SRO", displayName: "SRO", icon: BusinessIcon },
//   { name: "Micrometer", displayName: "Micrometer", icon: DescriptionIcon },
// ];

// const AnalyticsMaster = () => {
//   const [loading, setLoading] = useState(true);
//   const [data, setData] = useState(null);
//   const [error, setError] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get(API_URL)
//       .then((res) => {
//         if (res.data && res.data.status) {
//           setData(res.data);
//         } else {
//           setError("Invalid response from server");
//         }
//       })
//       .catch(() => setError("Failed to load analytics"))
//       .finally(() => setLoading(false));
//   }, []);

//   if (loading) {
//     return (
//       <Box sx={{ mt: 12, textAlign: "center" }}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (error || !data) {
//     return (
//       <Box sx={{ mt: 12, textAlign: "center" }}>
//         <Typography color="error">{error}</Typography>
//       </Box>
//     );
//   }

//   const kpi = data.kpi;
//   const modules = data.modules;

//   // Filter only allowed modules
//   const filteredModules = ALLOWED_MODULES.map((allowedModule) => {
//     const moduleData = modules.find((m) =>
//       m.module.toLowerCase().includes(allowedModule.name.toLowerCase())
//     );
    
//     const users = moduleData ? moduleData.users : 0;
//     const hits = moduleData ? moduleData.hits : 0;
//     const avg_time = moduleData ? moduleData.avg_time : 0;
//     const downloads = moduleData ? moduleData.downloads : 0;
    
//     return {
//       name: allowedModule.name,
//       displayName: allowedModule.displayName,
//       icon: allowedModule.icon,
//       users: users,
//       hits: hits,
//       avg_time: avg_time,
//       downloads: downloads,
//     };
//   });

//   // Find top module
//   const topModule = filteredModules.reduce((prev, current) => {
//     return current.users > prev.users ? current : prev;
//   });

//   // Calculate avg session time in minutes and seconds
//   const avgSessionMinutes = Math.floor(kpi.avg_session_time_seconds / 60);
//   const avgSessionSeconds = kpi.avg_session_time_seconds % 60;

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         background: "#f5f5f5",
//         p: 4,
//       }}
//     >
//       {/* HEADER */}
//       <Box sx={{ textAlign: "center", mb: 4 }}>
//         <Typography
//           variant="h3"
//           fontWeight="bold"
//           sx={{ color: "#2c3e50", mb: 1 }}
//         >
//           Analytics Control Center
//         </Typography>
//         <Typography variant="body1" color="text.secondary">
//           Member usage analytics across core modules
//         </Typography>
//       </Box>

//       {/* TOP STATS BAR */}
//       <Box
//         sx={{
//           background: "linear-gradient(135deg, #1e88e5 0%, #1565c0 100%)",
//           borderRadius: 2,
//           p: 3,
//           mb: 4,
//           boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
//         }}
//       >
//         <Grid container spacing={3} alignItems="center">
//           <Grid item xs={12} md={4}>
//             <Typography
//               variant="h6"
//               sx={{ color: "white", fontWeight: 500 }}
//             >
//               Active Members: <strong>{kpi.total_users}</strong>
//             </Typography>
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <Typography
//               variant="h6"
//               sx={{ color: "white", fontWeight: 500 }}
//             >
//               Avg Session: <strong>{avgSessionMinutes}m {avgSessionSeconds}s</strong>
//             </Typography>
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <Typography
//               variant="h6"
//               sx={{ color: "white", fontWeight: 500 }}
//             >
//               Top Module: <strong>{topModule.displayName}</strong>
//             </Typography>
//           </Grid>
//         </Grid>
//       </Box>

//       {/* DATE FILTERS */}
//       <Box sx={{ mb: 4 }}>
//         <Grid container spacing={2} alignItems="center">
//           <Grid item xs={12} md={4}>
//             <TextField
//               fullWidth
//               type="date"
//               label="Start Date"
//               value={startDate}
//               onChange={(e) => setStartDate(e.target.value)}
//               InputLabelProps={{ shrink: true }}
//               variant="outlined"
//             />
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <TextField
//               fullWidth
//               type="date"
//               label="End Date"
//               value={endDate}
//               onChange={(e) => setEndDate(e.target.value)}
//               InputLabelProps={{ shrink: true }}
//               variant="outlined"
//             />
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <Button
//               fullWidth
//               variant="contained"
//               size="large"
//               sx={{
//                 background: "linear-gradient(135deg, #1e88e5 0%, #1565c0 100%)",
//                 py: 1.8,
//               }}
//               onClick={() => {
//                 console.log("Filter applied:", { startDate, endDate });
//               }}
//             >
//               Apply Filter
//             </Button>
//           </Grid>
//         </Grid>
//       </Box>

//       {/* MODULE CARDS */}
//       <Grid container spacing={3}>
//         {filteredModules.map((module, index) => {
//           const IconComponent = module.icon;
          
//           return (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Card
//                 sx={{
//                   borderRadius: 3,
//                   boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//                   transition: "all 0.3s ease",
//                   "&:hover": {
//                     boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
//                     transform: "translateY(-4px)",
//                   },
//                 }}
//               >
//                 <CardContent sx={{ textAlign: "center", py: 4 }}>
//                   {/* Icon */}
//                   <Box
//                     sx={{
//                       display: "flex",
//                       justifyContent: "center",
//                       mb: 2,
//                     }}
//                   >
//                     <IconComponent sx={{ fontSize: 48, color: "#1e88e5" }} />
//                   </Box>

//                   {/* Module Name */}
//                   <Typography
//                     variant="h5"
//                     fontWeight="bold"
//                     sx={{ mb: 3, color: "#2c3e50" }}
//                   >
//                     {module.displayName}
//                   </Typography>

//                   {/* Stats */}
//                   <Box sx={{ mb: 3, textAlign: "left" }}>
//                     <Typography variant="body2" sx={{ mb: 1, color: "#7f8c8d" }}>
//                       <PeopleIcon sx={{ fontSize: 16, mr: 1, verticalAlign: "middle" }} />
//                       Users: <strong>{module.users}</strong>
//                     </Typography>
//                     <Typography variant="body2" sx={{ color: "#7f8c8d" }}>
//                       <span style={{ marginRight: 8 }}>⏱</span>
//                       Avg Time: <strong>{Math.floor(module.avg_time / 60)}m</strong>
//                     </Typography>
//                   </Box>

//                   {/* View Analytics Button */}
//                   <Button
//                     fullWidth
//                     variant="contained"
//                     sx={{
//                       background: "linear-gradient(135deg, #2196f3 0%, #1976d2 100%)",
//                       textTransform: "none",
//                       fontWeight: 600,
//                       py: 1.2,
//                       borderRadius: 2,
//                       "&:hover": {
//                         background: "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
//                       },
//                     }}
//                     onClick={() => {
//                       navigate(
//                         "/ModuleAnalyticsDetail/" + encodeURIComponent(module.name),
//                         {
//                           state: {
//                             moduleName: module.displayName,
//                             startDate: startDate,
//                             endDate: endDate,
//                           },
//                         }
//                       );
//                     }}
//                   >
//                     VIEW ANALYTICS
//                   </Button>
//                 </CardContent>
//               </Card>
//             </Grid>
//           );
//         })}
//       </Grid>
//     </Box>
//   );
// };

// export default AnalyticsMaster;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import {
//   Box,
//   Card,
//   CardContent,
//   Typography,
//   CircularProgress,
//   Grid,
//   Button,
//   TextField,
// } from "@mui/material";

// import {
//   Public as PublicIcon,
//   People as PeopleIcon,
//   TrendingUp as TrendingUpIcon,
//   Assessment as AssessmentIcon,
//   BarChart as BarChartIcon,
//   Business as BusinessIcon,
//   Description as DescriptionIcon,
// } from "@mui/icons-material";

// const API_URL = "https://api.mfinindia.org/api/auth/analytics/all";

// /* =========================
//    MODULE NORMALIZATION
// ========================= */
// const MODULE_KEY_MAP = {
//   "microfinance universe": "Microfinance Universe",
//   "mfin_members": "MFIN Members",
//   "custom_report": "Custom Report",
//   "benchmarks": "Benchmark",
//   "sro": "SRO",
//   "dri-state": "DRI – State",
//   "publications": "Publications",
// };

// /* =========================
//    UI MODULE ORDER (DESIGN)
// ========================= */
// const ALLOWED_MODULES = [
//   { key: "Microfinance Universe", displayName: "Universe", icon: PublicIcon },
//   { key: "MFIN Members", displayName: "MFIN Members", icon: PeopleIcon },
//   { key: "Benchmark", displayName: "Benchmark", icon: TrendingUpIcon },
//   { key: "Custom Report", displayName: "Custom Report", icon: AssessmentIcon },
//   { key: "DRI – State", displayName: "DRI – State", icon: BarChartIcon },
//   { key: "SRO", displayName: "SRO", icon: BusinessIcon },
//   { key: "Publications", displayName: "Publications", icon: DescriptionIcon },
// ];

// const AnalyticsMaster = () => {
//   const [loading, setLoading] = useState(true);
//   const [data, setData] = useState(null);
//   const [error, setError] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   const navigate = useNavigate();

//   /* =========================
//      FETCH DATA
//   ========================= */
//   useEffect(function () {
//     axios
//       .get(API_URL)
//       .then(function (res) {
//         if (res.data && res.data.status === true) {
//           setData(res.data);
//         } else {
//           setError("Invalid response from server");
//         }
//       })
//       .catch(function () {
//         setError("Failed to load analytics");
//       })
//       .finally(function () {
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <Box sx={{ mt: 12, textAlign: "center" }}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (error || !data) {
//     return (
//       <Box sx={{ mt: 12, textAlign: "center" }}>
//         <Typography color="error">{error}</Typography>
//       </Box>
//     );
//   }

//   /* =========================
//      KPI DATA
//   ========================= */
//   var kpi = data.kpi || {};
//   var modules = data.modules || [];

//   /* =========================
//      NORMALIZE MODULE DATA
//      (🔥 FIXED LOGIC)
//   ========================= */
//   var normalizedModules = modules.map(function (m) {
//     var rawKey = String(m.module || "").toLowerCase();
//     var normalizedKey = MODULE_KEY_MAP[rawKey] || m.module;

//     var hits = Number(m.hits || 0);
//     var totalTime = Number(m.total_time || 0);
//     var users = Number(m.users || 0);

//     // 🔥 Correct Avg Time (matches design)
//     var avgTimeMinutes = 0;
//     if (hits > 0) {
//       avgTimeMinutes = Math.round((totalTime / hits) / 60);
//     }

//     return {
//       key: normalizedKey,
//       users: users,
//       hits: hits,
//       avg_time: avgTimeMinutes,
//     };
//   });

//   /* =========================
//      BUILD UI MODULE CARDS
//   ========================= */
//   var filteredModules = ALLOWED_MODULES.map(function (allowed) {
//     var found = null;

//     for (var i = 0; i < normalizedModules.length; i++) {
//       if (normalizedModules[i].key === allowed.key) {
//         found = normalizedModules[i];
//         break;
//       }
//     }

//     return {
//       key: allowed.key,
//       displayName: allowed.displayName,
//       icon: allowed.icon,
//       users: found ? found.users : 0,
//       avg_time: found ? found.avg_time : 0,
//       hits: found ? found.hits : 0,
//     };
//   });

//   /* =========================
//      TOP MODULE (BY HITS)
//   ========================= */
//   var topModule = filteredModules.reduce(function (prev, curr) {
//     return curr.hits > prev.hits ? curr : prev;
//   });

//   var avgSessionMinutes = Math.floor(
//     (kpi.avg_session_time_seconds || 0) / 60
//   );
//   var avgSessionSeconds = (kpi.avg_session_time_seconds || 0) % 60;

//   /* =========================
//      RENDER UI
//   ========================= */
//   return (
//     <Box sx={{ minHeight: "100vh", background: "#f5f5f5", p: 4,  marginTop:'40px'}}>
//       {/* HEADER */}
//       <Box sx={{ textAlign: "center", mb: 4 }}>
//         <Typography variant="h3" fontWeight="bold">
//           Analytics Controls
//         </Typography>
//         <Typography color="text.secondary">
//           Member usage analytics across core modules
//         </Typography>
//       </Box>

//       {/* KPI BAR */}
//       <Box
//         sx={{
//           background: "linear-gradient(135deg,#1e88e5,#1565c0)",
//           borderRadius: 2,
//           p: 3,
//           mb: 4,
//         }}
//       >
//         <Grid container spacing={3}>
//           <Grid item xs={12} md={4}>
//             <Typography color="white">
//               Active Members: <b>{kpi.total_users || 0}</b>
//             </Typography>
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <Typography color="white">
//               Avg Session:{" "}
//               <b>
//                 {avgSessionMinutes}m {avgSessionSeconds}s
//               </b>
//             </Typography>
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <Typography color="white">
//               Top Module: <b>{topModule.displayName}</b>
//             </Typography>
//           </Grid>
//         </Grid>
//       </Box>

//       {/* MODULE CARDS */}
//       <Grid container spacing={3}>
//         {filteredModules.map(function (module, index) {
//           var Icon = module.icon;

//           return (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Card sx={{ borderRadius: 3 }}>
//                 <CardContent sx={{ textAlign: "center", py: 4 }}>
//                   <Icon sx={{ fontSize: 48, color: "#1e88e5" }} />

//                   <Typography variant="h5" fontWeight="bold" sx={{ mt: 2 }}>
//                     {module.displayName}
//                   </Typography>

//                   <Typography sx={{ mt: 2 }}>
//                     Users: <b>{module.users}</b>
//                   </Typography>
//                   <Typography>
//                     Avg Time: <b>{module.avg_time}m</b>
//                   </Typography>

//                   <Button
//                     fullWidth
//                     sx={{ mt: 3 }}
//                     variant="contained"
//                     onClick={function () {
//                       navigate(
//                         "/ModuleAnalyticsDetail/" +
//                           encodeURIComponent(module.key),
//                         {
//                           state: {
//                             moduleName: module.displayName,
//                             startDate: startDate,
//                             endDate: endDate,
//                           },
//                         }
//                       );
//                     }}
//                   >
//                     VIEW ANALYTICS
//                   </Button>
//                 </CardContent>
//               </Card>
//             </Grid>
//           );
//         })}
//       </Grid>
//     </Box>
//   );
// };

// export default AnalyticsMaster;

  // import React, { useEffect, useState } from "react";
  // import axios from "axios";
  // import { useNavigate } from "react-router-dom";
  // import {
  //   Box,
  //   Card,
  //   CardContent,
  //   Typography,
  //   CircularProgress,
  //   Grid,
  //   Button,
  // } from "@mui/material";

  // import {
  //   Public as PublicIcon,
  //   People as PeopleIcon,
  //   TrendingUp as TrendingUpIcon,
  //   Assessment as AssessmentIcon,
  //   BarChart as BarChartIcon,
  //   Business as BusinessIcon,
  //   Description as DescriptionIcon,
  // } from "@mui/icons-material";

  // const API_URL = "https://api.mfinindia.org/api/auth/analytics/all";

  // /* =========================
  //   MODULE NORMALIZATION
  // ========================= */
  // const MODULE_KEY_MAP = {
  //   "microfinance universe": "Microfinance Universe",
  //   "mfin_members": "MFIN Members",
  //   "custom_report": "Custom Report",
  //   "benchmarks": "Benchmark",
  //   "sro": "SRO",
  //   "dri-state": "DRI – State",
  //   "publications": "Publications",
  // };

  // /* =========================
  //   UI MODULE ORDER
  // ========================= */
  // const ALLOWED_MODULES = [
  //   { key: "Microfinance Universe", displayName: "Universe", icon: PublicIcon },
  //   { key: "MFIN Members", displayName: "MFIN Members", icon: PeopleIcon },
  //   { key: "Benchmark", displayName: "Benchmark", icon: TrendingUpIcon },
  //   { key: "Custom Report", displayName: "Custom Report", icon: AssessmentIcon },
  //   { key: "DRI – State", displayName: "DRI – State", icon: BarChartIcon },
  //   { key: "SRO", displayName: "SRO", icon: BusinessIcon },
  //   { key: "Publications", displayName: "Publications", icon: DescriptionIcon },
  // ];

  // const AnalyticsMaster = () => {
  //   const [loading, setLoading] = useState(true);
  //   const [data, setData] = useState(null);
  //   const [error, setError] = useState("");

    
  //   const navigate = useNavigate();

  //   useEffect(function () {
  //     axios
  //       .get(API_URL)
  //       .then(function (res) {
  //         if (res.data && res.data.status === true) {
  //           setData(res.data);
  //         } else {
  //           setError("Invalid response");
  //         }
  //       })
  //       .catch(function () {
  //         setError("Failed to load analytics");
  //       })
  //       .finally(function () {
  //         setLoading(false);
  //       });
  //   }, []);

  //   if (loading) {
  //     return (
  //       <Box sx={{ mt: 12, textAlign: "left" }}>
  //         <CircularProgress />
  //       </Box>
  //     );
  //   }

  //   if (error || !data) {
  //     return (
  //       <Box sx={{ mt: 12, textAlign: "left" }}>
  //         <Typography color="error">{error}</Typography>
  //       </Box>
  //     );
  //   }

  //   var kpi = data.kpi || {};
  //   var modules = data.modules || [];

  //   /* =========================
  //     KPI AGGREGATIONS
  //   ========================= */
  //   // var totalHits = 0;
  //   // var totalTime = 0;

  //   // for (var i = 0; i < modules.length; i++) {
  //   //   totalHits += Number(modules[i].hits || 0);
  //   //   totalTime += Number(modules[i].total_time || 0);
  //   // }



  // /* =========================
  //   KPI AGGREGATIONS (FIXED)
  // ========================= */

  // var totalLogins = Number(kpi.total_sessions || 0);

  // var avgTimePerSessionMinutes = Math.round(
  //   Number(kpi.avg_session_time_seconds || 0) / 60
  // );

  // var totalTimeSpentMinutes =
  //   totalLogins * avgTimePerSessionMinutes;
  //   // var totalTimeMinutes = Math.round(totalTime / 60);
  //   var totalLogins = kpi.total_sessions || 0;


  //   // var total_users  = total_users || 0;
  //   var totalUsers = Number(kpi.total_users || 0);
  //   /* =========================
  //     NORMALIZE MODULE DATA
  //   ========================= */
  //   var normalizedModules = modules.map(function (m) {
  //     var rawKey = String(m.module || "").toLowerCase();
  //     var normalizedKey = MODULE_KEY_MAP[rawKey] || m.module;

  //     var hits = Number(m.hits || 0);
  //     var totalTime = Number(m.total_time || 0);
  //     var users = Number(m.users || 0);

  //     var avgTimeMinutes = 0;
  //     if (hits > 0) {
  //       avgTimeMinutes = Math.round((totalTime / hits) / 60);
  //     }

  //     return {
  //       key: normalizedKey,
  //       users: users,
  //       hits: hits,
  //       avg_time: avgTimeMinutes,
  //     };
  //   });

  //   var filteredModules = ALLOWED_MODULES.map(function (allowed) {
  //     var found = null;

  //     for (var i = 0; i < normalizedModules.length; i++) {
  //       if (normalizedModules[i].key === allowed.key) {
  //         found = normalizedModules[i];
  //         break;
  //       }
  //     }

  //     return {
  //       key: allowed.key,
  //       displayName: allowed.displayName,
  //       icon: allowed.icon,
  //       users: found ? found.users : 0,
  //       avg_time: found ? found.avg_time : 0,
  //       hits: found ? found.hits : 0,
  //     };
  //   });

  //   var topModule = filteredModules.reduce(function (prev, curr) {
  //     return curr.hits > prev.hits ? curr : prev;
  //   });

  //   /* =========================
  //     RENDER
  //   ========================= */
  //   return (
  //     <Box sx={{ minHeight: "100vh", background: "#f5f5f5", p: 4, mt: "40px" }}>
  //       {/* HEADER */}
  //       <Box sx={{ textAlign: "center", mb: 4 }}>
  //         <Typography variant="h3" fontWeight="bold">
  //           Analytics Control Center
  //         </Typography>
          
  //       </Box>

  //       {/* KPI BAR (UPDATED) */}
  //       <Box
  //         sx={{
  //           background: "linear-gradient(135deg,#1e88e5,#1565c0)",
  //           borderRadius: 2,
  //           p: 3,
  //           mb: 4,
  //           color: "white",
  //         }}
  //       >
  //       <Grid container spacing={3}>
  //   <Grid item xs={12} md={3}>
  //     <Typography>
  //       Total Hits: <b>{totalLogins}</b>
  //     </Typography>
  //   </Grid>

  //   <Grid item xs={12} md={3}>
  //     <Typography>
  //       Avg Time / Session: <b>{avgTimePerSessionMinutes}m</b>
  //     </Typography>
  //   </Grid>

  //   <Grid item xs={12} md={3}>
  //     <Typography>
  //       Total Time Spent: <b>{totalTimeSpentMinutes}m</b>
  //     </Typography>
  //   </Grid>

  //   <Grid item xs={12} md={3}>
  //     <Typography>
  //       Total Logins: <b>{totalUsers}</b>
  //     </Typography>
  //   </Grid>
  // </Grid>
  //       </Box>

  //       {/* MODULE CARDS (UNCHANGED) */}
  //       <Grid container spacing={3}>
  //         {filteredModules.map(function (module, index) {
  //           var Icon = module.icon;

  //           return (
  //             <Grid item xs={12} sm={6} md={4} key={index}>
  //               <Card sx={{ borderRadius: 3 }}>
  //                 <CardContent sx={{ textAlign: "center", py: 4 }}>
  //                   <Icon sx={{ fontSize: 48, color: "#1e88e5" }} />

  //                   <Typography variant="h5" fontWeight="bold" sx={{ mt: 2 }}>
  //                     {module.displayName}
  //                   </Typography>

  //                   <Typography sx={{ mt: 2 }}>
  //                     Users: <b>{module.users}</b>
  //                   </Typography>
  //                   <Typography>
  //                     Avg Time: <b>{module.avg_time}m</b>
  //                   </Typography>

  //                   <Button
  //                     fullWidth
  //                     sx={{ mt: 3 }}
  //                     variant="contained"
  //                     onClick={function () {
  //                       navigate(
  //                         "/ModuleAnalyticsDetail/" +
  //                           encodeURIComponent(module.key)
  //                       );
  //                     }}
  //                   >
  //                     VIEW ANALYTICS
  //                   </Button>
  //                 </CardContent>
  //               </Card>
  //             </Grid>
  //           );
  //         })}
  //       </Grid>
  //     </Box>
  //   );
  // };

  // export default AnalyticsMaster;


  import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Grid,
  Button,
} from "@mui/material";

import {
  Public as PublicIcon,
  People as PeopleIcon,
  TrendingUp as TrendingUpIcon,
  Assessment as AssessmentIcon,
  BarChart as BarChartIcon,
  Business as BusinessIcon,
  Description as DescriptionIcon,
} from "@mui/icons-material";

const API_URL = "https://api.mfinindia.org/api/auth/analytics/all";

/* =========================
   MODULE NORMALIZATION
========================= */
const MODULE_KEY_MAP = {
  "microfinance universe": "Microfinance Universe",
  "mfin_members": "MFIN Members",
  "custom_report": "Custom Report",
  "benchmarks": "Benchmark",
  "sro": "SRO",
  "dri-state": "DRI – State",
  "publications": "Publications",
};

/* =========================
   UI MODULE ORDER
========================= */
const ALLOWED_MODULES = [
  { key: "Microfinance Universe", displayName: "Universe", icon: PublicIcon },
  { key: "MFIN Members", displayName: "MFIN Members", icon: PeopleIcon },
  { key: "Benchmark", displayName: "Benchmark", icon: TrendingUpIcon },
  { key: "Custom Report", displayName: "Custom Report", icon: AssessmentIcon },
  { key: "DRI – State", displayName: "DRI – State", icon: BarChartIcon },
  { key: "SRO", displayName: "SRO", icon: BusinessIcon },
  { key: "Publications", displayName: "Publications", icon: DescriptionIcon },
];

const AnalyticsMaster = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  
  const navigate = useNavigate();

  useEffect(function () {
    axios
      .get(API_URL)
      .then(function (res) {
        if (res.data && res.data.status === true) {
          setData(res.data);
        } else {
          setError("Invalid response");
        }
      })
      .catch(function () {
        setError("Failed to load analytics");
      })
      .finally(function () {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box sx={{ mt: 12, textAlign: "left" }}>
        <CircularProgress sx={{ color: "#2B60AD" }} />
      </Box>
    );
  }

  if (error || !data) {
    return (
      <Box sx={{ mt: 12, textAlign: "left" }}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  var kpi = data.kpi || {};
  var modules = data.modules || [];

  /* =========================
     KPI AGGREGATIONS
  ========================= */
  // var totalHits = 0;
  // var totalTime = 0;

  // for (var i = 0; i < modules.length; i++) {
  //   totalHits += Number(modules[i].hits || 0);
  //   totalTime += Number(modules[i].total_time || 0);
  // }



/* =========================
   KPI AGGREGATIONS (FIXED)
========================= */

var totalLogins = Number(kpi.total_sessions || 0);

var avgTimePerSessionMinutes = Math.round(
  Number(kpi.avg_session_time_seconds || 0) / 60
);

var totalTimeSpentMinutes =
  totalLogins * avgTimePerSessionMinutes;
  // var totalTimeMinutes = Math.round(totalTime / 60);
  var totalLogins = kpi.total_sessions || 0;


  // var total_users  = total_users || 0;
  var totalUsers = Number(kpi.total_users || 0);
  /* =========================
     NORMALIZE MODULE DATA
  ========================= */
  var normalizedModules = modules.map(function (m) {
    var rawKey = String(m.module || "").toLowerCase();
    var normalizedKey = MODULE_KEY_MAP[rawKey] || m.module;

    var hits = Number(m.hits || 0);
    var totalTime = Number(m.total_time || 0);
    var users = Number(m.users || 0);

    var avgTimeMinutes = 0;
    if (hits > 0) {
      avgTimeMinutes = Math.round((totalTime / hits) / 60);
    }

    return {
      key: normalizedKey,
      users: users,
      hits: hits,
      avg_time: avgTimeMinutes,
    };
  });

  var filteredModules = ALLOWED_MODULES.map(function (allowed) {
    var found = null;

    for (var i = 0; i < normalizedModules.length; i++) {
      if (normalizedModules[i].key === allowed.key) {
        found = normalizedModules[i];
        break;
      }
    }

    return {
      key: allowed.key,
      displayName: allowed.displayName,
      icon: allowed.icon,
      users: found ? found.users : 0,
      avg_time: found ? found.avg_time : 0,
      hits: found ? found.hits : 0,
    };
  });

  var topModule = filteredModules.reduce(function (prev, curr) {
    return curr.hits > prev.hits ? curr : prev;
  });

  /* =========================
     RENDER
  ========================= */
  return (
    <Box sx={{ minHeight: "100vh", background: "#f5f5f5", p: 4, mt: "40px" }}>
      {/* HEADER */}
      <Box sx={{ textAlign: "left", mb: 4 }}>
        <Typography variant="h4" fontWeight="bold" >
          Analytics Module
        </Typography>
        
      </Box>

      {/* KPI BAR (UPDATED WITH NEW COLORS) */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #2B60AD, #39B1AC)",
          borderRadius: 2,
          p: 3,
          mb: 4,
          color: "white",
        }}
      >
       <Grid container spacing={3}>
  <Grid item xs={12} md={3}>
    <Typography>
      Total Hits: <b>{totalLogins}</b>
    </Typography>
  </Grid>

  <Grid item xs={12} md={3}>
    <Typography>
      Avg Time / Session: <b>{avgTimePerSessionMinutes}m</b>
    </Typography>
  </Grid>

  <Grid item xs={12} md={3}>
    <Typography>
      Total Time Spent: <b>{totalTimeSpentMinutes}m</b>
    </Typography>
  </Grid>

  <Grid item xs={12} md={3}>
    <Typography>
      Total Logins: <b>{totalUsers}</b>
    </Typography>
  </Grid>
</Grid>
      </Box>

      {/* MODULE CARDS (UPDATED WITH NEW COLORS) */}
      <Grid container spacing={3}>
        {filteredModules.map(function (module, index) {
          var Icon = module.icon;

          return (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ borderRadius: 3 }}>
                <CardContent sx={{ textAlign: "center", py: 4 }}>
                  <Icon sx={{ fontSize: 48, color: "#2B60AD" }} />

                  <Typography variant="h5" fontWeight="bold" sx={{ mt: 2 }}>
                    {module.displayName}
                  </Typography>

                  <Typography sx={{ mt: 2 }}>
                    Users: <b>{module.users}</b>
                  </Typography>
                  <Typography>
                    Avg Time: <b>{module.avg_time}m</b>
                  </Typography>

                  <Button
                    fullWidth
                    sx={{ 
                      mt: 3,
                      background: "linear-gradient(135deg, #2B60AD, #39B1AC)",
                      '&:hover': {
                        background: "linear-gradient(135deg, #234d8f, #2d8e8a)",
                      }
                    }}
                    variant="contained"
                    onClick={function () {
                      navigate(
                        "/ModuleAnalyticsDetail/" +
                          encodeURIComponent(module.key)
                      );
                    }}
                  >
                    VIEW ANALYTICS
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default AnalyticsMaster;