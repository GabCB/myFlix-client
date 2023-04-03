import { useState, useEffect } from "react"; 
import { MovieCard } from "../movie-card/movie-card";
import { UpdateUser } from "./update-user";
import { FavoriteMovies } from "./favorite-movies";
import { Link } from "react-router-dom";
import { Button, Row, Col, Container, Form, Card } from "react-bootstrap";

//import { Link } from "react-router-dom";
export const ProfileView = ({user, movies}) => {
  const storedUser = localStorage.getItem("user");
  const storedToken = localStorage.getItem("token");
  const storedMovies = JSON.parse(localStorage.getItem("movies"));

  const [token] = useState(storedToken ? storedToken: null);
  const [username, setUsername] = useState(user.Username);
  const [password, setPassword] = useState(user.Password);
  const [email, setEmail] = useState(user.Email);
  const [birthday, setBirthday] = useState(user.Birthday);
  const [favoriteMovies, setFavoriteMovies] = useState ([]);
  const [allMovies] = useState(storedMovies ? storedMovies: movies );
  const [filteredMovies, setFilteredMovies] = useState ([]);

  //show updated user on the profile
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
}
console.log("userFavoriteMovie", favoriteMovies)

useEffect(() => {
  getUser(token);
}, [])


  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <div>
                <h4>User Information</h4>
                <p>Username: {username}</p>
                <p>Birthday: {birthday}</p>
                <p>e-mail: {email}</p>
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
    </Container>
  )
};