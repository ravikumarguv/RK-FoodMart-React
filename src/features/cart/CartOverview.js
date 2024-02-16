import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartAmount, getTotalQuantity } from "./cartSlice";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalQuantity);
  const totalCartAmount = useSelector(getTotalCartAmount);

  if (!totalCartQuantity) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>
          {totalCartQuantity} {totalCartQuantity > 1 ? "items" : "item"}{" "}
        </span>
        <span>&#8377;{totalCartAmount}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
