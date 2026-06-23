import image1 from '../../assets/img/safety/safety6.png'
import image2 from '../../assets/img/safety/safety7.jpeg'
import image3 from '../../assets/img/safety/safety8.png'
import image4 from '../../assets/img/drive_with_car/safty/check5.jpg'
import '../../App.css'


function Founder(){
    return(
        <>

        <div className="text-center my-5 ">
  <p className="top-line">Your Ride, Our Priority</p>
  
  <h1 className="main-heading">
    Reliable <div className='d-grid'> <span className="highlight">Taxi Services</span></div>
  </h1>
  <div className="underline"></div>
  <p className="subtext">
    Safe, comfortable and on-time rides anywhere, anytime.
  </p>
</div>




        <div className="container-fluid  mb-5">
            <div className="row gap-2">
    <div className="card h-100 product-card" style={{width: "15rem",margin:"auto"}}>
  <img src={image1} className="card-img-top" style={{height: "140px"}} alt="..."/>
  <div className="">
    <h5 className="card-title">Safe Travel</h5>
    <p>Every ride is protected with verified drivers and regular vehicle checks for your peace of mind.</p>
    
  </div>
</div>

<div className="card h-100 product-card" style={{width: "15rem",margin:"auto"}}>
  <img src={image2} className="card-img-top" style={{height: "140px"}} alt="..."/>
  <div className="">
    <h5 className="card-title">Smart Monitoring</h5>
    <p>Real-time tracking and secure data systems keep your journey safe from pickup to drop-off.</p>

  </div>
</div>

<div className="card h-100 product-card" style={{width: "15rem",margin:"auto"}}>
  <img src={image3} className="card-img-top" style={{height: "140px"}} alt="..."/>
  <div className="">
    <h5 className="card-title">Ride Insurance</h5>
    <p>
Every trip is covered under trusted insurance plans to ensure complete safety and support.</p>

  </div>
</div>
<div className="card h-100 product-card" style={{width: "15rem",margin:"auto"}}>
  <img src={image4} className="card-img-top" style={{height: "140px"}} alt="..."/>
  <div className="">
    <h5 className="card-title">Safety First</h5>
    <p>Our vehicles undergo regular safety checks to ensure maximum passenger protection.</p>
    
  </div>
</div>
</div>
</div> 
        
        {/* <div className="row container-fluid ">
    <div className="col-lg-4 ">
        <svg
            aria-label="Placeholder"
            className="bd-placeholder-img rounded-circle"
            height="140"
            preserveAspectRatio="xMidYMid slice"
            role="img"
            width="140"
            xmlns="http://www.w3.org/2000/svg"
        >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
        </svg>
        <h2 className="fw-normal">Heading</h2>
        <p>
            Some representative placeholder content for the three columns of text below the carousel. This is the first
            column.
        </p>
        <p><a className="btn btn-secondary" href="#">View details »</a></p>
    </div>

    <div className="col-lg-4">
        <svg
            aria-label="Placeholder"
            className="bd-placeholder-img rounded-circle"
            height="140"
            preserveAspectRatio="xMidYMid slice"
            role="img"
            width="140"
            xmlns="http://www.w3.org/2000/svg"
        >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
        </svg>
        <h2 className="fw-normal">Heading</h2>
        <p>
            Another exciting bit of representative placeholder content. This time, we've moved on to the second column.
        </p>
        <p><a className="btn btn-secondary" href="#">View details »</a></p>
    </div>

    <div className="col-lg-4">
        <svg
            aria-label="Placeholder"
            className="bd-placeholder-img rounded-circle"
            height="140"
            preserveAspectRatio="xMidYMid slice"
            role="img"
            width="140"
            xmlns="http://www.w3.org/2000/svg"
        >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
        </svg>
        <h2 className="fw-normal">Heading</h2>
        <p>And lastly this, the third column of representative placeholder content.</p>
        <p><a className="btn btn-secondary" href="#">View details »</a></p>
    </div>
    
</div> */}

        
        
        
        </>
    )
}
export default Founder