import React from "react";
import { Box, Typography } from "@mui/material";
import ReactApexChart from "react-apexcharts";

const MinimumMaximumInterestRateIndustry = ({ minimumaxir }) => {
  console.log("🎯 MINIMUM MAXIMUM INTEREST RATE CHART - INDUSTRY");
  console.log("📊 Received minimumaxir:", minimumaxir);

  // Default data if API hasn't loaded
  const getDefaultData = () => ({
    categories: ["Apr", "May", "June", "July", "Aug", "Sep"],
    series: [
      { name: "Min", data: [0, 0, 0, 0, 0, 0] },
      { name: "Max", data: [0, 0, 0, 0, 0, 0] }
    ],
    title: "Minimum and maximum interest rate: Universe"
  });

  // Transform API data
  const getChartData = () => {
    if (minimumaxir && minimumaxir.graph2_entity && Array.isArray(minimumaxir.graph2_entity)) {
      try {
        const entityData = minimumaxir.graph2_entity;
        const title = minimumaxir.graph2_title || "Minimum and maximum interest rate: Universe";

        const categories = entityData.map(item => item.period);
        const minRates = entityData.map(item => parseFloat(item.min_rate.replace('%', '')));
        const maxRates = entityData.map(item => parseFloat(item.max_rate.replace('%', '')));

        return {
          categories,
          series: [
            { name: "Min", data: minRates },
            { name: "Max", data: maxRates }
          ],
          title
        };
      } catch (error) {
        console.error("❌ Error transforming data:", error);
        return getDefaultData();
      }
    }

    console.log("ℹ️ No valid data, using defaults");
    return getDefaultData();
  };

  const chartData = getChartData();

  const lineChartOptions = {
    chart: {
      type: "line",
      height: 400,
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
      },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350
        }
      }
    },
 title: {
      text: chartData.title,
      align: "left",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
        color: "#263238",
        fontFamily: 'sans-serif'
      }
    },
    colors: ["#2B60AD", "#FFA500"],
    stroke: {
      width: [4, 4],
      curve: "smooth"
    },
    dataLabels: {
      enabled: true,
      offsetX: 2,
      formatter: function (val) {
        return val.toFixed(2) + '%';
      },
      background: {
        enabled: true,
        foreColor: '#fff',
        padding: 2,
        opacity: 0.9,
        borderWidth: 0,
        borderColor: '#fff'
      },
      style: {
        fontSize: '15px',
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
      },
    },
    markers: {
      size: 5,
      colors: ["#2B60AD", "#FFA500"],
      strokeColors: "#fff",
      strokeWidth: 3,
      hover: { size: 7 }
    },
    xaxis: {
      categories: chartData.categories,
      labels: {
        show: true,
        hideOverlappingLabels: true,
        minHeight: 50,
        maxHeight: 50,
        style: {
          fontFamily: 'sans-serif',
          fontSize: '15px',
          fontWeight: 500,
        },
      },
      axisBorder: {
        show: true,
        color: '#d0d0d0',
        offsetX: 0,
        offsetY: 0
      },
      axisTicks: {
        show: true,
        color: '#d0d0d0',
        offsetX: 0,
        offsetY: 0
      }
    },
    yaxis: {
      show: false,
      labels: {
        show: false
      }
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      fontFamily: 'sans-serif',
      fontSize: '15px',
      fontWeight: 500,
      markers: {
        width: 18,
        height: 3,
        radius: 0
      },
      itemMargin: {
        horizontal: 15,
        vertical: 5
      }
    },
    grid: {
      show: false,
      padding: {
        left: 38,
        right: 35,
        top: 15,
        bottom: 15
      }
    },
    tooltip: {
      enabled: true,
      shared: true,
      intersect: false,
      style: {
        fontSize: "12px",
        fontFamily: 'sans-serif'
      },
      y: {
        formatter: val => val.toFixed(2) + '%'
      }
    }
  };

  return (
    <Box width="100%" sx={{
      p: 2,
      overflow: 'hidden',
      position: 'relative'
    }}>
      <ReactApexChart
        options={lineChartOptions}
        series={chartData.series}
        type="line"
        height={400}
      />
    </Box>
  );
};

export default MinimumMaximumInterestRateIndustry;