import React from 'react';
import './Word.css';

class Word extends React.Component {

  render() {
    return (
      <div className="Word">
        <div className="word-token">
          <span className="word-letter" aria-hidden="true">
            {this.props.word.original.charAt(0).toUpperCase()}
          </span>
          <h4>{this.props.word.original}</h4>
        </div>
        <div className="word-stats">
          <p className="word-stat word-stat-correct">
            <span>{this.props.word.correct_count}</span>
            correct
          </p>
          <p className="word-stat word-stat-incorrect">
            <span>{this.props.word.incorrect_count}</span>
            missed
          </p>
        </div>
      </div>
    )
  }
}

export default Word;
