import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./ViewContent.css";
import axios from "axios";
import DOMPurify from "dompurify";
import { CleaningServices } from "@mui/icons-material";
const stripHtml = (html = "") => {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
};


const ViewContent = () => {
  const navigate = useNavigate();
  const location = useLocation();


  console.log("📥 ViewContent mounted");
  console.log("📦 location.state in ViewContent:", location.state);

  // var rowData =
  //   location.state && location.state.rowData
  //     ? location.state.rowData
  //     : {};

  const [rowData, setRowData] = useState(
    location.state && location.state.rowData
      ? location.state.rowData
      : {}
  );


  var hodSiAllowed =
    location.state && location.state.hodSiAllowed
      ? location.state.hodSiAllowed
      : false;

  const [hodStatus, setHodStatus] = useState(rowData.hod_observation || "");
  const [hodComment, setHodComment] = useState(
    stripHtml(rowData.status_update)
  );

  ;


  const [updating, setUpdating] = useState(false);


  const [imageData, setImageData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log("data in view content", rowData);

  useEffect(() => {
    const fetchData = async () => {
      if (!rowData.id) return;

      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.mfinindia.org/api/auth/meetings/show_new/${rowData.id}`
        );
        setImageData(
          Array.isArray(response.data) ? response.data : [response.data]
        );
        console.log("image data", response.data);
      } catch (err) {
        console.error("Error in getting view data", err);
        setError("Failed to load file data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [rowData]);

  const handleDeleteFile = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you to delete this file?"
    );
    if (confirmDelete) {
      try {
        const response = await axios.delete(
          `https://api.mfinindia.org/api/auth/meetings/destroyfile/${id}`
        );
        window.location.reload(true);
      } catch (err) {
        console.log("error in deleting file", err);
      }
    }
  };

  const formatWithBulletPoints = (text) => {
    if (!text) return text;

    if (text.includes("•")) {
      const parts = text.split("•");
      const title = parts[0].trim();
      const bulletPoints = parts
        .slice(1)
        .filter((point) => point.trim() !== "");

      return (
        <div className="bullet-list-container">
          {title && <div className="bullet-list-title">{title}</div>}
          <ul className="bullet-list">
            {bulletPoints.map((point, index) => (
              <li key={index} className="bullet-item">
                <span className="bullet-point">•</span>
                <span>{point.trim()}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    return text.split("\n").map((paragraph, i) => (
      <p key={i} className="plain-text">
        {paragraph}
      </p>
    ));
  };


  const handleHodSiUpdate = async () => {
    if (!hodStatus) {
      alert("Please select status");
      return;
    }

    try {
      setUpdating(true);
      const user = JSON.parse(localStorage.getItem("user"));

      await axios.post(
        `https://api.mfinindia.org/api/auth/meetings/archmeeting_update_new/${rowData.id}`,
        {
          id: rowData.id,
          regional_head: rowData.regional_head,
          hodObservation: hodStatus,
          statusUpdate: hodComment,
          loginemail: user.data.user.email,
          username: user.data.user.name,
          activity_type: rowData.activity_type,
        }
      );

      alert("HOD / SI Updated Successfully");

      // 🔥 THIS IS ALL YOU NEED
      setRowData((prev) => ({
        ...prev,
        hod_observation: hodStatus,
        head_and_si_remark: hodComment,
      }));

    } catch (err) {
      console.error(err);
      alert("Update failed");
    } finally {
      setUpdating(false);
    }
  };



  if (!rowData) {
    return <p>No data found. Please navigate properly.</p>;
  }

  useEffect(() => {
    setHodStatus(rowData.hod_observation || "");
    setHodComment(rowData.head_and_si_remark || "");
  }, [rowData]);


  return (
    <div className="AddMeeting mt-6">
      <div className="container-fluid">
        <div className="row g-0">
          <div className="col-12">
            <div className="col-sm-6 mb-3">
              <button
                onClick={() =>
                  navigate(-1, {
                    state: location.state.listState
                  })
                }
                // onClick={() => {
                //   console.log("⬅️ Going back with listState:", location.state.listState);

                //   navigate(`/scm-lists?status=closed`, {
                //     state: {
                //       listState: location.state.listState
                //     }
                //   });
                // }}
                className="back-button"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <ArrowBackIcon />
              </button>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h2 className="mb-4">
                Meeting Details : {rowData.activity_type}
              </h2>

              <div className="table-responsive" style={{ textAlign: "left" }}>
                <table className="table table-bordered">
                  <tbody>
                    {rowData.region && (
                      <tr>
                        <th style={{ width: "10%" }}>Region</th>
                        <td>{rowData.region}</td>
                      </tr>
                    )}
                    {rowData.regional_head && (
                      <tr>
                        <th>Regional Head</th>
                        <td>{rowData.regional_head}</td>
                      </tr>
                    )}
                    {rowData.state && (
                      <tr>
                        <th>State</th>
                        <td>{rowData.state}</td>
                      </tr>
                    )}
                    {rowData.district && (
                      <tr>
                        <th>District</th>
                        <td>
                          {rowData.activity_type === "SCM"
                            ? "All"
                            : rowData.district}
                        </td>
                      </tr>
                    )}
                    {rowData.dateOfMeeting && (
                      <tr>
                        <th>Date of Meeting</th>
                        <td>{rowData.dateOfMeeting}</td>
                      </tr>
                    )}
                    {rowData.type && (
                      <tr>
                        <th>Planned/Unplanned</th>
                        <td>{rowData.type}</td>
                      </tr>
                    )}
                    {rowData.mode && (
                      <tr>
                        <th>Online/Physical</th>
                        <td>{rowData.mode}</td>
                      </tr>
                    )}
                    {rowData.mom_uploaded_in_radar && (
                      <tr>
                        <th>MOM uploaded in RADAR</th>
                        <td>{rowData.mom_uploaded_in_radar}</td>
                      </tr>
                    )}
                    {rowData.personMeet && (
                      <tr>
                        <th>Person Met</th>
                        <td>{rowData.personMeet}</td>
                      </tr>
                    )}

                    {rowData.activity_details && (
                      <tr>
                        <th>Activity Details</th>
                        <td>
                          <div
                            className="activity-details-content"
                            dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(
                                rowData.activity_details
                              ),
                            }}
                          />
                        </td>
                      </tr>
                    )}

                    {rowData.important_decision && (
                      <tr>
                        <th>Important Decision(s)</th>
                        <td style={{ whiteSpace: "pre-wrap" }}>
                          {formatWithBulletPoints(rowData.important_decision)}
                        </td>
                      </tr>
                    )}
                    {rowData.status_update && (
                      <tr>
                        <th>Status Update(s)</th>
                        <td>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(rowData.status_update),
                            }}
                          />
                        </td>
                      </tr>
                    )}

                    {rowData.head_and_si_remark && (
                      <tr>
                        <th>HOD Remark</th>
                        <td>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(rowData.head_and_si_remark),
                            }}
                          />
                        </td>
                      </tr>
                    )}

                    {rowData.hod_observation && (
                      <tr>
                        <th>HOD Observation</th>
                        <td>{rowData.hod_observation}</td>
                      </tr>
                    )}



                    <tr>
                      <th>File(s)</th>
                      <td>
                        {loading ? (
                          <span>Loading files...</span>
                        ) : error ? (
                          <span className="text-red-500">{error}</span>
                        ) : imageData.length > 0 ? (
                          <div className="file-preview-container">
                            {imageData.map((image, index) => {
                              const fileUrl = `https://api.mfinindia.org/public/${image.uploadFile}`;
                              let extension = "";
                              let fileType = "";
                              let fileName = "";

                              if (image && image.uploadFile) {
                                const parts = image.uploadFile.split("/");
                                fileName = parts[parts.length - 1]; // Get the filename with extension
                                const extParts = fileName.split(".");
                                extension =
                                  extParts.length > 1
                                    ? extParts[
                                      extParts.length - 1
                                    ].toLowerCase()
                                    : "";

                                // Determine file type
                                if (
                                  ["jpg", "jpeg", "png", "gif"].includes(
                                    extension
                                  )
                                ) {
                                  fileType = "image";
                                } else if (
                                  ["mp4", "webm", "ogg"].includes(extension)
                                ) {
                                  fileType = "video";
                                } else if (extension === "pdf") {
                                  fileType = "pdf";
                                } else if (
                                  ["doc", "docx"].includes(extension)
                                ) {
                                  fileType = "document";
                                } else {
                                  fileType = "other";
                                }
                              }

                              return (
                                <div
                                  key={image.uploadFile || index}
                                  className="file-preview-item"
                                >
                                  {/* File Preview Section */}
                                  <div className="file-preview-content">
                                    {fileType === "image" ? (
                                      <img
                                        src={fileUrl}
                                        alt="File preview"
                                        className="file-image-preview"
                                      />
                                    ) : (
                                      <div className="file-icon-container">
                                        {fileType === "video" ? (
                                          <div className="video-icon">▶</div>
                                        ) : fileType === "pdf" ? (
                                          <div className="file-icon">📄</div>
                                        ) : fileType === "document" ? (
                                          <div className="file-icon">📝</div>
                                        ) : (
                                          <div className="file-icon">📂</div>
                                        )}
                                        <span className="file-extension">
                                          {extension.toUpperCase()}
                                        </span>
                                      </div>
                                    )}
                                    <div className="file-name">
                                      {fileName.split("_")[2]}
                                    </div>
                                  </div>

                                  {/* Action Buttons */}
                                  <div className="file-actions">
                                    <a
                                      href={fileUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="file-action-btn"
                                    >
                                      <button className="btn-view">View</button>
                                    </a>
                                    <button
                                      className="btn-delete"
                                      onClick={() => handleDeleteFile(image.id)}
                                    >
                                      Delete
                                    </button>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        ) : (
                          <span className="text-gray-500">
                            No files available
                          </span>
                        )}
                      </td>
                    </tr>

                    {hodSiAllowed && (
                      <tr>
                        <th
                          style={{
                            verticalAlign: "top",
                            paddingTop: "14px",
                            whiteSpace: "nowrap",
                          }}
                        >
                          HOD / SI Update
                        </th>

                        <td>
                          <div
                            style={{
                              display: "flex",
                              gap: "14px",
                              alignItems: "stretch",
                              padding: "10px",
                              borderRadius: "4px",
                              backgroundColor: "#fafafa",
                              border: "1px solid #e0e0e0",
                              maxWidth: "720px",
                            }}
                          >
                            {/* Status */}
                            <select
                              value={hodStatus}
                              onChange={(e) => setHodStatus(e.target.value)}
                              style={{
                                minWidth: "130px",
                                height: "36px",
                              }}
                            >
                              <option value="">Status</option>
                              <option value="Open">Open</option>
                              <option value="Closed">Closed</option>
                            </select>

                            {/* Comment */}
                            <textarea
                              value={hodComment}
                              onChange={(e) => setHodComment(e.target.value)}
                              placeholder="Comments..."
                              style={{
                                flex: 1,
                                height: "72px",
                                resize: "vertical",
                              }}
                            />

                            {/* Button */}
                            <div style={{ display: "flex", alignItems: "flex-end" }}>
                              <button
                                className="btn btn-primary"
                                onClick={handleHodSiUpdate}
                                disabled={updating}
                                style={{
                                  height: "36px",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                {updating ? "Updating..." : "Update"}
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewContent;
