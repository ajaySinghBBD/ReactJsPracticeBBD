
import React, { useState } from 'react';
import {
    Container, Card, Label, NameInput, Button, Div2,
    CardHeader, UserForm, LabelPortal, InputContainer, FooterLabel,
    Footer, LabelLogin, LabelRegistration

} from '../StyledComponent/Homepage.styled';

import { Link } from 'react-router-dom';
const SignUpPageComponent = () => {

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
                        <LabelLogin>Let's Sign-Up </LabelLogin>
                        <Label>BUZZINESS</Label>
                        <LabelPortal>Portal</LabelPortal>
                    </CardHeader>

                    <UserForm>

                        <InputContainer>
                            <Div2>
                                <LabelRegistration>Username</LabelRegistration>
                                {/* <LabelPassword><Link to="/forgetpasswordpage">Forget?</Link></LabelPassword> */}
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
                                <LabelRegistration>User-Email</LabelRegistration>
                                {/* <LabelPassword><Link to="/forgetpasswordpage">Forget?</Link></LabelPassword> */}
                            </Div2>

                            <NameInput
                                type="text"
                                placeholder="Enter email"
                                value={username}
                                onChange={(event) => {
                                    setUserName(event.target.value.trimStart());
                                }}
                            />
                        </InputContainer>

                        <InputContainer>
                            <Div2>
                                <LabelRegistration>Password</LabelRegistration>
                                {/* <LabelPassword><Link to="/forgetpasswordpage">Forget?</Link></LabelPassword> */}
                            </Div2>

                            <NameInput
                                type="text"
                                placeholder="Enter Password"
                                value={username}
                                onChange={(event) => {
                                    setUserName(event.target.value.trimStart());
                                }}
                            />
                        </InputContainer>

                        <InputContainer>
                            <Div2>
                                <LabelRegistration>Confirm-Password</LabelRegistration>
                                {/* <LabelPassword> <Link to="/forgetpasswordpage">Forget?</Link></LabelPassword> */}
                            </Div2>
                            <NameInput
                                type="password"
                                placeholder='Enter Confirm password'
                                value={password}
                                onChange={(event) => {
                                    setPassword(event.target.value.trimStart());
                                }}
                            />
                        </InputContainer>
                        <Footer>
                            <Button onClick={() => {
                                onhandleclick();
                            }}>SignUp</Button>
                            <FooterLabel>Have an Account?<Link to="/">Login?</Link></FooterLabel>
                        </Footer>

                    </UserForm>
                </Card>
            </Container>
        </>

    )
};

export default SignUpPageComponent;