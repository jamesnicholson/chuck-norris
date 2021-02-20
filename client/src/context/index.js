import React, { useReducer, createContext, useMemo} from 'react'
import reducer from './reducer'
import { SET_CATEGORY, GET_CATEGORY } from '../utils/enums'
const initialState = {
    category: ""
}
const GlobalContext = createContext(initialState);


export const GlobalContextProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const actions = useMemo(() => ({
      setCategory: (value) => {
        dispatch({
          type: SET_CATEGORY, 
          payload: value
        })
      },
      getCategory: ({ id, content }) => {
        dispatch({
          type: GET_CATEGORY
        })
      }
    }), []);



    return (
      <GlobalContext.Provider value={[state, actions]}>
        {props.children}
      </GlobalContext.Provider>
    );
  };

export default GlobalContext;