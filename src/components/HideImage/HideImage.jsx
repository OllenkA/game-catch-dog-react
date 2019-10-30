import React from 'react';
import styles from './HideImage.module.css';
import settings from "../../assets/images/menu.png";


function HideImage(props) {

    return <figure className={styles.container}>

        <img className={styles.img}
             src={settings}
             alt={''}
             onClick={props.changeHiddenSettings}/>

    </figure>
}

export default HideImage;