function Details(props) {
    console.log(props);
    return (
        <div className="details_wrapper">
            <div>
                <div>Company:{props.data.name}</div>
                <div>Product: {props.data.price}</div>
            </div>
            <div>
                
            </div>
        </div>
    )
}
export default Details;