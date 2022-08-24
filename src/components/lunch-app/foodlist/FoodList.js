import './style.css'
function FoodList(props) {
   const { data, id } = props;
   // console.log(data);
   return (
      <div className="main-wrapper ">
         <div className='d-flex'>
            <figure className='card_img'>
               <img src={data.imgurl} />
            </figure>
            <div className='ms-2'>
               <header className='d-flex align-items-center'>
                  <h2>{data.title}</h2>
                  <span className='ms-2'>{data.price}</span>
               </header>
               <p>{data.details}</p>
            </div>
         </div>
      </div>
   )
}

export default FoodList

