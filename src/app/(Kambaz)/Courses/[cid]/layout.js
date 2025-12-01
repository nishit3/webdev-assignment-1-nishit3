"use client";
import CourseNavigation from "./Navigation";
import { FaAlignJustify } from "react-icons/fa";
import Breadcrumb from "./Breadcrumb";
import { useParams, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import * as client from "../client";

export default function CoursesLayout({ children }) {
  const { cid } = useParams();
  const router = useRouter();
  const { courses } = useSelector((state) => state.coursesReducer);
  const { currentUser } = useSelector((state) => state.accountReducer);
  const [showCourseNavigation, setShowCourseNavigation] = useState(true);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [loading, setLoading] = useState(true);

  const course = courses.find((c) => c._id === cid);

  useEffect(() => {
    const checkEnrollment = async () => {
      if (!currentUser) {
        router.push("/Account/Signin");
        return;
      }

      const isFaculty = currentUser.role === "FACULTY" || currentUser.role === "ADMIN";
      
      if (isFaculty) {
        setIsEnrolled(true);
        setLoading(false);
        return;
      }

      try {
        const myCourses = await client.findMyCourses();
        const enrolled = myCourses.some((c) => c._id === cid);
        
        if (!enrolled) {
          router.push("/Dashboard");
          return;
        }
        
        setIsEnrolled(enrolled);
        setLoading(false);
      } catch (error) {
        console.error("Error checking enrollment:", error);
        router.push("/Dashboard");
      }
    };

    checkEnrollment();
  }, [cid, currentUser]);

  const toggleCourseNavigation = () => {
    setShowCourseNavigation(!showCourseNavigation);
  };

  if (loading) {
    return <div style={{padding: '20px'}}>Loading course...</div>;
  }

  if (!isEnrolled) {
    return null;
  }

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
