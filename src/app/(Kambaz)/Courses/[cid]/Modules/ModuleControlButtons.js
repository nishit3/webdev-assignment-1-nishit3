import { FaTrash } from "react-icons/fa";
import GreenCheckmark from "./GreenCheckmark";
import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
export default function ModuleControlButtons() {
  return (
    <div className="float-end">
      <FaTrash className="text-danger me-2 mb-1" />
      <GreenCheckmark />
      <BsPlus className="fs-1" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
