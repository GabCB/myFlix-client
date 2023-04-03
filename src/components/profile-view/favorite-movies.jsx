import PropTypes from "prop-types";
import { Col } from "react-bootstrap";
import { MovieCard } from "../movie-card/movie-card";

function FavoriteMovies ({movies, removeMovie, user}) {
  let favoriteMovies = movies.filter (function(movie) {
    return user.FavoriteMovies.includes(movie._id);
  });
  let printFavoriteMovies;

  if (favoriteMovies.length === 0) {
    printFavoriteMovies = (
      <Col className="mt-4">You have not added any movies yet</Col>
    );
  } else {
    printFavoriteMovies = favoriteMovies.map(function(movie) {
      return (
        <Col>
          <MovieCard
          isfavMovieCard = {true}
          movie={movie}
          removeMovie={removeMovie}
          />
        </Col>
      );
    });
  }
  return <>
  <h4>Favorite movies</h4>
  {printFavoriteMovies}
  </>;

}
 export {FavoriteMovies};

FavoriteMovies.propTypes= {
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
  removeMovie: PropTypes.func.isRequired,
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Birthday: PropTypes.string.isRequired,
    FavoriteMovies: PropTypes.array,
  }).isRequired,
};
