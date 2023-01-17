import React, { Component } from 'react';

class Cards extends Component {
    constructor(props) {
        super(props);

        this.state = {
            className: "cards",
        };
    }

    render() {
        console.log(this.cardOnClick);
        return (<div onClick={this.cardOnClick} id="cardDiv" className={this.state.className}>
            <input type="checkbox" id="flippableCheckBox" />
            <label class="btn" htmlFor="flippableCheckBox"></label>
        </div>);
    }

    cardOnClick() {
        console.log(this);
        cardDiv.flippableCheckBox.checked = this.setState({ className: "cards:checked"})
    };
}

export default Cards;