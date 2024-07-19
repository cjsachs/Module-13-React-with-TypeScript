import axios from "axios"
import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"

const UserProfile = () => {
    useEffect(() => {
        getAuthUser()
    }, [])

    const getAuthUser = async () => {
        const token = sessionStorage.getItem('JWTtoken')
        const response = await axios.get('https://dummyjson.com/auth/me', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        console.log(response)
    }

  return (
    <Container>
        <h1>User Profile Page</h1>
    </Container>
  )
}
export default UserProfile