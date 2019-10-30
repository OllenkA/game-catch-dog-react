import React from 'react';
import styles from './Heading.module.css';


function Heading(props) {
    return <h2 className={styles.title}>{props.title.toUpperCase()}</h2>
}

export default Heading;