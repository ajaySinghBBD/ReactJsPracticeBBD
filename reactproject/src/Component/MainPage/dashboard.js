import React from "react"
import { CompanyLogo, CompanyNameLabel, Container, ContainerSidebarDisplayScreen, ContentDisplayScreen, Image, LeftSidevar, Navbar, NavbarLeftLogo, NavbarRightLogo, UserProfile } from "./dashboard.styled"
import ErrorPageComponent from "../../Asset/ErrorPage"
import Logo from "../../Asset/home.svg"
import home from "../../Asset/home.svg"
import phone from "../../Asset/phone.svg"
import wifi from "../../Asset/wifi.svg"
import folder from "../../Asset/folder.svg"
import instagram from "../../Asset/instagram.svg"
import profilelogo from "../../Asset/Userlogo.svg"


const Dashborad = () => {
    return (
        <>
            <Container>
                <Navbar>
                    <NavbarLeftLogo>
                        <CompanyLogo src={instagram}></CompanyLogo>
                        <CompanyNameLabel><h2>DUSSINESS PORTAL</h2></CompanyNameLabel>
                    </NavbarLeftLogo>
                    <NavbarRightLogo>
                        <UserProfile src={profilelogo}></UserProfile>
                    </NavbarRightLogo>
                </Navbar>

                <ContainerSidebarDisplayScreen>
                    <LeftSidevar>
                        <Image src={home} />
                        <Image src={phone} />
                        <Image src={wifi} />
                        <Image src={folder} />
                    </LeftSidevar>
                    <ContentDisplayScreen></ContentDisplayScreen>
                </ContainerSidebarDisplayScreen>
            </Container>
        </>
    )
}

export default Dashborad;