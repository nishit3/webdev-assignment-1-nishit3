"use client";
import * as client from "./client";
import { useEffect, useState } from "react";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import { Spinner } from "react-bootstrap";

export default function Session({ children }: { children: any }) {
  const [pending, setPending] = useState(true);
  const dispatch = useDispatch();
  
  const fetchProfile = async () => {
    try {
      const currentUser = await client.profile();
      dispatch(setCurrentUser(currentUser));
    } catch (err: any) {
      console.error(err);
      // Set to null if no session found
      dispatch(setCurrentUser(null));
    }
    setPending(false);
  };
  
  useEffect(() => {
    fetchProfile();
  }, []);
  
  // Show loading spinner while checking session
  if (pending) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <p className="mt-2">Loading session...</p>
        </div>
      </div>
    );
  }
  
  return children;
}
