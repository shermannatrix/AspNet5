import React from 'react';
import './App.css';

import './App.css';
import { Header } from './Header';
import { HomePage } from './HomePage';

function App() {
    return (
        <div className="App">
            <Header />
            <HomePage />
        </div>
    );
}

/* <header className="App-header">
                <ProblemComponent />
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header> */

/* class ProblemComponent extends React.Component {
    render() {
        return <div ref="div" />;
    }
} */

export default App;
