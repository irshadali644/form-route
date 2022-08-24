import { Link, useNavigate } from 'react-router-dom'
import '../Pages/All.css'
function Table({ data, removeItem, editSt }) {

    return (
        <div>
            <table border={1} className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Profile</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, i) => {
                        return <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.profile}</td>
                            <td>
                                <button className='btn btn-danger' onClick={() => { removeItem(item.id) }}>Remove</button>
                                <button className='btn btn-dark' onClick={() => { editSt(item.id) }}>Edit</button>
                            </td>
                        </tr>
                    })}

                </tbody>
            </table>
        </div>
    )
}
export default Table