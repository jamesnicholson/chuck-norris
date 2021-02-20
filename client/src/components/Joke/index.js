import React, { useContext } from 'react';
import GlobalContext from '../../context'
function Joke(props){
    const { id, joke } = props;
    const [state, actions] = useContext(GlobalContext);
    const handler = (id, joke) => {
        actions.saveJoke({id, joke})
    }
    return  <div>
                <div>{joke}</div>
                <div onClick={()=>{handler(id, joke)}}>save</div>
            </div>;
}
export default Joke;