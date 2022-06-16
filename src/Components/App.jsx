import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import FlexBOX from './flexbox';
import Footer from './footer';

function App() {
    return (
        <div>
            <Header heading="Welcome to the Dashboard!" />
            <FlexBOX />
            <Footer />
        </div>
    );
}

export default App;