import React from 'react';
import styles from './Header.module.css';
import {connect} from "react-redux";
import {startGame, stopGame} from "../../redux/reducer";



function Header(props) {

    let overGame = () => {
        alert(`You hit ${props.score} ${props.score === 1?'time':'times'}! 
        You miss ${props.miss} ${props.miss === 1?'time':'times'}!`);
        props.stopGame();
    };

    
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
                {props.time === 0?overGame():null}
            </div>
        </header>
    );
}

let mapDispatchToProps = (state) => ({
    score: state.main.score,
    isButtonPressed: state.main.isButtonPressed,
    time: state.main.time,
    miss: state.main.miss,
});


export default connect(mapDispatchToProps, {startGame, stopGame})(Header);
