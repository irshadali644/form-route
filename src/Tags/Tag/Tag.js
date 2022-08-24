import './style.css'
function Tag({ data, id }) {
    return (
        <>
            <li>
                <span className='datatags'>{data.tag}</span>
                <span className='count-circle'>{data.count}</span>
            </li>
        </>


    )
}

export default Tag;