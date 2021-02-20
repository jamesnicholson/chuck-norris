import React, { useContext } from 'react';
import GlobalContext from '../../context'

function Category(props){
    const { name } = props;
    const [state, actions] = useContext(GlobalContext);
    const handle = (name) => { 
      actions.setCategory(name)
    }
    return <div onClick={() => handle(name)}>{name}</div>;
}
export default Category;