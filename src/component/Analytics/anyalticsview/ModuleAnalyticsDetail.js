import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Tabs,
  Tab,
  Button,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

// ===== DUMMY CHART DATA =====
const growthData = [
  { month: "Jan", value: 2200 },
  { month: "Feb", value: 2100 },
  { month: "Mar", value: 2400 },
  { month: "Apr", value: 2800 },
  { month: "May", value: 2500 },
  { month: "Jun", value: 3300 },
  { month: "Jul", value: 3800 },
  { month: "Aug", value: 4500 },
  { month: "Sep", value: 5000 },
  { month: "Oct", value: 5400 },
  { month: "Nov", value: 6000 },
  { month: "Dec", value: 6800 },
];

// ===== TABLE DATA =====
const tableData = [
  {
    name: "Admin One",
    country: "India",
    rating: 4.3,
    users: 371,
    actions: 3656,
    lastActive: "5 days ago",
  },
  {
    name: "Admin Two",
    country: "Germany",
    rating: 4.7,
    users: 216,
    actions: 1864,
    lastActive: "18 days ago",
  },
  {
    name: "Admin Three",
    country: "Japan",
    rating: 4.5,
    users: 331,
    actions: 1259,
    lastActive: "30 days ago",
  },
  {
    name: "Admin Four",
    country: "USA",
    rating: 4.2,
    users: 625,
    actions: 3079,
    lastActive: "22 days ago",
  },
];

const ModuleAnalyticsDetail = () => {
  const [tab, setTab] = React.useState(0);

  return (
    <Box sx={{ p: 4, mt: "90px" }}>
      {/* ===== PAGE HEADER ===== */}
      <Typography variant="h4" fontWeight="bold">
        Universe Analytics
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={3}>
        Detailed analytics and reporting for this module
      </Typography>

      {/* ===== TABS ===== */}
      <Tabs
        value={tab}
        onChange={(e, val) => setTab(val)}
        sx={{ mb: 3 }}
      >
        <Tab label="Growth" />
        <Tab label="Regional" />
        <Tab label="Categories" />
      </Tabs>

      {/* ===== CHART SECTION ===== */}
      <Grid container spacing={3}>
        <Grid xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography fontWeight="bold" mb={1}>
                Monthly User Growth
              </Typography>
              <Typography variant="h5" fontWeight="bold">
                12,500
              </Typography>
              <Typography variant="caption" color="green">
                +1.5% vs last month
              </Typography>

              <Box sx={{ height: 280, mt: 2 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={growthData}>
                    <defs>
                      <linearGradient id="colorPink" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ec407a" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#ec407a" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#ec407a"
                      fillOpacity={1}
                      fill="url(#colorPink)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography fontWeight="bold" mb={1}>
                Monthly Module Usage
              </Typography>
              <Typography variant="h5" fontWeight="bold">
                10,000
              </Typography>
              <Typography variant="caption" color="green">
                +1.5% vs last month
              </Typography>

              <Box sx={{ height: 280, mt: 2 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={growthData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#26a69a"
                      strokeWidth={3}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* ===== TABLE SECTION ===== */}
      <Card sx={{ mt: 4 }}>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <Typography fontWeight="bold">
              Admin / Member Activity
            </Typography>

            <Box sx={{ display: "flex", gap: 1 }}>
              <Button variant="outlined" size="small">
                Export CSV
              </Button>
              <TextField
                size="small"
                placeholder="Search"
              />
            </Box>
          </Box>

          <Box sx={{ overflowX: "auto" }}>
            <table width="100%" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#f5f5f5" }}>
                  <th align="left">Name</th>
                  <th>Country</th>
                  <th>Rating</th>
                  <th>Managed Users</th>
                  <th>Total Actions</th>
                  <th>Last Active</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #eee" }}>
                    <td>{row.name}</td>
                    <td align="center">{row.country}</td>
                    <td align="center">⭐ {row.rating}</td>
                    <td align="center">{row.users}</td>
                    <td align="center">{row.actions}</td>
                    <td align="center">{row.lastActive}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ModuleAnalyticsDetail;
