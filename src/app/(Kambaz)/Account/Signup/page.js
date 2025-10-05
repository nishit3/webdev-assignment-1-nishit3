"use client";

import Link from "next/link";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

export default function Signup() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Body className="p-4">
              <h3 className="text-center mb-4" style={{ color: "black" }}>
                Signup
              </h3>
              <Form>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="username"
                    className="form-control wd-username"
                    style={{ padding: "12px" }}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    placeholder="password"
                    className="form-control wd-password"
                    style={{ padding: "12px" }}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    placeholder="verify password"
                    className="form-control wd-password-verify"
                    style={{ padding: "12px" }}
                  />
                </div>
                <Button
                  variant="primary"
                  className="w-100 mb-3"
                  style={{
                    padding: "12px",
                    backgroundColor: "#007bff",
                    borderColor: "#007bff",
                    fontWeight: "500",
                  }}
                  as={Link}
                  href="Profile"
                >
                  Signup
                </Button>
                <div className="text-center">
                  <Link
                    href="Signin"
                    style={{
                      color: "#007bff",
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    Signin
                  </Link>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
