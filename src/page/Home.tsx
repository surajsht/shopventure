import { useEffect } from "react";
import Navbar from "../component/navbar/Navbar";
import Products from "../component/products/Products";
import { resetPagination } from "../features/pagination/PaginationSlice";
import { useAppDispatch } from "../app/hooks";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetPagination());
  }, []);

  return (
    <div>
      <Navbar border={true} />
      <Products />
    </div>
  );
};

export default Home;
