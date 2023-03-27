import { Button, Col, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./movie-view.scss";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();
  const movie = movies.find((m) => m._id === movieId);

  return (
    <div>
      <div>
        <div>
          < img className ="w-100" src={movie.imagePath} alt="the movie poster" />
        </div>
        <div>
          <span className="text-danger">Title: </span>
          <span className="text-danger">{movie.Title}</span>
        </div>
        <div>
          <span className="text-danger">Description: </span>
          <span className="text-danger">{movie.Description}</span>
        </div>
        <div>
          <span className="text-danger">Genre: </span>
          <span className="text-danger">{movie.Genre.Name}</span>
        </div>
        <div>
          <span className="text-danger">Director: </span>
          <span className="text-danger">{movie.Director.Name}</span>
        </div>
        <Link to={`/`}>
          <button className="back-button">Back</button>
        </Link>
      </div>
      <br />
      <h2 className="text-danger">Similar movies</h2>
      <Row>
        {movies
        .filter((m) => m.genre.name === movie.Genre.Name)
        .map((m) => (
          <Col md={6} key={movie._id}>
            <MovieCard movie={m} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
