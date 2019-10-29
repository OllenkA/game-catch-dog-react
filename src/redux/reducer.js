import dog from '../assets/Dog.jpg';
import dog1 from '../assets/dog1.jpg';
import dog2 from '../assets/dog2.jpg';
import dog3 from '../assets/dog3.jpg';
import dog4 from '../assets/dog4.jpg';
import dog5 from '../assets/dog5.jpg';
import dog6 from '../assets/dog6.png'
import dog7 from '../assets/dog7.jpg';
import dog8 from '../assets/dog8.jpg';


const START_GAME = 'START_GAME';
const CLICK_ON_IMAGE = 'CLICK_ON_IMAGE';
const STOP_GAME = 'STOP_GAME';
const CLICK_TO_MISS = 'CLICK_TO_MISS';
const CHANGE_LEVEL_GAME = 'CHANGE_LEVEL_GAME';
const CHANGE_PHOTO = 'CHANGE_PHOTO';
const SET_TIME_GAME = 'SET_TIME_GAME';
const SET_EMPTY_VALUE = 'SET_EMPTY_VALUE';


export const startGame = () => (dispatch, getState) => {
    let timer = setInterval(() => {
        dispatch(startGameAC(timer))
    }, getState().main.level);
};

export const stopGame = () => (dispatch, getState) => {
    clearInterval(getState().main.timer);
    dispatch(stopGameAC());
};

const initialState = {
    dogs: [
        {id: 1, img: dog},
        {id: 2, img: dog1},
        {id: 3, img: dog2},
        {id: 4, img: dog3},
        {id: 5, img: dog4},
        {id: 6, img: dog5},
        {id: 7, img: dog6},
        {id: 8, img: dog7},
        {id: 9, img: dog8},
    ],
    blocks: [
        {id: 0, img: dog, visible: false},
        {id: 1, img: dog, visible: false},
        {id: 2, img: dog, visible: false},
        {id: 3, img: dog, visible: false},
        {id: 4, img: dog, visible: false},
        {id: 5, img: dog, visible: false},
        {id: 6, img: dog, visible: false},
        {id: 7, img: dog, visible: false},
        {id: 8, img: dog, visible: false},
    ],
    levelArray: [
        {id:1, name: 'Easy', time: 1500},
        {id:2, name: 'Medium', time: 1000},
        {id:3, name: 'Hard', time: 700},
    ],
    score: 0,
    defaultScore: 0,
    time: 20,
    defaultTime: 0,
    isButtonPressed: false,
    timer: 0,
    miss: 0,
    defaultMiss: 0,
    level: 1000,
    emptyInputValue: '',
};


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case START_GAME:
            let newVisibleElement = Math.floor(Math.random() * 9);
            let newArray = state.blocks.map(el => {
                if (el.id === newVisibleElement) {
                    return {...el, visible: true}}
                else {return {...el, visible: false}}});
            return {
                ...state,
                blocks: newArray,
                isButtonPressed: true,
                time: state.time - 1,
                timer: action.timer,
                // isCirclePressed: true,
            };

        case STOP_GAME:
            let newArrayAfterStopGame = state.blocks.map(el => {return {...el, visible: false}});
            return {
                ...state,
                blocks: newArrayAfterStopGame,
                time: state.defaultTime?state.defaultTime:20,
                isButtonPressed: false,
                score: 0,
                timer: 0,
                miss: 0,
            };

        case CLICK_ON_IMAGE:
            return {...state, score: state.score + 1, defaultScore: state.score + 1};
            
        case CLICK_TO_MISS:
            return {...state, miss: state.miss + 1, defaultMiss: state.miss + 1};

        case CHANGE_LEVEL_GAME:
            return {...state, level: action.level};

        case CHANGE_PHOTO:
            let newPhoto = state.blocks.map(el => {return {...el, img: action.img}});
            return {...state, blocks: newPhoto,};

        case SET_TIME_GAME:
            return {...state, time: action.time, defaultTime: action.time,};

        case SET_EMPTY_VALUE:
            return {...state };

        default:
            return state;
    }
};

export const startGameAC = (timer) => ({type: START_GAME, timer});
export const clickOnImage = () => ({type: CLICK_ON_IMAGE});
export const stopGameAC = () => ({type: STOP_GAME});
export const clickToMiss = () => ({type: CLICK_TO_MISS});
export const changeLevelGame = (level) => ({type: CHANGE_LEVEL_GAME, level});
export const changePhoto = (img) => ({type: CHANGE_PHOTO, img});
export const setTimeGame = (time) => ({type: SET_TIME_GAME, time});
// export const doEmptyValue = () => ({type: SET_EMPTY_VALUE});


export default reducer;