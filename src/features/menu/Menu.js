import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import { useEffect, useState } from "react";
import MenuLayout from "./MenuLayout";

function Menu() {
  const menu = useLoaderData();
  console.log(menu);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const uniqueCategories = [
      ...new Set(...[menu.map((product) => product.mealType[0])]),
    ];
    setCategories(["All", ...uniqueCategories]);
    const filtered = menu.filter(
      (product) =>
        product.mealType[0] === selectedCategory || "All" === selectedCategory,
    );
    setFilteredProducts(filtered);
  }, [selectedCategory]);

  return (
    <div className="container mx-auto">
      <h1 className="mb-4 mt-8 flex items-center justify-center text-2xl font-semibold uppercase text-orange-600 sm:text-3xl">
        menu
      </h1>
      <div className="flex items-center justify-center">
        <select
          className="w-46 mb-6 rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring-blue-500"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <MenuLayout menuItems={filteredProducts} menuItemsPerPage={8} />
    </div>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
