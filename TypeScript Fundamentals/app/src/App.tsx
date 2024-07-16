import TodoList from "./components/TodoList"

const App = () => {
  const fullName: string = 'christian sachs'
  const birthYear: number = 1995
  const isAdmin: boolean = true

  // Arrays & Objects
  const favFruits: string[] = ['Apples', 'Peaches', 'Bananas']

  // create custom types with "type" keyword
  interface Locations {
    usa: string,
    europe: string
  }

  type Dog = {
    name: string,
    age: number,
    breed: string,
    locations: Locations 
  }

  const dog: Dog = {
    name: 'alpha',
    age: 6,
    breed: 'German Shepard',
    locations: {
      usa: 'USA',
      europe: 'Europe'
    }
  }

  const printToConsole = (value: string): void => {
    console.log(value)
  }
  
  return (
    <div>
      <p>Full Name: {fullName}</p>
      <p>Birth Year: {birthYear}</p>
      <p>isAdmin: {isAdmin ? 'Yes' : 'No'}</p>
      <p>{favFruits.map((fruit, idx) => (
        <li key={idx}>{fruit}</li>
      ))}</p>
      <p>My Dog's name is: {dog.name}</p>
      <button onClick={() => printToConsole('Learning TypeScript')}>Click Me</button>
    </div>
  )
}

export default App