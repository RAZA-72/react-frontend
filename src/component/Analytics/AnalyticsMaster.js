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
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const API_URL = "https://api.mfinindia.org/api/auth/analytics/all";

const ALLOWED_MODULES = [
  "Microfinance Universe",
  "MFIN Members",
  "DRI-State",
  "Custom Reports",
  "Benchmark",
  "SRO",
  "Micrometer",
];

const AnalyticsMaster = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const navigate = useNavigate(); // ✅ navigation

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        if (res.data && res.data.status) {
          setData(res.data);
        } else {
          setError("Invalid response from server");
        }
      })
      .catch(() => setError("Failed to load analytics"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Box sx={{ mt: 12, textAlign: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error || !data) {
    return (
      <Box sx={{ mt: 12, textAlign: "center" }}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  const { kpi, modules } = data;

  /* ✅ ONLY REQUIRED MODULES */
  const filteredModules = modules.filter((m) =>
    ALLOWED_MODULES.some((name) =>
      m.module.toLowerCase().includes(name.toLowerCase())
    )
  );

  /* user list */
  const userList = filteredModules.map((m, i) => ({
    id: i + 1,
    module: m.module,
    users: m.users,
    avgTime: Math.floor(m.avg_time / 60) + " min",
  }));

  return (
    <Box
      sx={{
        minHeight: "100vh",
        p: 5,
        background:
          "linear-gradient(180deg, #f4f6fb 0%, #eef1f7 100%)",
      }}
    >
      {/* ================= KPI STRIP ================= */}
      <Grid container spacing={4} mb={7}>
        {[
          { label: "TOTAL USERS", value: kpi.total_users },
          { label: "TOTAL SESSIONS", value: kpi.total_sessions },
          {
            label: "AVG SESSION TIME",
            value:
              Math.floor(kpi.avg_session_time_seconds / 60) + " min",
          },
          { label: "ACTIVE MODULES", value: filteredModules.length },
        ].map((item, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Card
              sx={{
                borderRadius: 4,
                background: "rgba(255,255,255,0.9)",
                boxShadow: "0 14px 40px rgba(0,0,0,0.08)",
              }}
            >
              <CardContent>
                <Typography
                  variant="caption"
                  sx={{ letterSpacing: 2, color: "text.secondary" }}
                >
                  {item.label}
                </Typography>
                <Typography variant="h3" fontWeight="bold" sx={{ mt: 1 }}>
                  {item.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* ================= MODULE PERFORMANCE ================= */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" fontWeight="bold">
          Module Performance
        </Typography>
        <Typography color="text.secondary">
          Engagement and activity by module
        </Typography>
      </Box>

      <Divider sx={{ mb: 5 }} />

      <Grid container spacing={4} mb={8}>
        {filteredModules.map((m, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card
              onClick={() =>
                navigate(`/ModuleAnalyticsDetail/${encodeURIComponent(m.module)}`)
              }
              sx={{
                cursor: "pointer",
                height: "100%",
                borderRadius: 4,
                background:
                  "linear-gradient(180deg, #ffffff 0%, #f5f7fb 100%)",
                transition: "0.35s",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 24px 55px rgba(0,0,0,0.14)",
                },
              }}
            >
              <CardContent>
                <Typography
                  variant="overline"
                  sx={{ letterSpacing: 2, color: "primary.main" }}
                >
                  MODULE
                </Typography>

                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{ textTransform: "uppercase", mb: 2 }}
                >
                  {m.module}
                </Typography>

                <Divider sx={{ mb: 2 }} />

                <Typography variant="body2" sx={{ mb: 1 }}>
                  👥 Users: <b>{m.users}</b>
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  📊 Hits: <b>{m.hits}</b>
                </Typography>
                <Typography variant="body2">
                  ⏱ Avg Time:{" "}
                  <b>{Math.floor(m.avg_time / 60)} min</b>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* ================= USER LIST ================= */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" fontWeight="bold">
          User List Overview
        </Typography>
        <Typography color="text.secondary">
          Users grouped by analytics modules
        </Typography>
      </Box>

      <Paper
        sx={{
          borderRadius: 4,
          overflow: "hidden",
          boxShadow: "0 18px 45px rgba(0,0,0,0.12)",
        }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ background: "#f3f4f6" }}>
              <TableCell><b>ID</b></TableCell>
              <TableCell><b>Module</b></TableCell>
              <TableCell><b>Total Users</b></TableCell>
              <TableCell><b>Avg Time</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userList.map((u) => (
              <TableRow key={u.id} hover>
                <TableCell>{u.id}</TableCell>
                <TableCell>{u.module.toUpperCase()}</TableCell>
                <TableCell>{u.users}</TableCell>
                <TableCell>{u.avgTime}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default AnalyticsMaster;
