import { useState } from 'react'
import { useParams } from 'react-router-dom'
import '../employes.css'
import UpdateForm from './UpdateForm'
function EditForm({data}) {
    const params = useParams()
    return (
        <div className='mt-3'>
          Update Form {params.id}
           <UpdateForm data={data}/>
        </div>
    )
}
export default EditForm
