import { FiShoppingCart } from "react-icons/fi";
import { useAppSelector } from "../../app/hooks";
import { Link } from "react-router-dom";

type borderType = {
  border: boolean;
};

const Navbar = ({ border }: borderType) => {
  const { totalQuantity } = useAppSelector((state) => state.cart);

  return (
    <nav className="container">
      <div
        className={`flex items-center justify-between py-6 ${border ? "border-b-2" : ""}`}
      >
        <h2 className="text-2xl font-bold">
          <Link to="/">ShopVerse</Link>
        </h2>

        <Link to="/cart" className="cursor-pointer">
          <FiShoppingCart className="text-xl" />
          <span> {totalQuantity} </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
