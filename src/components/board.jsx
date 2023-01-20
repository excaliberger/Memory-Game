import React, { Component } from 'react';
import Cards from './cards.jsx'

class Board extends Component {
    constructor (props) {
        super(props);


        this.state = {
            firstCard: "",
            lastCard: "",
            firstUniqueId: "",
            lastUniqueId: "",
            score: 0,
        }
    }
    
    shuffle() {
        let idArr = ["ID1","ID1", "ID2", "ID2", "ID3", "ID3", "ID4", "ID4",
        "ID5", "ID5", "ID6", "ID6", "ID7", "ID7", "ID8", "ID8"];
        let shuffledCards = [];
        let tempCards = [];
        while (tempCards.length < 16) {
          let a = Math.floor(Math.random() * 16);
      
          if (tempCards.includes(a) == false && a < 16) {
            tempCards.push(a);
          }
        }
        // console.log(tempCards);
        for (let i = 0; i < 16; i++) {
          shuffledCards.push(idArr[tempCards[i]]);
        }
      
        // console.log(shuffledCards);
        return shuffledCards;
    };

    foundMatch(id, uniqueId) {
        if (this.state.firstCard === "") {
            this.state.firstCard = id;
            this.state.firstUniqueId = uniqueId;
        } else {
            this.state.lastCard = id;
            this.state.lastUniqueId = uniqueId;
            if (this.state.firstCard === this.state.lastCard) {
                console.log("you found a match! Huzzah");
                this.state.score++;
                console.log(this.state.score);
            } else {
                // id.setState({className: "cards"});
                let firstCard = document.getElementById(this.state.firstUniqueId)
                let secondCard = document.getElementById(this.state.lastUniqueId)
                firstCard.className = `cards ${this.matchId}`
                secondCard.className = `cards ${this.matchID}`
                // firstCard.setTimeout(myFunction, 3000)
                
                // add time delay so you can see both cards before they automatically flip back
            }
            this.state.firstCard = "";
            this.state.lastCard = "";
        }
    }

        
    render () {
        this.shuffle()
        let shuffleDeck = this.shuffle();
        let cardArr = [0, 1 ,2 ,3];
        let x = 0;
        let y = 4;
        let z = 8;
        let q = 12;
        
        let cardRows = cardArr.map((i, index) => {
            return <div className="cardContainer" key={`rowKey${index}`}>
            <Cards index={index} matchId={`${shuffleDeck[x++]}`} foundMatch= {(id, uniqueId) => {this.foundMatch(id, uniqueId)}}/>
            <Cards index={index+4} matchId={`${shuffleDeck[y++]}`} foundMatch={(id, uniqueId) => {this.foundMatch(id, uniqueId)}}/>
            <Cards index={index+8}  matchId={`${shuffleDeck[z++]}`} foundMatch={(id, uniqueId) => {this.foundMatch(id, uniqueId)}}/>
            <Cards index={index+12} matchId={`${shuffleDeck[q++]}`} foundMatch={(id, uniqueId) => {this.foundMatch(id, uniqueId)}}/>
            </div>      
        });
        // console.log(cardArr);
        return <div id="gameBoard">
                    {cardRows}
               </div>
    }


    }


export default Board;