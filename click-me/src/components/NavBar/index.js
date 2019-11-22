import React from "react";
import "./style.css";

function NavTabs(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <img className = "logo" width = "200" height = "100" src= "click-me.png" />
      <ul className="nav nav-tabs">
        <li className="nav-item">
            Current Score : {props.currentScore}
        </li>
        <li className="nav-item">
            High Score : {props.highScore}
        </li>
        {props.messageUser === "You Guessed Incorrectly !" ? 
          (<li className="nav-item incorrect"> {props.messageUser} </li>) : 
            (<li className="nav-item correct">{props.messageUser}</li>
        )}
      </ul>
    </nav>
  );
}

export default NavTabs;