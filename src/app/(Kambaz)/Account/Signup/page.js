"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import * as client from "../client";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";

export default function Signup() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    role: "STUDENT",
  });
  const [verifyPassword, setVerifyPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const signup = async () => {
    setError("");

    // Validation
    if (!user.username || !user.password || !user.firstName || !user.lastName || !user.email) {
      setError("All fields are required");
      return;
    }

    if (user.password !== verifyPassword) {
      setError("Passwords do not match");
      return;
    }

    if (user.password.length < 4) {
      setError("Password must be at least 4 characters");
      return;
    }

    setLoading(true);

    try {
      const newUser = await client.signup(user);
      dispatch(setCurrentUser(newUser));
      router.push("/Account/Profile");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed. Please try again.");
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      signup();
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Body className="p-4">
              <h3 className="text-center mb-4" style={{ color: "black" }}>
                Sign Up
              </h3>

              {error && <Alert variant="danger">{error}</Alert>}

              <Form>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Username"
                    className="form-control"
                    value={user.username}
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                    onKeyDown={handleKeyPress}
                    disabled={loading}
                    style={{ padding: "12px" }}
                  />
                </div>

                <Row>
                  <Col md={6}>
                    <div className="mb-3">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="form-control"
                        value={user.firstName}
                        onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                        onKeyDown={handleKeyPress}
                        disabled={loading}
                        style={{ padding: "12px" }}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="mb-3">
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="form-control"
                        value={user.lastName}
                        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                        onKeyDown={handleKeyPress}
                        disabled={loading}
                        style={{ padding: "12px" }}
                      />
                    </div>
                  </Col>
                </Row>

                <div className="mb-3">
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    onKeyDown={handleKeyPress}
                    disabled={loading}
                    style={{ padding: "12px" }}
                  />
                </div>

                <div className="mb-3">
                  <select
                    className="form-control"
                    value={user.role}
                    onChange={(e) => setUser({ ...user, role: e.target.value })}
                    disabled={loading}
                    style={{ padding: "12px" }}
                  >
                    <option value="STUDENT">Student</option>
                    <option value="FACULTY">Faculty</option>
                    <option value="ADMIN">Admin</option>
                  </select>
                </div>

                <div className="mb-3">
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    onKeyDown={handleKeyPress}
                    disabled={loading}
                    style={{ padding: "12px" }}
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="password"
                    placeholder="Verify Password"
                    className="form-control"
                    value={verifyPassword}
                    onChange={(e) => setVerifyPassword(e.target.value)}
                    onKeyDown={handleKeyPress}
                    disabled={loading}
                    style={{ padding: "12px" }}
                  />
                </div>

                <Button
                  onClick={signup}
                  variant="primary"
                  className="w-100 mb-3"
                  disabled={loading}
                  style={{
                    padding: "12px",
                    backgroundColor: "#007bff",
                    borderColor: "#007bff",
                    fontWeight: "500",
                  }}
                >
                  {loading ? "Creating Account..." : "Sign Up"}
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
                    Already have an account? Sign In
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
