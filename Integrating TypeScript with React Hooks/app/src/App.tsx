import { useState } from "react"
import Cart from "./Cart/Cart"

interface IUser {
  name: string,
  email: string
}

const App = () => {
  const [user, setUser] = useState<IUser | null>(null)

  const handleLogin = () => {
    // simulate auth user call to database
    const authUser: IUser = {name: 'christian', email: 'csachs@ct.com'}
    setUser(authUser)
  }

  const handleLogout = () => {
    setUser(null)
  }

  return (
    <>
      <div>
        <h1>User Login</h1>
        {user?.name ? (
          <>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p> 
            <button onClick={handleLogout}>Logout</button>
          </>
        )
        : (
          <>
            <p>No user logged in.</p>
            <button onClick={handleLogin}>Login</button>
          </>
        )}
      </div>
      <Cart/>
    </>
  )
}
export default App