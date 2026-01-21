import React from "react";
import { Card, CardContent, CardActionArea, Box } from "@mui/material";
import ReactApexChart from "react-apexcharts";

const EBCategoryIndustryGp = ({ ebCategoryIndustryGData, ebentity,date }) => {
  console.log("ebCategoryIndustryGData", ebCategoryIndustryGData);

  const fallbackPie = {
    series: [0, 0],
    labels: ["Active", "Other"],
  };

  const fallbackBreakup = {
    Abscoding: 0,
    Deceased: 0,
    Exited: 0,
    Resigned: 0,
    Retired: 0,
    Terminated: 0,
  };

  const { Active, Other, Breakup } =
    (ebCategoryIndustryGData && ebCategoryIndustryGData.data) || {};

      const formatMonthYear = (value) => {
    if (!value) return "";
    const [year, month] = value.split("-");
    const dateObj = new Date(year, month - 1);
    return dateObj.toLocaleString("en-US", {
      month: "short",
      year: "numeric",
    });
  };
  const formattedDate = formatMonthYear(date);

  // ⭐ Convert to 2-decimal numeric values
  const activeValue =
    Active !== undefined && Active !== null
      ? Number(parseFloat(String(Active).replace("%", "")).toFixed(2))
      : 0;

  const otherValue =
    Other !== undefined && Other !== null
      ? Number(parseFloat(String(Other).replace("%", "")).toFixed(2))
      : 0;

  const pieChartData = {
    series:
      ebCategoryIndustryGData && ebCategoryIndustryGData.data
        ? [activeValue, otherValue]
        : fallbackPie.series,
    labels: fallbackPie.labels,
  };

  const pieChartOptions = {
    chart: {
      type: "pie",
      toolbar: {
        show: true,
      },
    },
    labels: pieChartData.labels,

    // Colors
    colors: [
      "#2B60AD",
      "#39B1AC",
      "#69AB44",
      "#FDBF11",
      "#F78F6D",
      "#F05D5F",
      "#B853A0",
      "#ED1590",
      "#BD1E22",
    ],

    title: {
      text: `Employees Category - ${ebentity || "Universe"}  (${formattedDate})`,
      align: "center",
      style: { fontSize: "16px", fontWeight: "bold", color: "#263238" },
    },

    // ⭐⭐ Pie chart 2 decimal fixed ⭐⭐
    dataLabels: {
      enabled: true,
      formatter: (val) => val.toFixed(2) + "%",
      style: {
        fontSize: "12px",
        colors: ["#f2efefff"],
      },
    },

    tooltip: {
      y: {
        formatter: (val) => val.toFixed(2) + "%",
      },
    },

    legend: {
      position: "bottom",
      horizontalAlign: "center",
      fontSize: "14px",
    },
  };

  // Breakup Data
  const effectiveBreakup = Breakup || fallbackBreakup;

  const barChartSeries = Object.entries(effectiveBreakup).map(
    ([name, value]) => ({
      name,
      data: [
        Number(
          parseFloat(String(value).replace("%", "")).toFixed(2)
        ) || 0,
      ],
    })
  );

  const barChartOptions = {
    chart: {
      type: "bar",
      stacked: true,
      toolbar: {
        show: true,
      },
    },
    title: {
      text: 'Breakdown of "Other"',
      align: "center",
      style: {
        fontSize: "14px",
        fontWeight: "bold",
        // color: "#ffffffff",
      },
    },
    grid: { show: false },
    colors: [
      "#2B60AD",
      "#39B1AC",
      "#69AB44",
      "#FDBF11",
      "#F78F6D",
      "#F05D5F",
      "#B853A0",
      "#ED1590",
      "#BD1E22",
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "60%",
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (val) => `${val.toFixed(2)}%`,
      style: {
        fontSize: "12px",
        colors: ["#fff"],
      },
    },
    xaxis: {
      categories: [""],
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: { show: false },
    },
    tooltip: {
      y: {
        formatter: (val) => val.toFixed(2) + "%",
      },
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      fontSize: "12px",
    },
  };

  return (
    <Card style={{ paddingBottom: "20px" }}>
      <CardActionArea>
        <CardContent>
          <Box display="flex" justifyContent="center" alignItems="flex-start">
            {/* Pie Chart */}
            <Box width="60%">
              <ReactApexChart
                options={pieChartOptions}
                series={pieChartData.series}
                type="pie"
                height={350}
              />
            </Box>

            {/* Stacked Bar Chart */}
            <Box width="40%">
              <ReactApexChart
                options={barChartOptions}
                series={barChartSeries}
                type="bar"
                height={330}
              />
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default EBCategoryIndustryGp;
