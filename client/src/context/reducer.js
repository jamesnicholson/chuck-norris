import { GET_CATEGORY, SET_CATEGORY } from '../utils/enums'
const getCategory = (payload, state) => {
    return state;
}
const setCategory = (payload, state) => {
    return {
        ...state,
        category:payload
    };
}
 const reducers = (state, action) => {
    switch(action.type){
        case GET_CATEGORY :
            return getCategory(action.payload, state);
        case SET_CATEGORY :
            return setCategory(action.payload, state);
        default: 
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}
export default reducers;