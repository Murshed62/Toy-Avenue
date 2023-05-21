import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";
import ProductCollection from "../../components/ProductCollection/ProductCollection";
import Review from "../../components/Review/Review";
import SupportCenter from "../../components/SupportCenter/SupportCenter";
import useTitle from "../../hooks/useTitle";
import Footer from "../../Shared/Footer/Footer";
import Products from "../../Shared/Products/Products";

const Home = () => {
  useTitle('home');
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <ProductCollection></ProductCollection>
      <SupportCenter></SupportCenter>
      <Review></Review>
      <Footer></Footer>
    </div>
  );
};

export default Home;
