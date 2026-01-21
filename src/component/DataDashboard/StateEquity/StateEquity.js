// import "./OverViewStateUT.css";
import React, { useState, useEffect } from "react";
import { loadUserFormData } from "../utils/StorageHelper";

function StateEquity({
    formData,
    handleChange,
    handleStateDataChange,
    setFormData,
    numStates,
    setNumStates   , selectedMonthName        // ✅ YEH LINE MISS THI
,
}) {
    // const [numStates, setNumStates] = useState(() => {
    //     const storedData = loadUserFormData();
    //     return storedData && storedData.States ? storedData.States.length : 1;
    // });

    // const [selectedStates, setSelectedStates] = useState(
    //     Array(numStates).fill("")
    // );

    const indicators = [
        "State",
        "Number of Employees (in numbers)",
        "Number of Districts (in numbers)",
        "Number of Offices / Branches (in numbers)",
        "Assets under management AUM (On BS + Off BS) (in INR)",
        "Number of Active Borrowers (in numbers)",
        "Portfolio at Risk 1 -30 days (in INR)",
        "Portfolio at Risk > 30 days (in INR)",
        "Portfolio at Risk > 60 days (in INR)",
        "Portfolio at Risk > 90 days (in INR)",
        "Portfolio at Risk > 180 days (in INR)",
        "Net Loan Portfolio (Balance Sheet Portfolio) (in INR)",
        "On Balance Sheet Portfolio at Risk 1 -30 days (in INR)",
        "On Balance Sheet Portfolio at Risk > 30 days (in INR)",
        "On Balance Sheet Portfolio at Risk > 60 days (in INR)",
        "On Balance Sheet Portfolio at Risk > 90 days (in INR)",
        "On Balance Sheet Portfolio at Risk > 180 days (in INR)",
        "Off Balance Sheet Portfolio / Managed Portfolio (in INR)",
        "Off Balance Sheet Portfolio at Risk 1 -30 days (in INR)",
        "Off Balance Sheet Portfolio at Risk > 30 days (in INR)",
        "Off Balance Sheet Portfolio at Risk > 60 days (in INR)",
        "Off Balance Sheet Portfolio at Risk > 90 days (in INR)",
        "Off Balance Sheet Portfolio at Risk > 180 days (in INR)",
        "Number of Loan Disbursed (in Numbers) (Quarter)",
        "Loan Amount Disbursed (in INR) (Quarter)",
        "Repayment amount due (excluding overdue, prepayment and foreclosure demand) (in INR)",
        "Repayment amount collected (excluding overdue, prepayment and foreclosure collected) (in INR)",
        "Pre-payment amount collected (in INR)",
    ];

    const stateList = [
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttar Pradesh",
        "Uttarakhand",
        "West Bengal",
    ];

    const mapIndicatorToKey = (indicator) => {
        const mappings = {
            State: "StateName",
            "Number of Employees (in numbers)": "NumberOfEmployees",
            "Number of Districts (in numbers)": "NumberOfDistricts",
            "Number of Offices / Branches (in numbers)": "NumberOfBranches",
            "Assets under management AUM (On BS + Off BS) (in INR)":
                "AssetsUnderManagement",
            "Number of Active Borrowers (in numbers)": "NumberOfActiveBorrowers",
            "Portfolio at Risk 1 -30 days (in INR)": "PortfolioRisk1_30",
            "Portfolio at Risk > 30 days (in INR)": "PortfolioRisk30",
            "Portfolio at Risk > 60 days (in INR)": "PortfolioRisk60",
            "Portfolio at Risk > 90 days (in INR)": "PortfolioRisk90",
            "Portfolio at Risk > 180 days (in INR)": "PortfolioRisk180",
            "Net Loan Portfolio (Balance Sheet Portfolio) (in INR)":
                "NetLoanPortfolio",
            "On Balance Sheet Portfolio at Risk 1 -30 days (in INR)":
                "OnBalanceSheetRisk1_30",
            "On Balance Sheet Portfolio at Risk > 30 days (in INR)":
                "OnBalanceSheetRisk30",
            "On Balance Sheet Portfolio at Risk > 60 days (in INR)":
                "OnBalanceSheetRisk60",
            "On Balance Sheet Portfolio at Risk > 90 days (in INR)":
                "OnBalanceSheetRisk90",
            "On Balance Sheet Portfolio at Risk > 180 days (in INR)":
                "OnBalanceSheetRisk180",
            "Off Balance Sheet Portfolio / Managed Portfolio (in INR)":
                "OffBalanceSheetPortfolio",
            "Off Balance Sheet Portfolio at Risk 1 -30 days (in INR)":
                "OffBalanceSheetRisk1_30",
            "Off Balance Sheet Portfolio at Risk > 30 days (in INR)":
                "OffBalanceSheetRisk30",
            "Off Balance Sheet Portfolio at Risk > 60 days (in INR)":
                "OffBalanceSheetRisk60",
            "Off Balance Sheet Portfolio at Risk > 90 days (in INR)":
                "OffBalanceSheetRisk90",
            "Off Balance Sheet Portfolio at Risk > 180 days (in INR)":
                "OffBalanceSheetRisk180",
            "Number of Loan Disbursed (in Numbers) (Quarter)": "LoanDisbursedQuarter",
            "Loan Amount Disbursed (in INR) (Quarter)": "LoanAmountDisbursedQuarter",
            "Repayment amount due (excluding overdue, prepayment and foreclosure demand) (in INR)":
                "RepaymentAmountDue",
            "Repayment amount collected (excluding overdue, prepayment and foreclosure collected) (in INR)":
                "RepaymentAmountCollected",
            "Pre-payment amount collected (in INR)": "PrePaymentAmountCollected",
            "Total Funding Received (in INR)": "TotalFundingReceived",
            "Funding Received from Banks (in INR)": "FundingReceivedFromBanks",
            "Funding Received from Other Financial Institutions (in INR)":
                "FundingReceivedFromOtherFIs",
            "Securitization During Period (in INR)": "SecuritizationDuringPeriod",
            "Percentage of Loans Disbursed Cashless (%)":
                "PercentLoanDisbursedCashless",
            "Percentage of Loans Collected Cashless (%)":
                "PercentLoanCollectedCashless",
        };

        return mappings[indicator] || indicator; // Return the mapped key or default to itself
    };
    useEffect(() => {
        setFormData(prev => {
            const states = prev.States || [];

            if (states.length === numStates) return prev;

            let updated = [...states];

            // increase
            while (updated.length < numStates) {
                updated.push({});
            }

            // decrease
            if (updated.length > numStates) {
                updated = updated.slice(0, numStates);
            }

            return { ...prev, States: updated };
        });
    }, [numStates, setFormData]);


    // Update formData.States whenever numStates changes
    // useEffect(() => {
    //     setFormData((prevData) => {
    //         let updatedStates = [...(prevData.States || [])];

    //         // Increase array length if needed
    //         while (updatedStates.length < numStates) {
    //             updatedStates.push({ StateName: "" });
    //         }

    //         // Trim array if numStates is reduced
    //         updatedStates = updatedStates.slice(0, numStates);

    //         return { ...prevData, States: updatedStates };
    //     });
    // }, [numStates]);




    // const handleStateChange = (index, value) => {
    //     const newStates = [...selectedStates];
    //     newStates[index] = value;
    //     setSelectedStates(newStates);
    // };

    return (
        <div
            style={{
                width: "80%",
                backgroundColor: "#fff",
                padding: "20px",
            }}
        >

            <form>


                {/* state data started */}
                <table
                    className="table table-light table-bordered border-primary"
                    style={{ width: "100%" }}
                >
                    <thead>
                        <tr className="blue-row">
                            <th>Number of States and Union Territories Operational</th>
                            <th>
                                <select
                                    value={numStates}
                                    onChange={(e) => setNumStates(Number(e.target.value))}
                                >
                                    {[...Array(36)].map((_, index) => (
                                        <option value={index + 1} key={index + 1}>
                                            {index + 1}
                                        </option>
                                    ))}
                                </select>
                            </th>
                        </tr>

                        <tr className="blue-row">
                            <th>
                                <label className="form-label">Indicator</label>
                            </th>
                            <th></th>
                            {formData.States.map((_, i) => (
                                <th key={i}>State {i + 1}</th>
                            ))}

                            <th>Total</th>
                        </tr>
                    </thead>

                    <tbody>
                        {indicators.map((indicator, rowIndex) => (
                            <tr key={rowIndex}>
                                <td>{indicator}</td>
                                <td>{indicator === "State" ? "" : ""} {selectedMonthName
                  ? selectedMonthName
                  : ""}</td>
                                {/* 
                                {formData.States.map((_, i) => (
                                    <td key={i}>

                                        <td key={i}>
                                            {indicator === "State" ? (
                                                <select
                                                    value={
                                                        formData.States[i] && formData.States[i].StateName
                                                            ? formData.States[i].StateName
                                                            : ""
                                                    }
                                                    onChange={(e) =>
                                                        handleStateDataChange(
                                                            i,
                                                            "StateName",
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    <option value="">Select State</option>
                                                    {stateList.map((state, index) => (
                                                        <option key={index} value={state}>
                                                            {state}
                                                        </option>
                                                    ))}
                                                </select>
                                            ) : (
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={
                                                        formData.States[i] &&
                                                            formData.States[i][mapIndicatorToKey(indicator)]
                                                            ? formData.States[i][mapIndicatorToKey(indicator)]
                                                            : ""
                                                    }
                                                    onChange={(e) =>
                                                        handleStateDataChange(
                                                            i,
                                                            mapIndicatorToKey(indicator),
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            )}
                                        </td>


                                    </td>
                                ))} */}
                                {formData.States.map((_, i) => (
                                    <td key={i}>
                                        {indicator === "State" ? (
                                            <select
                                                value={
                                                    formData.States &&
                                                        formData.States[i] &&
                                                        formData.States[i].StateName
                                                        ? formData.States[i].StateName
                                                        : ""
                                                }
                                                onChange={(e) =>
                                                    handleStateDataChange(i, "StateName", e.target.value)
                                                }
                                            >
                                                <option value="">Select State</option>
                                                {stateList.map((state, index) => (
                                                    <option key={index} value={state}>
                                                        {state}
                                                    </option>
                                                ))}
                                            </select>
                                        ) : (
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={
                                                    formData.States &&
                                                        formData.States[i] &&
                                                        formData.States[i][mapIndicatorToKey(indicator)]
                                                        ? formData.States[i][mapIndicatorToKey(indicator)]
                                                        : ""
                                                }
                                                onChange={(e) =>
                                                    handleStateDataChange(
                                                        i,
                                                        mapIndicatorToKey(indicator),
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        )}
                                    </td>
                                ))}


                                <td>0</td>
                            </tr>
                        ))}
                    </tbody>
                </table>



            </form>
        </div>
    );
}

export default StateEquity;
