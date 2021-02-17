import React, { useEffect } from 'react'
import { useLazyQuery } from '@apollo/react-hooks';
import { GET_JOKE_BY_CATEGORY }  from '../../apollo/queries'

function App() {

  const [getJoke, { loading, data }] = useLazyQuery(GET_JOKE_BY_CATEGORY, {
    fetchPolicy: "no-cache",
    variables: { category: 'dev' },
  })
  useEffect(() => {
    console.log(data)
   if(data === undefined){
    getJoke()
    console.log(data)
   }
  },[data])

  return (
    <div className="App">
        <h1>Hello Wolrd JAMES :)</h1>
    </div>
    );
  }
  
  export default App;