import React, {Component} from 'react';
import Square from './Square';


class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };

    }
    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({squares: squares});
    }


    addingSquare(i) {
        return <Square value={this.state.squares[i]}
                       onClick={() => this.handleClick(i)}
        />;
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.addingSquare(0)}
                    {this.addingSquare(1)}
                    {this.addingSquare(2)}
                </div>
                <div className="board-row">
                    {this.addingSquare(3)}
                    {this.addingSquare(4)}
                    {this.addingSquare(5)}
                </div>
                <div className="board-row">
                    {this.addingSquare(6)}
                    {this.addingSquare(7)}
                    {this.addingSquare(8)}
                </div>
            </div>
        );
    }
}

export default Board;