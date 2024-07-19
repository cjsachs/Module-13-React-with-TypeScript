import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import axios, { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthDemo = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response: AxiosResponse<any, any> = await axios.post('https://dummyjson.com/auth/login', {
        username: 'emilys',
        password: 'emilyspass'
      })
      const token: string = response.data.token
      sessionStorage.setItem('JWTtoken', token)
      navigate('/userProfile')
    } catch (err) {
      console.log('Invalid Credentials', err)
    }
  }

  const handleLogout = () => {
    sessionStorage.clear()
  }

  return (
    <Container>
      <h1>Login Page</h1>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username:"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password:"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <Button className='btn btn-danger' onClick={handleLogout}>
          Logout
        </Button>
      </Form>
    </Container>
  );
};
export default AuthDemo;
