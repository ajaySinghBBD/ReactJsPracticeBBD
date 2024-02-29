
import React from 'react'
import { MainContainer, Container, Navbar, SideNavbar } from '../StyledComponent/MainPage.styled';
import logo from "./img.svg";

const MainPageComponent = () => {
    return (
        <>
            <Container>
                <Navbar>
                    
                    <img src={logo} />
                    <img src={logo} />
                </Navbar>

                <SideNavbar>
                    <img src={logo} />
                    <img src={logo}  />
                    <img src={logo}  />
                    <img src={logo} />
                </SideNavbar>
                <MainContainer></MainContainer>
            </Container>
        </>
    );
}

export default MainPageComponent;