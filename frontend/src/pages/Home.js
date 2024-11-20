import '../CSS/Navbar.css';
import Banner from '../Components/Banner';
import PopularBooks from '../Components/PopularBooks';
import Categories from '../Components/Categories';
import Testimonials from '../Components/Testimonials';
function Home() {
  return (
    <div className="Home">
      <Banner />
      <PopularBooks />
      <Categories />
      <Testimonials />
    </div>
  );
}

export default Home;
