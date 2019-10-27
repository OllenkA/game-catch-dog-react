import React from 'react';
import styles from './Header.module.css';
import {connect} from "react-redux";
import {startGame, stopGame} from "../../redux/reducer";



function Header(props) {
    
    return (
        <header className={styles.container}>
            <h2>Catch the dog!</h2>
            <div>
                {props.isButtonPressed && props.time >= 0?
                    <h3>0:{props.time}</h3>:
                    <button onClick={props.startGame}
                            className={styles.button}>
                        START GAME
                    </button>
                }
                {props.time <= 0?props.stopGame():null}
            </div>
        </header>
    );
}

let mapDispatchToProps = (state) => ({
    time: state.main.time,
    isButtonPressed: state.main.isButtonPressed,
});


export default connect(mapDispatchToProps, {startGame, stopGame})(Header);
