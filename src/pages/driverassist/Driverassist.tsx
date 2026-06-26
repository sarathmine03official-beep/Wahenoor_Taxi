import { useEffect, useState } from "react"
import Header from "../../compnents/header/Header"
import 'bootstrap/dist/css/bootstrap.min.css'
import video1 from "../../assets/img/drive_with_car/booking/WhatsApp Video 2026-06-10 at 17.45.12.mp4"
import Footer from "../../compnents/footer/Footer";

// import image1 from '../../assets/img/trip1.webp'
// import { Link } from "react-router-dom"

function Driverassist(){
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






      {/* <div className="card h-100 shadow border-0 rounded-4 p-4 fw-bold ">
        <h3 className="">
          Get Your Ride Right with Uber Reserve
        </h3>

        <ul className="mt-3">
          <li>Choose pickup time up to 90 days ahead.</li>
          <li>Extra waiting time included.</li>
          <li>Free cancellation up to 60 minutes before.</li>
        </ul>

        <button className="btn btn-outline-dark mt-auto">
          Book Your Ride
        </button>
      </div> */}


    {/* Plan Later Card */}
      <div className="plan-card  w-50">

  {/* Right Side Content */}
  <div className="form-section">

    <h2 className="fw-bold mb-4 text-center text-white ">
      Plan for Later
    </h2>

    <div className="mb-3">
      <i className="fa-solid fa-calendar-check"></i>
      <label className="form-label fw-bold pe-5">Select Date</label>
      <input
        type="date"
        className="form-control"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
    </div>

    <div className="mb-4">
      <i className="fa-solid fa-hourglass-half"></i>
      <label className="form-label fw-bold pe-5 ">Select Time</label>
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


    {/* <div className="col-lg-6  background-img1 w-50">
      <h3 className="fw-bold pb-3 mt-3 ">Plan for Later</h3>
      <div className=" h-100  border-0 rounded-4 p-3  ">
        
<div className="d-grid  ">
        <label className="form-label  d-flex">
          Select Date
        </label>

        <input
          type="date"
          className="form-control w-25 "
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label className="form-label d-flex">
          Select Time
        </label>

        <input
          type="time"
          className="form-control mb-4 w-25"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        /></div>

<button
  className="d-flex justify-content-md-start  btn-bottom mb-5 group/button  inline-flex items-center  overflow-hidden rounded-md background-c backdrop-blur-lg ps-3-5  py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20"
>
  <span className="text-lg ">Next</span>
  <div
    className=" absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
  >
    <div className="relative h-full  bg-white/20"></div>
  </div>
</button>

      </div>
    </div> */}

  </div>
</div>
<Footer/>




        {/* <Header/>
        <div className="container">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5 ">

          <div className="col-10 col-sm-8 col-lg-5 ">
        <video src={video1} autoPlay loop muted className="w-50 border-3"/>
    </div>
   
    <div className="col-lg-6 container-fluid py-4 ">
        <h1 className="d-flex   fw-medium text-body-emphasis lh-1 mb-3">Request a ride</h1>
        <p className="me-5">
           Up to 50% off your first 5 Uber rides. T&Cs apply.* *Valid within 15 days of signup.
        </p>
        <div className="container mt-4">
  <div className="mb-3">
    <div className="position-relative mb-3">
        <i className="bi bi-geo-alt-fill position-absolute" 
         style={{ left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#070707' }}>
      </i>
        <input type="text" className="form-control ps-5 w-75 " id="pickup" placeholder="Enter Pickup location"/>
    </div>
  </div>

  <div className="position-relative mb-3">
     <i className="bi bi-geo-alt-fill position-absolute" 
         style={{ left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#070707' }}>
      </i>
    <input type="text" className="form-control ps-5 w-75 " id="dropoff" placeholder="Enter dropoff location"/>
  </div>
</div>
 
<button className="d-flex ms-4 bg-gray-950 text-gray-400 border border-gray-400 border-b-4 font-medium overflow-hidden relative px-5 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
  <span className=" bg-gray-400 shadow-gray-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
  See the Price
</button>
    </div>
</div>
</div>



 
<div className="container ">
  

<div className="d-flex  justify-content-md-evenly mx-lg-5 gap-5 mb-5">

        <div className="card w-35 border ">
        <h2 className="text-align">Get your ride right with Uber Reserve</h2>
        <div className="d-flex justify-content-md-center ">
        <i className="bi bi-arrow-right-circle "></i>
        <p className="ms-2">Book Your Ride</p>
        </div>
        <h3 className="d-flex justify-content-md-center ">Benefits</h3>
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

    </div>

        <div className="card w-80 boder ">
          <h1 className=" ">Plan for later</h1>
          <h2 className="d-flex justify-content-md-start">Choose date and time</h2>
        <div className="background-img1 ">
            
            <div className=" d-flex justify-content-md-end  me-5 position-relative pt-3">
                <i className="bi bi-calendar-heart position-absolute ps-2 " 
         style={{ right: '170px', top: '65%', transform: 'translateY(-50%)', color: '#070707' }}>
      </i>

            <input type="date" className="form-control w-25 ps-6" value={date} onChange={(e) => setDate(e.target.value)}/></div>
            <div className=" d-flex justify-content-md-end me-5 position-relative pt-5">
                <i className="bi bi-clock-fill position-absolute ps-2 " 
         style={{ right: '170px', top: '78%', transform: 'translateY(-50%)', color: '#070707' }}></i>
            <input type="time" className="form-control w-25 ps-6" value={time} onChange={(e) => setTime(e.target.value)}/></div>
            

<button
  className="d-flex justify-content-md-end me-6 btn-bottom mb-5 group/button  inline-flex items-center  overflow-hidden rounded-md background-c backdrop-blur-lg ps-3-5  py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20"
>
  <span className="text-lg ">Next</span>
  <div
    className=" absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
  >
    <div className="relative h-full  bg-white/20"></div>
  </div>
</button>

        </div>
        
    </div>

</div>
</div>
<Footer/> */}


        </>
    )
}
export default  Driverassist