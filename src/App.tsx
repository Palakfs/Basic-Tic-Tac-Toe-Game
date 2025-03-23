import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Block from './components/block';

function App() {
  const[state,setState] = useState(Array(9).fill(null));
  const[currentTurn ,setCurrentTurn] = useState("X");

  const checkWinner = (state:any[]) =>{
    const win = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]

    for(let i=0;i<win.length;i++){
      const[a,b,c] = win[i]; //Array Destructuring
      if(state[a]!== null &&state[a]===state[b] && state[b]===state[c]){
      
        return true;
      }
    }
    return false;

  }

  const handleBlockClick = (index : number) => {
    if(state[index] ){
      return;
    }
     const stateCopy = Array.from(state);
     stateCopy[index] = currentTurn;
     if(currentTurn == "X"){
      setCurrentTurn("O");
     }else{
      setCurrentTurn("X");
     }

     setState(stateCopy);
     const win = checkWinner(stateCopy);

     if(win){
      alert (`${currentTurn} won the game` );
      setTimeout(() => {
        setState(Array(9).fill(null));
        setCurrentTurn("X");
      }, 500); 
      
      return;
    }
     
  }

  return <div className ='page'>
    <div className='GameBoard'>
    <div className='row'>
      <Block onClick={() => handleBlockClick(0)} value={state[0]}/>
      <Block onClick={() => handleBlockClick(1)} value={state[1]}/>
      <Block onClick={() => handleBlockClick(2)}value={state[2]}/>
    </div>
    <div className='row'>
      <Block onClick={() => handleBlockClick(3)} value={state[3]}/>
      <Block onClick={() => handleBlockClick(4)} value={state[4]}/>
      <Block onClick={() => handleBlockClick(5)} value={state[5]}/>
    </div>
    <div className='row'>
      <Block onClick={() => handleBlockClick(6)} value={state[6]}/>
      <Block onClick={() => handleBlockClick(7)} value={state[7]}/>
      <Block onClick={() => handleBlockClick(8)} value={state[8]}/>
    </div>
  </div>
  </div>
}

export default App;
