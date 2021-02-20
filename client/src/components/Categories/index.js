import React, { useEffect } from 'react'
import { useLazyQuery } from '@apollo/react-hooks';
import { GET_CATEGORIES }  from '../../apollo/queries'
import Loading from '../Loading'
import Category from './Category'
function Categories() {
  const [ getCategories, { loading, data }] = useLazyQuery(GET_CATEGORIES, {
    fetchPolicy: "no-cache",
    variables: { category: 'dev' },
  })

  useEffect(() => {
   if(data === undefined) {
    getCategories()
   }
  },[data])

  return (
    <div className="App">
        { data === undefined ? 
            <Loading />
            : 
            data.categories.map((item, index) => <Category key={index} name={item.name} />)
        }
    </div>
    );
  }
  
  export default Categories;