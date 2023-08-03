import './index.css'

const NavBar = props => {
  const {score, count} = props
  return (
    <nav className="nav-container">
      <div>
        <img
          className="app-logo"
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
        />
      </div>
      <ul className="score-timer-container">
        <li>
          <p className="score">
            Score: <span className="score-count">{score}</span>
          </p>
        </li>
        <li className="timer-container">
          <img
            className="timer-icon"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
          <p className="timer-counter">{count} sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
