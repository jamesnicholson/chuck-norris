import React from 'react';
import styled from 'styled-components'
import { jokeCard,jokeContent } from '../../styles'

const JokeCard = styled.div`
  ${jokeCard}
`;
const JokeContent = styled.div`
  ${jokeContent}
`;

function Joke(props){
  const { jokeData: {id, joke} } = props;
  return  <JokeCard>
              <JokeContent id={id}>{joke}</JokeContent>
          </JokeCard>;
}
export default Joke;