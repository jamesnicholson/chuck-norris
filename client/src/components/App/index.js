import React, { useContext, useEffect, useState } from 'react'
import { useLazyQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import { GET_JOKE_BY_CATEGORY }  from '../../apollo/queries'
import GlobalContext from '../../context'

import Joke from '../Joke'
import Categories from '../Categories'
import Loading from '../Loading'
import JokeList from '../Joke/JokeList'
import SaveButton from '../Joke/SaveButton'
import { appPage } from '../../styles'

const AppPage = styled.div`
  ${appPage}
`;

const App = () => {

  const [joke, setJoke] = useState({})
  const [globalState] = useContext(GlobalContext);
 
  const [getJoke, { loading, data }] = useLazyQuery(GET_JOKE_BY_CATEGORY, {
    fetchPolicy: "no-cache",
    variables: { category: globalState.category },
    onCompleted:(data) => {
      setJoke({
        id: data.getJoke.id,
        joke: data.getJoke.value,
        category: globalState.category
      })
    }
  })

  useEffect(() => {
    if(data === undefined) {
      getJoke()
    }
  },[data, globalState.category])

  return (
      <>
      {
        <AppPage>
          <Categories />
          {
            loading ? <Loading /> : <Joke jokeData={joke} /> 
          }
          <SaveButton jokeData={joke} />
          <JokeList />
        </AppPage>
      }
      </>
    );
  }
  
  export default App;