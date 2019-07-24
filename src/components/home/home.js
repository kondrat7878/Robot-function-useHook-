import React, {useContext} from 'react';
import FilterList from "../filter_list/filter_list";
import Profile from "../profile/profile";
import List from "../list/list";
import {Context} from "../store/store";
import styled from "styled-components";


const Home = () => {
    const {toggle} = useContext(Context);
    return (
        <div>
            {toggle === false ? (
                <div>
                    <FilterList />
                    <ContentBox>
                        <Profile />
                        <List />
                    </ContentBox>
                </div>
            ) : (
                <>
                    <img src="https://i.gifer.com/VAyR.gif" alt="loader"/>
                    <H1>....is Loading</H1>
                </>
                )}
        </div>
    );
};

export default Home;


const ContentBox = styled.div`
  /*border:red solid 2px;*/
  border-radius: 5px;
  display: flex`;

const H1 = styled.h1`
font-size: 50px;
`;