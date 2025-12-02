"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import { Button, FormControl, Spinner, Alert } from "react-bootstrap";
import * as client from "../client";

export default function Profile() {
  const { currentUser } = useSelector((state) => state.accountReducer);
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    console.log("Profile page - currentUser from Redux:", currentUser);
    
    // If no currentUser in Redux, redirect to signin
    if (!currentUser) {
      console.log("No currentUser, redirecting to signin");
      router.push("/Account/Signin");
      return;
    }
    
    // Use currentUser from Redux as the profile
    console.log("Setting profile from currentUser:", currentUser);
    setProfile(currentUser);
  }, [currentUser, router]);

  const updateProfile = async () => {
    if (!profile || !profile._id) {
      setError("Cannot update profile: missing user ID");
      return;
    }

    try {
      setError("");
      setSuccess("");
      console.log("Updating profile:", profile);
      
      const updatedUser = await client.updateUser(profile);
      console.log("Update response:", updatedUser);
      
      // Update both local state and Redux
      setProfile(profile);
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

  // Show loading while checking currentUser
  if (!currentUser && !profile) {
    return (
      <div className="wd-profile-screen text-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p className="mt-2">Loading profile...</p>
      </div>
    );
  }

  // If no profile data, show error
  if (!profile) {
    return (
      <div className="wd-profile-screen">
        <Alert variant="warning">
          No profile data available. Please sign in.
        </Alert>
        <Button variant="primary" onClick={() => router.push("/Account/Signin")}>
          Go to Sign In
        </Button>
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
