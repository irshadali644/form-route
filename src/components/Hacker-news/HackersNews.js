import axios from "axios";
import { useEffect, useState } from "react";
import ButtonPage from "./ButtonPage"
import InputSec from "./InputSec"
import MainNews from "./MainNews"

let count = 0
function HackersNews() {
    const [News, setNews] = useState(null)
    const [loader, setloader] = useState(false)

    const ShowUi = async (query, page) => {
        setloader(true)
        const response = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query}&page=${page}`)
        setNews(response.data)
        setloader(false)
    }
    useEffect(() => {
        ShowUi('', 0)
    }, [])

    const getValue = async (event) => {
        ShowUi(event.target.value, 0)
    }
    const NextPage = async () => {
        if (count === 49) {
            count = 0
        }
       else{
        count = count + 1
       }
        ShowUi('', count)
        console.log('next' ,count);
    }
    const PrevPage = async () => {
        if (count === 0) {
            count = 49
        }
        else{
            count = count - 1
        }
        ShowUi('', count)
        console.log('prev' ,count);
    }
    return (
        <div style={{ width: '1300px', margin: 'auto' }}>
            <InputSec getValue={getValue} />
            <ButtonPage NextPage={NextPage} PrevPage={PrevPage} count={count} />
            <MainNews data={News} loader={loader} />
        </div>
    )
}
export default HackersNews