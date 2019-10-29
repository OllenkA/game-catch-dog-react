import React from 'react';
import styles from './Results.module.css';


function Results(props) {
    return (
        <footer className={styles.container}>
            <section>
                <fieldset className={styles.level}>
                    <legend><h3>YOUR RESULT:</h3></legend>
                    {!props.isButtonPressed?<label>
                        You hit  {props.defaultScore}  {props.defaultScore === 1?'time':'times'},
                        miss  {props.defaultMiss} {props.defaultMiss === 1?'time':'times'} for {props.defaultTime?
                        props.defaultTime:20} seconds!
                    </label>:<label>Here you will your achievements.</label>
                    }
                </fieldset>
            </section>
            <h3>SCORE: {props.score}</h3>
            <h3>MISS: {props.miss}</h3>
        </footer>
    );
}


export default Results;
