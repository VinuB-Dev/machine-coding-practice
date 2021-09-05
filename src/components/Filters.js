import { useData } from "../Context/dataContext";
let checker = [];
let sizer = [];
export default function Filters() {
  const {
    state: { brands, sizes, ideal_for },
    dispatch
  } = useData();

  const checkedHandler = (e, name) => {
    const checked = e.target.checked;
    if (checked) checker.push(name);
    else checker = checker.filter((check) => check !== name);
  };

  const sizerHandler = (e, name) => {
    const checked = e.target.checked;
    if (checked) sizer.push(name);
    else sizer = sizer.filter((check) => check !== name);
  };

  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: "CLEAR", payload: "" });
        }}
      >
        Clear filter
      </button>
      <div style={{ margin: "1rem 0", fontWeight: "bold" }}>Sort</div>
      <div style={{ textAlign: "left" }}>
        {["high to low", "low to high"].map((size) => {
          return (
            <div
              onClick={() => {
                dispatch({ type: "SORT", payload: size });
              }}
            >
              <input type="radio" name="sort_products" />
              <label>{size}</label>
            </div>
          );
        })}
      </div>
      <div style={{ margin: "1rem 0", fontWeight: "bold" }}>Ideal for</div>
      <div style={{ textAlign: "left" }}>
        {ideal_for.map((size) => {
          return (
            <div
              onClick={() => {
                dispatch({ type: "IDEAL_FOR", payload: size });
              }}
            >
              <input type="radio" name="ideal_for" />
              <label>{size}</label>
            </div>
          );
        })}
      </div>
      <div style={{ margin: "1rem 0", fontWeight: "bold" }}>Choose Size</div>
      <div style={{ textAlign: "left" }}>
        {sizes.map((size) => {
          return (
            <div
              onChange={(e) => {
                sizerHandler(e, size);
                dispatch({
                  type: "SIZE",
                  payload: sizer.length > 0 ? sizer : sizes
                });
              }}
            >
              <input type="checkbox" />
              <label>{size}</label>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: "1rem" }}>
        <div style={{ marginBottom: "1rem", fontWeight: "bold" }}>
          Choose Brand
        </div>
        {brands.map((brand, i) => {
          return (
            <div
              style={{ textAlign: "left" }}
              onChange={(e) => {
                checkedHandler(e, brand);
                dispatch({ type: "BRAND", payload: { checker } });
              }}
            >
              <input type="checkbox" />
              <label>{brand}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
