import React from 'react';
import styles from './Settings.module.css';
import {connect} from "react-redux";
import {changeLevelGame, changePhoto, setTimeGame} from "../../redux/reducer";
import dog from '../../assets/Dog.jpg';
import dog1 from '../../assets/dog1.jpg';
import dog2 from '../../assets/dog2.jpg';
import dog3 from '../../assets/dog3.jpg';


function Settings(props) {

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
        // props.doEmptyValue('')
    };

    return <aside>
        <h2>Settings</h2>
        <fieldset className={styles.level}>
            <legend><h3>Enter time game:</h3></legend>
            <label><input className={styles.time} onChange={addTime}
                          placeholder={'Please, enter time...'}/>
            </label>
        </fieldset>
        <fieldset className={styles.level}>
            <legend><h3>Choose difficulty level:</h3></legend>
            <label>EASY: <input type='radio'
                                onChange={getLevelGame}
                                name='level'
                                value='2000'/></label>

            <label>Middle: <input type='radio'
                                  onChange={getLevelGame}
                                  name='level' value='1500'/></label>
            <label>Complex: <input type='radio'
                                   onChange={getLevelGame}
                                   name='level' value='1000'/></label>
        </fieldset>
        <fieldset className={styles.img}>
            <legend><h3>Victim photo selection:</h3></legend>
            <label>
                <img src={dog} alt={'dog'} className={styles.dog}/>
                <input type='radio'
                       onChange={getPhoto}
                       name='photo' value='dog'/>
            </label>
            <label>
                <img src={dog1} alt={'dog'} className={styles.dog}/>
                <input type='radio'
                       onChange={getPhoto}
                       name='photo' value='dog1'/>
            </label>
            <label>
                <img src={dog2} alt={'dog'} className={styles.dog}/>
                <input type='radio'
                       onChange={getPhoto}
                       name='photo' value='dog2'/>
            </label>
            <label>
                <img src={dog3} alt={'dog'} className={styles.dog}/>
                <input type='radio'
                       onChange={getPhoto}
                       name='photo' value='dog3'/>
            </label>
        </fieldset>
        <button className={styles.settings}>
            Reset all settings
        </button>
    </aside>
}

let mapStateToProps = (state) => ({
    blocks: state.main.blocks,
    isButtonPressed: state.main.isButtonPressed,
});

export default connect(mapStateToProps, {changeLevelGame, changePhoto, setTimeGame})(Settings);