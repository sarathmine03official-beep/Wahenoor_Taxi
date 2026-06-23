import video1 from '../../assets/img/frontdesign/waymodriver-v2.webm'
import video2 from '../../assets/img/frontdesign/vsassist-v2.webm'
import { useState } from 'react';
function Examplevideo(){
    const [VideoSrc, setVideoSrc] = useState(video1);
    const [Title, setShowTitle] = useState(1);
    const [paragraph, setShowParagraph] = useState(1);
    return(
        <>

        <div className="container-fluid   py-4  ">
  <div className="row flex-lg-row-reverse justify-content-md-center align-items-center gap-5 mx-sm-5 ">
    
    {/* Video Section */}
    <div className="col-12 col-md-3 mb-4 mb-md-0 ">
      <video
        id="video1"
        src={VideoSrc}
        autoPlay
        loop
        muted
        className=" border-r  "
      />
    </div>

    {/* Text Section */}
    <div className="col-12 col-md-6 text-align ">
      {Title === 1 && (
        <h1 className=" fw-bold text-body-emphasis lh-1 mb-3">
          The Automation Driver
        </h1>
      )}
      {paragraph === 1 && (
        <p className="lead fw-normal">
          The Automation Driver is the embodiment of fully autonomous technology
          that is always in control from pickup to destination. Passengers don’t
          even need to know how to drive. They can sit in the back seat, relax,
          and enjoy the ride with the Waymo Driver getting them to their
          destination safely.
        </p>
      )}

      {Title === 2 && (
        <h1 className=" fw-bold text-body-emphasis lh-1 mb-3">
          The Driver Assist
        </h1>
      )}
      {paragraph === 2 && (
        <p className="lead fw-normal">
          Driver Assist systems still rely on a human driver to stay alert and
          take control when needed. These technologies can help with lane
          keeping, adaptive cruise control, and emergency braking, but they are
          not fully autonomous. The driver remains responsible for safety.
        </p>
      )}

      {/* Toggle Buttons */}
      <div className="d-flex  gap-3 mt-1">
        
<label htmlFor="filter" className="switch" aria-label="Toggle Filter">
  <input type="checkbox" id="filter" />
  <span onClick={() => {
            setVideoSrc(video1);
            setShowParagraph(1);
            setShowTitle(1);
        }}  >Automation Driver</span>
  <span  onClick={() => {
            setVideoSrc(video2);
            setShowParagraph(2);
            setShowTitle(2);
        }}>Driver assist</span>
</label>
      </div>
    </div>
  </div>
</div>


        

    {/* <div className="row flex-lg-row-reverse align-items-center  py-5 ">
    <div className="col-10 col-sm-8 col-lg-6">
        <div className=''>
            <video id='video1' src={VideoSrc}  autoPlay loop muted className='ms-6 w-50'/>
        </div>
    </div>
    
    <div className="col-lg-5 ">
        
        {Title === 1 &&(
            <h4 className="display-5 fw-medium text-body-emphasis lh-1 mb-3 text-align">The Automation Driver</h4>

        )}
        {paragraph === 1 &&(
        <p className="lead text-align fw-normal">
            The Automation Driver is the embodiment of fully autonomous technology that is always in control from pickup to destination. Passengers don’t even need to know how to drive. They can sit in the back seat, relax, and enjoy the ride with the Waymo Driver getting them to their destination safely.
        </p>
        )}
        { Title === 2 &&(
            <h4 className="display-5 fw-medium text-body-emphasis lh-1 mb-3 text-align">The Dirver Assist</h4>
        )}
        {paragraph === 2 && (
          <p className="lead text-align fw-normal">
            Driver Assist systems still rely on a human driver to stay alert and
            take control when needed. These technologies can help with lane
            keeping, adaptive cruise control, and emergency braking, but they
            are not fully autonomous. The driver remains responsible for safety.
          </p>
        )}
        <div className="d-grid  d-md-flex justify-content-md-start ">

<label for="filter" class="switch" aria-label="Toggle Filter">
  <input type="checkbox" id="filter" />
  <span onClick={() => {
            setVideoSrc(video1);
            setShowParagraph(1);
            setShowTitle(1);
        }}  >Automation Driver</span>
  <span  onClick={() => {
            setVideoSrc(video2);
            setShowParagraph(2);
            setShowTitle(2);
        }}>Driver assist</span>
</label>
        </div>
    </div>
</div> */}

        
        </>
    )
}
export default Examplevideo