
// new code sushrut pandey

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

const CBDataAcceptanceSmtbMemberGraph = ({ data }) => {
  console.log("data in CBDataAcceptanceSmtbMemberGraph hasan razzaue", data);


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

  var rows = dummyRows;
  if (data && data.data && Array.isArray(data.data) && data.data.length > 0) {
    rows = data.data;
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

var titleName = "Member";
if (data && data.member) {
    titleName = data.member;
}

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

  // EXACTLY SAME AS INDUSTRY GRAPH OPTIONS
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
      offsetY: -10, // SAME AS INDUSTRY
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
        colors: ["#000000"] // SAME AS INDUSTRY
      },
      background: {
        enabled: false, // SAME AS INDUSTRY
      },
      dropShadow: {
        enabled: false // SAME AS INDUSTRY
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
      text: "Data submission count & acceptance rate - " + titleName,
      align: "left",
      style: { 
        fontSize: "16px", 
        fontWeight: "bold",
        color: "#333" // SAME AS INDUSTRY
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
        show: false, // SAME AS INDUSTRY
      },
      axisTicks: {
        show: false, // SAME AS INDUSTRY
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
        formatter: function(value, { seriesIndex }) {
          if (seriesIndex === 0) {
            return number_format(value) + "Lk";
          } else {
            return value.toFixed(2) + "%";
          }
        }
      }
    },

    // SAME GRID SETTINGS AS INDUSTRY
    grid: {
      show: false,
      padding: {
        top: 20,
        right: 20,
        bottom: 20,
        left: 30 // SAME AS INDUSTRY
      }
    }
  };

  // SAME CARD STYLING AS INDUSTRY
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

export default CBDataAcceptanceSmtbMemberGraph;