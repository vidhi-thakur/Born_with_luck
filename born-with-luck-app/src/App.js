import { useState } from "react"
import './App.css';
import logo from "./images/logo.svg"

function App() {

  const [close, setClose] = useState(false)

  return (
    <div style={{ backgroundImage: `url(${logo})`, backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundAttachment: "fixed" }} className="app">
      <div id="app__containerOne">
        <div className="app__topContainer app__container">
          <h1>Is Your Birthday Lucky?</h1>
          <a href="#app__bottomContainer">Scroll down to check 👇</a>
        </div>
      </div>

      <div id="app__containerTwo">
        <div id="app__bottomContainer" className="app__container">
          {!close && <div className="app__privacyNotice">
            <span style={{ fontWeight: "bold" }}>Privacy Notice!</span> We are not storing your data.     <span style={{ cursor: "pointer" }} onClick={() => setClose(true)}>   ❌</span>
          </div>}
          <h2>Enter Your Birthdate and lucky number to continue...</h2>
          <form>
            <p>Select your Birth date:</p>
            <input className="app__input" type="date" required />
            <p>Enter your Lucky Number:</p>
            <input min="1" className="app__input" type="number" required />
            <br />
            <button className="app__button" type="submit">CHECK</button>
          </form>
          <footer>
            <ul>
              <li><a href="/">Github</a></li>
              <li><a href="/">LinkedIn</a></li>
              <li><a href="/">Portfolio</a></li>
            </ul>
          </footer>
        </div>
      </div>

    </div>
  );
}

export default App;
