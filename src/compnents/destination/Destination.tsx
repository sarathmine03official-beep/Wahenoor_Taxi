// import { Link } from "react-router-dom"
import { Link } from 'react-router-dom'
import image1 from '../../assets/img/logo/logo4.png'

function Destination(){
    return(
        <>

        <div className="px-4 py-5 my-4  text-center bg-custom-2 ">
    <img className="d-block mx-auto " src={image1} alt="" width="170" height="" />
    <h1 className=" fw-bold  text-white">Book Your Cab Now</h1>
    <div className='underline-w'></div>
    <div className="col-lg-6 mx-auto  ">
        <p className="lead mb-3 fw-medium">
            Travel anywhere in the city with comfort and safety.Instant cab booking, live tracking, and verified drivers for every ride.Your journey starts with one click—fast,secure,and affordable.
        </p>
        <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
    <button className="button-p">
  <div className="button-p-outer">
    <div className="button-p-inner">
    <Link to="/wdriver">  <span>Automation Driver</span></Link>
    </div>
  </div>
</button>

    <button className="button-p">
  <div className="button-p-outer">
    <div className="button-p-inner px-4-5">
    <Link to="/driverassist"><span> Driver Assist </span></Link>
    </div>
  </div>
</button>


        </div>
    </div>
</div>









        {/* <div className="px-4 py-5 my-5 text-center">
    <img className="d-block mx-auto mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
    <h1 className="display-5 fw-bold text-body-emphasis">Centered hero</h1>
    <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
            Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular
            front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive
            prebuilt components, and powerful JavaScript plugins.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button>
        </div>
    </div>
</div> */}




        {/* <h3 className="mb-3 text-underline">Request a ride</h3>
        <section className="container mt-2 destination-page ">
            <div className="center-btn-container pt-6">        
                
                <div className="d-flex justify-content-center pt-3">
                <p className="card-text w-50 transparent-btn text-white fw-bold pt-2 pb-3">
                    Up to 50% off your first 5 Uber rides. T&Cs apply.* *Valid within 15 days of signup.
                </p>
                </div>
                <ul className="pt-4">
            <li className="btn btn-outline-light transparent-btn me-4"><Link to="/wdriver"> Waymo Driver</Link></li>
            <li className="btn btn-outline-light transparent-btn "><Link to="/driverassist"> Driver Assist</Link></li>
            </ul>
            </div>

        </section> */}
        
        
        
        </>
    )
}
export default Destination