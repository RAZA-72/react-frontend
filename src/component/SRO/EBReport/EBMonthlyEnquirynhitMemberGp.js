import React from "react";
import { Card, CardContent, CardActionArea } from "@mui/material";
import ReactApexChart from "react-apexcharts";
import number_format from "../../Unqiue/Common_func";

const EBMonthlyEnquirynhitMemberGp = ({ ebMemberInquiryGData }) => {
  console.log("ebMemberInquiryGData", ebMemberInquiryGData);

  // Check if data is empty or not available
  const hasData =
    ebMemberInquiryGData &&
    ebMemberInquiryGData.data &&
    ((ebMemberInquiryGData.data.total_enquiries &&
      ebMemberInquiryGData.data.total_enquiries.some((val) => val > 0)) ||
      (ebMemberInquiryGData.data.total_hit_volumes &&
        ebMemberInquiryGData.data.total_hit_volumes.some((val) => val > 0)));

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
    ebMemberInquiryGData && ebMemberInquiryGData.headings
      ? ebMemberInquiryGData.headings
      : fallbackHeadings;

  const totalEnquiries =
    ebMemberInquiryGData &&
    ebMemberInquiryGData.data &&
    ebMemberInquiryGData.data.total_enquiries
      ? ebMemberInquiryGData.data.total_enquiries
      : fallbackSeries[0].data;

  const totalHitVolumes =
    ebMemberInquiryGData &&
    ebMemberInquiryGData.data &&
    ebMemberInquiryGData.data.total_hit_volumes
      ? ebMemberInquiryGData.data.total_hit_volumes
      : fallbackSeries[1].data;

  const hitVolumesProportionRaw =
    ebMemberInquiryGData &&
    ebMemberInquiryGData.data &&
    ebMemberInquiryGData.data.hit_volumes_proportion
      ? ebMemberInquiryGData.data.hit_volumes_proportion
      : fallbackSeries[2].data;

  // Scale hit volume proportion % into actual numbers for the chart line data
  const hitVolumesProportion = hitVolumesProportionRaw.map((val, index) => {
    const percent = typeof val === "string" ? parseFloat(val.replace("%", "")) : val;
    return Math.round((percent / 100) * totalEnquiries[index]);
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
      height: 450,

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
        columnWidth: "55%",
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
          return hitVolumesProportionRaw[opts.dataPointIndex] || "";
        }
        return val === 0 ? "" : number_format(val);
      },
      style: {
        fontSize: "12px",
        fontFamily: "Arial, sans-serif",
        fontWeight: "600",
        colors: ["#000"],
      },
      offsetY: -25,
      background: {
        enabled: false,
      },
    },
    stroke: {
      show: true,
      width: [0, 0, 3],
      curve: "straight",
    },
    markers: {
      size: [0, 0, 3],
      colors: ["#39B1AC", "#2B60AD", "#B853A0"],
      strokeColors: "#B853A0",
      strokeWidth: 2,
      hover: {
        size: 10,
      },
    },
    title: {
      text: ebMemberInquiryGData.title || "Monthly Total Enquiries and Hit Volumes - Member",
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
    yaxis: {
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
            return hitVolumesProportionRaw[opts.dataPointIndex] || "";
          }
          return number_format(val);
        },
      },
    },
    grid: {
      borderColor: "#e5e7eb",
      show: false,
      strokeDashArray: 0,
      padding: {
        top: 0,
        right: 20,
        bottom: 0,
        left: 10,
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
          <ReactApexChart options={options} series={series} type="line" height={450} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default EBMonthlyEnquirynhitMemberGp;
