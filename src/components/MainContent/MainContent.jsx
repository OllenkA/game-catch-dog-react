import React from 'react';
// import styles from './MainContent.module.css';
import Header from "./Header/Header";
import PlayingField from "./PlayingField/PlayingField";


function MainContent(props) {

    return <article>
        <Header overGame={props.overGame}
                time={props.time}
                isButtonPressed={props.isButtonPressed}
                startGame={props.startGame}
                />
        <PlayingField blocks={props.blocks}
                      isButtonPressed={props.isButtonPressed}
                      audioRef={props.audioRef}
                      clickOnDog={props.clickOnDog}
                      clickToMiss={props.clickToMiss}/>
        <aside>
            <h4>HAPPY GAME!</h4>
        </aside>
    </article>
}

export default MainContent;