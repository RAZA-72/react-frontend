import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Breadcrumb from "../common/Breadcrumb";
import GrassIcon from "@mui/icons-material/Grass";
import MultiStep from "react-multistep";
import Overview from "./Overview/Overview";
import OverViewStateUT from "./OverviewStateUT/OverViewStateUT";
import Equity from "./Equity/Equity";
import PortfolioBreakup from "./PortfolioBreakup/PortfolioBreakup";
import Rating from "./Rating/Rating";
import ProductPricing from "./ProductPricing/ProductPricing";
import PricingForQuarter from "./PricingForQuarter/PricingForQuarter";
import HR from "./HR/HR";
import ALM from "./ALM/ALM";
import FinancialRatio from "./FinancialRatio.js/FinancialRatio";
import Borrowing from "./Borrowing/Borrowing";
import StateEquity from "./StateEquity/StateEquity.js";
import Preview from "./Preview/Preview";
import "../DataDashboard/DataDashboard.css"
import {
  saveUserFormData,
  loadUserFormData,
  clearUserFormData,
  handleFileUpload,
} from "./utils/StorageHelper";
import formFields from "./data/FormFields";
import axios from "axios";
import { BaseUrl, storeLoanDetails, periodlistqauter } from "../url/url";
import { importExcel } from "./utils/index.js";



const DataDashboard = () => {

  const stepWrapperStyle = {
    background: "#ffffff",
    borderRadius: "10px",
    padding: "18px 20px",
    marginBottom: "22px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  };
const stepTitleStyle = {
  fontSize: "26px",
  fontWeight: "600",
  lineHeight: "1.2",
  color: "#111827",          // Deep professional text
  marginBottom: "18px",
  letterSpacing: "-0.3px",   // Subtle premium touch
  paddingBottom: "6px",
  borderBottom: "1px solid #e5e7eb", // Light separator
  textAlign: "left"
};


  const [selectedFile, setSelectedFile] = useState(null);

  const [formData, setFormData] = useState(() => {
    const storedData = loadUserFormData();
    console.log("stored_data", storedData);
    return storedData && storedData.States ? storedData : formFields;
  });
  const [numStates, setNumStates] = useState(() => {
    const stored = loadUserFormData();
    if (stored && stored.States && stored.States.length) {
      return stored.States.length;
    }
    return 1;
  });


  const [activeStep, setActiveStep] = useState(0);

  const [quarterList, setQuarterList] = useState([]);
  const [Quarter, setQuarter] = useState("");
  const [selectedQuarter, setSelectedQuarter] = useState("");
  const [selectedMonthName, setSelectedMonthName] = useState("");

  const [selectedDuring_FY, setselectedDuring_FY] = useState("");


  const [importKey, setImportKey] = useState(0);

  // ✅ function MUST be here
  const fetchPeriodQuarter = async () => {
    try {
      const res = await axios.get(`${BaseUrl}/${periodlistqauter}`);

      if (res.data && res.data.status === 200) {
        setQuarterList(res.data.data);
      }
    } catch (err) {
      console.error("Quarter API error", err.response);
    }
  };


  useEffect(() => {
    fetchPeriodQuarter();
  }, []);



  if (!localStorage.getItem("userFormData")) {
    saveUserFormData(formFields);
  }

  const handleFileSelection = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Load form data from local storage on mount
  // useEffect(() => {
  //   const savedData = loadUserFormData();
  //   if (savedData && Object.keys(savedData).length > 0) {
  //     setFormData(savedData);
  //   }
  // }, []);

  // function for changing top level data in form
  const handleChange = (step, field, value) => {
    setFormData((prevData) => {
      let updatedData;

      if (prevData[step] !== undefined) {
        // If 'step' exists, update it as a nested object
        updatedData = {
          ...prevData,
          [step]: {
            ...prevData[step],
            [field]: value,
          },
        };
      } else {
        // If 'step' does not exist, update it as a top-level field
        updatedData = {
          ...prevData,
          [field]: value,
        };
      }

      // Check if the field being updated is part of the OnBalanceSheetPortfolio calculation
      if (
        field === "SPVPartOfPortfolio" ||
        field === "SecuritizedCreatedThroughSPV" ||
        field === "AssignedBilateralAgreement"
      ) {
        // Get the latest values, ensuring they are numbers
        const spvPart = parseFloat(updatedData.SPVPartOfPortfolio || 0);
        const securitized = parseFloat(
          updatedData.SecuritizedCreatedThroughSPV || 0
        );
        const assigned = parseFloat(
          updatedData.AssignedBilateralAgreement || 0
        );

        // Calculate sum
        const sum = spvPart + securitized + assigned;

        // Update the OnBalanceSheetPortfolio field
        updatedData.OnBalanceSheetManagedPortfolio = sum;

        updatedData.AUM =
          parseFloat(updatedData.AUM) +
          parseFloat(updatedData.OnBalanceSheetManagedPortfolio);

        updatedData.BalanceSheetFigures.GLP = updatedData.AUM;
      }

      // check if filed is OwnedLoanPortfolio
      if (field === "OwnedLoanPortfolio") {
        const sum =
          parseFloat(updatedData.OwnedLoanPortfolio) +
          parseFloat(updatedData.OnBalanceSheetManagedPortfolio || 0);

        updatedData.OnBalanceSheetPortfolio = sum;
      }

      if (
        field === "SPVPartOfPortfolioOffBS" ||
        field === "SecuritizedCreatedThroughSPVOffBS" ||
        field === "AssignedBilateralAgreementOffBS" ||
        field === "LoanPortfolioCreatedBC"
      ) {
        // Convert values to numbers for Off-Balance Sheet Portfolio calculation
        const spvPartOffBS = parseFloat(
          updatedData.SPVPartOfPortfolioOffBS || 0
        );
        const securitizedOffBS = parseFloat(
          updatedData.SecuritizedCreatedThroughSPVOffBS || 0
        );
        const assignedOffBS = parseFloat(
          updatedData.AssignedBilateralAgreementOffBS || 0
        );
        const loanPortfolioBC = parseFloat(
          updatedData.LoanPortfolioCreatedBC || 0
        );

        // Calculate sum for Off-Balance Sheet Managed Portfolio
        const offBalanceSheetSum =
          spvPartOffBS + securitizedOffBS + assignedOffBS + loanPortfolioBC;
        updatedData.OffBalanceSheetManagedPortfolio = offBalanceSheetSum;

        updatedData.AUM =
          parseFloat(updatedData.OnBalanceSheetPortfolio) +
          parseFloat(updatedData.OffBalanceSheetManagedPortfolio);

        updatedData.BalanceSheetFigures.GLP = updatedData.AUM;
      }

      // add the amount of share capital and reserves surplus in Balansheet figures in overview form
      if (
        (step === "BalanceSheetFigures" && field === "ShareCapital") ||
        (step === "BalanceSheetFigures" && field === "ReservesAndSurplus")
      ) {
        updatedData.BalanceSheetFigures.TotalEquity =
          parseFloat(updatedData.BalanceSheetFigures.ShareCapital || 0) +
          parseFloat(updatedData.BalanceSheetFigures.ReservesAndSurplus || 0);

        // updatedData.BalanceSheetFigures.TotalEquity =
        // parseFloat(updatedData.BalanceSheetFigures.TotalEquity) + sum;
      }

      // portfolio breakup form
      if (field === "AgricultureAndAlliedActivities") {
        updatedData.AgricultureAndAlliedActivitiesTotal =
          updatedData.AgricultureAndAlliedActivities;
      }

      if (field === "TradeAndServices" || field === "ManufacturingProduction") {
        updatedData.NonAgricultureTotal =
          parseFloat(updatedData.TradeAndServices || 0) +
          parseFloat(updatedData.ManufacturingProduction || 0);
      }

      if (
        field === "Education" ||
        field === "Medical" ||
        field === "HousingHomeImprovement" ||
        field === "OtherHouseholdFinance"
      ) {
        updatedData.HouseholdFinanceTotal =
          parseFloat(updatedData.Education || 0) +
          parseFloat(updatedData.Medical || 0) +
          parseFloat(updatedData.HousingHomeImprovement || 0) +
          parseFloat(updatedData.OtherHouseholdFinance || 0);

        // adding total
        updatedData.Total =
          parseFloat(updatedData.AgricultureAndAlliedActivitiesTotal || 0) +
          parseFloat(updatedData.NonAgricultureTotal || 0) +
          parseFloat(updatedData.HouseholdFinanceTotal || 0);
      }

      if (
        (step === "Location1" && field === "Rural") ||
        (step === "Location1" && field === "MetropolitanUrbanSemiUrban")
      ) {
        updatedData.Location =
          parseFloat(updatedData.Location1.Rural || 0) +
          parseFloat(updatedData.Location1.MetropolitanUrbanSemiUrban || 0);
      }
      saveUserFormData(updatedData);

      return updatedData;
    });
  };

  // function to change SIDBI like array
  const handleArrayChange = (step, index, field, value) => {
    setFormData((prevData) => {
      let updatedData = { ...prevData };

      // Ensure 'step' is an array
      if (!updatedData[step]) {
        updatedData[step] = [];
      }

      // Ensure the specified index exists
      if (!updatedData[step][index]) {
        updatedData[step][index] = {};
      }

      // Update the specific field
      updatedData[step][index][field] = value;

      saveUserFormData(updatedData); // Persist data
      return updatedData;
    });
  };

  // function for changing nested data in form
  const handleNestedChange = (path, value) => {
    setFormData((prevData) => {
      const keys = path.split(".");
      const updatedData = { ...prevData };
      let current = updatedData;

      for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];

        if (!isNaN(key)) {
          const index = parseInt(key, 10);
          if (!Array.isArray(current)) return prevData;
          if (!current[index]) current[index] = {};
          current = current[index];
        } else {
          if (!current[key]) current[key] = {};
          current = current[key];
        }
      }

      current[keys[keys.length - 1]] = value;

      // Check if the updated field is "DomesticPromoter" or "Others"
      if (
        path === "ShareholdersFunds.Domestic.DomesticPromoter" ||
        path === "ShareholdersFunds.Domestic.Others"
      ) {
        // Convert values to numbers for summation
        updatedData.ShareholdersFunds.Domestic.Total =
          parseFloat(
            updatedData.ShareholdersFunds.Domestic.DomesticPromoter || 0
          ) + parseFloat(updatedData.ShareholdersFunds.Domestic.Others || 0);

        updatedData.ShareholdersFunds.ShareOfEquity =
          parseFloat(updatedData.ShareholdersFunds.Foreign.Total || 0) +
          parseFloat(updatedData.ShareholdersFunds.Domestic.Total || 0);
      }

      // check if updated filed is ShareholdersFunds.Foreign.FDI or related to inside code
      if (
        path === "ShareholdersFunds.Foreign.FDI" ||
        path === "ShareholdersFunds.Foreign.FPI" ||
        path === "ShareholdersFunds.Foreign.FII" ||
        path === "ShareholdersFunds.Foreign.ForeignPromoter" ||
        path === "ShareholdersFunds.Foreign.Others"
      ) {
        updatedData.ShareholdersFunds.Foreign.Total =
          parseFloat(updatedData.ShareholdersFunds.Foreign.FDI || 0) +
          parseFloat(updatedData.ShareholdersFunds.Foreign.FPI || 0) +
          parseFloat(updatedData.ShareholdersFunds.Foreign.FII || 0) +
          parseFloat(
            updatedData.ShareholdersFunds.Foreign.ForeignPromoter || 0
          ) +
          parseFloat(updatedData.ShareholdersFunds.Foreign.Others || 0);

        updatedData.ShareholdersFunds.ShareOfEquity =
          parseFloat(updatedData.ShareholdersFunds.Foreign.Total || 0) +
          parseFloat(updatedData.ShareholdersFunds.Domestic.Total || 0);
      }

      // check if updated file path is FreshEquityReceived.Domestic.DomesticPromoter
      if (
        path === "FreshEquityReceived.Domestic.DomesticPromoter" ||
        path === "FreshEquityReceived.Domestic.Others"
      ) {
        updatedData.FreshEquityReceived.Domestic.Total =
          parseFloat(
            updatedData.FreshEquityReceived.Domestic.DomesticPromoter || 0
          ) + parseFloat(updatedData.FreshEquityReceived.Domestic.Others || 0);

        updatedData.FreshEquityReceived.Total =
          parseFloat(updatedData.FreshEquityReceived.Foreign.Total || 0) +
          parseFloat(updatedData.FreshEquityReceived.Domestic.Total || 0);
      }

      if (
        path === "FreshEquityReceived.Foreign.FDI" ||
        path === "FreshEquityReceived.Foreign.FPI" ||
        path === "FreshEquityReceived.Foreign.FII" ||
        path === "FreshEquityReceived.Foreign.ForeignPromoter" ||
        path === "FreshEquityReceived.Foreign.Others"
      ) {
        updatedData.FreshEquityReceived.Foreign.Total =
          parseFloat(updatedData.FreshEquityReceived.Foreign.FDI || 0) +
          parseFloat(updatedData.FreshEquityReceived.Foreign.FPI || 0) +
          parseFloat(updatedData.FreshEquityReceived.Foreign.FII || 0) +
          parseFloat(
            updatedData.FreshEquityReceived.Foreign.ForeignPromoter || 0
          ) +
          parseFloat(updatedData.FreshEquityReceived.Foreign.Others || 0);

        updatedData.FreshEquityReceived.Total =
          parseFloat(updatedData.FreshEquityReceived.Foreign.Total || 0) +
          parseFloat(updatedData.FreshEquityReceived.Domestic.Total || 0);
      }

      saveUserFormData(updatedData);
      return updatedData;
    });
  };

  // function for overview form for changing states data
  const handleStateDataChange = (index, field, value) => {
    setFormData((prevData) => {
      const updatedStates = prevData.States ? [...prevData.States] : [];

      // Ensure the state object exists at the given index
      if (!updatedStates[index]) {
        updatedStates[index] = {};
      }

      updatedStates[index] = {
        ...updatedStates[index],
        [field]: value, // Update only the selected field
      };

      const updatedData = { ...prevData, States: updatedStates };

      // Save to local storage (optional)
      saveUserFormData(updatedData);

      console.log("Updated States:", updatedData.States); // Debugging log
      return updatedData;
    });
  };

  // function for equity form
  const handleRowCountChange = (e, key) => {
    const newCount = Number(e.target.value);

    setFormData((prevData) => {
      const updatedProviders = [...(prevData[key] || [])];

      // Ensure array has the correct length
      while (updatedProviders.length < newCount) {
        updatedProviders.push({ Name: "", Type: "", AmountReported: "" });
      }
      while (updatedProviders.length > newCount) {
        updatedProviders.pop();
      }

      const updatedData = {
        ...prevData,
        [key]: updatedProviders, // Dynamically update the key
      };
      saveUserFormData(updatedData); // Store data in localStorage
      return updatedData;
    });
  };
  // function for equity form
  const handleInputChange = (index, field, value, key) => {
    setFormData((prevData) => {
      const updatedProviders =
        prevData[key].map((item, i) =>
          i === index ? { ...item, [field]: value } : item
        ) || [];

      const updatedData = {
        ...prevData,
        [key]: updatedProviders, // Dynamically update the key
      };
      saveUserFormData(updatedData); // Store data in localStorage
      return updatedData;
    });
  };

  // function for Rating form
  const handleRowCountChangeRating = (
    e,
    fieldName,
    setRowCount,
    defaultRowStructure
  ) => {
    const newCount = Number(e.target.value);
    setRowCount(newCount);

    setFormData((prevData) => {
      const updatedRows = [...(prevData[fieldName] || [])];

      // Ensure array has the correct length
      while (updatedRows.length < newCount) {
        updatedRows.push({ ...defaultRowStructure });
      }
      while (updatedRows.length > newCount) {
        updatedRows.pop();
      }

      const updatedData = { ...prevData, [fieldName]: updatedRows };
      saveUserFormData(updatedData); // Store data in localStorage
      return updatedData;
    });
  };

  // function for Rating form
  const handleInputChangeRating = (index, field, value, fieldName) => {
    setFormData((prevData) => {
      const updatedRows = prevData[fieldName].map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      );

      const updatedData = { ...prevData, [fieldName]: updatedRows };
      saveUserFormData(updatedData); // Store data in localStorage
      return updatedData;
    });
  };

  const handleMicroFinanceRowChange = (e, fieldName, defaultRowStructure) => {
    const newCount = Number(e.target.value);

    setFormData((prevData) => {
      const updatedRows = [...(prevData[fieldName] || [])];

      // Ensure array has the correct length
      while (updatedRows.length < newCount) {
        updatedRows.push({ ...defaultRowStructure });
      }
      while (updatedRows.length > newCount) {
        updatedRows.pop();
      }

      return { ...prevData, [fieldName]: updatedRows };
    });
  };

  const handleRepeaterChange = (fieldName, index, key, value) => {
    setFormData((prevData) => {
      const updatedList = prevData[fieldName].map((item, i) =>
        i === index ? { ...item, [key]: value } : item
      );

      const updatedData = { ...prevData, [fieldName]: updatedList };
      saveUserFormData(updatedData); // Store updated data in localStorage
      return updatedData;
    });
  };

  // function triggering on clicking next button
  const handleNext = () => {
    // Save form data to local storage before moving to the next step
    console.log("trig next");
    saveUserFormData(formData);
    setActiveStep((prevStep) => prevStep + 1);
    console.log("localnext", loadUserFormData());
  };

  // function triggering on clicking previous button
  const handlePrev = () => {
    setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const handleReset = () => {
    clearUserFormData();
    alert("data cleared successfully.");
    window.location.reload();
  };

  // function for final submit
  const handleSubmit = async () => {
    try {
      const data = loadUserFormData();
      console.log("fm_data_b", data);
      // const response = await axios.post(`${BaseUrl}/${storeLoanDetails}`, {
      //   data, // Ensuring "data" is sent as expected
      //   lastDateOfQuarter: "2024-12-31", // Example, adjust as needed
      // });
      // console.log("loan_success", response);
    } catch (err) {
      // console.log("loan_failed", err);
      // alert(err);
    } finally {
      clearUserFormData();
    }
  };

  const steps = [
    {
      title: "Overview",
      component: (
        <>
          <div style={stepWrapperStyle}>
            <div style={stepTitleStyle}>Overview</div>
            <Overview
              key={importKey}
              formData={formData}
              setFormData={setFormData}
              handleChange={handleChange}
              handleStateDataChange={handleStateDataChange}
              quarterList={quarterList}
              selectedMonthName={selectedMonthName}
              setSelectedMonthName={setSelectedMonthName}
              selectedDuring_FY={selectedDuring_FY}
              setselectedDuring_FY={setselectedDuring_FY}
            />
          </div>

          <div style={stepWrapperStyle}>
            <div style={stepTitleStyle}>Equity</div>
            <Equity
              formData={formData}
              handleChange={handleChange}
              handleNestedChange={handleNestedChange}
              handleRowCountChange={handleRowCountChange}
              handleInputChange={handleInputChange}
              quarterList={quarterList}
              selectedMonthName={selectedMonthName}
              setSelectedMonthName={setSelectedMonthName}
            />
          </div>

          <div style={stepWrapperStyle}>
            <div style={stepTitleStyle}>Portfolio Breakup</div>
            <PortfolioBreakup
              formData={formData}
              handleChange={handleChange}
              handleNestedChange={handleNestedChange}
              quarterList={quarterList}
              selectedMonthName={selectedMonthName}
              setSelectedMonthName={setSelectedMonthName}
              setQuarter={setQuarter}
            />
          </div>

          <div style={stepWrapperStyle}>
            <div style={stepTitleStyle}>Rating</div>
            <Rating
              formData={formData}
              handleChange={handleChange}
              handleNestedChange={handleNestedChange}
              handleRowCountChangeRating={handleRowCountChangeRating}
              handleInputChangeRating={handleInputChangeRating}
              quarterList={quarterList}
              selectedMonthName={selectedMonthName}
              setSelectedMonthName={setSelectedMonthName}
            />
          </div>

          <div style={stepWrapperStyle}>
            <div style={stepTitleStyle}>Financial Ratio</div>
            <FinancialRatio
              formData={formData}
              handleChange={handleChange}
              handleNestedChange={handleNestedChange}
              quarterList={quarterList}
              selectedMonthName={selectedMonthName}
              setSelectedMonthName={setSelectedMonthName}
              Quarter={Quarter}
            />
          </div>
        </>
      ),
    }
    ,
    {
      title: "State&Equity",
      component: (
        <div style={stepWrapperStyle}>
          <div style={stepTitleStyle}>State & Equity</div>
          <StateEquity
            key={importKey}
            formData={formData}
            setFormData={setFormData}
            numStates={numStates}
            setNumStates={setNumStates}
            handleChange={handleChange}
            handleNestedChange={handleNestedChange}
            quarterList={quarterList}
            selectedMonthName={selectedMonthName}
            setSelectedMonthName={setSelectedMonthName}
          />
        </div>
      ),
    }
    ,

    {
      title: "Products",
      component: (
        <>
          <div style={stepWrapperStyle}>
            <div style={stepTitleStyle}>Product Pricing</div>
            <ProductPricing
              formData={formData}
              handleChange={handleChange}
              handleNestedChange={handleNestedChange}
              handleRepeaterChange={handleRepeaterChange}
              handleMicroFinanceRowChange={handleMicroFinanceRowChange}
              quarterList={quarterList}
              selectedMonthName={selectedMonthName}
              setSelectedMonthName={setSelectedMonthName}
            />
          </div>

          <div style={stepWrapperStyle}>
            <div style={stepTitleStyle}>Pricing For Quarter</div>
            <PricingForQuarter
              formData={formData}
              handleChange={handleChange}
              handleNestedChange={handleNestedChange}
              handleRepeaterChange={handleRepeaterChange}
              handleMicroFinanceRowChange={handleMicroFinanceRowChange}
              quarterList={quarterList}
              selectedMonthName={selectedMonthName}
              setSelectedMonthName={setSelectedMonthName}
              Quarter={Quarter}
            />
          </div>
        </>
      ),
    }
    ,

    {
      title: "HR",
      component: (
        <>
          <div style={stepWrapperStyle}>
            <div style={stepTitleStyle}>HR Details</div>
            <HR
              formData={formData}
              handleChange={handleChange}
              handleNestedChange={handleNestedChange}
              quarterList={quarterList}
              selectedMonthName={selectedMonthName}
              setSelectedMonthName={setSelectedMonthName}
              selectedDuring_FY={selectedDuring_FY}
              setselectedDuring_FY={setselectedDuring_FY}
            />
          </div>

          <div style={stepWrapperStyle}>
            <div style={stepTitleStyle}>Borrowing</div>
            <Borrowing
              formData={formData}
              handleChange={handleChange}
              handleNestedChange={handleNestedChange}
              handleArrayChange={handleArrayChange}
              quarterList={quarterList}
              selectedMonthName={selectedMonthName}
              setSelectedMonthName={setSelectedMonthName}
              selectedDuring_FY={selectedDuring_FY}
              setselectedDuring_FY={setselectedDuring_FY}
            />
          </div>
        </>
      ),
    }
    ,
    {
      title: "ALM",
      component: (
        <div style={stepWrapperStyle}>
          <div style={stepTitleStyle}>Asset Liability Management</div>
          <ALM
            formData={formData}
            handleChange={handleChange}
            handleNestedChange={handleNestedChange}
            quarterList={quarterList}
            selectedMonthName={selectedMonthName}
            setSelectedMonthName={setSelectedMonthName}
          />
        </div>
      ),
    }
    ,

  ];

  return (
    <Box mt={10}>
      <Breadcrumb title="Data Reports" icon={GrassIcon} />

      {/* <div style={{ textAlign: "left", marginTop: "2rem" }}>
        <p>
          <b>Choose Excel</b>
        </p>
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleFileSelection}
        />
        <button
          className="btn btn-sm btn-primary"
          onClick={() => handleFileUpload(selectedFile, setFormData)}
        >
          Upload & Fill Form
        </button>

        <button
          className="btn btn-sm btn-danger"
          onClick={() => handleReset()}
          style={{ marginLeft: "3rem" }}
        >
          Reset
        </button>

        <a href="/excel_format/template.xlsx" download="user_form_template.xlsx" style={{ marginLeft: "3rem" }}>
          <button className="btn btn-sm btn-secondary">Download Excel Template</button>
        </a>
      </div> */}

      <div style={{ textAlign: "left", marginTop: "2rem" }}>

        {/* Quarter */}


{/* Choose Excel + File input (PROFESSIONAL VERSION) */}
<div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginBottom: "2rem",
    padding: "16px 24px",
    borderRadius: "16px",

    background: "#ffffff",
    border: "1px solid #e5e7eb",

    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
    flexWrap: "wrap"
  }}
>
  {/* Quarter */}
  <select
    className="form-control form-control-sm"
    style={{
      width: "220px",
      height: "40px",
      borderRadius: "999px",
      border: "1px solid #d1d5db",
      background: "#ffffff",
      fontWeight: "600",
      fontSize: "14px",
      paddingLeft: "14px",
      color: "#111827"
    }}
    onChange={(e) => {
      const q = e.target.value;
      const found = quarterList.find((item) => item.Quarter === q);
      if (found) {
        setSelectedMonthName(found.Month_Name);
        setselectedDuring_FY(found.During_FY);
        setQuarter(found.Quarter);
      }
    }}
  >
    <option value="">Select Quarter</option>
    {quarterList.map((q) => (
      <option key={q.id} value={q.Quarter}>
        {q.Quarter}
      </option>
    ))}
  </select>

  {/* File Input Wrapper */}
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "12px",
      padding: "6px 12px",
      borderRadius: "12px",
      border: "1px dashed #d1d5db",
      background: "#fafafa",
      minWidth: "260px"
    }}
  >
    <input
      type="file"
      accept=".xlsx, .xls"
      onChange={handleFileSelection}
      style={{
        fontSize: "13px",
        color: "#374151",
        background: "transparent",
        border: "none",
        outline: "none"
      }}
    />
  </div>

  {/* Import Button */}
  <button
    className="btn btn-sm"
    style={{
      height: "40px",
      padding: "0 26px",
      borderRadius: "999px",
      fontWeight: "700",
      fontSize: "14px",
      background: "#2563eb",
      color: "#ffffff",
      border: "none",
      boxShadow: "0 6px 14px rgba(37,99,235,0.35)"
    }}
    onClick={async () => {
      const data = await importExcel(selectedFile, formData);
       setFormData({ ...data });
      setImportKey((k) => k + 1);
      if (data.States && data.States.length) {
        setNumStates(data.States.length);
      }
    }}
  >
    Import
  </button>

  {/* Reset */}
  <button
    className="btn btn-sm"
    style={{
      height: "40px",
      padding: "0 22px",
      borderRadius: "999px",
      fontWeight: "600",
      fontSize: "14px",
      background: "#ffffff",
      border: "1px solid #fca5a5",
      color: "#dc2626"
    }}
    onClick={() => handleReset()}
  >
    Reset
  </button>

  {/* Template */}
  <a
    href="/excel_format/template.xlsx"
    download="user_form_template.xlsx"
    style={{ marginLeft: "auto" }}
  >
    <button
      className="btn btn-sm"
      style={{
        height: "40px",
        padding: "0 24px",
        borderRadius: "999px",
        fontWeight: "600",
        fontSize: "14px",
        background: "#f9fafb",
        border: "1px solid #e5e7eb",
        color: "#111827"
      }}
    >
      Template
    </button>
  </a>
</div>







      </div>


      <MultiStep
        activeStep={activeStep}
        showNavigation={activeStep !== steps.length - 1}
        steps={steps}
        prevButton={
          activeStep !== steps.length - 1
            ? {
              title: "← Previous",
              style: {
                background: "linear-gradient(135deg, #d32f2f, #b71c1c)",
                color: "#fff",
                fontWeight: "700",
                letterSpacing: "0.5px",
                padding: "10px 20px",
                borderRadius: "8px",
                float: "left",
                boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
                border: "none",
                cursor: "pointer"
              },
              onClick: handlePrev,
            }
            : null
        }


        nextButton={
          activeStep !== steps.length - 1
            ? {
              title: "Next →",
              style: {
                background: "linear-gradient(135deg, #2e7d32, #1b5e20)",
                color: "#fff",
                fontWeight: "700",
                letterSpacing: "0.5px",
                padding: "10px 26px",
                borderRadius: "8px",
                marginRight: "16rem",
                float: "right",
                boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
                border: "none",
                cursor: "pointer"
              },
              onClick: () => {
                console.log("click");
                handleNext();
              },
            }
            : null
        }
      />

    </Box>
  );
};

export default DataDashboard;
