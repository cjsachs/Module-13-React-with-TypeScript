import { useReducer, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import cartReducer, { getInitialState, Item, removeItem } from './cartSlice'
import { addItem } from './cartSlice';

const Cart = () => {
  const [itemName, setItemName] = useState<string>('');
  const [state, dispatch] = useReducer(cartReducer, getInitialState())

  const handleAddItem = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const newItem: Item = {
        id: Date.now(),
        name: itemName
    }
    dispatch(addItem(newItem))
    setItemName('')
  }

  const handleRemoveItem = (id: number): void => {
    dispatch(removeItem(id))
  }

  return (
    <div>
      <Form onSubmit={handleAddItem}>
        <Form.Group className="mb-3" controlId="addItem">
          <Form.Label>Add Item:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Item"
            onChange={(event) => setItemName(event.target.value)}
            value={itemName}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Item
        </Button>
      </Form>
      <h2>Current Cart:</h2>
      <ul>
        {state.cart.map((item, idx) => (
            <li key={idx}>
                <p>{item.name}</p>
                <button onClick={() => handleRemoveItem(item.id)} className='btn btn-danger'>Remove</button>
            </li>
        ))}
      </ul>
    </div>
  );
};
export default Cart;
