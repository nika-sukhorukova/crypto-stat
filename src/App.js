import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles.css';
import Header from './components/header';
import Footer from './components/footer';
import Dashboard from './components/dashboard';
import History from './components/history';
import CoinPage from './components/coin-page';

function App() {
    return (
        <div>
            <Router>
                <Header />
                <Route exact path='/' component={Dashboard} />
                <Route path='/history' component={History} />
                <Route path='/coin/:id' component={CoinPage}/>
            </Router>
            <Footer />
        </div>
    );
}

export default App;
