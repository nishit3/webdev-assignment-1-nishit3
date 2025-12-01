"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import * as client from "../client";
import { FormControl, Button, Alert } from "react-bootstrap";

export default function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const signin = async () => {
    setError("");
    setLoading(true);
    
    try {
      const user = await client.signin(credentials);
      
      if (!user) {
        setError("Invalid credentials");
        setLoading(false);
        return;
      }
      
      dispatch(setCurrentUser(user));
      router.push("/Dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials. Please try again.");
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      signin();
    }
  };

  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      
      {error && <Alert variant="danger">{error}</Alert>}
      
      <FormControl
        value={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
        className="mb-2"
        placeholder="username"
        id="wd-username"
        onKeyDown={handleKeyPress}
        disabled={loading}
      />
      
      <FormControl
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
        className="mb-2"
        placeholder="password"
        type="password"
        id="wd-password"
        onKeyDown={handleKeyPress}
        disabled={loading}
      />
      
      <Button 
        onClick={signin} 
        id="wd-signin-btn" 
        className="w-100 mb-2"
        disabled={loading}
      >
        {loading ? "Signing in..." : "Sign in"}
      </Button>
      
      <Link id="wd-signup-link" href="/Account/Signup">
        Sign up
      </Link>
    </div>
  );
}
