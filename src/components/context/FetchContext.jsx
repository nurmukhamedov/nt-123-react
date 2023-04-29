import { createContext, useState, useEffect } from "react";

export const FetchContext = createContext();

export const MyFetchContextProvider = ({ children }) => {

    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState('');

    const fetchData = async () => {
        try {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const myData = await response.json();

            setData(myData)
            setLoader(false);
        } catch (error) {
            setError(error);
        }
    }

    useEffect(() => {
        setLoader(true);
        fetchData();
    }, [])


    return (
        <FetchContext.Provider value={{ loader, error, data }}>
            {children}
        </FetchContext.Provider>
    )
}