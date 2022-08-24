import { Link, Route, Routes } from "react-router-dom";
import EditForm from "./Pages/EditForm";
import Products from "./Pages/Products";
import Students from "./Pages/Students";

function EmpApp () {
    return (
        <div className="container">
            <nav className="navigation">
                <Link to="/">Students</Link>
                <Link to="/products">Products</Link>
            </nav>
            <div>
                <Routes>
                    <Route path="/" element={<Students/>}>
                        <Route path='edit/:id' element={<EditForm/>}/>
                    </Route>
                    <Route path="/products" element={<Products/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default EmpApp;