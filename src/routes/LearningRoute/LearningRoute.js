import React, { Component } from 'react'
import LanguageService from '../../services/language-api-service'
import LearningContext from '../../contexts/LearningContext';
import AnswerFeedback from '../../components/AnswerFeedback/AnswerFeedback'
import './LearningRoute.css';


class LearningRoute extends Component {
  // only change context, not change state 

  static contextType = LearningContext;

  /* calls api service, then setting context state */
  handleSubmit(guess) {
    LanguageService.submitGuess(guess)
    .then(guessRes => {
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
    return (
      <section id="learning-container">
      {(!this.context.isResultDisplayed ?  
      <section className="learning-card" role="form">
        <div className="translate-container">
          <span className="eyebrow">Active prompt</span>
          <h2 className="instructions-header">Translate the word</h2>
          <span className="prompt-word">{this.context.nextWord}</span>
        </div>
        <form htmlFor='guessForm'
          id="submit-form"
          onSubmit={e => {
            e.preventDefault();
            this.handleSubmit(e.target.guessForm.value);
          }}
         >
           <label htmlFor="learn-guess-input">What&apos;s the translation?</label>
          <input type="text" name='guessForm' id="learn-guess-input" required autoComplete="off"></input>
          <button type="submit">Submit your answer</button>
        </form> 
        </section> : <AnswerFeedback /> )}
      <div className="DisplayScore">
        <p className="total-score word-score-keeper"><span>{this.context.totalScore}</span>Total score</p>
      </div>
      {!this.context.isResultDisplayed && (
        <div className="word-session-stats">
          <p className="word-score-keeper"><span>{this.context.wordCorrectCount}</span>Correct for this word</p>
          <p className="word-score-keeper"><span>{this.context.wordIncorrectCount}</span>Missed for this word</p>
        </div>
      )}
      </section>
    );
  }
}

export default LearningRoute
