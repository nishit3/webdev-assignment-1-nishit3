import Link from "next/link";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <img
              src="/images/reactjs.png"
              width={200}
              height={150}
              alt="React JS Course"
            />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/2345" className="wd-dashboard-course-link">
            <img
              src="/images/nodejs.jpg"
              width={200}
              height={150}
              alt="Node.js Course"
            />
            <div>
              <h5> CS2345 Node.js </h5>
              <p className="wd-dashboard-course-title">
                Backend Development with Node.js
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/3456" className="wd-dashboard-course-link">
            <img
              src="/images/mongodb.png"
              width={200}
              height={150}
              alt="MongoDB Course"
            />
            <div>
              <h5> CS3456 MongoDB </h5>
              <p className="wd-dashboard-course-title">
                Database Management with MongoDB
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/4567" className="wd-dashboard-course-link">
            <img
              src="/images/python.png"
              width={200}
              height={150}
              alt="Python Course"
            />
            <div>
              <h5> CS4567 Python </h5>
              <p className="wd-dashboard-course-title">
                Data Science with Python
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/5678" className="wd-dashboard-course-link">
            <img
              src="/images/java.png"
              width={200}
              height={150}
              alt="Java Course"
            />
            <div>
              <h5> CS5678 Java </h5>
              <p className="wd-dashboard-course-title">
                Object-Oriented Programming
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/6789" className="wd-dashboard-course-link">
            <img
              src="/images/htmlcss.jpg"
              width={200}
              height={150}
              alt="HTML/CSS Course"
            />
            <div>
              <h5> CS6789 HTML/CSS </h5>
              <p className="wd-dashboard-course-title">
                Web Design Fundamentals
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/7890" className="wd-dashboard-course-link">
            <img
              src="/images/javascript.png"
              width={200}
              height={150}
              alt="JavaScript Course"
            />
            <div>
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
