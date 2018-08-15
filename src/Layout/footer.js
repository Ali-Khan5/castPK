import React, { Component } from "react";

import "../index.css";
class Footer extends Component {
  render() {
    return (
      <footer>
        <p>
          Made possible through the collaborative efforts of
          <a
            href="https://www.facebook.com/groups/free.code.camp.karachi/"
            target="_blank"
            rel="noopener noreferrer"
          > FccKarachi </a> and <a href="https://www.facebook.com/groups/softdevpk/" target="_blank" rel="noopener noreferrer">
            SoftDevPK
          </a>
        </p>
        <p>
          {" "}
          Special thanks to{" "}
          <a 
            href="https://www.facebook.com/mohammadasadasif"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mr.Asad Asif{" "}
          </a>
          for providing us our Logo{" "}
        </p>
        <p>
          Want to fix the site?
          <a href="https://github.com/Ali-Khan5/castPK"
          rel="noopener noreferrer">
            {" "}
            Send a pull request!
          </a>
        </p>
      </footer>
    );
  }
}

export default Footer;
