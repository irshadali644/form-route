import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Product";
import './mainAccordion.css'
function MainApp() {
    return (
        <div className="main_wrapper">
            <div className="container">
                <nav className="menu_wrapper">
                    <Link to='/'>Home </Link>
                    <Link to='about'>Product</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="about" element={<Products/>}/>
                </Routes>
            </div>
        </div>

    )
}
export default MainApp;