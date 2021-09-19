import { useState } from "react"
import './App.css';
import logo from "./images/logo.svg"
import sad from "./images/sad.svg"
import happy from "./images/happy.svg"

function App() {

  const [close, setClose] = useState(false)
  const [display, setDisplay] = useState(false)
  const [lucky, setLucky] = useState(false)
  const [date, setDate] = useState("")
  const [number, setNumber] = useState(null)

  const onClickResultHandler = () => {
    const array = date.split("-")
    let sum = 0
    array.map(item => {
      for (var i = 0; i < item.length; i++) {
        sum = sum + Number(item[i])
      }
    })
    let result = sum % Number(number)
    if (result === 0) {
      setDisplay(true)
      setLucky(true)
    } else {
      setDisplay(true)
      setLucky(false)
    }
  }

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
          {!close && <div className="app__privacyNotice app__innerContainer">
            <span style={{ fontWeight: "bold" }}>Privacy Notice!</span> We are not storing your data.     <span style={{ cursor: "pointer" }} onClick={() => setClose(true)}>   ❌</span>
          </div>}
          <h2>Enter Your Birthdate and lucky number to continue...</h2>
          <form>
            <p>Select your Birth date:</p>
            <input value={date} onChange={(e) => setDate(e.target.value)} className="app__input" type="date" required />
            <p>Enter your Lucky Number:</p>
            <input value={number} onChange={(e) => setNumber(e.target.value)} min="1" className="app__input" type="number" required />
            <br />
            <button className="app__button" type="submit" onClick={onClickResultHandler}>CHECK</button>
          </form>
          {display && <div>
            <p style={{ padding: "1.5rem 0px", fontWeight: "bold" }}>{lucky ? `YAY!! You are a lucky person!` : `Oops!! Your birthday is not a lucky number!`}</p>
            <img style={{ height: "250px" }} src={lucky ? `${happy}` : `${sad}`} alt="result Logo" />
          </div>}
          <footer className="app__innerContainer app__footer">
            <h2 style={{ color: "var(--pink01)", padding: "1rem 0px 0.5rem 0px" }}>CONNECT WITH ME HERE</h2>
            <ul className="app__footerTable">
              <li className="app__footerLinks"><a href="https://github.com/vidhi-thakur">Github</a></li>
              <li className="app__footerLinks"><a href="https://www.linkedin.com/in/vidhi-thakur-9353271a8/">LinkedIn</a></li>
              <li className="app__footerLinks"><a href="https://portfolio-vidhithakur.netlify.app/">Portfolio</a></li>
            </ul>
          </footer>
        </div>
      </div>

    </div>
  );
}

export default App;
