import React from 'react';
import styles from './MainContent.module.css';
import {connect} from "react-redux";
import {clickOnImage, clickToMiss} from "../../redux/reducer";
import gav from '../../assets/dogs.mp3';


function MainContent(props) {

    let audioRef = React.createRef();

    let clickOnDog = () => {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
        props.clickOnImage();
    };

    let circles = props.blocks.map(el => {
        return <section key={el.id}>
        {el.visible?<img  src={el.img} alt={''} className={styles.circle}
                          onClick={props.isButtonPressed?clickOnDog:null}/>
        :<div className={styles.circle} onClick={props.isButtonPressed?props.clickToMiss:null}/>}
        </section>
    });

    return (
        <article className={styles.container}>
            <audio ref={audioRef} src={gav}/>
            {circles}
        </article>
    );
}

let mapStateToProps = (state) => ({
    blocks: state.main.blocks,
    isButtonPressed: state.main.isButtonPressed,
});

export default connect(mapStateToProps, {clickOnImage, clickToMiss})(MainContent);