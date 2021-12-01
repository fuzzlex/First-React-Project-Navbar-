import Navbar from "../Components/navbar";
import styled from "styled-components";


const All = styled.div`
margin : 0;
padding :0;
box-sizing: border-box;
min-height:100vh;
background-Color : rgba(11,141,11,0.5);
background: url("https://picsum.photos/id/634/600/400") no-repeat center left, 
url("https://picsum.photos/id/684/600/400") no-repeat center right;
`



const Home = () =>{
    return(
        <All>
        <Navbar></Navbar>
        </All>
    )   
}

export default Home ;