import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";
export default function LessonControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckmark key="checkmark" />
      <BsPlus key="plus" />
      <IoEllipsisVertical key="ellipsis" className="fs-4" />
    </div>
  );
}
