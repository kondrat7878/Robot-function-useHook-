import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import ButtonLogInOut from '../button_log_in_out/button_log_in_out';

const NavBar = () => {
    return (
        <Div>
            <ButtonLogInOut/>
            <li>
                <A to={`/`}>Home</A >
            </li>
            <li>
                    <A to={`/page_2`}>Robot</A>
            </li>
            <li>
                <A  to={`/page_3`}>Private Route</A >
            </li>
        </Div>
    );
};

export default NavBar;

const Div = styled.div`
display: flex;
width: 100%;
justify-content: space-around;
align-items: center;
//border: 1px solid red;
padding-top: 35px;
 `;
const A = styled(Link)`
color: goldenrod;
font-size: 30px;
text-decoration: none;
`;