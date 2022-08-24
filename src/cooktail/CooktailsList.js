
function CookTailsList({ data, id }) {
    //console.log(data);
    console.log(data);

    return (
        <>
            <div className="card">
                <div><img src={data.strDrinkThumb} /></div>
                <div className='card_cnt'>
                    <h2>{data.strDrink}</h2>
                    <p>{data.strGlass}</p>
                    <p>{data.strAlcoholic}</p>
                    <button type='button'>Details</button>
                </div>
            </div>
        </>
    )
}

export default CookTailsList;