import FeaturedBlogs from '../../components/featuredBlogs/FeaturedBlogs';
import Navbar from '../../components/navbar/Navbar';
import Categories from '../../components/categories/Categories'
import Footer from '../../components/footer/Footer';
// import Newsletter from '../../components/newsLetter/NewsLetter';
// import classes from './home.module.css';

const Home = () => {
    return (
        <div>
            <Navbar />
            <FeaturedBlogs />
            <Categories />
            {/* <Newsletter /> */}
            <Footer/>
        </div>
    )
}

export default Home