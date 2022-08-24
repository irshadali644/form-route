import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import {Link,Routes,Route } from 'react-router-dom';
function RouterApp() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="contact">Contact</Link>
            <Routes>
                <Route path="/"      element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="contact" element={<Contact/>}/>
            </Routes>
        </div>
    )
}
export default RouterApp;