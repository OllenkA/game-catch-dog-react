import React from 'react';
import './App.css';
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import Settings from "./components/Settings/Settings";

function App() {
    return (
        <div className="App">
            <Settings/>
            <MainContent/>
            <Footer/>
        </div>
    );
}

export default App;
