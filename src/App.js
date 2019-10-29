import React from 'react';
import './App.css';
import MainContent from "./components/MainContent/MainContent";
import Results from "./components/Results/Results";
import SettingsContainer from "./components/Settings/SettingsContainer";

function App() {
    return <main className="App">
            <SettingsContainer/>
            <MainContent/>
            <Results/>
        </main>
}

export default App;
