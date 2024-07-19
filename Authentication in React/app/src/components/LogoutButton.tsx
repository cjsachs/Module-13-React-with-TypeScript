import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <Button
      className="btn btn-danger"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Logout
    </Button>
  );
};
export default LogoutButton;
