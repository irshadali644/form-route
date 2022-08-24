import { Link } from "react-router-dom";

function Home () {
    return(
        <div>
            Home <br/>
            <Link to='/item'>Item</Link>
        </div>
    )
}
export default Home;