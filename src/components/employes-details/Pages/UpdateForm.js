import { useState } from "react";

function UpdateForm() {
    return (
        <>
            <form className='form-row d-flex align-items-center updated_from_wrapper'>
                <input className='form-control mr-2' placeholder="Name" />
                <input className='form-control  mr-2' placeholder="Age" />
                <input className='form-control  mr-2' placeholder="Profile" />
                <button className='btn btn-warning' >Update</button>
            </form>
        </>
    )
}
export default UpdateForm;