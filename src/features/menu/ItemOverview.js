function ItemOverview({ item }) {
  const { image, name, ingredients, rating } = item;
  return (
    <div>
      <div className="detail_container">
        <div className="detail_contant">
          <div className="detail_info">
            <div className="img-box">
              <img src={image} alt={name} />
            </div>
            <p>{ingredients}</p>
            <p>{rating}</p>
            <button>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemOverview;
