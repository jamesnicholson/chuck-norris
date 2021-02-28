import React, { useContext } from 'react';
import styled from 'styled-components'
import GlobalContext from '../../context'
import { saveButton } from '../../styles'

const SaveButton = styled.div`
  ${saveButton}
`;

function Joke(props){
    const { jokeData } = props;
    const [state, actions] = useContext(GlobalContext);

    const handler = (jokeData) => {
        actions.saveJoke(jokeData)
    }
    return  <div>
                <SaveButton onClick={()=>{handler(jokeData)}}>save</SaveButton>
            </div>;
}
export default Joke;