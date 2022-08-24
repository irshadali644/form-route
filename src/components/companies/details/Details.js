// function Details(props) {
//     console.log(props)
//     return(
//         <section>
//             <h2>{props.data[0].title}</h2>
//             <span>{props.data[0].company}</span>
//             <div>
//                 {props.data[0].dates}
//             </div>
//             <ul>
//                 {props.data[0].duties.map((val, i)=> {
//                     return <li key={i}>{val}</li>
//                 })}
//             </ul>
//             <div>
//                 <button type="button">More Info</button>
//             </div>
//         </section>
//     )
// }
// export default Details;
function Details(props) {
    console.log(props);
    return (
        <section>
            <h2>{props.data[0].title}</h2>
            <span>{props.data[0].company}</span>
            <div>
                {props.data[0].dates}
            </div>
            <ul>
                {props.data[0].duties.map((val, i) => {
                    //console.log(i)
                    return <li key= {i}>{val}</li>
                })}
            </ul>
            <button type="button">More Info</button>
        </section>
    )
}
export default Details;