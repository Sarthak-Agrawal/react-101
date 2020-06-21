import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css';
import './css/main.css';
import Clock from './timer';
import Button from './statefulButton';
import NameForm from './form';
import Counter from './hooks';
import TodoList from './todo/todoList';
import { ThemeContext } from './themeContext';
import ThemeSelector from './themeButton';

interface SquareProps {
  value: string,
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
// Functional Component
function Square(props: SquareProps) {
    return (
        <button 
            className = "square"
            onClick = {props.onClick} // Now this need not be like the arrow function
        >
            {props.value}
        </button>
    );
}

// class Square extends React.Component {
//     render() {
//       return (
//         <button 
//             className="square" 
//             onClick = {() => this.props.onClick()}
//         >
//             {this.props.value}
//         </button>
//       );
//     }
//   }
  
  function calculateWinner (squares: Array<string>) {
      const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
      ];

      for(let i=0;i<lines.length;i++) {
          const [a,b,c] = lines[i];
          if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
              console.log(squares[a]);
              return squares[a];
          }
      }

      return null;
  }

  interface BoardProps {
    squares: Array<string>,
    onClick: Function
  }

  class Board extends React.Component<BoardProps> {

    renderSquare(i: number) {
      return <Square 
                value={this.props.squares[i]} 
                onClick={() => this.props.onClick(i)}
                />;
    }
  
    render() {  
      return (
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  interface History {
    squares: Array<string>
  }

  interface GameState {
    history: Array<History>,
    xIsNext: boolean
  }

  class Game extends React.Component<{}, GameState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            xIsNext: true
        };
    }

    handleClick(i: number) {
        const history = this.state.history;
        const current = history[history.length - 1];
        const tempSquares = current.squares.slice(); //Used Imutabiility
        if (calculateWinner(tempSquares) || tempSquares[i]) {
            return;
        }
        if (this.state.xIsNext) {
            tempSquares[i] = 'X';
        } else {
            tempSquares[i] = 'O';
        }
        this.setState({
            history: history.concat([{
                squares: tempSquares
            }]),
            xIsNext: !this.state.xIsNext
        });
    }

    render() {
      const history = this.state.history;
      const current = history[history.length - 1];
      const winner = calculateWinner(current.squares);
      let status:string;
      if (winner) {
          status = "Winner: " + winner;
      } else {
          status = "Next player: " + (this.state.xIsNext ? 'X':'O');
      }

      return (
        <div className="game">
          <div className="game-board">
            <Board 
                squares = {current.squares}
                onClick = { (i: number)  => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
function ThemeProvider() {
  const [theme, setTheme] = useState('dark');
  const [buttonLabel, setButtonLabel] = useState('Switch to Light Theme');

  function toggleTheme(prevTheme: string) {
    if(prevTheme==='dark') {
        document.body.style.background = '#eeeeee';
        document.body.style.color= 'green';
        setTheme('light');
        setButtonLabel('Switch to Light Theme');
    } else {
        document.body.style.background = '#222222';
        document.body.style.color= 'red';
        setTheme('dark');
        setButtonLabel('Switch to Dark Theme')
    }
}

  return(
    <ThemeContext.Provider value={{theme, toggleTheme, buttonLabel}}>
      <ThemeSelector />
    </ThemeContext.Provider>
  )
}

  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );

  ReactDOM.render(
    <Clock />,
    document.getElementById("timer")
  )

  ReactDOM.render(
    <Button />,
    document.getElementById("button")
  )

  ReactDOM.render(
    <NameForm />,
    document.getElementById("form")
  )

  ReactDOM.render(
    <Counter initialCount = '-1' />,
    document.getElementById("counter")
  )

  ReactDOM.render(
    <TodoList />,
    document.getElementById("my-todo-list")
  )

  ReactDOM.render(
    <ThemeProvider />,
    document.getElementById("button")
  )