import React, { useContext } from 'react';
function Joke(props){
    const { jokeData: {id, joke} } = props;
    return  <div>
                <div>{joke}</div>
            </div>;
}
export default Joke;