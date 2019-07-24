import React , {useContext} from 'react';

import {Context} from '../../store/store'
import Card from '../card/card'

const List = () => {
    const {filter_list , setProfile } = useContext(Context);
    return (
        <div className="cards-list">
            <ul>
                {filter_list.map(item => (
                    <li className="card-item" key={item.id} onClick={() =>setProfile(item)}>
                        <Card {...item} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;