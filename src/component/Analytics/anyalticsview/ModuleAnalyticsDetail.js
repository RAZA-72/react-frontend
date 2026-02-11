// import * as React from "react";
// import axios from "axios";
// import {
//   Box,
//   Card,
//   CardContent,
//   Typography,
//   Tabs,
//   Tab,
//   TextField,
//   CircularProgress,
// } from "@mui/material";
// import Grid from "@mui/material/Unstable_Grid2";
// import {
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   AreaChart,
//   Area,
// } from "recharts";

// const API_URL = "https://api.mfinindia.org/api/auth/analytics/all";

// const ModuleAnalyticsDetail = () => {
//   const [tab, setTab] = React.useState(0);
//   const [loading, setLoading] = React.useState(true);
//   const [data, setData] = React.useState(null);

//   React.useEffect(() => {
//     axios
//       .get(API_URL)
//       .then((res) => {
//         if (res.data.status) {
//           setData(res.data);
//         }
//       })
//       .catch((err) => console.error("Analytics API error", err))
//       .finally(() => setLoading(false));
//   }, []);

//   if (loading) {
//     return (
//       <Box sx={{ mt: "120px", textAlign: "center" }}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   const { kpi, modules, sub_modules, users } = data;

//   return (
//     <Box sx={{ p: 4, mt: "90px" }}>
//       {/* ================= HEADER ================= */}
//       <Typography variant="h4" fontWeight="bold">
//         Analytics Dashboard
//       </Typography>
//       <Typography variant="body2" color="text.secondary" mb={3}>
//         Real-time system usage & user activity
//       </Typography>

//       {/* ================= KPI CARDS ================= */}
//       <Grid container spacing={3} mb={4}>
//         <Grid xs={12} md={4}>
//           <Card>
//             <CardContent>
//               <Typography color="text.secondary">Total Users</Typography>
//               <Typography variant="h4" fontWeight="bold">
//                 {kpi.total_users}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>

//         <Grid xs={12} md={4}>
//           <Card>
//             <CardContent>
//               <Typography color="text.secondary">Total Sessions</Typography>
//               <Typography variant="h4" fontWeight="bold">
//                 {kpi.total_sessions}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>

//         <Grid xs={12} md={4}>
//           <Card>
//             <CardContent>
//               <Typography color="text.secondary">
//                 Avg Session Time
//               </Typography>
//               <Typography variant="h4" fontWeight="bold">
//                 {Math.floor(kpi.avg_session_time_seconds / 60)}m{" "}
//                 {kpi.avg_session_time_seconds % 60}s
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>

//       {/* ================= TABS ================= */}
//       <Tabs value={tab} onChange={(e, v) => setTab(v)} sx={{ mb: 3 }}>
//         <Tab label="Module Usage" />
//         <Tab label="Sub Modules" />
//         <Tab label="Users" />
//       </Tabs>

//       {/* ================= MODULE USAGE CHART ================= */}
//       {tab === 0 && (
//         <Card>
//           <CardContent>
//             <Typography fontWeight="bold" mb={2}>
//               Module Usage
//             </Typography>

//             <Box sx={{ height: 320 }}>
//               <ResponsiveContainer width="100%" height="100%">
//                 <AreaChart data={modules}>
//                   <defs>
//                     <linearGradient id="mod" x1="0" y1="0" x2="0" y2="1">
//                       <stop offset="5%" stopColor="#1976d2" stopOpacity={0.8} />
//                       <stop offset="95%" stopColor="#1976d2" stopOpacity={0} />
//                     </linearGradient>
//                   </defs>
//                   <XAxis dataKey="module" />
//                   <YAxis />
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <Tooltip />
//                   <Area
//                     type="monotone"
//                     dataKey="hits"
//                     stroke="#1976d2"
//                     fill="url(#mod)"
//                   />
//                 </AreaChart>
//               </ResponsiveContainer>
//             </Box>
//           </CardContent>
//         </Card>
//       )}

//       {/* ================= SUB MODULE LISTING ================= */}
//       {tab === 1 && (
//         <Card>
//           <CardContent>
//             <Typography fontWeight="bold" mb={2}>
//               Sub-Module Usage
//             </Typography>

//             <Box sx={{ overflowX: "auto" }}>
//               <table width="100%" style={{ borderCollapse: "collapse" }}>
//                 <thead>
//                   <tr style={{ background: "#f5f5f5" }}>
//                     <th align="left">Module</th>
//                     <th align="left">Sub Module</th>
//                     <th align="center">Hits</th>
//                     <th align="center">Total Time (min)</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {sub_modules.map((s, i) => (
//                     <tr key={i} style={{ borderBottom: "1px solid #eee" }}>
//                       <td>{s.module.toUpperCase()}</td>
//                       <td>{s.sub_module}</td>
//                       <td align="center">{s.hits}</td>
//                       <td align="center">
//                         {Math.floor(s.total_time / 60)}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </Box>
//           </CardContent>
//         </Card>
//       )}

//       {/* ================= USERS LISTING ================= */}
//       {tab === 2 && (
//         <Card>
//           <CardContent>
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 mb: 2,
//               }}
//             >
//               <Typography fontWeight="bold">
//                 User Activity
//               </Typography>
//               <TextField size="small" placeholder="Search email" />
//             </Box>

//             <Box sx={{ overflowX: "auto" }}>
//               <table width="100%" style={{ borderCollapse: "collapse" }}>
//                 <thead>
//                   <tr style={{ background: "#f5f5f5" }}>
//                     <th>Email</th>
//                     <th>Designation</th>
//                     <th>Actions</th>
//                     <th>Total Time (min)</th>
//                     <th>Last Active</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {users.map((u, i) => (
//                     <tr key={i} style={{ borderBottom: "1px solid #eee" }}>
//                       <td>{u.email}</td>
//                       <td align="center">{u.designation}</td>
//                       <td align="center">{u.actions}</td>
//                       <td align="center">
//                         {Math.floor(u.total_time / 60)}
//                       </td>
//                       <td align="center">
//                         {new Date(u.last_active).toLocaleString()}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </Box>
//           </CardContent>
//         </Card>
//       )}
//     </Box>
//   );
// };

// export default ModuleAnalyticsDetail;
// import * as React from "react";
// import axios from "axios";
// import {
//   Box,
//   Card,
//   CardContent,
//   Typography,
//   Tabs,
//   Tab,
//   CircularProgress,
// } from "@mui/material";
// import { useParams } from "react-router-dom";
// import {
//   ResponsiveContainer,
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
// } from "recharts";

// const API_URL = "https://api.mfinindia.org/api/auth/analytics/all";

// const ModuleAnalyticsDetail = () => {
//   var params = useParams();
//   var module = params.module;

//   var [tab, setTab] = React.useState(0);
//   var [loading, setLoading] = React.useState(true);
//   var [data, setData] = React.useState(null);

//   React.useEffect(function () {
//     setLoading(true);
//     axios
//       .get(API_URL)
//       .then(function (res) {
//         if (res.data && res.data.status) {
//           setData(res.data);
//         }
//       })
//       .finally(function () {
//         setLoading(false);
//       });
//   }, [module]);

//   if (loading) {
//     return (
//       <Box sx={{ mt: 10, textAlign: "center" }}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   var modules = (data && data.modules) || [];
//   var sub_modules = (data && data.sub_modules) || [];
//   var users = (data && data.users) || [];

//   // ✅ FILTER BY MODULE (NO ?. USED)
//   var filteredModule = modules.filter(function (m) {
//     return (
//       m.module &&
//       module &&
//       m.module.toLowerCase() === module.toLowerCase()
//     );
//   });

//   var filteredSubModules = sub_modules.filter(function (s) {
//     return (
//       s.module &&
//       module &&
//       s.module.toLowerCase() === module.toLowerCase()
//     );
//   });

//   var filteredUsers = users.filter(function (u) {
//     return (
//       u.module &&
//       module &&
//       u.module.toLowerCase() === module.toLowerCase()
//     );
//   });

//   return (
//     <Box sx={{ p: 4, mt: "90px" }}>
//       <Typography variant="h4" fontWeight="bold" mb={1}>
//         {module.toUpperCase()} Analytics
//       </Typography>

//       <Tabs value={tab} onChange={function (e, v) { setTab(v); }} sx={{ mb: 3 }}>
//         <Tab label="Overview" />
//         <Tab label="Sub Modules" />
//         <Tab label="Users" />
//       </Tabs>

//       {/* ===== OVERVIEW ===== */}
//       {tab === 0 && (
//         <Card>
//           <CardContent>
//             <Typography fontWeight="bold" mb={2}>
//               Module Usage
//             </Typography>

//             {filteredModule.length === 0 ? (
//               <Typography>No data found</Typography>
//             ) : (
//               <Box sx={{ height: 300 }}>
//                 <ResponsiveContainer width="100%" height="100%">
//                   <AreaChart data={filteredModule}>
//                     <XAxis dataKey="module" />
//                     <YAxis />
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <Tooltip />
//                     <Area
//                       type="monotone"
//                       dataKey="hits"
//                       stroke="#1976d2"
//                       fill="#1976d2"
//                     />
//                   </AreaChart>
//                 </ResponsiveContainer>
//               </Box>
//             )}
//           </CardContent>
//         </Card>
//       )}

//       {/* ===== SUB MODULES ===== */}
//     {tab === 1 && (
//   <Card>
//     <CardContent>
//       <Typography fontWeight="bold" mb={2}>
//         Sub Modules
//       </Typography>

//       {filteredSubModules.length === 0 ? (
//         <Typography>No sub-module data</Typography>
//       ) : (
//         filteredSubModules.map(function (s, i) {
//           var seconds =
//             s.total_time_seconds ||
//             s.time_spent_seconds ||
//             s.total_time ||
//             0;

//           return (
//             <Typography key={i} sx={{ mb: 1 }}>
//               • <b>{s.sub_module}</b> —{" "}
//               {Math.floor(seconds / 60)} min
//             </Typography>
//           );
//         })
//       )}
//     </CardContent>
//   </Card>
// )}


//       {/* ===== USERS ===== */}
//       {tab === 2 && (
//         <Card>
//           <CardContent>
//             <Typography fontWeight="bold" mb={2}>
//               Users
//             </Typography>

//             {filteredUsers.length === 0
//               ? "No users"
//               : filteredUsers.map(function (u, i) {
//                   return (
//                     <Typography key={i}>
//                       • {u.email} ({u.designation})
//                     </Typography>
//                   );
//                 })}
//           </CardContent>
//         </Card>
//       )}
//     </Box>
//   );
// };

// export default ModuleAnalyticsDetail;


// import * as React from "react";
// import axios from "axios";
// import {
//   Box,
//   Card,
//   CardContent,
//   Typography,
//   CircularProgress,
//   Grid,
//   Button,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
// } from "@mui/material";
// import { useParams } from "react-router-dom";
// import {
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
// } from "recharts";
// import DownloadIcon from "@mui/icons-material/Download";

// const API_URL = "https://api.mfinindia.org/api/auth/analytics/all";

// /* =========================
//    EXPORT TO CSV
// ========================= */
// function exportToCSV(filename, rows) {
//   if (!rows || rows.length === 0) return;

//   var keys = Object.keys(rows[0]);
//   var csv =
//     keys.join(",") +
//     "\n" +
//     rows
//       .map(function (row) {
//         return keys
//           .map(function (k) {
//             return '"' + String(row[k] || "").replace(/"/g, '""') + '"';
//           })
//           .join(",");
//       })
//       .join("\n");

//   var blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
//   var link = document.createElement("a");
//   link.href = URL.createObjectURL(blob);
//   link.download = filename;
//   link.click();
// }

// const ModuleAnalyticsDetail = () => {
//   var params = useParams();
//   var module = decodeURIComponent(params.module || "");

//   var [loading, setLoading] = React.useState(true);
//   var [data, setData] = React.useState(null);

//   React.useEffect(function () {
//     setLoading(true);
//     axios
//       .get(API_URL)
//       .then(function (res) {
//         if (res.data && res.data.status === true) {
//           setData(res.data);
//         }
//       })
//       .finally(function () {
//         setLoading(false);
//       });
//   }, [module]);

//   if (loading) {
//     return (
//       <Box sx={{ mt: 12, textAlign: "center" }}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   var modules = (data && data.modules) || [];
//   var subModules = (data && data.sub_modules) || [];
//   var users = (data && data.users) || [];

//   /* =========================
//      FILTER DATA BY MODULE
//   ========================= */
//   var moduleData = modules.filter(function (m) {
//     return m.module && m.module.toLowerCase() === module.toLowerCase();
//   });

//   var subModuleData = subModules.filter(function (s) {
//     return s.module && s.module.toLowerCase() === module.toLowerCase();
//   });

//   var userData = users.filter(function (u) {
//     return u.email && u.email.length > 0;
//   });

//   /* =========================
//      MONTHLY HITS (STATIC DEMO)
//      (Replace later with API)
//   ========================= */
//   var monthlyHits = [
//     { month: "Jan", hits: 22 },
//     { month: "Feb", hits: 31 },
//     { month: "Mar", hits: 45 },
//     { month: "Apr", hits: 38 },
//     { month: "May", hits: 60 },
//     { month: "Jun", hits: 48 },
//   ];

//   return (
//     <Box sx={{ minHeight: "100vh", background: "#f5f5f5", p: 4, marginTop: '40px' }}>
//       {/* ================= HEADER ================= */}
//       <Box sx={{ textAlign: "center", mb: 4 }}>
//         <Typography variant="h3" fontWeight="bold">
//           {module} Analytics
//         </Typography>
//         <Typography color="text.secondary">
//           Detailed usage insights
//         </Typography>
//       </Box>

//       {/* ================= KPI BAR ================= */}
//       <Box
//         sx={{
//           background: "linear-gradient(135deg, #1e88e5, #1565c0)",
//           borderRadius: 2,
//           p: 3,
//           mb: 4,
//           color: "white",
//         }}
//       >
//         <Typography variant="h6">
//           Total Hits:{" "}
//           <b>{moduleData.length ? moduleData[0].hits : 0}</b>
//           &nbsp;&nbsp;|&nbsp;&nbsp;
//           Users: <b>{moduleData.length ? moduleData[0].users : 0}</b>
//         </Typography>
//       </Box>

//       {/* ================= CHART ================= */}
//       <Card sx={{ borderRadius: 3, mb: 4 }}>
//         <CardContent>
//           <Typography fontWeight="bold" mb={2}>
//             Monthly Hits
//           </Typography>

//           <Box sx={{ height: 300 }}>
//             <ResponsiveContainer width="100%" height="100%">
//               <BarChart data={monthlyHits}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="month" />
//                 <YAxis />
//                 <Tooltip />
//                 <Bar dataKey="hits" fill="#1e88e5" />
//               </BarChart>
//             </ResponsiveContainer>
//           </Box>
//         </CardContent>
//       </Card>

//       {/* ================= SUB MODULE LIST ================= */}
//       <Card sx={{ borderRadius: 3, mb: 4 }}>
//         <CardContent>
//           <Box
//             sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
//           >
//             <Typography fontWeight="bold">Sub Modules</Typography>
//             <Button
//               variant="contained"
//               startIcon={<DownloadIcon />}
//               onClick={function () {
//                 exportToCSV("sub_modules.csv", subModuleData);
//               }}
//             >
//               Export Excel
//             </Button>
//           </Box>

//           <Grid container spacing={2}>
//             {subModuleData.map(function (s, i) {
//               var seconds = Number(s.total_time || 0);
//               return (
//                 <Grid item xs={12} md={4} key={i}>
//                   <Card sx={{ p: 2 }}>
//                     <Typography fontWeight="bold">
//                       {s.sub_module}
//                     </Typography>
//                     <Typography variant="body2">
//                       Hits: {s.hits}
//                     </Typography>
//                     <Typography variant="body2">
//                       Time: {Math.floor(seconds / 60)} min
//                     </Typography>
//                   </Card>
//                 </Grid>
//               );
//             })}
//           </Grid>
//         </CardContent>
//       </Card>

//       {/* ================= USER LIST ================= */}
//       <Card sx={{ borderRadius: 3 }}>
//         <CardContent>
//           <Box
//             sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
//           >
//             <Typography fontWeight="bold">Users</Typography>
//             <Button
//               variant="contained"
//               startIcon={<DownloadIcon />}
//               onClick={function () {
//                 exportToCSV("users.csv", userData);
//               }}
//             >
//               Export Excel
//             </Button>
//           </Box>

//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Email</TableCell>
//                 <TableCell>Designation</TableCell>
//                 <TableCell>Actions</TableCell>
//                 <TableCell>Total Time (min)</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {userData.map(function (u, i) {
//                 return (
//                   <TableRow key={i}>
//                     <TableCell>{u.email}</TableCell>
//                     <TableCell>{u.designation}</TableCell>
//                     <TableCell>{u.actions}</TableCell>
//                     <TableCell>
//                       {Math.floor(Number(u.total_time || 0) / 60)}
//                     </TableCell>
//                   </TableRow>
//                 );
//               })}
//             </TableBody>
//           </Table>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// };

// export default ModuleAnalyticsDetail;

// import * as React from "react";
// import axios from "axios";
// import {
//   Box,
//   Card,
//   CardContent,
//   Typography,
//   CircularProgress,
//   Grid,
//   Button,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
// } from "@mui/material";
// import { useParams } from "react-router-dom";
// import {
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
// } from "recharts";
// import DownloadIcon from "@mui/icons-material/Download";

// const API_URL = "https://api.mfinindia.org/api/auth/analytics/all";

// /* =========================
//    EXPORT TO CSV
// ========================= */
// function exportToCSV(filename, rows) {
//   if (!rows || rows.length === 0) return;

//   var keys = Object.keys(rows[0]);
//   var csv =
//     keys.join(",") +
//     "\n" +
//     rows
//       .map(function (row) {
//         return keys
//           .map(function (k) {
//             return '"' + String(row[k] || "").replace(/"/g, '""') + '"';
//           })
//           .join(",");
//       })
//       .join("\n");

//   var blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
//   var link = document.createElement("a");
//   link.href = URL.createObjectURL(blob);
//   link.download = filename;
//   link.click();
// }

// const ModuleAnalyticsDetail = () => {
//   var params = useParams();
//   var module = decodeURIComponent(params.module || "");

//   var [loading, setLoading] = React.useState(true);
//   var [data, setData] = React.useState(null);

//   React.useEffect(function () {
//     setLoading(true);
//     axios
//       .get(API_URL)
//       .then(function (res) {
//         if (res.data && res.data.status === true) {
//           setData(res.data);
//         }
//       })
//       .finally(function () {
//         setLoading(false);
//       });
//   }, [module]);

//   if (loading) {
//     return (
//       <Box sx={{ mt: 12, textAlign: "center" }}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   var modules = (data && data.modules) || [];
//   var subModules = (data && data.sub_modules) || [];
//   var users = (data && data.users) || [];

//   /* =========================
//      FILTER DATA BY MODULE
//   ========================= */
//   var moduleData = modules.filter(function (m) {
//     return m.module && m.module.toLowerCase() === module.toLowerCase();
//   });

//   var subModuleData = subModules.filter(function (s) {
//     return s.module && s.module.toLowerCase() === module.toLowerCase();
//   });

//   var userData = users.filter(function (u) {
//     return u.email && u.email.length > 0;
//   });

//   /* =========================
//      DYNAMIC CHART DATA
//   ========================= */
//   var chartData = subModuleData.map(function (s) {
//     return {
//       name: s.sub_module,
//       hits: Number(s.hits || 0),
//     };
//   });

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         background: "#f5f5f5",
//         p: 4,
//         marginTop: "40px",
//       }}
//     >
//       {/* ================= HEADER ================= */}
//       <Box sx={{ textAlign: "center", mb: 4 }}>
//         <Typography variant="h3" fontWeight="bold">
//           {module} Analytics
//         </Typography>
//         <Typography color="text.secondary">
//           Detailed usage insights
//         </Typography>
//       </Box>

//       {/* ================= KPI BAR ================= */}
//       <Box
//         sx={{
//           background: "linear-gradient(135deg, #1e88e5, #1565c0)",
//           borderRadius: 2,
//           p: 3,
//           mb: 4,
//           color: "white",
//         }}
//       >
//         <Typography variant="h6">
//           Total Hits:{" "}
//           <b>{moduleData.length ? moduleData[0].hits : 0}</b>
//           &nbsp;&nbsp;|&nbsp;&nbsp;
//           Users: <b>{moduleData.length ? moduleData[0].users : 0}</b>
//         </Typography>
//       </Box>

//       {/* ================= DYNAMIC CHART ================= */}
//       <Card sx={{ borderRadius: 3, mb: 4 }}>
//         <CardContent>
//           <Typography fontWeight="bold" mb={2}>
//             Hits Distribution by Sub-Module
//           </Typography>

//           {chartData.length === 0 ? (
//             <Typography>No data available</Typography>
//           ) : (
//             <Box sx={{ height: 300 }}>
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart data={chartData}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="name" />
//                   <YAxis />
//                   <Tooltip />
//                   <Bar dataKey="hits" fill="#1e88e5" />
//                 </BarChart>
//               </ResponsiveContainer>
//             </Box>
//           )}
//         </CardContent>
//       </Card>

//       {/* ================= SUB MODULE LIST ================= */}
//       <Card sx={{ borderRadius: 3, mb: 4 }}>
//         <CardContent>
//           <Box
//             sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
//           >
//             <Typography fontWeight="bold">Sub Modules</Typography>
//             <Button
//               variant="contained"
//               startIcon={<DownloadIcon />}
//               onClick={function () {
//                 exportToCSV("sub_modules.csv", subModuleData);
//               }}
//             >
//               Export Excel
//             </Button>
//           </Box>

//           <Grid container spacing={2}>
//             {subModuleData.map(function (s, i) {
//               var seconds = Number(s.total_time || 0);
//               return (
//                 <Grid item xs={12} md={4} key={i}>
//                   <Card sx={{ p: 2 }}>
//                     <Typography fontWeight="bold">
//                       {s.sub_module}
//                     </Typography>
//                     <Typography variant="body2">
//                       Hits: {s.hits}
//                     </Typography>
//                     <Typography variant="body2">
//                       Time: {Math.floor(seconds / 60)} min
//                     </Typography>
//                   </Card>
//                 </Grid>
//               );
//             })}
//           </Grid>
//         </CardContent>
//       </Card>

//       {/* ================= USER LIST ================= */}
//       <Card sx={{ borderRadius: 3 }}>
//         <CardContent>
//           <Box
//             sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
//           >
//             <Typography fontWeight="bold">Users</Typography>
//             <Button
//               variant="contained"
//               startIcon={<DownloadIcon />}
//               onClick={function () {
//                 exportToCSV("users.csv", userData);
//               }}
//             >
//               Export Excel
//             </Button>
//           </Box>

//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Email</TableCell>
//                 <TableCell>Designation</TableCell>
//                 <TableCell>Actions</TableCell>
//                 <TableCell>Total Time (min)</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {userData.map(function (u, i) {
//                 return (
//                   <TableRow key={i}>
//                     <TableCell>{u.email}</TableCell>
//                     <TableCell>{u.designation}</TableCell>
//                     <TableCell>{u.actions}</TableCell>
//                     <TableCell>
//                       {Math.floor(Number(u.total_time || 0) / 60)}
//                     </TableCell>
//                   </TableRow>
//                 );
//               })}
//             </TableBody>
//           </Table>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// };

// export default ModuleAnalyticsDetail;


// import * as React from "react";
// import axios from "axios";
// import {
//   Box,
//   Card,
//   CardContent,
//   Typography,
//   CircularProgress,
//   Grid,
//   Button,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
// } from "@mui/material";
// import { useParams } from "react-router-dom";
// import {
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
// } from "recharts";
// import DownloadIcon from "@mui/icons-material/Download";

// const API_URL = "https://api.mfinindia.org/api/auth/analytics/all";

// /* =========================
//    EXPORT TO CSV
// ========================= */
// function exportToCSV(filename, rows) {
//   if (!rows || rows.length === 0) return;

//   var keys = Object.keys(rows[0]);
//   var csv =
//     keys.join(",") +
//     "\n" +
//     rows
//       .map(function (row) {
//         return keys
//           .map(function (k) {
//             return '"' + String(row[k] || "").replace(/"/g, '""') + '"';
//           })
//           .join(",");
//       })
//       .join("\n");

//   var blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
//   var link = document.createElement("a");
//   link.href = URL.createObjectURL(blob);
//   link.download = filename;
//   link.click();
// }

// const ModuleAnalyticsDetail = () => {
//   var params = useParams();
//   var module = decodeURIComponent(params.module || "");

//   var [loading, setLoading] = React.useState(true);
//   var [data, setData] = React.useState(null);

//   React.useEffect(function () {
//     setLoading(true);
//     axios
//       .get(API_URL)
//       .then(function (res) {
//         if (res.data && res.data.status === true) {
//           setData(res.data);
//         }
//       })
//       .finally(function () {
//         setLoading(false);
//       });
//   }, [module]);

//   if (loading) {
//     return (
//       <Box sx={{ mt: 12, textAlign: "center" }}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   /* =========================
//      RAW DATA
//   ========================= */
//   var modules = (data && data.modules) || [];
//   var subModules = (data && data.sub_modules) || [];
//   var users = (data && data.users) || [];
//   var monthlyHitsMap = (data && data.monthly_hits) || {};

//   /* =========================
//      NORMALIZE MONTHLY HITS KEYS
//   ========================= */
//   var normalizedMonthlyHits = {};
//   for (var key in monthlyHitsMap) {
//     normalizedMonthlyHits[key.toLowerCase()] = monthlyHitsMap[key];
//   }

//   var normalizedModuleKey = module.toLowerCase();
//   var monthlyChartData =
//     normalizedMonthlyHits[normalizedModuleKey] || [];

//   /* =========================
//      FILTER MODULE DATA
//   ========================= */
//   var moduleData = modules.filter(function (m) {
//     return (
//       m.module &&
//       m.module.toLowerCase() === normalizedModuleKey
//     );
//   });

//   var subModuleData = subModules.filter(function (s) {
//     return (
//       s.module &&
//       s.module.toLowerCase() === normalizedModuleKey
//     );
//   });

//   var userData = users.filter(function (u) {
//     return u.email && u.email.length > 0;
//   });

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         background: "#f5f5f5",
//         p: 4,
//         marginTop: "40px",
//       }}
//     >
//       {/* ================= HEADER ================= */}
//       <Box sx={{ textAlign: "center", mb: 4 }}>
//         <Typography variant="h3" fontWeight="bold">
//           {module} Analytics
//         </Typography>
//         <Typography color="text.secondary">
//           Detailed usage insights
//         </Typography>
//       </Box>

//       {/* ================= KPI BAR ================= */}
//       <Box
//         sx={{
//           background: "linear-gradient(135deg, #1e88e5, #1565c0)",
//           borderRadius: 2,
//           p: 3,
//           mb: 4,
//           color: "white",
//         }}
//       >
//         <Typography variant="h6">
//           Total Hits:{" "}
//           <b>{moduleData.length ? moduleData[0].hits : 0}</b>
//           &nbsp;&nbsp;|&nbsp;&nbsp;
//           Users: <b>{moduleData.length ? moduleData[0].users : 0}</b>
//           &nbsp;&nbsp;|&nbsp;&nbsp;
//           Total Time:{" "}
//           <b>
//             {moduleData.length
//               ? Math.floor(Number(moduleData[0].total_time || 0) / 60)
//               : 0}{" "}
//             min
//           </b>
//         </Typography>
//       </Box>

//       {/* ================= MONTHLY HITS CHART ================= */}
//       <Card sx={{ borderRadius: 3, mb: 4 }}>
//         <CardContent>
//           <Typography fontWeight="bold" mb={2}>
//             Monthly Hits
//           </Typography>

//           {monthlyChartData.length === 0 ? (
//             <Typography>No monthly data available</Typography>
//           ) : (
//             <Box sx={{ height: 300 }}>
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart data={monthlyChartData}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="month" />
//                   <YAxis />
//                   <Tooltip />
//                   <Bar dataKey="hits" fill="#1e88e5" />
//                 </BarChart>
//               </ResponsiveContainer>
//             </Box>
//           )}
//         </CardContent>
//       </Card>

//       {/* ================= SUB MODULE LIST ================= */}
//       {/* <Card sx={{ borderRadius: 3, mb: 4 }}>
//         <CardContent>
//           <Box
//             sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
//           >
//             <Typography fontWeight="bold">Sub Modules</Typography>
//             <Button
//               variant="contained"
//               startIcon={<DownloadIcon />}
//               onClick={function () {
//                 exportToCSV("sub_modules.csv", subModuleData);
//               }}
//             >
//               Export Excel
//             </Button>
//           </Box>

//           <Grid container spacing={2}>
//             {subModuleData.map(function (s, i) {
//               var seconds = Number(s.total_time || 0);
//               return (
//                 <Grid item xs={12} md={4} key={i}>
//                   <Card sx={{ p: 2 }}>
//                     <Typography fontWeight="bold">
//                       {s.sub_module}
//                     </Typography>
//                     <Typography variant="body2">
//                       Hits: {s.hits}
//                     </Typography>
//                     <Typography variant="body2">
//                       Time: {Math.floor(seconds / 60)} min
//                     </Typography>
//                   </Card>
//                 </Grid>
//               );
//             })}
//           </Grid>
//         </CardContent>
//       </Card> */}

//       {/* ================= USER LIST ================= */}
//       <Card sx={{ borderRadius: 3 }}>
//         <CardContent>
//           <Box
//             sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
//           >
//             <Typography fontWeight="bold">Users</Typography>
//             <Button
//               variant="contained"
//               startIcon={<DownloadIcon />}
//               onClick={function () {
//                 exportToCSV("users.csv", userData);
//               }}
//             >
//               Export Excel
//             </Button>
//           </Box>

//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Email</TableCell>
//                 <TableCell>Designation</TableCell>
//                 <TableCell>Actions</TableCell>
//                 <TableCell>Total Time (min)</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {userData.map(function (u, i) {
//                 return (
//                   <TableRow key={i}>
//                     <TableCell>{u.email}</TableCell>
//                     <TableCell>{u.designation}</TableCell>
//                     <TableCell>{u.actions}</TableCell>
//                     <TableCell>
//                       {Math.floor(Number(u.total_time || 0) / 60)}
//                     </TableCell>
//                   </TableRow>
//                 );
//               })}
//             </TableBody>
//           </Table>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// };

// export default ModuleAnalyticsDetail;


// import * as React from "react";
// import axios from "axios";
// import {
//   Box,
//   Card,
//   CardContent,
//   Typography,
//   CircularProgress,
//   Grid,
//   Button,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   IconButton
// } from "@mui/material";
// import { useParams, useNavigate } from "react-router-dom";
// import {
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
// } from "recharts";
// import DownloadIcon from "@mui/icons-material/Download";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// const API_URL = "https://api.mfinindia.org/api/auth/analytics/all";

// /* =========================
//    EXPORT TO CSV
// ========================= */
// function exportToCSV(filename, rows) {
//   if (!rows || rows.length === 0) return;

//   var keys = Object.keys(rows[0]);
//   var csv =
//     keys.join(",") +
//     "\n" +
//     rows
//       .map(function (row) {
//         return keys
//           .map(function (k) {
//             return '"' + String(row[k] || "").replace(/"/g, '""') + '"';
//           })
//           .join(",");
//       })
//       .join("\n");

//   var blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
//   var link = document.createElement("a");
//   link.href = URL.createObjectURL(blob);
//   link.download = filename;
//   link.click();
// }

// const ModuleAnalyticsDetail = () => {
//   var params = useParams();
//   var navigate = useNavigate();
//   var module = decodeURIComponent(params.module || "");

//   var [loading, setLoading] = React.useState(true);
//   var [data, setData] = React.useState(null);

//   React.useEffect(function () {
//     setLoading(true);
//     axios
//       .get(API_URL)
//       .then(function (res) {
//         if (res.data && res.data.status === true) {
//           setData(res.data);
//         }
//       })
//       .finally(function () {
//         setLoading(false);
//       });
//   }, [module]);

//   if (loading) {
//     return (
//       <Box sx={{ mt: 12, textAlign: "center" }}>
//         <CircularProgress sx={{ color: "#2B60AD" }} />
//       </Box>
//     );
//   }

//   /* =========================
//      RAW DATA
//   ========================= */
//   var modules = (data && data.modules) || [];
//   var subModules = (data && data.sub_modules) || [];
//   var users = (data && data.users) || [];
//   var monthlyHitsMap = (data && data.monthly_hits) || {};

//   /* =========================
//      NORMALIZE MONTHLY HITS KEYS
//   ========================= */
//   var normalizedMonthlyHits = {};
//   for (var key in monthlyHitsMap) {
//     normalizedMonthlyHits[key.toLowerCase()] = monthlyHitsMap[key];
//   }

//   var normalizedModuleKey = module.toLowerCase();
//   var monthlyChartData =
//     normalizedMonthlyHits[normalizedModuleKey] || [];

//   /* =========================
//      FILTER MODULE DATA
//   ========================= */
//   var moduleData = modules.filter(function (m) {
//     return (
//       m.module &&
//       m.module.toLowerCase() === normalizedModuleKey
//     );
//   });

//   var subModuleData = subModules.filter(function (s) {
//     return (
//       s.module &&
//       s.module.toLowerCase() === normalizedModuleKey
//     );
//   });

//   var userData = users.filter(function (u) {
//     return u.email && u.email.length > 0;
//   });

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         background: "#f5f5f5",
//         p: 4,
//         marginTop: "40px",
//       }}
//     >
//       {/* ================= BACK BUTTON ================= */}
// <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
//   <IconButton
//     onClick={() => navigate("/anylatics")}
//     sx={{
//       color: "#000",          // pure black icon
//       backgroundColor: "transparent",
//       "&:hover": {
//         backgroundColor: "transparent", // no hover color
//       },
//     }}
//   >
//     <ArrowBackIcon />
//   </IconButton>
// </Box>

//       {/* ================= HEADER ================= */}
//       <Box sx={{ textAlign: "center", mb: 4 }}>
//         <Typography variant="h3" fontWeight="bold">
//           {module} Analytics
//         </Typography>
//         <Typography color="text.secondary">
//           Detailed usage insights
//         </Typography>
//       </Box>

//       {/* ================= KPI BAR ================= */}
//       <Box
//         sx={{
//           background: "linear-gradient(135deg, #2B60AD, #39B1AC)",
//           borderRadius: 2,
//           p: 3,
//           mb: 4,
//           color: "white",
//         }}
//       >
//         <Typography variant="h6">
//           Total Hits:{" "}
//           <b>{moduleData.length ? moduleData[0].hits : 0}</b>
//           &nbsp;&nbsp;|&nbsp;&nbsp;
//           Users: <b>{moduleData.length ? moduleData[0].users : 0}</b>
//           &nbsp;&nbsp;|&nbsp;&nbsp;
//           Total Time:{" "}
//           <b>
//             {moduleData.length
//               ? Math.floor(Number(moduleData[0].total_time || 0) / 60)
//               : 0}{" "}
//             min
//           </b>
//         </Typography>
//       </Box>

//       {/* ================= MONTHLY HITS CHART ================= */}
//       <Card sx={{ borderRadius: 3, mb: 4 }}>
//         <CardContent>
//           <Typography fontWeight="bold" mb={2}>
//             Monthly Hits
//           </Typography>

//           {monthlyChartData.length === 0 ? (
//             <Typography>No monthly data available</Typography>
//           ) : (
//             <Box sx={{ height: 300 }}>
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart data={monthlyChartData}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="month" />
//                   <YAxis />
//                   <Tooltip />
//                   <Bar dataKey="hits" fill="#2B60AD" />
//                 </BarChart>
//               </ResponsiveContainer>
//             </Box>
//           )}
//         </CardContent>
//       </Card>

//       {/* ================= SUB MODULE LIST ================= */}
//       {/* <Card sx={{ borderRadius: 3, mb: 4 }}>
//         <CardContent>
//           <Box
//             sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
//           >
//             <Typography fontWeight="bold">Sub Modules</Typography>
//             <Button
//               variant="contained"
//               startIcon={<DownloadIcon />}
//               onClick={function () {
//                 exportToCSV("sub_modules.csv", subModuleData);
//               }}
//               sx={{
//                 background: "linear-gradient(135deg, #2B60AD, #39B1AC)",
//                 '&:hover': {
//                   background: "linear-gradient(135deg, #234d8f, #2d8e8a)",
//                 }
//               }}
//             >
//               Export Excel
//             </Button>
//           </Box>

//           <Grid container spacing={2}>
//             {subModuleData.map(function (s, i) {
//               var seconds = Number(s.total_time || 0);
//               return (
//                 <Grid item xs={12} md={4} key={i}>
//                   <Card sx={{ p: 2 }}>
//                     <Typography fontWeight="bold">
//                       {s.sub_module}
//                     </Typography>
//                     <Typography variant="body2">
//                       Hits: {s.hits}
//                     </Typography>
//                     <Typography variant="body2">
//                       Time: {Math.floor(seconds / 60)} min
//                     </Typography>
//                   </Card>
//                 </Grid>
//               );
//             })}
//           </Grid>
//         </CardContent>
//       </Card> */}

//       {/* ================= USER LIST ================= */}
//       <Card sx={{ borderRadius: 3 }}>
//         <CardContent>
//           <Box
//             sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
//           >
//             <Typography fontWeight="bold">Users</Typography>
//             <Button
//               variant="contained"
//               startIcon={<DownloadIcon />}
//               onClick={function () {
//                 exportToCSV("users.csv", userData);
//               }}
//               sx={{
//                 background: "linear-gradient(135deg, #2B60AD, #39B1AC)",
//                 '&:hover': {
//                   background: "linear-gradient(135deg, #234d8f, #2d8e8a)",
//                 }
//               }}
//             >
//               Export Excel
//             </Button>
//           </Box>

//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Email</TableCell>
//                 <TableCell>Designation</TableCell>
//                 <TableCell>Actions</TableCell>
//                 <TableCell>Total Time (min)</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {userData.map(function (u, i) {
//                 return (
//                   <TableRow key={i}>
//                     <TableCell>{u.email}</TableCell>
//                     <TableCell>{u.designation}</TableCell>
//                     <TableCell>{u.actions}</TableCell>
//                     <TableCell>
//                       {Math.floor(Number(u.total_time || 0) / 60)}
//                     </TableCell>
//                   </TableRow>
//                 );
//               })}
//             </TableBody>
//           </Table>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// };

// export default ModuleAnalyticsDetail;

import * as React from "react";
import axios from "axios";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Grid,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  TextField
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import DownloadIcon from "@mui/icons-material/Download";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const API_ALL = "https://api.mfinindia.org/api/auth/analytics/all";
const API_FILTER = "https://api.mfinindia.org/api/auth/analytics/filter";

/* =========================
   EXPORT TO CSV
========================= */
function exportToCSV(filename, rows) {
  if (!rows || rows.length === 0) return;

  var keys = Object.keys(rows[0]);
  var csv =
    keys.join(",") +
    "\n" +
    rows
      .map(function (row) {
        return keys
          .map(function (k) {
            return '"' + String(row[k] || "").replace(/"/g, '""') + '"';
          })
          .join(",");
      })
      .join("\n");

  var blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  var link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
}

const ModuleAnalyticsDetail = () => {
  var params = useParams();
  var navigate = useNavigate();
  var module = decodeURIComponent(params.module || "");

  var [loading, setLoading] = React.useState(true);
  var [data, setData] = React.useState(null);

  /* =========================
     FILTER STATE
  ========================= */
  var [fromDate, setFromDate] = React.useState("");
  var [toDate, setToDate] = React.useState("");

  /* =========================
     LOAD ALL DATA
  ========================= */
  function loadAll() {
    setLoading(true);
    axios
      .get(API_ALL)
      .then(function (res) {
        if (res.data && res.data.status === true) {
          setData(res.data);
        }
      })
      .finally(function () {
        setLoading(false);
      });
  }

  /* =========================
     APPLY FILTER
  ========================= */
  function applyFilter() {
    setLoading(true);

    axios
      .post(API_FILTER, {
        module: module,              // 🔥 VERY IMPORTANT
        from_date: fromDate || null,
        to_date: toDate || null,
      })
      .then(function (res) {
        if (res.data && res.data.status === true) {
          setData(res.data);
        }
      })
      .finally(function () {
        setLoading(false);
      });
  }

  React.useEffect(function () {
    loadAll();
  }, [module]);

  if (loading) {
    return (
      <Box sx={{ mt: 12, textAlign: "center" }}>
        <CircularProgress sx={{ color: "#2B60AD" }} />
      </Box>
    );
  }

  /* =========================
     RAW DATA (NO EXTRA FILTER)
  ========================= */
  var modules = (data && data.modules) || [];
  var users = (data && data.users) || [];
  var monthlyHitsMap = (data && data.monthly_hits) || {};

  /* =========================
     MONTHLY CHART DATA
  ========================= */
  var normalizedMonthlyHits = {};
  for (var key in monthlyHitsMap) {
    normalizedMonthlyHits[key.toLowerCase()] = monthlyHitsMap[key];
  }

  var normalizedModuleKey = module.toLowerCase();
  var monthlyChartData =
    normalizedMonthlyHits[normalizedModuleKey] || [];

  /* =========================
     MODULE KPI DATA
  ========================= */
  var moduleData = modules.filter(function (m) {
    return m.module && m.module.toLowerCase() === normalizedModuleKey;
  });

  /* =========================
     ✅ USERS DATA (FIXED)
     Backend already filtered → DO NOT re-filter
  ========================= */
  var userData = users || [];

  return (
    <Box sx={{ minHeight: "100vh", background: "#f5f5f5", p: 4, mt: "40px" }}>
      {/* BACK BUTTON */}
<CardContent
  sx={{
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  }}
>
  <IconButton
    onClick={() => navigate("/anylatics")}
    sx={{
      color: "#000",
      backgroundColor: "transparent",
      "&:hover": { backgroundColor: "transparent" },
    }}
  >
    <ArrowBackIcon />
  </IconButton>
</CardContent>
    

      <Box sx={{ textAlign: "left", mb: 4 }}>
              <Typography variant="h4" fontWeight="bold" >
                {module} Analytics
              </Typography>
              
            </Box>

      {/* ================= FILTER BAR ================= */}
      <Card sx={{ p: 3, mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <TextField
              type="date"
              fullWidth
              label="From Date"
              InputLabelProps={{ shrink: true }}
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              type="date"
              fullWidth
              label="To Date"
              InputLabelProps={{ shrink: true }}
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <Button
              fullWidth
              sx={{
                height: "56px",
                background: "linear-gradient(135deg, #2B60AD, #39B1AC)",
              }}
              variant="contained"
              onClick={applyFilter}
            >
              APPLY FILTER
            </Button>
          </Grid>
        </Grid>
      </Card>

      {/* ================= KPI BAR ================= */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #2B60AD, #39B1AC)",
          borderRadius: 2,
          p: 3,
          mb: 4,
          color: "white",
        }}
      >
        <Typography variant="h6">
          Total Hits: <b>{moduleData.length ? moduleData[0].hits : 0}</b> |
          Users: <b>{moduleData.length ? moduleData[0].users : 0}</b> |
          Total Time:{" "}
          <b>
            {moduleData.length
              ? Math.floor(Number(moduleData[0].total_time || 0) / 60)
              : 0}{" "}
            min
          </b>
        </Typography>
      </Box>

      {/* ================= MONTHLY CHART ================= */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography fontWeight="bold" mb={2}>
            Monthly Hits
          </Typography>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="hits" fill="#2B60AD" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* ================= USERS TABLE ================= */}
      <Card>
        <CardContent>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Typography fontWeight="bold">Users</Typography>
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              onClick={() => exportToCSV("users.csv", userData)}
              sx={{
                background: "linear-gradient(135deg, #2B60AD, #39B1AC)",
              }}
            >
             </Button>
          </Box>

          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Email</TableCell>
                <TableCell>Designation</TableCell>
                <TableCell>Actions</TableCell>
                <TableCell>Total Time (min)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userData.map(function (u, i) {
                return (
                  <TableRow key={i}>
                    <TableCell>{u.email}</TableCell>
                    <TableCell>{u.designation}</TableCell>
                    <TableCell>{u.actions}</TableCell>
                    <TableCell>
                      {Math.floor(Number(u.total_time || 0) / 60)}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ModuleAnalyticsDetail;