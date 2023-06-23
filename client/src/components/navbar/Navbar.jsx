
import classes from './navbar.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import paint from "../../assets/paint.json"
import Lottie from 'lottie-react';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <Link to='/' className={classes.link}>
            <div className={classes.lottie}>
              <Lottie animationData={paint} loop={true} />
            </div>
            ArtBaba
          </Link>
        </div>
        <ul className={classes.center}>
          <li className={classes.listItem}><Link to={'/'}>Home</Link></li>
          <li className={classes.listItem}><a href='#footer'>About us</a></li>
          <li className={classes.listItem}><a href='#footer'>Contact us</a></li>
          <li className={classes.listItem}><a href='#categories'>Categories</a></li>
        </ul>
        <div className={classes.right}>
          <img onClick={() => setShowModal(prev => !prev)} src="" className={classes.img} />
          {showModal &&
            <div className={classes.modal}>
              <Link to='/create'>Create</Link>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar