import './birthday.css'

function OurBirthdays(props) {
    // console.log('Ansari----------',     props);
    // console.log(data.imgurl)
    // const  {data, id}  = props;

    return (
        <section className='birthday_wrapper'>
            <div className='card'>
                <h2>5 birthdays today</h2>
                <article className='person'>
                    <div className='d-flex mt-3'>
                        <figcaption className='img_thumnails mr-2'>
                            <img src='https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg' />
                        </figcaption>
                        <div className='mt-2'>
                            <h2>Larry Little</h2>
                            <p>36 years</p>
                        </div>
                    </div>
                </article>
                <button className='clearall_btn'>clear all</button>
            </div>
            
        </section>
    )
}
export default OurBirthdays;