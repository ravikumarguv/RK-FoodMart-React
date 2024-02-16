import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SeachOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="transistion-all rounded-full bg-yellow-400 px-4 py-2 text-sm duration-300 placeholder:text-stone-500 focus:outline-none sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}

export default SeachOrder;
