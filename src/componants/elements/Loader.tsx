import './../../media/scss/elements/loader.scss';

import React, { useEffect, useState } from 'react';

import { useGlobalContext } from '../../Context';

const Loader = () => {

    const loadingTextDefault:string = 'Preparing for launch';
    const [ loadingText, setLoadingText ] = useState<string>(loadingTextDefault);
    const { isLoading } = useGlobalContext();

    useEffect(() => {
        setTimeout(() => {
            const numberOfDots = loadingText.split('.').length - 1;
            const newLoading = ((numberOfDots < 3) ? loadingText + '.' : loadingTextDefault);
            setLoadingText(newLoading);
        }, 500);
    }, [loadingText]);
    
    return (
        <div className={ isLoading ? 'loader in' : 'loader out' }>
            <div className="inner">{ loadingText }</div>
        </div>
    )
}

export default Loader;