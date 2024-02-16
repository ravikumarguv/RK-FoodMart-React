import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="my-10 px-4 text-center sm:my-16 ">
      <h1 className=" mb-8 text-xl font-semibold md:text-3xl">
        The Fastest Delivery in{" "}
        <span className="text-orange-500">Your City</span>
        <br />
      </h1>
      <div className="mb-8 flex h-auto w-full items-center justify-center overflow-hidden">
        <img
          className="xm:max-w-2xl animate-pulse object-cover"
          src="pizzasmeal.jpg"
          alt="A table full of delicious pizzas"
        />
      </div>

      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
