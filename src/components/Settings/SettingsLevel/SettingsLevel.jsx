import React from 'react';
import styles from './SettingsLevel.module.css';


function SettingsLevel(props) {

    const levelGame = props.levelArray.map(level => {
        return <label key={level.id}>
            {level.name}
            <input type='radio' onChange={props.getLevelGame}
                   name='level'
                   value={level.time}/>
        </label>
    });

    return <fieldset>
        <legend><h3>Choose difficulty level:</h3></legend>
        <section className={styles.level}>
            {levelGame}
        </section>
    </fieldset>
}

export default SettingsLevel;
