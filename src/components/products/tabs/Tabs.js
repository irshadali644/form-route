import './style.css'
import Tab from './tab/Tab';
function Tabs(props) {
     console.log(props);
    return (
        <ul className="tab_list">
            {props.data.map((val, i) => {
                return <Tab data={val} key={i} onChangeTab={props.onChangeTab}/>
            })}
        </ul>
    )
}

export default Tabs;