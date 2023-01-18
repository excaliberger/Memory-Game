import React, { Component } from 'react';

class Cards extends Component {
    constructor(props) {
        super(props);

        this.state = {
            className: "cards",
            id: `cardDiv${this.props.index}`
        };
    }

    render() {
        return (<div id={this.state.id} onClick={() => {this.cardFlipOnClick()}} className={this.state.className}>
        </div>);
    }

    cardFlipOnClick() {
        console.log(this);
        let card = document.getElementById(this.state.id);
        if (card.className === "cards") { 
            this.setState({className: "cards-flipped"});
            card.textContent = `${card.id}`
        } else if (card.className === "cards-flipped") {
            this.setState({className: "cards"});
            card.textContent = '';

        };
    };
}

export default Cards;