// import React from "react";
// import { Box, Typography } from "@mui/material";
// import ReactApexChart from "react-apexcharts";

// const MinimumMaximumIntrestRateMember = ({ minimumaxir }) => {
//   console.log("🎯 MINIMUM MAXIMUM INTEREST RATE CHART - MEMBER");
//   console.log("📊 Received minimumaxir:", minimumaxir);

//   // Default static data
//   const getDefaultData = () => ({
//     categories: ["Apr", "May", "June", "July", "Aug", "Sep"],
//     series: [
//       { name: "Min", data: [0, 0, 0, 0, 0, 0] },
//       { name: "Max", data: [0, 0, 0, 0, 0, 0] }
//     ],
//     title: "Minimum and maximum interest rate: Member"
//   });

//   // Transform API data
//   const getChartData = () => {
//     if (minimumaxir && minimumaxir.graph1_member && Array.isArray(minimumaxir.graph1_member)) {
//       try {
//         const memberData = minimumaxir.graph1_member;
//         const title = minimumaxir.graph1_title || "Minimum and maximum interest rate: Member";

//         // Extract periods and keep rates as numbers (not decimals)
//         const categories = memberData.map(item => item.period);
//         const minRates = memberData.map(item => parseFloat(item.min_rate.replace('%', '')));
//         const maxRates = memberData.map(item => parseFloat(item.max_rate.replace('%', '')));

//         console.log("✅ Transformed categories:", categories);
//         console.log("✅ Transformed min rates:", minRates);
//         console.log("✅ Transformed max rates:", maxRates);

//         return {
//           categories,
//           series: [
//             { name: "Min", data: minRates },
//             { name: "Max", data: maxRates }
//           ],
//           title
//         };
//       } catch (error) {
//         console.error("❌ Error transforming data:", error);
//         return getDefaultData();
//       }
//     }

//     console.log("ℹ️ No valid data, using defaults");
//     return getDefaultData();
//   };

//   const chartData = getChartData();

//   const lineChartOptions = {
//     chart: {
//       type: "line",
//       height: 400,
//       toolbar: {
//         show: true,
//         tools: {
//           download: true,
//           selection: false,
//           zoom: false,
//           zoomin: false,
//           zoomout: false,
//           pan: false,
//           reset: false
//         }
//       },
//       animations: {
//         enabled: true,
//         easing: 'easeinout',
//         speed: 800,
//         animateGradually: {
//           enabled: true,
//           delay: 150
//         },
//         dynamicAnimation: {
//           enabled: true,
//           speed: 350
//         }
//       }
//     },
//     title: {
//       text: chartData.title,
//       align: "left",
//       style: {
//         fontSize: "16px",
//         fontWeight: "bold",
//         color: "#263238",
//         fontFamily: 'sans-serif'
//       }
//     },
//     colors: ["#2B60AD", "#FFA500"],
// stroke: {
//   width: [6, 6],   // 👈 yahan 3 ki jagah 6 ya 7 karo
//   curve: "smooth"
// },

//     dataLabels: {
//       enabled: true,
//       formatter: function (val) {
//         return val.toFixed(2) + '%';
//       },
//       offsetY: -8,
//       style: {
//         fontSize: "11px",
//         colors: ["#2B60AD", "#FFA500"],
//         fontWeight: "bold",
//         fontFamily: 'sans-serif'
//       },
//       background: {
//         enabled: true,
//         borderColor: null,
//         borderRadius: 3,
//         padding: 4,
//         opacity: 0.9,
//         dropShadow: {
//           enabled: false
//         }
//       }
//     },
//     markers: {
//       size: 5,
//       colors: ["#2B60AD", "#FFA500"],
//       strokeColors: "#fff",
//       strokeWidth: 3,
//       hover: { size: 7 }
//     },
//     xaxis: {
//       categories: chartData.categories,
//       labels: {
//         style: {
//           fontSize: "12px",
//           fontFamily: 'sans-serif',
//           colors: "#444",
//           fontWeight: 500
//         }
//       },
//       axisBorder: { show: true, color: '#d0d0d0' },
//       axisTicks: { show: true, color: '#d0d0d0' }
//     },
//     yaxis: {
//       show: false, // Y-axis को hide कर दिया
//       labels: {
//         show: false // Y-axis labels को भी hide कर दिया
//       }
//     },
//     legend: {
//       position: "bottom",
//       horizontalAlign: "center",
//       fontSize: "14px",
//       fontFamily: 'sans-serif',
//       labels: {
//         colors: "#444",
//         useSeriesColors: false
//       },
//       markers: {
//         width: 18,
//         height: 3,
//         radius: 0
//       },
//       itemMargin: {
//         horizontal: 15,
//         vertical: 5
//       }
//     },
//     grid: {
//       show: false,
//       padding: {
//         left: 35,   // Prevents left side cutting
//         right: 25,  // Prevents right side cutting
//         top: 15,
//         bottom: 15
//       }
//     },

//     tooltip: {
//       enabled: true,
//       shared: true,
//       intersect: false,
//       style: {
//         fontSize: "12px",
//         fontFamily: 'sans-serif'
//       },
//       y: {
//         formatter: function (value) {
//           return value.toFixed(2) + '%';
//         }
//       }
//     }
//   };

//   return (
//     <Box width="100%" sx={{
//       p: 2,
//       overflow: 'hidden'
//     }}>
//       <ReactApexChart options={lineChartOptions} series={chartData.series} type="line" height={400} />
//     </Box>
//   );
// };

// export default MinimumMaximumIntrestRateMember;


import React from "react";
import { Box, Typography } from "@mui/material";
import ReactApexChart from "react-apexcharts";

const MinimumMaximumIntrestRateMember = ({ minimumaxir }) => {
  console.log("🎯 MINIMUM MAXIMUM INTEREST RATE CHART - MEMBER");
  console.log("📊 Received minimumaxir:", minimumaxir);

  // Default static data
  const getDefaultData = () => ({
    categories: ["Apr", "May", "June", "July", "Aug", "Sep"],
    series: [
      { name: "Min", data: [0, 0, 0, 0, 0, 0] },
      { name: "Max", data: [0, 0, 0, 0, 0, 0] }
    ],
    title: "Minimum and maximum interest rate: Member"
  });

  // Transform API data
  const getChartData = () => {
    if (minimumaxir && minimumaxir.graph1_member && Array.isArray(minimumaxir.graph1_member)) {
      try {
        const memberData = minimumaxir.graph1_member;
        const title = minimumaxir.graph1_title || "Minimum and maximum interest rate: Member";

        // Extract periods and keep rates as numbers (not decimals)
        const categories = memberData.map(item => item.period);
        const minRates = memberData.map(item => parseFloat(item.min_rate.replace('%', '')));
        const maxRates = memberData.map(item => parseFloat(item.max_rate.replace('%', '')));

        console.log("✅ Transformed categories:", categories);
        console.log("✅ Transformed min rates:", minRates);
        console.log("✅ Transformed max rates:", maxRates);

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
      axisBorder: { show: true, color: '#d0d0d0' },
      axisTicks: { show: true, color: '#d0d0d0' }
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
        formatter: function (value) {
          return value.toFixed(2) + '%';
        }
      }
    }
  };

  return (
    <Box width="100%" sx={{
      p: 2,
      overflow: 'hidden'
    }}>
      <ReactApexChart options={lineChartOptions} series={chartData.series} type="line" height={400} />
    </Box>
  );
};

export default MinimumMaximumIntrestRateMember;