import ApiStatus from "./components/ApiStatus"
import Button from "./components/Button"
import ProfileComponent from "./components/ProfileComponent"
import { Person, ProfileProps } from "./models/Person.model"

const App = () => {

  const studentData: Person = {
    name: 'Josh',
    age: 99,
    email: 'Josh@ct.com'
  }

  const profileData: ProfileProps = {
    student: studentData,
    message: 'GOATED'
  }

  const handleClick = () => {
    console.log('logging')
  }

  return (
    <div>
      <ProfileComponent {...profileData}/>
      <ApiStatus/>
      <Button handleClickProps={handleClick}/>
    </div>
  )
}
export default App