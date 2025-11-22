import { FaTrash, FaCheck, FaTimes } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";

export default function ModuleControlButtons({
  moduleId,
  deleteModule,
  editModule,
  saveModule,
  cancelEdit,
  isEditing,
}) {
  return (
    <div className="float-end">
      {!isEditing && (
        <>
          <FaPencil
            onClick={() => editModule(moduleId)}
            className="text-primary me-3"
            style={{ cursor: "pointer" }}
          />
          <FaTrash
            className="text-danger me-2 mb-1"
            onClick={() => deleteModule(moduleId)}
            style={{ cursor: "pointer" }}
          />
        </>
      )}
      {isEditing && (
        <>
          <FaCheck
            onClick={() => saveModule(moduleId)}
            className="text-success me-3"
            style={{ cursor: "pointer" }}
            title="Save (or press Enter)"
          />
          <FaTimes
            onClick={() => cancelEdit(moduleId)}
            className="text-danger me-3"
            style={{ cursor: "pointer" }}
            title="Cancel (or press Escape)"
          />
        </>
      )}
      <GreenCheckmark />
      <BsPlus className="fs-1" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
