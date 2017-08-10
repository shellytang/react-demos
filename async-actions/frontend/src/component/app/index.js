import React from 'react';
import appStoreCreate from '../../lib/app-store-create.js';
import { BrowserRouter, Route } from 'react-router-dom';

const store = appStoreCreate();

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Provider sotre={store}>
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
