import './style/main.scss';

// npm modules
import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

//app modules
import AboutContainer from './component/about-container';
import DashboardContainer from './component/dashboard-container';

//holds all application state
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      budget: 4000,
      expenses: [],
    };
    this.getApp = this.getApp.bind(this);
  }

  getApp() {
    return {
      state: this.state,
      setState: this.setState.bind(this),
    };
  }

  componentDidUpdate() {
    console.log(':::::STATE::::', this.state);
  }

  render() {
    return (
      <main>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={AboutContainer} />
            <Route exact path='/about' component={AboutContainer} />
            <Route
              exact path='/dashboard'
              component={() => <DashboardContainer app={this.getApp()} />}
            />
          </div>
        </BrowserRouter>
      </main>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
