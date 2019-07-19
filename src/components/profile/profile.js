import React ,{useContext} from 'react';
import {Context} from "../store/store";
import styled from 'styled-components';

const Profile = () => {
    const {profile} = useContext(Context);
    let {
        avatar ,
        first_name ,
        id ,
        country ,
        email ,
        description ,
        last_name
    } = profile;
    let ava = avatar.replace('80x80' , '300x300');
    return (
        <div className="profile-box">
            <div className={`profile-image-box`}>
                <img src={ava} alt={first_name}/>
            </div>
            <div className={`prifile-details`}>
                <H2 className={`profile-title`}>{first_name} {last_name}</H2>
                <span className={`grad-line mt-20`}></span>
                <H5 className={`profile-details mt-20`}>id:{id}</H5>
                <H5 className={`profile-details`}>country:{country}</H5>
                <H5 className={`profile-details`}>email:{email}</H5>
                <P>Description:{description}</P>
            </div>
        </div>
    );
};

export default Profile;
const H5 = styled.h5`
color: #ff921d;
font-size: 20px;
&:hover{
color: blue;
`;
const H2 = styled.h2`
color: #ffe61f;
font-size: 50px;
font-weight: 700;
&:hover{
color: blue;
`;
const P = styled.p`
color: #ff1291;
font-size: 15px;
font-weight: 700;
&:hover{
color: blue;

}
`;
