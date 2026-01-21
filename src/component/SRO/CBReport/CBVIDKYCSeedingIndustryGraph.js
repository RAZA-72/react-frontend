
// export default CBVIDKYCSeedingIndustryGraph;
import React from "react";
import { Card, CardContent, CardActionArea } from "@mui/material";
import ReactApexChart from "react-apexcharts";

const CBVIDKYCSeedingIndustryGraph = ({ data, title }) => {
  console.log("data in vid graph", data);
  const hasData = data && data.length > 0;

  // Fallback
  const fallbackHeadings = ["Mar-25", "Apr-25", "May-25", "Jun-25", "Jul-25", "Aug-25"];
  const fallbackSeries = [
    { name: "KYC Fill Rate", data: [0, 0, 0, 0, 0, 0] },
    { name: "VID Fill Rate", data: [0, 0, 0, 0, 0, 0] }
  ];

  // Real or fallback
  const seriesData = hasData
    ? [
      { name: "KYC Fill Rate", data: data.map((x) => x.kycFillRate) },
      { name: "VID Fill Rate", data: data.map((x) => x.vidFillRate) }
    ]
    : fallbackSeries;

  const categories = hasData ? data.map((x) => x.month) : fallbackHeadings;

  // UPDATED OPTIONS WITH X-AXIS LINE REMOVED
  const options = {
    chart: {
      type: "line",
      height: 450,
      zoom: { enabled: false },
      toolbar: {
        show: true,
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false
        }
      }
    },

    colors: ["#2B60AD", "#F78F6D"],

    dataLabels: {
      enabled: true,
      formatter: (val) => `${val.toFixed(2)}%`, // Double decimal formatting
      style: {
        fontSize: "13px",
        fontFamily: "sans-serif",
        fontWeight: "bold"
      },
      background: {
        enabled: true,
        borderRadius: 2,
        padding: 4,
        opacity: 0.9,
        borderWidth: 1,
        borderColor: "#fff"
      }
    },

    stroke: { width: [3, 3], curve: "smooth" },

    markers: {
      size: 6,
      hover: { size: 8 }
    },

    title: {
      text: `KYC and VID Fill Rate - ${title || "Universe"}`,
      align: "left",
      style: { fontSize: "16px", fontWeight: "bold", color: "#333" }
    },

    xaxis: {
      categories: categories,
      labels: {
        show: true,
        style: {
          fontSize: "13px",
          fontFamily: "sans-serif",
          fontWeight: 500
        }
      },
      axisBorder: {
        show: false, // CHANGED: Remove x-axis line
      },
      axisTicks: {
        show: false // CHANGED: Remove x-axis ticks
      }
    },

    yaxis: { show: false },

    legend: {
      position: "bottom",
      horizontalAlign: "center",
      fontSize: "14px",
      fontWeight: 500,
      markers: {
        width: 12,
        height: 12,
        radius: 6
      }
    },

    tooltip: {
      y: {
        formatter: (value) => value.toFixed(2) + "%" // Double decimal in tooltip
      }
    },

    // FIXED GRID PADDING - LEFT SIDE CUTTING ISSUE RESOLVED
    grid: {
      show: false, // Completely hide grid lines
      padding: {
        top: 20,
        right: 20,
        bottom: 20,
        left: 30  // Increased left padding to prevent cutting
      }
    }
  };

  return (
    <Card style={{ paddingBottom: "20px", marginTop: "20px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
      <CardActionArea>
        <CardContent>
          <ReactApexChart
            options={options}
            series={seriesData}
            type="line"
            height={450}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CBVIDKYCSeedingIndustryGraph;