import React from "react";
import onlineIcon from "../../icons/onlineIcon.png";
import "./TextContainer.css";
import { TextField, Button, Typography, Card } from "@mui/material";

const TextContainer = ({ users, name, room, userid }) => (
  <div className="textContainer">
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: "10px",
      }}
    >
      <img
        src={`https://avatars.dicebear.com/api/adventurer/${name}.svg`}
        alt="close"
        style={{ width: "30px" }}
      />
      <Typography
        variant="body1"
        sx={{
          color: "white",
          fontFamily: "Nunito Sans, sans-serif",
          p: 3,
        }}
      >
        <span style={{ color: "gray" }}>Name: </span>
        {name} <br></br>
        <span style={{ color: "gray" }}> Room Code: </span>
        {room}
        <br></br>
        <span style={{ color: "gray" }}> Total members: </span>
        {users.length}
      </Typography>
    </div>
    <hr style={{ width: "100%", borderWidth: "1px", borderColor: "gray" }}></hr>

    {users ? (
      <div
        style={{
          flex: 8,
          paddingLeft: "30px",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: "gray",
            fontFamily: "Nunito Sans, sans-serif",
          }}
        >
          People active in room
        </Typography>
        <div className="activeContainer">
          <Typography
            variant="body"
            sx={{
              mb: 5,
              color: "white",
              fontFamily: "Nunito Sans, sans-serif",
              fontSize: 18,
              fontWeight: 600,
            }}
          >
            {users.map(({ name }) => (
              <Card
                variant="outlined"
                style={{ backgroundColor: "#031b3c" }}
                sx={{ my: 1 }}
              >
                <div
                  key={name}
                  className="activeItem"
                  style={{
                    display: "flex",

                    flexDirection: "row",

                    alignItems: "center",
                  }}
                >
                  <img
                    src={`https://avatars.dicebear.com/api/adventurer/${name}.svg`}
                    alt="close"
                    style={{
                      width: "50px",
                      borderRadius: "10px",
                    }}
                  />
                  <div
                    style={{
                      padding: "20px",
                      fontFamily: "Nunito Sans, sans-serif",
                      color: "white",
                    }}
                  >
                    {name}
                  </div>
                  <img alt="Online Icon" src={onlineIcon} />
                </div>
              </Card>
            ))}
          </Typography>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
