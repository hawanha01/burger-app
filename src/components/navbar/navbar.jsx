import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'
import { Link } from 'react-router-dom';
function MyNavbar() {
  return (
    <Navbar collapseOnSelect expand='lg' className='custome-navbar'>
      <Container>
        <Link to='/'><img src='../../public/assets/media/burger.jpg' alt='myBurger'/></Link>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
          </Nav>
          <Nav>
            <Link to='/'>Burger Builder</Link>
            <Link to='/orders'>Order</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;