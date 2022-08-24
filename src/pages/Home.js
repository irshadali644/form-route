import { Link, Outlet } from "react-router-dom";

function Home (props) {
    // console.log(props.data)
    // console.log(props.onClickCount)
  return(
    <div>
        Home : {props.data} <br/>
        <button className="btn btn-success" onClick={ () => {
          props.onClickCount(props.data + 1)
        }}>Count</button>

        <div>
          <Link to="item">Item</Link>
        </div>

        <div>
          <Outlet></Outlet>
        </div>
    </div>
  )
}
export default Home;