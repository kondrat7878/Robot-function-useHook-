import React from 'react';

const Thumb = ({image_url , name}) => {
    return (
        <div className="thumb-box">
            <img className="thumb" src={image_url} alt={name} />
        </div>
    );
};

export default Thumb;