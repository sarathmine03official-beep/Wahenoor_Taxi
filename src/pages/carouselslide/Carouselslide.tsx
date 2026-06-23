import image1 from '../../assets/img/safety/safety1.png'
import image2 from '../../assets/img/safety/safety2.png'
import image3 from '../../assets/img/safety/safety3.png'
// import image4 from '../../assets/img/drive_with_car/safty/check5.jpg'
// import image5 from '../../assets/img/drive_with_car/safty/check6.jpg'

function Carouselslide(){
    return(
        <>
        <div className='container-fluid-1  bg-primary  w-50 h-400 '>
        <div id="carouselExampleCaptions" className="carousel slide ">
  <div className="carousel-indicators ">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner ">
    <div className="carousel-item active ">
      <img src={image1} className="d-block w-100 h-400" alt="..."/>
      <div className="carousel-caption d-none fw-semibold d-md-block ">
        <h5 >Vehicle Safety Inspection</h5>
        <p >Our certified engineers ensure every taxi meets top safety standards before hitting the road.</p>
      </div>
    </div>
    <div className="carousel-item ">
      <img src={image2} className="d-block w-100 h-400" alt="..."/>
      <div className="carousel-caption d-none d-md-block fw-semibold">
        <h5>Seat Belt Safety Awareness</h5>
        <p>Always buckle up before every ride — your safety starts with a simple click. 
    Drive responsibly and protect lives.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={image3} className="d-block w-100 h-400" alt="..."/>
      <div className="carousel-caption d-none d-md-block fw-semibold ">
        <h5 >Urban Road Safety Awareness</h5>
        <p>Stay alert at every signal — respect pedestrians and traffic lights. 
    Safe driving keeps our city moving smoothly.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>



</div>
        
        
        </>
    )
}
export default Carouselslide