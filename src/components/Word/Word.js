import React from 'react';

import './Word.css';

class Word extends React.Component {
  render() {
    return (
      <div className="Word">
        <h4>{this.props.word.original}</h4>
        <p>correct answer count: {this.props.word.correct_count}</p>
        <p>incorrect answer count: {this.props.word.incorrect_count}</p>
      </div>
    )
  }
}

export default Word;