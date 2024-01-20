import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PostShare from "../PostShare/PostShare";

function ShareModal({ ModalOpened, setModalOpened }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setModalOpened(false);

  return (
    <>
      <Modal
        size="lg"
        show={ModalOpened}
        onHide={handleClose}
        className="custom-modal-style"
      >
       
        <Modal.Body>
          <PostShare/>
        </Modal.Body>
        
      </Modal>
    </>
  );
}

export default ShareModal;
