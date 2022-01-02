import React from "react";
import '../App.css';

const Bird = ({ top, gameRunning }) => {
  const style = { top: `${top}px` };
  if (gameRunning) {
    return (
      <div className="Bird" style={style}>
        <img src="https://dvizhok-hosted-content.s3.us-east-2.amazonaws.com/images/landing/pixel-hape-2.gif" style={{ width: "70px", height: "70px" }} />
      </div>
    )
  } else {
    return (
      <div className="Bird" style={style}>
        <img src="https://dvizhok-hosted-content.s3.us-east-2.amazonaws.com/images/landing/bird_stay.png" style={{ width: "70px", height: "70px" }} />
      </div>
    )
  }

}

export default Bird;
