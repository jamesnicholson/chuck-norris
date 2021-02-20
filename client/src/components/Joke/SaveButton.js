import React, { useContext } from 'react';
import GlobalContext from '../../context'
function Joke(props){
    const { jokeData } = props;
    const [state, actions] = useContext(GlobalContext);
    const handler = (jokeData) => {
        actions.saveJoke(jokeData)
    }
    return  <div>
                <div onClick={()=>{handler(jokeData)}}>save</div>
            </div>;
}
export default Joke;