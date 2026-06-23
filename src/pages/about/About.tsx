import Header from "../../compnents/header/Header"
import image1 from '../../assets/img/people.webp'
import Footer from "../../compnents/footer/Footer"
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// import Accordin from "../accordin/Accordin"
import Featuresafety from "../featuresafety/Featuresafety"
// import Founder from "../founder/Founder"


function About(){
    return(
        <>
        <Header/>
        <div className="bg-9 ">
        <div className="container">    
        <div className="d-flex ">
            
        <div className="   w-50 ">
            
            <div className="d-flex">
                
                <i className="bi bi-arrow-down-right-circle text-white mt-3-5 ms-4 px-2"></i>
            <h3 className=" mt-5 txt-c1">Explore more in our safety dashboard</h3>
            
            </div>
            <ul className="custom-list text-align text-white">
                <li >The Cab Taxi website is designed to provide a simple and efficient platform for passengers to book rides and for drivers to manage their services. </li>
                <li>The system includes a booking form where users can enter pickup and drop locations, travel time, and passenger count. A unique feature of this project is the option to choose between drivers with cars and drivers without cars.</li>
                <li>In contrast, drivers without cars represent a futuristic concept where drivers are registered in the system but vehicles are assigned dynamically, potentially through autonomous taxi technology.</li>
                <li>Drivers with cars represent the traditional taxi service, where the driver owns or operates a vehicle and provides rides directly to passengers. </li>
                <li>For drivers with cars, the website displays details such as driver name, photo, rating, car model, number plate, and availability status.Passengers can view these details before confirming a ride.</li>
                 <li>  For drivers without cars, the system highlights their profile, license information, and ratings, while showcasing a “Coming Soon” section for autonomous taxi integration. </li> 
            </ul>

        </div>
        <div className=" w-50 mt-6   ">
            <img className="radius-round ms-5-5 mt-5-2" src={image1} alt="people" />

        </div>
        </div>
            <ul className="custom-list bg-9 text-white text-align pb-5">
            <li >Additional features include fare estimation based on distance and time, responsive design for mobile devices, and user profiles that store ride history and saved locations. Drivers have access to a dashboard where they can accept or reject rides and view earnings. </li>
            <li>An admin panel manages bookings, drivers, and vehicles. The website also emphasizes branding with a local Chennai cab theme, making the interface relatable and user‑friendly.</li>
           </ul>
           </div>
           </div>

      

        <Featuresafety/>
        {/* <Founder/> */}
        {/* <h3>Frequently asked questions</h3> */}
        
        {/* <Accordin/> */}
        <Footer/>
        
        </>
    )
}
export default About