"use client";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setCourses, addNewCourse, removeCourse, updateCourseInState } from "./reducer";
import { useState, useEffect } from "react";
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
import * as client from "./client";

export default function Courses() {
  const { courses } = useSelector((state) => state.coursesReducer);
  const { currentUser } = useSelector((state) => state.accountReducer);
  const dispatch = useDispatch();

  const [showAllCourses, setShowAllCourses] = useState(false);
  const [myCourseIds, setMyCourseIds] = useState([]);
  const [course, setCourse] = useState({
    name: "New Course",
    number: "CS0000",
    startDate: "2023-01-10",
    endDate: "2023-05-15",
    department: "CS",
    credits: 4,
    description: "New course description",
  });

  const fetchCourses = async () => {
    try {
      const myCourses = await client.findMyCourses();
      setMyCourseIds(myCourses.map(c => c._id));
      
      if (showAllCourses) {
        const allCourses = await client.fetchAllCourses();
        dispatch(setCourses(allCourses));
      } else {
        dispatch(setCourses(myCourses));
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      fetchCourses();
    }
  }, [currentUser, showAllCourses]);

  const handleAddCourse = async () => {
    try {
      const newCourse = await client.createCourse(course);
      dispatch(addNewCourse(newCourse));
      setMyCourseIds([...myCourseIds, newCourse._id]);
      setCourse({
        name: "New Course",
        number: "CS0000",
        startDate: "2023-01-10",
        endDate: "2023-05-15",
        department: "CS",
        credits: 4,
        description: "New course description",
      });
      fetchCourses();
    } catch (error) {
      console.error("Error creating course:", error);
    }
  };

  const handleUpdateCourse = async () => {
    try {
      await client.updateCourse(course);
      dispatch(updateCourseInState(course));
      fetchCourses();
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  const handleDeleteCourse = async (courseId) => {
    try {
      await client.deleteCourse(courseId);
      dispatch(removeCourse(courseId));
      setMyCourseIds(myCourseIds.filter(id => id !== courseId));
      fetchCourses();
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  const handleEnroll = async (courseId) => {
    try {
      await client.enrollInCourse(currentUser._id, courseId);
      setMyCourseIds([...myCourseIds, courseId]);
      fetchCourses();
    } catch (error) {
      console.error("Error enrolling:", error);
    }
  };

  const handleUnenroll = async (courseId) => {
    try {
      await client.unenrollFromCourse(currentUser._id, courseId);
      setMyCourseIds(myCourseIds.filter(id => id !== courseId));
      fetchCourses();
    } catch (error) {
      console.error("Error unenrolling:", error);
    }
  };

  if (!currentUser) {
    return <div>Please sign in to view courses.</div>;
  }

  const isFaculty = currentUser.role === "FACULTY" || currentUser.role === "ADMIN";

  const isEnrolled = (courseId) => {
    return myCourseIds.includes(courseId);
  };

  return (
    <div id="wd-courses">
      <h1 id="wd-courses-title">Courses</h1> <hr />
      <div className="d-flex justify-content-end mb-3">
        <Button
          variant="primary"
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          {showAllCourses ? "My Courses" : "All Courses"}
        </Button>
      </div>
      {isFaculty && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={handleAddCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={handleUpdateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          <FormControl
            value={course.name}
            className="mb-2"
            placeholder="Course Name"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <FormControl
            value={course.description}
            as="textarea"
            rows={3}
            placeholder="Course Description"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />
        </>
      )}
      <h2 id="wd-courses-published">
        {showAllCourses ? "All Courses" : "My Courses"} ({courses.length})
      </h2>
      <hr />
      <div id="wd-courses-list">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course) => {
            const enrolled = isEnrolled(course._id);
            return (
              <Col
                key={course._id}
                className="wd-course"
                style={{ width: "300px" }}
              >
                <Card>
                  <Link
                    href={`/Courses/${course._id}/Home`}
                    className="wd-course-link text-decoration-none text-dark"
                    onClick={(e) => {
                      if (!enrolled && !isFaculty) {
                        e.preventDefault();
                        alert("Please enroll in this course first");
                      }
                    }}
                  >
                    <CardImg
                      src={`/images/${course.imageName || 'reactjs.png'}`}
                      variant="top"
                      width="100%"
                      height={160}
                      alt={course.name}
                    />
                    <CardBody className="card-body">
                      <CardTitle className="wd-course-title text-nowrap overflow-hidden">
                        {course.name}
                      </CardTitle>
                      <CardText
                        className="wd-course-description overflow-hidden"
                        style={{ height: "100px" }}
                      >
                        {course.description}
                      </CardText>
                      <Button variant="primary"> Go </Button>

                      {!isFaculty && showAllCourses && (
                        <>
                          {enrolled ? (
                            <Button
                              variant="danger"
                              className="float-end"
                              onClick={(e) => {
                                e.preventDefault();
                                handleUnenroll(course._id);
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
                                handleEnroll(course._id);
                              }}
                            >
                              Enroll
                            </Button>
                          )}
                        </>
                      )}

                      {isFaculty && (
                        <>
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              handleDeleteCourse(course._id);
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
                            id="wd-edit-course-click"
                          >
                            Edit
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
