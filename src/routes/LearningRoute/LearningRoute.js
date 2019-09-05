import React, { Component } from 'react'
import TokenService from '../../services/token-service.js'
import LanguageService from '../../services/language-api-service'
import LearningContext from '../../contexts/LearningContext';
import config from '../../config.js'
import AnswerFeedback from '../../components/AnswerFeedback/AnswerFeedback'
import './LearningRoute.css';


class LearningRoute extends Component {
  // only change context, not change state 

  static contextType = LearningContext;

  /* calls api service, then setting context state */
  handleSubmit(guess) {
    console.log('guess: ', guess);
    LanguageService.submitGuess(guess)
    .then(guessRes => {
      console.log(guessRes);
      this.context.setPrevWord(this.context.nextWord);
      this.context.clearError();
      this.context.setTotalScore(guessRes.totalScore);
      this.context.setWordCorrectCount(guessRes.wordCorrectCount);
      this.context.setWordIncorrectCount(guessRes.wordIncorrectCount);
      this.context.setNextWord(guessRes.nextWord)
      this.context.setAnswer(guessRes.answer);
      this.context.setGuess(guess);
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

  render() {
    console.log(this.context);
    return (
      <section id="learning-container">
      {(!this.context.isResultDisplayed ?  
      <section>
        <div className="translate-container">
          <h2 className="instructions-header">Translate the word:</h2><span>{this.context.nextWord}</span>
        </div>
        <form htmlFor='guessForm'
          id="submit-form"
          onSubmit={e => {
            e.preventDefault();
            this.handleSubmit(e.target.guessForm.value);
          }}
         >
           <label htmlFor="learn-guess-input">What's the translation for this word?</label>
          <input type="text" name='guessForm' id="learn-guess-input" required></input>
          <button type="submit">Submit your answer</button>
        </form> 
        </section> : <AnswerFeedback /> )}
      <div  className="DisplayScore">
        <p className="total-score word-score-keeper">Your total score is: {this.context.totalScore}</p>
      </div>
      <p className="word-score-keeper">You have answered this word correctly {this.context.wordCorrectCount} times.</p>
      <p className="word-score-keeper">You have answered this word incorrectly {this.context.wordIncorrectCount} times.</p>
      </section>
    );
  }
}

export default LearningRoute
