import { Button, Col, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { MovieCard } from "../movie-card/movie-card";
import "./movie-view.scss";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();
  const movie = movies.find((m) => m._id === movieId);

  return (
    <>
      <div>
        <div>
          < img className ="w-100" src={movie.ImagePath} alt="the movie poster" />
        </div>
        <div>
          <span>Title: </span>
          <span>{movie.Title}</span>
        </div>
        <div>
          <span>Description: </span>
          <span>{movie.Description}</span>
        </div>
        <div>
          <span>Genre: </span>
          <span>{movie.Genre.Name}</span>
        </div>
        <div>
          <span>Director: </span>
          <span>{movie.Director.Name}</span>
        </div>
        <Link to={`/`}>
          <button className="back-button">Back</button>
        </Link>
      </div>
      <br />
      <h2>Similar movies</h2>
      <Row>
        {movies
        .filter((m) => m.Genre.Name === movie.Genre.Name && m._id != movie._id)
        .map((m) => (
          <Col md={6} key={movie._id}>
            <MovieCard movie={m} />
          </Col>
        ))}
      </Row>
    </>
  );
};
