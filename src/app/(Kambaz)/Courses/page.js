import Link from "next/link";

export default function Courses() {
  return (
    <div id="wd-courses" className="page-content">
      <h1 id="wd-courses-title">Course Catalog</h1>
      <hr />
      <h2 id="wd-courses-available">Published Courses (7)</h2>
      <hr />
      <div id="wd-courses-list" className="dashboard-courses">
        <div className="wd-dashboard-course course-card">
          <Link href="/Courses/1234/Home" className="wd-dashboard-course-link">
            <img
              src="/images/reactjs.png"
              alt="React JS Course"
              className="course-image"
            />
            <div className="course-content">
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course course-card">
          <Link href="/Courses/2345/Home" className="wd-dashboard-course-link">
            <img
              src="/images/nodejs.jpg"
              alt="Node.js Course"
              className="course-image"
            />
            <div className="course-content">
              <h5> CS2345 Node.js </h5>
              <p className="wd-dashboard-course-title">
                Backend Development with Node.js
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course course-card">
          <Link href="/Courses/3456/Home" className="wd-dashboard-course-link">
            <img
              src="/images/mongodb.png"
              alt="MongoDB Course"
              className="course-image"
            />
            <div className="course-content">
              <h5> CS3456 MongoDB </h5>
              <p className="wd-dashboard-course-title">
                Database Management with MongoDB
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course course-card">
          <Link href="/Courses/4567/Home" className="wd-dashboard-course-link">
            <img
              src="/images/python.png"
              alt="Python Course"
              className="course-image"
            />
            <div className="course-content">
              <h5> CS4567 Python </h5>
              <p className="wd-dashboard-course-title">
                Data Science with Python
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course course-card">
          <Link href="/Courses/5678/Home" className="wd-dashboard-course-link">
            <img
              src="/images/java.png"
              alt="Java Course"
              className="course-image"
            />
            <div className="course-content">
              <h5> CS5678 Java </h5>
              <p className="wd-dashboard-course-title">
                Object-Oriented Programming
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course course-card">
          <Link href="/Courses/6789/Home" className="wd-dashboard-course-link">
            <img
              src="/images/htmlcss.jpg"
              alt="HTML/CSS Course"
              className="course-image"
            />
            <div className="course-content">
              <h5> CS6789 HTML/CSS </h5>
              <p className="wd-dashboard-course-title">
                Web Design Fundamentals
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course course-card">
          <Link href="/Courses/7890/Home" className="wd-dashboard-course-link">
            <img
              src="/images/javascript.png"
              alt="JavaScript Course"
              className="course-image"
            />
            <div className="course-content">
              <h5> CS7890 JavaScript </h5>
              <p className="wd-dashboard-course-title">
                Modern JavaScript Development
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
