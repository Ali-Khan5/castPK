import React, { Component } from "react";

import { Link } from "react-router-dom";
import logo from "../LOGO/logo.png";
import FCC from "../LOGO/fccKarachi.png";
import SoftDev from "../LOGO/SoftDev.png";
import "./style.css";

class Header extends Component {
  render() {
    return (
      <div className="nav " style={{ background: "#E8FF34" }}>
        <div className=" devlogo">
          <Link to="/">
            <img src={logo} style={{ maxWidth: "290px" }} alt="logo" />
          </Link>
        </div>
        <div className="side2">
          <div className="fcclogo ">
            <img
              src={FCC}
              style={{
                marginTop: "20px",
                maxWidth: "110px",
                height: "100px",
                width: "110px",
                borderRadius: "20px",
                border: "2px solid black"
              }}
              alt="logo"
            />
          </div>
          <div className="">
            <img
              src={SoftDev}
              style={{
                marginTop: "20px",
                maxWidth: "110px",
                height: "100px",
                borderRadius: "20px",
                border: "2px solid black"
              }}
              alt="logo"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
