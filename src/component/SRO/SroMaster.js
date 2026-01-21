import { createStyles, makeStyles } from "@material-ui/styles";
import {
  Card,
  Button,
  CardContent,
  CardActions,
  CardActionArea,
} from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import GrassIcon from "@mui/icons-material/Grass";
import { useState, useEffect } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Breadcrumb from "../common/Breadcrumb";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { format } from "date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
// CB SRO - import start from here
import CBVIDKYCSeedingMemberGraph from "./CBReport/CBVIDKYCSeedingMemberGraph";
import CBVIDKYCSeedingIndustryGraph from "./CBReport/CBVIDKYCSeedingIndustryGraph";
import CBDataAcceptanceSmtbMemberGraph from "./CBReport/CBDataAcceptanceSmtbMemberGraph";
import CBDataAcceptanceSmtbIndustryGraph from "./CBReport/CBDataAcceptanceSmtbIndustryGraph";
import CBMonthlySbmsnTable from "./CBReport/CBMonthlySbmsnTable";

//  CB SRO - import end here 



// EB SRO - import start from here
import EBDateofSubmissionTable from "./EBReport/EBDateofSubmissionTable";
import EBOverallKYCMemberGraph from "./EBReport/EBOverallKYCMemberGraph";
import EBCategoryIndustryGp from "./EBReport/EBCategoryIndustryGp";
import EBCategoryGpMember from "./EBReport/EBCategoryGpMember";
import EBOverallKYCIndustryGraph from "./EBReport/EBOverallKYCIndustryGraph";

import EBMonthlyEnquirynhitMemberGp from "./EBReport/EBMonthlyEnquirynhitMemberGp";
import EBMonthlyEnquirynhitIndustryGp from "./EBReport/EBMonthlyEnquirynhitIndustryGp";
import EBOpenToHireGp from "./EBReport/EBOpenToHireGp";
//  EB SRO - import end here
//import Loader from "../../common/Loader";
import Loader from "../common/Loader";

// QAR SRO - import start from here
import QARMonthlySbmsnCICTable from "./QARReport/QARMonthlySbmsnCICTable";
import QARBarChart from "./QARReport/QARBarChart";
import QARPieChart from "./QARReport/QARPieChart";


import QARBarCharttwo from "./QARReport/QARBarCharttwo";

import QARBarChartthree from "./QARReport/QARBarChartthree";
import QARBarChartfour from "./QARReport/QARBarChartfour";

import QARBarChartfive from "./QARReport/QARBarChartfive";
import QARBarChartSix from "./QARReport/QARBarChartSix";
//  QAR SRO - import end here

// CGRMIndex SRO - import start from here
import CGRMIndex from "./CGRM/CGRMIndex";
//  CGRMIndex SRO - import end here

// RBI SRO - import start from here
import RBIIndex from "./RBIReport/RBIIndex";
//  RBI SRO - import end here

// RBI SRO - import start from here
import RBIOthersIndex from "./RBIReport/RBIOthersIndex";

//  RBI SRO - import end here

//cgrm -sro start from here
import NatureofCall from "./CGRM/NatureofCall";
import ProductWiseCall from "./CGRM/ProductWiseCall";
import CategoryWiseComplaintsMember from "./CGRM/CategoryWiseComplaintsMember"
import CategoryWiseComplaintsIndustry from "./CGRM/CategoryWiseComplaintsIndustry"
import CategoryWiseQuery from "./CGRM/CategoryWiseQuery";
import CategoryWiseComplaint from "./CGRM/CategoryWiseComplaint";
import CategoryWiseStatus from "./CGRM/CategoryWiseStatus";
import ResulationTAT from "./CGRM/ResulationTAT";
import OriginOfCall from "./CGRM/OriginOfCall";
import OriginOfCallIndustry from "./CGRM/OriginOfCallIndustry"

import ComplaintStatus from "./CGRM/ComplaintStatus";
import ReportTable from "./CGRM/ReportTable";
import AverageTAT from "./CGRM/AverageTAT";

//irsro
import TableParameterMember from "./IntrestRate/TableParameterMember";
import newtablebackup from "./IntrestRate/newtablebackup";

import MinimumMaximumIntrestRateMember from "./IntrestRate/MinimumMaximumIntrestRateMember"
import MinimumMaximumIntrestRateIndustry from "./IntrestRate/MinimumMaximumIntrestRateIndustry"

import IntrestOverQuatersMember from "./IntrestRate/IntrestOverQuatersMember";
import IntrestOverQuatersIndustry from "./IntrestRate/IntrestOverQuatersIndustry"

import AvgTrendMember from "./IntrestRate/AvgTrendMember";
import AvgTrendIndustry from "./IntrestRate/AvgTrendIndustry";
import AvgIndustryQuaterAll from "./IntrestRate/AvgInudtryQuaterAll"
// ***************  Others  : End ************************

import {
  qarDropdownDataApi,
  qarParamertersApi,
  gauardrillapi,
  universeashirvadbreah,
  householdbymemeber,
  beachuinverse,
  beachmemeber,
  gauardrillapiuniverse,
  CBDataAcceptanceIndustryGraphapi,
  rbiReportDropDownDataApi,
  rbiQuarterlyDataApi,
  cbMemberlist,
  cbEnititylist,
  cbMemberDataApi,
  cbIndustryDataApi,
  dropdownofcgrm,
  table1cgrm,
  graph1cgrm,
  graph2cgrm,
  graph3cgrm,
  graph4cgrm,
  graph5cgrm,
  graph6cgrm,
  graph7cgrm,
  graph8cgrm,
  table2cgrm,
  table3cgrm,
  //irurls
  filterofirApi,
  tableofir,
  minimumaxir,
  intretrateir,
  garph56ir,
  graphSingleAllqauter


} from "../url/url";
import { BaseUrl } from "../url/url";
import axios from "axios";
import authHeaders from "../Service/AuthHeaders";
import parse from "html-react-parser";
const useStyle = makeStyles((theme) =>
  createStyles({
    Buttonbg: {
      backgroundColor: "#058283 !important",
    },
  })
);
const SroMaster = () => {
  const classes = useStyle();

  const [value, setValue] = useState("1");

  var userdetails = JSON.parse(localStorage.getItem('user'));
  // var userMFI = "Arohan";
  // var userRole = userdetails.data.role_namess || "";
  // const isAdmin = userRole === 'Admin' || userRole === 'admin';
  console.log("userdetails", userdetails);

  var userMFI = userdetails.data.user.MFI_Name || "";
  var userRole = userdetails.data.role_name || "";
  const isAdmin = userRole === 'Admin' || userRole === 'admin';
  // var role_id = 17;
  // var role_name = userdetails.data.role_name || "";




  const [mDataSubmissionSeries, setMDataSubmissionSeries] = useState([]);
  const [mDataSubmissionLabels, setMDataSubmissionLabels] = useState([]);
  const [mKycSeedingSeries, setMKycSeedingSeries] = useState([]);
  const [memberName, setMemberName] = useState("");
  //industry level
  const [iDataSubmissionSeries, setIDataSubmissionSeries] = useState([]);
  const [iDataSubmissionLabels, setIDataSubmissionLabels] = useState([]);
  const [iKycSeedingSeries, setIKycSeedingSeries] = useState([]);

  const formInitialState = {
    member: userMFI ? userMFI : "",
    // member: "",
    toMonth: "",
    isLoader: false,
    isDisabled: false,
    minDate: "",
    maxDate: "",
  };
  const [formState, setFormState] = useState(formInitialState);
  const [entity, setEntity] = useState("");
  const [startMonth, setStartMonth] = useState("");
  const [members, setMembers] = useState([]);
  const [Quatars, setQuatarList] = useState([]);
  //EB industry graph states
  const [ebIOverKycMember, setEbIOverKycMember] = useState([]);
  const [ebIInquiryHitSeries, setEbIInquiryHitSeries] = useState([]);
  const [ebIndustryLabels, setEbIndustryLabels] = useState([]);

  //EB industry graph data
  const [ebKycIndustryGraph, setEbKycIndustryGraph] = useState(null);

  //EB member graph data
  const [ebKycMemberGraph, setEbKycMemberGraph] = useState(null);

  const [ebMemberInquiryGData, setEbMemberInquiryGData] = useState(null);
  const [ebIndustryInquiryGData, setEbIndustryInquiryGData] = useState(null);

  const [ebCategoryMemberGData, setEBCategoryMemberGData] = useState([]);
  const [ebCategoryIndustryGData, setEBCategoryIndustryGData] = useState([]);

  const [ebOpenToHireGData, setEbOpenToHireGData] = useState([]);

  // EB member graphs states
  const [ebMOverKycMember, setEbMOverKycMember] = useState([]);
  const [ebMInquiryHitSeries, setEbMInquiryHitSeries] = useState([]);
  const [ebMemberLabels, setEbMemberLabels] = useState([]);

  const [ebcategaryMemberSeries, setEBCategaryMemberSeries] = useState([]);
  const [categoryIndustrySeries, setCategoryIndustrySeries] = useState([]);

  const [QARParametersRecords, setQARParametersRecords] = useState([]);

  const [guardRailsRecords, setGuardRailsRecords] = useState([]);
  const [householdIncomeData, setHouseholdIncomeData] = React.useState(null);
  const [householdIncomeMemberData, setHouseholdIncomeMemberData] =
    React.useState(null);


  const [QARBucketMeetinglabels, setQARBucketMeetinglabels] = useState([]);
  const [QARBucketMeetingSeries, setQARBucketMeetingSeries] = useState([]);
  const [QARBucketMeetingmonthYear, setQARBucketMeetingmonthYear] =
    useState("");

  const [guardRailsChartData, setGuardRailsChartData] = React.useState(null);

  const [guardRailsMemberData, setGuardRailsMemberData] = React.useState(null);

  const [guardRailsIndustryAnalysisData, setGuardRailsIndustryAnalysisData] =
    React.useState(null);

  const [QARStatusACQarterlabels, setQARStatusACQarterlabels] = useState([]);
  const [QARStatusACQarterSeries, setQARStatusACQarterSeries] = useState([]);

  const [memberOrIndustry, setMemberOrIndustry] = useState("");
  const [qarMember, setQarMember] = useState([]);
  const [qarType, setQarType] = useState([]);
  const [qarEntity, setQarEntity] = useState([]);
  const [qarQuarter, setQarQuarter] = useState([]);

  // EB monthly submission

  // Start CGRM Report Information
  const [ReportData, setReportData] = useState(null);
  const [table1cgrm, setTable1cgrm] = useState(null);
  const [graph1cgrm, setgraph1cgrm] = useState(null);
  const [graph2cgrm, setgraph2cgrm] = useState(null);
  const [graph3cgrm, setgraph3cgrm] = useState(null);
  const [graph4cgrm, setgraph4cgrm] = useState(null);
  const [graph5cgrm, setgraph5cgrm] = useState(null);
  const [graph6cgrm, setgraph6cgrm] = useState(null);
  const [graph7cgrm, setgraph7cgrm] = useState(null);

  const [graph8cgrm, setgraph8cgrm] = useState(null);

  const [table3cgrm, settable3cgrm] = useState(null);

  const [table2cgrm, settable2cgrm] = useState(null);





  //latest
  const [natureOfCallQuery, setNatureOfCallQuery] = useState(0);
  const [natureOfCallComplaint, setNatureOfCallComplaint] = useState(0);

  const [productWiseCallData, setProductWiseCallData] = useState({});
  const [originOfCallData, setOriginOfCallData] = useState({});

  const [categoryWiseComplaint, setCategoryWiseComplaint] = useState({});
  const [categoryWiseQuery, setCategoryWiseQuery] = useState({});

  const [complaintStatusData, setcomplaintStatusData] = useState({});

  const [averageTATData, setAverageTATData] = useState({});

  const [NatureofCallSerieslabels, setNatureofCallSerieslabels] = useState([]);
  const [NatureofCallSeries, setNatureofCallSeries] = useState([]);

  const [ProductWiseCallVolumelabels, setProductWiseCallVolumelabels] =
    useState([]);
  const [ProductWiseCallVolumeSeries, setProductWiseCallVolumeSeries] =
    useState([]);

  const [CategoryWiseQuerylabels, setCategoryWiseQuerylabels] = useState([]);
  const [CategoryWiseQuerySeries, setCategoryWiseQuerySeries] = useState([]);

  const [CategoryWiseStatuslabels, setCategoryWiseStatuslabels] = useState([]);
  const [CategoryWiseStatusSeries, setCategoryWiseStatusSeries] = useState([]);

  const [ResulationTATlabels, setResulationTATlabels] = useState([]);
  const [ResulationTATSeries, setResulationTATSeries] = useState([]);

  /* End CGRM Report Information */

  // Start RBI report information

  const [rbiIndexData, setRBIIndexData] = useState([]);
  const [rbiYOYData, setRBIYOYData] = useState([]);
  const [rbiHouseholdData, setRBIHouseholdData] = useState(null);

  // end RBI report information

  //RBI-Others information start here
  const [rbiOthersData, setRBIOthersData] = useState([]);
  const [rbiOthersCOB, setRbiOthersCOB] = useState([]);
  const [rbiOthersPQ, setRbiOthersPQ] = useState([]);

  const [rbiDropdown, setRbiDropdown] = useState({
    fyYears: [],
    quarters: [],
    selectedFY: "",
    selectedQuarter: "",
    isLoader: false,
  });

  const [rbiQuarterlyReportData, setRbiQuarterlyReportData] = useState([]);

  //SRO - CB dropdown
  const [cbDropdown, setCBDropdown] = useState({
    members: [],
    entities: [],
    startMonth: null,
    endMonth: null,
    selectedMember: userMFI ? userMFI : "",
    selectedEntity: "",
    selectedMonth: null,
    isLoader: false,
    isAdmin: isAdmin
  });

  const [industryRecords, setIndustryRecords] = useState({
    months: [],
    data: {},
    filters: {}
  });

  const [memberRecords, setMemberRecords] = useState({
    months: [],
    data: {},
    filters: {}
  });

  //kyc and vid fill rate
  const [vidKycGraph, setVidKycGraph] = useState({
    months: [],
    data: [],
    title: ""
  });

  const [industryGraphData, setIndustryGraphData] = useState([]);
  const [industryGraphDataTitle, setIndustryGraphDataTitle] = useState([]);

  const [cbDataAcceptanceMember, setCBDataAcceptanceMember] = useState([])
  const [cbDataAcceptanceIndustry, setCBDataAcceptanceIndustry] = useState([])

  //SRO CGRM data

  //SRO - CGRM dropdown

  const [cgrmDropdown, setCGRMDropdown] = useState({
    members: [],
    quarters: [],
    entities: [],
    startMonth: null,
    endMonth: null,
    selectedMember: userMFI ? userMFI : "",
    // selectedMember: "",
    selectedEntity: "",
    selectedQuarter: "",
    isLoader: false,
  });


  //sro 

  const [filterofir, setfilterofir] = useState({
    // Dropdown options from API
    entities: [],        // API: filters.entity_type
    short_name: [],      // API: filters.short_name
    period_type: [],     // API: filters.period_type
    period: [],          // API: filters.period

    // Selected values
    selectedEntity: "",
    selectedShortName: userMFI ? userMFI : "",
    // selectedShortName: "",
    selectedPeriodType: "",
    selectedPeriod: "",

    // Optional
    startMonth: null,
    endMonth: null,

    // Loader
    isLoader: false,
  });


  const [tableofir, settableofir] = useState([]);
  const [minimumaxir, setminimumaxir] = useState([]);
  const [intretrateir, setintretrateir] = useState([]);
  const [garph56ir, setgarph56ir] = useState([]);
  const [graphSingleAllqauter, setgraphSingleAllqauter] = useState([]);



  const [availableRangeTitle, setAvailableRangeTitle] = useState("");





  //RBI-Others information end here

  const [ebMemberMonthlySubmission, setEbMemberMonthlySubmission] =
    useState("");
  const [ebIndustryMonthlySubmission, setEbIndustryMonthlySubmission] =
    useState("");
  const [ebUniqueEntity, setEbUniqueEntity] = useState("");
  const [ebentity, setEbEntity] = useState("");

  const handleChange1 = (event, newValue) => {
    setValue(newValue);
    setStartMonth("");
  };
  const graphFilterInitialState = {
    fromMonth: new Date("Aug-2018"),
    toMonth: new Date("Mar-2019"),
    maxDate: new Date("Feb-2025"),
    Quatar: "Mar-23",
    Period: "Q4 FY 22-23",
    dateSeries: "2017",
    isLoader: false,
    isDisabled: false,
  };
  const [graphFilter, setGraphFilter] = useState(graphFilterInitialState);
  const handleGraphToDateChange = (e) => {
    console.log("Value", e.target.value);
    setFormState({ ...formState, ["Quatar"]: e.target.value });
    setGraphFilter({ ...graphFilter, ["Quatar"]: e.target.value });
  };


  const getCGRMData = async (memberParam = null, quarterParam = null) => {
    const quarter = quarterParam || graphFilter.Quarter;
    const member = memberParam || formState.member;

    console.log("🚀 Starting CGRM data fetch...");
    console.log("📊 Parameters:", { member, quarter });

    // STEP 1: Fetch table1 data
    try {
      const url = `${BaseUrl}/api/auth/CGRM_getTable1Data?member=${encodeURIComponent(member)}&quarter=${encodeURIComponent(quarter)}&entity_type=${cgrmDropdown.selectedEntity}`;

      console.log("🔗 Table1 API URL:", url);

      const table1Response = await axios.get(url, {
        headers: authHeaders(),
      });

      console.log("✅ Table1 API Response:", table1Response.data);

      if (table1Response.data.status) {
        const reportData = {
          member: member,
          quarter: quarter,
          table1: table1Response.data.table1,
          default_member: table1Response.data.default_member,
          default_quarter: table1Response.data.default_quarter
        };

        console.log("📊 Setting table1cgrm:", reportData);
        setTable1cgrm(reportData);
      } else {
        console.log("❌ API returned status false");
        setTable1cgrm(null);
      }
    } catch (error) {
      console.error("❌ Error fetching table1 data:", error);
      if (error.response) {
        console.error("Error response:", error.response.data);
      }
      setTable1cgrm(null);
    }

    // STEP 2: Fetch Member-specific Nature of Calls
    try {
      const url = `${BaseUrl}/api/auth/Nature_of_calls_Member?member=${encodeURIComponent(member)}&quarter=${encodeURIComponent(quarter)}`;
      console.log("🔗 Nature of Calls MEMBER API URL:", url);

      const memberResponse = await axios.get(url, {
        headers: authHeaders(),
      });

      console.log("✅ Nature of Calls MEMBER Response:", memberResponse.data);

      if (memberResponse.data.status) {
        const reportData = {
          member: memberResponse.data.member || member,
          quarter: memberResponse.data.quarter || quarter,
          chart1: memberResponse.data.chart1 || [],
        };

        console.log("📊 Setting graph1cgrm:", reportData);
        setgraph1cgrm(reportData);
      } else {
        console.log("❌ MEMBER API returned status false");
        setgraph1cgrm(null);
      }
    } catch (error) {
      console.error("❌ Error fetching Nature of Calls MEMBER data:", error);
      setgraph1cgrm(null);
    }

    // STEP 3: Fetch Industry-wide Nature of Calls
    try {
      const url = `${BaseUrl}/api/auth/Nature_of_calls_Industry?member=${encodeURIComponent(member)}&quarter=${encodeURIComponent(quarter)}&entity_type=${cgrmDropdown.selectedEntity}`;


      const industryResponse = await axios.get(url, {
        headers: authHeaders(),
      });

      console.log("Nature of Calls INDUSTRY Response", industryResponse);

      if (industryResponse.data.status) {
        const reportData = {
          member: industryResponse.data.member || member,
          quarter: industryResponse.data.quarter || quarter,
          chart1: industryResponse.data.chart1 || [],
          title: industryResponse.data.title || ""
        };

        console.log("📊 Setting graph2cgrm:", reportData);
        setgraph2cgrm(reportData);
      } else {
        console.log("❌ INDUSTRY API returned status false");
        setgraph2cgrm(null);
      }
    } catch (error) {
      console.error("❌ Error fetching Nature of Calls INDUSTRY data:", error);
      setgraph2cgrm(null);
    }

    // STEP 4: Fetch Category Wise Complaints Member data
    try {
      const url = `${BaseUrl}/api/auth/categoryWiseComplaintsMember?member=${encodeURIComponent(member)}&quarter=${encodeURIComponent(quarter)}`;
      console.log("🔗 Category Wise Complaints Member API URL:", url);

      const cwcmResponse = await axios.get(url, {
        headers: authHeaders(),
      });

      console.log("✅ Category Wise Complaints Member Response:", cwcmResponse.data);

      if (cwcmResponse.data.status) {
        const reportData = {
          member: cwcmResponse.data.member || member,
          quarter: cwcmResponse.data.quarter || quarter,
          chart3: cwcmResponse.data.chart3 || [],
          total: cwcmResponse.data.total || 0,
        };

        console.log("📊 Setting graph3cgrm:", reportData);
        setgraph3cgrm(reportData);
      } else {
        console.log("❌ Category Wise Complaints Member API returned status false");
        setgraph3cgrm(null);
      }
    } catch (error) {
      console.error("❌ Error fetching Category Wise Complaints Member data:", error);
      setgraph3cgrm(null);
    }

    // STEP 5: Fetch Category Wise Complaints Industry data
    try {
      const url = `${BaseUrl}/api/auth/categoryWiseComplaintsIndustry?member=${encodeURIComponent(member)}&quarter=${encodeURIComponent(quarter)}&entity_type=${cgrmDropdown.selectedEntity}`;
      console.log("Category Wise Complaints Industry API URL:", url);

      const cwciResponse = await axios.get(url, {
        headers: authHeaders(),
      });

      console.log("Category Wise Complaints Industry Response:", cwciResponse.data);

      if (cwciResponse.data.status) {
        const reportData = {
          member: cwciResponse.data.member || member,
          quarter: cwciResponse.data.quarter || quarter,
          chart3: cwciResponse.data.chart3 || [],
          total: cwciResponse.data.total || 0,
          entity: cwciResponse.data.entity || ""
        };

        console.log("📊 Setting graph4cgrm:", reportData);
        setgraph4cgrm(reportData);
      } else {
        console.log("❌ Category Wise Complaints Industry API returned status false");
        setgraph4cgrm(null);
      }
    } catch (error) {
      console.error("❌ Error fetching Category Wise Complaints Industry data:", error);
      setgraph4cgrm(null);
    }

    // STEP 6: Fetch Category Wise Queries Member data
    try {
      const url = `${BaseUrl}/api/auth/categoryWiseQueriesMember?member=${encodeURIComponent(member)}&quarter=${encodeURIComponent(quarter)}`;
      console.log("🔗 Category Wise Queries Member API URL:", url);

      const cwqmResponse = await axios.get(url, {
        headers: authHeaders(),
      });

      console.log("✅ Category Wise Queries Member Response:", cwqmResponse.data);

      if (cwqmResponse.data.status) {
        const reportData = {
          member: cwqmResponse.data.member || member,
          quarter: cwqmResponse.data.quarter || quarter,
          chart5: cwqmResponse.data.chart5 || [],
          total: cwqmResponse.data.total || 0,
        };

        console.log("📊 Setting graph5cgrm:", reportData);
        setgraph5cgrm(reportData);
      } else {
        console.log("❌ Category Wise Queries Member API returned status false");
        setgraph5cgrm(null);
      }
    } catch (error) {
      console.error("❌ Error fetching Category Wise Queries Member data:", error);
      setgraph5cgrm(null);
    }

    // STEP 7: Fetch Category Wise Queries Industry data
    try {
      const url = `${BaseUrl}/api/auth/categoryWiseQueriesIndustry?member=${encodeURIComponent(member)}&quarter=${encodeURIComponent(quarter)}&entity_type=${cgrmDropdown.selectedEntity}`;
      console.log("🔗 Category Wise Queries Industry API URL:", url);

      const cwqiResponse = await axios.get(url, {
        headers: authHeaders(),
      });

      console.log("Category Wise Queries Industry Response:", cwqiResponse.data);

      if (cwqiResponse.data.status) {
        const reportData = {
          member: cwqiResponse.data.member || member,
          quarter: cwqiResponse.data.quarter || quarter,
          chart5: cwqiResponse.data.chart5 || [],
          total: cwqiResponse.data.total || 0,
          entity: cwqiResponse.data.entity_type || "Universe"
        };

        console.log("📊 Setting graph6cgrm:", reportData);
        setgraph6cgrm(reportData);
      } else {
        console.log("❌ Category Wise Queries Industry API returned status false");
        setgraph6cgrm(null);
      }
    } catch (error) {
      console.error("❌ Error fetching Category Wise Queries Industry data:", error);
      setgraph6cgrm(null);
    }

    // STEP 8: Fetch Origin of Complaints & Queries Member data
    try {
      const url = `${BaseUrl}/api/auth/OriginOfComplaintsQueriesMember?member=${encodeURIComponent(member)}&quarter=${encodeURIComponent(quarter)}`;
      console.log("🔗 Origin of Complaints & Queries Member API URL:", url);

      const originResponse = await axios.get(url, {
        headers: authHeaders(),
      });

      console.log("✅ Origin of Complaints & Queries Member Response:", originResponse.data);

      if (originResponse.data && originResponse.data.status) {
        const reportData = {
          entity_type: originResponse.data.entity_type,
          quarter: originResponse.data.quarter || quarter,
          chart7: originResponse.data.chart7 || [],
          member: originResponse.data.member || ""
        };

        console.log("📊 Setting table3cgrm:", reportData);
        settable3cgrm(reportData);
      } else {
        console.log("❌ API returned status false or no status");
        settable3cgrm(null);
      }
    } catch (error) {
      console.error("❌ Error:", error);
      settable3cgrm(null);
    }

    // STEP 9: Fetch Origin of Complaints & Queries Industry data
    try {
      const url = `${BaseUrl}/api/auth/OriginOfComplaintsQueriesIndustry?member=${encodeURIComponent(member)}&quarter=${encodeURIComponent(quarter)}&entity_type=${cgrmDropdown.selectedEntity}`;
      console.log("🔗 Origin of Complaints & Queries Industry API URL:", url);

      const originResponse = await axios.get(url, {
        headers: authHeaders(),
      });

      console.log("✅ Origin of Complaints & Queries Industry Response:", originResponse.data);

      if (originResponse.data && originResponse.data.status) {
        const reportData = {
          entity_type: originResponse.data.entity_type,
          quarter: originResponse.data.quarter || quarter,
          chart8: originResponse.data.chart8 || [],
        };

        console.log("📊 Setting table2cgrm:", reportData);
        settable2cgrm(reportData);
      } else {
        console.log("❌ API returned status false or no status");
        settable2cgrm(null);
      }
    } catch (error) {
      console.error("❌ Error:", error);
      settable2cgrm(null);
    }

    // STEP 10: Fetch Average TAT Member data
    try {
      const url = `${BaseUrl}/api/auth/averageTATMember?member=${encodeURIComponent(member)}&quarter=${encodeURIComponent(quarter)}`;
      console.log("🔗 Average TAT Member API URL:", url);

      const tatMemberResponse = await axios.get(url, {
        headers: authHeaders(),
      });

      console.log("✅ Average TAT Member Response:", tatMemberResponse.data);

      if (tatMemberResponse.data.status) {
        const reportData = {
          member: tatMemberResponse.data.member || member,
          quarter: tatMemberResponse.data.quarter || quarter,
          chart9: tatMemberResponse.data.chart9 || [],
          total_closed: tatMemberResponse.data.total_closed || 0,
        };

        console.log("📊 Setting graph7cgrm:", reportData);
        setgraph7cgrm(reportData);
      } else {
        console.log("❌ Average TAT Member API returned status false");
        setgraph7cgrm(null);
      }
    } catch (error) {
      console.error("❌ Error fetching Average TAT Member data:", error);
      setgraph7cgrm(null);
    }

    // STEP 11: Fetch Average TAT Industry data
    try {
      const url = `${BaseUrl}/api/auth/averageTATIndustry?member=${encodeURIComponent(member)}&quarter=${encodeURIComponent(quarter)}&entity_type=${cgrmDropdown.selectedEntity}`;
      console.log("🔗 Average TAT Industry API URL:", url);

      const tatResponse = await axios.get(url, {
        headers: authHeaders(),
      });

      console.log("✅ Average TAT Industry Response:", tatResponse.data);

      if (tatResponse.data.status) {
        const reportData = {
          entity_type: tatResponse.data.entity_type,
          quarter: tatResponse.data.quarter || quarter,
          chart10: tatResponse.data.chart10 || [],
          total_closed: tatResponse.data.total_closed || 0,
        };

        console.log("📊 Setting graph8cgrm:", reportData);
        setgraph8cgrm(reportData);
      } else {
        console.log("❌ Average TAT Industry API returned status false");
        setgraph8cgrm(null);
      }
    } catch (error) {
      console.error("❌ Error fetching Average TAT Industry data:", error);
      setgraph8cgrm(null);
    }
  };



  // Add this function to your parent component where getCGRMData is defined

  const getIRData = async () => {
    const shortName = filterofir.selectedShortName;
    const entityType = filterofir.selectedEntity;
    const periodType = filterofir.selectedPeriodType;
    const periodValue = filterofir.selectedPeriod;

    console.log("🚀 Starting IR data fetch...");
    console.log("📊 Parameters:", { shortName, entityType, periodType, periodValue });

    try {
      const url = `${BaseUrl}/api/auth/getInterestRateTables_Meb_Ind?shortName=${encodeURIComponent(shortName)}&entityType=${encodeURIComponent(entityType)}&periodType=${encodeURIComponent(periodType)}&periodValue=${encodeURIComponent(periodValue)}`;

      console.log("🔗 Interest Rate API URL:", url);

      const irResponse = await axios.get(url, {
        headers: authHeaders(),
      });

      console.log("✅ Interest Rate API Response:", irResponse.data);

      if (irResponse.data.status) {
        const reportData = {
          table1_member: irResponse.data.table1_member,
          table2_entity: irResponse.data.table2_entity
        };

        console.log("📊 Setting tableofir:", reportData);
        settableofir(reportData);
      } else {
        console.log("❌ API returned status false");
        settableofir(null);
      }
    } catch (error) {
      console.error("❌ Error fetching Interest Rate data:", error);
      if (error.response) {
        console.error("Error response:", error.response.data);
      }
      settableofir(null);
    }
  };

  const getIRGraphData = async () => {
    const shortName = filterofir.selectedShortName;
    const entityType = filterofir.selectedEntity; // optional
    const periodType = filterofir.selectedPeriodType;
    const periodValue = filterofir.selectedPeriod;

    console.log("🚀 Starting IR Graph data fetch...");
    console.log("📊 Parameters:", { shortName, entityType, periodType, periodValue });

    // Required parameter check (entityType is optional)
    if (!shortName || !periodType || !periodValue) {
      console.error("❌ Missing required parameters!");
      setminimumaxir(null);
      return;
    }

    try {
      // Build URL dynamically
      let url = `${BaseUrl}/api/auth/getInterestRateGraphDataMin_max_val_Meb_Ind?shortName=${encodeURIComponent(shortName)}&periodType=${encodeURIComponent(periodType)}&periodValue=${encodeURIComponent(periodValue)}`;

      // Append entityType only if it exists
      if (entityType) url += `&entityType=${encodeURIComponent(entityType)}`;

      console.log("🔗 IR Graph API URL:", url);

      const response = await axios.get(url, { headers: authHeaders() });
      console.log("✅ IR Graph API Response:", response.data);

      if (response.data && response.data.status) {
        const reportData = {
          periodType: response.data.periodType,
          graph1_title: response.data.graph1_title,
          graph1_member: response.data.graph1_member || [],
          graph2_title: response.data.graph2_title,
          graph2_entity: response.data.graph2_entity || []
        };

        console.log("📊 Setting minimumaxir:", reportData);
        setminimumaxir(reportData);
      } else {
        console.log("❌ API returned status false");
        setminimumaxir(null);
      }
    } catch (error) {
      console.error("❌ Error fetching IR Graph data:", error);
      if (error.response) {
        console.error("Error response:", error.response.data);
        console.error("Error status:", error.response.status);
      }
      setminimumaxir(null);
    }
  };

  const getIRGraphDataNew = async () => {
    const shortName = filterofir.selectedShortName;
    const entityType = filterofir.selectedEntity; // optional
    const periodType = filterofir.selectedPeriodType;
    const periodValue = filterofir.selectedPeriod;

    console.log("🚀 Starting NEW IR Graph data fetch...");
    console.log("📊 Parameters:", { shortName, entityType, periodType, periodValue });

    // Required parameter check (entityType is optional)
    if (!shortName || !periodType || !periodValue) {
      console.error("❌ Missing required parameters!");
      setintretrateir(null);
      return;
    }

    try {
      // Build URL dynamically
      let url = `${BaseUrl}/api/auth/get_InterestRate_Graph_Men_Ind?shortName=${encodeURIComponent(shortName)}&periodType=${encodeURIComponent(periodType)}&periodValue=${encodeURIComponent(periodValue)}`;

      // Append entityType only if it exists
      if (entityType) url += `&entityType=${encodeURIComponent(entityType)}`;

      console.log("🔗 NEW IR Graph API URL:", url);

      const response = await axios.get(url, { headers: authHeaders() });
      console.log("✅ NEW IR Graph API Response:", response.data);

      if (response.data && response.data.status) {
        const reportData = {
          periodType: response.data.periodType,
          graph3_title: response.data.graph3_title,
          graph3_member: response.data.graph3_member || [],
          graph4_title: response.data.graph4_title,
          graph4_entity: response.data.graph4_entity || []
        };

        console.log("📊 Setting intretrateir:", reportData);
        setintretrateir(reportData);
      } else {
        console.log("❌ API returned status false");
        setintretrateir(null);
      }
    } catch (error) {
      console.error("❌ Error fetching NEW IR Graph data:", error);
      if (error.response) {
        console.error("Error response:", error.response.data);
        console.error("Error status:", error.response.status);
      }
      setintretrateir(null);
    }
  };

  // const getGraph56Data = async () => {
  //   const shortName = filterofir.selectedShortName;
  //   const entityType = filterofir.selectedEntity; // optional
  //   const periodType = filterofir.selectedPeriodType;
  //   const periodValue = filterofir.selectedPeriod;

  //   console.log("🚀 Starting Graph5-6 data fetch...");
  //   console.log("📊 Parameters:", { shortName, entityType, periodType, periodValue });

  //   // Required parameter check
  //   if (!periodType || !periodValue) {
  //     console.error("❌ Missing required parameters!");
  //     setgarph56ir(null);
  //     return;
  //   }

  //   try {
  //     // Build URL dynamically
  //     let url = `${BaseUrl}/api/auth/get_EntityType_WIRR_5_6?periodType=${encodeURIComponent(periodType)}&periodValue=${encodeURIComponent(periodValue)}`;

  //     // Add entityType if provided
  //     if (entityType) {
  //       url += `&entityType=${encodeURIComponent(entityType)}`;
  //     }

  //     // Add shortName if provided
  //     if (shortName) {
  //       url += `&shortName=${encodeURIComponent(shortName)}`;
  //     }

  //     console.log("🔗 Graph5-6 API URL:", url);

  //     const response = await axios.get(url, { headers: authHeaders() });
  //     console.log("✅ Graph5-6 API Response:", response.data);

  //     if (response.data && response.data.status) {
  //       setgarph56ir(response.data);
  //     } else {
  //       console.log("❌ API returned status false");
  //       setgarph56ir(null);
  //     }
  //   } catch (error) {
  //     console.error("❌ Error fetching Graph5-6 data:", error);
  //     if (error.response) {
  //       console.error("Error response:", error.response.data);
  //       console.error("Error status:", error.response.status);
  //     }
  //     setgarph56ir(null);
  //   }
  // };


  const getGraph56Data = async () => {
    const entityType = filterofir.selectedEntity; // optional
    const periodType = filterofir.selectedPeriodType;
    const periodValue = filterofir.selectedPeriod;

    console.log("🚀 Starting Graph5-6 data fetch...");
    console.log("📊 Parameters:", { entityType, periodType, periodValue });

    // Required parameter check
    if (!periodType || !periodValue) {
      console.error("❌ Missing required parameters!");
      setgarph56ir(null);
      return;
    }

    try {
      // Build URL dynamically - without shortName
      let url = `${BaseUrl}/api/auth/get_EntityType_WIRR_5_6?periodType=${encodeURIComponent(periodType)}&periodValue=${encodeURIComponent(periodValue)}`;

      // Add entityType if provided
      if (entityType) {
        url += `&entityType=${encodeURIComponent(entityType)}`;
      }

      // Note: shortName removed from URL parameters

      console.log("🔗 Graph5-6 API URL:", url);

      const response = await axios.get(url, { headers: authHeaders() });
      console.log("✅ Graph5-6 API Response:", response.data);

      if (response.data && response.data.status) {
        setgarph56ir(response.data);
      } else {
        console.log("❌ API returned status false");
        setgarph56ir(null);
      }
    } catch (error) {
      console.error("❌ Error fetching Graph5-6 data:", error);
      if (error.response) {
        console.error("Error response:", error.response.data);
        console.error("Error status:", error.response.status);
      }
      setgarph56ir(null);
    }
  };


  // const getallqautergraph = async () => {
  //   const entityType = filterofir.selectedEntity; // ✅ ONLY FILTER

  //   console.log("🚀 Starting All-Quarter graph data fetch...");
  //   console.log("📊 Entity Type:", entityType);

  //   // Entity required check
  //   if (!entityType) {
  //     console.error("❌ EntityType missing!");
  //     setgraphSingleAllqauter([]);
  //     return;
  //   }

  //   try {
  //     // 🔗 URL with ONLY entityType
  //     let url = `${BaseUrl}/api/auth/get_single_data_all_qauters?entityType=${encodeURIComponent(
  //       entityType
  //     )}`;

  //     console.log("🔗 All-Quarter Graph API URL:", url);

  //     const response = await axios.get(url, {
  //       headers: authHeaders(),
  //     });

  //     console.log("✅ All-Quarter Graph API Response:", response.data);

  //     if (response.data && response.data.status) {
  //       setgraphSingleAllqauter(response.data.data || []);
  //     } else {
  //       console.log("❌ API returned status false");
  //       setgraphSingleAllqauter([]);
  //     }
  //   } catch (error) {
  //     console.error("❌ Error fetching All-Quarter graph data:", error);

  //     if (error.response) {
  //       console.error("Error response:", error.response.data);
  //       console.error("Error status:", error.response.status);
  //     }

  //     setgraphSingleAllqauter([]);
  //   }
  // };



  const getallqautergraph = async () => {
    const entityType = filterofir.selectedEntity;

    if (!entityType) {
      setgraphSingleAllqauter([]);
      setAvailableRangeTitle("");
      return;
    }

    try {
      const url = `${BaseUrl}/api/auth/get_single_data_all_qauters?entityType=${encodeURIComponent(entityType)}`;
      const response = await axios.get(url, { headers: authHeaders() });

      if (response.data && response.data.status) {
        setgraphSingleAllqauter(response.data.data || []);
        setAvailableRangeTitle(response.data.availableRangeTitle || "");
      } else {
        setgraphSingleAllqauter([]);
        setAvailableRangeTitle("");
      }
    } catch (err) {
      setgraphSingleAllqauter([]);
      setAvailableRangeTitle("");
    }
  };

  const chartColorsMap = {
    memberChart: ["#1E3A5F", "#2C7A9E", "#B8B8B8"],
    universeChart: ["#1E3A5F", "#2E9BDE", "#D4E5F0"],
  };
  const applyChartColors = (apiData, chartType) => {
    if (!apiData || !apiData.chart || !apiData.chart.series) return apiData;

    const colors = chartColorsMap[chartType] || [
      "#1E3A5F",
      "#2E9BDE",
      "#D4E5F0",
    ];

    const updatedData = {
      ...apiData,
      chart: {
        ...apiData.chart,
        series: apiData.chart.series.map((series, idx) => ({
          ...series,
          color: colors[idx] || series.color,
        })),
      },
    };

    return updatedData;
  };

  // API service function add karein
  const fetchCGRMDropdownData = async () => {
    try {
      const response = await axios.get(`${BaseUrl}${dropdownofcgrm}`, {
        headers: authHeaders(),
      });
      console.log("resp in cgrm", response.data);
      setCGRMDropdown((prev) => ({
        ...prev,
        members: response.data.member,
        quarters: response.data.quarter,
        entities: response.data.entity,
        isLoader: false,
      }));
    } catch (error) {
      console.error('Error fetching CGRM dropdown data:', error);
      return {
        status: false,
        member: [],
        entity: [],
        quarter: []
      };
    }
  };


  const fetchIRDropdownData = async () => {
    try {
      // Start loader
      setfilterofir((prev) => ({
        ...prev,
        isLoader: true,
      }));

      // Build API URL
      const url = filterofir.selectedPeriodType
        ? `${BaseUrl}${filterofirApi}?period_type=${filterofir.selectedPeriodType}`
        : `${BaseUrl}${filterofirApi}`;

      console.log("url", url)

      const response = await axios.get(url, {
        headers: authHeaders(),
      });

      console.log("IR Dropdown Response:", response.data);

      const filters = response.data.filters;

      // Determine period key dynamically based on selectedPeriodType
      let periodOptions = [];
      if (filterofir.selectedPeriodType === "Month") {
        periodOptions = filters.Months || [];
      } else if (filterofir.selectedPeriodType === "Quarter") {
        periodOptions = filters.Quarters || [];
      } else {
        // On initial load, take generic 'period' if exists
        periodOptions = filters.period || [];
      }

      // Update state
      setfilterofir((prev) => ({
        ...prev,
        entities: filters.entity_type || [],
        short_name: filters.short_name || [],
        period_type: filters.period_type || [],
        period: periodOptions,
        isLoader: false,
      }));
    } catch (error) {
      console.error("Error fetching IR dropdown data:", error);

      // fallback – empty data
      setfilterofir((prev) => ({
        ...prev,
        entities: [],
        short_name: [],
        period_type: [],
        period: [],
        isLoader: false,
      }));

      return {
        status: false,
        entity_type: [],
        short_name: [],
        period_type: [],
        period: [],
      };
    }
  };



  const handleEntityChange = (e) => {
    setfilterofir((prev) => ({
      ...prev,
      selectedEntity: e.target.value,
    }));
  };

  const handleShortNameChange = (e) => {
    setfilterofir((prev) => ({
      ...prev,
      selectedShortName: e.target.value,
    }));
  };

  const handlePeriodTypeChange = (e) => {
    const selectedType = e.target.value;

    // Update selected period type
    setfilterofir((prev) => ({
      ...prev,
      selectedPeriodType: selectedType,
      selectedPeriod: "", // Reset selected period
    }));
  };


  const handlePeriodChange = (e) => {
    setfilterofir((prev) => ({
      ...prev,
      selectedPeriod: e.target.value,
    }));
  };



  const getQARData = async () => {


    try {
      // ✅ Encode all values to handle spaces or special characters
      const params = new URLSearchParams({
        lender_name: formState.member,
        quarter: formState.quarter,
        entity: formState.entity,
        filter_type: formState.type,
      });

      const url = `${BaseUrl}/${qarParamertersApi}?${params.toString()}`;
      console.log("✅ Final Encoded URL:", url);

      const response = await axios.get(url, {
        headers: authHeaders(),
      });

      console.log("qar resp table", response.data);

      setQARParametersRecords(response.data);
    } catch (error) {
      console.log("err in qar table", error);
    }
  };

  const getQARBucketMeetingData = async () => {
    var queryString = Object.keys(formState)
      .map((key) => key + "=" + formState[key])
      .join("&");
    // sro-get-QAR-paramters- indusrty Level
    await axios
      .get(`${BaseUrl}/api/auth/sro-get-QAR-bucketmeeting?${queryString}`, {
        headers: authHeaders(),
      })
      .then((response) => {
        setQARBucketMeetinglabels(response.data.data.labels);
        setQARBucketMeetingSeries(response.data.data.pieSeries);
        setQARBucketMeetingmonthYear(response.data.data.monthYear);
        //setMembers(response.data.MFISelected);
      })
      .catch((error) => {
        console.log("err", error);
      });
    //sro-get-QAR-paramters - member Level
  };
  const getQARStatucAcQarterData = async () => {
    var queryString = Object.keys(formState)
      .map((key) => key + "=" + formState[key])
      .join("&");
    // sro-get-QAR-paramters- indusrty Level
    await axios
      .get(`${BaseUrl}/api/auth/sro-get-QAR-statucacqarter?${queryString}`, {
        headers: authHeaders(),
      })
      .then((response) => {
        setQARStatusACQarterlabels(response.data.data.labels);
        console.log("Raj", response.data.data.labels);
        setQARStatusACQarterSeries(response.data.data.series);
        //setMembers(response.data.MFISelected);
      })
      .catch((error) => {
        console.log("err", error);
      });
    //sro-get-QAR-paramters - member Level
  };

  const getGuardRailsData = async () => {
    console.log("before calling guardrails data");
    console.log("formState", formState);

    try {
      const params = new URLSearchParams({
        lender_name: formState.member,
        quarter: formState.quarter,
        entity: formState.entity,
        filter_type: formState.type,
      });

      const url = `${BaseUrl}/${gauardrillapi}?${params.toString()}`;
      console.log("✅ Guardrails URL:", url);

      const response = await axios.get(url, {
        headers: authHeaders(),
      });

      console.log("Guardrails table response", response.data);
      setGuardRailsRecords(response.data); // store in state to render table
    } catch (error) {
      console.log("err in guardrails table", error);
    }
  };

  const getHouseholdIncomeData = async () => {
    try {
      const params = new URLSearchParams({
        lender_name: formState.member,
        quarter: formState.quarter,
        entity: formState.entity || "universe",
        filter_type: formState.type || "Value",
      });

      const url = `${BaseUrl}${universeashirvadbreah}?${params.toString()}`;
      console.log("✅ Household Income URL:", url);

      const response = await axios.get(url, {
        headers: authHeaders(),
      });

      console.log("Household Income response", response.data);

      if (response.data && response.data.chart) {
        setHouseholdIncomeData(response.data);
      } else {
        console.warn("No chart data in response:", response.data);
        setHouseholdIncomeData({ chart: { series: [], labels: [] } }); // Send empty structure
      }
    } catch (error) {
      console.log("Error in household income chart:", error);
      setHouseholdIncomeData({ chart: { series: [], labels: [] } }); // Send empty structure on error
    }
  };

  const getHouseholdIncomeMemberData = async () => {
    console.log("before calling household income member data");

    console.log("Parameters:", {
      lender_name: formState.member,
      quarter: formState.quarter,
      entity: formState.entity,
      filter_type: formState.type,
    });

    // Validate required fields
    if (!formState.member || !formState.quarter) {
      console.log("Missing required fields - member or quarter");
      setHouseholdIncomeMemberData(null);
      return;
    }

    try {
      const params = new URLSearchParams({
        lender_name: formState.member,
        quarter: formState.quarter,
        entity: formState.entity || "universe",
        filter_type: formState.type || "Volume",
      });

      const url = `${BaseUrl}/${householdbymemeber}?${params.toString()}`;
      console.log("✅ Household Income Member URL:", url);

      const response = await axios.get(url, {
        headers: authHeaders(),
      });

      console.log("Household Income Member response", response.data);

      if (response.data && response.data.chart) {
        setHouseholdIncomeMemberData(response.data);
      } else {
        console.warn("No chart data in response:", response.data);
        setHouseholdIncomeMemberData({ chart: { series: [], labels: [] } });
      }
    } catch (error) {
      console.log("Error in household income member chart:", error);
      setHouseholdIncomeMemberData({ chart: { series: [], labels: [] } });
    }
  };

  const getGuardRailsChartData = async () => {
    console.log("🔄 CALLING getGuardRailsChartData API");

    try {
      const params = new URLSearchParams({
        lender_name: formState.member,
        quarter: formState.quarter,
        entity: formState.entity || "Universe",
        filter_type: formState.type || "Volume",
      });

      const url = `${BaseUrl}${beachuinverse}?${params.toString()}`;
      const response = await axios.get(url, { headers: authHeaders() });

      if (response.data && response.data.chart) {
        const dataWithColors = applyChartColors(response.data, "universeChart");
        setGuardRailsChartData(dataWithColors);
      } else {
        setGuardRailsChartData({ chart: { series: [], labels: [] } });
      }
    } catch (error) {
      console.log("❌ Error:", error);
      setGuardRailsChartData({ chart: { series: [], labels: [] } });
    }
  };

  const getGuardRailsMemberData = async () => {
    console.log("🔄 CALLING getGuardRailsMemberData API");

    if (!formState.member || !formState.quarter) {
      console.log("❌ Missing required fields");
      setGuardRailsMemberData(null);
      return;
    }

    try {
      const params = new URLSearchParams({
        lender_name: formState.member,
        quarter: formState.quarter,
        entity: formState.entity || "universe",
        filter_type: formState.type || "Volume",
      });

      const url = `${BaseUrl}/${beachmemeber}?${params.toString()}`;
      const response = await axios.get(url, { headers: authHeaders() });

      if (response.data && response.data.chart) {
        const dataWithColors = applyChartColors(response.data, "memberChart");
        setGuardRailsMemberData(dataWithColors);
      } else {
        setGuardRailsMemberData({ chart: { series: [], labels: [] } });
      }
    } catch (error) {
      console.log("❌ Error:", error);
      setGuardRailsMemberData({ chart: { series: [], labels: [] } });
    }
  };

  const getGuardRailsIndustryAnalysisData = async () => {
    try {
      const params = new URLSearchParams({
        lender_name: formState.member,
        quarter: formState.quarter,
        entity: formState.entity || "Universe",
        filter_type: formState.type || "Volume",
      });

      const url = `${BaseUrl}${gauardrillapiuniverse}?${params.toString()}`;

      const response = await axios.get(url, {
        headers: authHeaders(),
      });

      console.log("Guardrails Industry Analysis API Response:", response.data);

      if (response.data) {
        console.log("Setting guardRailsIndustryAnalysisData with data");
        setGuardRailsIndustryAnalysisData(response.data);
      } else {
        console.warn("No data in response:", response.data);
        setGuardRailsIndustryAnalysisData({ chart_data: [] });
      }
    } catch (error) {
      console.log("Error in guardrails industry analysis:", error);
      if (error.response && error.response.data) {
        console.log("Error response:", error.response.data);
      }
      setGuardRailsIndustryAnalysisData({ chart_data: [] });
    }
  };

  const getEmployeeBureauData = async () => {
    // member levels monthly submission

    await axios
      .get(
        `${BaseUrl}/api/auth/dateSubmissionMemberLevelNew?short_name=${encodeURIComponent(formState.member)}&month=${formState.toMonth}&entity=${ebentity}`,
        {
          headers: authHeaders(),
        }
      )
      .then((response) => {
        console.log("resp dateSubmissionMemberLevelNew", response);
        setEbMemberMonthlySubmission(response.data.EbMemberLevelNewdata);
        setEbIndustryMonthlySubmission(response.data.EbIndustryLevelNewdata);
      })
      .catch((error) => {
        console.log("err", error);
      });

    // industry kyc fill rate and monthly total enquiry and hit volume
    await axios
      .get(
        `${BaseUrl}/api/auth/getKycFillRatesIndustry?short_name=${formState.member}&month=${formState.toMonth}&entity=${ebentity}`,
        {
          headers: authHeaders(),
        }
      )
      .then((response) => {
        setEbKycIndustryGraph(response.data.chart);
      })
      .catch((error) => {
        console.log("err", error);
      });

    // member kyc fill rate and monthly total enquiry and hit volume
    await axios
      .get(
        `${BaseUrl}/api/auth/getKycFillRatesMember?short_name=${encodeURIComponent(formState.member)}&month=${formState.toMonth}`,
        {
          headers: authHeaders(),
        }
      )
      .then((response) => {
        console.log("resp in getkyc mg", response);
        setEbKycMemberGraph(response.data.chart);
      })
      .catch((error) => {
        console.log("err", error);
      });

    //  get Monthly Enquiries Hit Volumes Member
    await axios
      .get(
        `${BaseUrl}/api/auth/getMonthlyEnquiriesHitVolumesMember?short_name=${encodeURIComponent(formState.member)}&month=${formState.toMonth}`,
        {
          headers: authHeaders(),
        }
      )
      .then((response) => {
        setEbMemberInquiryGData(response.data.chart);
      })
      .catch((error) => {
        console.log("err", error);
      });

    // get Monthly Enquiries Hit Volumes Industry
    await axios
      .get(
        `${BaseUrl}/api/auth/getMonthlyEnquiriesHitVolumesIndustry?short_name=${formState.member}&month=${formState.toMonth}&entity=${ebentity}`,
        {
          headers: authHeaders(),
        }
      )
      .then((response) => {
        setEbIndustryInquiryGData(response.data.chart);
      })
      .catch((error) => {
        console.log("err", error);
      });

    // sro-get-eb-member-graph-data-new
    await axios
      .get(
        `${BaseUrl}/api/auth/sro-get-eb-member-graph-data-new?short_name=${encodeURIComponent(formState.member)}&month=${formState.toMonth}`,
        {
          headers: authHeaders(),
        }
      )
      .then((response) => {
        setEBCategoryMemberGData(response.data.chart);
      })
      .catch((error) => {
        console.log("err", error);
      });

    //sro-get-eb-indusry-graph-data-new
    await axios
      .get(
        `${BaseUrl}/api/auth/sro-get-eb-indusry-graph-data-new?short_name=${formState.member}&month=${formState.toMonth}&entity=${ebentity}`,
        {
          headers: authHeaders(),
        }
      )
      .then((response) => {
        setEBCategoryIndustryGData(response.data.chart);
      })
      .catch((error) => {
        console.log("err", error);
      });

    //sro-get-eb-open-to-hire
    await axios
      .get(
        ` ${BaseUrl}/api/auth/eb-openToRehireGraph?short_name=${formState.member}&month=${formState.toMonth}&entity=${ebentity}`,
        {
          headers: authHeaders(),
        }
      )
      .then((response) => {
        console.log("resp opentohire", response);
        setEbOpenToHireGData(response.data);
      })
      .catch((error) => {
        console.log("err in opentohire", error);
      });
  };

  const getUniqueEntity = async () => {
    try {
      const resp = await axios.get(`${BaseUrl}/api/auth/getUniqueEntities`);
      console.log("unique entity", resp.data.data);
      setEbUniqueEntity(resp.data.data);
      setFormState((prevState) => ({
        ...prevState,
        ["maxDate"]: resp.data.date_range.max_date,
        ["minDate"]: resp.data.date_range.min_date,
      }));
    } catch (err) {
      console.log("error in getting unique entity", err);
    }
  };

  const getCBEntity = async () => {
    try {
      // Fetch Entities API
      const entityResp = await axios.get(`${BaseUrl}/${cbEnititylist}`);
      console.log("entityResp", entityResp);
      let entitiesData = [];

      if (
        entityResp &&
        entityResp.data &&
        entityResp.data.data &&
        Array.isArray(entityResp.data.data.entities)
      ) {
        entitiesData = entityResp.data.data.entities;
      }

      setCBDropdown((prev) => ({
        ...prev,
        entities: entitiesData,
        isLoader: false,
      }));

    } catch (err) {
      console.log("error in getting cb entity", err.response);
    }
  }

  const getCreditBureauData = async () => {
    try {
      const member = cbDropdown.selectedMember;
      const entity = cbDropdown.selectedEntity;
      const month = cbDropdown.selectedMonth;

      console.log("cbDropdown", cbDropdown);

      // Industry Level
      const industryRes = await axios.get(
        `${BaseUrl}/api/auth/industryTable2Metrics?month=${month}&entity=${entity}`,
        { headers: authHeaders() }
      );
      console.log("industryRes", industryRes);

      const ind = industryRes.data;

      setIndustryRecords({
        months: ind && ind.months ? ind.months : [],
        data: ind && ind.data ? ind.data : {},
        filters: ind && ind.filters ? ind.filters : {},
      });

      // Member Level
      const memberRes = await axios.get(
        `${BaseUrl}/api/auth/table1?month=${month}&short_name=${member}`,
        { headers: authHeaders() }
      );
      console.log("memberRes", memberRes);

      const mem = memberRes.data;

      setMemberRecords({
        months: mem && mem.months ? mem.months : [],
        data: mem && mem.data ? mem.data : {},
        filters: mem && mem.filters ? mem.filters : {},
      });

      // ⭐ NEW — Graph API
      const graphRes = await axios.get(
        `${BaseUrl}/api/auth/table1graph1KycVidFillRate?month=${month}&short_name=${member}`,
        { headers: authHeaders() }
      );

      const graphData = graphRes.data;
      console.log("graph data vid member", graphData);
      setVidKycGraph({
        months:
          graphData &&
            graphData.graph1_data &&
            Array.isArray(graphData.graph1_data)
            ? graphData.graph1_data.map((x) => x.Month || "")
            : [],
        data:
          graphData &&
            graphData.graph1_data &&
            Array.isArray(graphData.graph1_data)
            ? graphData.graph1_data
            : [],
        title: graphData.title
      });

      //vid kyc industry graph
      const kycIndustryGraph = await axios.get(
        `${BaseUrl}/api/auth/table1graph2KycVidFillRateIndustry?month=${month}&entity=${entity}`,
        { headers: authHeaders() }
      );

      // transform here (same logic as before)
      const apiData = kycIndustryGraph.data;
      console.log("api data in kycindustry", apiData);

      let transformedIndustryGraph = [];

      if (apiData.graph2_data && Array.isArray(apiData.graph2_data)) {
        transformedIndustryGraph = apiData.graph2_data
          .map((item) => {
            if (
              !item.Month ||
              item.KYC_Fill_Rate === undefined ||
              item.VID_Fill_Rate === undefined
            ) {
              return null;
            }

            return {
              month: item.Month,
              kycFillRate: parseFloat(item.KYC_Fill_Rate.replace("%", "")),
              vidFillRate: parseFloat(item.VID_Fill_Rate.replace("%", "")),
            };
          })
          .filter((d) => d !== null);
      }

      setIndustryGraphData(transformedIndustryGraph);
      setIndustryGraphDataTitle(apiData.title);

      // ---- DATA SUBMISSION GRAPH MEMBER ----
      axios
        .get(
          `${BaseUrl}/api/auth/getGraph3Data?month=${month}&short_name=${member}`,
          { headers: authHeaders() }
        )
        .then((res) => {
          const api = res.data;

          // Directly save correct response structure
          console.log("api data", api);
          setCBDataAcceptanceMember({
            months: api.months || [],
            data: api.graph3_data || [],
            member: api.short_name || ""
          });
        })
        .catch((err) => {
          console.log("Error loading graph3 data", err.response);
          setCBDataAcceptanceMember({ months: [], data: [] });
        });
      // ---- DATA SUBMISSION GRAPH INDUSTRY ----
      axios
        .get(
          `${BaseUrl}/api/auth/getGraph4Data?month=${month}&entity=${entity}`,
          { headers: authHeaders() }
        )
        .then((res) => {
          const api = res.data;

          // Directly save correct response structure
          console.log("api data", api);
          setCBDataAcceptanceIndustry({
            months: api.months || [],
            data: api.graph4_data || [],
            member: api.short_name || "",
            title: api.title
          });
        })
        .catch((err) => {
          console.log("Error loading graph4 data", err.response);
          setCBDataAcceptanceIndustry({ months: [], data: [] });
        });

    } catch (err) {
      console.log("Error in CB table data getting", err.response);
    }
  };




  const getRBIQuarterlyData = async () => {

    try {
      const response = await axios.get(
        `${BaseUrl}/${rbiQuarterlyDataApi}?fy_year=${encodeURIComponent(
          rbiDropdown.selectedFY
        )}&quarter=${encodeURIComponent(rbiDropdown.selectedQuarter)}`,
        {
          headers: authHeaders(),
        }
      );
      setRbiQuarterlyReportData(response.data);
      console.log("sro-rbi-data", response);
    } catch (error) {
      console.log("rbi quarterly error", error);
    }
  };

  const filterRBIReportHandler = async () => {
    setFormState((prevState) => ({
      ...prevState,
      ["isLoader"]: true,
      ["isDisabled"]: true,
    }));

    await getRBIQuarterlyData();

    setFormState((prevState) => ({
      ...prevState,
      ["isLoader"]: false,
      ["isDisabled"]: false,
    }));
  };

  // sbi rbi report end here

  // RBI-Others start here
  const getRBIOthersData = async () => {
    await axios
      .get(`${BaseUrl}/api/auth/getQuarterlyYOYReport`, {
        headers: authHeaders(),
      })
      .then((response) => {
        setRBIOthersData(parse(response.data.table));
        console.log("rbi_others_data", response);
      })
      .catch((error) => {
        console.log("rbi_others_error", error);
        // setRBIOthersData(error.response.data.message)
      });

    //cost of borrowing graph api
    await axios
      .get(
        `${BaseUrl}/api/auth/financial-data?short_name=${formState.member}&Month_As_on=${formState.Quatar}`,
        { headers: authHeaders() }
      )
      .then((response) => {
        setRbiOthersCOB(response.data);
        console.log("others_cob_data", response);
      })
      .catch((error) => {
        console.log("rbi_others_error", error);
      });

    //portfolio quality  graph api
    await axios
      .get(
        `${BaseUrl}/api/auth/par-data?short_name=${formState.member}&Month_As_on=${formState.Quatar}`,
        { headers: authHeaders() }
      )
      .then((response) => {
        setRbiOthersPQ(response.data);
        console.log("others_PQ", response);
      })
      .catch((error) => {
        console.log("rbi_others_error", error);
      });
  };
  //RBI-Others end here

  const handleToDateChange = (date) => {
    if (date) {
      const formattedDate = format(date, "yyyy-MM"); // 👈 gives "2024-02"
      console.log("date in filter", formattedDate);
      setFormState((prev) => ({
        ...prev,
        toMonth: formattedDate,
      }));
    }
  };

  //date change for sro - cb
  const cbhandleToDateChange = (date) => {
    if (date) {
      const formattedDate = format(date, "yyyy-MM"); // 👈 gives "2024-02"
      console.log("date in filter", formattedDate);
      setCBDropdown((prev) => ({
        ...prev,
        selectedMonth: formattedDate,
      }));
    }
  };

  const onValueChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const filterCBHandler = async () => {
    setFormState((prevState) => ({
      ...prevState,
      ["isLoader"]: true,
      ["isDisabled"]: true,
    }));
    await getCreditBureauData();
    setFormState((prevState) => ({
      ...prevState,
      ["isLoader"]: false,
      ["isDisabled"]: false,
    }));
  };

  const filterEBHandler = async () => {
    setFormState((prevState) => ({
      ...prevState,
      ["isLoader"]: true,
      ["isDisabled"]: true,
    }));
    await getUniqueEntity();
    await getEmployeeBureauData();
    setFormState((prevState) => ({
      ...prevState,
      ["isLoader"]: false,
      ["isDisabled"]: false,
    }));
  };

  const filterQARHandler = async () => {
    // Prevent multiple simultaneous calls
    if (formState.isLoader) {
      console.log("🔄 Filter already in progress, skipping...");
      return;
    }

    setFormState((prevState) => ({
      ...prevState,
      isLoader: true,
      isDisabled: true,
    }));

    console.log("🔄 FILTER QAR HANDLER CALLED");
    console.log("Filter:", {
      member: formState.member,
      quarter: formState.quarter,
      entity: formState.entity,
      type: formState.type,
    });

    try {
      // Reset previous data
      setHouseholdIncomeData(null);
      setHouseholdIncomeMemberData(null);
      setGuardRailsChartData(null);
      setGuardRailsMemberData(null);
      setGuardRailsIndustryAnalysisData(null); // Add this line

      // Use sequential calls instead of Promise.all to reduce memory pressure
      await getQARData();
      await getQARBucketMeetingData();
      await getQARStatucAcQarterData();
      await getGuardRailsData();
      await getHouseholdIncomeData();
      await getHouseholdIncomeMemberData();
      await getGuardRailsChartData();
      await getGuardRailsMemberData();
      await getGuardRailsIndustryAnalysisData();
    } catch (error) {
      console.error("❌ Error in filterQARHandler:", error);
      alert("Error loading data. Please try again.");
    } finally {
      setFormState((prevState) => ({
        ...prevState,
        isLoader: false,
        isDisabled: false,
      }));
    }
  };


  const filterCGRMHandler = async () => {


    setFormState((prevState) => ({
      ...prevState,
      isLoader: true,
      isDisabled: true,
    }));

    // ✅ Pass selected values
    await getCGRMData(
      cgrmDropdown.selectedMember,
      cgrmDropdown.selectedQuarter
    );

    setFormState((prevState) => ({
      ...prevState,
      isLoader: false,
      isDisabled: false,
    }));
  };
  const filterRBIOthersHandler = async () => {
    setFormState((prevState) => ({
      ...prevState,
      ["isLoader"]: true,
      ["isDisabled"]: true,
    }));
    await getRBIOthersData();
    setFormState((prevState) => ({
      ...prevState,
      ["isLoader"]: false,
      ["isDisabled"]: false,
    }));
  };
  const filterIRHandler = async () => {
    // Update the form state
    setFormState((prevState) => ({
      ...prevState,
      isLoader: true,
      isDisabled: true,
      // Uncomment and fix these if you want to reset selectedMember and selectedQuarter
      // filterofir: {
      //   ...prevState.filterofir,
      //   selectedMember: "",
      //   selectedQuarter: ""
      // }
    }));

    try {
      // Wait for the data fetch
      await getIRData();
      await getIRGraphData(); // For graphs
      await getIRGraphDataNew();
      await getGraph56Data();
      await getallqautergraph();

    } catch (error) {
      console.error("Error fetching IR data:", error);
    } finally {
      // Reset loader and enable inputs after fetching
      setFormState((prevState) => ({
        ...prevState,
        isLoader: false,
        isDisabled: false,
      }));
    }
  };


  const getCbLatestMonthYear = async () => {
    setFormState((prevState) => ({
      ...prevState,
      ["isLoader"]: true,
      ["isDisabled"]: true,
    }));
    await axios
      .get(`${BaseUrl}/api/auth/sro-get-cb-latest-month-year-mfi`, {
        headers: authHeaders(),
      })
      .then((response) => {
        const startMonth = response.data.data.startMonth;
        const endMonth = response.data.data.endMonth;
        setMembers(response.data.data.members);
        setStartMonth(startMonth);
        setFormState((prevState) => ({
          ...prevState,
          // ["toMonth"]: new Date(endMonth),
          ["member"]: response.data.data.lastMfi,
          ["isLoader"]: false,
          ["isDisabled"]: false,
        }));
      })
      .catch((error) => {
        console.log("err", error);
        setFormState({
          ...formState,
          ["isLoader"]: false,
          ["isDisabled"]: false,
        });
      });
  };

  const getQARLatestMonthYear = async () => {
    setFormState((prevState) => ({
      ...prevState,
      ["isLoader"]: true,
      ["isDisabled"]: true,
    }));
    await axios
      .get(`${BaseUrl}/api/auth/sro-get-qar-latest-month-year`, {
        headers: authHeaders(),
      })
      .then((response) => {
        const startMonth = response.data.data.startMonth;
        const endMonth = response.data.data.endMonth;
        setMembers(response.data.data.members);
        setStartMonth(startMonth);
        setFormState((prevState) => ({
          ...prevState,
          // ["toMonth"]: new Date(endMonth),
          ["member"]: userMFI ? userMFI : response.data.data.lastMfi,
          // ["member"]: response.data.data.lastMfi,
          ["isLoader"]: false,
          ["isDisabled"]: false,
        }));
      })
      .catch((error) => {
        console.log("err", error);
        setFormState({
          ...formState,
          ["isLoader"]: false,
          ["isDisabled"]: false,
        });
      });
  };

  const getQuatarList = async () => {
    const api = "api/auth/mm-quater-list";
    await axios
      .get(`${BaseUrl}/${api}`, { headers: authHeaders() })
      .then((response) => {
        setQuatarList(response.data.data);
        setGraphFilter({ ...graphFilter, ["Quatar"]: response.data.maxDate });
        setGraphFilter({ ...graphFilter, ["Period"]: response.data.maxperiod });
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const getEbLatestMonthYear = async () => {
    setFormState((prevState) => ({
      ...prevState,
      ["isLoader"]: true,
      ["isDisabled"]: true,
    }));
    await axios
      .get(`${BaseUrl}/api/auth/sro-get-eb-latest-month-year`, {
        headers: authHeaders(),
      })
      .then((response) => {
        console.log("resp in sro-eb-member", response);
        const startMonth = response.data.data.startMonth;
        const endMonth = response.data.data.endMonth;
        setMembers(response.data.data.members);
        setStartMonth(startMonth);
        setFormState((prevState) => ({
          ...prevState,
          // ["toMonth"]: new Date(endMonth),
          ["member"]: userMFI ? userMFI : response.data.data.lastMfi,
          ["isLoader"]: false,
          ["isDisabled"]: false,
        }));
      })
      .catch((error) => {
        console.log("err eb", error);
        setFormState({
          ...formState,
          ["isLoader"]: false,
          ["isDisabled"]: false,
        });
      });
  };

  const getQARDropdownData = async () => {
    try {
      const resp = await axios.get(`${BaseUrl}/${qarDropdownDataApi}`);
      if (resp) {
        setQarMember(resp.data.member);
        setQarEntity(resp.data.entity);
        setQarType(resp.data.type);
        setQarQuarter(resp.data.quarter);
        if (memberOrIndustry === "Industry") {
          setFormState((prev) => ({ ...prev, entity: "universe" }));
        }
        console.log("resp in qar dropdown", resp.data);
      }
    } catch (err) {
      console.log("error in getting qar dropdown data", err.response);
    }
  };

  const getRBIReportDropdownData = async (fy_year) => {
    try {
      setRbiDropdown(function (prev) {
        return { ...prev };
      });

      // 🔹 Decide API URL based on whether FY is passed
      let apiUrl = "";
      if (fy_year && fy_year !== "") {
        apiUrl = `${BaseUrl}/${rbiReportDropDownDataApi}?fy_year=${fy_year}`;
      } else {
        apiUrl = `${BaseUrl}/${rbiReportDropDownDataApi}`;
      }

      const resp = await axios.get(apiUrl);
      console.log("resp in rbi report dropdown", resp);

      if (
        resp &&
        resp.data &&
        resp.data.data &&
        Array.isArray(resp.data.data.fy_years)
      ) {
        var fy_years = resp.data.data.fy_years;
        var quarters = resp.data.data.quarters;
        var selected_fy = resp.data.data.selected_fy;

        setRbiDropdown({
          fyYears: fy_years ? fy_years : [],
          quarters: quarters ? quarters : [],
          selectedFY:
            selected_fy && selected_fy !== ""
              ? selected_fy
              : fy_years.length > 0
                ? fy_years[0]
                : "",
          selectedQuarter: quarters && quarters.length > 0 ? quarters[0] : "",
          isLoader: false,
        });
      } else {
        setRbiDropdown(function (prev) {
          return { ...prev, isLoader: false };
        });
      }
    } catch (err) {
      console.log("error in getting rbi report dropdown data", err);
      setRbiDropdown(function (prev) {
        return { ...prev, isLoader: false };
      });
    }
  };

  const handleFYChange = function (value) {
    setRbiDropdown(function (prev) {
      return { ...prev, selectedFY: value };
    });

    // 🔹 Call API again with the selected FY
    getRBIReportDropdownData(value);
  };

  const handleQuarterChange = function (value) {
    setRbiDropdown(function (prev) {
      return { ...prev, selectedQuarter: value };
    });
  };

  const getCBDropdownData = async () => {
    try {
      setCBDropdown(function (prev) {
        return { ...prev, isLoader: true };
      });

      // Fetch Members API
      const memberResp = await axios.get(`${BaseUrl}/${cbMemberlist}`);
      console.log("memberResp", memberResp);
      let membersData = [];
      let startMonth = null;
      let endMonth = null;

      if (
        memberResp &&
        memberResp.data &&
        memberResp.data.data &&
        Array.isArray(memberResp.data.data.members)
      ) {
        membersData = memberResp.data.data.members;
        startMonth = memberResp.data.data.startMonth;
        endMonth = memberResp.data.data.endMonth;

      }


      setCBDropdown((prev) => ({
        ...prev,
        members: membersData,
        startMonth: startMonth,
        endMonth: endMonth,
        // selectedMember: "",
        selectedMonth: null,
        // selectedMonth: endMonth ? endMonth : null,
        isLoader: false,
      }));

    } catch (err) {
      console.log("Error fetching CB dropdown data", err);
      setCBDropdown(function (prev) {
        return { ...prev, isLoader: false };
      });
    }
  };




  useEffect(() => {
    console.log("value", startMonth, value);
    if (value == 1) {
      getCbLatestMonthYear();
    }
    if (value == 2) {
      getEbLatestMonthYear();
    }
    if (value == 3) {
      getQARLatestMonthYear();
    }
    if (value == 4) {
      // CGRM ke liye dropdown data fetch karein
      fetchCGRMDropdownData();

    }
    if (value == 5) {
      getQARLatestMonthYear();
    }
    if (value == 6) {
      fetchIRDropdownData();
    }
  }, [value]);

  useEffect(() => {
    if (startMonth != "" && value == 1) {
      getCBEntity();
      getCreditBureauData();
    }
    if (startMonth != "" && value == 2) {
      getUniqueEntity();
      getEmployeeBureauData();
    }
    if (startMonth != "" && value == 3) {
      getQARData();
      getQARBucketMeetingData();
      getQARStatucAcQarterData();
    }
    if (startMonth != "" && value == 4) {
      getCGRMData();
    }
  }, [startMonth, value]);

  useEffect(() => {
    getQuatarList();
  }, []);

  useEffect(() => {
    getEmployeeBureauData();
  }, [ebentity]);

  useEffect(() => {
    getCreditBureauData();
  }, [cbDropdown.selectedEntity]);



  useEffect(() => {
    fetchIRDropdownData();
  }, [filterofir.selectedPeriodType]);

  useEffect(() => {
    getRBIQuarterlyData();
    getRBIOthersData();
    filterRBIReportHandler();
  }, []);

  useEffect(() => {
    getQARDropdownData();
  }, []);

  useEffect(() => {
    getRBIReportDropdownData();
  }, []);

  useEffect(() => {
    getCBDropdownData();
    getCBEntity();
  }, []);




  return (
    <>
      <Box sx={{ flexGrow: 1 }} mt={10}>
        <Breadcrumb title="SRO" icon={GrassIcon} />
        <Grid container spacing={2} mt={2}>
          <Grid xs={12} sm={12} md={12}>
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange1}
                    aria-label="SRO"
                    centered
                    textColor="secondary"
                    indicatorColor="secondary"
                  >
                    <Tab
                      icon={<AnalyticsIcon />}
                      label="Credit Bureau"
                      value="1"
                    />
                    <Tab
                      icon={<AnalyticsIcon />}
                      label="Employee Bureau"
                      value="2"
                    />
                    <Tab icon={<AnalyticsIcon />} label="QAR" value="3" />
                    <Tab icon={<AnalyticsIcon />} label="CGRM" value="4" />
                    {(isAdmin || userMFI === "") && (<Tab
                      icon={<AnalyticsIcon />}
                      label="RBI Report"
                      value="5"
                    />)}


                    <Tab icon={<AnalyticsIcon />} label="Interest Rate" value="6" />
                  </TabList>
                </Box>

                {/* Credit Bureau (CB-SRO) Start from Here */}
                <TabPanel value="1">
                  <Grid container spacing={2}>
                    {/* Date Filter Component Start from here */}
                    <Grid xs={12}>
                      <Card>
                        <CardContent>
                          <Grid container spacing={2} alignItems="center">

                            {/* Member */}
                            <Grid item xs={12} sm={4} md={4}>
                              <FormControl variant="standard" fullWidth>
                                <InputLabel>Member</InputLabel>
                                <Select
                                  value={cbDropdown.selectedMember}
                                  disabled={userMFI !== ""}
                                  onChange={(e) =>
                                    setCBDropdown(function (prev) {
                                      return { ...prev, selectedMember: e.target.value };
                                    })
                                  }

                                >
                                  {userMFI === "" ? cbDropdown.members.map(function (v) {
                                    return (
                                      <MenuItem key={v} value={v}>
                                        {v}
                                      </MenuItem>
                                    );
                                  }) : <MenuItem value={cbDropdown.selectedMember}>
                                    {cbDropdown.selectedMember}
                                  </MenuItem>}

                                  {/* ✅ Non-Admin: Show only user's MFI */}
                                  {/* {!cbDropdown.isAdmin && (
                                    <MenuItem value={cbDropdown.selectedMember}>
                                      {cbDropdown.selectedMember}
                                    </MenuItem>
                                  )} */}
                                </Select>
                              </FormControl>
                            </Grid>




                            {/* Month Picker */}
                            <Grid item xs={12} sm={4} md={4}>
                              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <DatePicker
                                  margin="normal"
                                  variant="standard"
                                  openTo="year"
                                  views={["year", "month"]}
                                  label="Month"
                                  fullWidth
                                  value={cbDropdown.selectedMonth}
                                  onChange={cbhandleToDateChange
                                  }

                                  minDate={
                                    cbDropdown.startMonth
                                      ? new Date(cbDropdown.startMonth)
                                      : new Date("2017-01-01")
                                  }
                                  maxDate={
                                    cbDropdown.endMonth
                                      ? new Date(cbDropdown.endMonth)
                                      : new Date()
                                  }
                                />
                              </MuiPickersUtilsProvider>
                            </Grid>

                            {/* Filter Button */}
                            <Grid item xs={12} sm={12} md={2}>
                              <Button
                                fullWidth
                                variant="contained"
                                sx={{ mt: 1 }}
                                onClick={filterCBHandler}
                              >
                                Filter
                                <Loader loader={cbDropdown.isLoader} size={15} />
                              </Button>
                            </Grid>

                          </Grid>
                        </CardContent>
                      </Card>
                    </Grid>




                    {/* Date Filter Component End here */}

                    {/* Monthly Sbmsn - Dt of month Sub  Start from here */}
                    <Grid xs={12} sm={12} md={12}>
                      <CBMonthlySbmsnTable
                        memberRecords={memberRecords}
                        industryRecords={industryRecords}
                        selectedEntity={cbDropdown.selectedEntity}
                        entityList={cbDropdown.entities}
                        setCBDropdown={setCBDropdown}
                      />
                    </Grid>

                    {/* Monthly Sbmsn - Dt of month Sub  End from here */}

                    {/* Member Level KYC & VID seeding Start from here */}
                    <Grid xs={12} sm={12} md={6}>
                      <CBVIDKYCSeedingMemberGraph graphData={vidKycGraph} />
                    </Grid>
                    {/* Member Level KYC & VID seeding End from here */}

                    {/* Industry Level KYC & VID seeding Start from here */}
                    <Grid xs={12} sm={12} md={6}>
                      <CBVIDKYCSeedingIndustryGraph
                        data={industryGraphData}
                        title={industryGraphDataTitle}
                      />
                    </Grid>
                    {/* Industry Level KYC & VID seeding End from here */}

                    {/* Member Level : Data Summission & % of data acceptance Start from here */}
                    <Grid xs={12} sm={12} md={6}>
                      <CBDataAcceptanceSmtbMemberGraph
                        data={cbDataAcceptanceMember}
                      />
                    </Grid>
                    {/* Member Level :  Data Summission & % of data acceptance End from here */}

                    {/* Industry Level :  Data Summission & % of data acceptance Start from here */}
                    <Grid xs={12} sm={12} md={6}>
                      <CBDataAcceptanceSmtbIndustryGraph
                        data={cbDataAcceptanceIndustry}
                      />
                    </Grid>
                    {/* Industry Level :  Data Summission & % of data acceptance End from here */}
                  </Grid>
                </TabPanel>
                {/* Credit Bureau (CB-SRO)  End from Here */}

                {/* Employee Bureau (EB-SRO) Start from Here */}
                <TabPanel value="2">
                  <Grid container spacing={2}>
                    {/* Date Filter Component Start from here */}
                    <Grid xs={12}>
                      <Card>
                        <CardContent>
                          <Grid container spacing={2} alignItems="center">

                            <Grid item xs={12} sm={4} md={4}>
                              <FormControl variant="standard" fullWidth>

                                <InputLabel id="demo-simple-select-standard-label">
                                  Member
                                </InputLabel>
                                <Select
                                  labelId="demo-simple-select-standard-label"
                                  id="demo-simple-select-standard"
                                  label="Select Member"
                                  name="member"
                                  value={formState.member}
                                  onChange={(e) => onValueChange(e)}
                                  disabled={userMFI !== ""}
                                >
                                  {userMFI === "" ? members.map((v) => {
                                    return <MenuItem value={v}>{v}</MenuItem>;
                                  }) : <MenuItem value={userMFI}>{userMFI}</MenuItem>}
                                </Select>
                              </FormControl>
                            </Grid>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                              <Grid xs={12} sm={4} md={4}>
                                <DatePicker
                                  margin="normal"
                                  variant="standard"
                                  openTo="year"
                                  views={["year", "month"]}
                                  label="Month"
                                  fullWidth
                                  value={
                                    formState.toMonth
                                      ? new Date(formState.toMonth + "-01")
                                      : null
                                  }
                                  onChange={handleToDateChange}
                                  minDate={new Date(formState.minDate + "-01")}
                                  maxDate={new Date(formState.maxDate + "-01")}
                                />
                              </Grid>
                            </MuiPickersUtilsProvider>
                            <Grid xs={12} sm={12} md={2}>
                              <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                style={{
                                  backgroundColor: "#058283 !important",
                                }}
                                sx={{ mt: 3, mb: 2 }}
                                disabled={formState.isDisabled}
                                onClick={filterEBHandler}
                              >
                                Filter
                                <Loader loader={formState.isLoader} size={15} />
                              </Button>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                    </Grid>
                    {/* Date Filter Component End here */}

                    {/* Date of submission */}

                    <EBDateofSubmissionTable
                      ebMemberMonthlySubmission={ebMemberMonthlySubmission}
                      ebIndustryMonthlySubmission={ebIndustryMonthlySubmission}
                      ebUniqueEntity={ebUniqueEntity}
                      ebentity={ebentity}
                      setEbEntity={setEbEntity}
                    />
                    {/* Date of submission */}

                    {/* Member Level KYC fill rate overall & KYC fill rate reporting month Start from here */}
                    <Grid xs={12} sm={12} md={6}>
                      <EBOverallKYCMemberGraph
                        ebKycMemberGraph={ebKycMemberGraph}
                      />
                    </Grid>
                    {/* Member Level KYC fill rate overall & KYC fill rate reporting month End from here */}

                    {/* Industry Level KYC fill rate overall & KYC fill rate reporting month Start from here */}
                    <Grid xs={12} sm={12} md={6}>
                      <EBOverallKYCIndustryGraph
                        ebKycIndustryGraph={ebKycIndustryGraph}
                        ebentity={ebentity}
                      />
                    </Grid>
                    {/* Industry Level KYC fill rate overall & KYC fill rate reporting month End from here */}

                   
                    {/* Industry Level Monthly Total Enquiries and hit volume End from here */}

                    <Grid xs={12} sm={12} md={6}>
                      <EBCategoryGpMember
                        // ebcategaryMemberSeries={ebcategaryMemberSeries}
                        ebCategoryMemberGData={ebCategoryMemberGData}
                        date={formState.toMonth}
                      />
                    </Grid>
                    {/* Industry Level Monthly Total Enquiries and hit volume End from here */}

                    <Grid xs={12} sm={12} md={6}>
                      <EBCategoryIndustryGp
                        // categoryIndustrySeries={categoryIndustrySeries}
                        ebCategoryIndustryGData={ebCategoryIndustryGData}
                        ebentity={ebentity}
                        date={formState.toMonth}
                      />
                    </Grid>
                    {/* Industry Level Monthly Total Enquiries and hit volume End from here */}

                    <Grid xs={12} sm={12} md={12}>
                      <EBOpenToHireGp ebOpenToHireGData={ebOpenToHireGData} />
                    </Grid>

                     {/* Member Level Monthly Total Enquiries and hit volume Start from here */}
                    <Grid xs={12} sm={12} md={6}>
                      <EBMonthlyEnquirynhitMemberGp
                        ebMemberInquiryGData={ebMemberInquiryGData}
                      // ebMInquiryHitSeries={ebMInquiryHitSeries}
                      // ebMemberLabels={ebMemberLabels}
                      />
                    </Grid>
                    {/* Member Level Monthly Total Enquiries and hit volume End from here */}

                    {/* Industry Level Monthly Total Enquiries and hit volume Start from here */}

                    <Grid xs={12} sm={12} md={6}>
                      <EBMonthlyEnquirynhitIndustryGp
                        ebIndustryInquiryGData={ebIndustryInquiryGData}
                        ebentity={ebentity}
                      // ebIInquiryHitSeries={ebIInquiryHitSeries}
                      // ebIndustryLabels={ebIndustryLabels}
                      />
                    </Grid>
                  </Grid>
                </TabPanel>

                {/* Employee Bureau (EB-SRO)  End from Here */}

                {/* QAR-SRO Start from Here */}
                <TabPanel value="3">
                  <Grid container spacing={2}>
                    {/* Date Filter Component Start from here */}
                    <Grid xs={12}>
                      <Card sx={{ p: 1, boxShadow: 2 }}>
                        <CardContent sx={{ p: 1, "&:last-child": { pb: 1 } }}>
                          <Grid container spacing={1}>
                            {/* Industry/Member */}
                            <Grid xs={12} sm={6} md={4}>
                              <FormControl
                                variant="standard"
                                sx={{ m: 0.5, minWidth: 250 }}
                              >
                                <InputLabel>Industry / Member</InputLabel>
                                <Select
                                  name="memberOrIndustry"
                                  value={memberOrIndustry || ""}

                                  onChange={(e) => {
                                    const value = e.target.value;
                                    setMemberOrIndustry(value);

                                    if (value === "Industry") {
                                      setFormState(prev => ({
                                        ...prev,
                                        member: ""
                                      }));
                                    }
                                  }}
                                  style={{ textAlign: "left" }}
                                >

                                  <MenuItem value="Member">Member</MenuItem>
                                  {userMFI == "" && <MenuItem value="Industry">Industry</MenuItem>}
                                </Select>
                              </FormControl>
                            </Grid>

                            {/* Member */}
                            {(memberOrIndustry === "Member" || memberOrIndustry === "") && (
                              <Grid xs={12} sm={6} md={4}>
                                <FormControl
                                  variant="standard"
                                  sx={{ m: 0.5, minWidth: 250 }}
                                >
                                  <InputLabel>Member</InputLabel>
                                  <Select
                                    name="member"
                                    value={formState.member || ""}
                                    onChange={onValueChange}
                                    disabled={userMFI !== ""}
                                  >

                                    {userMFI === "" ? (

                                      qarMember.map((v) => (
                                        <MenuItem key={v} value={v}>
                                          {v}
                                        </MenuItem>
                                      ))
                                    ) : (

                                      <MenuItem value={userMFI}>
                                        {userMFI}
                                      </MenuItem>
                                    )}

                                  </Select>
                                </FormControl>
                              </Grid>
                            )}

                            {/* Type */}
                            <Grid xs={12} sm={6} md={4}>
                              <FormControl
                                variant="standard"
                                sx={{ m: 0.5, minWidth: 250 }}
                              >
                                <InputLabel>Type</InputLabel>
                                <Select
                                  name="type"
                                  value={formState.type || ""}
                                  onChange={onValueChange}
                                >
                                  {Object.keys(qarType).map((key) => (
                                    <MenuItem key={key} value={qarType[key]}>
                                      {key}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            </Grid>

                            {/* Entity */}
                            <Grid xs={12} sm={6} md={4}>
                              <FormControl
                                variant="standard"
                                sx={{ m: 0.5, minWidth: 250 }}
                              >
                                <InputLabel>Entity</InputLabel>
                                <Select
                                  name="entity"
                                  value={formState.entity || ""}
                                  onChange={onValueChange}
                                >
                                  {qarEntity.map((v) => (
                                    <MenuItem key={v} value={v}>
                                      {v}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            </Grid>

                            {/* Quarter */}
                            <Grid xs={12} sm={6} md={4}>
                              <FormControl
                                variant="standard"
                                sx={{ m: 0.5, minWidth: 250 }}
                              >
                                <InputLabel>Quarter</InputLabel>
                                <Select
                                  name="quarter"
                                  value={formState.quarter || ""}
                                  onChange={onValueChange}
                                >
                                  {qarQuarter.map((v) => (
                                    <MenuItem key={v} value={v}>
                                      {v}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            </Grid>

                            {/* Filter Button */}


                            <Grid
                              item xs={12} sm={12} md={2} sx={{ display: "flex", alignItems: "end" }}
                            >


                              <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                size="small"
                                sx={{ py: 0.6 }}  // padding thoda kam
                                disabled={formState.isDisabled}
                                onClick={filterQARHandler}
                              >
                                Filter
                                <Loader loader={formState.isLoader} size={13} />
                              </Button>
                            </Grid>

                          </Grid>
                        </CardContent>
                      </Card>
                    </Grid>
                    {/* Date Filter Component End here */}

                    {/* Date of monthly submission to CICs */}

                    {/* <QARMonthlySbmsnCICTable /> */}

                    <QARMonthlySbmsnCICTable
                      QARParametersRecords={QARParametersRecords}
                      memberOrIndustry={memberOrIndustry} // Yeh line add karo
                    />

                    {(memberOrIndustry === "Member" || memberOrIndustry === "") && (
                      <Grid xs={12} sm={12} md={6}>
                        <QARBarChart guardRailsData={guardRailsRecords} />
                      </Grid>
                    )}

                    <Grid
                      xs={12}
                      sm={12}
                      md={memberOrIndustry === "Industry" ? 12 : 6}
                    >
                      <QARBarCharttwo
                        chartData={guardRailsIndustryAnalysisData}
                      />
                    </Grid>

                    {(memberOrIndustry === "Member" || memberOrIndustry === "") && (
                      <Grid xs={12} sm={12} md={6}>
                        <QARBarChartthree chartData={guardRailsMemberData} />
                      </Grid>
                    )}

                    <Grid
                      xs={12}
                      sm={12}
                      md={memberOrIndustry === "Industry" ? 12 : 6}
                    >
                      <QARBarChartfour chartData={guardRailsChartData} />
                    </Grid>

                    {(memberOrIndustry === "Member" || memberOrIndustry === "") && (
                      <Grid xs={12} sm={12} md={6}>
                        <QARBarChartfive
                          chartData={householdIncomeMemberData}
                        />
                      </Grid>
                    )}

                    <Grid
                      xs={12}
                      sm={12}
                      md={memberOrIndustry === "Industry" ? 12 : 6}
                    >
                      <QARBarChartSix chartData={householdIncomeData} />
                    </Grid>

                    {/* Date of monthly submission to CICs */}
                  </Grid>
                </TabPanel>
                {/* QAR-SRO  End from Here */}
                <TabPanel value="4">
                  <Grid container spacing={2}>
                    {/* Date Filter Component Start from here */}
                    <Grid xs={12} sm={12} md={12}>
                      <Card>
                        <CardContent>
                          <Grid container spacing={2} alignItems="center" mt={2}>
                            {/* Lender Name Dropdown */}
                            <Grid xs={12} sm={12} md={3}>
                              <FormControl
                                variant="standard"
                                sx={{ minWidth: "100%" }}
                              >
                                <InputLabel id="lender-name-label">
                                  Member                                </InputLabel>
                                <Select
                                  labelId="lender-name-label"
                                  id="lender-name-select"
                                  label="Member"
                                  name="member"
                                  value={cgrmDropdown.selectedMember}
                                  // onChange={(e) => onValueChange(e)}
                                  onChange={(e) =>
                                    setCGRMDropdown(function (prev) {
                                      return { ...prev, selectedMember: e.target.value };
                                    })
                                  }
                                  disabled={userMFI !== ""}
                                >
                                  {userMFI === "" ? (cgrmDropdown.members.map((v, index) => {
                                    return (
                                      <MenuItem key={index} value={v}>
                                        {v}
                                      </MenuItem>
                                    );
                                  })) : <MenuItem value={userMFI}>
                                    {userMFI}
                                  </MenuItem>}
                                </Select>
                              </FormControl>
                            </Grid>
                            {/* Entity Name Dropdown */}
                            <Grid xs={12} sm={12} md={3}>
                              <FormControl
                                variant="standard"
                                sx={{ minWidth: "100%" }}
                              >
                                <InputLabel id="entity-name-label">
                                  Entity                                </InputLabel>
                                <Select
                                  labelId="entity-name-label"
                                  id="lender-name-select"
                                  label="Entity"
                                  name="entity"
                                  value={cgrmDropdown.selectedEntity}
                                  // onChange={(e) => onValueChange(e)}
                                  onChange={(e) =>
                                    setCGRMDropdown(function (prev) {
                                      return { ...prev, selectedEntity: e.target.value };
                                    })
                                  }
                                >
                                  {cgrmDropdown.entities.map((v, index) => {
                                    return (
                                      <MenuItem key={index} value={v}>
                                        {v}
                                      </MenuItem>
                                    );
                                  })}
                                </Select>
                              </FormControl>
                            </Grid>

                            {/* Quarter Dropdown */}
                            <Grid xs={12} sm={12} md={3}>
                              <FormControl
                                variant="standard"
                                sx={{ minWidth: "100%" }}
                              >
                                <InputLabel id="quarter-label">
                                  Choose Quarter
                                </InputLabel>
                                <Select
                                  labelId="quarter-label"
                                  id="quarter-select"
                                  name="Qautar"
                                  value={cgrmDropdown.selectedQuarter}
                                  onChange={(e) =>
                                    setCGRMDropdown(function (prev) {
                                      return { ...prev, selectedQuarter: e.target.value };
                                    })
                                  }
                                  label="Choose Quarter"
                                >
                                  {cgrmDropdown.quarters.map((q, index) => {
                                    return (
                                      <MenuItem key={index} value={q}>
                                        {q}
                                      </MenuItem>
                                    );
                                  })}
                                </Select>
                              </FormControl>
                            </Grid>

                            {/* Filter Button */}
                            {/* <Grid xs={12} sm={12} md={2} container justifyContent="flex-end">
                              <Button
                                type="submit"
                                variant="contained"
                                size="small"

                                sx={{ py: 0.6 }}  // padding thoda kam

                                disabled={formState.isDisabled}
                                onClick={filterCGRMHandler}
                              >
                                Filter
                                <Loader loader={formState.isLoader} size={13} />
                              </Button>
                            </Grid> */}

                            <Grid
                              item
                              xs={12}
                              sm={12}
                              md={2}
                              container
                              justifyContent="flex-end"
                              alignItems="end"
                            >
                              <Button
                                style={{ width: "200px" }}
                                type="submit"
                                variant="contained"
                                size="small"
                                sx={{ py: 0.6 }}
                                disabled={formState.isDisabled}
                                onClick={filterCGRMHandler}
                              >
                                Filter
                                <Loader loader={formState.isLoader} size={13} />
                              </Button>
                            </Grid>

                          </Grid>
                        </CardContent>
                      </Card>
                    </Grid>
                    {/* Date Filter Component End here */}

                    {/* Rest of your CGRM components - unchanged */}
                    <Grid xs={12} sm={12} md={12}>
                      <Card
                        style={{ paddingBottom: "20px", marginBottom: "20px" }}
                      >
                        <CardActionArea>
                          <CardContent>
                            <ReportTable table1cgrm={table1cgrm} />
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>

                    <Grid xs={6} sm={6} md={6}>
                      <Card style={{ paddingBottom: "20px", marginBottom: "20px" }}>
                        <CardActionArea>
                          <CardContent>
                            <NatureofCall
                              chartData={graph1cgrm && graph1cgrm.chart1 ? graph1cgrm.chart1 : []}
                              memberName={graph1cgrm && graph1cgrm.member ? graph1cgrm.member : ""}
                            />
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>

                    <Grid xs={6} sm={6} md={6}>
                      <Card style={{ paddingBottom: "20px", marginBottom: "20px" }}>
                        <CardActionArea>
                          <CardContent>
                            <ProductWiseCall data={graph2cgrm} />
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>

                    {/* <Grid xs={6} sm={6} md={6}>
                      <Card
                        style={{ paddingBottom: "20px", marginBottom: "20px" }}
                      >
                        <CardActionArea>
                          <CardContent>
                            <CategoryWiseComplaintsMember data={productWiseCallData} />
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid> */}
                    <Grid xs={6} sm={6} md={6}>
                      <Card style={{ paddingBottom: "20px", marginBottom: "20px" }}>
                        <CardActionArea>
                          <CardContent>
                            <CategoryWiseComplaintsMember data={graph3cgrm} />
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>

                    {/* Industry Chart */}
                    <Grid xs={6} sm={6} md={6}>
                      <Card style={{ paddingBottom: "20px", marginBottom: "20px" }}>
                        <CardActionArea>
                          <CardContent>
                            <CategoryWiseComplaintsIndustry data={graph4cgrm} />
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>

                    <Grid xs={6} sm={6} md={6}>
                      <Card
                        style={{ paddingBottom: "20px", marginBottom: "20px" }}
                      >
                        <CardActionArea>
                          <CardContent>
                            <CategoryWiseComplaint data={graph5cgrm} />
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>

                    <Grid xs={6} sm={6} md={6}>
                      <Card
                        style={{ paddingBottom: "20px", marginBottom: "20px" }}
                      >
                        <CardActionArea>
                          <CardContent>
                            <CategoryWiseQuery data={graph6cgrm} />                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>

                    <Grid xs={12} sm={12} md={12}>
                      <Card
                        style={{ paddingBottom: "20px", marginBottom: "20px" }}
                      >
                        <CardActionArea>
                          <CardContent>
                            <OriginOfCall data={table3cgrm} />
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>

                    <Grid xs={12} sm={12} md={12}>
                      <Card style={{ paddingBottom: "20px", marginBottom: "20px" }}>
                        <CardActionArea>
                          <CardContent>
                            <OriginOfCallIndustry data={table2cgrm} />
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>

                    <Grid xs={6} sm={6} md={6}>
                      <Card style={{ paddingBottom: "20px", marginBottom: "20px" }}>
                        <CardActionArea>
                          <CardContent>
                            <ComplaintStatus data={graph7cgrm} />
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>

                    <Grid xs={6} sm={6} md={6}>
                      <Card style={{ paddingBottom: "20px", marginBottom: "20px" }}>
                        <CardActionArea>
                          <CardContent>
                            <AverageTAT data={graph8cgrm} />
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  </Grid>
                </TabPanel>

                {/* RBIIndex-SRO Start from Here */}
                {(isAdmin || userMFI === "") && (<TabPanel value="5">
                  <Grid container spacing={2}>
                    {/* Date Filter Component Start from here */}
                    <Grid xs={12} sm={12} md={12}>
                      <Card>
                        <CardContent>
                          <Grid
                            container
                            spacing={2}
                            alignItems="center"
                            mt={1}
                          >
                            {/* Financial Year Dropdown */}
                            <Grid item xs={12} sm={12} md={5}>
                              <FormControl variant="standard" fullWidth>
                                <InputLabel id="fy-select-label">
                                  Choose Financial Year
                                </InputLabel>

                                <Select
                                  labelId="fy-select-label"
                                  id="fy-select"
                                  label="Choose Financial Year"
                                  value={rbiDropdown.selectedFY}
                                  onChange={(e) => handleFYChange(e.target.value)}
                                  sx={{ textAlign: "left" }}   // 👈 LEFT ALIGN
                                >
                                  {rbiDropdown.fyYears.map((fy, index) => (
                                    <MenuItem key={index} value={fy}>
                                      {fy}
                                    </MenuItem>
                                  ))}
                                </Select>

                              </FormControl>
                            </Grid>

                            {/* Quarter Dropdown */}
                            <Grid item xs={12} sm={12} md={5}>
                              <FormControl variant="standard" fullWidth>
                                <InputLabel id="quarter-select-label">
                                  Choose Quarter
                                </InputLabel>
                                <Select
                                  labelId="quarter-select-label"
                                  id="quarter-select"
                                  label="Choose Quarter"
                                  value={rbiDropdown.selectedQuarter}
                                  onChange={function (e) {
                                    handleQuarterChange(e.target.value);
                                  }}
                                  sx={{ textAlign: "left" }}   // 👈 LEFT ALIGN

                                >
                                  {rbiDropdown.quarters.map(function (
                                    qtr,
                                    index
                                  ) {
                                    return (
                                      <MenuItem key={index} value={qtr}>
                                        {qtr}
                                      </MenuItem>
                                    );
                                  })}
                                </Select>
                              </FormControl>
                            </Grid>

                            {/* Filter Button */}
                            <Grid item xs={12} sm={12} md={2}>
                              <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 1 }}
                                onClick={filterRBIReportHandler}
                                disabled={rbiDropdown.isLoader}
                              >
                                Filter
                                <Loader
                                  loader={rbiDropdown.isLoader}
                                  size={15}
                                />
                              </Button>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                    </Grid>
                    {/* Date Filter Component End here */}

                    {/* Date of monthly submission to CICs */}

                    <RBIIndex
                      rbiQuarterlyReportData={rbiQuarterlyReportData}
                    />

                    {/* Date of monthly submission to CICs */}
                  </Grid>
                </TabPanel>)}

                {/* RBIIndex-SRO  End from Here */}

                {/* Others-SRO Start from Here */}
                <TabPanel value="6">
                  <Grid container spacing={2}>
                    {/* Date Filter Component Start from here */}
                    <Grid xs={12} sm={12} md={12}>
                      <Card>
                        <CardContent>
                          <Grid container spacing={2}>

                            {/* ENTITY TYPE DROPDOWN */}
                            <Grid xs={12} sm={12} md={4}>
                              <FormControl variant="standard" sx={{ minWidth: 250 }}>
                                <InputLabel>Entity</InputLabel>
                                <Select
                                  value={filterofir.selectedEntity}
                                  onChange={handleEntityChange}
                                  label="Choose Entity Type"

                                >
                                  {filterofir.entities.map((item, idx) => (
                                    <MenuItem key={idx} value={item}>
                                      {item}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            </Grid>

                            {/* SHORT NAME DROPDOWN */}
                            <Grid xs={12} sm={12} md={4}>
                              <FormControl variant="standard" sx={{ minWidth: 250 }}>
                                <InputLabel>Member</InputLabel>
                                <Select
                                  value={filterofir.selectedShortName}
                                  onChange={handleShortNameChange}
                                  label="Choose Lender"
                                  disabled={userMFI !== ""}
                                >
                                  {userMFI === "" ? filterofir.short_name.map((item, idx) => (
                                    <MenuItem key={idx} value={item}>
                                      {item}
                                    </MenuItem>
                                  )) : <MenuItem value={userMFI}>
                                    {userMFI}
                                  </MenuItem>}
                                </Select>
                              </FormControl>
                            </Grid>

                            {/* PERIOD TYPE DROPDOWN */}
                            <Grid xs={12} sm={12} md={4}>
                              <FormControl variant="standard" sx={{ minWidth: 250 }}>
                                <InputLabel>Period Type</InputLabel>
                                <Select
                                  value={filterofir.selectedPeriodType}
                                  onChange={handlePeriodTypeChange}
                                  label="Choose Period Type"
                                >
                                  {filterofir.period_type.map((item, idx) => (
                                    <MenuItem key={idx} value={item}>
                                      {item}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            </Grid>

                            {/* PERIOD DROPDOWN */}
                            <Grid xs={12} sm={12} md={4}>
                              <FormControl variant="standard" sx={{ minWidth: 250 }}>
                                <InputLabel>Period</InputLabel>
                                <Select
                                  value={filterofir.selectedPeriod}
                                  onChange={handlePeriodChange}
                                  label="Choose Period"
                                >
                                  {filterofir.period.map((item, idx) => (
                                    <MenuItem key={idx} value={item}>
                                      {item}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            </Grid>

                            {/* FILTER BUTTON */}
                            <Grid xs={12} sm={12} md={2}>
                              <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                // sx={{ backgroundColor: "#058283 !important" }}
                                disabled={filterofir.isLoader}
                                onClick={filterIRHandler}
                              >


                                Filter
                                <Loader loader={filterofir.isLoader} size={15} />
                              </Button>
                            </Grid>

                          </Grid>
                        </CardContent>

                      </Card>
                    </Grid>
                    {/* Date Filter Component End here */}

                    {/* Date of monthly submission to CICs */}



                    {/* <Grid xs={12} sm={12} md={12}>
                      <Card
                        style={{ paddingBottom: "20px", marginBottom: "20px" }}
                      >
                        <CardActionArea>
                            <TableParameterMember tableofir={tableofir} />
                        </CardActionArea>
                      </Card>
                    </Grid> */}

                    {/* <Grid xs={12} sm={12} md={12}> */}
                    {/* <Card style={{ paddingBottom: "20px", marginBottom: "20px" }}>
                        <CardActionArea> */}
                    <TableParameterMember tableofir={tableofir} filterofir={filterofir} />
                    {/* </CardActionArea>
                      </Card> */}
                    {/* </Grid> */}

                    {/* <Grid xs={12} sm={12} md={12}>
                      <Card
                        style={{ paddingBottom: "20px", marginBottom: "20px" }}
                      >
                        <CardActionArea>
                          <CardContent>
                            <newtablebackup tableofir={tableofir} />
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid> */}


                    {
                      (filterofir.selectedPeriodType === "Month" || filterofir.selectedPeriodType === "") && (
                        <>
                          <Grid xs={6} sm={6} md={6}>
                            <Card style={{ paddingBottom: "20px", marginBottom: "20px" }}>
                              <CardActionArea>
                                <CardContent>
                                  <MinimumMaximumIntrestRateMember minimumaxir={minimumaxir} />
                                </CardContent>
                              </CardActionArea>
                            </Card>
                          </Grid>

                          <Grid xs={6} sm={6} md={6}>
                            <Card style={{ paddingBottom: "20px", marginBottom: "20px" }}>
                              <CardActionArea>
                                <CardContent>
                                  <MinimumMaximumIntrestRateIndustry minimumaxir={minimumaxir} />
                                </CardContent>
                              </CardActionArea>
                            </Card>
                          </Grid>

                        </>
                      )
                    }



                    {(filterofir.selectedPeriodType === "Quarter" || filterofir.selectedPeriodType === "") && (
                      <>
                        <Grid xs={6} sm={6} md={6}>
                          <Card style={{ paddingBottom: "20px", marginBottom: "20px" }}>
                            <CardActionArea>
                              <CardContent>
                                <IntrestOverQuatersMember intretrateir={intretrateir} />
                              </CardContent>
                            </CardActionArea>
                          </Card>
                        </Grid>


                        <Grid xs={6} sm={6} md={6}>
                          <Card style={{ paddingBottom: "20px", marginBottom: "20px" }}>
                            <CardActionArea>
                              <CardContent>
                                <IntrestOverQuatersIndustry intretrateir={intretrateir} />
                              </CardContent>
                            </CardActionArea>
                          </Card>
                        </Grid>

                        <Grid xs={6} sm={6} md={6}>
                          <Card style={{ paddingBottom: "20px", marginBottom: "20px" }}>
                            <CardActionArea>
                              <CardContent>
                                <AvgTrendMember garph56ir={garph56ir} />
                              </CardContent>
                            </CardActionArea>
                          </Card>
                        </Grid> <Grid xs={6} sm={6} md={6}>
                          <Card style={{ paddingBottom: "20px", marginBottom: "20px" }}>
                            <CardActionArea>
                              <CardContent>
                                <AvgTrendIndustry garph56ir={garph56ir} />

                              </CardContent>
                            </CardActionArea>
                          </Card>
                        </Grid>
                        <Grid xs={12} sm={12} md={12}>
                          <Card style={{ paddingBottom: "20px", marginBottom: "20px" }}>
                            <CardActionArea>
                              <CardContent>
                                <AvgIndustryQuaterAll
                                  graphSingleAllqauter={graphSingleAllqauter}
                                  availableRangeTitle={availableRangeTitle}
                                />
                              </CardContent>
                            </CardActionArea>
                          </Card>
                        </Grid>


                      </>
                    )}
                    {/* Date of monthly submission to CICs */}
                  </Grid>
                </TabPanel>
                {/* RBIIndex-SRO Others End from Here */}
              </TabContext>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SroMaster;
