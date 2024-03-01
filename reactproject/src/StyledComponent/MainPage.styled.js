
import React from "react";
import styled from "styled-components";


export const Container = styled.div({
    backgroundColor: 'rgb(24,28,36)',
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
    borderRadius:"22px 0px 0px 0px",
});

export const Navbar =  styled.div({
        position:"absolute",
        top:"9px",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"baseline",
        left:"24px",
        width:"94%"
       
});

export const SideNavbar =  styled.div({
    position:"absolute",
    top:"125px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"flex-start",
    alignItems:"center",
    left:"11px",
    height:"85vh",
    zIndex:22,
    width:"100px"
});

// export const Image = styled.img({
//     padding:"20px",
//     marginTop:"15px",
//     backgroundColor:"rgb(52,60,76)",
//     borderRadius:"15px"

//     background-clip: padding-box;
//     -webkit-background-clip: padding-box;
//     border-radius: 15px;
//     position: relative;
//     transition: background 0.3s;

//     &:hover {
//         background: linear-gradient(to bottom, #e0040e 50%, #a12895 50%);
//     }

// })




export const Image = styled.img`
    padding: 20px;
    margin-top: 10px;
    background-color: rgb(52, 60, 76);
    background-clip: padding-box;
    -webkit-background-clip: padding-box;
    border-radius: 15px;
    position: relative;
    transition: background 0.3s;

    &:hover,
    &:active {
        background: linear-gradient(to bottom, #e0040e 40%, #a12895 60%);
    }
`;

