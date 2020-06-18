import React from "react";
import { Modal } from "react-bootstrap";
import CardTitle from "../titles/CardTitle";

function ModalCustom(props) {
  const [show, setShow] = React.useState(false);
  const closeModal = () => {
    setShow(false);
  };

  return (
    <>
      <span onClick={() => setShow(true)}>{props.button}</span>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-custom-modal-styling-title"
        dialogClassName="modal-90w"
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <CardTitle>{props.title}</CardTitle>
        </Modal.Header>
        <Modal.Body>
          {" "}
          {React.cloneElement(props.children, {
            closeModal: () => closeModal(),
          })}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalCustom;
