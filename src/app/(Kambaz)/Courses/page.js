"use client";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/reducer";
import { enrollCourse, unenrollCourse } from "../Dashboard/reducer";
import { useState } from "react";
import { FormControl } from "react-bootstrap";
import {
  Card,
  Col,
  Row,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
} from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function Dashboard() {
  const { courses } = useSelector((state) => state.coursesReducer);
  const { enrollments } = useSelector((state) => state.enrollmentsReducer);
  const { currentUser } = useSelector((state) => state.accountReducer);
  const dispatch = useDispatch();

  const [showAllCourses, setShowAllCourses] = useState(false);
  const [course, setCourse] = useState({
    cid: "0",
    imageName: "NEU.png",
    name: "Introduction to Co-op",
    number: "RS4550",
    startDate: "2023-01-10",
    endDate: "2023-05-15",
    department: "D123",
    credits: 4,
    description: "Introduction to Co-op for Northeastern University students.",
  });

  if (!currentUser) {
    return <div>Please sign in to view your dashboard.</div>;
  }

  const isFaculty = currentUser.role === "FACULTY";

  // Check if user is enrolled in a course
  const isEnrolled = (courseId) => {
    return enrollments.some(
      (enrollment) =>
        enrollment.userId === currentUser.userId &&
        enrollment.course === courseId
    );
  };

  // Handle enroll
  const handleEnroll = (courseId) => {
    dispatch(enrollCourse({ userId: currentUser.userId, course: courseId }));
  };

  // Handle unenroll
  const handleUnenroll = (courseId) => {
    dispatch(unenrollCourse({ userId: currentUser.userId, course: courseId }));
  };

  // Filter courses based on showAllCourses flag
  const displayedCourses = showAllCourses
    ? courses
    : courses.filter((course) => isEnrolled(course.cid));

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Courses</h1> <hr />
      {/* Enrollments Button - Top Right */}
      <div className="d-flex justify-content-end mb-3">
        <Button
          variant="primary"
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          {showAllCourses ? "My Courses" : "Enrollments"}
        </Button>
      </div>
      {/* Faculty-only course management section */}
      {isFaculty && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={() => dispatch(addNewCourse(course))}
            >
              {" "}
              Add{" "}
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={() => dispatch(updateCourse(course))}
              id="wd-update-course-click"
            >
              Update{" "}
            </button>
          </h5>
          <br />
          <FormControl
            value={course.name}
            className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <FormControl
            value={course.description}
            rows={3}
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />
        </>
      )}
      <h2 id="wd-dashboard-published">
        {showAllCourses ? "All Courses" : "Published Courses"} (
        {displayedCourses.length})
      </h2>{" "}
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {displayedCourses.map((course, index) => {
            const enrolled = isEnrolled(course.cid);
            return (
              <Col
                key={index}
                className="wd-dashboard-course"
                style={{ width: "300px" }}
              >
                <Card>
                  <Link
                    href={`/Courses/${course.cid}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                    onClick={(e) => {
                      // Protect route - only allow navigation if enrolled
                      if (!enrolled && !isFaculty) {
                        e.preventDefault();
                      }
                    }}
                  >
                    <CardImg
                      src={`/images/${course.imageName}`}
                      variant="top"
                      width="100%"
                      height={160}
                    />
                    <CardBody className="card-body">
                      <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                        {course.name}{" "}
                      </CardTitle>
                      <CardText
                        className="wd-dashboard-course-description overflow-hidden"
                        style={{ height: "100px" }}
                      >
                        {course.description}{" "}
                      </CardText>
                      <Button variant="primary"> Go </Button>

                      {/* Enroll/Unenroll buttons for non-faculty users when showing all courses */}
                      {!isFaculty && showAllCourses && (
                        <>
                          {enrolled ? (
                            <Button
                              variant="danger"
                              className="float-end"
                              onClick={(e) => {
                                e.preventDefault();
                                handleUnenroll(course.cid);
                              }}
                            >
                              Unenroll
                            </Button>
                          ) : (
                            <Button
                              variant="success"
                              className="float-end"
                              onClick={(e) => {
                                e.preventDefault();
                                handleEnroll(course.cid);
                              }}
                            >
                              Enroll
                            </Button>
                          )}
                        </>
                      )}

                      {/* Faculty-only buttons */}
                      {isFaculty && (
                        <>
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              dispatch(deleteCourse(course.cid));
                            }}
                            className="btn btn-danger float-end"
                            id="wd-delete-course-click"
                          >
                            Delete
                          </button>
                          <button
                            className="btn btn-warning float-end me-2"
                            onClick={(e) => {
                              e.preventDefault();
                              setCourse(course);
                            }}
                            id="wd-update-course-click"
                          >
                            Edit{" "}
                          </button>
                        </>
                      )}
                    </CardBody>
                  </Link>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
