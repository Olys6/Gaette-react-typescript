import React, { useState } from 'react';


// let guessSubtitle = "Guess the 4 letter word!"

const words = [
    "ante", "ayez", "fete",
    "avis", "choc", "frai",
    "fume", "fort", "golf",
    "goal", "gene", "plus",
    "epar", "film", "fion",
    "faux", "fars", "faut",
    "jeux", "jour", "fait",
    "juin", "nuit", "inde",
    "dine", "donc", "dire",
    "doux", "dieu", "amis",
    "arts", "cave", "vole",
    "vert", "voit", "mots",
    "toux", "tire", "taxe",
    "musc", "prie", "noix",
    "oeil", "oeuf", "ogre",
    "nage", "noir", "neuf"
]

const randomWord = words[Math.floor(Math.random() * words.length)].split("")
// console.log("RANDOM WORD: ", randomWord.join(""))

let subtitle = "Devine le mot de 4 lettres!"

const AppFr = () => {

    // const [guessSubtitle, setGuessSubtitle] = useState("Guess the 4 letter word!")

    let guess: String[] = [];
    const [isGuess1Disabled, setIsGuess1Disabled] = useState(false)

    // let guess2: String[] = [];
    const [isGuess2Disabled, setIsGuess2Disabled] = useState(false)

    // let guess3: String[] = [];
    const [isGuess3Disabled, setIsGuess3Disabled] = useState(false)

    // let guess4: String[] = [];
    const [isGuess4Disabled, setIsGuess4Disabled] = useState(false)

    const [showAnswer, setShowAnswer] = useState(false)

    const navigateInputs = (event: any) => {

        const form = event.target.form
        const index = [...form].indexOf(event.target)

        setTimeout(() => {

            // test

            if (form.elements[0].value !== "" && form.elements[1].value !== "" && form.elements[2].value !== "" && form.elements[3].value !== "" && guess.length < 1) {
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

                if (guess[0] === randomWord[0]) {
                    form.elements[0].style.transition = "1s"
                    form.elements[0].style.backgroundColor = "rgb(0, 211, 0)"
                }

                if (guess[1] === randomWord[1]) {
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

                if (guess[0] === randomWord[0] && guess[1] === randomWord[1] && guess[2] === randomWord[2] && guess[3] === randomWord[3]) {
                    // console.log("HITTING")
                    setShowAnswer(true)
                }

                // setTimeout(() => {
                guess = []
                // },1)

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

                if (guess[0] === randomWord[0] && guess[1] === randomWord[1] && guess[2] === randomWord[2] && guess[3] === randomWord[3]) {
                    // console.log("HITTING")
                    setShowAnswer(true)
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

                if (guess[0] === randomWord[0] && guess[1] === randomWord[1] && guess[2] === randomWord[2] && guess[3] === randomWord[3]) {
                    // console.log("HITTING")
                    setShowAnswer(true)
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

                setShowAnswer(true)

            }

            if (event.key === "Backspace") {
                if (form.elements[index - 1] === form.elements[3] && form.elements[0].value !== "" && form.elements[1].value !== "" && form.elements[2].value !== "" && form.elements[3].value !== "") {
                    form.elements[4].focus()
                } else if (form.elements[index - 1] === form.elements[7] && form.elements[4].value !== "" && form.elements[5].value !== "" && form.elements[6].value !== "" && form.elements[7].value !== "" && guess.length < 1) {
                    form.elements[8].focus()
                } else if (form.elements[index - 1] === form.elements[11] && form.elements[8].value !== "" && form.elements[9].value !== "" && form.elements[10].value !== "" && form.elements[11].value !== "" && guess.length < 1) {
                    form.elements[12].focus()
                } else {
                    form.elements[index - 1].focus()
                    form.elements[index - 1].value = ""
                }

            } else {
                form.elements[index + 1].focus()
            }

            event.preventDefault()
        }, 1)

        if (guess.join("") === randomWord.join("") || (form.elements[12].value !== "" && form.elements[13].value !== "" && form.elements[14].value !== "" && form.elements[15].value !== "" && guess.length < 1)) {
            let guessSubtitle = document.getElementById("subtitle")
            if (guessSubtitle == null) {
            } else {
                // console.log("HITTING")
                guessSubtitle.innerText = `The correct word was ${randomWord.join("")}`
            }
        }

        if (form.elements[12].value !== "" && form.elements[13].value !== "" && form.elements[14].value !== "" && form.elements[15].value !== "" && guess.length < 1) {
            subtitle = `The 4 letter word was ${randomWord}`
        }

    }

    if (showAnswer) {
        subtitle = `Le mot étais ${randomWord.join("").toUpperCase()}`
    }


    let rowInputs = [1, 2, 3, 4]

    const keyDown = (event: any) => {

        const form = event.target.form
        const index = [...form].indexOf(event.target)

        if (event.key === "Backspace") {
            if (form.elements[index - 1] === form.elements[3] && form.elements[0].value !== "" && form.elements[1].value !== "" && form.elements[2].value !== "" && form.elements[3].value !== "") {
                form.elements[4].focus()
            } else if (form.elements[index - 1] === form.elements[7] && form.elements[4].value !== "" && form.elements[5].value !== "" && form.elements[6].value !== "" && form.elements[7].value !== "" && guess.length < 1) {
                form.elements[8].focus()
            } else if (form.elements[index - 1] === form.elements[11] && form.elements[8].value !== "" && form.elements[9].value !== "" && form.elements[10].value !== "" && form.elements[11].value !== "" && guess.length < 1) {
                form.elements[12].focus()
            } else if (form.elements[index].value !== "") {

            } else {
                form.elements[index - 1].focus()
                form.elements[index - 1].value = ""
            }

        } else if (event.key === "ArrowLeft") {
            if (form.elements[index - 1] === form.elements[3] && form.elements[0].value !== "" && form.elements[1].value !== "" && form.elements[2].value !== "" && form.elements[3].value !== "") {
                form.elements[4].focus()
            } else if (form.elements[index - 1] === form.elements[7] && form.elements[4].value !== "" && form.elements[5].value !== "" && form.elements[6].value !== "" && form.elements[7].value !== "" && guess.length < 1) {
                form.elements[8].focus()
            } else if (form.elements[index - 1] === form.elements[11] && form.elements[8].value !== "" && form.elements[9].value !== "" && form.elements[10].value !== "" && form.elements[11].value !== "" && guess.length < 1) {
                form.elements[12].focus()
            } else {
                form.elements[index - 1].focus()
            }
        } else if (event.key === "ArrowRight") {
            form.elements[index + 1].focus()
        }

    }

    return (
        <div className="landingPage">
            <h1>Gætte</h1>
            <h3 id="subtitle">{subtitle}</h3>
            <div className="rules">
                <p className="rulesDesc">Si une case deviens <span style={{ color: "rgb(0, 211, 0)" }}>██</span> sa veut dire que la letter et dans le mot et dans la bonne position</p>
                <p className="rulesDesc">Si une case deviens <span style={{ color: "rgb(255, 184, 53)" }}>██</span> sa veut dire que la letter et dans le mot mais pas dans la bonne position</p>
            </div>
            <form className="App" >

                <div className="row">{rowInputs.map((i) => <input key={i} disabled={isGuess1Disabled} onKeyDown={keyDown} onKeyPress={navigateInputs} className="RowInputs" id={`row1letter${i}`} type="text" maxLength={1} />)}</div>

                <div className="row">{rowInputs.map((i) => <input key={i} disabled={isGuess2Disabled} onKeyDown={keyDown} onKeyPress={navigateInputs} className="RowInputs" id={`row2letter${i}`} type="text" maxLength={1} />)}</div>

                <div className="row">{rowInputs.map((i) => <input key={i} disabled={isGuess3Disabled} onKeyDown={keyDown} onKeyPress={navigateInputs} className="RowInputs" id={`row3letter${i}`} type="text" maxLength={1} />)}</div>

                <div className="row">{rowInputs.map((i) => <input key={i} disabled={isGuess4Disabled} onKeyDown={keyDown} onKeyPress={navigateInputs} className="RowInputs" id={`row4letter${i}`} type="text" maxLength={1} />)}</div>
            </form>
            {showAnswer ?
                <a href="/" id="playAgainBtn">
                    <div>
                        Rejouer
                    </div>
                </a>
                :
                <>
                </>
            }
        </div>
    )
}

export default AppFr