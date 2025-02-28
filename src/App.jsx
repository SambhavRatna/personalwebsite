import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Projects from "./pages/projects";

const App = () => {
    return (
        <Router>
            <Navbar />
            <div style={{ paddingTop: "20px", textAlign: "center" }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/details" element={<Details />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
