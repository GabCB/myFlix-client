import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MovieCard } from "../movie-card/movie-card";
import "./movie-view.scss";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();
  const movie = movies.find((m) => m._id === movieId);
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
  const [favoriteMovies, setFavoriteMovies] = useState(user.FavoriteMovies ? user.FavoriteMovies : []);
  const [isFavorite, setIsFavorite] = useState(false);

  const addFavoriteMovie = (event) => {
    event.preventDefault();
    fetch(`https://moviewebapp.herokuapp.com/users/${user.Username}/movies/${movie._id}`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      },
    }).then((response) => response.json())
    .then ((data) => {
      setFavoriteMovies(data.FavoriteMovies);
      localStorage.setItem("user", JSON.stringify(data))
      alert("Movie added to favorites!")
    }).catch((error) => {
      console.log("Error. Please try again.", error);
    })
  }

  const deleteFavoriteMovie = (event) => {
    event.preventDefault();
    fetch(`https://moviewebapp.herokuapp.com/users/${user.Username}/movies/${movie._id}`, {
      method: "DELETE",
      headers: { 
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      },
    }).then((response) => response.json())
    .then((data) => {
      setFavoriteMovies(favoriteMovies.filter((favM) => favM !== movie._id));
      localStorage.setItem("user", JSON.stringify(data))
      alert("Movie deleted from your favorites")
      window.location.reload();
    }).catch((error) => {
      console.log("Error. Please try again.", error);
    })
  }

  const toggleMovie = () => {
    const favoriteMoviesValues = Object.values(favoriteMovies);
    favoriteMoviesValues.some(favM => favM === movie._id) ? setIsFavorite(true) : setFavoriteMovies(false);
  }

  useEffect(() => {
    toggleMovie();
  }, [])

  return (
    <Card>
      <Card.Img className ="h-50" src={movie.ImagePath} alt="the movie poster" />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>Description: {movie.Description}</Card.Text>
        <Card.Text>Genre: {movie.Genre.Name}</Card.Text>
        <Card.Text>Director: {movie.Director.Name}</Card.Text>
        <Link to={`/`}>
          <Button className="back-button">Back</Button>
          {!isFavorite && 
            <Button onClick={addFavoriteMovie} variant="success">Add to favorite</Button>
          }
          {isFavorite &&
          <Button onClick={deleteFavoriteMovie} variant="danger">Remove from favorite</Button>
          }
        </Link>
      </Card.Body>

    </Card>
  );
};
