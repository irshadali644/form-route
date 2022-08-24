import './menu.css'
function Menu(props) {
    // console.log(props.type)
    return (
        <div className="bt_wrapper d-flex">
            <div>
                {props.data.map((val, i) => {
                    return <button key={i} onClick={ () => {
                        props.fetchData(val)
                    }}>
                        {val}
                    </button>
                })}
            </div>

        </div>

    )
}
export default Menu
