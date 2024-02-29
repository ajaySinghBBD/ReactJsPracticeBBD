
import React, { useState } from 'react';
import { Link,NavLink } from 'react-router-dom';
import {
    Container, Card, Label, NameLabel, NameInput, Button, Div2, LabelPassword,
    CardHeader, UserForm, LabelPortal, InputContainer, FooterLabel,
    Footer, LabelLogin,Color

} from '../StyledComponent/Homepage.styled';


const HomePageComponent = () => {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    function onhandleclick() {
        console.log("i am cliock")
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