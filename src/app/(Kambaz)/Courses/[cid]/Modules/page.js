"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import { FormControl } from "react-bootstrap";
import {
  addModule,
  editModule,
  updateModule,
  deleteModule,
  saveModule,
  cancelEdit,
} from "./reducer";
import { useSelector, useDispatch } from "react-redux";

export default function Modules() {
  const { cid } = useParams();
  const { modules } = useSelector((state) => state.modulesReducer);
  const [moduleName, setModuleName] = useState("");
  const dispatch = useDispatch();

  // Debug: log when modules change
  useEffect(() => {
    console.log("Modules state updated:", modules);
  }, [modules]);

  return (
    <div>
      <ModulesControls
        setModuleName={setModuleName}
        moduleName={moduleName}
        addModule={() => {
          dispatch(addModule({ name: moduleName, course: cid }));
          setModuleName("");
        }}
      />
      <br />
      <br />
      <br />
      <br />
      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .filter((module) => module.course === cid)
          .map((module) => (
            <li
              key={`module-${module.cid}`}
              className="wd-module list-group-item p-0 mb-5 fs-5 border-gray"
            >
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                {!module.editing && module.name}
                {module.editing && (
                  <FormControl
                    className="w-50 d-inline-block"
                    value={module.name}
                    onChange={(e) =>
                      dispatch(
                        updateModule({ ...module, name: e.target.value })
                      )
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        dispatch(saveModule(module.cid));
                      } else if (e.key === "Escape") {
                        dispatch(cancelEdit(module.cid));
                      }
                    }}
                    autoFocus
                  />
                )}

                <ModuleControlButtons
                  deleteModule={(moduleId) => dispatch(deleteModule(moduleId))}
                  editModule={(moduleId) => dispatch(editModule(moduleId))}
                  saveModule={(moduleId) => dispatch(saveModule(moduleId))}
                  cancelEdit={(moduleId) => dispatch(cancelEdit(moduleId))}
                  isEditing={module.editing}
                  moduleId={module.cid}
                />
              </div>
              {module.lessons && module.lessons.length > 0 && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson) => (
                    <li
                      key={`lesson-${lesson.lid}`}
                      className="wd-lesson list-group-item p-3 ps-1"
                    >
                      <BsGripVertical className="me-2 fs-3" />
                      {lesson.name}
                      <LessonControlButtons />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}
