import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchProduct } from "../../features/allProducts/AllProductSlice";
import { addToCart, CartCount } from "../../features/cart/CartSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Products = () => {
  const { isLoading, data, isError } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  if (isLoading) return <h1> Loading... </h1>;

  if (isError) return <h1> Something went wrong</h1>;

  type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  };

  const addItem = (data: Product) => {
    dispatch(addToCart(data));
    dispatch(CartCount());
  };

  return (
    <div className="py-8">
      <div className="container">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {data?.map((item: Product) => {
            const { id, title, price, image } = item;

            return (
              <div key={id} className="text-center">
                <LazyLoadImage
                  src={image}
                  alt={title}
                  effect="blur"
                  className="h-56 mx-auto"
                />
                <h2 className="text-lg my-3">{title}</h2>
                <span className="block font-bold text-lg"> ${price} </span>
                <button
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-4"
                  onClick={() => addItem(item)}
                >
                  Add to cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
