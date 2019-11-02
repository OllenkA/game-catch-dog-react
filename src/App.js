import React from 'react';
import './App.css';
import SettingsContainer from "./components/Settings/SettingsContainer";
import MainContentComponent from "./components/MainContent/MainContentComponent";
import ResultsComponent from "./components/Results/ResultsComponent";
import HideMenu from "./components/HideMenu/HideMenu";
import {changeHiddenSettings} from "./redux/reducer";
import {connect} from "react-redux";


function App(props) {

    return <main className='App'>

        {props.isHiddenSettings
            ? <SettingsContainer/> : ''}

        <HideMenu onClick={props.changeHiddenSettings}/>
        <MainContentComponent/>
        <ResultsComponent/>
    </main>

}

const mapStateToProps = (state) => ({isHiddenSettings: state.main.isHiddenSettings});


export default connect(mapStateToProps, {changeHiddenSettings})(App);
