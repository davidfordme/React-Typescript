import './../../media/scss/elements/loader.scss';

import React from 'react';

import { useGlobalContext } from '../../Context';

const Loader = () => {

    const { isLoading } = useGlobalContext();

    return (
        <div className={ isLoading ? 'loader in' : 'loader out' }></div>
    )
}

export default Loader;