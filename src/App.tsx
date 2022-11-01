import { useContext } from 'react'
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import { routeMap } from './routes/routes'
import { LoginContext } from './pages/Login/LoginProvider/LoginProvider'

function App() {
  const { loginData } = useContext(LoginContext);

  return (
    <Routes>
      <Route path='' element={<Login />}>

      </Route>

      {
        routeMap[loginData.role].map(route => {
          const Element = route.element;
          return <Route
            key={route.path}
            path={route.path} element={<Element />}
          >
          </Route>
        })
      }
    </Routes>
  );
}

export default App;


