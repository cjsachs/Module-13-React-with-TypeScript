import { withAuthenticationRequired } from "@auth0/auth0-react"
import { ReactNode } from "react"

interface ComponentProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: ReactNode | any
}

const AuthenticationGuard = ({ component }: ComponentProps) => {
    const Component = withAuthenticationRequired(component, {
        onRedirecting: () => <div>Redirecting to Login Page...</div>
    })
    return <Component/>
}
export default AuthenticationGuard