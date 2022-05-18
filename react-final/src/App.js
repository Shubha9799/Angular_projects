
import './App.css';

import { Route, Routes } from 'react-router-dom';
import User from './pages/User';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <h1>Routes</h1>
      <br></br>
      <Routes>
       
        <Route path="/user" element={<User />} />
        <Route path="/home" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
