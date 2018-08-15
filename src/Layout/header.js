import React, { Component } from "react";

import { Link } from "react-router-dom";
import logo from "../LOGO/logo.png";
import FCC from "../LOGO/fccKarachi.png";
import SoftDev from "../LOGO/SoftDev.png";
import "./style.css";

class Header extends Component {
  render() {
    return (
      <div className="nav ">
        <div className=" devlogo">
          <Link to="/">
            <img src={logo}  alt="logo" />
          </Link>
        </div>
        <div className="side2">
          <div className="fcclogo ">
          <a href="https://www.facebook.com/groups/free.code.camp.karachi/"  target="_blank" rel="noopener noreferrer">
          <img
              src={FCC}
              style={{
                marginTop: "20px",
                maxWidth: "110px",
                height: "100px",
                width: "110px",
                borderRadius: "20px"
              }}
              alt="Fcc logo"
            />
            </a>
          </div>
          <div className="">
          <a href="https://www.facebook.com/groups/softdevpk/"  target="_blank" rel="noopener noreferrer" >   
           <img
              src={SoftDev}
              style={{
                marginTop: "20px",
                maxWidth: "110px",
                height: "100px",
                borderRadius: "20px"
              }}
              alt="logo"
            />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
