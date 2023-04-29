import { useState, useEffect } from 'react'
import axios from 'axios'
import Cards from '../Card/Cards';
import './Home.scss'
const Home = () => {
    const [newsData, setNewsData] = useState([]);
    const [searchTitle, setSearchTitle] = useState('');

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
    }, []);

    const myData = newsData.filter((news) => {
        if (!searchTitle.trim()) {
            return news
        } else if (news.title.toLowerCase().includes(searchTitle.toLowerCase())) {
            return news
        }
    }).map((news) => (
        <Cards key={news.id} title={news.title} url={news.imageUrl} summary={news.summary} id={news.id} />
    ))
    return (
        <div>
            <input type="text" value={searchTitle} onChange={(e) => setSearchTitle(e.target.value)} />
            {myData}
        </div>
    )
}

export default Home