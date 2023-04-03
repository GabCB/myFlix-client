import { Navbar, Container, Nav } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./navigation-bar.scss";


function NavigationBar ({ user, onLoggedOut }) {
  return (
    <Navbar bg="light"  expand="lg" sticky="top">
      <Container mb={5}>
        <Navbar.Brand as={Link} to="/" className="logo" >
          myFlix
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!user && (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  Signup
                </Nav.Link>
              </>
            )}
            {user && (
              <>
                <Nav.Link as={Link} to="/">
                  Movies
                </Nav.Link>
                <Nav.Link as={Link} to="/profile">
                  Profile
                </Nav.Link>
                <Nav.Link onClick={onLoggedOut}>Logout</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export { NavigationBar };

NavigationBar.propTypes = {
  onLoggedOut: PropTypes.func.isRequired,
  user: PropTypes.shape ({
    _id: PropTypes.string.isRequired,
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Birthday: PropTypes.string.isRequired,
    FavoriteMovies: PropTypes.array,
  }),
};