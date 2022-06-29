import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUser,
  faUserGroup,
  faBackward,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <p
          style={{
            color: '#7C7F23',
            paddingLeft: '1em',
            fontSize: '16px',
            fontFamily: 'Coolvetica',
            fontWeight: '400',
            position: 'relative',
          }}
        >
          Randomizer
        </p>
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/members">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="portfolio-link"
          to="/teams"
        >
          <FontAwesomeIcon icon={faUserGroup} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/previousTeams"
        >
          <FontAwesomeIcon icon={faBackward} color="#4d4d4e" />
        </NavLink>
      </nav>
    </div>
  )
}

export default Sidebar
