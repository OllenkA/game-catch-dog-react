import React from 'react';
import './App.css';
import SettingsContainer from "./components/Settings/SettingsContainer";
import MainContentComponent from "./components/MainContent/MainContentComponent";
import ResultsComponent from "./components/Results/ResultsComponent";

function App() {
    return <main className="App">
            <SettingsContainer/>
            <MainContentComponent/>
            <ResultsComponent/>
        </main>
}

export default App;
