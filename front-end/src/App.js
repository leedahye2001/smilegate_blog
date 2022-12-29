import Home from "./components/home";
import Nav from "./components/nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="px-10 xl:px-20">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
