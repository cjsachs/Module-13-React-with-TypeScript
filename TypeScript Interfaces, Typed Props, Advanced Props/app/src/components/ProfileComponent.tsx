import { ProfileProps } from "../models/Person.model"

const ProfileComponent = ({ student: {name, age, email}, message }: ProfileProps) => {
  return (
    <div>
        <h1>Profile Data</h1>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Message: {message}</p>
        <p>Email: {email ? email : 'No Email Provided'}</p>
    </div>
  )
}
export default ProfileComponent