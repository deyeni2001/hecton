function Modal(props){

    function cancelHandler(){
        props.onCancel();
    }

    function yesHandler(){
        props.onYes();
    }

    return <div className="modal">
        <p>Are you sure you want to delete this Item</p>
        <button className="btn" onClick={yesHandler}>Yes</button>
        <button className="btn btn--alt" onClick={cancelHandler}>Cancel</button>
    </div>
}
export default Modal;