import { Link, Route, Routes } from "react-router-dom";
import AccordionDetails from "./AccordionDetails";
import Item from "./AccordionDetails";
import About from "./pages/About";
import Home from "./pages/Home";

function MainApp2 () {
    return(
        <div className="container">
            <nav className="navigation">
                <Link to="/">Home</Link>
                <Link to="about">About</Link>
            </nav>
            <div>
                <Routes>
                    <Route  path="/" element={<Home/>}> 
                        <Route path="/view-details" element={<AccordionDetails/>}/>
                    </Route>
                    <Route path="about" element={<About/>}/>
                </Routes>
            </div>
        </div>
    )
}
export default MainApp2;