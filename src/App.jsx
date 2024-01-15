import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import "./index.css";
import Menu from "./components/menu";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

export default App;
