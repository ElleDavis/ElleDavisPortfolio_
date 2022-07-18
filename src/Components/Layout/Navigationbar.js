import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigationbar =()=>{
    return(

        <div>
        <Navbar fixed="top" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">S. Elle Davis</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </div>
       
    )
}
export default Navigationbar