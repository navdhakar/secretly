import React from "react";
import "./ProjectInfo.css";
import { Link } from "react-router-dom";
import { TextField, Button, Typography } from "@mui/material";
import url from "socket.io-client/lib/url";
import chat from "../../icons/chat.png";

const ProjectInfo = () => (
  <div className="rightContainer">
    <img src={chat} alt="online" class="image-hero" />

    <div
      style={{
        padding: "20px",
        fontFamily: "Nunito Sans, sans-serif",
        color: "#1877F2",
        fontSize: "40px",
      }}
    >
      Create or Join temporary chatrooms to talk privately and anonymously.
    </div>
    <Typography
      variant="body"
      sx={{ color: "#1877F2", fontFamily: "Nunito Sans, sans-serif" }}
    >
      * no login required.
    </Typography>
  </div>
);

export default ProjectInfo;
