import dog from '../assets/Dog.jpg';


const START_GAME = 'START_GAME';
const CHANGE_SCORE = 'CHANGE_SCORE';
const CLICK_ON_IMAGE = 'CLICK_ON_IMAGE';
const STOP_GAME = 'STOP_GAME';
const CLICK_TO_MISS = 'CLICK_TO_MISS';


export const startGame = () => (dispatch) => {
    debugger
    let timer = setInterval(() => {
        dispatch(startGameAC(timer))
    }, 1000);
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
    time: 10,
    isButtonPressed: false,
    timer: 0,
    miss: 0,
};


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case START_GAME:
            debugger
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
                time: 3,
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
            
        default:
            return state;
    }
};

export const startGameAC = (timer) => ({type: START_GAME, timer});
export const changeScore = (score) => ({type: CHANGE_SCORE, score});
export const clickOnImage = () => ({type: CLICK_ON_IMAGE});
export const stopGameAC = () => ({type: STOP_GAME});
export const clickToMiss = () => ({type: CLICK_TO_MISS});


export default reducer;