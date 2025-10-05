import Link from "next/link";

export default function Labs() {
  return (
    <div id="wd-labs" className="page-content">
      <h1>Labs</h1>
      <div className="student-info">
        <div className="student-name">Nishit Chaudhary</div>
        <div className="student-nuid">
          NUID: 002565987 | Section: 04 | CRN: 18616 | Boston
        </div>
      </div>
      <ul>
        <li>
          <Link href="/Labs/Lab1" id="wd-lab1-link">
            Lab 1: HTML Examples
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab2" id="wd-lab2-link">
            Lab 2: CSS Basics
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab3" id="wd-lab3-link">
            Lab 3: JavaScript Fundamentals
          </Link>
        </li>
        <li>
          <Link href="/Dashboard" id="wd-kambaz-link">
            Kambaz
          </Link>
        </li>
        <li>
          <a
            href="https://github.com/nishit3/webdev-assignment-1-nishit3"
            id="wd-github"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </a>
        </li>
      </ul>
    </div>
  );
}
