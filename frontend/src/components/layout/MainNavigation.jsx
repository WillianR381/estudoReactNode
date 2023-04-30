import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css'

function MainNavigation(){
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li><Link to={'/'}>All Meetups</Link></li>
        </ul>
        <ul>
          <li><Link to={'/favorites'}>Favorites</Link></li>
        </ul>
        <ul>
          <li><Link to={'/new-meetup'}>New Meetups</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation