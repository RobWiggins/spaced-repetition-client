import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import WordList from '../../components/WordList/WordList';

class DashboardRoute extends Component {

  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }

  startLearning = () => {
    const { history } = this.props
    history.push('learn');
  }

  render() {
    return (
      <section>
        {/* <h2>Start Practicing</h2> */}
        <WordList startLearning={this.startLearning}/>
      </section>
    );
  }
}

export default withRouter(DashboardRoute)
