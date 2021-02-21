import React, { useEffect } from 'react'
import { useLazyQuery } from '@apollo/react-hooks';
import styled from 'styled-components'
import { GET_CATEGORIES }  from '../../apollo/queries'
import Loading from '../Loading'
import Category from './Category'
function Categories() {
  const [ getCategories, { loading, data }] = useLazyQuery(GET_CATEGORIES, {
    fetchPolicy: "no-cache",
    variables: { category: 'dev' },
  })
  const CategoryList = styled.div`
      display:flex;
      overflow-x: auto;
  `;
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
            <CategoryList>{data.categories.map((item, index) => <Category key={index} name={item.name} />)}</CategoryList>
        }
    </div>
    );
  }
  
  export default Categories;