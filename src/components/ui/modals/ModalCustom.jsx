import React from "react";
import { Modal } from "react-bootstrap";

function ModalCustom(props) {
  const [show, setShow] = React.useState(false);

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
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
      </Modal>
    </>
  );
}

export default ModalCustom;
