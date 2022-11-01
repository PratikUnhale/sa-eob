import { createContext, PropsWithChildren, useEffect, useReducer } from 'react';
import { ILoginContext, Role } from './LoginProvider.types';


export const LoginContext = createContext<any>(null);

const loginReducer = (state: ILoginContext, action: { type: string, data: ILoginContext }) => {
    switch (action.type) {
        case "LOGIN_SUCCESSFUL":
            return action.data;
        default:
            return state;
    }
}

export const LoginProvider = ({ children }: PropsWithChildren<any>) => {
    const [state, setState] = useReducer(loginReducer, { isLoggedIn: false, role: '' });

    const value = {
        loginData: state,
        onLogin: (loginData: { token: string, role: Role }) => {
            setState({ type: "LOGIN_SUCCESSFUL", data: { isLoggedIn: true, role: loginData.role } })
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        const role = localStorage.getItem('role') as Role;

        if (token && role) {
            setState({ type: "LOGIN_SUCCESSFUL", data: { isLoggedIn: true, role: role } })
        }
    }, []);

    return (
        <LoginContext.Provider value={value}>
            {children}
        </LoginContext.Provider>
    )
}