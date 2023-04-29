import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const SingleArticle = () => {
    const { id } = useParams();
    const [newsData, setNewsData] = useState({});

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://api.spaceflightnewsapi.net/v3/articles/${id}`);
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
            <div key={newsData.id}>
                <h3>{newsData.title}</h3>
                <img src={newsData.imageUrl} alt={newsData.title} />
                <p>
                    {newsData.summary}
                </p>
                <Link to='/'>Home page</Link>
            </div>

        </div>
    )
}

export default SingleArticle