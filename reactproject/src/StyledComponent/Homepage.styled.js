import styled from "styled-components"

export const Container = styled.div({
    backgroundColor: 'black',
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: '100%',
    height: '100vh',
})

export const Card = styled.div({

    width: "35%",
    height: "94vh",
    display: "flex",
    flexDirection:"column",
    justifyContent: "flex-start", // Center the content vertically
    alignItems: "center", // Center the content horizontally
    backgroundColor: 'white',
    marginRight: "20px",
    borderRadius: "10px",
    boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",


});

export const Label =  styled.label({
    fontSize:"30px",
    color:"black",
    fontWeight:"1px",
    marginTop:"30px"
   

   
    
})



