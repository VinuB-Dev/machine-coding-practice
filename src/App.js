import Card from "./components/Card";
import Filters from "./components/Filters";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Filters />
      <Card />
    </div>
  );
}
