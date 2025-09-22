import { redirect } from "next/navigation";

export default async function CoursesPage({ params }) {
  const { cid } = await params;
  redirect(`/Courses/${cid}/Home`);
}
