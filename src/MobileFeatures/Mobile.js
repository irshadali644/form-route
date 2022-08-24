import './style.css'

function Mobile({data, id}) {
    //   console.log(props)
    console.log(data)
    return (
        <tr key={id}>
            <td>{data.modal}</td>
            <td>{data.modalno}</td>
            <td>{data.color}</td>
            <td>{data.ram}</td>     
        </tr>
    )
}
export default Mobile;