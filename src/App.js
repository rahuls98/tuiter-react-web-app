import "./App.css";
import Labs from "./labs";
import HelloWorld from "./labs/a3/hello-world";
import Tuiter from "./tuiter";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Navigate to="/labs" />} />
                    <Route path="/labs/*" element={<Labs />} />
                    <Route path="/hello" element={<HelloWorld />} />
                    <Route path="/tuiter/*" element={<Tuiter />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
