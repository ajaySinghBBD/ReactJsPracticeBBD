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


export const Div2 = styled.div({
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"baseline",
    columnGap:"160px",

});

export const Label =  styled.label({
    fontSize:"30px",
    color:"black",
    fontWeight:"1px",
    marginTop:"30px"
});





export const NameLabel = styled.label({
    fontSize:"20px",
    // color:"green",
    // fontWeight:"bold",
    marginTop:"30px",
    marginBottom:"4px"
});

export const NameInput = styled.input({
    width: '60%',
    padding: '10px',
    borderRadius: '8px'
});

export const Button = styled.button({
    paddingRight: '50px',
    paddingLeft: '50px',
    paddingTop: '10px',
    paddingBottom: '10px',
    border: '0px',
    borderRadius: '8px',
    backgroundColor: "wheat",
    marginTop:'20px'
});



export const LabelPassowrd = styled.label({
    fontSize:"15px",
    // marginTop:"33px"
});








