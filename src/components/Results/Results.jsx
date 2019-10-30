import React from 'react';
import styles from './Results.module.css';
import Heading from "../../assets/Heading/Heading";


function Results(props) {
    return (
        <aside className={styles.container}>
            <Heading title={'Result'}/>
            <section>
                <h3>SCORE: {props.score}</h3>
                <h3>MISS: {props.miss}</h3>
            </section>
            <section>
                <fieldset className={styles.result}>
                    <legend><h3>Last result:</h3></legend>
                    {!props.isButtonPressed?<label>
                        You hit  {props.defaultScore}  {props.defaultScore === 1?'time':'times'},
                        miss  {props.defaultMiss} {props.defaultMiss === 1?'time':'times'} for {props.defaultTime?
                        props.defaultTime:20} seconds!
                    </label>:<label>Here you will your achievements.</label>
                    }
                </fieldset>
            </section>
        </aside>
    );
}


export default Results;
