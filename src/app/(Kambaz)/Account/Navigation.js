"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

const activeStyle = {
  textDecoration: "none",
  color: "black",
  fontSize: "16px",
  padding: "8px 0",
  borderLeft: "4px solid black",
  paddingLeft: "12px",
  position: "relative",
};

const inactiveStyle = {
  textDecoration: "none",
  color: "#dc3545",
  fontSize: "16px",
  padding: "8px 0",
};

export default function AccountNavigation() {
  const pathname = usePathname();
  const { currentUser } = useSelector((state) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];

  return (
    <div className="d-flex flex-column p-3">
      <Link
        href="Signin"
        style={pathname === "/Account/Signin" ? activeStyle : inactiveStyle}
      >
        Signin
      </Link>
      <Link
        href="Signup"
        style={pathname === "/Account/Signup" ? activeStyle : inactiveStyle}
      >
        Signup
      </Link>
      <Link
        href="Profile"
        style={pathname === "/Account/Profile" ? activeStyle : inactiveStyle}
      >
        Profile
      </Link>
    </div>
  );
}
