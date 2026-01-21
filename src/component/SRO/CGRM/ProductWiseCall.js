import React from "react";
import { Box } from "@mui/material";
import ReactApexChart from "react-apexcharts";

const ProductWiseCall = ({ data }) => {
  const staticCategories = ["Query", "Complaint"];
  let series = [];
  const labels = staticCategories;

  if (data && data.chart1 && Array.isArray(data.chart1)) {
    series = staticCategories.map(function (staticLabel) {
      var matchingItem = data.chart1.find(function (item) {
        return item && item.label && item.label.toLowerCase() === staticLabel.toLowerCase();
      });
      if (matchingItem) {
        var perc = matchingItem.percentage
          ? parseFloat(matchingItem.percentage.replace("%", ""))
          : 0;
        return perc < 0.5 && perc > 0 ? 0.5 : perc;  // minimum 0.5 to show slice
      }
      return 0;
    });
  } else {
    series = staticCategories.map(() => 0);
  }

  const pieChartOptions = {
    chart: {
      type: "pie",
      toolbar: { show: true },
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
        animateGradually: { enabled: true, delay: 150 },
        dynamicAnimation: { enabled: true, speed: 350 },
        fontFamily: "sans-serif",
      },
    },
    labels: labels,
    colors: ["#39B1AC", "#2B60AD"],
    title: {
      text: `Nature of calls - ${(data && data.title) || "Universe"}`,
      align: "left",
      style: { fontSize: "16px", fontWeight: "bold", color: "#263238", fontFamily: "sans-serif" },
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      fontSize: "14px",
      fontFamily: "sans-serif",
      labels: { colors: "#444", useSeriesColors: false },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        var category = labels[opts.seriesIndex];
        var matchingItem = data.chart1.find(function (item) {
          return item && item.label && item.label.toLowerCase() === category.toLowerCase();
        });
        var value = matchingItem && matchingItem.value ? matchingItem.value : 0;
        var percentage = matchingItem && matchingItem.percentage ? matchingItem.percentage : "0%";
        return [value, percentage];
      },
      style: { fontSize: "11px", colors: ["#fff"], fontWeight: "bold", fontFamily: "sans-serif" },
      dropShadow: { enabled: true, top: 1, left: 1, blur: 1, color: "#000", opacity: 0.45 },
    },
    tooltip: {
      style: { fontFamily: "sans-serif" },
      y: {
        formatter: function (val, { seriesIndex }) {
          var category = labels[seriesIndex];
          var matchingItem = data.chart1.find(function (item) {
            return item && item.label && item.label.toLowerCase() === category.toLowerCase();
          });
          if (matchingItem && matchingItem.value && matchingItem.percentage) {
            return matchingItem.value + " (" + matchingItem.percentage + ")";
          }
          return val.toFixed(2) + "%";
        },
      },
    },
    plotOptions: {
      pie: {
        dataLabels: { offset: -5, minAngleToShowLabel: 1 }, // minAngleToShowLabel छोटा कर दिया है
      },
    },
  };

  return (
    <Box width="100%">
      <ReactApexChart
        options={pieChartOptions}
        series={series}
        type="pie"
        height={400}
        key={JSON.stringify(data)}
      />
    </Box>
  );
};

export default ProductWiseCall;

