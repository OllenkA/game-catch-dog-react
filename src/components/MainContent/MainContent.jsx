import React from 'react';
import styles from './MainContent.module.css';
import {connect} from "react-redux";
import {clickOnImage} from "../../redux/reducer";
import gav from '../../assets/dogs.mp3';


function MainContent(props) {

    let audioRef = React.createRef();

    let clickOnDog = () => {
        audioRef.currentTime = 0;
        audioRef.current.play();
        props.clickOnImage();
    };
    
    let circles = props.blocks.map(el => {
        return <section key={el.id}>
        {el.visible?<img  src={el.img} alt={''} className={styles.circle} onClick={clickOnDog}/>
        :<div className={styles.circle}/>}
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
    blocks: state.main.blocks
});

export default connect(mapStateToProps, {clickOnImage})(MainContent);