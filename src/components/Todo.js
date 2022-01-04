import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function deleteHandler() {
      setModalIsOpen(true);
  }

  function closeModalHandler(){
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <h3>{props.time}</h3>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div> 
      {modalIsOpen &&  <Modal onCancel={closeModalHandler} onYes={closeModalHandler}/>}
      {modalIsOpen &&  <Backdrop onClick={closeModalHandler} />}
    </div>
  );
}
export default Todo;
