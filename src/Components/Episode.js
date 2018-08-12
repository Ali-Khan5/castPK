import React, { Component } from "react";
import { Link } from "react-router-dom";
import Data from "../EpisodeSource/List.json";
import Guest from "./Guest";
// this component will render all the details of the episode
class Episode extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    //this will get the episode number from the browser and search it in our json file
    const result = Data.filter(
      episode => episode.episode == this.props.match.params.num
    );
    this.setState({ data: result });
  }
  render() {
    const { data } = this.state;
    if (!data.length) {
      return (
        <div>
          <br />
          <br />
          <center>
            <Link to="/">
              <div className="notification is-danger ">
                <h1 className="title is-2">
                  Lagta hai Abhi Episode Release nhi howi!{" "}
                </h1>
                <p className="title is-2">
                  {" "}
                  or Print leak karnay walay pehlay agaye ...{" "}
                </p>
                <p className="title is-2">Kuch tou koof karo </p>
                <p className="title is-2">
                  yeh bhi hosakta hay kay hamaray engine main kuch karabi ho ..{" "}
                </p>
              </div>
            </Link>
          </center>
          <br />
          <br />
          <br />
        </div>
      );
    }
    return (
      <div className="container" style={{ flex: " 1 0 auto" }}>
        <br />
        <br />
        {/* Guest component is just for rendering our array of objects containing guest data  */}
        {data.map((epi, key) => {
          return (
            <div key={key} className="column ">
              <h1 className="title">{epi.title}</h1>
              <p className="subtitle">{epi.date}</p>
              <iframe
                width="100%"
                height="166"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src={epi.soundCloudSRC}
              />
              <br />
              <p className="subtitle">{epi.description}</p>
              <br />

              <div className="notification is-info">
                <center>
                  <a
                    href={epi.feedBackForm}
                    target="_blank"
                  >
                    <h2 className="title is-3">Got Feedback ? Click here </h2>
                  </a>
                </center>
              </div>
              <br />
              <h1 className="title">Participants</h1>
              <br />
              <Guest guest={epi.panel} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Episode;
