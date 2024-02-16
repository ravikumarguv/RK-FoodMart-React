import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { addItem, getCurrentQuantity } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ item, detailPage }) {
  const dispatch = useDispatch();
  // assume price value is equal to caloriesPerServing
  const { image, name, caloriesPerServing: unitPrice, id } = item;

  const currentQuantity = useSelector(getCurrentQuantity(id));
  // console.log(currentQuantity);
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      itemId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <div className="flex gap-4 py-2">
      <img src={image} alt={name} className="h-24" />
      <div className="flex grow flex-col ">
        <p className="font-medium">{name}</p>
        {/* <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(",")}
        </p> */}
        <div className="mt-auto flex items-center justify-between">
          <div className="text-sm">&#8377;{unitPrice}</div>
          {isInCart && (
            <div className="flex items-center gap-3 sm:gap-8">
              {" "}
              <UpdateItemQuantity
                itemId={id}
                currentQuantity={currentQuantity}
              />
              <DeleteItem itemId={id} />
            </div>
          )}
          {!isInCart && (
            <Button type="small" onClick={handleAddToCart}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
