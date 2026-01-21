

import React from "react";
import { Card, CardContent, CardActionArea } from "@mui/material";
import ReactApexChart from "react-apexcharts";

const CBVIDKYCSeedingMemberGraph = ({ graphData }) => {
  const [data, setData] = React.useState([]);

 

  React.useEffect(() => {
    if (
      graphData &&
      graphData.data &&
      Array.isArray(graphData.data) &&
      graphData.data.length > 0
    ) {
      const transformed = graphData.data
        .map((item) => {
          if (
            !item ||
            !item.Month ||
            item.KYC_Fill_Rate == null ||
            item.VID_Fill_Rate == null
          ) {
            return null;
          }

          const kycRate = parseFloat(String(item.KYC_Fill_Rate).replace("%", ""));
          const vidRate = parseFloat(String(item.VID_Fill_Rate).replace("%", ""));

          return {
            month: item.Month,
            kycFillRate: isNaN(kycRate) ? 0 : kycRate,
            vidFillRate: isNaN(vidRate) ? 0 : vidRate
          };
        })
        .filter((x) => x !== null);

      setData(transformed);
    } else {
      setData([]);
    }
  }, [graphData]);

  // Fallback data
  const fallbackHeadings = ["Mar-25", "Apr-25", "May-25", "Jun-25", "Jul-25", "Aug-25"];
  const fallbackSeries = [
    { name: "KYC Fill Rate", data: [0, 0, 0, 0, 0, 0] },
    { name: "VID Fill Rate", data: [0, 0, 0, 0, 0, 0] }
  ];

  const seriesData =
    data.length > 0
      ? [
        { name: "KYC Fill Rate", data: data.map((x) => x.kycFillRate) },
        { name: "VID Fill Rate", data: data.map((x) => x.vidFillRate) }
      ]
      : fallbackSeries;

  const categories = data.length > 0 ? data.map((x) => x.month) : fallbackHeadings;

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

    // FIXED GRID PADDING - LEFT SIDE CUTTING ISSUE RESOLVED
    grid: {
      show: false,
      padding: {
        left: 30,   // Increased left padding to prevent cutting
        right: 20,
        bottom: 20,
        top: 20
      }
    },

    colors: ["#2B60AD", "#F78F6D"],

    dataLabels: {
      enabled: true,
      formatter: (val) => val.toFixed(2) + "%", // Double decimal formatting
      style: {
        fontSize: "13px",
        fontWeight: "bold"
      },
      background: {
        enabled: true,
        borderRadius: 2,
        padding: 4
      }
    },

    stroke: { width: [3, 3], curve: "smooth" },
    markers: { size: 6 },

    title: {
      text: `KYC and VID Fill Rate - ${graphData.title || "Member"}`,
      align: "left",
      style: {
        fontSize: "16px",
        fontWeight: "bold"
      }
    },

    xaxis: {
      categories,
      labels: {
        show: true,
        style: {
          fontSize: "13px",
          fontWeight: 500
        },
        offsetX: 0
      },
      axisBorder: {
        show: true, // Keep x-axis line visible
        color: '#e7e7e7'
      },
      axisTicks: {
        show: true // Keep x-axis ticks visible
      }
    },

    yaxis: {
      show: false
    },

    legend: {
      position: "bottom",
      horizontalAlign: "center",
      fontSize: "14px"
    },

    // Fix tooltip to show double decimal
    tooltip: {
      y: {
        formatter: function (value) {
          return value.toFixed(2) + "%"; // Ensure tooltip shows double decimal
        }
      }
    }
  };

  return (
    <Card style={{ paddingBottom: "20px", marginTop: "20px" }}>
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

export default CBVIDKYCSeedingMemberGraph;