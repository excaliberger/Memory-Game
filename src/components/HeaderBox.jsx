import React, { Component } from 'react';

class HeaderBox extends Component {
    constructor (props) {
        super (props);
    }

    render() {
        return <div id="headerBox">
                <div className="scores">
                    <p>Current Score</p>
                    <h2 id='currentScore'>{this.props.currentScore}</h2>
                </div>
                <div className="scores">
                    <p>Best Score</p>
                    <h2 id='bestScore'>{this.props.bestScore}</h2>
                </div>
            </div>
    }
}

export default HeaderBox;