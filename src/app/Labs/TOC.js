"use client";
import Link from "next/link";
import { Nav, NavItem, NavLink } from "react-bootstrap";
import { usePathname } from "next/navigation";

export default function TOC() {
  const pathname = usePathname();
  return (
    <Nav variant="pills">
      <NavItem>
        <NavLink
          href="/Labs"
          as={Link}
          className={`nav-link ${pathname.endsWith("Labs") ? "active" : ""}`}
        >
          Labs
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          href="/Labs/Lab1"
          as={Link}
          className={`nav-link ${pathname.endsWith("Lab1") ? "active" : ""}`}
        >
          Lab 1
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          href="/Labs/Lab2"
          as={Link}
          className={`nav-link ${pathname.endsWith("Lab2") ? "active" : ""}`}
        >
          Lab 2
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          href="/Labs/Lab3"
          as={Link}
          className={`nav-link ${pathname.endsWith("Lab3") ? "active" : ""}`}
        >
          Lab 3
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          href="/Labs/Lab4"
          as={Link}
          className={`nav-link ${pathname.endsWith("Lab4") ? "active" : ""}`}
        >
          Lab 4
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          href="/Labs/Lab5"
          as={Link}
          className={`nav-link ${pathname.endsWith("Lab5") ? "active" : ""}`}
        >
          Lab 5
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          href="/Dashboard"
          as={Link}
          className={`nav-link ${
            pathname.endsWith("Dashboard") ? "active" : ""
          }`}
        >
          Kambaz
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="https://github.com/nishit3/assignment1-webdev-nishit3/tree/a5" target="_blank">
          React GitHub (a5)
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="https://github.com/nishit3/kambaz-node-server-app" target="_blank">
          Server GitHub
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="https://kambaz-node-server-app-z7fi.onrender.com" target="_blank">
          Server Render
        </NavLink>
      </NavItem>
    </Nav>
  );
}
