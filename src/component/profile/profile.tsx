import React, { useState, useEffect } from "react";
import { Avatar, Button } from "antd";
import { Link } from "react-router-dom";
import TextComponent from "./TextComponent";
import { ProfileModel } from "../../model/profile";
import request from "../../request";
const Profile: React.FC<{}> = () => {
  const [user, setUser] = useState<ProfileModel>();
  useEffect(() => {
    request
      .get("profiles/1")
      .then((user) => setUser(user.data))
      .catch((err) => {
        console.error(err);
      });
    console.log(user);
  }, []);
  return (
    <div className="row profile">
      <div className="col col-md-12 avatar">
        <Avatar shape="circle" size={100} src={user?.avatar} />
        <div>{user?.fullName}</div>
        <div>{user?.desc} </div>
      </div>
      <div className="col col-md-12 action">
        <Link to="/profiles/1" className="btn btn-primary">
          Edit Profile
        </Link>
        <Link to="/profile/1/change-status" className="btn btn-primary">
          Change status
        </Link>
      </div>

      <TextComponent
        className="col col-md-12 left"
        label="Role"
        value={user?.role?.join(",")}
      />

      <TextComponent
        className="col col-md-12 left"
        label="Email"
        value={user?.email}
      />
      <TextComponent
        className="col col-md-12 left"
        label="Phone"
        value={user?.phone}
      />

      <TextComponent
        className="col col-md-12 left"
        label="Twitter"
        value={user?.twitter}
      />

      <TextComponent
        className="col col-md-12 left"
        label="Location"
        value={user?.location}
      />

      <TextComponent
        className="col col-md-12 left"
        label="Bio"
        value={user?.Bio}
      />
    </div>
  );
};
export default Profile;
