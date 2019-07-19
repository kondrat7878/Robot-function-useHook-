import React from 'react';
import {useState , useEffect} from 'react';
import Get_all_robots from '../api/api_get_all_robots';

//inition context and provider
const Context = React.createContext();
const {Provider} = Context;
//func Store
const Store = ({children}) => {

    const [displayed_list , setDisplayedList] = useState([]);
    const [filter_list ,setFilterList] = useState(displayed_list);
    const [profile , setProfile] = useState(displayed_list[2]);
    const [toggle , setToggle] =useState(true);

    useEffect(() => {
        Get_data();
    }, []);
    const Get_data = async ()=>{
        try {
            const data = await Get_all_robots();
            setDisplayedList(data);
            setFilterList(data);
            setProfile(data[3]);
            setToggle(false);
        }catch (e) {
            console.log({e})
        }
    };
    const state ={
        displayed_list,
        filter_list,
        profile,
        toggle
    };

    const action = {
        setDisplayedList,
        setFilterList,
        setProfile
    };
    return (
        <Provider value = {{...state , ...action }}>
            {children}
        </Provider>
    );
};

export { Store , Context}