import classes from './featuredBlogs.module.css'
// import { MdOutlinePreview } from 'react-icons/md'
// import { AiFillLike } from 'react-icons/ai'
import art from "../../assets/art.json"
import Lottie from 'lottie-react';

const FeaturedBlogs = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.main}>
          <h1>Welcome to
            <span>ArtBaba</span>
          </h1>
          <div className={classes.lottie}>
            <Lottie animationData={art} loop={true} />
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedBlogs