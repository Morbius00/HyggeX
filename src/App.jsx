import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing";
import Navbar from "./components/Navbar/navbar";

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
      </div>
    </Router>
  );
};

export default App;
