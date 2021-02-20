import React, { useEffect, useContext } from 'react';
import reducer from '../../context/reducer'
import GlobalContext from '../../context'
import {SET_CATEGORY} from '../../utils/enums'

function Category(props){
    const { name } = props;
    const [state, actions] = useContext(GlobalContext);
    const handle = (name) => { 
      actions.setCategory(name)
    }
    return <div onClick={() => handle(name)}>{name}</div>;
}
export default Category;