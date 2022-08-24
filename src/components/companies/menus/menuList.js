
// function MenuList(props) {
//     console.log(props)
//     return (
//         <aside>
//             {props.data.map((val, i)=> {
//                 return <div key={i}>
//                     <button onClick={()=> {
//                          props.fetchData(val)
//                     }}>{val}</button>
//                 </div>
//             })}
//         </aside>
//     )
// }
// export default MenuList;
function MenuList(props) {
    //console.log(props);
    return (
        <aside>
           {/* {props.data} */}
           {props.data.map( (val, i) => {
                return <div key={i}>
                    <button onClick={ () => {
                        props.fetchData(val)
                    }}>
                        {val}
                    </button>
                  
                </div>
           })}
        </aside>
    )
}
export default MenuList;
