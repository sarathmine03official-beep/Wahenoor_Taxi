import Booking from "../../compnents/booking/Booking"
import Carousel from "../../compnents/carousel/Carousel"
import Description from "../../compnents/description/Description"
import Destination from "../../compnents/destination/Destination"
import Examplevideo from "../../compnents/examplevideo/Examplevideo"
import Footer from "../../compnents/footer/Footer"
import Header from "../../compnents/header/Header"
import Map from "../../compnents/map/Map"

function Home(){
    return(
        <>
        <Header/>
        <Booking/>
        <Carousel/>
        <Examplevideo/>
        <Destination/>
        <Description/>
        <Map/>
        <Footer/>
        
        </>
    )
}
export default Home