"use client";
import { redirect } from "next/navigation";
import { useParams } from "next/navigation";

export default function CoursesPage() {
  const { cid } = useParams();
  redirect(`/Courses/${cid}/Home`);
}
