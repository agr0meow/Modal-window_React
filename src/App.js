import { useState } from "react";
import ModalWindow from "./components/ModalWindow";
function App() {
  const [modalActive, setModalActive] = useState(false);
  const changeModalActiveHandler = () => {
    return modalActive ? setModalActive(false) : setModalActive(true);
  };
  return (
    <div className="myApp">
      <div className="wrapper">
        <button className="buttonMain" onClick={changeModalActiveHandler}>
          open modal window
        </button>
        {modalActive && (
          <ModalWindow changeModalActive={changeModalActiveHandler} />
        )}
      </div>
    </div>
  );
}

export default App;
