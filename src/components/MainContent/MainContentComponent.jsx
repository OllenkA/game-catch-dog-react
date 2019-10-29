import React from 'react';
import {connect} from "react-redux";
import {clickOnImage, clickToMiss, startGame, stopGame} from "../../redux/reducer";
import MainContent from "./MainContent";


function MainContentComponent(props) {

    let audioRef = React.createRef();

    let clickOnDog = () => {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
        props.clickOnImage();
    };

    let overGame = () => {
        alert(`You hit ${props.score} ${props.score === 1 ? 'time' : 'times'}! 
        You miss ${props.miss} ${props.miss === 1 ? 'time' : 'times'}!`);
        props.stopGame();
    };

    return <MainContent overGame={overGame}
                        clickOnDog={clickOnDog}
                        blocks={props.blocks}
                        isButtonPressed={props.isButtonPressed}
                        time={props.time}
                        audioRef={audioRef}
                        clickOnImage={props.clickOnImage}
                        clickToMiss={props.clickToMiss}
                        startGame={props.startGame}
    />
}


let mapStateToProps = (state) => ({
    blocks: state.main.blocks,
    isButtonPressed: state.main.isButtonPressed,
    score: state.main.score,
    time: state.main.time,
    miss: state.main.miss
});

export default connect(mapStateToProps, {clickOnImage, clickToMiss, startGame, stopGame})
(MainContentComponent);