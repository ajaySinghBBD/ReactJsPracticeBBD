
import React, { useState } from 'react';
import {
    Container, Card, Label, NameLabel, NameInput, Button, Div2, LabelPassword,
    CardHeader, UserForm, LabelPortal, InputContainer, FooterLabel,
    Footer, LabelLogin

} from '../StyledComponent/Homepage.styled';

import { Link, NavLink } from 'react-router-dom';
const ForgetUsernamePageComponent = () => {

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
                        <LabelLogin>"Lost your username? No problem! We'll help you retrieve it." </LabelLogin>
                        <Label>BUZZINESS</Label>
                        <LabelPortal>Portal</LabelPortal>
                    </CardHeader>

                    <UserForm>

                        <InputContainer>
                            <Div2>
                                <NameLabel>Username</NameLabel>
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

                        <Footer>
                            <Button onClick={() => {
                                onhandleclick();
                            }}>Forget Username</Button>
                            <FooterLabel>Have an Account?<Link to="/">Login?</Link></FooterLabel>
                        </Footer>

                    </UserForm>
                </Card>
            </Container>
        </>

    )
};

export default ForgetUsernamePageComponent;