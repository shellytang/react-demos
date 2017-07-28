import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import AboutContainer from './component/about-container';
import DashboardContainer from './component/dashboard-container';

class App extends React.Component {
  //constructor
  constructor(props) {
    super(props);
    this.state = {
      total: 400,
      expenses: [],
    };
    this.getApp = this.getApp.bind(this);
  }
  //hooks
  componentDidUpdate() {
    console.log('___STATE___', this.state);
  }

  //methods
  getApp() {
    return {
      state: this.state,
      setState: this.setState.bind(this),
    };
  }

  render() {
    return (
      <main className='app'>
        <BrowserRouter>
          <div>
            <Route exact path='/'
              component={() => <DashboardContainer app={this.getApp()}/>}/>
            <Route exact path='/about' component={AboutContainer} />
          </div>
        </BrowserRouter>
        <h1>hello world</h1>
      </main>
    );
  }
}

//identical statements
// <DashboardContainer app={this.getApp()}/>
// new DashboardContainer({app: this.getApp()});

ReactDom.render(<App />, document.getElementById('root'));
