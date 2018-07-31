import React, { Component } from 'react';



class Guest extends Component {
    render() {
        return (
            <div className="columns is-multiline ">
                {this.props.guest.map((data, key) => {
                    return (
                    <div key={key}className="column">
                        <a href={data.social} target="_blank">
                            <img src={data.img} alt={data.name + ' img'} style={{ border: '2px solid orange', borderRadius: '100px' }} />
                            <p style={{ marginLeft: '30px' }}>{data.name}</p>
                        </a>
                    </div>
                    )
                }
                )}
            </div>
        );
    }
}

export default Guest;