"use client";
import React, { useState } from "react";
import { FormControl } from "react-bootstrap";

const HTTP_SERVER =
  process.env.NEXT_PUBLIC_HTTP_SERVER ||
  "https://kambaz-node-server-app-z7fi.onrender.com";

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const [module, setModule] = useState({
    id: 1,
    name: "Introduction to NodeJS",
    description: "Learn the basics of NodeJS",
    course: "CS5610",
  });
  const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${HTTP_SERVER}/lab5/module`;

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a
        id="wd-retrieve-assignments"
        className="btn btn-primary mb-2 me-2"
        href={`${ASSIGNMENT_API_URL}`}
      >
        Get Assignment
      </a>
      <a
        id="wd-retrieve-modules"
        className="btn btn-primary mb-2"
        href={`${MODULE_API_URL}`}
      >
        Get Module
      </a>
      <hr />
      <h4>Retrieving Properties</h4>
      <a
        id="wd-retrieve-assignment-title"
        className="btn btn-primary mb-2 me-2"
        href={`${ASSIGNMENT_API_URL}/title`}
      >
        Get Title
      </a>
      <a
        id="wd-retrieve-module-name"
        className="btn btn-primary mb-2"
        href={`${MODULE_API_URL}/name`}
      >
        Get Module Name
      </a>
      <hr />
      <h4>Modifying Properties</h4>
      <a
        id="wd-update-assignment-title"
        className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
      >
        Update Title
      </a>
      <FormControl
        className="w-75 mb-2"
        id="wd-assignment-title"
        defaultValue={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />
      <hr />
    </div>
  );
}
