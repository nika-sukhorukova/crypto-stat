import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './common-styles.css';

import Header from '../src/header/index';
import Footer from '../src/footer/index';
import Dashboard from '../src/dashboard/index';
import History from '../src/history/index';



function App() {
  return (
    <div>
      <Router>
        <Header />
              <Route exact path='/' component={Dashboard}/>
              <Route path='/history' component={History}/>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
