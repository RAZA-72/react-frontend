import * as React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

// ===== KPI BOXES DATA (LIKE YOUR IMAGE) =====
const kpiData = [
  {
    title: "Total Members",
    value: "1,800",
    change: "+5.2%",
    icon: "bi-people",
    color: "green",
  },
  {
    title: "Active Members",
    value: "435",
    change: "+1.5%",
    icon: "bi-activity",
    color: "green",
  },
  {
    title: "Total Reports Run",
    value: "12,450",
    change: "-0.2%",
    icon: "bi-bar-chart",
    color: "red",
  },
  {
    title: "Avg Session Time",
    value: "5m 20s",
    change: "+1.5%",
    icon: "bi-clock",
    color: "green",
  },
];

// ===== ONLY ACTIVE MEMBER MODULES (6) =====
const menuItems = [
  {
    title: "Universe",
    icon: "bi-globe",
    link: "/micro-finance-universe",
    users: 1320,
    avgTime: "6m",
  },
  {
    title: "MFIN Members",
    icon: "bi-people",
    link: "/mfinmembersmodule",
    users: 980,
    avgTime: "4m",
  },
  {
    title: "Benchmark",
    icon: "bi-graph-up",
    link: "/benchmark",
    users: 620,
    avgTime: "5m",
  },
  {
    title: "Custom Report",
    icon: "bi-sliders",
    link: "/customize-report",
    users: 410,
    avgTime: "3m",
  },
  {
    title: "DRI – State",
    icon: "bi-map",
    link: "/dri-states",
    users: 540,
    avgTime: "5m",
  },
  {
    title: "SRO",
    icon: "bi-person-lines-fill",
    link: "/sro",
    users: 290,
    avgTime: "2m",
  },
];

const AnalyticsMaster = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 4, mt: "90px" }}>
      {/* ===== PAGE HEADER ===== */}
      <Typography variant="h4" fontWeight="bold">
        Analytics Control Center
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={4}>
        Member usage analytics across core modules
      </Typography>

      {/* ===== KPI BOXES (LIKE YOUR IMAGE) ===== */}
      <Grid container spacing={3} mb={4}>
        {kpiData.map((item, index) => (
          <Grid xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: "100%", boxShadow: 3 }}>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 1,
                  }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: 2,
                      background: "#f5f5f5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 1.5,
                    }}
                  >
                    <i className={`bi ${item.icon}`} />
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {item.title}
                  </Typography>
                </Box>

                <Typography variant="h4" fontWeight="bold">
                  {item.value}
                </Typography>

                <Typography
                  variant="caption"
                  sx={{ color: item.color === "green" ? "green" : "red" }}
                >
                  {item.change} vs last month
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* ===== FIXED 3 x 2 MODULE GRID ===== */}
      <Grid container spacing={3}>
        {menuItems.map((item, index) => (
          <Grid xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: "100%",
                boxShadow: 4,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-6px)",
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  <i
                    className={`bi ${item.icon}`}
                    style={{ marginRight: 10 }}
                  ></i>
                  {item.title}
                </Typography>

                <Typography variant="body2" color="text.secondary" mt={1}>
                  👥 Users: <b>{item.users}</b>
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  ⏱ Avg Time: <b>{item.avgTime}</b>
                </Typography>

                <Button
                  variant="contained"
                  size="small"
                  sx={{ mt: 2 }}
                  onClick={() => navigate(item.link)}
                >
                  View Analytics
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AnalyticsMaster;
