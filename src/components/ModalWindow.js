import { RiCloseCircleFill } from "react-icons/ri";
import "./ModalWindow.css";
const ModalWindow = ({ changeModalActive }) => {
  return (
    <div className="modal">
      <div className="modalWindow">
        <RiCloseCircleFill className="btnModal" onClick={changeModalActive} />
        <h1>hello from modal window!</h1>
        <div></div>
      </div>
      <div className="overlay"></div>
    </div>
  );
};
export default ModalWindow;
