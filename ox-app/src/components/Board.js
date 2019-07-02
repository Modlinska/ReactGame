import React, {Component} from 'react';
import Square from './Square';


class Board extends React.Component {


    addingSquare(i) {
        return <Square value={this.props.squares[i]}
                       onClick={() => this.props.onClick(i)}
        />;
    }

    render() {

        return (
            <div>
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