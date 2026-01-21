// import React, { useEffect, useState } from "react";
// import { Box } from "@mui/material";
// import ReactApexChart from "react-apexcharts";

// const AvgTrendMember = ({ garph56ir }) => {
//   const [chartData, setChartData] = useState({
//     categories: [],
//     series: []
//   });

//   // Process API data when it changes
//   useEffect(() => {
//     console.log("🎯 WT AVG TREND CHART - Processing data:", garph56ir);

//     if (!garph56ir || !garph56ir.graph5 || garph56ir.graph5.length === 0) {
//       console.log("📊 No data available, using default static data");
//       // Default static data when no API data - ALL VALUES SET TO 0
//       setChartData({
//         categories: ["Q3 FY 24-25", "Q4 FY 24-25", "Q1 FY 25-26", "Q2 FY 25-26"],
//         series: [
//           { name: "NBFC-MFI", data: [0, 0, 0, 0] },
//           { name: "Bank", data: [0, 0, 0, 0] },
//           { name: "SFB", data: [0, 0, 0, 0] },
//           { name: "NBFC", data: [0, 0, 0, 0] }
//         ]
//       });
//       return;
//     }

//     try {
//       console.log("🔍 Checking graph5 structure:", garph56ir.graph5);
      
//       // Get all unique periods from the first entity's trend_data
//       let periods = [];
//       if (garph56ir.graph5[0] && garph56ir.graph5[0].trend_data) {
//         periods = garph56ir.graph5[0].trend_data.map(function (item) {
//           return item.period;
//         });
//       }

//       console.log("📅 Periods extracted:", periods);
      
//       // Create series for each entity_type
//       const series = garph56ir.graph5.map(entity => {
//         console.log("📊 Processing entity:", entity.entity_type);
        
//         let data = [];
//         if (entity && entity.trend_data) {
//           console.log("📈 Trend data for", entity.entity_type, ":", entity.trend_data);
          
//           data = entity.trend_data.map(item => {
//             const wirrStr = item.wirr || "0.00%";
//             const rate = parseFloat(wirrStr.replace('%', ''));
//             const result = isNaN(rate) ? 0 : rate;
//             console.log(`  ${item.period}: ${wirrStr} -> ${result}`);
//             return result;
//           });
//         }
        
//         return {
//           name: entity.entity_type || 'Unknown',
//           data: data
//         };
//       });

//       console.log("✅ Final chart data:", { 
//         categories: periods, 
//         series: series,
//         seriesLengths: series.map(s => s.data.length)
//       });
      
//       setChartData({
//         categories: periods,
//         series: series
//       });
//     } catch (error) {
//       console.error("❌ Error processing chart data:", error);
//       // Fallback to static data - ALL VALUES SET TO 0
//       setChartData({
//         categories: ["Q3 FY 24-25", "Q4 FY 24-25", "Q1 FY 25-26", "Q2 FY 25-26"],
//         series: [
//           { name: "NBFC-MFI", data: [0, 0, 0, 0] },
//           { name: "Bank", data: [0, 0, 0, 0] },
//           { name: "SFB", data: [0, 0, 0, 0] },
//           { name: "NBFC", data: [0, 0, 0, 0] }
//         ]
//       });
//     }
//   }, [garph56ir]);

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
//       },
//       fontFamily: 'sans-serif',
//     },
//     title: {
//       text: "Weightage Average Trend",
//       align: "left",
//       style: { 
//         fontSize: "16px", 
//         fontWeight: "bold", 
//         color: "#263238",
//         fontFamily: 'sans-serif'
//       },
//     },
    
//     colors: ["#2B60AD", "#FFA500", "#B853A0","#ED1590"]
// ,


//     stroke: {
//       curve: "smooth",
//       width: 3
//     },
//     markers: {
//       size: 5,
//     colors: ["#2B60AD", "#FFA500", "#B853A0","#ED1590"]
      
//       ,
//       strokeColors: "#fff",
//       strokeWidth: 2,
//       hover: {
//         size: 7
//       }
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
//       axisBorder: {
//         show: true,
//         color: '#d0d0d0'
//       },
//       axisTicks: {
//         show: true,
//         color: '#d0d0d0'
//       }
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
//         left: 30,   // Prevents left side cutting
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
//         formatter: function(value) {
//           return value.toFixed(2) + "%";
//         }
//       }
//     },
//     dataLabels: {
//       enabled: true,
//       style: {
//         fontSize: "11px",
//         fontFamily: 'sans-serif',
//         fontWeight: "bold",
//         colors: undefined
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
//       },
//       formatter: function(val) {
//         return val.toFixed(2) + "%";
//       },
//       offsetY: -8
//     }
//   };

//   return (
//     <Box width="100%" sx={{ 
//       p: 2,
//       overflow: 'hidden'
//     }}>
//       {chartData.categories.length > 0 ? (
//         <ReactApexChart
//           options={lineChartOptions}
//           series={chartData.series}
//           type="line"
//           height={400}
//         />
//       ) : (
//         <Box sx={{ padding: 4, textAlign: 'center' }}>
//           <p>Loading chart data...</p>
//         </Box>
//       )}
//     </Box>
//   );
// };



// export default AvgTrendMember;

// import React, { useEffect, useState } from "react";
// import { Box } from "@mui/material";
// import ReactApexChart from "react-apexcharts";

// const AvgTrendMember = ({ garph56ir }) => {
//   const [chartData, setChartData] = useState({
//     categories: [],
//     series: []
//   });

//   // Process API data when it changes
//   useEffect(() => {
//     console.log("🎯 WT AVG TREND CHART - Processing data:", garph56ir);

//     if (!garph56ir || !garph56ir.graph5 || garph56ir.graph5.length === 0) {
//       console.log("📊 No data available, using default static data");
//       // Default static data when no API data - ALL VALUES SET TO 0
//       setChartData({
//         categories: ["Q3 FY 24-25", "Q4 FY 24-25", "Q1 FY 25-26", "Q2 FY 25-26"],
//         series: [
//           { name: "NBFC-MFI", data: [0, 0, 0, 0] },
//           { name: "Bank", data: [0, 0, 0, 0] },
//           { name: "SFB", data: [0, 0, 0, 0] },
//           { name: "NBFC", data: [0, 0, 0, 0] }
//         ]
//       });
//       return;
//     }

//     try {
//       console.log("🔍 Checking graph5 structure:", garph56ir.graph5);
      
//       // Get all unique periods from the first entity's trend_data
//       let periods = [];
//       if (garph56ir.graph5[0] && garph56ir.graph5[0].trend_data) {
//         periods = garph56ir.graph5[0].trend_data.map(function (item) {
//           return item.period;
//         });
//       }

//       console.log("📅 Periods extracted:", periods);
      
//       // Create series for each entity_type
//       const series = garph56ir.graph5.map(entity => {
//         console.log("📊 Processing entity:", entity.entity_type);
        
//         let data = [];
//         if (entity && entity.trend_data) {
//           console.log("📈 Trend data for", entity.entity_type, ":", entity.trend_data);
          
//           data = entity.trend_data.map(item => {
//             const wirrStr = item.wirr || "0.00%";
//             const rate = parseFloat(wirrStr.replace('%', ''));
//             const result = isNaN(rate) ? 0 : rate;
//             console.log(`  ${item.period}: ${wirrStr} -> ${result}`);
//             return result;
//           });
//         }
        
//         return {
//           name: entity.entity_type || 'Unknown',
//           data: data
//         };
//       });

//       console.log("✅ Final chart data:", { 
//         categories: periods, 
//         series: series,
//         seriesLengths: series.map(s => s.data.length)
//       });
      
//       setChartData({
//         categories: periods,
//         series: series
//       });
//     } catch (error) {
//       console.error("❌ Error processing chart data:", error);
//       // Fallback to static data - ALL VALUES SET TO 0
//       setChartData({
//         categories: ["Q3 FY 24-25", "Q4 FY 24-25", "Q1 FY 25-26", "Q2 FY 25-26"],
//         series: [
//           { name: "NBFC-MFI", data: [0, 0, 0, 0] },
//           { name: "Bank", data: [0, 0, 0, 0] },
//           { name: "SFB", data: [0, 0, 0, 0] },
//           { name: "NBFC", data: [0, 0, 0, 0] }
//         ]
//       });
//     }
//   }, [garph56ir]);

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
//       },
//       fontFamily: 'sans-serif',
//     },
//     title: {
//       text: "Weightage Average Trend",
//       align: "left",
//       style: { 
//         fontSize: "16px", 
//         fontWeight: "bold", 
//         color: "#263238",
//         fontFamily: 'sans-serif'
//       },
//     },
    
//     colors: ["#2B60AD", "#FFA500", "#B853A0","#ED1590"],

//   stroke: {
//   width: [6, 6],   // 👈 yahan 3 ki jagah 6 ya 7 karo
//   curve: "smooth"
// },

//     markers: {
//       size: 5,
//       colors: ["#2B60AD", "#FFA500", "#B853A0","#ED1590"],
//       strokeColors: "#fff",
//       strokeWidth: 2,
//       hover: {
//         size: 7
//       }
//     },
//     xaxis: {
//       categories: chartData.categories,
//       labels: {
//         rotate: 0,
//         rotateAlways: false,
//         hideOverlappingLabels: false,
//         trim: false,
//         style: {
//           fontSize: "12px",
//           fontFamily: 'sans-serif',
//           colors: "#444",
//           fontWeight: 500
//         },
//         offsetY: 0
//       },
//       axisBorder: {
//         show: true,
//         color: '#d0d0d0',
//         offsetY: 0
//       },
//       axisTicks: {
//         show: true,
//         color: '#d0d0d0'
//       },
//       tickPlacement: 'on'
//     },
//     yaxis: {
//       show: false,
//       labels: {
//         show: false
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
//         left: 35,
//         right: 30,
//         top: 20,
//         bottom: 10
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
//         formatter: function(value) {
//           return value.toFixed(2) + "%";
//         }
//       }
//     },
//     dataLabels: {
//       enabled: true,
//       enabledOnSeries: undefined,
//       textAnchor: 'middle',
//       distributed: false,
//       offsetX: 0,
//       offsetY: -10,
//       style: {
//         fontSize: "10px",
//         fontFamily: 'sans-serif',
//         fontWeight: "600",
//         colors: undefined
//       },
//       background: {
//         enabled: true,
//         foreColor: '#fff',
//         borderRadius: 2,
//         padding: 3,
//         opacity: 0.85,
//         borderWidth: 0,
//         dropShadow: {
//           enabled: false
//         }
//       },
//       formatter: function(val, opts) {
//         // Show all labels on all points
//         return val.toFixed(2) + "%";
//       }
//     }
//   };

//   return (
//     <Box width="100%" sx={{ 
//       p: 2,
//       overflow: 'hidden'
//     }}>
//       {chartData.categories.length > 0 ? (
//         <ReactApexChart
//           options={lineChartOptions}
//           series={chartData.series}
//           type="line"
//           height={400}
//         />
//       ) : (
//         <Box sx={{ padding: 4, textAlign: 'center' }}>
//           <p>Loading chart data...</p>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default AvgTrendMember;


import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import ReactApexChart from "react-apexcharts";

const AvgTrendMember = ({ garph56ir }) => {
  const [chartData, setChartData] = useState({
    categories: [],
    series: []
  });

  // Process API data when it changes
  useEffect(() => {
    console.log("🎯 WT AVG TREND CHART - Processing data:", garph56ir);

    if (!garph56ir || !garph56ir.graph5 || garph56ir.graph5.length === 0) {
      console.log("📊 No data available, using default static data");
      // Default static data when no API data - ALL VALUES SET TO 0
      setChartData({
        categories: ["Q3 FY 24-25", "Q4 FY 24-25", "Q1 FY 25-26", "Q2 FY 25-26"],
        series: [
          { name: "NBFC-MFI", data: [0, 0, 0, 0] },
          { name: "Bank", data: [0, 0, 0, 0] },
          { name: "SFB", data: [0, 0, 0, 0] },
          { name: "NBFC", data: [0, 0, 0, 0] }
        ]
      });
      return;
    }

    try {
      console.log("🔍 Checking graph5 structure:", garph56ir.graph5);
      
      // Get all unique periods from the first entity's trend_data
      let periods = [];
      if (garph56ir.graph5[0] && garph56ir.graph5[0].trend_data) {
        periods = garph56ir.graph5[0].trend_data.map(function (item) {
          return item.period;
        });
      }

      console.log("📅 Periods extracted:", periods);
      
      // Create series for each entity_type
      const series = garph56ir.graph5.map(entity => {
        console.log("📊 Processing entity:", entity.entity_type);
        
        let data = [];
        if (entity && entity.trend_data) {
          console.log("📈 Trend data for", entity.entity_type, ":", entity.trend_data);
          
          data = entity.trend_data.map(item => {
            const wirrStr = item.wirr || "0.00%";
            const rate = parseFloat(wirrStr.replace('%', ''));
            const result = isNaN(rate) ? 0 : rate;
            console.log(`  ${item.period}: ${wirrStr} -> ${result}`);
            return result;
          });
        }
        
        return {
          name: entity.entity_type || 'Unknown',
          data: data
        };
      });

      console.log("✅ Final chart data:", { 
        categories: periods, 
        series: series,
        seriesLengths: series.map(s => s.data.length)
      });
      
      setChartData({
        categories: periods,
        series: series
      });
    } catch (error) {
      console.error("❌ Error processing chart data:", error);
      // Fallback to static data - ALL VALUES SET TO 0
      setChartData({
        categories: ["Q3 FY 24-25", "Q4 FY 24-25", "Q1 FY 25-26", "Q2 FY 25-26"],
        series: [
          { name: "NBFC-MFI", data: [0, 0, 0, 0] },
          { name: "Bank", data: [0, 0, 0, 0] },
          { name: "SFB", data: [0, 0, 0, 0] },
          { name: "NBFC", data: [0, 0, 0, 0] }
        ]
      });
    }
  }, [garph56ir]);

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
    title: {
      text: "Weightage Average Trend",
      align: "left",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
        color: "#263238",
        fontFamily: 'sans-serif'
      }
    },
    colors: ["#2B60AD", "#FFA500", "#B853A0","#ED1590"],
    stroke: {
      width: [4, 4, 4, 4],
      curve: "smooth"
    },
    markers: {
      size: 5,
      colors: ["#2B60AD", "#FFA500", "#B853A0","#ED1590"],
      strokeColors: "#fff",
      strokeWidth: 3,
      hover: {
        size: 7
      }
    },
    xaxis: {
      categories: chartData.categories,
      labels: {
        show: true,
        rotate: 0,
        rotateAlways: false,
        hideOverlappingLabels: true,
        minHeight: 50,
        maxHeight: 50,
        trim: false,
        style: {
          fontFamily: 'sans-serif',
          fontSize: '15px',
          fontWeight: 500,
        },
        offsetY: 0
      },
      axisBorder: {
        show: true,
        color: '#d0d0d0',
        offsetY: 0
      },
      axisTicks: {
        show: true,
        color: '#d0d0d0'
      },
      tickPlacement: 'on'
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
        left: 40,
        right: 35,
        top: 20,
        bottom: 10
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
        formatter: function(value) {
          return value.toFixed(2) + "%";
        }
      }
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: undefined,
      textAnchor: 'middle',
      distributed: false,
      offsetX: 2,
      offsetY: -10,
      formatter: function(val, opts) {
        return val.toFixed(2) + "%";
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
    }
  };

  return (
    <Box width="100%" sx={{ 
      p: 2,
      overflow: 'hidden'
    }}>
      {chartData.categories.length > 0 ? (
        <ReactApexChart
          options={lineChartOptions}
          series={chartData.series}
          type="line"
          height={400}
        />
      ) : (
        <Box sx={{ padding: 4, textAlign: 'center' }}>
          <p>Loading chart data...</p>
        </Box>
      )}
    </Box>
  );
};

export default AvgTrendMember;