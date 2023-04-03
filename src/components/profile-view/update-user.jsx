import {useState, useEffect } from "react";
import { Button, Row, Col, Container, Form, Card } from "react-bootstrap";

export const UpdateUser = ({ user }) => {
  const storedUser =  JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const storedMovies = JSON.parse(localStorage.getItem("movies"));

  const [token] = useState(storedToken ? storedToken: null);
  const [username, setUsername] = useState (null);
  const [password, setPassword] = useState (null);
  const [email, setEmail] = useState (null);
  const [birthday, setBirthday] = useState (null);
  
  const handleSubmit = async(event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday
    };
  
  console.log(data)

    const updateUser = await fetch("https://moviewebapp.herokuapp.com/users/${user.Username}", {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"},
   })


    const response = await updateUser.json()
    console.log(response)
    if (response) {
      alert("Your account has been successfully updated! Please log in again.");
      localStorage.clear();
      window.location.reload();
    } else {
      alert ("Something didn't work as expected. Please try again.");
    }
  };

  const handleDeregister = () => {
    fetch("https://moviewebapp.herokuapp.com/users/${user.Username}", {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
      }
  }).then ((response) => {
    if (response.ok) {
      alert("The account has been successfully deleted.");
      localStorage.clear();
      window.location.reload();
    } else {
      alert("Something didn't work as expected. Please try again.");
      }
    });
  };

  return (
    <>
      <h4>Update Profile Information</h4>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group>
            <Form.Label>Username: </Form.Label>
            <Form.Control
            type="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password: </Form.Label>
            <Form.Control
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email: </Form.Label>
            <Form.Control
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Birthday: </Form.Label>
            <Form.Control
            type="date"
            value={birthday}
            onChange={e => setBirthday(e.target.value)}
            />
          </Form.Group>
          <Button type="submit" className="button-primary mt-3">Save changes</Button>
        </Form>
        <Button onClick={() => handleDeregister(user._id)} className="button-delete mt-3" type="submit" variant="danger">Delete account</Button>
    </>
  )
}