import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles.css';
import Header from './components/header';
import Footer from './components/footer';
import Dashboard from './components/dashboard';
import History from './components/history';
import CoinPage from './components/coin-page';
import ErrorBoundary from './components/auxiliary-components/error-boundary';

function App() {
    return (
        <div>
            <ErrorBoundary>
                <Router>
                    <Header />
                    <Route exact path='/' component={Dashboard} />
                    <Route path='/history' component={History} />
                    <Route path='/coin/:id' component={CoinPage}/>
                </Router>
                <Footer />
            </ErrorBoundary>
        </div>
    );
}

export default App;
