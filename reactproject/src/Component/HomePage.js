
import React, { useState } from 'react';


import { Container, Card, Label, NameLabel, NameInput, Button, Div2, LabelPassowrd } from '../StyledComponent/Homepage.styled';
import SignUpPageComponent from './RegistrationPage';
import { Link } from 'react-router-dom';
const HomePageComponent = () => {

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    return (
        <>
            <Container >
                <Card>

                    <Label>REGISTRATION PAGE</Label>
                {/* <Box></Box>     */}
                    <Div2>
                        <NameLabel>Username</NameLabel>
                        <LabelPassowrd><Link to="/forgetpasswordpage">Forget?</Link></LabelPassowrd>
                    </Div2>

                    <NameInput
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(event) => {
                            setUserName(event.target.value.trimStart());
                        }}
                    />
                    <Div2>
                        <NameLabel>Password</NameLabel>
                        <LabelPassowrd> <Link to="/forgetpasswordpage">Forget?</Link></LabelPassowrd>
                    </Div2>
                    <NameInput
                        type="password"
                        placeholder='Enter password'
                        value={password}
                        onChange={(event) => {
                            setPassword(event.target.value.trimStart());
                        }}
                    />
                    <Button>Login</Button>
                </Card>
            </Container>
        </>

    )
};

export default HomePageComponent;