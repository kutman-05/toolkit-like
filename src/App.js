import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Favorite from "./pages/Favorite/Favorite";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} key={1} />
        <Route path="/Favorite" element={<Favorite />} key={2} />
      </Routes>
    </div>
  );
}

export default App;
