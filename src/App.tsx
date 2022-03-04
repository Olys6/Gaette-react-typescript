import React, { useState } from 'react';
import './App.css';

  // let guessSubtitle = "Guess the 4 letter word!"
  
  const words = [
    "four", "able", "aged",
    "army", "bank", "band",
    "base", "boat", "king", 
    "acid", "bird", "burn", 
    "camp", "bone", "down", 
    "earn", "gift", "nice",
    "belt", "case", "cash",
    "chat", "club", "dark", 
    "easy", "late", "fact",
    "fate", "goal", "glad",
    "girl", "grow", "join", 
    "name", "next", "time", 
    "true", "town", "warm",
    "word", "year", "wire"
  ]

  const randomWord = words[Math.floor(Math.random() * words.length)].split("")
  console.log("RANDOM WORD: ", randomWord.join(""))

function App() {

  // const [guessSubtitle, setGuessSubtitle] = useState("Guess the 4 letter word!")

  let guess: String[] = [];
  const [isGuess1Disabled, setIsGuess1Disabled] = useState(false)
  
  // let guess2: String[] = [];
  const [isGuess2Disabled, setIsGuess2Disabled] = useState(false)

  // let guess3: String[] = [];
  const [isGuess3Disabled, setIsGuess3Disabled] = useState(false)

  // let guess4: String[] = [];
  const [isGuess4Disabled, setIsGuess4Disabled] = useState(false)

  const navigateInputs = (event: any) => {

    const form = event.target.form
    const index = [...form].indexOf(event.target)

    setTimeout(() => {

      if(form.elements[0].value !== "" && form.elements[1].value !== "" && form.elements[2].value !== "" && form.elements[3].value !== "" && guess.length < 1) {
        // console.log("FIRST ROW IS COMPLETED!")
  
        guess.push(form.elements[0].value, form.elements[1].value, form.elements[2].value, form.elements[3].value)
  
        setIsGuess1Disabled(!isGuess1Disabled)

        for (let i = 0; i < 4; i++) {
          if (guess[0] === randomWord[i]) {
            form.elements[0].style.transition = "1s"
            form.elements[0].style.backgroundColor = "orange"
          } else if (guess[1] === randomWord[i]) {
            form.elements[1].style.transition = "1s"
            form.elements[1].style.backgroundColor = "orange"
          } else if (guess[2] === randomWord[i]) {
            form.elements[2].style.transition = "1s"
            form.elements[2].style.backgroundColor = "orange"
          } else if (guess[3] === randomWord[i]) {
            form.elements[3].style.transition = "1s"
            form.elements[3].style.backgroundColor = "orange"
          }
        }

        if(guess[0] === randomWord[0]) {
          form.elements[0].style.transition = "1s"
          form.elements[0].style.backgroundColor = "rgb(0, 211, 0)"
        }

        if(guess[1] === randomWord[1]) {
          form.elements[1].style.transition = "1s"
          form.elements[1].style.backgroundColor = "rgb(0, 211, 0)"
        }

        if (guess[2] === randomWord[2]) {
          form.elements[2].style.transition = "1s"
          form.elements[2].style.backgroundColor = "rgb(0, 211, 0)"
        }

        if (guess[3] === randomWord[3]) {
          form.elements[3].style.transition = "1s"
          form.elements[3].style.backgroundColor = "rgb(0, 211, 0)"
        }

        guess = []
        // console.log("FIRST GUESS", guess1)
      }

      if (form.elements[4].value !== "" && form.elements[5].value !== "" && form.elements[6].value !== "" && form.elements[7].value !== "" && guess.length < 1) {
        
        guess.push(form.elements[4].value, form.elements[5].value, form.elements[6].value, form.elements[7].value)

        setIsGuess2Disabled(!isGuess2Disabled)

        for (let i = 0; i < 4; i++) {
          if (guess[0] === randomWord[i]) {
            form.elements[4].style.transition = "1s"
            form.elements[4].style.backgroundColor = "orange"
          } else if (guess[1] === randomWord[i]) {
            form.elements[5].style.transition = "1s"
            form.elements[5].style.backgroundColor = "orange"
          } else if (guess[2] === randomWord[i]) {
            form.elements[6].style.transition = "1s"
            form.elements[6].style.backgroundColor = "orange"
          } else if (guess[3] === randomWord[i]) {
            form.elements[7].style.transition = "1s"
            form.elements[7].style.backgroundColor = "orange"
          }
        }

        if (guess[0] === randomWord[0]) {
          form.elements[4].style.transition = "1s"
          form.elements[4].style.backgroundColor = "rgb(0, 211, 0)"
        }

        if (guess[1] === randomWord[1]) {
          form.elements[5].style.transition = "1s"
          form.elements[5].style.backgroundColor = "rgb(0, 211, 0)"
        }

        if (guess[2] === randomWord[2]) {
          form.elements[6].style.transition = "1s"
          form.elements[6].style.backgroundColor = "rgb(0, 211, 0)"
        }

        if (guess[3] === randomWord[3]) {
          form.elements[7].style.transition = "1s"
          form.elements[7].style.backgroundColor = "rgb(0, 211, 0)"
        }

        guess = []

      }

      if (form.elements[8].value !== "" && form.elements[9].value !== "" && form.elements[10].value !== "" && form.elements[11].value !== "" && guess.length < 1) {

        guess.push(form.elements[8].value, form.elements[9].value, form.elements[10].value, form.elements[11].value)

        setIsGuess3Disabled(!isGuess3Disabled)

        for (let i = 0; i < 4; i++) {
          if (guess[0] === randomWord[i]) {
            form.elements[8].style.transition = "1s"
            form.elements[8].style.backgroundColor = "orange"
          } else if (guess[1] === randomWord[i]) {
            form.elements[9].style.transition = "1s"
            form.elements[9].style.backgroundColor = "orange"
          } else if (guess[2] === randomWord[i]) {
            form.elements[10].style.transition = "1s"
            form.elements[10].style.backgroundColor = "orange"
          } else if (guess[3] === randomWord[i]) {
            form.elements[11].style.transition = "1s"
            form.elements[11].style.backgroundColor = "orange"
          }
        }

        if (guess[0] === randomWord[0]) {
          form.elements[8].style.transition = "1s"
          form.elements[8].style.backgroundColor = "rgb(0, 211, 0)"
        }

        if (guess[1] === randomWord[1]) {
          form.elements[9].style.transition = "1s"
          form.elements[9].style.backgroundColor = "rgb(0, 211, 0)"
        }

        if (guess[2] === randomWord[2]) {
          form.elements[10].style.transition = "1s"
          form.elements[10].style.backgroundColor = "rgb(0, 211, 0)"
        }

        if (guess[3] === randomWord[3]) {
          form.elements[11].style.transition = "1s"
          form.elements[11].style.backgroundColor = "rgb(0, 211, 0)"
        }

        guess = []

      }

      if (form.elements[12].value !== "" && form.elements[13].value !== "" && form.elements[14].value !== "" && form.elements[15].value !== "" && guess.length < 1) {

        guess.push(form.elements[12].value, form.elements[13].value, form.elements[14].value, form.elements[15].value)

        setIsGuess4Disabled(!isGuess4Disabled)

        for (let i = 0; i < 4; i++) {
          if (guess[0] === randomWord[i]) {
            form.elements[12].style.transition = "1s"
            form.elements[12].style.backgroundColor = "orange"
          } else if (guess[1] === randomWord[i]) {
            form.elements[13].style.transition = "1s"
            form.elements[13].style.backgroundColor = "orange"
          } else if (guess[2] === randomWord[i]) {
            form.elements[14].style.transition = "1s"
            form.elements[14].style.backgroundColor = "orange"
          } else if (guess[3] === randomWord[i]) {
            form.elements[15].style.transition = "1s"
            form.elements[15].style.backgroundColor = "orange"
          }
        }

        if (guess[0] === randomWord[0]) {
          form.elements[12].style.transition = "1s"
          form.elements[12].style.backgroundColor = "rgb(0, 211, 0)"
        }

        if (guess[1] === randomWord[1]) {
          form.elements[13].style.transition = "1s"
          form.elements[13].style.backgroundColor = "rgb(0, 211, 0)"
        }

        if (guess[2] === randomWord[2]) {
          form.elements[14].style.transition = "1s"
          form.elements[14].style.backgroundColor = "rgb(0, 211, 0)"
        }

        if (guess[3] === randomWord[3]) {
          form.elements[15].style.transition = "1s"
          form.elements[15].style.backgroundColor = "rgb(0, 211, 0)"
        }

      }

      if (event.key === "Backspace" && form.elements[index - 1] !== form.elements[3] && form.elements[index - 1] !== form.elements[7] && form.elements[index - 1] !== form.elements[11]) {

        form.elements[index - 1].focus()
        form.elements[index - 1].value = ""

      } else if (event.key === "ArrowLeft" && form.elements[index - 1] !== form.elements[3] && form.elements[index - 1] !== form.elements[7] && form.elements[index - 1] !== form.elements[11]) {
        form.elements[index - 1].focus()
      } else if (event.key === "ArrowRight") {
        form.elements[index + 1].focus()
      } else if(event.key === "Spacebar") {
      } else {
        // guess1.push(form.element[index].value)
        // setTimeout(() => {
        //   console.log(form.element[index].value)
        // }, 1000)
        
        // console.log("GUESS ARRAY: ", guess1)

        form.elements[index + 1].focus()

      } 

      event.preventDefault()
    }, 1)

    if (guess.join("") === randomWord.join("") || (form.elements[12].value !== "" && form.elements[13].value !== "" && form.elements[14].value !== "" && form.elements[15].value !== "" && guess.length < 1)) {
      let guessSubtitle = document.getElementById("subtitle")
      if(guessSubtitle == null) {  
      } else {
        console.log("HITTING")
        guessSubtitle.innerText = `The correct word was ${randomWord.join("")}`
      }
    }

  }

  

  let rowInputs = [1, 2, 3, 4]

  return (
    <div className="landingPage">
      <h1>Gaette</h1>
      <h3 id="subtitle">Guess the 4 letter word!</h3>
      <p>If you get <span style={{ color: "rgb(0, 211, 0)" }}>██</span> it means that letter is in the word and in the correct position</p>
      <p>If you get <span style={{ color: "rgb(255, 184, 53)" }}>██</span> it means that letter is in the word but not in the right position</p>
      <form className="App" >
        
        <div className="row">{rowInputs.map((i) => <input key={i} disabled={isGuess1Disabled} onKeyDown={navigateInputs} className="RowInputs" id={`row1letter${i}`} type="text" maxLength={1} />)}</div>

        <div className="row">{rowInputs.map((i) => <input key={i} disabled={isGuess2Disabled} onKeyDown={navigateInputs} className="RowInputs" id={`row2letter${i}`} type="text" maxLength={1} />)}</div>

        <div className="row">{rowInputs.map((i) => <input key={i} disabled={isGuess3Disabled} onKeyDown={navigateInputs} className="RowInputs" id={`row3letter${i}`} type="text" maxLength={1} />)}</div>

        <div className="row">{rowInputs.map((i) => <input key={i} disabled={isGuess4Disabled} onKeyDown={navigateInputs} className="RowInputs" id={`row4letter${i}`} type="text" maxLength={1} />)}</div>
      </form>
    </div>
  );
}

export default App;
