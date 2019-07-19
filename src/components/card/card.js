import React from 'react';
import Thumb from "../thumb/thumb";

const Card = ({ first_name, country, description, avatar }) => {
    return (
        <div className="card">
            <Thumb image_url={avatar}  name = {first_name}/>
            <div className="texts-box">
                <h1 className="card-title paragraph">
                    {first_name} from {country}
                </h1>
                <p className="card-msg">{description}</p>
            </div>
        </div>
    );
};

export default Card;