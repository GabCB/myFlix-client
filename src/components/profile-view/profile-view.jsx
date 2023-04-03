import PropTypes from "prop-types";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import { UpdateUser } from "./update-user";
import { FavoriteMovies } from "./favorite-movies";
import { Link } from 'react-router-dom';
import "./profile-view.scss";

function ProfileView ({
  movies,
  removeMovie,
  user
}) {
 
return (
<Container>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <div>
                <h4>User Information</h4>
                <p>Username: {user.Username}</p>
                <p>Birthday: {user.Birthday.slice(0, 10)}</p>
                <p>e-mail: {user.Email}</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <UpdateUser user={user} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <FavoriteMovies user={user} movies={movies} />
      </Row>
      <Row>
        <div>
          <Button
            className="back-button"
            as={Link}
            to={"/"}
          >
            Back
          </Button>
        </div>
      </Row>
    </Container>
  )
};

export { ProfileView}; 

ProfileView.propTypes= {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      Title: PropTypes.string.isRequired,
      Description: PropTypes.isRequired,
      Genre: PropTypes.shape ({
        Name: PropTypes.string.isRequired,
      }).isRequired,
      Director: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        Bio: PropTypes.string.isRequired
      }).isRequired,
      ImagePath: PropTypes.string.isRequired,
    })
  ).isRequired,
};

