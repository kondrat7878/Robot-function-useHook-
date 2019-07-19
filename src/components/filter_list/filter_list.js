import React , {useContext} from 'react';
import {Context} from '../store/store';

const FilterList = () => {
    const {setFilterList , filter_list , displayed_list} = useContext(Context);
    const updateValue = (e)=>{
        const txt = e.target.value;
        const list = displayed_list.filter(item =>{
            return item.first_name.toLowerCase().includes(txt.toLowerCase())
        });
        setFilterList(list);
    };
    return (
        <div className={`header`}>
            <h4 className={`filter_title`}>{filter_list.length} item</h4>
            <input type="text" className="filter" onChange={updateValue} placeholder={`Enter Your Robot`}/>
        </div>
    );
};

export default FilterList;