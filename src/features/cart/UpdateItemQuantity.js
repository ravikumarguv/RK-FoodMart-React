import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ itemId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1 md:gap-2">
      <Button
        type="rounded"
        onClick={() => dispatch(decreaseItemQuantity(itemId))}
      >
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button
        type="rounded"
        onClick={() => dispatch(increaseItemQuantity(itemId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
