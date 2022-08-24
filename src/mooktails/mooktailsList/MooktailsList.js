import './style.css'

function MooktailsList({data, id}) {
    // console.log(data);
    // console.log(id)
    return(
        <div className='mooktails-list '>
            <div className='img_wrapper'>
              <img src={data.strDrinkThumb}/>
            </div>
            <div className='card_cnt'>
                    <h2>{data.strDrink}</h2>
                    <p>{data.strGlass}</p>
                    <p>{data.strAlcoholic}</p>
                    <button type='button'>Details</button>
                </div>
        </div>
    )
}

export default MooktailsList;