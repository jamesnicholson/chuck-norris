import React, { useContext } from 'react';
import styled from 'styled-components'
import GlobalContext from '../../context'

const CategoryCard = styled.div`
    background-color: palevioletred;
    color: white;
    text-shadow: 1px 1px #00000060;
    margin: 1em;
    padding: 1em;
    border: 2px solid #da648a;
    border-radius: 3px;
    max-width: 150px;
    text-align: center;
    flex: 0 0 150px;
`;
function Category(props) {
    const { name } = props;
    const [state, actions] = useContext(GlobalContext);
    const handle = (name) => { 
      actions.setCategory(name)
    }
    return <CategoryCard onClick={() => handle(name)}>{name}</CategoryCard>;
}
export default Category;