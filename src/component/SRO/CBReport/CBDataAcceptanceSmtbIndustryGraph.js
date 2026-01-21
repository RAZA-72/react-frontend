import React from "react";
import ReactApexChart from "react-apexcharts";
import { Card, CardContent, CardActionArea } from "@mui/material";

// Number format helper
const number_format = (number) => {
  if (number === null || number === undefined || isNaN(number)) return "0";
  const num = typeof number === "string" ? parseFloat(number) : number;
  if (isNaN(num)) return "0";
  return num.toLocaleString("en-IN", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  });
};

const CBDataAcceptanceIndustryGraph = ({ data }) => {
  console.log("data in CBDataAcceptanceIndustryGraph pandey data", data);

  // -----------------------------
  // ⭐ Dummy Data (for first load)
  // -----------------------------
  const dummyMonths = ["Jan-25", "Feb-25", "Mar-25", "Apr-25", "May-25"];

  var dummyRows = [];
  for (var i = 0; i < dummyMonths.length; i++) {
    dummyRows.push({
      Month: dummyMonths[i],
      Data_Submission_Count_Cr: "0",
      Data_Acceptance_Percent: "0%",
    });
  }

  // -----------------------------------------
  // ⭐ Fallback logic WITHOUT optional chaining
  // -----------------------------------------
  var months = dummyMonths;
  if (data && data.months && Array.isArray(data.months) && data.months.length > 0) {
    months = data.months;
  }

  // ⭐ FIXED - Properly check both data.data and data.graph4_data
  var rows = dummyRows;

  // First try data.data if it has items
  if (data && data.data && Array.isArray(data.data) && data.data.length > 0) {
    rows = data.data;
    console.log("Using data.data, rows count:", rows.length);
  }

  // If data.data was empty or doesn't exist, try graph4_data
  if (rows === dummyRows && data && data.graph4_data && Array.isArray(data.graph4_data) && data.graph4_data.length > 0) {
    rows = data.graph4_data;
    console.log("Using data.graph4_data, rows count:", rows.length);
  }

  if (rows === dummyRows) {
    console.log("Using dummy rows");
  }

  // Extract values
  var submissionCounts = rows.map(function (item) {
    return parseFloat(String(item.Data_Submission_Count_Lk).replace("Lk", "")) || 0;
  });

  var acceptanceRates = rows.map(function (item) {
    return parseFloat(String(item.Data_Acceptance_Percent).replace("%", "")) || 0;
  });

  // Dynamic Y-axis ranges
  var maxSubmission = Math.max.apply(null, submissionCounts.concat([1]));
  var minSubmission = Math.min.apply(null, submissionCounts);

  var maxAcceptance = Math.max.apply(null, acceptanceRates.concat([1]));
  var minAcceptance = Math.min.apply(null, acceptanceRates);

  var computedSubmissionMax = Math.ceil(maxSubmission * 1.1);
  var computedSubmissionMin = Math.max(0, Math.floor(minSubmission * 0.9));

  var computedAcceptanceMax, computedAcceptanceMin;

  if (maxAcceptance - minAcceptance < 5) {
    computedAcceptanceMax = Math.min(100, Math.ceil(maxAcceptance + 0.5));
    computedAcceptanceMin = Math.max(0, Math.floor(minAcceptance - 0.5));
  } else {
    computedAcceptanceMax = Math.min(100, Math.ceil(maxAcceptance * 1.1));
    computedAcceptanceMin = Math.max(0, Math.floor(minAcceptance * 0.9));
  }

  if (computedAcceptanceMin >= computedAcceptanceMax) {
    computedAcceptanceMin = Math.max(0, computedAcceptanceMax - 5);
  }

  // ⭐ FIXED - Get entity from filters object
  // var titleName = "Universe";
  // if (data && data.filters && data.filters.entity) {
  //   titleName = data.filters.entity;
  //   console.log("Entity name from data.filters.entity:", titleName);
  // } else {
  //   console.log("Using default entity name:", titleName);
  // }
  // console.log("Final titleName being used:", titleName);

  var series = [
    {
      name: "Data submission count (Lk)",
      type: "column",
      data: submissionCounts,
    },
    {
      name: "% of Data acceptance",
      type: "line",
      data: acceptanceRates,
    },
  ];

  // UPDATED OPTIONS - ONLY CHANGED DATA LABELS POSITION (MOVED UP)
  var options = {
    chart: {
      type: "line",
      height: 450,
      stacked: false,
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

    colors: ["#1e5a9e", "#e67e22"],

    stroke: {
      width: [0, 4],
      curve: "smooth",
    },

    markers: {
      size: [0, 6],
      strokeColors: ["#1e5a9e", "#e67e22"],
      strokeWidth: 2,
      hover: { size: 8 },
    },

    dataLabels: {
      enabled: true,
      offsetY: -10,
      formatter: function (val, opts) {
        var index = opts.dataPointIndex;
        if (opts.seriesIndex === 0) {
          return val === 0 ? "" : number_format(val);
        } else {
          var rate = acceptanceRates[index] || 0;
          return rate === 0 ? "" : rate.toFixed(2) + "%";
        }
      },
      style: {
        fontSize: "13px",
        fontFamily: "sans-serif",
        fontWeight: "bold",
        colors: ["#000000"]
      },
      background: {
        enabled: false,
      },
      dropShadow: {
        enabled: false
      }
    },

    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "60%",
        endingShape: "rounded",
      },
    },

    title: {
      text: `Data submission count & acceptance rate - ${data.title || "Universe"}`,
      align: "left",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
        color: "#333"
      }
    },

    xaxis: {
      categories: months,
      labels: {
        show: true,
        style: {
          fontSize: "13px",
          fontFamily: "sans-serif",
          fontWeight: 500
        }
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },

    yaxis: [
      {
        show: false,
        min: computedSubmissionMin,
        max: computedSubmissionMax,
      },
      {
        opposite: true,
        show: false,
        min: computedAcceptanceMin,
        max: computedAcceptanceMax,
      },
    ],

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
      shared: true,
      y: {
        formatter: function (value, opts) {
          if (opts.seriesIndex === 0) {
            return number_format(value) + "Lk";
          } else {
            return value.toFixed(2) + "%";
          }
        }
      }
    },

    grid: {
      show: false,
      padding: {
        top: 20,
        right: 20,
        bottom: 20,
        left: 30
      }
    }
  };

  return (
    <Card style={{ paddingBottom: 20, marginTop: 20, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
      <CardActionArea>
        <CardContent>
          <ReactApexChart options={options} series={series} type="line" height={450} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CBDataAcceptanceIndustryGraph;