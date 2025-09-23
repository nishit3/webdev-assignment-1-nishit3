import Link from "next/link";

export default async function Assignments({ params }) {
  const { cid } = await params;
  return (
    <div id="wd-assignments" className="page-content">
      <input placeholder="Search for Assignments" id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link
            href={`/Courses/${cid}/Assignments/123`}
            className="wd-assignment-link"
          >
            A1 - ENV + HTML
          </Link>
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href={`/Courses/${cid}/Assignments/124`}
            className="wd-assignment-link"
          >
            A2 - CSS + BOOTSTRAP
          </Link>
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href={`/Courses/${cid}/Assignments/125`}
            className="wd-assignment-link"
          >
            A3 - JAVASCRIPT + REACT
          </Link>
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href={`/Courses/${cid}/Assignments/126`}
            className="wd-assignment-link"
          >
            A4 - STATE + REDUX
          </Link>
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href={`/Courses/${cid}/Assignments/127`}
            className="wd-assignment-link"
          >
            A5 - NODE + SESSION
          </Link>
        </li>
      </ul>
      <h3>
        QUIZZES 10% of Total <button>+</button>
      </h3>
      <ul>
        <li className="wd-assignment-list-item">Q1 - HTML</li>
        <li className="wd-assignment-list-item">Q2 - CSS</li>
        <li className="wd-assignment-list-item">Q3 - JavaScript</li>
      </ul>
      <h3>
        EXAMS 25% of Total <button>+</button>
      </h3>
      <ul>
        <li className="wd-assignment-list-item">Midterm Exam</li>
        <li className="wd-assignment-list-item">Final Exam</li>
      </ul>
      <h3>
        PROJECT 25% of Total <button>+</button>
      </h3>
      <ul>
        <li className="wd-assignment-list-item">Final Project</li>
      </ul>
    </div>
  );
}
