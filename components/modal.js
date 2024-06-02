function Modal(props) {
  return (
    <div>
      {!props.modalVisibility ? (
        <div></div>
      ) : (
        <form
          id="modal-form"
          className="position-fixed bg-white text-dark d-flex flex-column justify-content-between top-50 start-50 translate-middle sm-full p-4 rounded"
        >
          <div className="d-flex flex-column gap-5">
            <div
              onClick={() => {
                props.setModalVisibility(false);
              }}
              className="btn btn-danger align-self-end justify-content-center align-items-center"
            >
              X
            </div>
            <label htmlFor="value_input" className="text-center fs-4">
              Digite o valor de sua {props.typeRegister}
            </label>
            <input
              id="value_input"
              className="p-2 border-0 border-bottom border-dark"
              type="currency"
            ></input>
          </div>
          <button className="btn btn-success btn-animated fs-3">
            Registrar
          </button>
        </form>
      )}
    </div>
  );
}

export default Modal;
