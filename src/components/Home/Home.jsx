import { useState, useEffect } from 'react'
import axios from 'axios'
import Cards from '../Card/Cards';
import './Home.scss'
const Home = () => {
    const [newsData, setNewsData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://api.spaceflightnewsapi.net/v3/articles');
            setNewsData(response.data);
        } catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div>
            {
                console.log(newsData)
            }
            {

                newsData.map((news) => (
                    <Cards key={news.id} title={news.title} url={news.imageUrl} summary={news.summary} id={news.id} />
                ))
            }
        </div>
    )
}

export default Home