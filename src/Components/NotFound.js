import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div>
    <br />
    <br />
    <center>
      <Link to="/">
        <div className="notification is-danger ">
          <h1 className="title is-2">OOOPPPSSSS * Bus Horn Noise *</h1>
          <p className="title is-2">
            {" "}
            looks like apki bus tower nikal gaye ...{" "}
          </p>
          <p className="title is-3">Waqt pe nikal jana tha na !</p>
          <p className="title is-3">Ab kia karay ?? ......</p>
          <p className="title is-3">Ghar chalay ? :/</p>
        </div>
      </Link>
    </center>
    <br />
    <br />
  </div>
);
export default NotFound;
