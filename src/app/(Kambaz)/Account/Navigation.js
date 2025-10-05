"use client";

import Link from "next/link";

export default function AccountNavigation() {
  return (
    <div className="d-flex flex-column p-3">
      <Link
        href="Signin"
        style={{
          textDecoration: "none",
          color: "black",
          fontSize: "16px",
          padding: "8px 0",
          borderLeft: "4px solid black",
          paddingLeft: "12px",
          position: "relative",
        }}
      >
        Signin
      </Link>
      <Link
        href="Signup"
        style={{
          textDecoration: "none",
          color: "#dc3545",
          fontSize: "16px",
          padding: "8px 0",
        }}
      >
        Signup
      </Link>
      <Link
        href="Profile"
        style={{
          textDecoration: "none",
          color: "#dc3545",
          fontSize: "16px",
          padding: "8px 0",
        }}
      >
        Profile
      </Link>
    </div>
  );
}
