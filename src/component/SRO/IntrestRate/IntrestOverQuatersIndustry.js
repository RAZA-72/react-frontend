import React from "react";
import { Box } from "@mui/material";
import ReactApexChart from "react-apexcharts";

const IntrestOverQuatersIndustry = ({ intretrateir }) => {
  // Default static data with zeros
  const defaultData = {
    entityName: "Universe",
    categories: ["Q1 2023", "Q2 2023", "Q3 2023", "Q4 2023", "Q1 2024"],
    series: [
      {
        name: "Min",
        data: [0, 0, 0, 0, 0]
      },
      {
        name: "Wt Avg",
        data: [0, 0, 0, 0, 0]
      },
      {
        name: "Max",
        data: [0, 0, 0, 0, 0]
      }
    ]
  };

  // Check if dynamic data exists
  const hasDynamicData = intretrateir && 
                         intretrateir.graph4_entity && 
                         intretrateir.graph4_entity.length > 0;

  let entityName = defaultData.entityName;
  let categories = defaultData.categories;
  let series = defaultData.series;

  // Use dynamic data if available
  if (hasDynamicData) {
    // Extract entity name from title
    if (intretrateir.graph4_title && typeof intretrateir.graph4_title === 'string') {
      const parts = intretrateir.graph4_title.split(': ');
      if (parts.length > 1) {
        entityName = parts[1];
      }
    }

    // Process dynamic data for ApexCharts
    categories = intretrateir.graph4_entity.map(item => item.period);
    
    series = [
      {
        name: "Min",
        data: intretrateir.graph4_entity.map(item => {
          const rate = parseFloat(item.min_rate.replace('%', ''));
          return isNaN(rate) ? 0 : rate;
        })
      },
      {
        name: "Wt Avg",
        data: intretrateir.graph4_entity.map(item => {
          const rate = parseFloat(item.wirr.replace('%', ''));
          return isNaN(rate) ? 0 : rate;
        })
      },
      {
        name: "Max",
        data: intretrateir.graph4_entity.map(item => {
          const rate = parseFloat(item.max_rate.replace('%', ''));
          return isNaN(rate) ? 0 : rate;
        })
      }
    ];
  }

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
      },
      fontFamily: 'sans-serif',
    },
    colors: ["#2B60AD", "#FFA500", "#B853A0"],
    stroke: {
      width: [4, 4, 4],
      curve: "smooth"
    },
    title: {
      text: `Interest rates over the quarters: ${entityName}`,
       align: "left",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
        color: "#263238",
        fontFamily: 'sans-serif'
      }
    },
    xaxis: {
      categories: categories,
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
        color: '#d0d0d0'
      },
      axisTicks: {
        show: true,
        color: '#d0d0d0'
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
    dataLabels: {
      enabled: true,
      offsetX: 2,
      formatter: function(val) {
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
    tooltip: {
      enabled: true,
      shared: true,
      intersect: false,
      style: {
        fontSize: "12px",
        fontFamily: 'sans-serif'
      },
      y: {
        formatter: function(val) {
          return val.toFixed(2) + '%';
        }
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
    markers: {
      size: 5,
      colors: ["#2B60AD", "#FFA500", "#B853A0"],
      strokeColors: "#fff",
      strokeWidth: 3,
      hover: {
        size: 7
      }
    }
  };

  return (
    <Box width="100%" sx={{ 
      p: 2,
      overflow: 'hidden'
    }}>
      <ReactApexChart
        options={lineChartOptions}
        series={series}
        type="line"
        height={400}
      />
    </Box>
  );
};

export default IntrestOverQuatersIndustry;