
import React, { useState } from 'react'

const HomePageComponent = () => {

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    return (
        <>
            <div style={{ display: 'flex', flexDirection:'column'}} >
                <input
                    type="text"
                    value={username}
                    onChange={(event) => {
                        setUserName(event.target.value.trimStart());
                    }}
                />
                <input
                    type="password"
                    value={password}
                    onChange={(event) => {
                        setPassword(event.target.value.trimStart());
                    }}
                />
                <h1>UserName:-{username}</h1>
                <h1>Password:-{password}</h1>
            </div>
        </>

    );
}

export default HomePageComponent;