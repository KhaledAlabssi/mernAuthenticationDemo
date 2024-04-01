import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Home, Signup, Login } from './pages';
function App() {
  return (
    <div className="">
      <Routes>

        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      
    </div>
  );
}

export default App;
