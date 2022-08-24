import { Link, Outlet, useNavigate } from "react-router-dom"
// import {Link} from react-router-dom
// const navigate = useNavigate();

function Products() {

    return (
        <div>
            Products
                <Link to={'/home'}>Back to the Home page</Link>
                {/* <Outlet/> */}
        </div>
    )
}
export default Products
