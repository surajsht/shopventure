import { LazyLoadImage } from "react-lazy-load-image-component";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { cartIncOrDec } from "../features/cart/CartSlice";
import Navbar from "../component/navbar/Navbar";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
};

const Cart = () => {
  const dispatch = useAppDispatch();
  const { value } = useAppSelector((state) => state.cart);

  const handleQuantityChange = (id: number, type: string) => {
    dispatch(cartIncOrDec({ id, type }));
  };

  return (
    <div>
      <Navbar border={false} />

      <div className="container">
        <div className="flex items-center justify-between gap-24 pt-6 pb-8 border-b-2 mb-8">
          <div className="w-[60%]">Product</div>
          <div className="w-[7.5%]">Price</div>
          <div className="w-[10%]">Quantity</div>
          <div className="w-[7.5%]">Total</div>
          <div></div>
        </div>

        <div>
          {value.map((item: Product) => {
            let { id, image, title, category, price, quantity } = item;
            return (
              <div
                key={id}
                className="flex items-center justify-between gap-24"
              >
                <div className="flex items-center gap-4 w-[60%]">
                  <LazyLoadImage
                    src={image}
                    alt={title}
                    effect="blur"
                    className="w-20"
                  />

                  <div>
                    <h2 className="text-lg font-semibold mb-2"> {title} </h2>
                    <div className="capitalize">
                      <span className="font-medium"> Category: </span>
                      {category}
                    </div>
                  </div>
                </div>

                <div className="w-[7.5%]">${price}</div>

                <div className="w-[10%] flex items-center justify-center gap-3">
                  <button
                    onClick={() => handleQuantityChange(id, "increment")}
                    className="border-2 px-3 text-xl leading-[1] pb-[5px]"
                  >
                    +
                  </button>
                  <p> {quantity} </p>
                  <button
                    onClick={() => handleQuantityChange(id, "decrement")}
                    className="border-2 px-3 text-xl leading-[1] pb-[5px]"
                    disabled={quantity <= 1 ? true : false}
                  >
                    -
                  </button>
                </div>

                <div className="w-[7.5%]">${(price * quantity).toFixed(2)}</div>

                <div className="text-2xl font-medium cursor-pointer">x</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
