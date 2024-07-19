import { Routes, Route } from "react-router-dom"
import Login from "./views/Login"
import Home from "./views/Home"
import UserProfile from "./views/UserProfile"
import AuthenticationGuard from "./components/AuthenticationGuard"

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/userProfile" element={<AuthenticationGuard component={UserProfile}/>}/>
    </Routes>
  )
}
export default App