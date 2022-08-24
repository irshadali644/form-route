import { useNavigate } from 'react-router-dom'
import './Reviews.css'
function Reviews(props) {
  // console.log(props.data);
  // console.log(props);
  const { name, job, info, img } = props.data
  const navigate = useNavigate();
  // console.log(navigate);
  const detailmenu = (val) => {
    console.log(val);
    navigate('/BirthDay')
  }
  return (
    <div className="main-section">
      <div className='img-section'>
        <img src={img} />
      </div>
      <h6>{name}</h6>
      <div className='job'>{job}</div>
      <div>{info}</div>
      <div className='buttons'>
        <button type='button' onClick={props.clickleft} >left</button>
        <button type='button' onClick={props.clickright}>right</button>
      </div>
      <button onClick={detailmenu}>for BirthDay-project</button>
    </div>
  )

}
export default Reviews