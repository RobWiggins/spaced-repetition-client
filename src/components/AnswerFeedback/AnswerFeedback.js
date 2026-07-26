import React from 'react';
import Button from '../Button/Button';
import LearningContext from '../../contexts/LearningContext';
import './AnswerFeedback.css';

class AnswerFeedback extends React.Component {

  static contextType = LearningContext;

  handleClick = () => {
    this.context.setIsResultDisplayed(false);
  }

  renderMessage = () => {
    if (this.context.isCorrect) {
      return <h2>You were correct!</h2>
    } else {
      return <h2>Good try, not quite right.</h2>
    }
  }

  render() {
    const resultClass = this.context.isCorrect ? 'is-correct' : 'is-incorrect';

    return (
      <section id="feedback" className={resultClass}>
        <div className="DisplayFeedback">
          <span className="feedback-badge">
            {this.context.isCorrect ? 'Correct' : 'Review'}
          </span>
          {this.renderMessage()}
          <div className="feedback-summary">
            <p>
              <span>Prompt</span>
              <strong>{this.context.prevWord}</strong>
            </p>
            <p>
              <span>Answer</span>
              <strong>{this.context.answer}</strong>
            </p>
            <p>
              <span>Your guess</span>
              <strong>{this.context.guess}</strong>
            </p>
          </div>
          <Button onClick={this.handleClick}>Try another word!</Button>
        </div>
    </section>
    );
  }
}

export default AnswerFeedback;
