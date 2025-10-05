import CourseNavigation from "./Navigation";

export default async function CoursesLayout({ children, params }) {
  const { cid } = await params;
  return (
    <div id="wd-courses">
      <h2>Course {cid}</h2>
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
