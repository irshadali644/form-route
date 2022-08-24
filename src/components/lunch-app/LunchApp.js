import { useState } from "react"
import FoodList from "./foodlist/FoodList"
import Menu from "./menus/Menu"

const foodesList = [
  {
    id: '1', title: 'Buttermilk Pancakes', details: 'I am baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed',
    imgurl: 'https://react-projects-5-menu.netlify.app/images/item-1.jpeg', type: 'breakfast', price: 'Rs.10'
  },
  {
    id: '2', title: 'Diner Double', details: 'I am baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed',
    imgurl: 'https://react-projects-5-menu.netlify.app/images/item-2.jpeg', type: 'lunch', price: 'Rs.20'
  },
  {
    id: '3', title: 'Diner Double', details: 'I am baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed',
    imgurl: 'https://react-projects-5-menu.netlify.app/images/item-3.jpeg', type: 'shake', price: 'Rs.30'
  }
]
const foodesListTab = foodesList.map((item) => {
  return item.type
})
const menuData = ['All', ...foodesListTab]
// console.log(menuData)
console.log(foodesListTab)

function LunchApp() {
  const [detailData, setDetailData] = useState(foodesList)
  // console.log(detailData)
  const getDetails = (currentName) => {
    let currentEmpDetail = foodesList.filter((item) => {
      if (item.type === currentName) {
        return true;
      }

    })
    if (currentName === 'All') {
      currentEmpDetail = foodesList
    }
    setDetailData(currentEmpDetail)
  }
  return (
    <div className="container">
      <Menu data={menuData} fetchData={getDetails} />
      {detailData.map((item, id) => {
        return <FoodList data={item} key={id} />
      })}

    </div>
  )
}
export default LunchApp;