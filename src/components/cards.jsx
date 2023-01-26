import React, { Component } from 'react';

class Cards extends Component {
    constructor(props) {
        super(props);

    }


    cardFlipOnClick() {
        let card = document.getElementById(this.props.index);
        if (!card.className.includes("flipped")) { 
            this.setState({className: "cards-flipped"});
            card.className = "cards-flipped" + " " + this.props.matchId + " " + "selectAllCards"
            this.props.foundMatch(this.props.matchId, this.props.index);
        } else {
        };
    }

    render() {
        return (<div
            id={this.props.index} 
            onClick={() => {this.cardFlipOnClick()}} 
            className={"cards" + " " + this.props.matchId + " " + "selectAllCards"}
            data-matchid = {this.props.matchId}>
                <div className="card-front"></div>
                <div className={`card-back ${this.props.matchId}`}></div>
        </div>);
    }

}

export default Cards;