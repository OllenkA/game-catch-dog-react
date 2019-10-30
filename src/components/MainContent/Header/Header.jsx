import React from 'react';
import styles from './Header.module.css';
import Heading from "../../../assets/Heading/Heading";



function Header(props) {

    return <header className={styles.container}>

        <Heading title={'Catch the dog!'}/>

        <section className={styles.placeForButton}>
            {props.isButtonPressed && props.time >= 0 ?
                <h3>0:{props.time}</h3> :
                <button onClick={(!isNaN(props.time)) ? props.startGame : null}
                        className={styles.buttonStart}>
                    START GAME
                </button>
            }
            {props.time === 0 ? props.overGame() : null}
        </section>

    </header>
}

export default Header;