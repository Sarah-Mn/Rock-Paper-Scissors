import { useState, useEffect } from 'react';
import './App.css';

const App = () => {

  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const choices = ['rock', 'paper', 'scissors'];
  


  const handleClick = (value) => {
    setUserChoice(value);
    generateComputerChoice();
    
  }

  useEffect(() => {
    switch(userChoice + computerChoice) {
      case 'scissorspaper':
      case 'rockscissors':
      case 'paperrock':
        setResult('YOU WIN!')
        break
      case 'paperscissors':
      case 'scissorsrock':
      case 'rockpaper':
        setResult('YOU LOSE!')
        break
      case 'rockrock':
      case 'paperpaper':
      case 'scissorsscissors':
        setResult('ITS A DRAW!')
        break
    }
  }, [computerChoice, userChoice])

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  }

  return (
    <div>
      <h1>User Choice Is:  {userChoice}</h1>
      <h1>Computer Choice Is:  {computerChoice}</h1>

      {choices.map((choice, index) => <button key={index} onClick={() => handleClick(choice)}>{choice}</button>)}
      <h1>{result}</h1>
    </div>
  );
}

export default App;
