import React, { useContext } from 'react';
import GlobalContext from '../../context'
import Joke from '../Joke'
function JokeList(){
    const [state, actions] = useContext(GlobalContext);
    return state.jokes.map((item, index) =>  <Joke key={index} jokeData={item}/> )
}
export default JokeList;