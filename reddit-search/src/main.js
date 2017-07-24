import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import superagent from 'superagent';

const API_URL = 'http://www.reddit.com/r';
//* App - manage app state
//  *SearchForm -- collect user input
//  *SearchResultsList -- display reddit articles

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <p>cool</p>;
  }
}

class SearchResultsList extends React.Component {
  render() {
    return <p>hi</p>;
  }
}
//holds all application state
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: null,
      searchErrorMessage: null,
    };
    this.redditBoardFetch = this.redditBoardFetch.bind(this);
  }

  componentDidUpdate() {
    console.log(':::::STATE::::', this.state);
  }

  redditBoardFetch(board) {
    superagent.get(`${API_URL}/${board}.json`)
      .then(res => {
        console.log('request success', res);
        this.setState({
          results: res.body,
          searchErrorMessage: null,
        });
      })
      .catch(err => {
        console.error(err);
        this.setState({
          results: null,
          searchErrorMessage: `Unable to find the reddit board ${board}`,
        });
      });
  }

  render() {
    return (
      <main>
        <h1>cool beans</h1>
        <SearchForm />
        <SearchResultsList />
      </main>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
