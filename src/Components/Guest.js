import React, { Component } from "react";

class Guest extends Component {
  render() {
    return (
      <div className="columns is-multiline ">
        {this.props.guest.map((data, key) => {
          return (
            <div
              key={key}
              style={{ textAlign: "center", marginBottom: "30px" }}
              className="column"
            >
              <a href={data.social} target="_blank" rel="noopener noreferrer" className="guestNameStyle">
                <img
                  src={data.img}
                  alt={data.name + " img"}
                  style={{ border: "5px solid rgb(196, 32, 0) ", borderRadius: "100px" }}
                />
                <p> {data.name} </p>
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Guest;
