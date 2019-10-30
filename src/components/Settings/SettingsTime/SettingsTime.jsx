import React from 'react';
import styles from './SettingsTime.module.css';


function SettingsTime(props) {
    return <fieldset>
        <legend><h3>Enter the desired game time:</h3></legend>
        <label>
            <input className={styles.inputTime}
                   onChange={props.addTime}
                   placeholder={'Please, enter time...'}/>
        </label>
    </fieldset>
}

export default SettingsTime;