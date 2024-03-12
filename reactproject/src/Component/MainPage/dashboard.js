import React, { useContext } from "react"
import {CompanyLogo, CompanyNameLabel, Container, ContainerSidebarDisplayScreen, ContentDisplayScreen, Image, LeftSidevar, Navbar, NavbarLeftLogo, NavbarRightLogo, UserProfile } from "./dashboard.styled"
import home from "../../Asset/home.svg"
import phone from "../../Asset/phone.svg"
import wifi from "../../Asset/wifi.svg"
import folder from "../../Asset/folder.svg"
import instagram from "../../Asset/instagram.svg"
import profilelogo from "../../Asset/Userlogo.svg"
import logout from "../../Asset/logout.svg"
import UserContext from "../../contexthook/Contexthook_Api"
import { Navigate } from "react-router-dom"


const Dashborad = () => {
    const contextobj =  useContext(UserContext);
    console.log("username on homepage"+ contextobj.user)
    const onhandleLogout = () =>{
        alert("Bye Bye logout")
            contextobj.logout();
            if(!contextobj.user){
                return <Navigate to="/" />
            }
    };
  
    return (
        <>
            <Container>
                <Navbar>
                    <NavbarLeftLogo>
                        <CompanyLogo src={instagram}></CompanyLogo>
                        <CompanyNameLabel><h2>DUSSINESS {contextobj.user}</h2></CompanyNameLabel>
                    </NavbarLeftLogo>
                    <NavbarRightLogo>
                        <UserProfile src={profilelogo}></UserProfile>
                        <UserProfile src={logout} onClick={()=>{onhandleLogout()}}></UserProfile>
                        {/* <LogOutButton src={profilelogo}></LogOutButton> */}
                    </NavbarRightLogo>
                </Navbar>

                <ContainerSidebarDisplayScreen>
                    <LeftSidevar>
                        <Image src={home} tooltip="Click to go home" />
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
// }


export default Dashborad;