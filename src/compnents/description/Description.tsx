
function Description(){
    return(
        <>

<section className=" py-5">
  <h2 className="text-center mb-5  fw-bold">
    Highlights of Our Service...
  </h2>

  <div className="container-fluid row justify-content-md-evenly  g-4">
    {/* Card 1 */}
    <div className="col-12 col-md-4 row card-D col-lg-2 text-left">
      <img
        src="//storage.googleapis.com/waymo-prod-cdn/uploads/5ac7e03dd1f0eac4c3f683f29d72649d-icon_10M.svg"
        alt="20M+ rides"
        width="64"
        height="64"
        className="mb-3 w-40"
      />
      <h5>20M+ rides served</h5>
      <p>And counting — with a 93% satisfaction rate from our riders.</p>
    </div>

    {/* Card 2 */}
    <div className="col-12 col-md-4 row card-D col-lg-2 text-left">
      <img
        src="//lh3.googleusercontent.com/lFr3ow7CyoOfFH2h-uv_fxa3aHs65IL_m0-m-1aEMktSsoazpS_Ds3xA2hrnl2ANuwmz3eSJkqxI79g8k27wBUEtytcIrd9vIA=e365-s420"
        alt="Experience"
        width="64"
        height="64"
        className="mb-3 w-40 "
      />
      <h5>An experience second to none</h5>
      <p>Your ride, your way — safe, private and sustainable.</p>
    </div>

    {/* Card 3 */}
    <div className="col-12 col-md-4 row card-D col-lg-2 text-left">
      <img
        src="//lh3.googleusercontent.com/ut5HvVYmNo8mnW7k8Qhg4PnC0DDjsnCVtxxwOpijGg0w4H7PcZl9Y38E45UU6OCg7MSwOf969H1KkbYUc956etH7AD7cpVDdmII=e365-s420"
        alt="Available 24/7"
        // width="64"
        // height="64"
        className="mb-2 w-40"
      />
      <h5>Available 24/7</h5>
      <p>Day or night, we'll get you where you need to go.</p>
    </div>

    {/* Card 4 */}
    <div className="col-12 col-md-4 row card-D col-lg-2 text-align ">
      <i className="fa-solid fa-map-location-dot fa-2x pb-4 text-black w-3 mt-4"></i>
      <h5>Expanding Across Cities</h5>
      <p>We're growing fast — now serving rides in 50+ major cities and counting.</p>
    </div>
  </div>
</section>




        {/* <h4 className=" px-6  py-4 text-align  text-underline">Highlights of Our Service...</h4>
        <div className="d-flex justify-content-sm-between py-4  px-6 ">        
<div className="card-D row">
    <img alt="Homepage: Our service: Feature 3 icon" loading="lazy" fetchPriority="auto" srcSet="//storage.googleapis.com/waymo-prod-cdn/uploads/5ac7e03dd1f0eac4c3f683f29d72649d-icon_10M.svg 2x, //storage.googleapis.com/waymo-prod-cdn/uploads/5ac7e03dd1f0eac4c3f683f29d72649d-icon_10M.svg 1x" src="//storage.googleapis.com/waymo-prod-cdn/uploads/5ac7e03dd1f0eac4c3f683f29d72649d-icon_10M.svg" width="48" height="48" className="_image_1yfl2_5 w-3"></img>
    <h4 className="text-align">20M+ rides served</h4>
    <p className="text-align">And counting - with a 93% satisfaction rate from our riders.**</p>
</div>

<div className="card-D row ">
 <img alt="Homepage: Our service: Feature 2 image" loading="lazy" fetchPriority="auto" srcSet="//lh3.googleusercontent.com/lFr3ow7CyoOfFH2h-uv_fxa3aHs65IL_m0-m-1aEMktSsoazpS_Ds3xA2hrnl2ANuwmz3eSJkqxI79g8k27wBUEtytcIrd9vIA=e365-s840-v1 2x, //lh3.googleusercontent.com/lFr3ow7CyoOfFH2h-uv_fxa3aHs65IL_m0-m-1aEMktSsoazpS_Ds3xA2hrnl2ANuwmz3eSJkqxI79g8k27wBUEtytcIrd9vIA=e365-s420 1x" src="//lh3.googleusercontent.com/lFr3ow7CyoOfFH2h-uv_fxa3aHs65IL_m0-m-1aEMktSsoazpS_Ds3xA2hrnl2ANuwmz3eSJkqxI79g8k27wBUEtytcIrd9vIA=e365-s420" width="48" height="48" className="_image_1yfl2_5 w-3 "/>
    <h4 className="text-align">An experience second to none</h4>
    <p className="pb-4 text-align">Your ride, your way - safe, private and sustainable.</p>
</div>

    <div className="card-D row">
    <img alt="Homepage: Our service: Feature 1 icon" loading="lazy" fetchPriority="auto" srcSet="//lh3.googleusercontent.com/ut5HvVYmNo8mnW7k8Qhg4PnC0DDjsnCVtxxwOpijGg0w4H7PcZl9Y38E45UU6OCg7MSwOf969H1KkbYUc956etH7AD7cpVDdmII=e365-s840-v1 2x, //lh3.googleusercontent.com/ut5HvVYmNo8mnW7k8Qhg4PnC0DDjsnCVtxxwOpijGg0w4H7PcZl9Y38E45UU6OCg7MSwOf969H1KkbYUc956etH7AD7cpVDdmII=e365-s420 1x" src="//lh3.googleusercontent.com/ut5HvVYmNo8mnW7k8Qhg4PnC0DDjsnCVtxxwOpijGg0w4H7PcZl9Y38E45UU6OCg7MSwOf969H1KkbYUc956etH7AD7cpVDdmII=e365-s420" width="48" height="48" className="_image_1yfl2_5 w-3"/>
    <h4 className="text-align pb-3">Available 24/7</h4>
    <p className="pb-4 text-align">Day or night, we'll get you  where you need to go.</p>
</div>

<div className="card-D row">
   <i className="fa-solid fa-map-location-dot icon-custom mt-2"></i>
    <h4 className="text-align mb-1">Expanding Across Cities</h4>
    <p className="pb-2 text-align">We're growing fast — now serving rides in 50+ major cities and counting.</p>
</div>

</div>
        */}
        
        </>
    )
}
export default Description