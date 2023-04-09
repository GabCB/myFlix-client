import { useState } from "react";
//import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {toast} from "react-toastify";

export const LoginView = ({onLoggedIn}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    //this prevents the default behaviour of the form which is to reload the entire page
    event.preventDefault();

  const data = {
    Username: username,
    Password: password
  };

  fetch ("https://moviewebapp.herokuapp.com/login", {
    method: "POST",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(data)
  })
  .then((response) => response.json())
  .then((data) => {
    console.log("Login response: ", data);
    if (data.user) {
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);
      onLoggedIn(data.user, data.token);
    } else {
      toast.error('Failed to login with message ! '+data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  })
  .catch((e) => {
    alert("Something went worng. Please try again.");
  });
}

return (
  <Form onSubmit={handleSubmit}>
    <Form.Group controlId="formUsername">
      <Form.Label>Username:</Form.Label>
      <Form.Control
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        minLength="3"
      />
    </Form.Group>

    <Form.Group controlId="formPassword">
      <Form.Label>Password:</Form.Label>
      <Form.Control
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
    </Form.Group>

    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  );
};