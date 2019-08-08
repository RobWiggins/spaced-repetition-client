import React, { Component } from 'react'
import TokenService from '../../services/token-service.js'
import LanguageService from '../../services/language-api-service'
import LearningContext from '../../contexts/LearningContext';
import config from '../../config.js'


class LearningRoute extends Component {
  // only change context, not change state 
  state = {
    currHead: {},
  }

  static contextType = LearningContext;

  componentDidMount() {
    LanguageService.getHead() // only call once, used to set head of list aka first word asked
      .then(data => {
        if (!data) {
          console.error(data);
          throw new Error('Oh no! Something went wrong with getting next word.')
        }
        console.log(data);
        this.setState({currHead: data});
      })
      .catch(e => {
        console.error(e);
      })
  }

  // TODO METHOD TO update word to next word by referencing this.context.nextWord etc. 

  handleSubmit = (e) => {
    e.preventDefault();
    let guess = e.target.guessForm.value;
    console.log(guess);
  }

  render() {
    // console.log(this.context.words);
    // THIS IS WRONG - CHANGE
    return (
      <section>
        <h2>Translate the Word:</h2>
        <h3>{this.state.currHead.nextWord}</h3>
        <form htmlFor='guessForm'
          id="submit-form"
          onSubmit={e => {
            e.preventDefault();
            LanguageService.submitGuess(e.target.guessForm.value);
          }}
         >
          <input type="text" name='guessForm' id="guessForm" required></input>
          <button>Submit Guess</button>
        </form>
      </section>
    );
  }
}

export default LearningRoute
