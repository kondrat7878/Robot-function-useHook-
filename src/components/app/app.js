import React , {useContext , memo} from 'react';
import styled from 'styled-components';
 import {Context} from "../store/store";
import {BrowserRouter , Route , Switch , Redirect} from 'react-router-dom';


import Profile from '../home/profile/profile';
import PageNotFound from '../page_not_found/page_not_found';
import CreateNewRobot from '../create_new_robot/create_new_robot';
import './main.css';
import Home from '../home/home';
import NavBar from '../nav_bar/nav_bar'



const App = () => {

     const {login_out} = useContext(Context);

    return (
        <BrowserRouter>
          <div className={`container`}>
            <NavBar/>
            <Box>
                    <Switch>
                        <Route
                            path={`/`} exact
                            component={Home}/>
                        <Route
                            path={'/page_2'} exact
                            component={Profile} />
                        <Route
                            path="/page_3"
                            render={() =>
                                login_out === true ? <CreateNewRobot /> : <Redirect to="/"  />
                            }
                        />
                        <Route  component={PageNotFound} />
                    </Switch>
            </Box>
          </div>
        </BrowserRouter>
    );
};

export default memo(App);

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