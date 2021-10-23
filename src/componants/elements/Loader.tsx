import './../../media/scss/elements/loader.scss';

import React, {useState} from 'react';

function Loader (){

    const [isLoading] = useState(true);

    return (
        <div className={ isLoading ? 'loader in' : 'loader' }></div>
    )
}

export default Loader;