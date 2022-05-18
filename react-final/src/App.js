
import './App.css';

import { Route, Routes } from 'react-router-dom';
import User from './pages/User';
import Home from './pages/Home';
import Contact from './pages/Contact';

import Header  from './layout/Header';
import Footer from './layout/Footer';
import Maincont from './layout/Maincont';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <br>
      </br>
      <h1>Working with React JS</h1>
      <br></br>
     
      <Routes>
       
        <Route path="/user" element={<User />} />
        <Route path="/contact" element={<Contact/>} />
       
        <Route path="/" element={<Home />}/>
      </Routes>
      <br>
      </br>
      <Maincont></Maincont>
      <br></br>
      <Footer></Footer>
    </div>
  );
}

export default App;
