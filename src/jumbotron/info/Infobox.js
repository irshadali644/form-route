import BlackBox from "./blackInfo/BlackBox"
import GrayBox from "./grayInfo/GrayBox"
import './style.css'

function InfoBox() {
    return (

        <div>
            <div className="info_box_wrapper">
                <BlackBox id="1" />
                <BlackBox id="2" />
                <BlackBox id="3" />
                <BlackBox id="4" />
               
                {/* <GrayBox/> */}
            </div>

        </div>
    )
}
export default InfoBox