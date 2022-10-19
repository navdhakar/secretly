import React from "react";
import "./Input.css";
import { TextField, Button, Typography } from "@mui/material";
import sendicon from "../../icons/send.png";
const Input = ({ message, setMessage, sendMessage }) => (
  <form className="form">
    <TextField
      id="outlined-basic"
      label="Type text message"
      variant="outlined"
      sx={{ width: "100%" }}
      multiline
      value={message}
      onChange={(event) => setMessage(event.target.value)}
      onKeyPress={(event) =>
        event.key === "Enter" ? sendMessage(event) : null
      }
    />
    <Button
      variant="contained"
      style={{ backgroundColor: "#1877F2" }}
      onClick={(event) => sendMessage(event)}
    >
      <img
        className="onlineIcon"
        src={sendicon}
        alt="online"
        style={{ width: "20px" }}
      />
    </Button>
  </form>
);

export default Input;
