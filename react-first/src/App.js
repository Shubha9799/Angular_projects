
import './App.css';
import Contact from './contact';
import img1 from './images/img1.png';
import Comment from './comment';

function App() {
  
    
    let myTitle="Welcome to react js";
    return (
      <div>
        <h2>{myTitle}</h2>
        <header>
          <img src={img1} width="700" height="200"></img>
          <Contact></Contact>
        </header>
        <pre>-------I am in class based component--comment-----------</pre>
        <Comment text="Today is Friday" date=" Date: 13th May,2022"></Comment>
      </div>
  );
}

export default App;
