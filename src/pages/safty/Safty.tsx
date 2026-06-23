import Header from "../../compnents/header/Header"
import Footer from "../../compnents/footer/Footer"
import Carouselslide from "../carouselslide/Carouselslide"
import img1 from '../../assets/img/logo/logo3.png'
import { useState } from "react";
import Founder from "../founder/Founder";

function Safty(){
    const [show , setShow] = useState(false);
    
    return(
        <>
        <Header/>
        
        <div className=" bg-custom fw-medium pt-4">
          <div className="container">
        <div className="d-flex mx-3  ">
          
        <Carouselslide/>
        <div className="w-50 h-400">

                <div>
      <div
        id="flip"
        style={{
            marginLeft:"4.5rem",
            width: "80%",
          padding: "5px",
          textAlign: "center",
          backgroundColor: "#dd8d16",
          // border: "solid 1px #090909",
          cursor: "pointer"
        }}
        onClick={() => setShow(!show)}
      ><div className="fw-bold text-white"> Click Me <i className="fa-solid fa-angles-down"></i></div>
      </div>

      {show && (
        
        <div
          id="panel"
          style={{
            marginLeft:"4.5rem",
            width: "80%",
          transform: show ? "translateY(-100)" : "translateY(-100%)", // 👈 slide effect
          backgroundColor: "#0a1757",
          // border: "1px solid #090909",
          textAlign: "center",
          padding: "15px",
          transition: "transform 2s sec",
          }}
        >
        <section className="d-flex">
          <div className=" text-white fw-bold  w-60 text-align mx-4" >
            <p className=" mx-1 ">Safe Inside, Safe Outside</p>
            <p>From secure booking to live tracking, every ride is designed with safety and comfort in mind.</p>
            
            </div>
          <img className="w-25 " src={img1} alt="image"/>
          </section>
          
        </div>
      )}
    </div>
                <ul className="list-sentence1 fw-medium  text-align ">
                    <li className="fs-4 ">Key Exterior and Interior Safety Components</li>
                    <li>Secure Locking Systems: Rear doors feature mechanical child-safety locks that prevent passengers from accidentally opening doors from the inside while the car is moving.
Impact Protection Barriers: Built-in side-impact beams and front crumple zones physically absorb and redirect crash energy to keep the passenger cabin safe.</li>
                </ul>
  
        </div>
        </div>

        <div className="d-grid text-align fw-medium mx-3 pt-3">
        <h4 >Essential Physical Safety Features in a Cab</h4>
        <p >When you step into a taxi or ride-sharing vehicle, several physical design features are built directly into the car to ensure your protection throughout the journey. The most fundamental safety components are high-visibility three-point seatbelts available for both front and rear passengers, alongside a comprehensive network of airbags designed to cushion impacts. To prevent accidental openings while the vehicle is in motion, rear doors are equipped with child safety locks, and windows feature driver-controlled lockout switches. Furthermore, the vehicle's structural integrity is reinforced by side-impact door beams and front/rear crumple zones that absorb crash energy away from the passenger cabin. Finally, clear physical identification—such as an official driver ID badge displayed prominently on the dashboard, an illuminated roof sign, and a visible, calibrated fare meter—helps passengers instantly verify that they are inside a legitimate, regulated commercial vehicle.</p>
        </div>
        </div>
        


            <div className="container-fluid ">
            <div className="Scene1 list-sentence ">
                <ul className=" ms-3-5 fw-semibold fs-5 text-align  text-overlay ">
                  
                <li >Driver Background Check → Criminal record, license validity, and driving experience are checked.</li>
                <li >Live Tracking → Real‑time location tracking during the ride for passenger safety.</li>
                <li >Emergency Button → SOS button for immediate help (police or family contact).</li>
                
                </ul>
                
                
            </div>
            <div className="Scene2 list-sentence">
                <ul className=" ms-3-5 fw-semibold fs-5 text-align text-overlay">
                <li >User Verification → Passengers and drivers must verify their identity (ID proof, phone verification).</li>
                <li >Night Ride Safety → Only verified drivers are active at night; route monitoring enabled.</li>
                <li >Data Privacy → Passenger location and contact details are stored securely, not shared with third parties.</li>
                </ul>
            </div>
            <div className="Scene3 list-sentence">
                <ul className="ms-3-5 fw-semibold fs-5 text-align text-overlay">
                <li >AI Car Assignment Safety → When a car is assigned automatically, the system ensures the vehicle is inspected and safe.</li>
                <li >Autonomous Vehicle Monitoring → Future driverless cars will have continuous monitoring with GPS, cameras, and sensors.</li>
                <li >Insurance Protection → Coverage for both passengers and AI‑assigned vehicles in case of accidents.</li>
                </ul>
            </div>
             <div className="Scene4 list-sentence mb-5">
                <ul className=" ms-3-5 fw-semibold fs-5 text-align text-overlay">
                <li >Emergency Override → Passengers can stop or redirect the ride using an SOS or override button.</li>
                <li >Night Ride Restrictions → Autonomous or AI‑assigned cars operate only on verified routes at night.</li>
                <li >Ride Transparency → Passengers see which car is assigned, its route, and estimated arrival before boarding.</li>
                </ul>
            </div>
            
            

            </div>
            </div>
            <Founder/>
<Footer/>
        </>
    )
}
export default Safty