import React from 'react';

const Photo = ({ src, title, description }) => {
    return (
        <div className="photo">
            <img src={src} alt={title} />
            <div className="info">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Photo;