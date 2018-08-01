import React, { Component } from "react";

import "../index.css";
class Footer extends Component {
  render() {
    return (
      <footer>
        <p>
          Made possible through the collaborative efforts of FccKarachi and
          SoftDevPK
        </p>
        <p>Special thanks to Mr.Asad Asif for providing us our Logo </p>
        <p>
          Want to fix the site?
          <a href="https://github.com/Ali-Khan5/castPK">
            {" "}
            Send a pull request!
          </a>
        </p>
      </footer>
    );
  }
}

export default Footer;
