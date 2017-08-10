import React from 'react';
import {Provider} from 'react-redux';
import appStoreCreate from '../../lib/app-store-create.js';
import { BrowserRouter, Route } from 'react-router-dom';

const store = appStoreCreate();

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Provider store={store}>
          <BrowserRouter>
            <main>
              <h1>cool beans</h1>
            </main>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
