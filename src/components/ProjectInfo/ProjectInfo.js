import React from "react";
import "./ProjectInfo.css";
import { Link } from "react-router-dom";
import { TextField, Button, Typography } from "@mui/material";
import url from "socket.io-client/lib/url";
import chat from "../../icons/chat.png";

const ProjectInfo = () => (
  <div className="rightContainer">
    <img src={chat} alt="online" style={{ width: "500px" }} />

    <Typography
      variant="h4"
      sx={{ color: "#1877F2", fontFamily: "Nunito Sans, sans-serif" }}
    >
      Create or Join temporary chatrooms to talk privately and anonymously.
    </Typography>
    <Typography
      variant="body"
      sx={{ color: "#1877F2", fontFamily: "Nunito Sans, sans-serif" }}
    >
      * no login required.
    </Typography>
  </div>
);

export default ProjectInfo;
