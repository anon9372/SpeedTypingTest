import React, { useState, useEffect, usrRef, useRef } from "react"
import "../src/App.css"
import useWordGame from "./hook/useWordGame";

function App() {

  const { textBoxRef,
    handleChange,
    text,
    isTimeRunning,
    timeRemaining,
    startClock,
    wordCount } = useWordGame()

  return (
    <div className="App">

      <h1>How fast do you type?</h1>
      <textarea
        value={text}
        onChange={handleChange}
        disabled={!isTimeRunning}
        ref={textBoxRef}
      />

      <h4>Time left: {timeRemaining}</h4>

      <button onClick={startClock}
        disabled={isTimeRunning}
      >Start Game</button>
      <h1>Word Count: {wordCount}</h1>

    </div>
  );
}

export default App;
