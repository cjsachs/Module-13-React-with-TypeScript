import { useAuth0 } from '@auth0/auth0-react';
import { Container, Spinner } from 'react-bootstrap';
import NavigationBar from '../components/NavigationBar';
import { useState } from 'react';

const UserProfile = () => {
    const [token, setToken] = useState<string>('')
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();

  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  const getToken = async () => {
    const response = await getAccessTokenSilently()
    setToken(response)
  }

  return (
    <>
        <NavigationBar/>
        <Container>
        {isAuthenticated && (
            <div>
            <img src={user?.picture} alt={user?.name} />
            <h2>{user?.name}</h2>
            <p>{user?.email}</p>
            <button className='btn btn-dark' onClick={getToken}>Show Token</button>
            {token && (
                <p>{token}</p>
            )}
            </div>
        )}
        </Container>
    </>
  );
};
export default UserProfile;
