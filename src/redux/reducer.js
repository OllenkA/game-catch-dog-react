import dog from '../assets/Dog.jpg';
import dog1 from '../assets/dog1.jpg';
import dog2 from '../assets/dog2.jpg';
import dog3 from '../assets/dog3.jpg';


const START_GAME = 'START_GAME';
const CHANGE_SCORE = 'CHANGE_SCORE';
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

// export const getDataTC = () => async(dispatch, getState) => {
//     const resp = await API.getData(getState().main.inputValue)
//     dispatch(setTextValueAC(JSON.stringify(resp.data)))
// };

const initialState = {
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
    score: 0,
    time: 3,
    defaultTime: 0,
    isButtonPressed: false,
    timer: 0,
    miss: 0,
    level: 2000,
    emptyInputValue: '',
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
                timer: action.timer,
            };

        case STOP_GAME:
            let newArrayAfterStopGame = state.blocks.map(el => {
                    return {
                        ...el,
                        visible: false,
                    }
            }
            );
            return {
                ...state,
                blocks: newArrayAfterStopGame,
                time: state.defaultTime,
                isButtonPressed: false,
                score: 0,
                timer: 0,
                miss: 0,
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
            
        case CLICK_TO_MISS:
            return {
                ...state,
                miss: state.miss + 1,
            };
        case CHANGE_LEVEL_GAME:
            return {
                ...state,
                level: action.level,
            };
        case CHANGE_PHOTO:
            debugger
            let newArrayAfterChangePhoto = state.blocks.map(el => {
                if(action.img === 'dog'){
                    return {
                        ...el,
                        img: dog,
                    }
                } else if(action.img === 'dog1'){
                    return {
                        ...el,
                        img: dog1
                    }
                } else if(action.img === 'dog2'){
                    return {
                        ...el,
                        img: dog2,
                    }
                }else{
                    return {
                        ...el,
                        img: dog3
                    }
                }
            });
            return {
                ...state,
                blocks: newArrayAfterChangePhoto,
            };
        case SET_TIME_GAME:
            return {
                ...state,
                time: action.time,
                defaultTime: action.time,
            };
        case SET_EMPTY_VALUE:
            return {
                ...state,

            };
            
        default:
            return state;
    }
};

export const startGameAC = (timer) => ({type: START_GAME, timer});
export const changeScore = (score) => ({type: CHANGE_SCORE, score});
export const clickOnImage = () => ({type: CLICK_ON_IMAGE});
export const stopGameAC = () => ({type: STOP_GAME});
export const clickToMiss = () => ({type: CLICK_TO_MISS});
export const changeLevelGame = (level) => ({type: CHANGE_LEVEL_GAME, level});
export const changePhoto = (img) => ({type: CHANGE_PHOTO, img});
export const setTimeGame = (time) => ({type: SET_TIME_GAME, time});
export const doEmptyValue = () => ({type: SET_EMPTY_VALUE});


export default reducer;