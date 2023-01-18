import React, { Component } from 'react';
import Cards from './cards.jsx'

class Board extends Component {
    constructor (props) {
        super(props);
    }
    
    render () {
        let cardArr = [...Array(4).keys()]
        let cardRows = cardArr.map((i, index) => {
            return <><div className="cardContainer">
            <Cards index={index}/>
            <Cards index={index+5}/>
            <Cards index={index+10}/>
            <Cards index={index+15}/>
            <Cards index={index+20}/>
            </div>
            </>          
        });
        console.log(cardArr);
        return <div id="gameBoard">
                    {cardRows}
               </div>
    }

}

export default Board;