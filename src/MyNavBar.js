import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from  './icons_assets/Logo.svg'

export const MyNavBar = () => {
    return (
        <>
            <Navbar expand="lg" className="nav">
                <Container>
                    <Navbar.Brand href="#home"><img src = {logo} alt = 'logo'/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#menu">Menu</Nav.Link>
                            <Nav.Link href="#reservation">Reservations</Nav.Link>
                            <Nav.Link href="#orderonline">Order Online</Nav.Link>
                            <Nav.Link href="#login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}