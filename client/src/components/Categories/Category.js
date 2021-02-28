import React, { useContext } from 'react';
import styled from 'styled-components'
import GlobalContext from '../../context'
import { categoryCard } from '../../styles'

const Card = styled.div`
  ${categoryCard}
`;

function CategoryCard(props) {
    const { name } = props;
    const [state, actions] = useContext(GlobalContext);
    const handle = (name) => { 
      actions.setCategory(name)
    }
    return <Card onClick={() => handle(name)}>{name}</Card>;
}
export default CategoryCard;