import React, { useEffect } from 'react'
import { useLazyQuery } from '@apollo/react-hooks';
import { GET_JOKE_BY_CATEGORY }  from '../../apollo/queries'
import Joke from '../Joke'
import Loading from '../Loading'
function App() {

  const [ getJoke, { loading, data }] = useLazyQuery(GET_JOKE_BY_CATEGORY, {
    fetchPolicy: "no-cache",
    variables: { category: 'dev' },
  })

  useEffect(() => {
  console.log(data)
   if(data === undefined) {
      getJoke()
     
   }
  },[data])

  return (
    <div className="App">
      {data === undefined ? <Loading /> : <Joke joke={data.getJoke.value} />}
    </div>
    );
  }
  
  export default App;