import React, { useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal/ProfileModal";
const InfoCard = () => {
  const [ModalOpened, setModalOpened] = useState(false);
  return (
    <div className="InfoCard">
      <div className="InfoHead">
        <h4>Your Info</h4>
        <div>
          <UilPen
            style={{ width: "2rem", height: "1.3rem" }}
            onClick={() => setModalOpened(true)}
          />
          <ProfileModal
            ModalOpened={ModalOpened}
            setModalOpened={setModalOpened}
            
          />
        </div>
      </div>
      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span> Single </span>
      </div>
      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Mumbai </span>
      </div>
      <div className="info">
        <span>
          <b> Works At </b>
        </span>
        <span> Study </span>
      </div>
      <div className="button logout-button">Log out</div>
    </div>
  );
};

export default InfoCard;
