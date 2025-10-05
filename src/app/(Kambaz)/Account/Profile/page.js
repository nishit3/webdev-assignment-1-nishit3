"use client";

import Link from "next/link";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

export default function Profile() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Body className="p-4">
              <h3 className="text-center mb-4" style={{ color: "black" }}>
                Profile
              </h3>
              <Form>
                <div className="mb-3">
                  <input
                    type="text"
                    defaultValue="alice"
                    placeholder="username"
                    className="form-control wd-username"
                    style={{ padding: "12px" }}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    defaultValue="123"
                    placeholder="password"
                    className="form-control wd-password"
                    style={{ padding: "12px" }}
                  />
                </div>
                <Row>
                  <Col md={6}>
                    <div className="mb-3">
                      <input
                        type="text"
                        defaultValue="Alice"
                        placeholder="First Name"
                        className="form-control"
                        id="wd-firstname"
                        style={{ padding: "12px" }}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="mb-3">
                      <input
                        type="text"
                        defaultValue="Wonderland"
                        placeholder="Last Name"
                        className="form-control"
                        id="wd-lastname"
                        style={{ padding: "12px" }}
                      />
                    </div>
                  </Col>
                </Row>
                <div className="mb-3">
                  <input
                    type="date"
                    defaultValue="2000-01-01"
                    className="form-control"
                    id="wd-dob"
                    style={{ padding: "12px" }}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    defaultValue="alice@wonderland.com"
                    placeholder="Email"
                    className="form-control"
                    id="wd-email"
                    style={{ padding: "12px" }}
                  />
                </div>
                <div className="mb-4">
                  <select
                    defaultValue="User"
                    className="form-select"
                    id="wd-role"
                    style={{ padding: "12px" }}
                  >
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                    <option value="Faculty">Faculty</option>
                    <option value="Student">Student</option>
                  </select>
                </div>
                <Button
                  variant="danger"
                  className="w-100"
                  style={{
                    padding: "12px",
                    backgroundColor: "#dc3545",
                    borderColor: "#dc3545",
                    fontWeight: "500",
                  }}
                  as={Link}
                  href="Signin"
                >
                  Signout
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
