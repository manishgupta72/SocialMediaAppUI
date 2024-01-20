import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./ProfileModal.css";

function ProfileModal({ ModalOpened, setModalOpened }) {
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
          <form className="p-Form">
          <h3>Your Info</h3>
            <div>
              <input
                type="text"
                className="infoInput"
                name="FirstName"
                placeholder="First Name"
              />

              <input
                type="text"
                className="infoInput"
                name="LastName"
                placeholder="Last Name"
              />
            </div>

            <div>
              <input
                type="text"
                className="infoInput"
                name="worksAT"
                placeholder="Works at"
              />
            </div>

            <div>
              <input
                type="text"
                className="infoInput"
                name="livesIN"
                placeholder="LIves in"
              />

              <input
                type="text"
                className="infoInput"
                name="Country"
                placeholder="Country"
              />
            </div>

            <div>
              <input
                type="text"
                className="infoInput"
                placeholder="RelationShip Status"
              />
            </div>
            <div>
                Profile Image
                <input type="file" name="profileImg" />
                Cover Image
                <input type="file" name="coverImg" />
            </div>
            <button className="button logout-button">Update</button>
          </form>
        </Modal.Body>
        
      </Modal>
    </>
  );
}

export default ProfileModal;
