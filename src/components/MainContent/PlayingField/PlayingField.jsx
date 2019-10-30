import React from 'react';
import styles from './PlayingField.module.css';
import gav from '../../../assets/sounds/dogs.mp3';


function PlayingField(props) {

    let circles = props.blocks.map(el => {
        return <section key={el.id}>
            {el.visible ? <img src={el.img} alt={''} className={styles.circle}
                               onClick={props.isButtonPressed
                                   ? props.clickOnDog : null}/>
                : <div className={styles.circle} onClick={props.isButtonPressed
                    ?props.clickToMiss : null}/>}
        </section>
    });

    return <article className={styles.container}>

                <audio ref={props.audioRef} src={gav}/>
                {circles}
            </article>
}

export default PlayingField;