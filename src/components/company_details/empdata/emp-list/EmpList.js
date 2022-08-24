import Item from '../../../Item';
import './emp-list.css'
function EmpList({data,i, deleteItem, editSt}) {
    return (
        <>
            <tr>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.profile}</td>
                <td className="btn_sec">
                    <button className="btn btn-dark" onClick={ () => {editSt(data.id)}}>Edit</button>
                    <button className="btn btn-danger" onClick={() => {deleteItem(data.id)}}>Delete</button>
                </td>
            </tr>
        </>
    )
}

export default EmpList;