"use client";

import { useState, useEffect } from "react";
import * as client from "../Account/client";
import { 
  Container, 
  Row, 
  Col, 
  Table, 
  Button, 
  Form, 
  Badge,
  Modal,
  Alert,
  Spinner
} from "react-bootstrap";
import { FaUserCircle, FaTrash, FaUserPlus } from "react-icons/fa";
import PeopleDetails from "./PeopleDetails";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Filters
  const [roleFilter, setRoleFilter] = useState("ALL");
  const [nameFilter, setNameFilter] = useState("");

  // Add user modal
  const [showAddModal, setShowAddModal] = useState(false);
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    role: "STUDENT",
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [users, roleFilter, nameFilter]);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const allUsers = await client.findAllUsers();
      setUsers(allUsers);
      setError("");
    } catch (err) {
      setError("Failed to fetch users");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...users];

    // Filter by role
    if (roleFilter !== "ALL") {
      filtered = filtered.filter((user) => user.role === roleFilter);
    }

    // Filter by name
    if (nameFilter) {
      const searchTerm = nameFilter.toLowerCase();
      filtered = filtered.filter(
        (user) =>
          user.firstName?.toLowerCase().includes(searchTerm) ||
          user.lastName?.toLowerCase().includes(searchTerm) ||
          user.username?.toLowerCase().includes(searchTerm)
      );
    }

    setFilteredUsers(filtered);
  };

  const handleDeleteUser = async (userId) => {
    if (!window.confirm("Are you sure you want to delete this user?")) {
      return;
    }

    try {
      // Optimistic update - remove from UI immediately
      setUsers(users.filter((u) => u._id !== userId));
      if (selectedUser?._id === userId) {
        setSelectedUser(null);
      }

      // Delete from database
      await client.deleteUser(userId);
    } catch (err) {
      setError("Failed to delete user");
      console.error(err);
      // Revert on error
      fetchUsers();
    }
  };

  const handleUpdateUser = async (userId, updates) => {
    try {
      // Optimistic update - update UI immediately
      setUsers(
        users.map((u) => (u._id === userId ? { ...u, ...updates } : u))
      );

      if (selectedUser?._id === userId) {
        setSelectedUser({ ...selectedUser, ...updates });
      }

      // Update in database
      await client.updateUser({ _id: userId, ...updates });

      // Refresh to get the latest data
      setTimeout(fetchUsers, 100);
    } catch (err) {
      setError("Failed to update user");
      console.error(err);
      // Revert on error
      fetchUsers();
    }
  };

  const handleAddUser = async () => {
    // Validation
    if (
      !newUser.username ||
      !newUser.password ||
      !newUser.firstName ||
      !newUser.lastName ||
      !newUser.email
    ) {
      alert("All fields are required");
      return;
    }

    try {
      const createdUser = await client.createUser(newUser);

      // Add to UI immediately
      setUsers([...users, createdUser]);

      // Reset form and close modal
      setNewUser({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        role: "STUDENT",
      });
      setShowAddModal(false);
      setError("");
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to add user"
      );
      console.error(err);
    }
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

  if (loading) {
    return (
      <Container className="mt-5 text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p className="mt-2">Loading users...</p>
      </Container>
    );
  }

  return (
    <Container fluid className="px-4 py-4">
      <Row className="mb-4">
        <Col>
          <h1>Users Management</h1>
        </Col>
        <Col className="text-end">
          <Button
            variant="primary"
            onClick={() => setShowAddModal(true)}
            className="d-flex align-items-center ms-auto"
          >
            <FaUserPlus className="me-2" />
            Add People
          </Button>
        </Col>
      </Row>

      {error && (
        <Alert variant="danger" dismissible onClose={() => setError("")}>
          {error}
        </Alert>
      )}

      {/* Filters */}
      <Row className="mb-4">
        <Col md={3}>
          <Form.Group>
            <Form.Label>Filter by Role</Form.Label>
            <Form.Select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
            >
              <option value="ALL">All Roles</option>
              <option value="STUDENT">Student</option>
              <option value="FACULTY">Faculty</option>
              <option value="ADMIN">Admin</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={9}>
          <Form.Group>
            <Form.Label>Filter by Name</Form.Label>
            <Form.Control
              type="text"
              value={nameFilter}
              onChange={(e) => setNameFilter(e.target.value)}
              placeholder="Search by name or username..."
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        {/* Users List */}
        <Col lg={8}>
          <div className="bg-white shadow rounded">
            <Table striped hover responsive>
              <thead className="table-light">
                <tr>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user._id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <FaUserCircle className="me-2 fs-4 text-secondary" />
                        <button
                          onClick={() => setSelectedUser(user)}
                          className="btn btn-link text-decoration-none p-0"
                          style={{ textAlign: "left" }}
                        >
                          {user.firstName} {user.lastName}
                        </button>
                      </div>
                    </td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                      <Badge bg={getRoleBadgeColor(user.role)}>
                        {user.role}
                      </Badge>
                    </td>
                    <td>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => handleDeleteUser(user._id)}
                      >
                        <FaTrash />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            {filteredUsers.length === 0 && (
              <div className="text-center py-4 text-muted">
                No users found
              </div>
            )}
          </div>
        </Col>

        {/* User Details Panel */}
        <Col lg={4}>
          {selectedUser ? (
            <PeopleDetails
              user={selectedUser}
              onUpdate={handleUpdateUser}
              onClose={() => setSelectedUser(null)}
            />
          ) : (
            <div className="bg-white shadow rounded p-4 text-center text-muted">
              <FaUserCircle className="fs-1 mb-3" />
              <p>Select a user to view details</p>
            </div>
          )}
        </Col>
      </Row>

      {/* Add User Modal */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={newUser.firstName}
                    onChange={(e) =>
                      setNewUser({ ...newUser, firstName: e.target.value })
                    }
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={newUser.lastName}
                    onChange={(e) =>
                      setNewUser({ ...newUser, lastName: e.target.value })
                    }
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={newUser.username}
                onChange={(e) =>
                  setNewUser({ ...newUser, username: e.target.value })
                }
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={newUser.email}
                onChange={(e) =>
                  setNewUser({ ...newUser, email: e.target.value })
                }
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={newUser.password}
                onChange={(e) =>
                  setNewUser({ ...newUser, password: e.target.value })
                }
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Role</Form.Label>
              <Form.Select
                value={newUser.role}
                onChange={(e) =>
                  setNewUser({ ...newUser, role: e.target.value })
                }
              >
                <option value="STUDENT">Student</option>
                <option value="FACULTY">Faculty</option>
                <option value="ADMIN">Admin</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddUser}>
            Add User
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
