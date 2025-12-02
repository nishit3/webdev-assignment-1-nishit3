"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import { Button, FormControl, Spinner, Alert } from "react-bootstrap";
import * as client from "../client";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const { currentUser } = useSelector((state) => state.accountReducer);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      setError("");
      const user = await client.profile();
      setProfile(user);
    } catch (error) {
      console.error("Error fetching profile:", error);
      setError("Failed to load profile. Please sign in again.");
      // Wait a bit before redirecting to show error
      setTimeout(() => {
        router.push("/Account/Signin");
      }, 2000);
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async () => {
    if (!profile._id) {
      setError("Cannot update profile: missing user ID");
      return;
    }

    try {
      setError("");
      setSuccess("");
      const updatedUser = await client.updateUser(profile);
      dispatch(setCurrentUser(profile));
      setSuccess("Profile updated successfully!");
      
      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(""), 3000);
    } catch (error) {
      console.error("Error updating profile:", error);
      setError(error.response?.data?.message || "Failed to update profile");
    }
  };

  const signout = async () => {
    try {
      await client.signout();
      dispatch(setCurrentUser(null));
      router.push("/Account/Signin");
    } catch (error) {
      console.error("Error signing out:", error);
      // Even if API fails, clear local state and redirect
      dispatch(setCurrentUser(null));
      router.push("/Account/Signin");
    }
  };

  useEffect(() => {
    if (!currentUser) {
      router.push("/Account/Signin");
    } else {
      fetchProfile();
    }
  }, [currentUser]);

  if (loading) {
    return (
      <div className="wd-profile-screen text-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p className="mt-2">Loading profile...</p>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="wd-profile-screen">
        <Alert variant="danger">
          Failed to load profile. Redirecting to sign in...
        </Alert>
      </div>
    );
  }

  return (
    <div className="wd-profile-screen">
      <h3>Profile</h3>
      
      {error && (
        <Alert variant="danger" dismissible onClose={() => setError("")}>
          {error}
        </Alert>
      )}
      
      {success && (
        <Alert variant="success" dismissible onClose={() => setSuccess("")}>
          {success}
        </Alert>
      )}

      <div>
        <FormControl
          id="wd-username"
          className="mb-2"
          value={profile.username || ""}
          onChange={(e) =>
            setProfile({ ...profile, username: e.target.value })
          }
          placeholder="Username"
        />
        <FormControl
          id="wd-password"
          className="mb-2"
          type="password"
          value={profile.password || ""}
          onChange={(e) =>
            setProfile({ ...profile, password: e.target.value })
          }
          placeholder="Password"
        />
        <FormControl
          id="wd-firstname"
          className="mb-2"
          value={profile.firstName || ""}
          onChange={(e) =>
            setProfile({ ...profile, firstName: e.target.value })
          }
          placeholder="First Name"
        />
        <FormControl
          id="wd-lastname"
          className="mb-2"
          value={profile.lastName || ""}
          onChange={(e) =>
            setProfile({ ...profile, lastName: e.target.value })
          }
          placeholder="Last Name"
        />
        <FormControl
          id="wd-dob"
          className="mb-2"
          type="date"
          value={profile.dob ? profile.dob.split('T')[0] : ""}
          onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
        />
        <FormControl
          id="wd-email"
          className="mb-2"
          value={profile.email || ""}
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          placeholder="Email"
        />
        <select
          className="form-control mb-2"
          id="wd-role"
          value={profile.role || "USER"}
          onChange={(e) => setProfile({ ...profile, role: e.target.value })}
        >
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </select>
        <Button onClick={updateProfile} className="w-100 mb-2" variant="primary">
          Update Profile
        </Button>
        <Button onClick={signout} className="w-100 mb-2" id="wd-signout-btn" variant="danger">
          Sign out
        </Button>
      </div>
    </div>
  );
}
