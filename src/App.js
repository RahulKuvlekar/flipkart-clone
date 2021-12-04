import "./App.css";
import FilterSidebar from "./Components/FilterSidebar/FilterSidebar";
import Header from "./Components/Header/Header";
import ProductSection from "./Components/ProductSection/ProductSection";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="product__body">
        <FilterSidebar />
        <ProductSection />
      </div>
    </div>
  );
}

export default App;
