import React from "react";
import '../App.css';

const Bird = ({ top, gameRunning }) => {
  const style = { top: `${top}px` };
  if (!gameRunning) {
    return (
      <div className="Bird" style={style}>
        <img src="https://cdn.discordapp.com/attachments/927223345370517555/927230454002765834/pixel-hape-2.gif" style={{ width: "70px", height: "70px" }} />
      </div>
    )
  } else {
    return (
      <div className="Bird" style={style}>
        <img src="https://cdn.discordapp.com/attachments/927223345370517555/927230454002765834/pixel-hape-2.gif" style={{ width: "70px", height: "70px" }} />
      </div>
    )
  }

}

export default Bird;
