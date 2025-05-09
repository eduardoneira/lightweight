import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RoutinePage from "./pages/RoutinePage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/routine/:id" element={<RoutinePage />} />
            </Routes>
        </Router>
    );
}

export default App;
