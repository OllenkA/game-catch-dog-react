import React from 'react';
import styles from './Footer.module.css';
import {connect} from "react-redux";


function Footer(props) {
    return (
        <footer className={styles.container}>
            <section>
                <fieldset className={styles.level}>
                    <legend><h3>YOUR RESULT:</h3></legend>
                    {/*{!props.isButtonPressed?<label> You hit  {props.score}  {props.score === 1?'time':'times'},*/}
                    {/*    miss  {props.miss} {props.miss === 1?'time':'times'} for  {props.defaultTime} time!*/}
                    {/*</label>:<label>Here you will your achievements.</label>*/}

                    {/*}*/}
                    <label> You hit  {props.score}  {props.score === 1?'time':'times'},
                        miss  {props.miss} {props.miss === 1?'time':'times'} for  {props.defaultTime} time!
                    </label>

                </fieldset>
            </section>
            <h3>SCORE: {props.score}</h3>
            <h3>MISS: {props.miss}</h3>
        </footer>
    );
}

let mapStateToProps = (state) => ({
        score: state.main.score,
        miss: state.main.miss,
        defaultTime: state.main.defaultTime,
        isButtonPressed: state.main.isButtonPressed,
    }
);

export default connect(mapStateToProps)(Footer);
