import { useData } from "../Context/dataContext";

export default function Card() {
  const {
    state: { filteredData }
  } = useData();
  return (
    <div className="grid">
      {filteredData.map((product) => {
        return (
          <div class="card2" key={product.id}>
            <div>
              <img class="card-img2" src={product.image} alt="" />
            </div>
            <div class="card-desc2">
              <span class="title2">{product.brand}</span>
              <span class="product-desc2">{product.name}</span>
              <span class="bold ">₹{product.price}</span>
              <span class="strike">₹{product.actualPrice}</span>
              <span>{product.discount}%</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
