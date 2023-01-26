import React, { Component } from 'react';
import Cards from './cards.jsx'
import HeaderBox from './HeaderBox.jsx';

class Board extends Component {
    constructor (props) {
        super(props);


        this.state = {
            firstCard: "",
            lastCard: "",
            firstUniqueId: "",
            lastUniqueId: "",
            score: 0,
            losses: 0,
            bestScore: 0,
            shuffledBoard: this.shuffle(),
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
        for (let i = 0; i < 16; i++) {
          shuffledCards.push(idArr[tempCards[i]]);
        }
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
                // this.setState({ 
                //     score: this.state.score + 1,
                //     firstCard: "",
                //     lastCard: "",
                //     firstUniqueId: "",
                //     lastUniqueId: "",
                // })
            
                this.state.score++;
                this.state.firstCard = "";
                this.state.lastCard = "";
                this.state.firstUniqueId = "";
                this.state.lastUniqueId = "";
            } else {
                console.log("else")
                let firstCard = document.getElementById(this.state.firstUniqueId)
                let secondCard = document.getElementById(this.state.lastUniqueId)
                function cardAutoFlip(card1, card2) {
                    card1 = firstCard;
                    card2 = secondCard;
                    card1.className = `cards ${Cards.matchId} selectAllCards`;
                    card2.className = `cards ${Cards.matchId} selectAllCards`;
                }
                setTimeout(cardAutoFlip, 1500);
                this.setState({ 
                    losses: this.state.losses + 1,
                    firstCard: "",
                    lastCard: "",
                    firstUniqueId: "",
                    lastUniqueId: "",
                })
               
            }
        }
        if (this.state.score > this.state.bestScore) {
            this.setState({ bestScore: this.state.score })
        } else {
            this.setState({})
        }
        if (this.state.score === 8 || this.state.losses === 5) {
            let allCards = document.getElementsByClassName('selectAllCards');
            let arrayFromCards = Array.from(allCards);
            arrayFromCards.forEach((card) => {
                card.className = `cards ${card.dataset.matchid} selectAllCards`
            });
            this.setState(() => {
                return {
                    shuffledBoard: this.shuffle(), 
                    score: 0,
                    losses: 0,
                    firstUniqueId: "",
                    lastUniqueId: "",
                    firstCard: "",
                    lastCard: "",
                }
            }); 
        }
    }

    render () {
        let cardArr = [0, 1 ,2 ,3];
        let x = 0;
        let y = 4;
        let z = 8;
        let q = 12;
        
        let cardRows = cardArr.map((i, index) => {
            return <div className="cardContainer" key={`rowKey${index}`}>
            <Cards index={index} matchId={`${this.state.shuffledBoard[x++]}`} foundMatch= {(id, uniqueId) => {this.foundMatch(id, uniqueId)}}/>
            <Cards index={index+4} matchId={`${this.state.shuffledBoard[y++]}`} foundMatch={(id, uniqueId) => {this.foundMatch(id, uniqueId)}}/>
            <Cards index={index+8}  matchId={`${this.state.shuffledBoard[z++]}`} foundMatch={(id, uniqueId) => {this.foundMatch(id, uniqueId)}}/>
            <Cards index={index+12} matchId={`${this.state.shuffledBoard[q++]}`} foundMatch={(id, uniqueId) => {this.foundMatch(id, uniqueId)}}/>
            </div>      
        });
        console.log("finalScore", this.state.score);
        return <>
            <div>
                <HeaderBox currentScore={this.state.score} bestScore={this.state.bestScore}/>
            </div>
            <div id="gameBoard">
                 {cardRows}
            </div>
        </>
    }


    }


export default Board;