import { useState } from 'react';
import CookTailsList from './CooktailsList';
import './style.css'
function CooktailApp() {
    const arr = [
        {

            "idDrink": "17222",
            "strDrink": "A1",
            "strCategory": "Cocktail",
            "strAlcoholic": "Alcoholic1",
            "strGlass": "Cocktail glass",
            "strInstructions": "Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass.",
            "strDrinkThumb": "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/2x8thr1504816928.jpg",
            "strIngredient1": "Gin",
        },
        {
            "idDrink": "17223",
            "strDrink": "ABC",
            "strCategory": "Cocktail",
            "strAlcoholic": "Alcoholic2",
            "strGlass": "Shot glass",
            "strInstructions": "Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass.",
            "strDrinkThumb": "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/tqpvqp1472668328.jpg",
            "strIngredient1": "Gin",
        },
        {
            "idDrink": "17220",
            "strDrink": "Ace",
            "strCategory": "Cocktail",
            "strAlcoholic": "Alcoholic3",
            "strGlass": "Martin glass",
            "strInstructions": "Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass.",
            "strDrinkThumb": "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/l3cd7f1504818306.jpg",
            "strIngredient1": "Gin",
        }

    ]
    const [data, setData] = useState(arr)
    // console.log(data);
    const [inputVal, setInputVal] = useState('')
    const onChangeHandler = (event) => {
        // console.log('test')
        setInputVal(event.target.value);
        console.log(event.target.value);

    }
    const onKeyUp = () => {
        const filteredData = arr.filter((item) => {
            const searchVal = inputVal.toLocaleLowerCase()

            // console.log(item);
            if ( item.strDrink.toLocaleLowerCase() == searchVal || item.strGlass.toLocaleLowerCase() == searchVal || 
            item.strAlcoholic.toLocaleLowerCase() == searchVal) {
                // console.log(item.strDrink)
                return true;
            }
            if (!inputVal) {
                return true;
            }
        })
        setData(filteredData)
    }
    return (
        <div className='main_wrapper'>
            <div className="main-container">
                <form className='form_area'>
                    <label>search your favorite cocktail</label>
                    <input onChange={onChangeHandler} value={inputVal} onKeyUp={onKeyUp} />
                </form>
                <div className='card_wrapper mb-2 '>
                    {data.map( (item,id)=><CookTailsList data={item} key={item.idDrink}/>)}
                </div>
                {/* <div>{inputVal}</div> */}
            </div>
        </div>

    )
}
export default CooktailApp;