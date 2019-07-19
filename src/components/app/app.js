import React , {useContext} from 'react';
import styled from 'styled-components';
import {Context} from "../store/store";

import FilterList from '../filter_list/filter_list';
import List from '../list/list';
import Profile from '../profile/profile';
import './main.css';


const App = () => {

    const {toggle} = useContext(Context);

    return (
        <Box>
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
        </Box>
    );
};

export default App;

const Box = styled.div`
  background: Cornsilk;
  padding: 8.5rem 1.5rem 1.5rem;
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0.4rem 1.5rem DimGrey;
  position: relative;
  margin-top: 7rem;
`;
const ContentBox = styled.div`
  /*border:red solid 2px;*/
  border-radius: 5px;
  display: flex`;

const H1 = styled.h1`
font-size: 50px;
`;