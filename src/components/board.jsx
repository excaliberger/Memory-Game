import React, { Component } from 'react';
import Cards from './cards.jsx'

class Board extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return <div id="gameBoard">
                    <div className="cardContainer">
                        <Cards />
                        {/* <Cards />
                        <Cards />
                        <Cards />
                        <Cards /> */}
                    </div>
                    {/* <div className="cardContainer">
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                    </div> */}
                    {/* <div className="cardContainer">
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                    </div> */}
                    {/* <div className="cardContainer">
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                    </div> */}
               </div>
    }

}

export default Board;