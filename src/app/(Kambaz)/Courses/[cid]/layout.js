"use client";
import CourseNavigation from "./Navigation";
import { FaAlignJustify } from "react-icons/fa";
import Breadcrumb from "./Breadcrumb";
import { useParams, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

export default function CoursesLayout({ children }) {
  const { cid } = useParams();
  const router = useRouter();
  const { courses } = useSelector((state) => state.coursesReducer);
  const { enrollments } = useSelector((state) => state.enrollmentsReducer);
  const { currentUser } = useSelector((state) => state.accountReducer);
  const course = courses.find((course) => course.cid === cid);
  const [showCourseNavigation, setShowCourseNavigation] = useState(true);

  // Check if user is enrolled in this course
  const isEnrolled = enrollments.some(
    (enrollment) =>
      enrollment.userId === currentUser?.userId && enrollment.course === cid
  );

  const isFaculty = currentUser?.role === "FACULTY";

  // Protect route - redirect to dashboard if not enrolled and not faculty
  useEffect(() => {
    if (currentUser && !isEnrolled && !isFaculty) {
      router.push("/Dashboard");
    }
  }, [currentUser, isEnrolled, isFaculty, router]);

  // Show nothing while checking enrollment or redirecting
  if (!currentUser || (!isEnrolled && !isFaculty)) {
    return null;
  }

  const toggleCourseNavigation = () => {
    setShowCourseNavigation(!showCourseNavigation);
  };

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify
          className="me-4 fs-4 mb-1"
          onClick={toggleCourseNavigation}
        />
        <Breadcrumb course={course} />
      </h2>
      <hr />
      <div id="wd-kambaz">
        <div className="d-flex">
          <div>{showCourseNavigation && <CourseNavigation />}</div>
          <div className="flex-fill">{children}</div>
        </div>
      </div>
    </div>
  );
}
