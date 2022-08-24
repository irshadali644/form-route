import './studentlist.css'

function StudentList({ data,deleteItem,index, editStu,}) {
    // console.log(data)
    return (
        <>
            <tr>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.profile}</td>
                <td>
                    <button className='btn btn-danger ' onClick={() =>deleteItem(data.id)}>Delete</button>
                    <button className='btn btn-dark '   onClick={() => editStu(data.id)}>Edit</button>
                </td>
            </tr>
        </>

    )
}

export default StudentList;

