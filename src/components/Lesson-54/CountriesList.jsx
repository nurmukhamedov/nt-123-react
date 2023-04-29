import React from 'react';
import { useContext } from 'react';
import { FetchContext } from '../context/FetchContext';

const CountriesList = () => {

    const { loader, error, data } = useContext(FetchContext);

    if (loader) {
        return <h2>Loading...</h2>
    }
    if (error) {
        return <div>{error}</div>
    }
    return (

        <div>
            {console.log(data)}
            {error}
        </div>
    )
}

export default CountriesList