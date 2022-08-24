import { useParams } from 'react-router-dom'
function EditForm ({data}) {
    const params = useParams()
    return(
        <div>
            <h3> Correction Form ID: {params.id}</h3>
        </div>
    )
}

export default EditForm