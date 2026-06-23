import { useState } from "react";

import marina from "../../assets/img/places/marina.png";
import kabaleeshwar from "../../assets/img/places/kabaleeshwar.png";
import guindy from "../../assets/img/places/guindy.png";
import cathedral from "../../assets/img/places/cathedral.png";
import fort from "../../assets/img/places/fort.st.png";


function Place(){
  const [hoverImg, setHoverImg] = useState(null);

  const location = {
    Marina: marina,
    Temple: kabaleeshwar,
    National_Park: guindy,
    Cathedral: cathedral,
    Fort_St: fort,
  };

    return(
        <>
        <div className="container py-4 ">
  <div className="row justify-content-center ">
    
    {/* Buttons Section */}
    <div className=" col-12 text-center mb-3 ">
      <div className="d-flex  justify-content-center gap-2 ">
        {Object.keys(location).map((key) => (
          <button
            key={key}
            className=" map-btn"
            onMouseOver={() => setHoverImg(location[key])}
            onMouseLeave={() => setHoverImg(null)}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </div>
    </div>

    {/* Hover Image Card */}
    {hoverImg && (
      <div className="col-12 col-md-4 text-center  ">

          <img
            src={hoverImg}
            alt="preview"
            className="img-fluid rounded card hover-image"
            style={{ width: "300px", maxHeight: "200px",  objectFit: "cover" }}
          />

      </div>
    )}
  </div>
</div>





        {/* <div className="map-container">
      <div className="buttons ">
        {Object.keys(location).map((key) => (
          <button
            key={key}
            className="map-btn"
            onMouseOver={() => setHoverImg(location[key])}
            onMouseLeave={() => setHoverImg(null)}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
          
        ))}
      </div>

      Hover Image Card
      {hoverImg && (
        <div className="hover-card">
          <img src={hoverImg} alt="preview" className="hover-image" />
        </div>
        
      )}
      
    </div> */}
        
        </>
    )
}
export default Place