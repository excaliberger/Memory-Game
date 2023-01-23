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
        // console.log(tempCards);
        for (let i = 0; i < 16; i++) {
          shuffledCards.push(idArr[tempCards[i]]);
        }
        
        console.log("og",shuffledCards);
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
                this.state.score++;
                console.log("score", this.state.score);
                console.log(this.state.firstCard, this.state.lastCard);
                this.state.firstCard = "";
                this.state.lastCard = "";
                if (this.state.score === 0) {
                    this.state.score++;
                }
            } else {
                let firstCard = document.getElementById(this.state.firstUniqueId)
                let secondCard = document.getElementById(this.state.lastUniqueId)
                function cardAutoFlip(card1, card2) {
                    card1 = firstCard;
                    card2 = secondCard;
                    card1.className = `cards ${Cards.matchId} selectAllCards`;
                    card2.className = `cards ${Cards.matchId} selectAllCards`;
                }
                setTimeout(cardAutoFlip, 1500);
                this.state.losses++;
                console.log("losses",this.state.losses)
                this.state.firstCard = "";
                this.state.lastCard = "";
            }
        }
            if (this.state.score > this.state.bestScore) {
                // this.bestScore.setState = ({bestScore: `${this.state.score}`})
                this.setState({ bestScore: this.state.score })
            } 
            if (this.state.score == 8 || this.state.losses == 3) {
                console.log("win/loss")
                let allCards = document.getElementsByClassName('selectAllCards');
                console.log(allCards);
                let arrayFromCards = Array.from(allCards);
                arrayFromCards.forEach((card) => {
                    console.log(card);    
                    card.className = `cards ${card.dataset.matchid} selectAllCards`
                });
                console.log("before", this.state.shuffledBoard)
                const shuffleTest = this.shuffle()
                console.log("shuffleTest", shuffleTest)
                this.setState({shuffledBoard: shuffleTest, firstCard: "", lastCard: "", score: 0}, () => {
                    console.log("after", this.state.shuffledBoard);
                }) 
                Cards.className = `cards ${shuffleTest} selectAllCards`  
            }
    }

    render () {
        let cardArr = [0, 1 ,2 ,3];
        let x = 0;
        let y = 4;
        let z = 8;
        let q = 12;
        
        console.log("render", this.state.shuffledBoard)
        let cardRows = cardArr.map((i, index) => {
            return <div className="cardContainer" key={`rowKey${index}`}>
            <Cards index={index} matchId={`${this.state.shuffledBoard[x++]}`} foundMatch= {(id, uniqueId) => {this.foundMatch(id, uniqueId)}}/>
            <Cards index={index+4} matchId={`${this.state.shuffledBoard[y++]}`} foundMatch={(id, uniqueId) => {this.foundMatch(id, uniqueId)}}/>
            <Cards index={index+8}  matchId={`${this.state.shuffledBoard[z++]}`} foundMatch={(id, uniqueId) => {this.foundMatch(id, uniqueId)}}/>
            <Cards index={index+12} matchId={`${this.state.shuffledBoard[q++]}`} foundMatch={(id, uniqueId) => {this.foundMatch(id, uniqueId)}}/>
            </div>      
        });
        // console.log(cardArr);
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