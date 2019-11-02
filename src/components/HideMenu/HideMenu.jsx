import React from 'react';
import styles from './HideMenu.module.css';
import settings from "../../assets/images/menu.png";


function HideMenu(props) {

    return <figure className={styles.container}>

        <img className={styles.menu}
             src={settings}
             alt={''}
             onClick={props.onClick}

        />

    </figure>
}

export default HideMenu;