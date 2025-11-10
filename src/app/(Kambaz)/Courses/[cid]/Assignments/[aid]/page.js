"use client";

import { useParams, useRouter } from "next/navigation";
import { Button, Row, Col, InputGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { addAssignment, updateAssignment } from "../reducer";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state) => state.assignmentsReducer);

  // Default assignment values
  const defaultAssignment = {
    aid: "",
    title: "",
    description: "",
    points: 100,
    dueDate: "",
    availableDate: "",
    cid: cid,
  };

  // Initialize state with default or fetched assignment
  const [assignment, setAssignment] = useState(defaultAssignment);

  // Fetch assignment if editing (aid !== "new")
  useEffect(() => {
    if (aid !== "new") {
      const existingAssignment = assignments.find((a) => a.aid === aid);
      if (existingAssignment) {
        setAssignment(existingAssignment);
      }
    }
  }, [aid, assignments]);

  // Handle input changes
  const handleChange = (field, value) => {
    setAssignment({ ...assignment, [field]: value });
  };

  // Handle save
  const handleSave = () => {
    if (aid === "new") {
      // Generate new aid
      const newAid = `A${Date.now()}`;
      const newAssignment = {
        ...assignment,
        aid: newAid,
      };
      dispatch(addAssignment(newAssignment));
    } else {
      dispatch(updateAssignment(assignment));
    }
    router.push(`/Courses/${cid}/Assignments`);
  };

  // Handle cancel
  const handleCancel = () => {
    router.push(`/Courses/${cid}/Assignments`);
  };

  return (
    <div className="container-fluid p-4">
      <Row>
        <Col lg={8}>
          <div className="mb-3">
            <label
              htmlFor="wd-name"
              className="form-label"
              style={{ color: "black" }}
            >
              Assignment Name
            </label>
            <input
              type="text"
              className="form-control"
              id="wd-name"
              value={assignment.title}
              onChange={(e) => handleChange("title", e.target.value)}
              placeholder="Assignment Name"
            />
          </div>

          <div className="mb-4">
            <textarea
              className="form-control w-100"
              rows={12}
              style={{ resize: "none", overflow: "hidden", minHeight: "300px" }}
              id="wd-description"
              value={assignment.description}
              onChange={(e) => handleChange("description", e.target.value)}
            />
          </div>

          <Row className="mb-3">
            <Col sm={3} className="text-end">
              <label
                htmlFor="wd-points"
                className="col-form-label"
                style={{ color: "black" }}
              >
                Points
              </label>
            </Col>
            <Col sm={9}>
              <input
                type="number"
                className="form-control"
                id="wd-points"
                value={assignment.points}
                onChange={(e) =>
                  handleChange("points", parseInt(e.target.value))
                }
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col sm={3} className="text-end">
              <label
                htmlFor="wd-group"
                className="col-form-label"
                style={{ color: "black" }}
              >
                Assignment Group
              </label>
            </Col>
            <Col sm={9}>
              <select className="form-select" id="wd-group">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECT">PROJECT</option>
              </select>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col sm={3} className="text-end">
              <label
                htmlFor="wd-display-grade-as"
                className="col-form-label"
                style={{ color: "black" }}
              >
                Display Grade as
              </label>
            </Col>
            <Col sm={9}>
              <select className="form-select" id="wd-display-grade-as">
                <option value="Percentage">Percentage</option>
                <option value="Points">Points</option>
                <option value="Letter">Letter Grade</option>
              </select>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col sm={3} className="text-end">
              <label
                className="col-form-label fw-bold"
                style={{ color: "black" }}
              >
                Submission Type
              </label>
            </Col>
            <Col sm={9}>
              <div className="card p-3">
                <select className="form-select mb-3" id="wd-submission-type">
                  <option value="Online">Online</option>
                  <option value="Paper">On Paper</option>
                  <option value="External">External Tool</option>
                </select>

                <div>
                  <strong style={{ color: "black" }}>
                    Online Entry Options
                  </strong>
                  <div className="mt-2">
                    <div className="form-check mb-1 d-flex align-items-start">
                      <input
                        className="form-check-input me-2 mt-1"
                        type="checkbox"
                        id="wd-text-entry"
                      />
                      <label
                        className="form-check-label mb-0"
                        htmlFor="wd-text-entry"
                        style={{ color: "black" }}
                      >
                        Text Entry
                      </label>
                    </div>
                    <div className="form-check mb-1 d-flex align-items-start">
                      <input
                        className="form-check-input me-2 mt-1"
                        type="checkbox"
                        id="wd-website-url"
                        defaultChecked
                      />
                      <label
                        className="form-check-label mb-0"
                        htmlFor="wd-website-url"
                        style={{ color: "black" }}
                      >
                        Website URL
                      </label>
                    </div>
                    <div className="form-check mb-1 d-flex align-items-start">
                      <input
                        className="form-check-input me-2 mt-1"
                        type="checkbox"
                        id="wd-media-recordings"
                      />
                      <label
                        className="form-check-label mb-0"
                        htmlFor="wd-media-recordings"
                        style={{ color: "black" }}
                      >
                        Media Recordings
                      </label>
                    </div>
                    <div className="form-check mb-1 d-flex align-items-start">
                      <input
                        className="form-check-input me-2 mt-1"
                        type="checkbox"
                        id="wd-student-annotation"
                      />
                      <label
                        className="form-check-label mb-0"
                        htmlFor="wd-student-annotation"
                        style={{ color: "black" }}
                      >
                        Student Annotation
                      </label>
                    </div>
                    <div className="form-check mb-1 d-flex align-items-start">
                      <input
                        className="form-check-input me-2 mt-1"
                        type="checkbox"
                        id="wd-file-upload"
                      />
                      <label
                        className="form-check-label mb-0"
                        htmlFor="wd-file-upload"
                        style={{ color: "black" }}
                      >
                        File Uploads
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col sm={3} className="text-end">
              <label
                className="col-form-label fw-bold"
                style={{ color: "black" }}
              >
                Assign
              </label>
            </Col>
            <Col sm={9}>
              <div className="card p-3">
                <div className="mb-3">
                  <label
                    className="form-label fw-bold"
                    style={{ color: "black" }}
                  >
                    Assign to
                  </label>
                  <div
                    className="form-control"
                    style={{ minHeight: "40px", padding: "8px" }}
                  >
                    <span
                      className="me-2"
                      style={{
                        backgroundColor: "#e9ecef",
                        color: "black",
                        padding: "4px 8px",
                        fontSize: "14px",
                        borderRadius: "4px",
                        display: "inline-flex",
                        alignItems: "center",
                        border: "1px solid #dee2e6",
                      }}
                    >
                      Everyone
                      <span
                        style={{
                          marginLeft: "8px",
                          cursor: "pointer",
                          color: "#6c757d",
                          fontWeight: "bold",
                          fontSize: "16px",
                        }}
                      >
                        ×
                      </span>
                    </span>
                  </div>
                </div>

                <Row>
                  <Col md={4}>
                    <div className="mb-3">
                      <label
                        className="form-label fw-bold"
                        style={{ color: "black" }}
                      >
                        Due
                      </label>
                      <InputGroup>
                        <input
                          type="datetime-local"
                          className="form-control"
                          id="wd-due-date"
                          value={
                            assignment.dueDate
                              ? `${assignment.dueDate}T23:59`
                              : ""
                          }
                          onChange={(e) => {
                            const dateValue = e.target.value.split("T")[0];
                            handleChange("dueDate", dateValue);
                          }}
                        />
                      </InputGroup>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="mb-3">
                      <label
                        className="form-label fw-bold"
                        style={{ color: "black" }}
                      >
                        Available from
                      </label>
                      <InputGroup>
                        <input
                          type="datetime-local"
                          className="form-control"
                          id="wd-available-from"
                          value={
                            assignment.availableDate
                              ? `${assignment.availableDate}T12:00`
                              : ""
                          }
                          onChange={(e) => {
                            const dateValue = e.target.value.split("T")[0];
                            handleChange("availableDate", dateValue);
                          }}
                        />
                      </InputGroup>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="mb-3">
                      <label
                        className="form-label fw-bold"
                        style={{ color: "black" }}
                      >
                        Until
                      </label>
                      <InputGroup>
                        <input
                          type="datetime-local"
                          className="form-control"
                          id="wd-available-until"
                          defaultValue="2024-05-20T23:59"
                        />
                      </InputGroup>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          <hr className="my-4" />

          <div className="d-flex justify-content-end gap-2">
            <Button variant="outline-secondary" onClick={handleCancel}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleSave}>
              Save
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
