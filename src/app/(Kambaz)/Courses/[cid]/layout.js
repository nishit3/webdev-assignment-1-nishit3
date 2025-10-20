"use client";
import CourseNavigation from "./Navigation";
import { courses } from "../../Database";
import { FaAlignJustify } from "react-icons/fa";
import Breadcrumb from "./Breadcrumb";
import { useParams } from "next/navigation";

export default function CoursesLayout({ children }) {
  const { cid } = useParams();
  const course = courses.find((course) => course.cid === cid);
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        <Breadcrumb course={course} />
      </h2>
      <hr />
      <div id="wd-kambaz">
        <div className="d-flex">
          <div>
            <CourseNavigation />
          </div>
          <div className="flex-fill">{children}</div>
        </div>
      </div>
    </div>
  );
}
