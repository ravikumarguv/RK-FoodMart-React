import { Link } from "react-router-dom";
import SeachOrder from "../features/order/SeachOrder";
import Username from "../features/user/Username";
import DarkMode from "./DarkMode";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-500 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
      <Link to="/">
        <h2 className="px-3 font-serif text-xl font-extrabold tracking-widest">
          <span className="text-gray-50">RK</span>
          <span className="mx-2 font-mono text-sm text-rose-800">FoodMart</span>
        </h2>
      </Link>
      <nav className="flex items-center justify-center gap-4">
        <SeachOrder />
        <Username />
        <DarkMode />
      </nav>
    </header>
  );
}

export default Header;
