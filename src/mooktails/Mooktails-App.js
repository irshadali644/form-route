import { useState } from 'react';
import './global.css'
import MooktailsList from './mooktailsList/MooktailsList';
function MooktailsApp() {
    const arr = [
        {
            "idDrink": "17222",
            "strDrink": "A",
            "strCategory": "Cocktail1",
            "strAlcoholic": "Alcoholic",
            "strGlass": "Cocktail glass1",
            "strInstructions": "Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass.",
            "strDrinkThumb": "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/2x8thr1504816928.jpg",
            "strIngredient1": "Gin",
        },
        {
            "idDrink": "172222",
            "strDrink": "B",
            "strCategory": "Cocktail2",
            "strAlcoholic": "Alcoholic",
            "strGlass": "Cocktail glass2",
            "strInstructions": "Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass.",
            "strDrinkThumb": "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/tqpvqp1472668328.jpg",
            "strIngredient1": "Gin",
        },
        {
            "idDrink": "27222",
            "strDrink": "C",
            "strCategory": "Cocktail3",
            "strAlcoholic": "Alcoholic",
            "strGlass": "Cocktail glass3",
            "strInstructions": "Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass.",
            "strDrinkThumb": "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/l3cd7f1504818306.jpg",
            "strIngredient1": "Gin",
        }
    ]

    const [data, setData] = useState(arr);
    const [inputVal, setInputVal] = useState('')
    //console.log(val);
    const onChangeHandler = (event) => {
        // console.log('test')
        setInputVal(event.target.value);
        console.log(event.target.value);

    }
    const onKeyUp = () => {
        console.log('sss');
        // setInputVal(event.target.value)
        //console.log(event.target.value);
        //  console.log(item)
       const filteredData = arr.filter( (item) => {
            // console.log(item.strDrink);
            if(item.strDrink.toLocaleLowerCase() == inputVal || item.strCategory.toLocaleLowerCase() == inputVal || item.strGlass.toLocaleLowerCase() == inputVal) {
                return true
            }
            if(!inputVal) {
                return true
            }
       })

        setData(filteredData)
    }
    return (
        <div className="main-container">
            <div className="mooktails-form">
                <label>search your favorite cocktail</label>
                <input type="text" onKeyUp={onKeyUp} onChange={onChangeHandler} />
            </div>
            {/* <MooktailsList/> */}
            <div className="card_list_wrapper">
                {data.map((item, i) => <MooktailsList data={item} key={item.idDrink} />)}
            </div>

        </div>
    )
}

export default MooktailsApp;