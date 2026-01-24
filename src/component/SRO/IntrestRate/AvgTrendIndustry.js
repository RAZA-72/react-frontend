// import React, { useRef } from "react";
// import { Box, IconButton, Tooltip } from "@mui/material";
// import DownloadIcon from '@mui/icons-material/Download';
// import MenuIcon from '@mui/icons-material/Menu';



// const AvgTrendIndustry = ({ garph56ir }) => {
//   const svgRef = useRef(null);

//   // Default static data when no API data
//   const defaultData = [
//     {
//       category: "NBFC-MFI",
//       min: 0,
//       avg: 0,
//       max: 0
//     },
//     {
//       category: "Bank",
//       min: 0,
//       avg: 0,
//       max: 0
//     },
//     {
//       category: "SFB",
//       min: 0,
//       avg: 0,
//       max: 0
//     },
//     {
//       category: "NBFC",
//       min: 0,
//       avg: 0,
//       max: 0
//     }
//   ];

//   // Process API data or use default
//   let data = defaultData;
//   if (garph56ir && garph56ir.graph6 && garph56ir.graph6.length > 0) {
//     data = garph56ir.graph6.map(item => ({
//       category: item.entity_type,
//       min: parseFloat(item.min_rate.replace('%', '')),
//       avg: parseFloat(item.wirr.replace('%', '')),
//       max: parseFloat(item.max_rate.replace('%', ''))
//     }));
//   }

//   const yMin = Math.min(...data.map(item => item.min)) - 2;
//   const yMax = Math.max(...data.map(item => item.max)) + 2;
//   const chartHeight = 270;
//   const chartWidth = 620;
//   const padding = { top: 50, right: 50, bottom: 50, left: 0 };

//   const getYPosition = (value) => {
//     const ratio = (value - yMin) / (yMax - yMin);
//     return chartHeight - (ratio * chartHeight);
//   };

//   const getXPosition = (index) => {
//     const segmentWidth = chartWidth / data.length;
//     return segmentWidth * index + segmentWidth / 2;
//   };

//   // Download SVG as PNG function
//   const downloadChartAsPNG = () => {
//     if (!svgRef.current) return;

//     const svg = svgRef.current;
//     const svgData = new XMLSerializer().serializeToString(svg);
//     const canvas = document.createElement('canvas');
//     const ctx = canvas.getContext('2d');

//     // Set canvas dimensions
//     canvas.width = svg.clientWidth || 800;
//     canvas.height = svg.clientHeight || 400;

//     const img = new Image();
//     const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
//     const url = URL.createObjectURL(svgBlob);

//     img.onload = () => {
//       ctx.fillStyle = 'white';
//       ctx.fillRect(0, 0, canvas.width, canvas.height);
//       ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

//       // Create download link
//       const pngUrl = canvas.toDataURL('image/png');
//       const downloadLink = document.createElement('a');
//       downloadLink.href = pngUrl;
//       downloadLink.download = 'Interest_Rates_Across_Industries.png';
//       document.body.appendChild(downloadLink);
//       downloadLink.click();
//       document.body.removeChild(downloadLink);

//       URL.revokeObjectURL(url);
//     };

//     img.src = url;
//   };

//   // Download as SVG function
//   const downloadChartAsSVG = () => {
//     if (!svgRef.current) return;

//     const svg = svgRef.current;
//     const svgData = new XMLSerializer().serializeToString(svg);
//     const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
//     const svgUrl = URL.createObjectURL(svgBlob);

//     const downloadLink = document.createElement('a');
//     downloadLink.href = svgUrl;
//     downloadLink.download = 'Interest_Rates_Across_Industries.svg';
//     document.body.appendChild(downloadLink);
//     downloadLink.click();
//     document.body.removeChild(downloadLink);

//     URL.revokeObjectURL(svgUrl);
//   };

//   return (
//     <Box sx={{
//       width: '100%',
//       p: 2,
//       backgroundColor: '#ffffff',
//       fontFamily: 'sans-serif',
//       margin: '0 auto',
//       overflow: 'hidden',
//       position: 'relative'
//     }}>
//       {/* Download Button - Top Right */}
//       <Box sx={{
//         position: 'absolute',
//         top: 16,
//         right: 16,
//         zIndex: 1
//       }}>
//         <Tooltip title="Download Chart">
//           <IconButton
//             onClick={downloadChartAsPNG}

//           >
//             <MenuIcon fontSize="small" />
//           </IconButton>
//         </Tooltip>
//       </Box>

//       <Box>
//         <Box sx={{
//           fontSize: '16px',
//           fontWeight: 'bold',
//           mb: 2.5,
//           color: '#263238',
//           textAlign: 'left',
//           pr: 6 // Right padding for download button space
//         }}>
//           Interest rates across industries of the selected quarter
//         </Box>

//         <svg
//           ref={svgRef}
//           width={chartWidth + padding.left + padding.right}
//           height={chartHeight + padding.top + padding.bottom}
//           style={{ overflow: 'visible' }}
//         >
//           {/* Horizontal gridline at bottom */}
//           <line
//             x1={padding.left}
//             y1={padding.top + chartHeight}
//             x2={padding.left + chartWidth}
//             y2={padding.top + chartHeight}
//             stroke="#d0d0d0"
//             strokeWidth="1"
//           />

//           {/* Right Y-axis line */}
//           <line
//             x1={padding.left + chartWidth}
//             y1={padding.top}
//             x2={padding.left + chartWidth}
//             y2={padding.top + chartHeight}
//             stroke="#d0d0d0"
//             strokeWidth="1"
//           />

//           {/* Data points and lines */}
//           {data.map((item, index) => {
//             const x = getXPosition(index);
//             const minY = getYPosition(item.min);
//             const avgY = getYPosition(item.avg);
//             const maxY = getYPosition(item.max);

//             return (
//               <g key={index}>
//                 {/* Vertical line */}
//                 <line
//                   x1={padding.left + x}
//                   y1={padding.top + minY}
//                   x2={padding.left + x}
//                   y2={padding.top + maxY}
//                   stroke="#666666"
//                   strokeWidth="2.5"
//                 />

//                 {/* Max label (red) - top */}
//                 <text
//                   x={padding.left + x}
//                   y={padding.top + maxY - 10}
//                   textAnchor="middle"
//                   fontSize="11px"
//                   fontWeight="bold"
//                   fontFamily="sans-serif"
//                   fill="#FF0000"
//                 >
//                   {item.max.toFixed(2)}%
//                 </text>

//                 {/* Average label (black) - middle, positioned to the LEFT */}
//                 <text
//                   x={padding.left + x - 45}
//                   y={padding.top + avgY + 5}
//                   textAnchor="middle"
//                   fontSize="11px"
//                   fontWeight="bold"
//                   fontFamily="sans-serif"
//                   fill="#2B60AD"
//                 >
//                   {item.avg.toFixed(2)}%
//                 </text>

//                 {/* Min label (blue) - bottom */}
//                 <text
//                   x={padding.left + x}
//                   y={padding.top + minY + 20}
//                   textAnchor="middle"
//                   fontSize="11px"
//                   fontWeight="bold"
//                   fontFamily="sans-serif"
//                   fill="#FFA500"
//                 >
//                   {item.min.toFixed(2)}%
//                 </text>

//                 {/* Category label */}
//                 <text
//                   x={padding.left + x}
//                   y={padding.top + chartHeight + 30}
//                   textAnchor="middle"
//                   fontSize="12px"
//                   fontWeight="500"
//                   fontFamily="sans-serif"
//                   fill="#B853A0"
//                 >

//                   {item.category}
//                 </text>
//               </g>
//             );
//           })}
//         </svg>
//       </Box>
//     </Box>
//   );
// };

// export default AvgTrendIndustry;

// import React, { useRef } from "react";
// import { Box, IconButton, Tooltip } from "@mui/material";
// import DownloadIcon from '@mui/icons-material/Download';
// import MenuIcon from '@mui/icons-material/Menu';



// const AvgTrendIndustry = ({ garph56ir }) => {
//   const svgRef = useRef(null);

//   // Default static data when no API data
//   const defaultData = [
//     {
//       category: "NBFC-MFI",
//       min: 0,
//       avg: 0,
//       max: 0
//     },
//     {
//       category: "Bank",
//       min: 0,
//       avg: 0,
//       max: 0
//     },
//     {
//       category: "SFB",
//       min: 0,
//       avg: 0,
//       max: 0
//     },
//     {
//       category: "NBFC",
//       min: 0,
//       avg: 0,
//       max: 0
//     }
//   ];

//   // Process API data or use default
//   let data = defaultData;
//   if (garph56ir && garph56ir.graph6 && garph56ir.graph6.length > 0) {
//     data = garph56ir.graph6.map(item => ({
//       category: item.entity_type,
//       min: parseFloat(item.min_rate.replace('%', '')),
//       avg: parseFloat(item.wirr.replace('%', '')),
//       max: parseFloat(item.max_rate.replace('%', ''))
//     }));
//   }

//   const yMin = Math.min(...data.map(item => item.min)) - 2;
//   const yMax = Math.max(...data.map(item => item.max)) + 2;
//   const chartHeight = 270;
//   const chartWidth = 620;
//   const padding = { top: 50, right: 50, bottom: 50, left: 0 };

//   const getYPosition = (value) => {
//     const ratio = (value - yMin) / (yMax - yMin);
//     return chartHeight - (ratio * chartHeight);
//   };

//   const getXPosition = (index) => {
//     const segmentWidth = chartWidth / data.length;
//     return segmentWidth * index + segmentWidth / 2;
//   };

//   // Download SVG as PNG function
//   const downloadChartAsPNG = () => {
//     if (!svgRef.current) return;

//     const svg = svgRef.current;
//     const svgData = new XMLSerializer().serializeToString(svg);
//     const canvas = document.createElement('canvas');
//     const ctx = canvas.getContext('2d');

//     // Set canvas dimensions
//     canvas.width = svg.clientWidth || 800;
//     canvas.height = svg.clientHeight || 400;

//     const img = new Image();
//     const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
//     const url = URL.createObjectURL(svgBlob);

//     img.onload = () => {
//       ctx.fillStyle = 'white';
//       ctx.fillRect(0, 0, canvas.width, canvas.height);
//       ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

//       // Create download link
//       const pngUrl = canvas.toDataURL('image/png');
//       const downloadLink = document.createElement('a');
//       downloadLink.href = pngUrl;
//       downloadLink.download = 'Interest_Rates_Across_Industries.png';
//       document.body.appendChild(downloadLink);
//       downloadLink.click();
//       document.body.removeChild(downloadLink);

//       URL.revokeObjectURL(url);
//     };

//     img.src = url;
//   };

//   // Download as SVG function
//   const downloadChartAsSVG = () => {
//     if (!svgRef.current) return;

//     const svg = svgRef.current;
//     const svgData = new XMLSerializer().serializeToString(svg);
//     const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
//     const svgUrl = URL.createObjectURL(svgBlob);

//     const downloadLink = document.createElement('a');
//     downloadLink.href = svgUrl;
//     downloadLink.download = 'Interest_Rates_Across_Industries.svg';
//     document.body.appendChild(downloadLink);
//     downloadLink.click();
//     document.body.removeChild(downloadLink);

//     URL.revokeObjectURL(svgUrl);
//   };

//   return (
//     <Box sx={{
//       width: '100%',
//       p: 2,
//       backgroundColor: '#ffffff',
//       fontFamily: 'sans-serif',
//       margin: '0 auto',
//       overflow: 'hidden',
//       position: 'relative'
//     }}>
//       {/* Download Button - Top Right */}
//       <Box sx={{
//         position: 'absolute',
//         top: 16,
//         right: 16,
//         zIndex: 1
//       }}>
//         <Tooltip title="Download Chart">
//           <IconButton
//             onClick={downloadChartAsPNG}

//           >
//             <MenuIcon fontSize="small" />
//           </IconButton>
//         </Tooltip>
//       </Box>

//       <Box>
//         <Box sx={{
//           fontSize: '16px',
//           fontWeight: 'bold',
//           mb: 2.5,
//           color: '#263238',
//           textAlign: 'left',
//           pr: 6 // Right padding for download button space
//         }}>
//           Interest rates across industries of the selected quarter
//         </Box>

//         <svg
//           ref={svgRef}
//           width={chartWidth + padding.left + padding.right}
//           height={chartHeight + padding.top + padding.bottom}
//           style={{ overflow: 'visible' }}
//         >
//           {/* Horizontal gridline at bottom */}
//           <line
//             x1={padding.left}
//             y1={padding.top + chartHeight}
//             x2={padding.left + chartWidth}
//             y2={padding.top + chartHeight}
//             stroke="#d0d0d0"
//             strokeWidth="1"
//           />

//           {/* Right Y-axis line */}
//           <line
//             x1={padding.left + chartWidth}
//             y1={padding.top}
//             x2={padding.left + chartWidth}
//             y2={padding.top + chartHeight}
//             stroke="#d0d0d0"
//             strokeWidth="1"
//           />

//           {/* Data points and lines */}
//           {data.map((item, index) => {
//             const x = getXPosition(index);
//             const minY = getYPosition(item.min);
//             const avgY = getYPosition(item.avg);
//             const maxY = getYPosition(item.max);

//             return (
//               <g key={index}>
//                 {/* Vertical line */}
//                 <line
//                   x1={padding.left + x}
//                   y1={padding.top + minY}
//                   x2={padding.left + x}
//                   y2={padding.top + maxY}
//                   stroke="#666666"
//                   strokeWidth="2.5"
//                 />

//                 {/* Max label - top */}
//                 <text
//                   x={padding.left + x}
//                   y={padding.top + maxY - 10}
//                   textAnchor="middle"
//                   fontSize="11px"
//                   fontWeight="bold"
//                   fontFamily="sans-serif"
//                   fill="#2B60AD"
//                 >
//                   {item.max.toFixed(2)}%
//                 </text>

//                 {/* Average label - middle, positioned to the LEFT */}
//                 <text
//                   x={padding.left + x - 45}
//                   y={padding.top + avgY + 5}
//                   textAnchor="middle"
//                   fontSize="11px"
//                   fontWeight="bold"
//                   fontFamily="sans-serif"
//                   fill="#39B1AC"
//                 >
//                   {item.avg.toFixed(2)}%
//                 </text>

//                 {/* Min label - bottom */}
//                 <text
//                   x={padding.left + x}
//                   y={padding.top + minY + 20}
//                   textAnchor="middle"
//                   fontSize="11px"
//                   fontWeight="bold"
//                   fontFamily="sans-serif"
//                   fill="#B853A0"
//                 >
//                   {item.min.toFixed(2)}%
//                 </text>

//                 {/* Category label */}
//                 <text
//                   x={padding.left + x}
//                   y={padding.top + chartHeight + 30}
//                   textAnchor="middle"
//                   fontSize="12px"
//                   fontWeight="500"
//                   fontFamily="sans-serif"
//                   fill="#444"
//                 >

//                   {item.category}
//                 </text>
//               </g>
//             );
//           })}
//         </svg>
//       </Box>
//     </Box>
//   );
// };

// export default AvgTrendIndustry;

// import React, { useRef } from "react";
// import { Box, IconButton, Tooltip } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";

// const AvgTrendIndustry = ({ garph56ir }) => {
//   const svgRef = useRef(null);

//   const defaultData = [
//     { category: "NBFC-MFI", min: 0, avg: 0, max: 0 },
//     { category: "Bank", min: 0, avg: 0, max: 0 },
//     { category: "SFB", min: 0, avg: 0, max: 0 },
//     { category: "NBFC", min: 0, avg: 0, max: 0 }
//   ];

//   let data = defaultData;

//   if (garph56ir && garph56ir.graph6 && garph56ir.graph6.length > 0) {
//     data = garph56ir.graph6.map(item => ({
//       category: item.entity_type || "",
//       min: parseFloat((item.min_rate || "0").replace("%", "")) || 0,
//       avg: parseFloat((item.wirr || "0").replace("%", "")) || 0,
//       max: parseFloat((item.max_rate || "0").replace("%", "")) || 0
//     }));
//   }

//   const yMin = Math.min(...data.map(d => d.min)) - 2;
//   const yMax = Math.max(...data.map(d => d.max)) + 2;
//   const chartHeight = 270;
//   const chartWidth = 620;
//   const padding = { top: 50, right: 50, bottom: 50, left: 0 };

//   const getYPosition = (val) => {
//     const ratio = (val - yMin) / (yMax - yMin || 1);
//     return chartHeight - ratio * chartHeight;
//   };

//   const getXPosition = (index) => {
//     const segmentWidth = chartWidth / data.length;
//     return segmentWidth * index + segmentWidth / 2;
//   };

//   const downloadChartAsPNG = () => {
//     if (!svgRef.current) return;

//     const svg = svgRef.current;
//     const svgData = new XMLSerializer().serializeToString(svg);
//     const canvas = document.createElement("canvas");
//     const ctx = canvas.getContext("2d");

//     canvas.width = svg.clientWidth || 800;
//     canvas.height = svg.clientHeight || 400;

//     const img = new Image();
//     const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
//     const url = URL.createObjectURL(blob);

//     img.onload = () => {
//       ctx.fillStyle = "#fff";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);
//       ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
//       const pngUrl = canvas.toDataURL("image/png");

//       const link = document.createElement("a");
//       link.href = pngUrl;
//       link.download = "Interest_Rates_Across_Industries.png";
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//       URL.revokeObjectURL(url);
//     };

//     img.src = url;
//   };

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         p: 2,
//         backgroundColor: "#ffffff",
//         fontFamily: "sans-serif",
//         overflow: "hidden",
//         position: "relative"
//       }}
//     >
//       {/* Download button */}
//       <Box sx={{ position: "absolute", top: 16, right: 16, zIndex: 1 }}>
//         <Tooltip title="Download Chart">
//           <IconButton onClick={downloadChartAsPNG}>
//             <MenuIcon fontSize="small" />
//           </IconButton>
//         </Tooltip>
//       </Box>

//       {/* Title */}
//       <Box
//         sx={{
//           fontSize: "16px",
//           fontWeight: "bold",
//           mb: 2.5,
//           color: "#263238",
//           textAlign: "left",
//           pr: 6
//         }}
//       >
//         Interest rates across industries of the selected quarter
//       </Box>

//       <svg
//         ref={svgRef}
//         width={chartWidth + padding.left + padding.right}
//         height={chartHeight + padding.top + padding.bottom}
//         style={{ overflow: "visible" }}
//       >
//         {/* Axis lines */}
//         <line
//           x1={padding.left}
//           y1={padding.top + chartHeight}
//           x2={padding.left + chartWidth}
//           y2={padding.top + chartHeight}
//           stroke="#d0d0d0"
//         />

//         <line
//           x1={padding.left + chartWidth}
//           y1={padding.top}
//           x2={padding.left + chartWidth}
//           y2={padding.top + chartHeight}
//           stroke="#d0d0d0"
//         />

//         {data.map((item, index) => {
//           const x = getXPosition(index);
//           const minY = getYPosition(item.min);
//           const avgY = getYPosition(item.avg);
//           const maxY = getYPosition(item.max);

//           return (
//             <g key={index}>
//               {/* Main vertical line */}
//               <line
//                 x1={padding.left + x}
//                 y1={padding.top + minY}
//                 x2={padding.left + x}
//                 y2={padding.top + maxY}
//                 stroke="#666666"
//                 strokeWidth="2.5"
//               />

//               {/* Max label (Blue) */}
//               <text
//                 x={padding.left + x}
//                 y={padding.top + maxY - 10}
//                 textAnchor="middle"
//                 fontSize="15px"
//                 fontWeight="bold"
//                 fontFamily="sans-serif"
//                 fill="#2B60AD"
//               >
//                 {item.max.toFixed(2)}%
//               </text>

//               {/* Avg label (Teal/Green) */}
//               <text
//                 x={padding.left + x - 45}
//                 y={padding.top + avgY + 5}
//                 textAnchor="middle"
//                 fontSize="15px"
//                 fontWeight="bold"
//                 fontFamily="sans-serif"
//                 fill="#39B1AC"
//               >
//                 {item.avg.toFixed(2)}%
//               </text>

//               {/* Min label (Pink) */}
//               <text
//                 x={padding.left + x}
//                 y={padding.top + minY + 20}
//                 textAnchor="middle"
//                 fontSize="15px"
//                 fontWeight="bold"
//                 fontFamily="sans-serif"
//                 fill="#B853A0"
//               >
//                 {item.min.toFixed(2)}%
//               </text>

//               {/* Category label (Dark grey) */}
//               <text
//                 x={padding.left + x}
//                 y={padding.top + chartHeight + 30}
//                 textAnchor="middle"
//                 fontSize="15px"
//                 fontWeight="500"
//                 fontFamily="sans-serif"
//                 fill="#444"
//               >
//                 {item.category}
//               </text>
//             </g>
//           );
//         })}
//       </svg>
//     </Box>
//   );
// };

// export default AvgTrendIndustry;
import React, { useRef } from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const AvgTrendIndustry = ({ garph56ir }) => {
  const svgRef = useRef(null);

  const defaultData = [
    { category: "NBFC-MFI", min: 0, avg: 0, max: 0 },
    { category: "Bank", min: 0, avg: 0, max: 0 },
    { category: "SFB", min: 0, avg: 0, max: 0 },
    { category: "NBFC", min: 0, avg: 0, max: 0 }
  ];

  let data = defaultData;

  if (garph56ir && garph56ir.graph6 && garph56ir.graph6.length > 0) {
    data = garph56ir.graph6.map(item => ({
      category: item.entity_type || "",
      min: parseFloat((item.min_rate || "0").replace("%", "")) || 0,
      avg: parseFloat((item.wirr || "0").replace("%", "")) || 0,
      max: parseFloat((item.max_rate || "0").replace("%", "")) || 0
    }));
  }

  const yMin = Math.min(...data.map(d => d.min)) - 2;
  const yMax = Math.max(...data.map(d => d.max)) + 2;
  const chartHeight = 270;
  const chartWidth = 620;
  const padding = { top: 50, right: 50, bottom: 50, left: 0 };

  const getYPosition = (val) => {
    const ratio = (val - yMin) / (yMax - yMin || 1);
    return chartHeight - ratio * chartHeight;
  };

  const getXPosition = (index) => {
    const segmentWidth = chartWidth / data.length;
    return segmentWidth * index + segmentWidth / 2;
  };

  const downloadChartAsPNG = () => {
    if (!svgRef.current) return;

    const svg = svgRef.current;
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = svg.clientWidth || 800;
    canvas.height = svg.clientHeight || 400;

    const img = new Image();
    const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    img.onload = () => {
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      const pngUrl = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = pngUrl;
      link.download = "Interest_Rates_Across_Industries.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    };

    img.src = url;
  };

  return (
    <Box
      sx={{
        width: "100%",
        p: 2,
        backgroundColor: "#ffffff",
        fontFamily: "sans-serif",
        overflow: "hidden",
        position: "relative"
      }}
    >
      {/* Download button */}
      <Box sx={{ position: "absolute", top: 16, right: 16, zIndex: 1 }}>
        <Tooltip title="Download Chart">
          <IconButton onClick={downloadChartAsPNG}>
            <MenuIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>

      {/* Title */}
      <Box
        sx={{
          fontSize: "16px",
          fontWeight: "bold",
          mb: 2.5,
          color: "#263238",
          textAlign: "left",
          pr: 6
        }}
      >
        Interest rates across industries of the selected quarter
      </Box>

      <svg
        ref={svgRef}
        width={chartWidth + padding.left + padding.right}
        height={chartHeight + padding.top + padding.bottom}
        style={{ overflow: "visible" }}
      >
        {/* Axis lines */}
        <line
          x1={padding.left}
          y1={padding.top + chartHeight}
          x2={padding.left + chartWidth}
          y2={padding.top + chartHeight}
          stroke="#d0d0d0"
        />

        {data.map((item, index) => {
          const x = getXPosition(index);
          const minY = getYPosition(item.min);
          const avgY = getYPosition(item.avg);
          const maxY = getYPosition(item.max);

          return (
            <g key={index}>
              {/* Main vertical line */}
              <line
                x1={padding.left + x}
                y1={padding.top + minY}
                x2={padding.left + x}
                y2={padding.top + maxY}
                stroke="#666666"
                strokeWidth="2.5"
              />

              {/* Max label (Blue) */}
              <text
                x={padding.left + x}
                y={padding.top + maxY - 10}
                textAnchor="middle"
                fontSize="15px"
                fontWeight="bold"
                fontFamily="sans-serif"
                fill="#2B60AD"
              >
                {item.max.toFixed(2)}%
              </text>

              {/* Avg label (Teal/Green) */}
              <text
                x={padding.left + x - 45}
                y={padding.top + avgY + 5}
                textAnchor="middle"
                fontSize="15px"
                fontWeight="bold"
                fontFamily="sans-serif"
                fill="#39B1AC"
              >
                {item.avg.toFixed(2)}%
              </text>

              {/* Min label (Pink) */}
              <text
                x={padding.left + x}
                y={padding.top + minY + 20}
                textAnchor="middle"
                fontSize="15px"
                fontWeight="bold"
                fontFamily="sans-serif"
                fill="#B853A0"
              >
                {item.min.toFixed(2)}%
              </text>

              {/* Category label (Dark grey) */}
              <text
                x={padding.left + x}
                y={padding.top + chartHeight + 30}
                textAnchor="middle"
                fontSize="15px"
                fontWeight="500"
                fontFamily="sans-serif"
                fill="#444"
              >
                {item.category}
              </text>
            </g>
          );
        })}
      </svg>
    </Box>
  );
};

export default AvgTrendIndustry;