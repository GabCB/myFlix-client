import { Button, Row, Col } from "react-bootstrap";
import { MovieCard } from "../movie-card/movie-card";
//import { Link } from "react-router-dom";
export const ProfileView = ({
  movies,
  user,
  onUsernameUpdate,
  onDeregister,
}) => {
  return (
    <>
      <h1 className="text-danger">Profile</h1>
      <div>
        <div>
          <span className="text-danger">Name: </span>
          <span className="text-danger">{username}</span>
          <Button onClick={onUsernameUpdate}>Update</Button>
        </div>
        <div>
          <span className="text-danger">Email</span>
          <span className="text-danger">{email}</span>
        </div>
        <div>
          <span className="text-danger">Brithday: </span>
          <span className="text-danger">{birthday}</span>
        </div>
        <div>
          <Button onClick={onDeregister}>Deregister</Button>
        </div>
      </div>
      <Row>
        {movies
          .filter((m) => user.favouriteMovies.includes(m._id))
          .map((m) => (
            <>
              <Col md={6} key={movie._id}>
                <MovieCard movie={m} />
              </Col>
              <Button>Remove</Button>
            </>
          ))}
      </Row>
    </>
  );
};