import React, { useContext, useEffect, useReducer } from 'react'
import { useLazyQuery } from '@apollo/react-hooks';
import { GET_JOKE_BY_CATEGORY }  from '../../apollo/queries'
import Joke from '../Joke'
import Categories from '../Categories'
import Loading from '../Loading'
import GlobalContext from '../../context'


function App() {
  const [state] = useContext(GlobalContext);

  const [getJoke, { loading, data }] = useLazyQuery(GET_JOKE_BY_CATEGORY, {
    fetchPolicy: "no-cache",
    variables: { category: state.category ? state.category : 'dev' },
  })
  useEffect(() => {
   if(data === undefined) {
      getJoke()
   }
  },[data, state.category])

  return (
    <div className="App">
      { data === undefined ? 
        <Loading /> :
        <div>
          <Categories />
          <Joke joke={data.getJoke.value} />
        </div>
      }
    </div>
    );
  }
  
  export default App;