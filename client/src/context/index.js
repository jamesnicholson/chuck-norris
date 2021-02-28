import React, { useReducer, createContext, useMemo} from 'react'
import reducer from './reducer'
import ThemeContext from '../context/theme'
import { SET_CATEGORY, SAVE_JOKE } from '../utils/enums'

const initialState = {
    category: "celebrity",
    categories: [],
    jokes: []
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
      saveJoke: (props) => {
        dispatch({
          type: SAVE_JOKE,
          payload: {
            id: props.id,
            joke: props.joke
          }
        })
      }
    }), []);

    return (
      <GlobalContext.Provider value={[state, actions]}>
        <ThemeContext>
          {props.children}
        </ThemeContext>
      </GlobalContext.Provider>
    );
  };

export default GlobalContext;