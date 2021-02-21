import React, { useReducer, createContext, useMemo} from 'react'
import reducer from './reducer'
import AppThemeProvider from './styles'
import { SET_CATEGORY, SAVE_JOKE } from '../utils/enums'
const initialState = {
    category: "celebrity",
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
        <AppThemeProvider>
          {props.children}
        </AppThemeProvider>
      </GlobalContext.Provider>
    );
  };

export default GlobalContext;