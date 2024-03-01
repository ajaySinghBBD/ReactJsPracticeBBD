
import React from 'react'
import { MainContainer, Container, Navbar, SideNavbar,Image } from '../StyledComponent/MainPage.styled';
// import logo from "./Asset/img.svg";
import home from "../Asset/home.svg";
import phone from "../Asset/phone.svg"
import wifi from "../Asset/wifi.svg";
import folder from "../Asset/folder.svg";




const MainPageComponent = () => {
    return (
        <>
            <Container>
                <Navbar>
                    <Image src={home}></Image>
                    <Image src={home} ></Image>
                </Navbar>

                <SideNavbar>
                    <Image src={home} />
                    <Image src={phone}  />
                    <Image src={wifi}  />
                    <Image src={folder} />
                </SideNavbar>
                <MainContainer></MainContainer>
            </Container>
        </>
    );
}

export default MainPageComponent;