import { SET_CATEGORY, SAVE_JOKE } from '../utils/enums'
const saveJoke = (payload, state) => {
    return {
        ...state,
        jokes: [...state.jokes, {
            id: payload.id,
            joke: payload.joke
        }]
    };
}
const setCategory = (payload, state) => {
    return {
        ...state,
        category:payload
    };
}
 const reducers = (state, action) => {
    switch(action.type){
        case SAVE_JOKE :
            return saveJoke(action.payload, state);
        case SET_CATEGORY :
            return setCategory(action.payload, state);
        default: 
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}
export default reducers;