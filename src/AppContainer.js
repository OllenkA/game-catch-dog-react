import React from 'react';
import './App.css';
import App from "./App";
import {connect} from "react-redux";
import {changeHiddenSettings} from "./redux/reducer";


function AppContainer(props) {

    return <App isHiddenSettings={props.isHiddenSettings}
                changeHiddenSettings={props.changeHiddenSettings}/>
}

let mapStateToProps = (state) => ({
    isHiddenSettings: state.main.isHiddenSettings,

});

export default connect(mapStateToProps, {changeHiddenSettings})(AppContainer);
