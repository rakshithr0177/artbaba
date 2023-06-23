import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer id='footer'>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About Us</h2>
          <p>This site mainly aims to connect different artists of thw World. The website allow us the uses to connect with differnt artists of the world. And share their arts and opion of the others about it.</p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone: +91 6362860254</span>
          <span>Email: rakshithr0177@gmail.com</span>
          
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Country: India</span>
          <span>State: Karnataka </span>
          <span>Current Location: Bengaluru</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer