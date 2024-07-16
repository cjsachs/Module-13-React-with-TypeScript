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
      <TodoList/>
    </div>
  )
}

export default App