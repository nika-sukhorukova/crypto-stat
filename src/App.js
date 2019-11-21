import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles.css';
import Header from '../src/components/header/index';
import Footer from '../src/components/footer/index';
import Dashboard from '../src/components/dashboard/index';
import History from '../src/components/history/index';



function App() {
    return (
        <div>
            <Router>
            <Header />
                <Route exact path='/' component={Dashboard} />
                <Route path='/history' component={History} />
            </Router>
            <Footer />
        </div>
    );
}

export default App;
