import Link from "next/link";
import { Card, Col, Row, CardBody, CardTitle, CardText } from "react-bootstrap";

export default function Courses() {
  return (
    <div id="wd-courses" className="page-content">
      <h1 id="wd-courses-title">Course Catalog</h1>
      <hr />
      <h2 id="wd-courses-available">Published Courses (7)</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          <Col className="wd-dashboard-course" style={{ width: "auto" }}>
            <Card className="h-100">
              <Link
                href="/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <div
                  style={{
                    backgroundColor: "#4a90a4",
                    height: "120px",
                    position: "relative",
                    borderTopLeftRadius: "0.375rem",
                    borderTopRightRadius: "0.375rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="/images/reactjs.png"
                    alt="React JS"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "8px",
                      right: "8px",
                      color: "white",
                      fontSize: "18px",
                      zIndex: 10,
                      textShadow: "0 0 3px rgba(0,0,0,0.8)",
                    }}
                  >
                    ⋮
                  </div>
                </div>
                <CardBody className="p-3">
                  <CardTitle
                    className="wd-dashboard-course-title mb-1"
                    style={{ fontSize: "16px", fontWeight: "600" }}
                  >
                    CS4550 12631 Web Development...
                  </CardTitle>
                  <CardText
                    className="text-muted mb-1"
                    style={{ fontSize: "14px" }}
                  >
                    CS4550.12631.202410
                  </CardText>
                  <CardText className="text-muted" style={{ fontSize: "12px" }}>
                    202410_1 Fall 2023 Semester Full Term
                  </CardText>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "auto" }}>
            <Card className="h-100">
              <Link
                href="/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <div
                  style={{
                    backgroundColor: "#4a90a4",
                    height: "120px",
                    position: "relative",
                    borderTopLeftRadius: "0.375rem",
                    borderTopRightRadius: "0.375rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src="/images/nodejs.jpg"
                    alt="Node.js"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "8px",
                      right: "8px",
                      color: "white",
                      fontSize: "18px",
                      zIndex: 10,
                      textShadow: "0 0 3px rgba(0,0,0,0.8)",
                    }}
                  >
                    ⋮
                  </div>
                </div>
                <CardBody className="p-3">
                  <CardTitle
                    className="wd-dashboard-course-title mb-1"
                    style={{ fontSize: "16px", fontWeight: "600" }}
                  >
                    CS1555 Node.js Development
                  </CardTitle>
                  <CardText
                    className="text-muted mb-1"
                    style={{ fontSize: "14px" }}
                  >
                    CS1555.12345.202410
                  </CardText>
                  <CardText className="text-muted" style={{ fontSize: "12px" }}>
                    202410_1 Fall 2023 Semester Full Term
                  </CardText>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "auto" }}>
            <Card className="h-100">
              <Link
                href="/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <div
                  style={{
                    backgroundColor: "#4a90a4",
                    height: "120px",
                    position: "relative",
                    borderTopLeftRadius: "0.375rem",
                    borderTopRightRadius: "0.375rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src="/images/java.png"
                    alt="Java"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "8px",
                      right: "8px",
                      color: "white",
                      fontSize: "18px",
                      zIndex: 10,
                      textShadow: "0 0 3px rgba(0,0,0,0.8)",
                    }}
                  >
                    ⋮
                  </div>
                </div>
                <CardBody className="p-3">
                  <CardTitle
                    className="wd-dashboard-course-title mb-1"
                    style={{ fontSize: "16px", fontWeight: "600" }}
                  >
                    CS1390 Java Programming
                  </CardTitle>
                  <CardText
                    className="text-muted mb-1"
                    style={{ fontSize: "14px" }}
                  >
                    CS1390.54321.202410
                  </CardText>
                  <CardText className="text-muted" style={{ fontSize: "12px" }}>
                    202410_1 Fall 2023 Semester Full Term
                  </CardText>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "auto" }}>
            <Card className="h-100">
              <Link
                href="/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <div
                  style={{
                    backgroundColor: "#4a90a4",
                    height: "120px",
                    position: "relative",
                    borderTopLeftRadius: "0.375rem",
                    borderTopRightRadius: "0.375rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src="/images/javascript.png"
                    alt="JavaScript"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "8px",
                      right: "8px",
                      color: "white",
                      fontSize: "18px",
                      zIndex: 10,
                      textShadow: "0 0 3px rgba(0,0,0,0.8)",
                    }}
                  >
                    ⋮
                  </div>
                </div>
                <CardBody className="p-3">
                  <CardTitle
                    className="wd-dashboard-course-title mb-1"
                    style={{ fontSize: "16px", fontWeight: "600" }}
                  >
                    CS1277 JavaScript Fundamentals
                  </CardTitle>
                  <CardText
                    className="text-muted mb-1"
                    style={{ fontSize: "14px" }}
                  >
                    CS1277.98765.202410
                  </CardText>
                  <CardText className="text-muted" style={{ fontSize: "12px" }}>
                    202410_1 Fall 2023 Semester Full Term
                  </CardText>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "auto" }}>
            <Card className="h-100">
              <Link
                href="/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <div
                  style={{
                    backgroundColor: "#4a90a4",
                    height: "120px",
                    position: "relative",
                    borderTopLeftRadius: "0.375rem",
                    borderTopRightRadius: "0.375rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src="/images/mongodb.png"
                    alt="MongoDB"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "8px",
                      right: "8px",
                      color: "white",
                      fontSize: "18px",
                      zIndex: 10,
                      textShadow: "0 0 3px rgba(0,0,0,0.8)",
                    }}
                  >
                    ⋮
                  </div>
                </div>
                <CardBody className="p-3">
                  <CardTitle
                    className="wd-dashboard-course-title mb-1"
                    style={{ fontSize: "16px", fontWeight: "600" }}
                  >
                    CS1239 MongoDB Database
                  </CardTitle>
                  <CardText
                    className="text-muted mb-1"
                    style={{ fontSize: "14px" }}
                  >
                    CS1239.11111.202410
                  </CardText>
                  <CardText className="text-muted" style={{ fontSize: "12px" }}>
                    202410_1 Fall 2023 Semester Full Term
                  </CardText>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "auto" }}>
            <Card className="h-100">
              <Link
                href="/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <div
                  style={{
                    backgroundColor: "#4a90a4",
                    height: "120px",
                    position: "relative",
                    borderTopLeftRadius: "0.375rem",
                    borderTopRightRadius: "0.375rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src="/images/htmlcss.jpg"
                    alt="HTML CSS"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "8px",
                      right: "8px",
                      color: "white",
                      fontSize: "18px",
                      zIndex: 10,
                      textShadow: "0 0 3px rgba(0,0,0,0.8)",
                    }}
                  >
                    ⋮
                  </div>
                </div>
                <CardBody className="p-3">
                  <CardTitle
                    className="wd-dashboard-course-title mb-1"
                    style={{ fontSize: "16px", fontWeight: "600" }}
                  >
                    CS1299 HTML & CSS Basics
                  </CardTitle>
                  <CardText
                    className="text-muted mb-1"
                    style={{ fontSize: "14px" }}
                  >
                    CS1299.22222.202410
                  </CardText>
                  <CardText className="text-muted" style={{ fontSize: "12px" }}>
                    202410_1 Fall 2023 Semester Full Term
                  </CardText>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "auto" }}>
            <Card className="h-100">
              <Link
                href="/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <div
                  style={{
                    backgroundColor: "#4a90a4",
                    height: "120px",
                    position: "relative",
                    borderTopLeftRadius: "0.375rem",
                    borderTopRightRadius: "0.375rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src="/images/python.png"
                    alt="Python"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "8px",
                      right: "8px",
                      color: "white",
                      fontSize: "18px",
                      zIndex: 10,
                      textShadow: "0 0 3px rgba(0,0,0,0.8)",
                    }}
                  >
                    ⋮
                  </div>
                </div>
                <CardBody className="p-3">
                  <CardTitle
                    className="wd-dashboard-course-title mb-1"
                    style={{ fontSize: "16px", fontWeight: "600" }}
                  >
                    CS1235 Python Programming
                  </CardTitle>
                  <CardText
                    className="text-muted mb-1"
                    style={{ fontSize: "14px" }}
                  >
                    CS1235.33333.202410
                  </CardText>
                  <CardText className="text-muted" style={{ fontSize: "12px" }}>
                    202410_1 Fall 2023 Semester Full Term
                  </CardText>
                </CardBody>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
