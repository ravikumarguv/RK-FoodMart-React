import { useState } from "react";
import MenuGrid from "./MenuGrid";
import Pagination from "./Pagination";

function MenuLayout({ menuItems, menuItemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * menuItemsPerPage;
  const indexOfFirstItem = indexOfLastItem - menuItemsPerPage;
  const currentItems = menuItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(menuItems.length / menuItemsPerPage);

  function onPageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <div className="container mx-auto">
      <MenuGrid menuItems={currentItems} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default MenuLayout;
