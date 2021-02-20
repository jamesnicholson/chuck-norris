import React, { useEffect, useContext } from 'react';
import GlobalContext from '../../context'
import Joke from '../Joke'
function JokeList(){
    const [state, actions] = useContext(GlobalContext);
    return state.jokes.map((item, index) => {
      return  <Joke key={index} jokeData={item}/>
    }
   )
}
export default JokeList;