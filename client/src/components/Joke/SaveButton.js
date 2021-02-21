import React, { useContext } from 'react';
import GlobalContext from '../../context'
import styled from 'styled-components'
function Joke(props){
    const { jokeData } = props;
    const [state, actions] = useContext(GlobalContext);
    const SaveButton = styled.div`
        background-color: #00bcd4;
        color: white;
        text-shadow: 1px 1px #00000094;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid #03aec3;
        border-radius: 3px;
  `;
    const handler = (jokeData) => {
        actions.saveJoke(jokeData)
    }
    return  <div>
                <SaveButton onClick={()=>{handler(jokeData)}}>save</SaveButton>
            </div>;
}
export default Joke;