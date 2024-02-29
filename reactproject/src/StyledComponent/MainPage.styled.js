
import React from "react";
import styled from "styled-components";


export const Container = styled.div({
    backgroundColor: 'black',
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: '100%',
    height: '100vh',
    zIndex:0
});

export const MainContainer = styled.div({
    width:"92%",
    height:"87%",
    // margin:"10% 0px 0px 8%",
    backgroundColor:"white",
    borderRadius:"20px 0px 0px 0px",
});

export const Navbar =  styled.div({
        position:"absolute",
        top:"30px",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        left:"0px",
        width:"100%"
       
});

export const SideNavbar =  styled.div({
    position:"relative",
    top:"105px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"flex-start",
    alignItems:"center",
    left:"64px",
    height:"100vh",
    zIndex:22
})
