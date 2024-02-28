
import React, { useState } from 'react'
import { Input, Button, Container, Label } from '../StyledComponent/SignUp.styled'

const SignUpPageComponent = () => {

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    return (
        <>

            <Container >

                <Label>Username</Label>
                <Input
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(event) => {
                        setUserName(event.target.value.trimStart());
                    }}
                />
                <Label> Password </Label>
                <Input
                    type="password"
                    placeholder='Enter password'
                    value={password}
                    onChange={(event) => {
                        setPassword(event.target.value.trimStart());
                    }}
                />
                <Button>Login</Button>
            </Container>
        </>

    );
}

export default SignUpPageComponent;