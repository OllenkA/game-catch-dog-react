import React from 'react';
import styles from './SettingsTime.module.css';


function SettingsTime(props) {
    debugger
    return <fieldset>
        <legend><h3>Enter time game:</h3></legend>
        <label><input className={styles.time} onChange={props.addTime}
                      placeholder={'Please, enter time...'}/>
        </label>
    </fieldset>
}

export default SettingsTime;