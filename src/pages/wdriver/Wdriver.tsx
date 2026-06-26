import Header from "../../compnents/header/Header"
import video1 from "../../assets/img/drive_without_car/booking/usingvideo1.mp4"
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from "../../compnents/footer/Footer";

function Wdriver(){
    const [date ,setDate] =useState('');
    const [time,setTime] =useState('');

          useEffect(() => {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        setDate(tomorrow.toISOString().split('T')[0]); // format: YYYY-MM-DD
    
    
            const defaultTime = new Date();
        defaultTime.setHours(9);
        defaultTime.setMinutes(0);
        const formattedTime = defaultTime.toTimeString().slice(0, 5); // HH:MM
        setTime(formattedTime);
      }, []);
    
    return(
        <>
        <Header/>
        <div className="container py-5">
  <div className="row align-items-center">

    {/* Booking Form */}
    <div className="col-lg-6">
      <div className="card shadow-sm border-2 p-4 rounded-4">
        <h1 className="fw-bold mb-3">Request a Ride</h1>

        <p className="text-muted">
          Up to 50% off your first 5 rides. Terms & Conditions apply.
        </p>

        <div className="mb-3">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="📍 Enter Pickup Location"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="📍 Enter Drop Location"
          />
        </div>

<button className="d-flex ms-1 bg-gray-950 text-gray-400 border border-gray-400 border-b-4 font-medium overflow-hidden relative px-5 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
  <span className=" bg-gray-400 shadow-gray-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
  See the Price
</button>


      </div>
    </div>

    {/* Video */}
    <div className="col-lg-5 text-center">
      <video
        src={video1}
        autoPlay
        loop
        muted
        className="w-100 rounded-4  border-5"
      />
    </div>

  </div>
</div>

{/* <div className="container">
<h2 className="">Get your ride right with Uber Reserve</h2>
        <div className="d-flex justify-content-md-center ">
        <i className="bi bi-arrow-right-circle "></i>
        <p className="ms-2">Book Your Ride</p>
        </div></div> */}

        <div className="reserve-banner">

  {/* <div className="top-line"></div> */}

  <div className="content">
    <span className="star">✦</span>

    <p>
      Get your ride right with
      <span className="highlight ms-2"> Wahenoor Reserve</span>
    </p>

    <span className="star">✦</span>
  </div>

  <div className="bottom-section">
    <div className="small-line"></div>

    <button className="ride-btn">
      → BOOK YOUR RIDE
    </button>

    <div className="small-line"></div>
  </div>
  <div className="d-md-flex justify-content-md-center">
  <div className="bottom-line "></div></div>

</div>


<div className="container py-5 ">
  <div className="row g-4 ">
    

    {/* Reserve Card */}
    <div className="col-lg-6   border-radius " >

      

        <h3 className="d-flex justify-content-md-start ">Benefits</h3>
        <div className="d-flex ">
        <img alt="" src="https://tb-static.uber.com/prod/udam-assets/e12eddee-f082-49f7-a5fc-22c17977de50.svg" className="css-hmxZjQ w-2 ms-2 mt-3"></img>
        <p className=" mt-2-5 ms-2 text-align">Choose your exact pickup time up to 90 days in advance.</p>
       </div>
              <div className="d-flex ">
        <img alt="" src="https://tb-static.uber.com/prod/udam-assets/30f5ecd4-8ccf-44d0-9976-2833f69df8a9.svg" className="css-hmxZjQ w-2 ms-2"></img>
        <p className=" pe-5 ps-2 text-align">Extra wait time included to meet your ride.</p>
       </div>
                <div className="d-flex ">
        <img alt="" src="https://tb-static.uber.com/prod/udam-assets/45ebda59-6a0d-41e3-a924-0dbbce078029.svg" className="css-hmxZjQ w-2 ms-2 "></img>
        <p className=" ps-2 text-align">Cancel at no charge up to 60 minutes in advance.</p>
       </div>
       <p className="ps-2  text-align"><i className="fa-solid fa-clock pe-4"></i>Drivers wait patiently to match your arrival time — no rush, no stress.</p>
       <p className="ps-2  text-align"><i className="fa-solid fa-ban pe-4"></i>Cancel up to 60 minutes before pickup without any charge.</p>
       <div className="d-flex"><i className="fa-solid fa-shield-halved ps-2 pt-1 "></i>
       <p className="ps-3 text-align">Verified drivers and insured vehicles ensure your peace of mind on every ride.</p>
</div>

</div>


    {/* Plan Later Card */}
      <div className="plan-card-w  w-50">

  {/* Right Side Content */}
  <div className="form-section-1">

    <h2 className="fw-bold mb-4 text-center ">
      Plan for Later
    </h2>

    <div className="mb-3">
      <i className="fa-solid fa-calendar-check"></i>
      <label className="form-label fw-medium pe-5">Select Date</label>
      <input
        type="date"
        className="form-control"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
    </div>

    <div className="mb-4">
      <i className="fa-solid fa-hourglass-half"></i>
      <label className="form-label fw-medium pe-5">Select Time</label>
      <input
        type="time"
        className="form-control"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
    </div>

    <button className="btn btn-dark w-100">
      Next
    </button>

  </div>

</div>
 </div>
</div>
<Footer/>

        
        </>
    )
}
export default Wdriver