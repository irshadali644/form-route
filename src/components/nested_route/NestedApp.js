import { Link, Navigate, Route, Routes } from "react-router-dom";
import Home from "../../components/nested_route/page_details/Home";
import About from "../../components/nested_route/page_details/About";
import Item from "../Item";

function NestedApp() {
    return (
        <div className="container">
            <nav className="navigation">
                <Link to="/">Home</Link>
                <Link to="about">About</Link>
            </nav>
        	<div className="mt-3">
                <Routes>
                    <Route path="/" element={<Navigate to="/home"/>}/>
                    <Route path="/home" element={<Home/>}>
                        <Route path="item" element={<Item/>}/>
                    </Route>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </div>
        </div>
    )
}
export default NestedApp;