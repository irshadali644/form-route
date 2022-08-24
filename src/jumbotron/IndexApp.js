import Banner from "./banner/Banner"
import Footer from "./footer/footer"
import Header from "./header-app/HeaderApp"
import InfoBox from "./info/Infobox"

function IndexApp() {
    return(
        <div className="container">
            <Header/>
            <Banner id="1" />
            <InfoBox/>
            <Footer/>
        </div>

    )
}
export default IndexApp