import React from 'react';
import styles from './Settings.module.css';
import SettingsTime from "./SettingsTime/SettingsTime";
import SettingsLevel from "./SettingsLevel/SettingsLevel";
import SettingsPhoto from "./SettingsPhoto/SettingsPhoto";
import Heading from "../../assets/Heading/Heading";


function Settings(props) {

    return <aside className={styles.container}>
        <Heading title={'Settings'}/>

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