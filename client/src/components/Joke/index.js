import React, { useContext } from 'react';
import styled from 'styled-components'

const JokeCard = styled.div`
  background-color: #EA661E;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #ff5722;
  border-radius: 3px;
`;
const JokeContent = styled.div`
color: white;
    text-shadow: 1px 1px #0000008c;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
`;

function Joke(props){
    const { jokeData: {id, joke} } = props;
    return  <JokeCard>
                <JokeContent>{joke}</JokeContent>
            </JokeCard>;
}
export default Joke;