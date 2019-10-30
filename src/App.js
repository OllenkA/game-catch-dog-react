import React from 'react';
import './App.css';
import SettingsContainer from "./components/Settings/SettingsContainer";
import MainContentComponent from "./components/MainContent/MainContentComponent";
import ResultsComponent from "./components/Results/ResultsComponent";
import HideImage from "./components/HideImage/HideImage";


function App(props) {

    return <main className='App'>

        {props.isHiddenSettings
            ? <SettingsContainer/> : ''}

        <HideImage changeHiddenSettings={props.changeHiddenSettings}/>
        <MainContentComponent/>
        <ResultsComponent/>
    </main>
}

export default App;
