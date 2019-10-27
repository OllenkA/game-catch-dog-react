import dog from '../assets/Dog.jpg';
import barking from '../assets/dogs.mp3';

const START_GAME = 'START_GAME';
const CHANGE_SCORE = 'CHANGE_SCORE';
const CLICK_ON_IMAGE = 'CLICK_ON_IMAGE';
const STOP_GAME = 'STOP_GAME';

export const startGame = () => (dispatch) => {
    let timer = setInterval(() => {
        dispatch(startGameAC(timer))
    }, 1000);
};

export const stopGame = () => (dispatch, getState) => {
    clearInterval(getState().timer);
    dispatch(stopGameAC());
};

// export const getDataTC = () => async(dispatch, getState) => {
//     const resp = await API.getData(getState().main.inputValue)
//     dispatch(setTextValueAC(JSON.stringify(resp.data)))
// };

const initialState = {
    blocks: [
        {id: 0, img: dog, visible: false, audio: barking},
        {id: 1, img: dog, visible: true, audio: barking},
        {id: 2, img: dog, visible: false, audio: barking},
        {id: 3, img: dog, visible: false, audio: barking},
        {id: 4, img: dog, visible: false, audio: barking},
        {id: 5, img: dog, visible: false, audio: barking},
        {id: 6, img: dog, visible: false, audio: barking},
        {id: 7, img: dog, visible: false, audio: barking},
        {id: 8, img: dog, visible: false, audio: barking},

    ],
    score: 0,
    time: 9,
    isButtonPressed: false,
};


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case START_GAME:
            let newVisibleElement = Math.floor(Math.random() * 9);
            let newArray = state.blocks.map(el => {
                if (el.id === newVisibleElement) {
                    return {
                        ...el,
                        visible: true
                    }
                } else {
                    return {
                        ...el,
                        visible: false
                    }
                }
            });
            return {
                ...state,
                blocks: newArray,
                isButtonPressed: true,
                time: state.time - 1,
            };

        case STOP_GAME:
            return {
                ...state,
                time: 0,
                isButtonPressed: false,
                score: 0
            };

        case CHANGE_SCORE:
            return {
                ...state,
                score: state.score + 1,
            };
        case CLICK_ON_IMAGE:
            return {
                ...state,
                score: state.score + 1,
            };
        default:
            return state;
    }

};

export const startGameAC = () => ({type: START_GAME});
export const changeScore = (score) => ({type: CHANGE_SCORE, score});
export const clickOnImage = () => ({type: CLICK_ON_IMAGE});
export const stopGameAC = () => ({type: STOP_GAME});


export default reducer;