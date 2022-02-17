import React, { useState } from 'react';
import './App.css';

function App() {

  // const [guess1, setGuess1] = useState([])
  
  let guess1: String[] = [];

  const navigateInputs = (event: any) => {

    const form = event.target.form
    const index = [...form].indexOf(event.target)

    setTimeout(() => {
      if(event.key === "Backspace") {

        form.elements[index - 1].focus()
        form.elements[index - 1].value = ""

      } else if(event.key === "ArrowLeft") {
        form.elements[index - 1].focus()
      } else if (event.key === "ArrowRight") {
        form.elements[index + 1].focus()
      } else {
        // guess1.push(form.element[index].value)
        setTimeout(() => {
          console.log(form.element[index].value)
        }, 1000)
        
        console.log("GUESS ARRAY: ", guess1)
        form.elements[index + 1].focus()

      } 
      event.preventDefault()
    }, 1)
  }

  const handleGuess = (event: any) => {
    if(event.target.value === "") {
      guess1.pop()
    }
    guess1.push(event.target.value)
    console.log(guess1)
  }

  let rowInputs = [1, 2, 3, 4]

  return (
    <div className="landingPage">
      <h1>Gaette</h1>
      <h3>guess the 4 letter word!</h3>
      <form className="App" >
        
        <div className="row">{rowInputs.map((i) => <input key={i} onChange={handleGuess} onKeyDown={navigateInputs} className="RowInputs" id={`row1letter${i}`} type="text" maxLength={1} />)}</div>

        <div className="row">{rowInputs.map((i) => <input key={i} onKeyDown={navigateInputs} className="RowInputs" id={`row2letter${i}`} type="text" maxLength={1} />)}</div>

        <div className="row">{rowInputs.map((i) => <input key={i} onKeyDown={navigateInputs} className="RowInputs" id={`row3letter${i}`} type="text" maxLength={1} />)}</div>

        <div className="row">{rowInputs.map((i) => <input key={i} onKeyDown={navigateInputs} className="RowInputs" id={`row4letter${i}`} type="text" maxLength={1} />)}</div>
      </form>
    </div>
  );
}

export default App;
