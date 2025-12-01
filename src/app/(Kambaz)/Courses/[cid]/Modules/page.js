"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import { FormControl } from "react-bootstrap";
import {
  setModules,
  addModule,
  editModule,
  updateModuleState,
  removeModule,
  cancelEdit,
} from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as client from "../../client";

export default function Modules() {
  const { cid } = useParams();
  const { modules } = useSelector((state) => state.modulesReducer);
  const [moduleName, setModuleName] = useState("");
  const [isClient, setIsClient] = useState(false);
  const dispatch = useDispatch();

  // Fetch modules from API when component mounts
  const fetchModules = async () => {
    try {
      const fetchedModules = await client.findModulesForCourse(cid);
      dispatch(setModules(fetchedModules));
    } catch (error) {
      console.error("Error fetching modules:", error);
    }
  };

  useEffect(() => {
    setIsClient(true);
    fetchModules();
  }, [cid]);

  const handleAddModule = async () => {
    try {
      const newModule = await client.createModuleForCourse(cid, {
        name: moduleName,
        description: "",
      });
      dispatch(addModule(newModule));
      setModuleName("");
    } catch (error) {
      console.error("Error creating module:", error);
    }
  };

  const handleDeleteModule = async (moduleId) => {
    try {
      await client.deleteModule(cid, moduleId);
      dispatch(removeModule(moduleId));
    } catch (error) {
      console.error("Error deleting module:", error);
    }
  };

  const handleSaveModule = async (module) => {
    try {
      const updatedModule = await client.updateModule(cid, module);
      dispatch(updateModuleState({ ...updatedModule, editing: false }));
    } catch (error) {
      console.error("Error updating module:", error);
    }
  };

  if (!isClient) {
    return <div>Loading modules...</div>;
  }

  return (
    <div suppressHydrationWarning>
      <ModulesControls
        setModuleName={setModuleName}
        moduleName={moduleName}
        addModule={handleAddModule}
      />
      <br />
      <br />
      <br />
      <br />
      <ul id="wd-modules" className="list-group rounded-0">
        {modules.map((module) => (
          <li
            key={`module-${module._id}`}
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
                      updateModuleState({ ...module, name: e.target.value })
                    )
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSaveModule(module);
                    } else if (e.key === "Escape") {
                      dispatch(cancelEdit(module._id));
                    }
                  }}
                  autoFocus
                />
              )}

              <ModuleControlButtons
                deleteModule={() => handleDeleteModule(module._id)}
                editModule={() => dispatch(editModule(module._id))}
                saveModule={() => handleSaveModule(module)}
                cancelEdit={() => dispatch(cancelEdit(module._id))}
                isEditing={module.editing}
                moduleId={module._id}
              />
            </div>
            {module.lessons && module.lessons.length > 0 && (
              <ul className="wd-lessons list-group rounded-0">
                {module.lessons.map((lesson) => (
                  <li
                    key={`lesson-${lesson._id}`}
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
