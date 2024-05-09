import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing";
import Navbar from "./components/Navbar/navbar";
import FAQ from "./components/FAQ/faq";

// export default App;
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {" "}
          {/* Use Routes instead of Route */}
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <FAQ />
      </div>
    </Router>
  );
};

export default App;
