import React,{useContext} from 'react';
import {Context} from "../../store/store";
import styled from 'styled-components';


const ButtonLogInOut = () => {
    const {setLogInOut , login_out} =useContext(Context);
    return (
        <>
          <Button onClick={()=>setLogInOut(!login_out)}> log in  </Button>
           <H1>{login_out ===true ? 'login true' : 'login false' }</H1>
        </>
    );
};

export default ButtonLogInOut;

const Button = styled.button`
width: 200px;
padding: 5px;
background-color: aqua;
color: #f0ff3e;
font-size: 30px;
font-weight: bold;
border-radius: 20px;
&:hover{
color: goldenrod;
background-color: #ff3688;
}
`;

const H1 = styled.h1`
color: pink;
font-size: 30px;
`;