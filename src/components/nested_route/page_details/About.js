import { Link } from "react-router-dom";

function About () {
    return (
        <div>
            About
            <Link to="/"><br/>
                <button>Back to the home</button>
            </Link>
           
        </div>
    )
}

export default About;