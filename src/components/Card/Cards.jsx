import React from 'react'
import { Link } from 'react-router-dom';

const Cards = (props) => {
    const { title, url, summary, id } = props;
    return (
        <div className='card'>
            <h3>{title}</h3>
            <img src={url} alt={title} />
            <p>
                {summary}
            </p>
            <Link to={`news/${id}`}>Read More</Link>
        </div >
    )
}

export default Cards