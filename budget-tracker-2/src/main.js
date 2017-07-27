import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import AboutContainer from './component/about-container';
import DashboardContainer from './component/dashboard-container';

class App extends React.Component {
  render() {
    return (
      <main className='app'>
        <header>
          <h1>Budget Tracker</h1>
          <nav>
            <ul>
              <li><a href='/'> Dashboard </a></li>
              <li><a href='/about'> About </a></li>
            </ul>
          </nav>
        </header>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={DashboardContainer} />
            <Route exact path='/about' component={AboutContainer} />
          </div>
        </BrowserRouter>
        <h1>hello world</h1>
      </main>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
