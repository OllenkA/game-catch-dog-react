import React from 'react';
import './App.css';
// import MainContent from "./components/MainContent/MainContent";
import Results from "./components/Results/Results";
import SettingsContainer from "./components/Settings/SettingsContainer";
import MainContentComponent from "./components/MainContent/MainContentComponent";

function App() {
    return <main className="App">
            <SettingsContainer/>
            <MainContentComponent/>
            <Results/>
        </main>
}

export default App;
