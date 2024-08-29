import Navbar from "../component/navbar/Navbar";
import Products from "../component/products/Products";

const Home = () => {
  return (
    <div>
      <Navbar border={true} />
      <Products />
    </div>
  );
};

export default Home;
