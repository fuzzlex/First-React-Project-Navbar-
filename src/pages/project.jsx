import styled from "styled-components";
import Navbar from "../Components/navbar";

const All = styled.div`
min-height : 100vh;
background-Color : rgba(11,141,11,0.5);
background: url("https://picsum.photos/id/33/600/400") no-repeat center left, 
url("https://picsum.photos/id/89/600/400") no-repeat center right;
`


const Project = () => {
    return(
        <All>
        <Navbar></Navbar> 
        </All>

    );
};
export default Project;

