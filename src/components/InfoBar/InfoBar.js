import React from "react";
import "./InfoBar.css";
import closeIcon from "../../icons/closeIcon.png";
import onlineIcon from "../../icons/onlineIcon.png";
import { TextField, Button, Typography } from "@mui/material";

//contains jsx
//we do a full page refresh at the a href since we need to clean the socket off that is disconnected in chat.js
//infobar gets passed in room from chat.js and we display the name of that room below
const InfoBar = ({ name, userid }) => (
  <div className="infoBar" style={{ backgroundColor: "#1877F2" }}>
    <div className="leftInnerContainer">
      <img
        src={`https://avatars.dicebear.com/api/adventurer/${name}.svg`}
        alt="close"
        style={{ width: "30px" }}
      />
      <img className="onlineIcon" src={onlineIcon} alt="online" />
      <Typography
        variant="body1"
        sx={{ fontFamily: "Nunito Sans, sans-serif" }}
      >
        {name}
      </Typography>
    </div>
    <div className="rightInnerContainer">
      <a href="/" style={{ textDecoration: "none" }}>
        <Button variant="contained" color="error">
          close
        </Button>
      </a>
    </div>
  </div>
);
export default InfoBar;
