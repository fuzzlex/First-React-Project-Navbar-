import styled from "styled-components";
import  {Link} from "react-router-dom";




const Container = styled.div`
height : 10vh;
background-Color : purple;
display :flex;
align-items:center;
justify-content :space-around;
`;
const Title = styled.h1`
color: white;
display:inline;`

const Ul = styled.ul`
    display: flex;
    
`;
const Wrapper = styled.li`
margin :2rem 3rem;
list-style-type: none;
cursor:pointer;
padding :0.5rem;
color:white;
font-size:1rem;
text-decoration: none;
border-top:1px solid white;
border-bottom:0.5px solid white;
:hover{
    color :red;
    background-Color :white;
    transition:0.8s;
    border-radius: 2rem;
}





`;

const Navbar = () => {
    return(
    
        <Container>
        <Title>MAIN TITLE</Title>
        
        
        <Ul>
            <Link to ="/"><Wrapper >Home</Wrapper></Link>
            <Link to ="/project"><Wrapper >Project</Wrapper></Link>
            <Wrapper>Contact</Wrapper>
            <Wrapper>Comment</Wrapper>
            
        </Ul>
        
        
        </Container>
 
      

    );
};
export default Navbar;

