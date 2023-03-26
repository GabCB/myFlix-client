import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <Card>
      <Card.Img variant="top" src={movie.image} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Director}</Card.Text>
        <Button onClick={() => onMovieClick(movie)}variant="link">
          Open
        </Button>
      </Card.Body>
    </Card>
  );
};

//here is where we define all the props constraints for the MovieCard
MovieCard.propTypes = {
  movie: PropTypes.shape({
    //title: PropTypes.string.isRequired
//    image: PropTypes.string.isRequired,
//    director: PropTypes.string
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};