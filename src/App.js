import "./App.css";
import FilterSidebar from "./Components/FilterSidebar/FilterSidebar";
import Header from "./Components/Header/Header";
import ProductSection from "./Components/ProductSection/ProductSection";
import { ContextProvider } from "./Context/Context";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Header />
        <div className="product__body">
          <FilterSidebar />
          <ProductSection />
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
