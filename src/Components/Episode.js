import React, { Component } from 'react';

//import './App.css';
//import 'bulma';
import Data from '../EpisodeSource/List.json';
import Guest from './Guest';
// this component will render all the details of the episode 
class Episode extends Component {


    state = {
        data: []
    }

    componentDidMount() {
        //this will get the episode number from the browser and search it in our json file 
        let result = Data.filter(episode => episode.episode == this.props.match.params.num)
        this.setState({ data: result });
    }
    render() {

        return (

            <div className="container" style={{ flex: ' 1 0 auto' }} >
                <br />
                <br />
                {/* Guest component is just for rendering our array of objects containing guest data  */}
                {
                    this.state.data.map((epi, key) => {
                        return (
                            <div key={key} className="column is-offset-1">
                                <h1 className="title">{epi.title}</h1>
                                <p className="subtitle">{epi.date}</p>
                                <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src={epi.soundCloudSRC}></iframe>
                                <p className="subtitle">{epi.description}</p>
                                <h1 className="title">Guests</h1>
                                <Guest guest={epi.panel} />

                            </div>
                        )
                    })
                }

              
            </div>
        );
    }
}

export default Episode;