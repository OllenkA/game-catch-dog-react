import React from 'react';
import styles from './Footer.module.css';
import {connect} from "react-redux";

// import {changeScore} from "../../redux/reducer";


function Footer(props) {
    return (
        <footer className={styles.container}>
            <h3>SCORE: {props.score}</h3>
            <h3>MISS: {props.miss}</h3>
        </footer>
    );
}

let mapStateToProps = (state) => (
    {
        score: state.main.score,
        miss: state.main.miss,
    }
);

export default connect(mapStateToProps)(Footer);
