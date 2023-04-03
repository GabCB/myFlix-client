import { useState, useEffect } from "react"; 
import { MovieCard } from "../movie-card/movie-card";
import { ProfileView} from "../profile-view/profile-view";
import { Button, Col, Card, Link } from "react-bootstrap";

export const FavoriteMovies = ({user, movies}) => {
  const storedUser =  JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const storedMovies = JSON.parse(localStorage.getItem("movies"));

  const [token] = useState(storedToken ? storedToken: null);
  const [username, setUsername] = useState (null);
  const [password, setPassword] = useState (null);
  const [email, setEmail] = useState (null);
  const [birthday, setBirthday] = useState (null);
  const [favoriteMovies, setFavoriteMovies] = useState ([]);
  const [allMovies] = useState(storedMovies ? storedMovies: movies );
  const [filteredMovies, setFilteredMovies] = useState ([]);

const getUser = (token) => {
  fetch(`https://moviewebapp.herokuapp.com/users/${user.Username}`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  }).then(response => response.json())
  .then ((response) => {
  console.log("getUser response", response);
  setUsername(response.Username);
  setEmail(response.Email);
  setPassword(response.Password);
  setBirthday(response.Birthday);
  setFavoriteMovies(response.FavoriteMovies)
})
console.log("userFavoriteMovie", favoriteMovies)

const favoriteMovies = movies.filter((movie) => favoriteMovies.includes(movie._id));

console.log("favoriteMovies", favoriteMovies)

useEffect(() => {
  const newList = allMovies.filter((movie) => {
    const hasMovieId = favoriteMovies.some ((m) => movie._id === m);
    if (hasMovieId) {
      return movie
    }
  })
  setFavoriteMovies (newList)
  getUser(token);
}, [])

return (
  <>
    <h4>Favorite movies</h4>
    {favoriteMovies.length === 0 ? 
    <span>No movies selected</span> : favoriteMovies.map((movie) => (
    <Col className="mb-4" key={movie._id} xs={12} md={6} lg={3}>
      <MovieCard movie={movie} />
    </Col>
     ))
   }
  </>
)

 }
}