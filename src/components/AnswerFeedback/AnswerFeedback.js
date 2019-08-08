import React from 'react';
import Button from '../Button/Button';
import LanguageContext from '../../contexts/LanguageContext';
import './AnswerFeedback.css';

class AnswerFeedback extends React.Component {
  constructor() {
    super()
    this.state = {
      guess: 'learn',
      index : 0
    }
  }

  static contextType = LanguageContext;

  handleClick = () => {
    // Do stuff
  }

  getRandomWord = () => {
    let i = Math.floor(Math.random() * Math.floor(this.context.words.length));
    this.setState({ index: i });
  }

  renderMessage = () => {
    const correct = false;
    if (correct) {
      return <h3>'You were correct! :D'</h3>
    } else {
      return <h3>'Good try, but not quite right :('</h3>
    }
  }

  render() {
    console.log(this.context);
    return (
      <div className="AnswerFeedback">
        {this.renderMessage()}
        <p>The correct translation for '{this.context.words[this.state.index].original}' was '{this.context.words[this.state.index].translation}' and you chose (guess)!</p>
        <p className="total-score">Your total score is: {this.context.language.total_score}</p>
        <Button onClick={this.getRandomWord}>Try another word!</Button>
      </div>
    )
  }
}

export default AnswerFeedback;