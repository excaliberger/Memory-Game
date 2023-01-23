import React, { Component } from 'react';

class Cards extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // className: "cards",
            matchId: `${this.props.matchId}`,
            id: `${this.props.index}`,
            lastCard: "",
            remainingMismatches: []
        };
    }

    chancesRemaining() {
        //how to calculate mismatches made
    }

    render() {
        return (<div 
            id={this.state.id} 
            onClick={() => {this.cardFlipOnClick()}} 
            className={"cards" + " " + this.state.matchId + "selectAllCards"}
            data-matchid = {this.state.matchId}
            > {this.state.matchId}
        </div>);
    }


    cardFlipOnClick() {
        // console.log(this);
        let card = document.getElementById(this.state.id);
        if (!card.className.includes("flipped")) { 
            this.setState({className: "cards-flipped"});
            card.className = "cards-flipped" +" "+ this.state.matchId + " " + "selectAllCards"
            card.textContent = `${this.state.matchId}`;
            this.props.foundMatch(this.state.matchId, this.state.id);
        } else {
        };
    }
}

export default Cards;