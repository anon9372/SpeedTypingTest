
import { useState, useEffect, useRef } from "react"

function useWordGame() {

    const STARTING_TIME = 30;

    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(5)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const textBoxRef = useRef(null)



    // We are getting the event info everytime a character is entered into 
    //textarea and the value that is entered is stored in const value and is updated in the setState
    function handleChange(e) {
        const value = e.target.value
        setText(value)
    }

    function calculateWordCount(text) {
        const wordsArr = text.trim().split(" ") // JS code to count the words and trim of extra space
        return wordsArr.filter(word => word !== "").length // JS code to filter out or to not consider "" as a word cound
        // console.log(wordsArr)

    }

    function startClock() {
        setIsTimeRunning(true)
        setTimeRemaining(STARTING_TIME)
        setText("")
        textBoxRef.current.disabled = false
        textBoxRef.current.focus()
    }

    function endGame() {
        setIsTimeRunning(false)
        const numWords = calculateWordCount(text)
        // console.log(numWords)
        setWordCount(numWords)
    }


    useEffect(() => {
        if (isTimeRunning && timeRemaining > 0) {
            setTimeout(() => {
                setTimeRemaining(prevTime => prevTime - 1)

            }, 1000)
        } else if (timeRemaining === 0) {
            endGame()
        }


    }, [timeRemaining, isTimeRunning])


    return { textBoxRef, handleChange, text, isTimeRunning, timeRemaining, startClock, wordCount }
    // console.log(text)
}

export default useWordGame