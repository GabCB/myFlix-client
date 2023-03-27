import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { Col, Button, Container, Row } from "react-bootstrap";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(null);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (!token) {
      return;
    }
    fetch("https://moviewebapp.herokuapp.com/movies", {
      headers: { Authorization: "Bearer ${token"},
    })
      .then((response) => response.json())
      .then((movies) => {
        setMovies(movies);
        });
      }, [token]);

  return (
    <Row className="justify-content-md-center" style={{border: "1px solid red"}}>
      {!user ?(
        <Col md={5} className="text-danger">
          <h1 className="text-danger">My Flix</h1>
          <LoginView
          onLoggedIn={(user, token) => {
            setUser(user);
            setToken(token);
          }}
          />
          or
          <SignupView />
        </Col>
      ) : movies.length === 0 ? (
        <Col md={5}>
          <h2>No movies to show</h2>
        </Col>
      ) : selectedMovie ? (
        <Col md={8}>
          <MovieView
            movie={selectedMovie}
            onBackClick={() => setSelectedMovie(null)}
          />
          <hr />
          <h2 className="text-danger">Similar movies</h2>
          <Row>
            {movies
            .filter((movie) => movie.Genre.Name == selectedMovie.Genre.Name)
            .map((movie) => (
              <Col md={4} key={movie._id}>
                <MovieCard
                movie={movie}
                onMovieClick={(newSelectedMovie) => {
                  setSelectedMovie(newSelectedMovie);
                }}
                />
              </Col>
            ))}
          </Row>
        </Col>
      ) : (
        <>
          <Row>
            <Col md={3}>
              <Button
              onClick={() => {
                setUser(null);
                setToken(null);
                localStorage.clear();
               }}
              >
                Logout
              </Button>
            </Col>
          </Row>

          {movies.map((movie) => (
            <Col key={movie._id} md={3}>
              <MovieCard
                movie={movie}
                onMovieClick={(newSelectedMovie) => {
                  setSelectedMovie(newSelectedMovie);
                }} 
              />
            </Col>
          ))}
        </>
      )}
    </Row>
  );
};
