import React from 'react';
import Button from '../Button/Button';
import LanguageContext from '../../contexts/LanguageContext';
import LearningContext from '../../contexts/LearningContext';
import './AnswerFeedback.css';

class AnswerFeedback extends React.Component {

  static contextType = LearningContext;

  handleClick = () => {
    this.context.setIsResultDisplayed(false);
  }

  renderMessage = () => {
    const correct = true;
    if (correct) {
      return <h3>'You were correct! :D'</h3>
    } else {
      return <h3>'Good try, but not quite right :('</h3>
    }
  }

  render() {
    console.log(this.context);
    return (
      <section id="feedback">
        <p>Results for our next word: {this.context.nextWord}</p>
        <div className="AnswerFeedback">
          {this.renderMessage()}
          <p>The correct translation for '{this.context.nextWord}' was '{this.context.answer}' and you chose '{this.context.guess}'!</p>
         <p className="total-score">Your total score is: {this.context.totalScore}</p>
         <Button onClick={this.handleClick}>Try another word!</Button>
       </div>
    </section>
    );
  }
}

export default AnswerFeedback;