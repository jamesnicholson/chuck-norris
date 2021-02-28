import React, {useEffect} from 'react'
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components'
import { GET_CATEGORIES }  from '../../apollo/queries'
import Loading from '../Loading'
import Category from './Category'
import { categoryList } from '../../styles'

const CategoryList = styled.div`
  ${categoryList}
`;

function Categories() {
  const { loading, data } = useQuery(GET_CATEGORIES);
  if (loading) return null;
  return (
    <div className="App">
        {  
          <CategoryList>{ data.categories.map((item, index) => <Category key={index} name={item.name} />) }</CategoryList>
        }
    </div>
    );
  }
  
  export default Categories;