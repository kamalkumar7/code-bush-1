import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from './context/AuthContext'

function App() {

  const { user } = useContext(AuthContext);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="register" element={user ? <Navigate path="/" /> : <Register />} />
            <Route path="login" element={user ? <Navigate path="/" /> : <Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
