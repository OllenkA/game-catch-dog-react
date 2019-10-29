import React from 'react';
import {connect} from "react-redux";
import Results from "./Results";


function ResultsComponent(props) {
    return <Results isButtonPressed={props.isButtonPressed}
                    defaultTime={props.defaultTime}
                    defaultMiss={props.defaultMiss}
                    defaultScore={props.defaultScore}
                    score={props.score}
                    miss={props.miss}/>

}

let mapStateToProps = (state) => ({
        score: state.main.score,
        miss: state.main.miss,
        defaultTime: state.main.defaultTime,
        defaultMiss: state.main.defaultMiss,
        defaultScore: state.main.defaultScore,
        isButtonPressed: state.main.isButtonPressed,
    }
);

export default connect(mapStateToProps)(ResultsComponent);
