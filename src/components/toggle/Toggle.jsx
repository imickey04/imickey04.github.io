import React, { useContext } from 'react';
import "./toggle.css";

import Sun from "../../images/sun1.png"
import Moon from "../../images/moon1.png"

import { ThemeContext } from "../../context";

const Toggle = () => {

    const theme = useContext(ThemeContext);
    const handleClick = () => {
        theme.dispatch({type: "TOGGLE"})
    }

  return (
    <div className='toggle'>
        <img src={Sun} className="toggle-ico" alt="" />
        <img src={Moon} className="toggle-ico" alt="" />
        <div  className="toggle-btn" onClick={handleClick} style={{left: theme.state.darkMode ? 0 : '30px'}} ></div>
    </div>
  )
}

export default Toggle