import './App.css'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import Home from './pages/Home/Home'
import Detail from './pages/Detail/Detail';
import CreatePokemon from './pages/Create Pokemon/CreatePokemon';
import User from './pages/User/User';
import Nav from './components/Nav/Nav';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {

  const location = useLocation();

  return (
    <div>
    {
  location.pathname !== '/' &&
  location.pathname !== '/login' &&
  location.pathname !== '/register' &&
  <Nav />
}
      <Routes>
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<CreatePokemon />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

    </div>
  )
}

export default App
