import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";

const NavigationBar = () => {
    const { user, isAuthenticated } = useAuth0()

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">GOATED REACT APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
            <Nav.Link as={Link} to={'/userProfile'}>Profile</Nav.Link>
            {isAuthenticated ? (
                <>
                    <img style={{ width: '80px', borderRadius: '50%'}} src={user?.picture} alt={user?.name} />
                    <LogoutButton/>   
                </>
            ) : <LoginButton/>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavigationBar