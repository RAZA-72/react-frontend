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
import * as React from "react";
import axios from "axios";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Tabs,
  Tab,
  CircularProgress,
} from "@mui/material";
import { useParams } from "react-router-dom";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const API_URL = "https://api.mfinindia.org/api/auth/analytics/all";

const ModuleAnalyticsDetail = () => {
  var params = useParams();
  var module = params.module;

  var [tab, setTab] = React.useState(0);
  var [loading, setLoading] = React.useState(true);
  var [data, setData] = React.useState(null);

  React.useEffect(function () {
    setLoading(true);
    axios
      .get(API_URL)
      .then(function (res) {
        if (res.data && res.data.status) {
          setData(res.data);
        }
      })
      .finally(function () {
        setLoading(false);
      });
  }, [module]);

  if (loading) {
    return (
      <Box sx={{ mt: 10, textAlign: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  var modules = (data && data.modules) || [];
  var sub_modules = (data && data.sub_modules) || [];
  var users = (data && data.users) || [];

  // ✅ FILTER BY MODULE (NO ?. USED)
  var filteredModule = modules.filter(function (m) {
    return (
      m.module &&
      module &&
      m.module.toLowerCase() === module.toLowerCase()
    );
  });

  var filteredSubModules = sub_modules.filter(function (s) {
    return (
      s.module &&
      module &&
      s.module.toLowerCase() === module.toLowerCase()
    );
  });

  var filteredUsers = users.filter(function (u) {
    return (
      u.module &&
      module &&
      u.module.toLowerCase() === module.toLowerCase()
    );
  });

  return (
    <Box sx={{ p: 4, mt: "90px" }}>
      <Typography variant="h4" fontWeight="bold" mb={1}>
        {module.toUpperCase()} Analytics
      </Typography>

      <Tabs value={tab} onChange={function (e, v) { setTab(v); }} sx={{ mb: 3 }}>
        <Tab label="Overview" />
        <Tab label="Sub Modules" />
        <Tab label="Users" />
      </Tabs>

      {/* ===== OVERVIEW ===== */}
      {tab === 0 && (
        <Card>
          <CardContent>
            <Typography fontWeight="bold" mb={2}>
              Module Usage
            </Typography>

            {filteredModule.length === 0 ? (
              <Typography>No data found</Typography>
            ) : (
              <Box sx={{ height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={filteredModule}>
                    <XAxis dataKey="module" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="hits"
                      stroke="#1976d2"
                      fill="#1976d2"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </Box>
            )}
          </CardContent>
        </Card>
      )}

      {/* ===== SUB MODULES ===== */}
    {tab === 1 && (
  <Card>
    <CardContent>
      <Typography fontWeight="bold" mb={2}>
        Sub Modules
      </Typography>

      {filteredSubModules.length === 0 ? (
        <Typography>No sub-module data</Typography>
      ) : (
        filteredSubModules.map(function (s, i) {
          var seconds =
            s.total_time_seconds ||
            s.time_spent_seconds ||
            s.total_time ||
            0;

          return (
            <Typography key={i} sx={{ mb: 1 }}>
              • <b>{s.sub_module}</b> —{" "}
              {Math.floor(seconds / 60)} min
            </Typography>
          );
        })
      )}
    </CardContent>
  </Card>
)}


      {/* ===== USERS ===== */}
      {tab === 2 && (
        <Card>
          <CardContent>
            <Typography fontWeight="bold" mb={2}>
              Users
            </Typography>

            {filteredUsers.length === 0
              ? "No users"
              : filteredUsers.map(function (u, i) {
                  return (
                    <Typography key={i}>
                      • {u.email} ({u.designation})
                    </Typography>
                  );
                })}
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default ModuleAnalyticsDetail;
