import React, { useState } from 'react';
import './App.css';
import AppEnglish from './components/AppEnglish';
import AppFr from './components/AppFr';

function App() {

  const [isAppEng, setIsAppEng] = useState(true)

  return (
    <>
    <div id="engAndFrBtns">
        <p><a className="languageLink" href="#en" onClick={() => setIsAppEng(true)}>Eng</a> / <a className="languageLink" href="#fr" onClick={() => setIsAppEng(false)}>Fr</a></p>
    </div>
    {isAppEng ?
      <AppEnglish />
    :
      <AppFr />
    }      
    </>
  )

}

export default App;
