import React, {useEffect} from 'react'
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components'
import { GET_CATEGORIES }  from '../../apollo/queries'
import Loading from '../Loading'
import Category from './Category'
import { categoryList, categoryContainer } from '../../styles'

const CategoryList = styled.div`
  ${categoryList}
`;
const CategoryContainer = styled.div`
  ${categoryContainer}
`;
function Categories() {
  const { loading, data } = useQuery(GET_CATEGORIES);
  return  <>
            <CategoryContainer>
              { loading? null : <CategoryList>{ data.categories.map((item, index) => <Category key={index} name={item.name} />) }</CategoryList> }
            </CategoryContainer>        
          </>
  }

  export default Categories;