import { useState, useEffect } from 'react';
import axios from 'axios';

const Lesson52 = () => {
    const [resourceType, setResourceType] = useState('posts');
    const [resourceType2, setResourceType2] = useState('posts2');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${resourceType}`);
            setData(response.data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }
    useEffect(() => {
        setLoading(true);
        getData();
    }, [resourceType]);


    if (loading) {
        return <h1>Loading...</h1>
    }
    return (
        <div>
            <button onClick={() => setResourceType('posts')}>Posts</button>
            <button onClick={() => setResourceType('todos')}>Todos</button>
            <button onClick={() => setResourceType('Comments')}>Comments</button>
            <button onClick={() => setResourceType2('Changed2')}>Change2</button>
            <h1>
                {resourceType}
            </h1>
            <h2>
                {resourceType2}
            </h2>

            Users data
            {
                data.map((element) => (
                    <li key={element.id}>{element.title}
                        <span>{element.id}</span>
                    </li>
                ))
            }

        </div>
    )
}

export default Lesson52