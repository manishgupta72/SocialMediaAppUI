import React from "react";
import LogoSearch from "../../LogoSearch/LogoSearch";
import ProfileCard from "../../ProfileCard/ProfileCard";
import "./ProfileSide.css"
import FollowersCard from "../../FollwersCard/FollowersCard";
const ProfileSide = () => {
  return <div className="ProfileSide">
     <LogoSearch/>
     <ProfileCard/>
     <FollowersCard/>
    </div>;
};

export default ProfileSide;
