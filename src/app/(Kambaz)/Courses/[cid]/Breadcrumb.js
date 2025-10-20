"use client";
import React from "react";
import { usePathname } from "next/navigation";

export default function Breadcrumb({ course }) {
  const pathname = usePathname();
  return (
    <span>
      {course?.name} &gt; {pathname.split("/").pop()}
    </span>
  );
}
