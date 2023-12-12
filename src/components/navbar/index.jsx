import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/burger.jpg";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../actions/LoginActions";

function MyNavbar() {
  const user = useSelector((state) => state.user.user);
  const baseStyle = {
    textDecoration: "none",
    color: "white",
    padding: "0 0.25rem",
    margin: "0",
  };
  const orderStyle = {
    ...baseStyle,
    backgroundColor: window.location.pathname.includes("orders")
      ? "#E19E5E"
      : "",
    borderBottom: window.location.pathname.includes("orders")
      ? "4px solid #40a4c8"
      : "",
  };
  const loginStyle = {
    ...baseStyle,
    backgroundColor: window.location.pathname.includes("login")
      ? "#E19E5E"
      : "",
    borderBottom: window.location.pathname.includes("login")
      ? "4px solid #40a4c8"
      : "",
  };
  const homeStyle = {
    ...baseStyle,
    backgroundColor:
      window.location == "http://localhost:3000/" ? "#E19E5E" : "",
    borderBottom:
      window.location == "http://localhost:3000/" ? "4px solid #40a4c8" : "",
  };

  const dispatch = useDispatch();

  return (
    <Navbar collapseOnSelect expand="lg" className="custome-navbar">
      <Container>
        <div className="navTitleWrapper">
          <Link to="/">
            <img className="navTitle" src={logo} alt="myBurger" />
          </Link>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Link className="Link" style={homeStyle} to="/">
              Burger Builder
            </Link>
            <Link className="Link" style={orderStyle} to="/orders">
              Order
            </Link>
            {Object.keys(user).length === 0 ? (
              <Link className="Link" style={loginStyle} to="/login">
                Login
              </Link>
            ) : (
              <Link
                className="Link"
                style={baseStyle}
                onClick={() => dispatch(logoutUser())}
              >
                {" "}
                logout{" "}
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
