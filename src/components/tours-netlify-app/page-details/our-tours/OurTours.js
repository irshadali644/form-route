import './tours.css'
function OurTours() {
    return (
        <section className='our_tours_wrapper '>
            <h2 className='text-center'>Our Tours</h2>
            <article className='card pb-3'>
                <img src='https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg' />
                <div className='tour-info_wrapper p-2'>
                    <div className=' d-flex align-items-center justify-content-between'>
                        <h3>Best of Paris in 7 Days Tour</h3>
                        <span> $ 1,995</span>
                    </div>
                    <p>Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of ...
                        <button className='readmore_btn border-0' >  read more</button>
                    </p> 
                </div>
                 <button className='delete-btn'>not interested</button>
            </article>
        </section>
    )
}
export default OurTours;