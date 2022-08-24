import { Link, useSearchParams } from "react-router-dom";
import ItemDetails from "./ItemDetails";

function Item() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id')
    if (id) {
        return <ItemDetails id={id}/>
    }
    return (
        <div>
            <p>Routing allows us to configure an app that accepts various URLs and is mapped to specific components. Once the matching URL is found, then the matching page/component will be rendered into the HTML DOM</p>
            <Link to={'?id=1'}>
                <button>Details</button>
            </Link>
        </div>
    )
}
export default Item;