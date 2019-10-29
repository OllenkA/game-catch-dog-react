import React from 'react';
import styles from './Settings.module.css';
import SettingsTime from "./SettingsTime/SettingsTime";
import SettingsLevel from "./SettingsLevel/SettingsLevel";
import SettingsPhoto from "./SettingsPhoto/SettingsPhoto";


function Settings(props) {

    return <aside className={styles.container}>
        <h2 className={styles.time}>Settings</h2>

        <SettingsTime addTime={props.addTime}/>

        <SettingsLevel  levelArray={props.levelArray}
                        getLevelGame={props.getLevelGame}/>

        <SettingsPhoto dogs={props.dogs}
                       getPhoto={props.getPhoto}/>

        <button>
            Reset all settings
        </button>
    </aside>
}

export default Settings;