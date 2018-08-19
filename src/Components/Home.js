import React, { Component } from "react";

import EpisodeList from "./EpisodeList";
import Data from "../EpisodeSource/List.json";
import { Link } from "react-router-dom";
import ReactGA from "react-ga";
ReactGA.initialize("UA-124194052-1");
// this home component renders the main home page and shows the list of episode
class Home extends Component {
  fireTracking = () => {
    ReactGA.pageview(window.location.pathname );
   
  };
  componentDidMount() {
    this.fireTracking();
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="column ">
              <div className="Subscription" id="sub">
                <div className="notification is-danger ">
                  <a
                    href="http://eepurl.com/dCZSa5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="title is-4">
                      {" "}
                      Get Notified about our Gar Ma Garam{" "}
                      <strong> Episodes </strong> by Clicking here{" "}
                    </h3>
                  </a>
                </div>
              </div>

              <h1 className="title ">Episodes</h1>

              <br />
              {/* to display our episode with the help of our EpisodeList Component */}
              {Data.map((episode, key) => {
                return (
                  <Link key={key} to={`/episode/01`} params={episode.title}>
                    <EpisodeList
                      episodeNum={episode.episode}
                      title={episode.title}
                      date={episode.date}
                      description={episode.description}
                    />
                    <br />
                  </Link>
                );
              })}
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
