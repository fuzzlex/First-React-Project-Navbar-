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
color: red;
display:inline;`

const Ul = styled.ul`
    display: flex;
    
`;
const Wrapper = styled.li`
margin :2rem 3rem;
list-style-type: none;
cursor:pointer;
padding :1rem;
color:red;
font-size:1rem;
text-decoration: underline;
:hover{
    color :red;
    background-Color :white;
    border-radius: 2rem 0 2rem 0
}
:after{
    background-Color: white;
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

