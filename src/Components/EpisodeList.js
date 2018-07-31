import React, { Component } from 'react';

import "./style.css";

class EpisodeList extends Component {
    render() {
        return (
            <div className="card list">
                <div className="card-content">
                    <div className="columns ">

                        <div className="column is-1 ">
                            <span className="episodeNumber">{this.props.episodeNum}</span>
                        </div>
                        <div className="column is-10">
                            <h1 className="title">{this.props.title}</h1>
                            <p className="">{this.props.date}</p>
                            <p className="subtitle is-5">{this.props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EpisodeList;