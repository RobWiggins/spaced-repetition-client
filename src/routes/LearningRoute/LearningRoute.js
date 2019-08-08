import React, { Component } from 'react'
import TokenService from '../../services/token-service.js'
import LanguageService from '../../services/language-api-service'
import LearningContext from '../../contexts/LearningContext';
import config from '../../config.js'
import AnswerFeedback from '../../components/AnswerFeedback/AnswerFeedback'


class LearningRoute extends Component {
  // only change context, not change state 

  static contextType = LearningContext;

  /* calls api service, then setting context state */
  handleSubmit(guess) {
    console.log('guess: ', guess);
    LanguageService.submitGuess(guess)
    .then(guessRes => {
      console.log(guessRes);
      this.context.clearError();
      this.context.setTotalScore(guessRes.totalScore);
      this.context.setWordCorrectCount(guessRes.wordCorrectCount);
      this.context.setWordIncorrectCount(guessRes.wordIncorrectCount);
      this.context.setNextWord(guessRes.nextWord)
      this.context.setAnswer(guessRes.answer);
      this.context.setGuess(guess);
      // this.context.setPrevWord('HOW TO SET THIS? Implement.')
      this.context.setIsCorrect(guessRes.isCorrect);
      this.context.setIsResultDisplayed(true);
    })
  }

  componentDidMount() {
    LanguageService.getHead() // only call once, used to set head of list aka first word asked
      .then(data => {
        if (!data) {
          console.error(data);
          throw new Error('Oh no! Something went wrong with getting next word.')
        }
        console.log('data did mount: ', data);
        this.context.setNextWord(data.nextWord)
        this.context.setTotalScore(data.totalScore);
        this.context.setWordCorrectCount(data.wordCorrectCount);
        this.context.setWordIncorrectCount(data.wordIncorrectCount);
      })
      .catch(e => {
        console.error(e);
      })
  }

  // TODO METHOD TO update word to next word by referencing this.context.nextWord etc. 

  render() {
    console.log(this.context);
    return (
      <section id="learning-container">
      {(!this.context.isResultDisplayed ?  
      <section>
        <h2>Translate the Word:</h2>
        <h3>{this.context.nextWord}</h3>
        <form htmlFor='guessForm'
          id="submit-form"
          onSubmit={e => {
            e.preventDefault();
            this.handleSubmit(e.target.guessForm.value);
          }}
         >
          <input type="text" name='guessForm' id="guessForm" required></input>
          <button>Submit Guess</button>
        </form> 
        </section> : <AnswerFeedback /> )}
      <p>total score: {this.context.totalScore}</p>
      <p>word guessed correctly: {this.context.wordCorrectCount}</p>
      <p>word guessed incorrectly: {this.context.wordIncorrectCount}</p>

      
      </section>
    );
  }
}

export default LearningRoute
