import MenuItem from "./MenuItem";

function MenuGrid({ menuItems }) {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        {menuItems.map((item) => (
          <MenuItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default MenuGrid;
