import React from "react";
import UsersList from "../components/UsersList";
import profilePic from "../../images/me.jpg";
import userProfile from "../../images/user.png";
import Sahil from "../../images/Sahil.jpg";
import Mahesh from "../../images/Mahesh.jpg";
import Gaurav from "../../images/Gaurav.jpg";
import Pritam from "../../images/Pritam.jpg";
import Zaman from "../../images/e=mc2.png";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Zaman",
      image: Zaman,
      places: 1,
    },
    {
      id: "u2",
      name: "Abhishek",
      image: profilePic,
      places: 2,
    },
    {
      id: "u3",
      name: "Mahesh",
      image: Mahesh,
      places: 3,
    },
    {
      id: "u4",
      name: "Sahil",
      image: Sahil,
      places: 2,
    },
    {
      id: "u5",
      name: "Pritam",
      image: Pritam,
      places: 2,
    },
    {
      id: "u6",
      name: "Gaurav",
      image: Gaurav,
      places: 2,
    },
    {
      id: "u7",
      name: "Saurav",
      image: userProfile,
      places: 3,
    },
    {
      id: "u8",
      name: "Anonymous",
      image: userProfile,
      places: 2,
    }
  ];
  return <UsersList items={USERS} />;
};

export default Users;
