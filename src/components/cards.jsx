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
            className={"cards" + " " + this.state.matchId}
            > {this.state.matchId}
        </div>);
    }


    cardFlipOnClick() {
        // console.log(this);
        let card = document.getElementById(this.state.id);
        // console.log("here", card.className, this.state.className)
        // if (card.className !== this.state.className) {
        //     this.state.className = `${card.className}`
        //     console.log(this.state.className, card.className)
        // } 
        if (!card.className.includes("flipped")) { 
            this.setState({className: "cards-flipped"});
            card.className = "cards-flipped" +" "+ this.state.matchId
            card.textContent = `${this.state.matchId}`;
            this.props.foundMatch(this.state.matchId, this.state.id);
        } else {
            // this.setState({className: "cards"});
            // this.props.foundMatch(this.state.matchId, this.state.id);
            // card.textContent = '';
        };
    }
}

export default Cards;