import React from 'react';
import styles from './Header.module.css';


function Header(props) {

    return <header className={styles.container}>
            <h2>Catch the dog!</h2>
            <div>
                {props.isButtonPressed && props.time >= 0?
                    <h3>0:{props.time}</h3>:
                    <button onClick={(!isNaN(props.time))?props.startGame:null}
                            className={styles.button}>
                        START GAME
                    </button>
                }
                {props.time === 0?props.overGame():null}
            </div>
        </header>
}

export default Header;