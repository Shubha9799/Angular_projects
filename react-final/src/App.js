
import './App.css';

import { Route, Routes } from 'react-router-dom';
import User from './pages/User';
import Home from './pages/Home';

import Header  from './layout/Header';
import Footer from './layout/Footer';
import Maincont from './layout/Maincont';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <br>
      </br>
      <h1>Routes</h1>
      <br></br>
      <Maincont></Maincont>
      <br></br>
      <Routes>
       
        <Route path="/user" element={<User />} />
       
        <Route path="/" element={<Home />}/>
      </Routes>
      <br>
      </br>
      <Footer></Footer>
    </div>
  );
}

export default App;
