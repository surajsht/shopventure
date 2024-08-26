import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="container">
      <div className="flex items-center justify-between border-b-2 py-6">
        <h2 className="text-2xl font-bold">ShopVerse</h2>

        <div className="cursor-pointer">
          <FiShoppingCart className="text-xl" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
