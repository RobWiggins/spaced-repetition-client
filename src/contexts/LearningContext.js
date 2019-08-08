import React, { Component } from 'react'

const initialState = {
  totalScore: 0,
  wordCorrectCount: 0,
  wordIncorrectCount: 0,
  nextWord: null,
  guess: null,
  prevWord: null,
  isCorrect: null,
  answer: null,
  error: null,
  isResultDisplayed: false,
}

const LearningContext = React.createContext({
  ...initialState,
  setError: () => { },
  clearError: () => { },
  setNextWord: () => { },
  setTotalScore: () => { },
  setWordCorrectCount: () => { },
  setWordIncorrectCount: () => { },
  setGuess: () => { },
  setAnswer: () => { },
  setIsCorrect: () => { },
  reset: () => { },
  setIsResultDisplayed: () => { },
})

export default LearningContext

export class LearningProvider extends Component {
  state = {
    ...initialState,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }
  
  clearError = () => {
    this.setState({ error: null })
  }
  
  setTotalScore = totalScore => {
    this.setState({ totalScore })
  }
  
  setWordCorrectCount = wordCorrectCount => {
    this.setState({ wordCorrectCount })
  }
  
  setWordIncorrectCount = wordIncorrectCount => {
    this.setState({ wordIncorrectCount })
  }
  
  setNextWord = nextWord => {
    this.setState({ nextWord })
  }
  
  setGuess = guess => {
    this.setState({ guess })
  }
  
  // TODO what is this needed for?
  setPrevWord = prevWord => {
    this.setState({ prevWord })
  }
  
  setIsCorrect = isCorrect => {
    this.setState({ isCorrect })
  }
  
  setAnswer = answer => {
    this.setState({ answer })
  }
  
  reset = () => {
    this.setState({
      ...initialState,
    })
  }

  setIsResultDisplayed = (bool) => {
    this.setState({ isResultDisplayed: bool})
  }
  
  render() {
    const value = {
      // values
      totalScore: this.state.totalScore,
      wordCorrectCount: this.state.wordCorrectCount,
      wordIncorrectCount: this.state.wordIncorrectCount,
      nextWord: this.state.nextWord,
      guess: this.state.guess,
      prevWord: this.state.prevWord,
      isCorrect: this.state.isCorrect,
      answer: this.state.answer,
      error: this.state.error,
      isResultDisplayed: this.state.isResultDisplayed,
      // methods
      setError: this.setError,
      clearError: this.clearError,
      setTotalScore: this.setTotalScore,
      setWordCorrectCount: this.setWordCorrectCount,
      setWordIncorrectCount: this.setWordIncorrectCount,
      setNextWord: this.setNextWord,
      setGuess: this.setGuess,
      setPrevWord: this.setPrevWord,
      setIsCorrect: this.setIsCorrect,
      setAnswer: this.setAnswer,
      reset: this.reset,
      setIsResultDisplayed: this.setIsResultDisplayed,
    }
    return (
      <LearningContext.Provider value={value}>
        {this.props.children}
      </LearningContext.Provider>
    )
  }
}