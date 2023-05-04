import React, { useContext } from 'react';
import { ShowsContext } from '../../context/ContextProvider';

const Show = () => {
    const { show } = useContext(ShowsContext)
    console.log(show);
    return (
        <div>
            {show?.name}
        </div>
    );
};

export default Show;