import { useState } from "react";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";
import ErrorBoundary from "./Components/ErrorBoundary";
import NetworkStatus from "./Components/NetworkStatus";

const App = () => {
  const [category, setCategory] = useState("general");

  return (
    <ErrorBoundary>
      <div className="min-vh-100" style={{ backgroundColor: "#f8f9fa" }}>
        <NetworkStatus />
        <Navbar setCategory={setCategory} />
        <ErrorBoundary>
          <NewsBoard category={category} />
        </ErrorBoundary>
      </div>
    </ErrorBoundary>
  );
};

export default App;
