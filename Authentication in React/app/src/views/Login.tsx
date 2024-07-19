import { Container } from "react-bootstrap"
import { Form } from "react-router-dom"
import LoginButton from "../components/LoginButton"
import LogoutButton from "../components/LogoutButton"

const Login = () => {
  return (
    <Container>
      <h1>Login Page (Auth0)</h1>
      <LoginButton/>
      <LogoutButton/>
    </Container>
  )
}
export default Login