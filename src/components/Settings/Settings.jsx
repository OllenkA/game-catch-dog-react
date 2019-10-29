import React from 'react';
import styles from './Settings.module.css';
import {connect} from "react-redux";
import {changeLevelGame, changePhoto, setTimeGame} from "../../redux/reducer";
// import dog from '../../assets/Dog.jpg';


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

    const imgDogs = props.dogs.map(dog => {
        return <label key={dog.id}>
            <img src={dog.img} alt={'dog'} className={styles.dog}/>
            <input type='radio'
                   onChange={getPhoto}
                   name='photo' value={dog.img}/>
        </label>
    });

    const levelGame = props.levelArray.map(level => {
        return <label key={level.id}>
            {level.name}
            <input type='radio' onChange={getLevelGame}
                                   name='level'
                                   value={level.time}/>
        </label>
    });

    return <aside className={styles.container}>
        <h2 className={styles.time}>Settings</h2>

        <fieldset>
            <legend><h3>Enter time game:</h3></legend>
            <label><input className={styles.time} onChange={addTime}
                          placeholder={'Please, enter time...'}/>
            </label>
        </fieldset>

        <fieldset>
            <legend><h3>Choose difficulty level:</h3></legend>
            <section className={styles.level}>
            {levelGame}
            </section>
        </fieldset>

        <fieldset>
            <legend><h3>Victim photo selection:</h3></legend>
            <section className={styles.img}>
            {imgDogs}
            </section>
        </fieldset>

        <button className={styles.settings} >
            Reset all settings
        </button>
    </aside>
}

let mapStateToProps = (state) => ({
    blocks: state.main.blocks,
    isButtonPressed: state.main.isButtonPressed,
    dogs: state.main.dogs,
    levelArray: state.main.levelArray,
});

export default connect(mapStateToProps, {changeLevelGame, changePhoto, setTimeGame})(Settings);