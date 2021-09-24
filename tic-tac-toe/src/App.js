import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            count: 0
        }
        this.winnerLine = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [2,4,6],
            [0,4,8]
        ]
    }

    isWinner = () => {
        let s = (this.state.count % 2 === 0) ? 'X' : 'O';
        for (let i = 0; i<8; i++) {
            let line = this.winnerLine[i];
            if (this.state.squares[line[0]] === s
                && this.state.squares[line[1]] === s
                && this.state.squares[line[2]] === s){
                alert(s + ' win');
                setTimeout(()=>{
                    this.setState({ squares: Array(9).fill(null) });
                    this.setState({ count: 0 });
                },2000)
            }
        }

    }

    clickHandler = event => {
        let data = event.target.getAttribute('data');
        let currentSquare = this.state.squares;
        if (currentSquare[data] === null) {
            currentSquare[data] = (this.state.count % 2 === 0) ? 'X' : 'O';
            this.setState({count: this.state.count + 1});
            this.setState({squares: currentSquare});
        }
        else {
            alert('Так низя');
        }
        this.isWinner();
    }

    render() {
        return (
            <div className="tic-tac-toe">
                <div className="ttt-grid" onClick={this.clickHandler} data ="0" data-testid='Sq0'>{this.state.squares[0]}</div>
                <div className="ttt-grid" onClick={this.clickHandler} data ="1" data-testid='Sq1'>{this.state.squares[1]}</div>
                <div className="ttt-grid" onClick={this.clickHandler} data ="2" data-testid='Sq2'>{this.state.squares[2]}</div>
                <div className="ttt-grid" onClick={this.clickHandler} data ="3" data-testid='Sq3'>{this.state.squares[3]}</div>
                <div className="ttt-grid" onClick={this.clickHandler} data ="4" data-testid='Sq4'>{this.state.squares[4]}</div>
                <div className="ttt-grid" onClick={this.clickHandler} data ="5" data-testid='Sq5'>{this.state.squares[5]}</div>
                <div className="ttt-grid" onClick={this.clickHandler} data ="6" data-testid='Sq6'>{this.state.squares[6]}</div>
                <div className="ttt-grid" onClick={this.clickHandler} data ="7" data-testid='Sq7'>{this.state.squares[7]}</div>
                <div className="ttt-grid" onClick={this.clickHandler} data ="8" data-testid='Sq8'>{this.state.squares[8]}</div>
            </div>
        );
    }
}

export default App;
