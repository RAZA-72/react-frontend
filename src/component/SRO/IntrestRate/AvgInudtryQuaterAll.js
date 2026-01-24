
// import React from 'react';
// import { Box, IconButton, Tooltip } from '@mui/material';
// import DownloadIcon from '@mui/icons-material/Download';

// const AvgIndustryQuaterAll = () => {
//   // Static data - 4 quarters for each of 4 categories (total 16 data points)
//   const data = [
//     // NBFC-MFI (4 quarters)
//     { category: 'NBFC-MFI', quarter: 'Q3 FY 24-25', min: 18.00, avg: 23.49, max: 30.50, color: '#FF9800' },
//     { category: 'NBFC-MFI', quarter: 'Q4 FY 24-25', min: 18.00, avg: 23.32, max: 30.50, color: '#FF9800' },
//     { category: 'NBFC-MFI', quarter: 'Q1 FY 25-26', min: 18.00, avg: 23.49, max: 30.50, color: '#FF9800' },
//     { category: 'NBFC-MFI', quarter: 'Q2 FY 25-26', min: 18.00, avg: 23.32, max: 29.75, color: '#FF9800' },
    
//     // Bank (4 quarters)
//     { category: 'Bank', quarter: 'Q3 FY 24-25', min: 21.25, avg: 23.33, max: 26.00, color: '#39B1AC' },
//     { category: 'Bank', quarter: 'Q4 FY 24-25', min: 20.00, avg: 23.34, max: 26.00, color: '#39B1AC' },
//     { category: 'Bank', quarter: 'Q1 FY 25-26', min: 20.00, avg: 23.32, max: 26.00, color: '#39B1AC' },
//     { category: 'Bank', quarter: 'Q2 FY 25-26', min: 20.00, avg: 23.32, max: 25.25, color: '#39B1AC' },
    
//     // SFB (4 quarters)
//     { category: 'SFB', quarter: 'Q3 FY 24-25', min: 18.00, avg: 24.65, max: 29.00, color: '#E91E63' },
//     { category: 'SFB', quarter: 'Q4 FY 24-25', min: 18.00, avg: 23.19, max: 29.00, color: '#E91E63' },
//     { category: 'SFB', quarter: 'Q1 FY 25-26', min: 19.99, avg: 24.15, max: 29.00, color: '#E91E63' },
//     { category: 'SFB', quarter: 'Q2 FY 25-26', min: 19.99, avg: 24.10, max: 29.90, color: '#E91E63' },
    
//     // NBFC (4 quarters)
//     { category: 'NBFC', quarter: 'Q3 FY 24-25', min: 18.00, avg: 24.82, max: 30.00, color: '#4CAF50' },
//     { category: 'NBFC', quarter: 'Q4 FY 24-25', min: 16.00, avg: 23.22, max: 30.00, color: '#4CAF50' },
//     { category: 'NBFC', quarter: 'Q1 FY 25-26', min: 16.00, avg: 23.19, max: 30.00, color: '#4CAF50' },
//     { category: 'NBFC', quarter: 'Q2 FY 25-26', min: 16.00, avg: 23.14, max: 30.00, color: '#4CAF50' }
//   ];

//   const svgRef = React.useRef(null);
//   const chartHeight = 270;
//   const chartWidth = 1240;
//   const padding = { top: 50, right: 50, bottom: 50, left: 0 };

//   const yMin = 15;
//   const yMax = 32;

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

//     canvas.width = svg.clientWidth || 1300;
//     canvas.height = svg.clientHeight || 450;

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
//             <DownloadIcon fontSize="small" />
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
//         Interest Rates Across Industries - Min, Avg & Max (Q3 FY24-25 to Q2 FY25-26)
//       </Box>

//       <svg
//         ref={svgRef}
//         width={chartWidth + padding.left + padding.right}
//         height={chartHeight + padding.top + padding.bottom}
//         style={{ overflow: "visible" }}
//       >
//         {/* Right axis line */}
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
//                 stroke="#2B60AD"
//                 strokeWidth="2.5"
//               />

//               {/* Max label (Blue) */}
//               <text
//                 x={padding.left + x}
//                 y={padding.top + maxY - 10}
//                 textAnchor="middle"
//                 fontSize="11px"
//                 fontWeight="bold"
//                 fontFamily="sans-serif"
//                 fill="#2B60AD"
//               >
//                 {item.max.toFixed(2)}%
//               </text>

//               {/* Avg dot with label */}
//               <circle
//                 cx={padding.left + x}
//                 cy={padding.top + avgY}
//                 r="4"
//                 fill={item.color}
//                 stroke="#fff"
//                 strokeWidth="1.5"
//               />
//               <text
//                 x={padding.left + x - 35}
//                 y={padding.top + avgY + 4}
//                 textAnchor="middle"
//                 fontSize="11px"
//                 fontWeight="bold"
//                 fontFamily="sans-serif"
//                 fill={item.color}
//               >
//                 {item.avg.toFixed(2)}%
//               </text>

//               {/* Min label (Blue) */}
//               <text
//                 x={padding.left + x}
//                 y={padding.top + minY + 18}
//                 textAnchor="middle"
//                 fontSize="11px"
//                 fontWeight="bold"
//                 fontFamily="sans-serif"
//                 fill="#2B60AD"
//               >
//                 {item.min.toFixed(2)}%
//               </text>

//               {/* Quarter label */}
//               <text
//                 x={padding.left + x}
//                 y={padding.top + chartHeight + 20}
//                 textAnchor="middle"
//                 fontSize="10px"
//                 fontWeight="400"
//                 fontFamily="sans-serif"
//                 fill="#666"
//               >
//                 {item.quarter}
//               </text>
//             </g>
//           );
//         })}

//         {/* Category labels at bottom */}
//         <text
//           x={padding.left + getXPosition(1.5)}
//           y={padding.top + chartHeight + 45}
//           textAnchor="middle"
//           fontSize="11px"
//           fontWeight="500"
//           fontFamily="sans-serif"
//           fill="#444"
//         >
//           NBFC-MFI
//         </text>
//         <text
//           x={padding.left + getXPosition(5.5)}
//           y={padding.top + chartHeight + 45}
//           textAnchor="middle"
//           fontSize="11px"
//           fontWeight="500"
//           fontFamily="sans-serif"
//           fill="#444"
//         >
//           Bank
//         </text>
//         <text
//           x={padding.left + getXPosition(9.5)}
//           y={padding.top + chartHeight + 45}
//           textAnchor="middle"
//           fontSize="11px"
//           fontWeight="500"
//           fontFamily="sans-serif"
//           fill="#444"
//         >
//           SFB
//         </text>
//         <text
//           x={padding.left + getXPosition(13.5)}
//           y={padding.top + chartHeight + 45}
//           textAnchor="middle"
//           fontSize="11px"
//           fontWeight="500"
//           fontFamily="sans-serif"
//           fill="#444"
//         >
//           NBFC
//         </text>
//       </svg>
//     </Box>
//   );
// };

// export default AvgIndustryQuaterAll;

// import React from 'react';
// import { Box, IconButton, Tooltip } from '@mui/material';
// import DownloadIcon from '@mui/icons-material/Download';

// const AvgIndustryQuaterAll = () => {
//   // Static data - 4 quarters for each of 4 categories (total 16 data points)
//   const data = [
//     // NBFC-MFI (4 quarters)
//     { category: 'NBFC-MFI', quarter: 'Q3 FY 24-25', min: 18.00, avg: 23.49, max: 30.50, color: '#FDBF11' },
//     { category: 'NBFC-MFI', quarter: 'Q4 FY 24-25', min: 18.00, avg: 23.32, max: 30.50, color: '#FDBF11' },
//     { category: 'NBFC-MFI', quarter: 'Q1 FY 25-26', min: 18.00, avg: 23.49, max: 30.50, color: '#FDBF11' },
//     { category: 'NBFC-MFI', quarter: 'Q2 FY 25-26', min: 18.00, avg: 23.32, max: 29.75, color: '#FDBF11' },
    
//     // Bank (4 quarters)
//     { category: 'Bank', quarter: 'Q3 FY 24-25', min: 21.25, avg: 23.33, max: 26.00, color: '#39B1AC' },
//     { category: 'Bank', quarter: 'Q4 FY 24-25', min: 20.00, avg: 23.34, max: 26.00, color: '#39B1AC' },
//     { category: 'Bank', quarter: 'Q1 FY 25-26', min: 20.00, avg: 23.32, max: 26.00, color: '#39B1AC' },
//     { category: 'Bank', quarter: 'Q2 FY 25-26', min: 20.00, avg: 23.32, max: 25.25, color: '#39B1AC' },
    
//     // SFB (4 quarters)
//     { category: 'SFB', quarter: 'Q3 FY 24-25', min: 18.00, avg: 24.65, max: 29.00, color: '#F05D5F' },
//     { category: 'SFB', quarter: 'Q4 FY 24-25', min: 18.00, avg: 23.19, max: 29.00, color: '#F05D5F' },
//     { category: 'SFB', quarter: 'Q1 FY 25-26', min: 19.99, avg: 24.15, max: 29.00, color: '#F05D5F' },
//     { category: 'SFB', quarter: 'Q2 FY 25-26', min: 19.99, avg: 24.10, max: 29.90, color: '#F05D5F' },
    
//     // NBFC (4 quarters)
//     { category: 'NBFC', quarter: 'Q3 FY 24-25', min: 18.00, avg: 24.82, max: 30.00, color: '#69AB44' },
//     { category: 'NBFC', quarter: 'Q4 FY 24-25', min: 16.00, avg: 23.22, max: 30.00, color: '#69AB44' },
//     { category: 'NBFC', quarter: 'Q1 FY 25-26', min: 16.00, avg: 23.19, max: 30.00, color: '#69AB44' },
//     { category: 'NBFC', quarter: 'Q2 FY 25-26', min: 16.00, avg: 23.14, max: 30.00, color: '#69AB44' }
//   ];

//   const svgRef = React.useRef(null);
//   const chartHeight = 270;
//   const chartWidth = 1240;
//   const padding = { top: 50, right: 50, bottom: 50, left: 0 };

//   const yMin = 15;
//   const yMax = 32;

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

//     canvas.width = svg.clientWidth || 1300;
//     canvas.height = svg.clientHeight || 450;

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
//             <DownloadIcon fontSize="small" />
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
//           textAlign: "center",
//           pr: 6
//         }}
//       >
//         Interest Rates Across Industries - Min, Avg & Max (Q3 FY24-25 to Q2 FY25-26)
//       </Box>

//       <svg
//         ref={svgRef}
//         width={chartWidth + padding.left + padding.right}
//         height={chartHeight + padding.top + padding.bottom}
//         style={{ overflow: "visible" }}
//       >
//         {/* X-axis bottom line */}
//         <line
//           x1={padding.left}
//           y1={padding.top + chartHeight}
//           x2={padding.left + chartWidth}
//           y2={padding.top + chartHeight}
//           stroke="#d0d0d0"
//           strokeWidth="1"
//         />

//         {/* Right axis line */}
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
//                 stroke="#2B60AD"
//                 strokeWidth="2.5"
//               />

//               {/* Max label (Blue) */}
//               <text
//                 x={padding.left + x}
//                 y={padding.top + maxY - 10}
//                 textAnchor="middle"
//                 fontSize="11px"
//                 fontWeight="bold"
//                 fontFamily="sans-serif"
//                 fill="#2B60AD"
//               >
//                 {item.max.toFixed(2)}%
//               </text>

//               {/* Avg dot with label */}
//               <circle
//                 cx={padding.left + x}
//                 cy={padding.top + avgY}
//                 r="4"
//                 fill={item.color}
//                 stroke="#fff"
//                 strokeWidth="1.5"
//               />
//               <text
//                 x={padding.left + x - 35}
//                 y={padding.top + avgY + 4}
//                 textAnchor="middle"
//                 fontSize="11px"
//                 fontWeight="bold"
//                 fontFamily="sans-serif"
//                 fill={item.color}
//               >
//                 {item.avg.toFixed(2)}%
//               </text>

//               {/* Min label (Blue) */}
//               <text
//                 x={padding.left + x}
//                 y={padding.top + minY + 18}
//                 textAnchor="middle"
//                 fontSize="11px"
//                 fontWeight="bold"
//                 fontFamily="sans-serif"
//                 fill="#2B60AD"
//               >
//                 {item.min.toFixed(2)}%
//               </text>

//               {/* Quarter label */}
//               <text
//                 x={padding.left + x}
//                 y={padding.top + chartHeight + 20}
//                 textAnchor="middle"
//                 fontSize="10px"
//                 fontWeight="400"
//                 fontFamily="sans-serif"
//                 fill="#666"
//               >
//                 {item.quarter}
//               </text>
//             </g>
//           );
//         })}

//         {/* Category labels at bottom */}
//         <text
//           x={padding.left + getXPosition(1.5)}
//           y={padding.top + chartHeight + 45}
//           textAnchor="middle"
//           fontSize="11px"
//           fontWeight="500"
//           fontFamily="sans-serif"
//           fill="#444"
//         >
//           NBFC-MFI
//         </text>
//         <text
//           x={padding.left + getXPosition(5.5)}
//           y={padding.top + chartHeight + 45}
//           textAnchor="middle"
//           fontSize="11px"
//           fontWeight="500"
//           fontFamily="sans-serif"
//           fill="#444"
//         >
//           Bank
//         </text>
//         <text
//           x={padding.left + getXPosition(9.5)}
//           y={padding.top + chartHeight + 45}
//           textAnchor="middle"
//           fontSize="11px"
//           fontWeight="500"
//           fontFamily="sans-serif"
//           fill="#444"
//         >
//           SFB
//         </text>
//         <text
//           x={padding.left + getXPosition(13.5)}
//           y={padding.top + chartHeight + 45}
//           textAnchor="middle"
//           fontSize="11px"
//           fontWeight="500"
//           fontFamily="sans-serif"
//           fill="#444"
//         >
//           NBFC
//         </text>
//       </svg>
//     </Box>
//   );
// };

// export default AvgIndustryQuaterAll;

// import React from 'react';
// import { Box, IconButton, Tooltip } from '@mui/material';
// import DownloadIcon from '@mui/icons-material/Download';

// const AvgIndustryQuaterAll = () => {
//   // Static data - 4 quarters for each of 4 categories (total 16 data points)
//   const data = [
//     // NBFC-MFI (4 quarters)
//     { category: 'NBFC-MFI', quarter: 'Q3 FY 24-25', min: 18.00, avg: 23.49, max: 30.50, color: '#FDBF11' },
//     { category: 'NBFC-MFI', quarter: 'Q4 FY 24-25', min: 18.00, avg: 23.32, max: 30.50, color: '#39B1AC' },
//     { category: 'NBFC-MFI', quarter: 'Q1 FY 25-26', min: 18.00, avg: 23.49, max: 30.50, color: '#F05D5F' },
//     { category: 'NBFC-MFI', quarter: 'Q2 FY 25-26', min: 18.00, avg: 23.32, max: 29.75, color: '#69AB44' },
    

//     // Bank (4 quarters)
//     { category: 'Bank', quarter: 'Q3 FY 24-25', min: 21.25, avg: 23.33, max: 26.00, color: '#FDBF11' },
//     { category: 'Bank', quarter: 'Q4 FY 24-25', min: 20.00, avg: 23.34, max: 26.00, color: '#39B1AC' },
//     { category: 'Bank', quarter: 'Q1 FY 25-26', min: 20.00, avg: 23.32, max: 26.00, color: '#F05D5F' },
//     { category: 'Bank', quarter: 'Q2 FY 25-26', min: 20.00, avg: 23.32, max: 25.25, color: '#69AB44' },
    
//     // SFB (4 quarters)
//     { category: 'SFB', quarter: 'Q3 FY 24-25', min: 18.00, avg: 24.65, max: 29.00, color: '#FDBF11' },
//     { category: 'SFB', quarter: 'Q4 FY 24-25', min: 18.00, avg: 23.19, max: 29.00, color: '#39B1AC' },
//     { category: 'SFB', quarter: 'Q1 FY 25-26', min: 19.99, avg: 24.15, max: 29.00, color: '#F05D5F' },
//     { category: 'SFB', quarter: 'Q2 FY 25-26', min: 19.99, avg: 24.10, max: 29.90, color: '#69AB44' },
    
//     // NBFC (4 quarters)
//     { category: 'NBFC', quarter: 'Q3 FY 24-25', min: 18.00, avg: 24.82, max: 30.00, color: '#FDBF11' },
//     { category: 'NBFC', quarter: 'Q4 FY 24-25', min: 16.00, avg: 23.22, max: 30.00, color: '#39B1AC' },
//     { category: 'NBFC', quarter: 'Q1 FY 25-26', min: 16.00, avg: 23.19, max: 30.00, color: '#F05D5F' },
//     { category: 'NBFC', quarter: 'Q2 FY 25-26', min: 16.00, avg: 23.14, max: 30.00, color: '#69AB44' }
//   ];

//   const svgRef = React.useRef(null);
//   const chartHeight = 270;
//   const chartWidth = 1240;
// //   const padding = { top: 50, right: 50, bottom: 50, left: 0 };
//   const padding = { top: 50, right: 50, bottom: 50, left: 20 };


//   const yMin = 15;
//   const yMax = 32;

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

//     canvas.width = svg.clientWidth || 1300;
//     canvas.height = svg.clientHeight || 600;

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
//         position: "relative",
//             pl: '20px'   // ✅ extra breathing space

//       }}
//     >
//       {/* Download button */}
//       <Box sx={{ position: "absolute", top: 16, right: 16, zIndex: 1 }}>
//         <Tooltip title="Download Chart">
//           <IconButton onClick={downloadChartAsPNG}>
//             <DownloadIcon fontSize="small" />
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
//         Interest Rates Across Industries - Min, Avg & Max (Q3 FY24-25 to Q2 FY25-26)
//       </Box>

//       <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
//       <svg
//         ref={svgRef}
//         width={chartWidth + padding.left + padding.right}
//         height={chartHeight + padding.top + padding.bottom}
//         style={{ overflow: "visible" }}
//       >
//         {/* X-axis bottom line */}
//         <line
       

          
//         />

//         {/* Right axis line */}
//         <line

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
//                 stroke="#2B60AD"
//                 strokeWidth="2.5"
                
//               />

//               {/* Max label (Blue) */}
//               <text
//                 x={padding.left + x}
//                 y={padding.top + maxY - 10}
//                 textAnchor="middle"
//                 fontSize="11px"
//                 fontWeight="bold"
//                 fontFamily="sans-serif"
//                 fill="#2B60AD"
//               >
//                 {item.max.toFixed(2)}%
//               </text>

//               {/* Avg dot with label */}
//               <circle
//                 cx={padding.left + x}
//                 cy={padding.top + avgY}
//                 r="4"
//                 fill={item.color}
//                 stroke="#fff"
//                 strokeWidth="1.5"
//               />
//               <text
//                 x={padding.left + x - 35}
//                 y={padding.top + avgY + 4}
//                 textAnchor="middle"
//                 fontSize="11px"
//                 fontWeight="bold"
//                 fontFamily="sans-serif"
//                 fill={item.color}
//               >
//                 {item.avg.toFixed(2)}%
//               </text>

//               {/* Min label (Blue) */}
//               <text
//                 x={padding.left + x}
//                 y={padding.top + minY + 18}
//                 textAnchor="middle"
//                 fontSize="11px"
//                 fontWeight="bold"
//                 fontFamily="sans-serif"
//                 fill="#2B60AD"
//               >
//                 {item.min.toFixed(2)}%
//               </text>

//               {/* Quarter label */}
//               <text
//                 x={padding.left + x}
//                 y={padding.top + chartHeight + 20}
//                 textAnchor="middle"
//                 fontSize="10px"
//                 fontWeight="400"
//                 fontFamily="sans-serif"
//                 fill="#666"
//               >
//                 {item.quarter}
//               </text>
//             </g>
//           );
//         })}

//         {/* Category labels at bottom */}
//         <text
//           x={padding.left + getXPosition(1.5)}
//           y={padding.top + chartHeight + 45}
//           textAnchor="middle"
//           fontSize="15px"
//           fontWeight="500"
//           fontFamily="sans-serif"
//           fill="#444"
//         >
//           NBFC-MFI
//         </text>
//         <text
//           x={padding.left + getXPosition(5.5)}
//           y={padding.top + chartHeight + 45}
//           textAnchor="middle"
//           fontSize="15px"
//           fontWeight="500"
//           fontFamily="sans-serif"
//           fill="#444"
//         >
//           Bank
//         </text>
//         <text
//           x={padding.left + getXPosition(9.5)}
//           y={padding.top + chartHeight + 45}
//           textAnchor="middle"
//           fontSize="15px"
//           fontWeight="500"
//           fontFamily="sans-serif"
//           fill="#444"
//         >
//           SFB
//         </text>
//         <text
//           x={padding.left + getXPosition(13.5)}
//           y={padding.top + chartHeight + 45}
//           textAnchor="middle"
//           fontSize="15px"
//           fontWeight="500"
//           fontFamily="sans-serif"
//           fill="#444"
//         >
//           NBFC
//         </text>
//       </svg>
//       </Box>
//     </Box>
//   );
// };

// export default AvgIndustryQuaterAll;
// import React, { useMemo, useRef } from "react";
// import { Box, IconButton, Tooltip } from "@mui/material";
// import DownloadIcon from "@mui/icons-material/Download";

// const ENTITY_COLORS = {
//   "NBFC-MFI": "#FDBF11",
//   "Bank": "#39B1AC",
//   "SFB": "#F05D5F",
//   "NBFC": "#69AB44",
// };

// const AvgIndustryQuaterAll = ({ graphSingleAllqauter = [] }) => {

//   // ----------------------------------
//   // 1. STATIC FALLBACK (0.00 DATA)
//   // ----------------------------------
//   const staticZeroData = [
//     "NBFC-MFI", "Bank", "SFB", "NBFC"
//   ].flatMap((cat) =>
//     ["Q1 FY 00-01", "Q2 FY 00-01", "Q3 FY 00-01", "Q4 FY 00-01"].map((q) => ({
//       category: cat,
//       quarter: q,
//       min: 0,
//       avg: 0,
//       max: 0,
//       color: ENTITY_COLORS[cat],
//     }))
//   );

//   // ----------------------------------
//   // 2. TRANSFORM API DATA → CHART DATA
//   // ----------------------------------
//   const data = useMemo(() => {
//     if (!Array.isArray(graphSingleAllqauter) || graphSingleAllqauter.length === 0) {
//       return staticZeroData;
//     }

//     const transformed = [];

//     graphSingleAllqauter.forEach((quarterObj) => {
//       quarterObj.graph6.forEach((e) => {
//         transformed.push({
//           category: e.entity_type,
//           quarter: quarterObj.period,
//           min: parseFloat(e.min_rate) || 0,
//           avg: parseFloat(e.wirr) || 0,
//           max: parseFloat(e.max_rate) || 0,
//           color: ENTITY_COLORS[e.entity_type] || "#999",
//         });
//       });
//     });

//     return transformed.length ? transformed : staticZeroData;
//   }, [graphSingleAllqauter]);

//   // ----------------------------------
//   // 3. SVG HELPERS (UNCHANGED)
//   // ----------------------------------
//   const svgRef = useRef(null);
//   const chartHeight = 270;
//   const chartWidth = 1240;
//   const padding = { top: 50, right: 50, bottom: 50, left: 20 };
//   const yMin = 0;
//   const yMax = 35;

//   const getYPosition = (val) => {
//     const ratio = (val - yMin) / (yMax - yMin || 1);
//     return chartHeight - ratio * chartHeight;
//   };

//   const getXPosition = (index) => {
//     const segmentWidth = chartWidth / data.length;
//     return segmentWidth * index + segmentWidth / 2;
//   };

//   // ----------------------------------
//   // 4. DOWNLOAD (UNCHANGED)
//   // ----------------------------------
//   const downloadChartAsPNG = () => {
//     if (!svgRef.current) return;

//     const svg = svgRef.current;
//     const svgData = new XMLSerializer().serializeToString(svg);
//     const canvas = document.createElement("canvas");
//     const ctx = canvas.getContext("2d");

//     canvas.width = 1300;
//     canvas.height = 600;

//     const img = new Image();
//     const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
//     const url = URL.createObjectURL(blob);

//     img.onload = () => {
//       ctx.fillStyle = "#fff";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);
//       ctx.drawImage(img, 0, 0);
//       const pngUrl = canvas.toDataURL("image/png");

//       const link = document.createElement("a");
//       link.href = pngUrl;
//       link.download = "Interest_Rates_All_Quarters.png";
//       link.click();
//       URL.revokeObjectURL(url);
//     };

//     img.src = url;
//   };

//   // ----------------------------------
//   // 5. RENDER
//   // ----------------------------------
//   return (
//     <Box sx={{ width: "100%", p: 2, backgroundColor: "#fff", position: "relative" }}>
//       <Box sx={{ position: "absolute", top: 16, right: 16 }}>
//         <Tooltip title="Download Chart">
//           <IconButton onClick={downloadChartAsPNG}>
//             <DownloadIcon fontSize="small" />
//           </IconButton>
//         </Tooltip>
//       </Box>

//       <Box sx={{ fontSize: "16px", fontWeight: "bold", mb: 2 }}>
//         Interest Rates Across Industries – Min, Avg & Max
//       </Box>

//       <svg
//         ref={svgRef}
//         width={chartWidth + padding.left + padding.right}
//         height={chartHeight + padding.top + padding.bottom}
//       >
//         {data.map((item, index) => {
//           const x = getXPosition(index);
//           const minY = getYPosition(item.min);
//           const avgY = getYPosition(item.avg);
//           const maxY = getYPosition(item.max);

//           return (
//             <g key={index}>
//               <line
//                 x1={padding.left + x}
//                 y1={padding.top + minY}
//                 x2={padding.left + x}
//                 y2={padding.top + maxY}
//                 stroke="#2B60AD"
//                 strokeWidth="2.5"
//               />

//               <text x={padding.left + x} y={padding.top + maxY - 10} textAnchor="middle" fontSize="11" fill="#2B60AD">
//                 {item.max.toFixed(2)}%
//               </text>

//               <circle cx={padding.left + x} cy={padding.top + avgY} r="4" fill={item.color} />
//               <text x={padding.left + x - 35} y={padding.top + avgY + 4} fontSize="11" fill={item.color}>
//                 {item.avg.toFixed(2)}%
//               </text>

//               <text x={padding.left + x} y={padding.top + minY + 18} textAnchor="middle" fontSize="11" fill="#2B60AD">
//                 {item.min.toFixed(2)}%
//               </text>

//               <text
//                 x={padding.left + x}
//                 y={padding.top + chartHeight + 20}
//                 textAnchor="middle"
//                 fontSize="10"
//                 fill="#666"
//               >
//                 {item.quarter}
//               </text>
//             </g>
//           );
//         })}
//       </svg>
//     </Box>
//   );
// };

// export default AvgIndustryQuaterAll;







// import React, { useMemo, useRef } from "react";
// import { Box, IconButton, Tooltip } from "@mui/material";
// import DownloadIcon from "@mui/icons-material/Download";

// const ENTITY_COLORS = {
//   "NBFC-MFI": "#FDBF11",
//   "Bank": "#39B1AC",
//   "SFB": "#F05D5F",
//   "NBFC": "#69AB44",
// };

// const AvgIndustryQuaterAll = ({ graphSingleAllqauter = [] }) => {

//   // ----------------------------------
//   // 1. STATIC FALLBACK (0.00 DATA)
//   // ----------------------------------
//   const staticZeroData = [
//     "NBFC-MFI", "Bank", "SFB", "NBFC"
//   ].flatMap((cat) =>
//     ["Q1 FY 00-01", "Q2 FY 00-01", "Q3 FY 00-01", "Q4 FY 00-01"].map((q) => ({
//       category: cat,
//       quarter: q,
//       min: 0,
//       avg: 0,
//       max: 0,
//       color: ENTITY_COLORS[cat],
//     }))
//   );

//   // ----------------------------------
//   // 2. TRANSFORM API DATA → CHART DATA
//   // ----------------------------------
//   const data = useMemo(() => {
//     if (!Array.isArray(graphSingleAllqauter) || graphSingleAllqauter.length === 0) {
//       return staticZeroData; // ✅ API se pehle bhi 0.00
//     }

//     const transformed = [];

//     graphSingleAllqauter.forEach((quarterObj) => {
//       quarterObj.graph6.forEach((e) => {
//         transformed.push({
//           category: e.entity_type,
//           quarter: quarterObj.period,
//           min: parseFloat(e.min_rate) || 0,
//           avg: parseFloat(e.wirr) || 0,
//           max: parseFloat(e.max_rate) || 0,
//           color: ENTITY_COLORS[e.entity_type] || "#999",
//         });
//       });
//     });

//     return transformed.length ? transformed : staticZeroData;
//   }, [graphSingleAllqauter]);

//   // ----------------------------------
//   // 3. SVG HELPERS
//   // ----------------------------------
//   const svgRef = useRef(null);
//   const chartHeight = 270;
//   const chartWidth = 1240;
//   const padding = { top: 50, right: 50, bottom: 70, left: 20 };
//   const yMin = 0;
//   const yMax = 35;
  

//   const getYPosition = (val) => {
//     const ratio = (val - yMin) / (yMax - yMin || 1);
//     return chartHeight - ratio * chartHeight;
//   };

//   const getXPosition = (index) => {
//     const segmentWidth = chartWidth / data.length;
//     return segmentWidth * index + segmentWidth / 2;
//   };

//   // ----------------------------------
//   // 4. DOWNLOAD
//   // ----------------------------------
//   const downloadChartAsPNG = () => {
//     if (!svgRef.current) return;

//     const svg = svgRef.current;
//     const svgData = new XMLSerializer().serializeToString(svg);
//     const canvas = document.createElement("canvas");
//     const ctx = canvas.getContext("2d");

//     canvas.width = 1300;
//     canvas.height = 600;

//     const img = new Image();
//     const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
//     const url = URL.createObjectURL(blob);

//     img.onload = () => {
//       ctx.fillStyle = "#fff";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);
//       ctx.drawImage(img, 0, 0);
//       const pngUrl = canvas.toDataURL("image/png");

//       const link = document.createElement("a");
//       link.href = pngUrl;
//       link.download = "Interest_Rates_All_Quarters.png";
//       link.click();
//       URL.revokeObjectURL(url);
//     };

//     img.src = url;
//   };

//   // ----------------------------------
//   // 5. RENDER (FONT + LABEL SAME AS AvgTrendIndustry)
//   // ----------------------------------
//   return (
//     <Box sx={{ width: "100%", p: 2, backgroundColor: "#fff", position: "relative" }}>
//       <Box sx={{ position: "absolute", top: 16, right: 16 }}>
//         <Tooltip title="Download Chart">
//           <IconButton onClick={downloadChartAsPNG}>
//             <DownloadIcon fontSize="small" />
//           </IconButton>
//         </Tooltip>
//       </Box>

//       <Box sx={{ fontSize: "16px", fontWeight: "bold", mb: 2 }}>
//         Interest Rates Across Industries – Min, Avg & Max
//       </Box>

//       <svg
//         ref={svgRef}
//         width={chartWidth + padding.left + padding.right}
//         height={chartHeight + padding.top + padding.bottom}
//       >
//         {data.map((item, index) => {
//           const x = getXPosition(index);
//           const minY = getYPosition(item.min);
//           const avgY = getYPosition(item.avg);
//           const maxY = getYPosition(item.max);

//           return (
//             <g key={index}>
//               {/* Vertical line */}
//               <line
//                 x1={padding.left + x}
//                 y1={padding.top + minY}
//                 x2={padding.left + x}
//                 y2={padding.top + maxY}
//                 stroke="#666"
//                 strokeWidth="2.5"
//               />

//               {/* Max */}
//               <text
//                 x={padding.left + x}
//                 y={padding.top + maxY - 10}
//                 textAnchor="middle"
//                 fontSize="15px"
//                 fontWeight="bold"
//                 fill="#2B60AD"
//               >
//                 {item.max.toFixed(2)}%
//               </text>

//               {/* Avg */}
//               <text
//                 x={padding.left + x - 45}
//                 y={padding.top + avgY + 5}
//                 textAnchor="middle"
//                 fontSize="15px"
//                 fontWeight="bold"
//                 fill={item.color}
//               >
//                 {item.avg.toFixed(2)}%
//               </text>

//               {/* Min */}
//               <text
//                 x={padding.left + x}
//                 y={padding.top + minY + 20}
//                 textAnchor="middle"
//                 fontSize="15px"
//                 fontWeight="bold"
//                 fill="#B853A0"
//               >
//                 {item.min.toFixed(2)}%
//               </text>

//               {/* Quarter label */}
//               <text
//                 x={padding.left + x}
//                 y={padding.top + chartHeight + 30}
//                 textAnchor="middle"
//                 fontSize="15px"
//                 fontWeight="500"
//                 fill="#444"
//               >
//                 {item.quarter}
//               </text>
//             </g>
//           );
//         })}
//       </svg>
//     </Box>
//   );
// };

// export default AvgIndustryQuaterAll;

// import React, { useMemo, useRef } from "react";
// import { Box, IconButton, Tooltip } from "@mui/material";
// import DownloadIcon from "@mui/icons-material/Download";

// const ENTITY_COLORS = {
//   "NBFC-MFI": "#FDBF11",
//   "Bank": "#39B1AC",
//   "SFB": "#F05D5F",
//   "NBFC": "#69AB44",
// };

// const AvgIndustryQuaterAll = ({ graphSingleAllqauter = [] }) => {
//   // ----------------------------------
//   // 1. STATIC 0.00 FALLBACK (API se pehle)
//   // ----------------------------------
//   const staticZeroData = [
//     "NBFC-MFI",
//     "Bank",
//     "SFB",
//     "NBFC",
//   ].flatMap((cat) =>
//     ["Q3 FY 24-25", "Q4 FY 24-25", "Q1 FY 25-26", "Q2 FY 25-26"].map((q) => ({
//       category: cat,
//       quarter: q,
//       min: 0,
//       avg: 0,
//       max: 0,
//       color: ENTITY_COLORS[cat],
//     }))
//   );

//   // ----------------------------------
//   // 2. API → CHART DATA (NO DESIGN CHANGE)
//   // ----------------------------------
//   const data = useMemo(() => {
//     if (!Array.isArray(graphSingleAllqauter) || graphSingleAllqauter.length === 0) {
//       return staticZeroData;
//     }

//     const transformed = [];

//     graphSingleAllqauter.forEach((quarterObj) => {
//       if (!Array.isArray(quarterObj.graph6)) return;

//       quarterObj.graph6.forEach((e) => {
//         transformed.push({
//           category: e.entity_type,
//           quarter: quarterObj.period,
//           min: parseFloat(e.min_rate) || 0,
//           avg: parseFloat(e.wirr) || 0,
//           max: parseFloat(e.max_rate) || 0,
//           color: ENTITY_COLORS[e.entity_type] || "#999",
//         });
//       });
//     });

//     return transformed.length ? transformed : staticZeroData;
//   }, [graphSingleAllqauter]);

//   // ----------------------------------
//   // 3. SVG CONFIG (UNCHANGED)
//   // ----------------------------------
//   const svgRef = useRef(null);
//   const chartHeight = 270;
//   const chartWidth = 1240;
//   const padding = { top: 50, right: 50, bottom: 50, left: 20 };

//   const yMin = 15;
//   const yMax = 32;

//   const getYPosition = (val) => {
//     const ratio = (val - yMin) / (yMax - yMin || 1);
//     return chartHeight - ratio * chartHeight;
//   };

//   const getXPosition = (index) => {
//     const segmentWidth = chartWidth / data.length;
//     return segmentWidth * index + segmentWidth / 2;
//   };

//   // ----------------------------------
//   // 4. DOWNLOAD (UNCHANGED)
//   // ----------------------------------
//   const downloadChartAsPNG = () => {
//     if (!svgRef.current) return;

//     const svg = svgRef.current;
//     const svgData = new XMLSerializer().serializeToString(svg);
//     const canvas = document.createElement("canvas");
//     const ctx = canvas.getContext("2d");

//     canvas.width = svg.clientWidth || 1300;
//     canvas.height = svg.clientHeight || 600;

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

//   // ----------------------------------
//   // 5. RENDER (100% SAME THEME)
//   // ----------------------------------
//   return (
//     <Box
//       sx={{
//         width: "100%",
//         p: 2,
//         backgroundColor: "#ffffff",
//         fontFamily: "sans-serif",
//         overflow: "hidden",
//         position: "relative",
//         pl: "20px",
//       }}
//     >
//       {/* Download button */}
//       <Box sx={{ position: "absolute", top: 16, right: 16, zIndex: 1 }}>
//         <Tooltip title="Download Chart">
//           <IconButton onClick={downloadChartAsPNG}>
//             <DownloadIcon fontSize="small" />
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
//           pr: 6,
//         }}
//       >
//         Interest Rates Across Industries - Min, Avg & Max (Q3 FY24-25 to Q2 FY25-26)
//       </Box>

//       <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
//         <svg
//           ref={svgRef}
//           width={chartWidth + padding.left + padding.right}
//           height={chartHeight + padding.top + padding.bottom}
//           style={{ overflow: "visible" }}
//         >
//           {data.map((item, index) => {
//             const x = getXPosition(index);
//             const minY = getYPosition(item.min);
//             const avgY = getYPosition(item.avg);
//             const maxY = getYPosition(item.max);

//             return (
//               <g key={index}>
//                 <line
//                   x1={padding.left + x}
//                   y1={padding.top + minY}
//                   x2={padding.left + x}
//                   y2={padding.top + maxY}
//                   stroke="#2B60AD"
//                   strokeWidth="2.5"
//                 />

//                 <text
//                   x={padding.left + x}
//                   y={padding.top + maxY - 10}
//                   textAnchor="middle"
//                   fontSize="11px"
//                   fontWeight="bold"
//                   fill="#2B60AD"
//                 >
//                   {item.max.toFixed(2)}%
//                 </text>

//                 <circle
//                   cx={padding.left + x}
//                   cy={padding.top + avgY}
//                   r="4"
//                   fill={item.color}
//                   stroke="#fff"
//                   strokeWidth="1.5"
//                 />

//                 <text
//                   x={padding.left + x - 35}
//                   y={padding.top + avgY + 4}
//                   textAnchor="middle"
//                   fontSize="11px"
//                   fontWeight="bold"
//                   fill={item.color}
//                 >
//                   {item.avg.toFixed(2)}%
//                 </text>

//                 <text
//                   x={padding.left + x}
//                   y={padding.top + minY + 18}
//                   textAnchor="middle"
//                   fontSize="11px"
//                   fontWeight="bold"
//                   fill="#2B60AD"
//                 >
//                   {item.min.toFixed(2)}%
//                 </text>

//                 <text
//                   x={padding.left + x}
//                   y={padding.top + chartHeight + 20}
//                   textAnchor="middle"
//                   fontSize="10px"
//                   fontWeight="400"
//                   fill="#666"
//                 >
//                   {item.quarter}
//                 </text>
//               </g>
//             );
//           })}

//           {/* Category labels */}
//           {["NBFC-MFI", "Bank", "SFB", "NBFC"].map((cat, i) => (
//             <text
//               key={cat}
//               x={padding.left + getXPosition(i * 4 + 1.5)}
//               y={padding.top + chartHeight + 45}
//               textAnchor="middle"
//               fontSize="15px"
//               fontWeight="500"
//               fill="#444"
//             >
//               {cat}
//             </text>
//           ))}
//         </svg>
//       </Box>
//     </Box>
//   );
// };

// export default AvgIndustryQuaterAll;


// import React, { useMemo, useRef } from "react";
// import { Box, IconButton, Tooltip } from "@mui/material";
// import DownloadIcon from "@mui/icons-material/Download";

// const ENTITY_COLORS = {
//   "NBFC-MFI": "#FDBF11",
//   "Bank": "#39B1AC",
//   "SFB": "#F05D5F",
//   "NBFC": "#69AB44",
// };

// const AvgIndustryQuaterAll = ({
//   graphSingleAllqauter = [],
//   availableRangeTitle = "",   // 👈 API se pass karna
// }) => {

//   // -------------------------------------------------
//   // 1. STATIC 0.00 DATA (API se pehle)
//   // -------------------------------------------------
//   const staticZeroData = ["NBFC-MFI", "Bank", "SFB", "NBFC"].flatMap((cat) =>
//     ["Q3 FY 24-25", "Q4 FY 24-25", "Q1 FY 25-26", "Q2 FY 25-26"].map((q) => ({
//       category: cat,
//       quarter: q,
//       min: 0,
//       avg: 0,
//       max: 0,
//       color: ENTITY_COLORS[cat],
//     }))
//   );

//   // -------------------------------------------------
//   // 2. API → CHART DATA
//   // -------------------------------------------------
//   const data = useMemo(() => {
//     if (!Array.isArray(graphSingleAllqauter) || graphSingleAllqauter.length === 0) {
//       return staticZeroData;
//     }

//     const transformed = [];

//     graphSingleAllqauter.forEach((quarterObj) => {
//       if (!Array.isArray(quarterObj.graph6)) return;

//       quarterObj.graph6.forEach((e) => {
//         transformed.push({
//           category: e.entity_type,
//           quarter: quarterObj.period,
//           min: parseFloat(String(e.min_rate).replace("%", "")) || 0,
//           avg: parseFloat(String(e.wirr).replace("%", "")) || 0,
//           max: parseFloat(String(e.max_rate).replace("%", "")) || 0,
//           color: ENTITY_COLORS[e.entity_type] || "#999",
//         });
//       });
//     });

//     return transformed.length ? transformed : staticZeroData;
//   }, [graphSingleAllqauter]);

//   // -------------------------------------------------
//   // 3. SVG CONFIG (THEME SAME)
//   // -------------------------------------------------
//   const svgRef = useRef(null);
//   const chartHeight = 270;
//   const chartWidth = 1240;
//   const padding = { top: 50, right: 50, bottom: 50, left: 20 };

//   // 🔥 IMPORTANT FIX
//   const yMin = 0;      // 0.00 ab visible hoga
//   const yMax = 32;

//   const getYPosition = (val) => {
//     const ratio = (val - yMin) / (yMax - yMin || 1);
//     return chartHeight - ratio * chartHeight;
//   };

//   const getXPosition = (index) => {
//     const segmentWidth = chartWidth / data.length;
//     return segmentWidth * index + segmentWidth / 2;
//   };

//   // -------------------------------------------------
//   // 4. DOWNLOAD PNG
//   // -------------------------------------------------
//   const downloadChartAsPNG = () => {
//     if (!svgRef.current) return;

//     const svg = svgRef.current;
//     const svgData = new XMLSerializer().serializeToString(svg);
//     const canvas = document.createElement("canvas");
//     const ctx = canvas.getContext("2d");

//     canvas.width = svg.clientWidth || 1300;
//     canvas.height = svg.clientHeight || 600;

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
//       link.click();
//       URL.revokeObjectURL(url);
//     };

//     img.src = url;
//   };

//   // -------------------------------------------------
//   // 5. RENDER
//   // -------------------------------------------------
//   const categories = ["NBFC-MFI", "Bank", "SFB", "NBFC"];
//   const itemsPerCategory = data.length / categories.length;

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         p: 2,
//         backgroundColor: "#ffffff",
//         fontFamily: "sans-serif",
//         overflow: "hidden",
//         position: "relative",
//         pl: "20px",
//       }}
//     >
//       {/* Download */}
//       <Box sx={{ position: "absolute", top: 16, right: 16 }}>
//         <Tooltip title="Download Chart">
//           <IconButton onClick={downloadChartAsPNG}>
//             <DownloadIcon fontSize="small" />
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
//         }}
//       >
//         Interest Rates Across Industries - Min, Avg & Max
//         {availableRangeTitle && ` (${availableRangeTitle})`}
//       </Box>

//       <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
//         <svg
//           ref={svgRef}
//           width={chartWidth + padding.left + padding.right}
//           height={chartHeight + padding.top + padding.bottom}
//           style={{ overflow: "visible" }}
//         >
//           {data.map((item, index) => {
//             const x = getXPosition(index);
//             const minY = getYPosition(item.min);
//             const avgY = getYPosition(item.avg);
//             const maxY = getYPosition(item.max);

//             return (
//               <g key={index}>
//                 <line
//                   x1={padding.left + x}
//                   y1={padding.top + minY}
//                   x2={padding.left + x}
//                   y2={padding.top + maxY}
//                   stroke="#2B60AD"
//                   strokeWidth="2.5"
//                 />

//                 <text
//                   x={padding.left + x}
//                   y={padding.top + maxY - 10}
//                   textAnchor="middle"
//                   fontSize="11px"
//                   fontWeight="bold"
//                   fill="#2B60AD"
//                 >
//                   {item.max.toFixed(2)}%
//                 </text>

//                 <circle
//                   cx={padding.left + x}
//                   cy={padding.top + avgY}
//                   r="4"
//                   fill={item.color}
//                   stroke="#fff"
//                   strokeWidth="1.5"
//                 />

//                 <text
//                   x={padding.left + x - 35}
//                   y={padding.top + avgY + 4}
//                   textAnchor="middle"
//                   fontSize="11px"
//                   fontWeight="bold"
//                   fill={item.color}
//                 >
//                   {item.avg.toFixed(2)}%
//                 </text>

//                 <text
//                   x={padding.left + x}
//                   y={padding.top + minY + 18}
//                   textAnchor="middle"
//                   fontSize="11px"
//                   fontWeight="bold"
//                   fill="#2B60AD"
//                 >
//                   {item.min.toFixed(2)}%
//                 </text>

//                 <text
//                   x={padding.left + x}
//                   y={padding.top + chartHeight + 20}
//                   textAnchor="middle"
//                   fontSize="10px"
//                   fill="#666"
//                 >
//                   {item.quarter}
//                 </text>
//               </g>
//             );
//           })}

//           {/* Category Labels */}
//           {categories.map((cat, i) => (
//             <text
//               key={cat}
//               x={padding.left + getXPosition(i * itemsPerCategory + itemsPerCategory / 2)}
//               y={padding.top + chartHeight + 45}
//               textAnchor="middle"
//               fontSize="15px"
//               fontWeight="500"
//               fill="#444"
//             >
//               {cat}
//             </text>
//           ))}
//         </svg>
//       </Box>
//     </Box>
//   );
// };

// export default AvgIndustryQuaterAll;

// import React, { useMemo, useRef } from "react";
// import { Box, IconButton, Tooltip } from "@mui/material";
// import DownloadIcon from "@mui/icons-material/Download";

// const ENTITY_COLORS = {
//   "NBFC-MFI": "#FDBF11",
//   "Bank": "#39B1AC",
//   "SFB": "#F05D5F",
//   "NBFC": "#69AB44",
// };

// const AvgIndustryQuaterAll = ({
//   graphSingleAllqauter = [],
//   availableRangeTitle = "",
// }) => {

//   // -------------------------------------------------
//   // 1. STATIC 0.00 DATA
//   // -------------------------------------------------
//   const staticZeroData = ["NBFC-MFI", "Bank", "SFB", "NBFC"].flatMap((cat) =>
//     ["Q3 FY 24-25", "Q4 FY 24-25", "Q1 FY 25-26", "Q2 FY 25-26"].map((q) => ({
//       category: cat,
//       quarter: q,
//       min: 0,
//       avg: 0,
//       max: 0,
//       color: ENTITY_COLORS[cat],
//     }))
//   );

//   // -------------------------------------------------
//   // 2. API → CHART DATA
//   // -------------------------------------------------
//   const data = useMemo(() => {
//     if (!Array.isArray(graphSingleAllqauter) || graphSingleAllqauter.length === 0) {
//       return staticZeroData;
//     }

//     const transformed = [];

//     graphSingleAllqauter.forEach((quarterObj) => {
//       if (!Array.isArray(quarterObj.graph6)) return;

//       quarterObj.graph6.forEach((e) => {
//         transformed.push({
//           category: e.entity_type,
//           quarter: quarterObj.period,
//           min: parseFloat(String(e.min_rate).replace("%", "")) || 0,
//           avg: parseFloat(String(e.wirr).replace("%", "")) || 0,
//           max: parseFloat(String(e.max_rate).replace("%", "")) || 0,
//           color: ENTITY_COLORS[e.entity_type] || "#999",
//         });
//       });
//     });

//     return transformed.length ? transformed : staticZeroData;
//   }, [graphSingleAllqauter]);

//   // -------------------------------------------------
//   // 3. SVG CONFIG (FIXED Y-AXIS)
//   // -------------------------------------------------
//   const svgRef = useRef(null);
//   const chartHeight = 270;
//   const chartWidth = 1240;
//   const padding = { top: 50, right: 50, bottom: 50, left: 20 };

//   // ✅ SAME BEHAVIOR AS AvgTrendIndustry
//   const yMin = Math.min(...data.map(d => d.min)) - 2;
//   const yMax = Math.max(...data.map(d => d.max)) + 2;

//   const getYPosition = (val) => {
//     const ratio = (val - yMin) / (yMax - yMin || 1);
//     return chartHeight - ratio * chartHeight;
//   };

//   const getXPosition = (index) => {
//     const segmentWidth = chartWidth / data.length;
//     return segmentWidth * index + segmentWidth / 2;
//   };

//   // -------------------------------------------------
//   // 4. DOWNLOAD
//   // -------------------------------------------------
//   const downloadChartAsPNG = () => {
//     if (!svgRef.current) return;

//     const svg = svgRef.current;
//     const svgData = new XMLSerializer().serializeToString(svg);
//     const canvas = document.createElement("canvas");
//     const ctx = canvas.getContext("2d");

//     canvas.width = svg.clientWidth || 1300;
//     canvas.height = svg.clientHeight || 600;

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
//       link.click();
//       URL.revokeObjectURL(url);
//     };

//     img.src = url;
//   };

//   // -------------------------------------------------
//   // 5. RENDER
//   // -------------------------------------------------
//   const categories = ["NBFC-MFI", "Bank", "SFB", "NBFC"];
//   const itemsPerCategory = data.length / categories.length;

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         p: 2,
//         backgroundColor: "#ffffff",
//         fontFamily: "sans-serif",
//         overflow: "hidden",
//         position: "relative",
//         pl: "20px",
//       }}
//     >
//       <Box sx={{ position: "absolute", top: 16, right: 16 }}>
//         <Tooltip title="Download Chart">
//           <IconButton onClick={downloadChartAsPNG}>
//             <DownloadIcon fontSize="small" />
//           </IconButton>
//         </Tooltip>
//       </Box>

//       <Box
//         sx={{
//           fontSize: "16px",
//           fontWeight: "bold",
//           mb: 2.5,
//           color: "#263238",
//         }}
//       >
//         Interest Rates Across Industries - Min, Avg & Max
//         {availableRangeTitle && ` (${availableRangeTitle})`}
//       </Box>

//       <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
//         <svg
//           ref={svgRef}
//           width={chartWidth + padding.left + padding.right}
//           height={chartHeight + padding.top + padding.bottom}
//           style={{ overflow: "visible" }}
//         >
//           {data.map((item, index) => {
//             const x = getXPosition(index);
//             const minY = getYPosition(item.min);
//             const avgY = getYPosition(item.avg);
//             const maxY = getYPosition(item.max);

//             return (
//               <g key={index}>
//                 <line
//                   x1={padding.left + x}
//                   y1={padding.top + minY}
//                   x2={padding.left + x}
//                   y2={padding.top + maxY}
//                   stroke="#2B60AD"
//                   strokeWidth="2.5"
//                 />

//                 <text
//                   x={padding.left + x}
//                   y={padding.top + maxY - 10}
//                   textAnchor="middle"
//                   fontSize="11px"
//                   fontWeight="bold"
//                   fill="#2B60AD"
//                 >
//                   {item.max.toFixed(2)}%
//                 </text>

//                 <circle
//                   cx={padding.left + x}
//                   cy={padding.top + avgY}
//                   r="4"
//                   fill={item.color}
//                   stroke="#fff"
//                   strokeWidth="1.5"
//                 />

//                 <text
//                   x={padding.left + x - 35}
//                   y={padding.top + avgY + 4}
//                   textAnchor="middle"
//                   fontSize="11px"
//                   fontWeight="bold"
//                   fill={item.color}
//                 >
//                   {item.avg.toFixed(2)}%
//                 </text>

//                 <text
//                   x={padding.left + x}
//                   y={padding.top + minY + 18}
//                   textAnchor="middle"
//                   fontSize="11px"
//                   fontWeight="bold"
//                   fill="#2B60AD"
//                 >
//                   {item.min.toFixed(2)}%
//                 </text>

//                 <text
//                   x={padding.left + x}
//                   y={padding.top + chartHeight + 20}
//                   textAnchor="middle"
//                   fontSize="10px"
//                   fill="#666"
//                 >
//                   {item.quarter}
//                 </text>
//               </g>
//             );
//           })}

//           {categories.map((cat, i) => (
//             <text
//               key={cat}
//               x={padding.left + getXPosition(i * itemsPerCategory + itemsPerCategory / 2)}
//               y={padding.top + chartHeight + 45}
//               textAnchor="middle"
//               fontSize="15px"
//               fontWeight="500"
//               fill="#444"
//             >
//               {cat}
//             </text>
//           ))}
//         </svg>
//       </Box>
//     </Box>
//   );
// };

// export default AvgIndustryQuaterAll;
// import React, { useMemo, useRef } from "react";
// import { Box, IconButton, Tooltip } from "@mui/material";
// import DownloadIcon from "@mui/icons-material/Download";

// const ENTITY_COLORS = {
//   "NBFC-MFI": "#FDBF11",
//   "Bank": "#39B1AC",
//   "SFB": "#F05D5F",
//   "NBFC": "#69AB44",
// };

// const AvgIndustryQuaterAll = ({
//   graphSingleAllqauter = [],
//   availableRangeTitle = "",
// }) => {

//   // -------------------------------------------------
//   // 1. STATIC 0.00 DATA (API se pehle)
//   // -------------------------------------------------
//   const staticZeroData = ["NBFC-MFI", "Bank", "SFB", "NBFC"].flatMap((cat) =>
//     ["Q3 FY 24-25", "Q4 FY 24-25", "Q1 FY 25-26", "Q2 FY 25-26"].map((q) => ({
//       category: cat,
//       quarter: q,
//       min: 0,
//       avg: 0,
//       max: 0,
//       color: ENTITY_COLORS[cat],
//     }))
//   );

//   // -------------------------------------------------
//   // 2. API → CHART DATA
// const data = useMemo(() => {
//   if (!Array.isArray(graphSingleAllqauter) || graphSingleAllqauter.length === 0) {
//     return staticZeroData;
//   }

//   const transformed = [];

//   graphSingleAllqauter.forEach((entityObj) => {
//     const entityType = entityObj.entity_type;

//     if (!Array.isArray(entityObj.quarters)) return;

//     entityObj.quarters.forEach((q) => {
//       transformed.push({
//         category: entityType,
//         quarter: q.period,
//         min: parseFloat(q.min_rate.replace("%", "")) || 0,
//         avg: parseFloat(q.wirr.replace("%", "")) || 0,
//         max: parseFloat(q.max_rate.replace("%", "")) || 0,
//         color: ENTITY_COLORS[entityType] || "#999",
//       });
//     });
//   });

//   return transformed.length ? transformed : staticZeroData;
// }, [graphSingleAllqauter]);


//   // -------------------------------------------------
//   // 3. SVG CONFIG (AvgTrendIndustry jaisa)
//   // -------------------------------------------------
//   const svgRef = useRef(null);
//   const chartHeight = 270;
//   const chartWidth = 1240;
//   const padding = { top: 50, right: 50, bottom: 50, left: 20 };

//   // 🔥 CENTER FIX
//   const yMin = Math.min(...data.map(d => d.min)) - 2;
//   const yMax = Math.max(...data.map(d => d.max)) + 2;

//   const getYPosition = (val) => {
//     const ratio = (val - yMin) / (yMax - yMin || 1);
//     return chartHeight - ratio * chartHeight;
//   };

//   const getXPosition = (index) => {
//     const segmentWidth = chartWidth / data.length;
//     return segmentWidth * index + segmentWidth / 2;
//   };

//   // -------------------------------------------------
//   // 4. DOWNLOAD
//   // -------------------------------------------------
//   const downloadChartAsPNG = () => {
//     if (!svgRef.current) return;

//     const svg = svgRef.current;
//     const svgData = new XMLSerializer().serializeToString(svg);
//     const canvas = document.createElement("canvas");
//     const ctx = canvas.getContext("2d");

//     canvas.width = svg.clientWidth || 1300;
//     canvas.height = svg.clientHeight || 600;

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
//       link.click();
//       URL.revokeObjectURL(url);
//     };

//     img.src = url;
//   };

//   // -------------------------------------------------
//   // 5. RENDER
//   // -------------------------------------------------
//   const categories = ["NBFC-MFI", "Bank", "SFB", "NBFC"];
//   const itemsPerCategory = data.length / categories.length;

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         p: 2,
//         backgroundColor: "#ffffff",
//         fontFamily: "sans-serif",
//         position: "relative",
//         pl: "20px",
//       }}
//     >
//       {/* Download */}
//       <Box sx={{ position: "absolute", top: 16, right: 16 }}>
//         <Tooltip title="Download Chart">
//           <IconButton onClick={downloadChartAsPNG}>
//             <DownloadIcon fontSize="small" />
//           </IconButton>
//         </Tooltip>
//       </Box>

//       {/* 🔥 TITLE — SAME FONT AS CATEGORY */}
//       <Box
//      sx={{
//           fontSize: "16px",
//           fontWeight: "bold",
//           mb: 2.5,
//           color: "#263238",
//           textAlign: "left",
//           pr: 6
//         }}
//       >
//         Interest Rates Across Industries – Min, Avg & Max
//         {availableRangeTitle && ` (${availableRangeTitle})`}
//       </Box>

//       <Box sx={{ display: "flex", justifyContent: "center" }}>
//         <svg
//           ref={svgRef}
//           width={chartWidth + padding.left + padding.right}
//           height={chartHeight + padding.top + padding.bottom}
//           style={{ overflow: "visible" }}
//         >
//           {data.map((item, index) => {
//             const x = getXPosition(index);
//             const minY = getYPosition(item.min);
//             const avgY = getYPosition(item.avg);
//             const maxY = getYPosition(item.max);

//             return (
//               <g key={index}>
//                 <line
//                   x1={padding.left + x}
//                   y1={padding.top + minY}
//                   x2={padding.left + x}
//                   y2={padding.top + maxY}
//                   stroke="#2B60AD"
//                   strokeWidth="2.5"
//                 />

//                 <text
//                   x={padding.left + x}
//                   y={padding.top + maxY - 10}
//                   textAnchor="middle"
//                   fontSize="11px"
//                   fontWeight="bold"
//                   fill="#2B60AD"
//                 >
//                   {item.max.toFixed(2)}%
//                 </text>

//                 <circle
//                   cx={padding.left + x}
//                   cy={padding.top + avgY}
//                   r="4"
//                   fill={item.color}
//                   stroke="#fff"
//                   strokeWidth="1.5"
//                 />

//                 <text
//                   x={padding.left + x - 35}
//                   y={padding.top + avgY + 4}
//                   textAnchor="middle"
//                   fontSize="11px"
//                   fontWeight="bold"
//                   fill={item.color}
//                 >
//                   {item.avg.toFixed(2)}%
//                 </text>

//                 <text
//                   x={padding.left + x}
//                   y={padding.top + minY + 18}
//                   textAnchor="middle"
//                   fontSize="11px"
//                   fontWeight="bold"
//                   fill="#2B60AD"
//                 >
//                   {item.min.toFixed(2)}%
//                 </text>

//                 <text
//                   x={padding.left + x}
//                   y={padding.top + chartHeight + 20}
//                   textAnchor="middle"
//                   fontSize="10px"
//                   fill="#666"
//                 >
//                   {item.quarter}
//                 </text>
//               </g>
//             );
//           })}

//           {/* CATEGORY LABELS */}
//           {categories.map((cat, i) => (
//             <text
//               key={cat}
//               x={padding.left + getXPosition(i * itemsPerCategory + itemsPerCategory / 2)}
//               y={padding.top + chartHeight + 45}
//               textAnchor="middle"
//               fontSize="15px"
//               fontWeight="500"
//               fill="#444"
//             >
//               {cat}
//             </text>
//           ))}
//         </svg>
//       </Box>
//     </Box>
//   );
// };

// export default AvgIndustryQuaterAll;
import React, { useMemo, useRef } from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

const ENTITY_COLORS = {
  "NBFC-MFI": "#FDBF11",
  Bank: "#39B1AC",
  SFB: "#F05D5F",
  NBFC: "#69AB44",
};

const AvgIndustryQuaterAll = ({
  graphSingleAllqauter = [],
  availableRangeTitle = "",
}) => {
  // -------------------------------------------------
  // 1. STATIC ZERO DATA
  // -------------------------------------------------
  const staticZeroData = ["NBFC-MFI", "Bank", "SFB", "NBFC"].flatMap((cat) =>
    ["Q3 FY 24-25", "Q4 FY 24-25", "Q1 FY 25-26", "Q2 FY 25-26"].map((q) => ({
      category: cat,
      quarter: q,
      min: 0,
      avg: 0,
      max: 0,
      color: ENTITY_COLORS[cat],
    }))
  );

  // -------------------------------------------------
  // 2. API → CHART DATA
  // -------------------------------------------------
  const data = useMemo(() => {
    if (!Array.isArray(graphSingleAllqauter) || graphSingleAllqauter.length === 0) {
      return staticZeroData;
    }

    const transformed = [];

    graphSingleAllqauter.forEach((entityObj) => {
      if (!Array.isArray(entityObj.quarters)) return;

      entityObj.quarters.forEach((q) => {
        transformed.push({
          category: entityObj.entity_type,
          quarter: q.period,
          min: parseFloat(q.min_rate.replace("%", "")) || 0,
          avg: parseFloat(q.wirr.replace("%", "")) || 0,
          max: parseFloat(q.max_rate.replace("%", "")) || 0,
          color: ENTITY_COLORS[entityObj.entity_type] || "#999",
        });
      });
    });

    return transformed.length ? transformed : staticZeroData;
  }, [graphSingleAllqauter]);

  // -------------------------------------------------
  // 3. SVG CONFIG
  // -------------------------------------------------
  const svgRef = useRef(null);
  const chartHeight = 270;
  const chartWidth = 1240;
  const padding = { top: 50, right: 50, bottom: 50, left: 30 };

  const yMin = Math.min(...data.map((d) => d.min)) - 2;
  const yMax = Math.max(...data.map((d) => d.max)) + 2;

  const getYPosition = (val) => {
    const ratio = (val - yMin) / (yMax - yMin || 1);
    return chartHeight - ratio * chartHeight;
  };

  const getXPosition = (index) => {
    const segmentWidth = chartWidth / data.length;
    return segmentWidth * index + segmentWidth / 2;
  };

  // -------------------------------------------------
  // 4. DOWNLOAD
  // -------------------------------------------------
  const downloadChartAsPNG = () => {
    if (!svgRef.current) return;

    const svg = svgRef.current;
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = svg.clientWidth || 1300;
    canvas.height = svg.clientHeight || 600;

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
      link.click();
      URL.revokeObjectURL(url);
    };

    img.src = url;
  };

  // -------------------------------------------------
  // 5. RENDER
  // -------------------------------------------------
  const categories = ["NBFC-MFI", "Bank", "SFB", "NBFC"];
  const itemsPerCategory = data.length / categories.length;

  return (
    <Box
      sx={{
        width: "100%",
        p: 2,
        backgroundColor: "#ffffff",
        position: "relative",
        fontFamily: "sans-serif",
      }}
    >
      {/* Download */}
      <Box sx={{ position: "absolute", top: 16, right: 16 }}>
        <Tooltip title="Download Chart">
          <IconButton onClick={downloadChartAsPNG}>
            <DownloadIcon fontSize="small" />
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
        }}
      >
        Interest Rates Across Industries – Min, Avg & Max
        {availableRangeTitle && ` (${availableRangeTitle})`}
      </Box>

      <Box sx={{ display: "flex", justifyContent: "left" }}>
        <svg
          ref={svgRef}
          width={chartWidth + padding.left + padding.right}
          height={chartHeight + padding.top + padding.bottom}
        >
{/* X AXIS LINE (Quarter baseline) */}
<line
  x1={padding.left}
y1={padding.top + chartHeight + 22}
y2={padding.top + chartHeight + 22}
  x2={padding.left + chartWidth}
  stroke="#d0d0d0"
  strokeWidth="1"
/>


          {/* DATA */}
          {data.map((item, index) => {
            const x = getXPosition(index);
            const minY = getYPosition(item.min);
            const avgY = getYPosition(item.avg);
            const maxY = getYPosition(item.max);

            return (
              <g key={index}>
                <line
                  x1={padding.left + x}
                  y1={padding.top + minY}
                  x2={padding.left + x}
                  y2={padding.top + maxY}
                  stroke="#2B60AD"
                  strokeWidth="2.5"
                />

                <text
                  x={padding.left + x}
                  y={padding.top + maxY - 10}
                  textAnchor="middle"
                  fontSize="11px"
                  fontWeight="bold"
                  fill="#2B60AD"
                >
                  {item.max.toFixed(2)}%
                </text>

                <circle
                  cx={padding.left + x}
                  cy={padding.top + avgY}
                  r="4"
                  fill={item.color}
                  stroke="#fff"
                  strokeWidth="1.5"
                />

                <text
                  x={padding.left + x - 35}
                  y={padding.top + avgY + 4}
                  textAnchor="middle"
                  fontSize="11px"
                  fontWeight="bold"
                  fill={item.color}
                >
                  {item.avg.toFixed(2)}%
                </text>

                <text
                  x={padding.left + x}
                  y={padding.top + minY + 18}
                  textAnchor="middle"
                  fontSize="11px"
                  fontWeight="bold"
                  fill="#2B60AD"
                >
                  {item.min.toFixed(2)}%
                </text>

                <text
                  x={padding.left + x}
                  y={padding.top + chartHeight + 6}
                  textAnchor="middle"
                  fontSize="10px"
                  fill="#666"
                >
                  {item.quarter}
                </text>
              </g>
            );
          })}

          {/* ✅ ENTITY SEPARATOR LINES */}
          {categories.map((_, i) => {
            const xIndex = i * itemsPerCategory;
            const x =
              getXPosition(xIndex) - chartWidth / data.length / 2;

            return (
              <line
                key={i}
                x1={padding.left + x}
                y1={padding.top}
                x2={padding.left + x}
                y2={padding.top + chartHeight}
                stroke="#E0E0E0"
                strokeWidth="1"
              />
            );
          })}

          {/* CATEGORY LABELS */}
          {categories.map((cat, i) => (
            <text
              key={cat}
              x={
                padding.left +
                getXPosition(i * itemsPerCategory + itemsPerCategory / 2)
              }
              y={padding.top + chartHeight + 45}
              textAnchor="middle"
              fontSize="15px"
              fontWeight="500"
              fill="#444"
            >
              {cat}
            </text>
          ))}
        </svg>
      </Box>
    </Box>
  );
};

export default AvgIndustryQuaterAll;
