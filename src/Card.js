import React from 'react';

const Card = (props) => {
    return (
        <div className='nasa-card'>
            <h1>{props.data.title}</h1>
            <img className='nasa' src={props.data.url}/>
            <p>{props.data.explanation}</p>
        </div>
    );
};
export default Card;