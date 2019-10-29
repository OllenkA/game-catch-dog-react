import React from 'react';
import {connect} from "react-redux";
import {changeLevelGame, changePhoto, setTimeGame} from "../../redux/reducer";
import Settings from "./Settings";



function SettingsContainer(props) {

    const getLevelGame = (e) => {
        let level = e.target.value;
        props.changeLevelGame(+level);
    };

    const getPhoto = (e) => {
        let photoDog = e.target.value;
        props.changePhoto(photoDog)
    };

    const addTime = (e) => {
        let timeGame = e.target.value;
        props.setTimeGame(+timeGame);
    };

    return <Settings getLevelGame={getLevelGame}
                     getPhoto={getPhoto}
                     addTime={addTime}
                     dogs={props.dogs}
                     levelArray={props.levelArray}/>
}

let mapStateToProps = (state) => ({
    dogs: state.main.dogs,
    levelArray: state.main.levelArray,
});

export default connect(mapStateToProps, {changeLevelGame, changePhoto, setTimeGame})(SettingsContainer);