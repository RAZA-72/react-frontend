import React from "react";
import { Card, CardContent, CardActionArea } from "@mui/material";
import ReactApexChart from "react-apexcharts";

const EBMonthlyEnquirynhitIndustryGp = ({ ebIndustryInquiryGData, ebentity }) => {
  console.log(
    "ebIndustryInquiryGData",
    ebIndustryInquiryGData
  );

  // Check if data is empty or not available
  const hasData =
    ebIndustryInquiryGData &&
    ebIndustryInquiryGData.data &&
    ((ebIndustryInquiryGData.data.total_enquiries &&
      ebIndustryInquiryGData.data.total_enquiries.some((val) => val > 0)) ||
      (ebIndustryInquiryGData.data.total_hit_volumes &&
        ebIndustryInquiryGData.data.total_hit_volumes.some((val) => val > 0)));

  // If no data, show "No Data Available" message
  if (!hasData) {
    return (
      <Card
        style={{
          paddingBottom: "20px",
          marginTop: "20px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          borderRadius: "8px",
          minHeight: "500px",
        }}
      >
        <CardActionArea>
          <CardContent>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "450px",
                fontSize: "18px",
                color: "#6b7280",
                fontFamily: "Arial, sans-serif",
              }}
            >
              No Data Available
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }

  const fallbackHeadings = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const fallbackSeries = [
    {
      name: "Total Enquiries",
      type: "bar",
      data: new Array(fallbackHeadings.length).fill(0),
    },
    {
      name: "Total Hit Volumes",
      type: "bar",
      data: new Array(fallbackHeadings.length).fill(0),
    },
    {
      name: "Hit Volumes Proportion (%)",
      type: "line",
      data: new Array(fallbackHeadings.length).fill(0),
    },
  ];

  const categories =
    ebIndustryInquiryGData && ebIndustryInquiryGData.headings
      ? ebIndustryInquiryGData.headings
      : fallbackHeadings;

  const totalEnquiries =
    ebIndustryInquiryGData &&
      ebIndustryInquiryGData.data &&
      ebIndustryInquiryGData.data.total_enquiries
      ? ebIndustryInquiryGData.data.total_enquiries
      : fallbackSeries[0].data;

  const totalHitVolumes =
    ebIndustryInquiryGData &&
      ebIndustryInquiryGData.data &&
      ebIndustryInquiryGData.data.total_hit_volumes
      ? ebIndustryInquiryGData.data.total_hit_volumes
      : fallbackSeries[1].data;

  const hitVolumesProportionRaw =
    ebIndustryInquiryGData &&
      ebIndustryInquiryGData.data &&
      ebIndustryInquiryGData.data.hit_volumes_proportion
      ? ebIndustryInquiryGData.data.hit_volumes_proportion
      : fallbackSeries[2].data;

  // FIXED: Just extract the numeric percentage values - no scaling needed
  const hitVolumesProportion = hitVolumesProportionRaw.map(function (val) {
    var percent =
      typeof val === "string" ? parseFloat(val.replace("%", "")) : val;
    return percent;
  });

  const series = [
    {
      name: "Total Enquiries",
      type: "bar",
      data: totalEnquiries,
    },
    {
      name: "Total Hit Volumes",
      type: "bar",
      data: totalHitVolumes,
    },
    {
      name: "Hit Volumes Proportion",
      type: "line",
      data: hitVolumesProportion,
    },
  ];

  const options = {
    chart: {
      type: "line",
      height: 500,
      toolbar: {
        show: true,
        tools: {
          download: true,
          selection: false,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: false,
          reset: true,
        },
      },
    },
    colors: ["#39B1AC", "#2B60AD", "#B853A0"],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "45%",
        endingShape: "rounded",
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [0, 1, 2],
      formatter: function (val, opts) {
        const seriesIndex = opts.seriesIndex;
        if (seriesIndex === 2) {
          // Return the original percentage string with % symbol
          return hitVolumesProportionRaw[opts.dataPointIndex] || "";
        }
        return val === 0 ? "" : new Intl.NumberFormat("en-IN").format(val);
      },
      style: {
        fontSize: "11px",
        fontFamily: "Arial, sans-serif",
        fontWeight: "600",
        colors: ["#000"],
      },
      offsetY: -20,
      background: {
        enabled: false,
      },
    },
    stroke: {
      show: true,
      width: [0, 0, 4],
      curve: "smooth",
    },
    markers: {
      size: [0, 0, 6],
      colors: ["#39B1AC", "#2B60AD", "#B853A0"],
      strokeColors: "#fff",
      strokeWidth: 3,
      hover: {
        size: 8,
      },
    },
    title: {
      text: `Monthly Total Enquiries and Hit Volumes - ${ebentity || "Universe"}`,
      align: "left",
      style: {
        fontSize: "18px",
        fontWeight: "600",
        color: "#1f2937",
        fontFamily: "Arial, sans-serif",
      },
    },
    xaxis: {
      categories: categories,
      labels: {
        show: true,
        style: {
          fontSize: "13px",
          fontFamily: "Arial, sans-serif",
          fontWeight: 500,
          colors: "#374151",
        },
      },
      axisBorder: {
        show: true,
        color: "#d1d5db",
      },
      axisTicks: {
        show: true,
        color: "#d1d5db",
      },
    },
    yaxis: [
      {
        // Primary Y-axis for bars
        seriesName: "Total Enquiries",
        labels: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      {
        // Secondary Y-axis for second bar series
        seriesName: "Total Hit Volumes",
        show: false,
        labels: {
          show: false,
        },
      },
      {
        // Third Y-axis for percentage line (0-100 scale)
        opposite: true,
        seriesName: "Hit Volumes Proportion",
        min: 0,
        max: 100,
        labels: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
    ],
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      fontFamily: "Arial, sans-serif",
      fontSize: "14px",
      fontWeight: 500,
      markers: {
        width: 12,
        height: 12,
        radius: 6,
      },
      itemMargin: {
        horizontal: 20,
        vertical: 10,
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (val, opts) {
          const seriesIndex = opts.seriesIndex;
          if (seriesIndex === 2) {
            // Show percentage in tooltip
            return hitVolumesProportionRaw[opts.dataPointIndex] || "";
          }
          return new Intl.NumberFormat("en-IN").format(val);
        },
      },
    },
    grid: {
      borderColor: "#e5e7eb",
      show: false,
      strokeDashArray: 0,
      padding: {
        top: 30,
        right: 30,
        bottom: 10,
        left: 20,
      },
    },
    fill: {
      opacity: 1,
    },
  };

  return (
    <Card
      style={{
        paddingBottom: "20px",
        marginTop: "20px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        borderRadius: "8px",
      }}
    >
      <CardActionArea>
        <CardContent>
          <ReactApexChart
            options={options}
            series={series}
            type="line"
            height={500}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default EBMonthlyEnquirynhitIndustryGp;