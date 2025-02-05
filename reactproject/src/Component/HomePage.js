
import React, { useContext, useEffect, useState } from 'react';
import { Link,NavLink, Navigate, useNavigate } from 'react-router-dom';
import {
    Container, Card, Label, NameLabel, NameInput, Button, Div2, LabelPassword,
    CardHeader, UserForm, LabelPortal, InputContainer, FooterLabel,
    Footer, LabelLogin, UserImage, MessageLabel

} from '../StyledComponent/Homepage.styled';
import userimage from '../Asset/UserImage.svg';
import Authcontext from '../contexthook/Contexthook_Implementations';
import UserContext from '../contexthook/Contexthook_Api';






const HomePageComponent = () => {
    const navigate = useNavigate();
    
    const contextobj =  useContext(UserContext);

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [labelhideShow , setlabelhideShow] = useState(true);

    function onhandleclick() {
        if(username==="ajay" && password==="ajay")
        {
            localStorage.setItem("username",username);
            contextobj.login(username);
            console.log("usrename  "+contextobj.user);
            navigate('/dashboard');
        }else{
            setlabelhideShow(false);
        }
       
    }

    useEffect(()=>{
            setTimeout(() => {
                setlabelhideShow(true);  
            }, 5000);
    },[labelhideShow]);

    if(contextobj.user)
    {
        return <Navigate to="/dashboard" />;
    }

    return (
        <>
            <Container >
                <Card>
                    <CardHeader>
                        <LabelLogin>Log in to your </LabelLogin>
                        <Label>BUZZINESS</Label>
                        <LabelPortal>Portal</LabelPortal>
                    </CardHeader>

                    <UserForm>
                            <UserImage src={userimage}></UserImage>
                        <InputContainer>
                     
                            <Div2>
                          
                                <NameLabel>Username</NameLabel>
                                <LabelPassword><NavLink to="/forgetUsernamepage">Forget?</NavLink></LabelPassword>
                            </Div2>
                            
                            <NameInput
                                type="text"
                                placeholder="Enter username"
                                value={username}
                                onChange={(event) => {
                                    setUserName(event.target.value.trimStart());
                                }}
                            />
                             <MessageLabel isHidden={labelhideShow}>Email-error</MessageLabel>
                        </InputContainer>

                        <InputContainer>
                            <Div2>
                                <NameLabel>Password</NameLabel>
                                <LabelPassword> <Link to="/forgetpasswordpage">Forget?</Link></LabelPassword>
                            </Div2>
                            <NameInput
                                type="password"
                                placeholder='Enter password'
                                value={password}
                                onChange={(event) => {
                                    setPassword(event.target.value.trimStart());
                                }}
                            />
                            <MessageLabel isHidden={labelhideShow}>Email-error</MessageLabel>
                        </InputContainer>
                        <Footer>
                            <Button onClick={() => {
                                onhandleclick();
                            }}>Login</Button>
                            <FooterLabel>Don't have an Account?<Link to="/signup">Register?</Link></FooterLabel>
                        </Footer>

                    </UserForm>
                </Card>
            </Container>
        </>

    )
};

export default HomePageComponent;