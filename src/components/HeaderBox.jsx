import React, { Component } from 'react';

class HeaderBox extends Component {
    constructor (props) {
        super (props);
    }

    render() {
        return <div id="headerBox">
                <div className="scores">
                    <p>Current Score</p>
                    <h2 id='currentScore'>15</h2>
                </div>
                <div className="scores">
                    <p id='bestScore'>Best Score</p>
                    <h2>25</h2>
                </div>
            </div>
    }
}

export default HeaderBox;