"use client";

import { useState, useEffect } from "react";
import { Card, Form, Button, Badge, Row, Col } from "react-bootstrap";
import { FaUserCircle, FaTimes, FaEdit, FaSave } from "react-icons/fa";

export default function PeopleDetails({ user, onUpdate, onClose }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    role: "",
  });

  useEffect(() => {
    if (user) {
      setEditedUser({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        username: user.username || "",
        role: user.role || "",
      });
    }
  }, [user]);

  const handleSave = () => {
    onUpdate(user._id, editedUser);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedUser({
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      email: user.email || "",
      username: user.username || "",
      role: user.role || "",
    });
    setIsEditing(false);
  };

  const getRoleBadgeColor = (role) => {
    switch (role) {
      case "ADMIN":
        return "danger";
      case "FACULTY":
        return "primary";
      case "STUDENT":
        return "success";
      default:
        return "secondary";
    }
  };

  if (!user) {
    return null;
  }

  return (
    <Card className="shadow">
      <Card.Header className="bg-primary text-white d-flex justify-content-between align-items-center">
        <h5 className="mb-0">User Details</h5>
        <Button
          variant="link"
          className="text-white p-0"
          onClick={onClose}
        >
          <FaTimes size={20} />
        </Button>
      </Card.Header>
      <Card.Body>
        {isEditing ? (
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                value={editedUser.firstName}
                onChange={(e) =>
                  setEditedUser({ ...editedUser, firstName: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                value={editedUser.lastName}
                onChange={(e) =>
                  setEditedUser({ ...editedUser, lastName: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={editedUser.username}
                onChange={(e) =>
                  setEditedUser({ ...editedUser, username: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={editedUser.email}
                onChange={(e) =>
                  setEditedUser({ ...editedUser, email: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Role</Form.Label>
              <Form.Select
                value={editedUser.role}
                onChange={(e) =>
                  setEditedUser({ ...editedUser, role: e.target.value })
                }
              >
                <option value="STUDENT">Student</option>
                <option value="FACULTY">Faculty</option>
                <option value="ADMIN">Admin</option>
              </Form.Select>
            </Form.Group>

            <Row className="mt-4">
              <Col>
                <Button
                  variant="success"
                  onClick={handleSave}
                  className="w-100"
                >
                  <FaSave className="me-2" />
                  Save
                </Button>
              </Col>
              <Col>
                <Button
                  variant="secondary"
                  onClick={handleCancel}
                  className="w-100"
                >
                  Cancel
                </Button>
              </Col>
            </Row>
          </Form>
        ) : (
          <>
            <div className="text-center mb-4">
              <FaUserCircle className="text-secondary" size={80} />
            </div>

            <div className="mb-3">
              <strong className="text-muted d-block mb-1">Name</strong>
              <p className="mb-0 fs-5">
                {user.firstName} {user.lastName}
              </p>
            </div>

            <div className="mb-3">
              <strong className="text-muted d-block mb-1">Username</strong>
              <p className="mb-0">{user.username}</p>
            </div>

            <div className="mb-3">
              <strong className="text-muted d-block mb-1">Email</strong>
              <p className="mb-0">{user.email}</p>
            </div>

            <div className="mb-3">
              <strong className="text-muted d-block mb-1">Role</strong>
              <div>
                <Badge bg={getRoleBadgeColor(user.role)} className="fs-6">
                  {user.role}
                </Badge>
              </div>
            </div>

            {user.createdAt && (
              <div className="mb-3">
                <strong className="text-muted d-block mb-1">Member Since</strong>
                <p className="mb-0">
                  {new Date(user.createdAt).toLocaleDateString()}
                </p>
              </div>
            )}

            <Button
              variant="primary"
              onClick={() => setIsEditing(true)}
              className="w-100 mt-3"
            >
              <FaEdit className="me-2" />
              Edit User
            </Button>
          </>
        )}
      </Card.Body>
    </Card>
  );
}
