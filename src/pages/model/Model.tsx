import image1 from '../../assets/img/logo/logo4.png'

function Model(){
    return(
        <>
        <div className="container">
            <div className="row bg-primary ">
        <div className="col-lg-4 ">
        <div className="d-md-flex justify-content-md-center">
        <img src={image1} className="bd-placeholder-img rounded-circle" width="250" height="250"/>
        </div>
        <h2 className="fw-normal">Heading</h2>
        <p>And lastly this, the third column of representative placeholder content.</p>
        <p><a className="btn btn-secondary" href="#">View details »</a></p>
    </div>

            <div className="col-lg-4 ">
        <div className="d-md-flex justify-content-md-center">
        <img src={image1} className="bd-placeholder-img rounded-circle" width="250" height="250"/>
        </div>
        <h2 className="fw-normal">Heading</h2>
        <p>And lastly this, the third column of representative placeholder content.</p>
        <p><a className="btn btn-secondary" href="#">View details »</a></p>
    </div>

            <div className="col-lg-4 ">
        <div className="d-md-flex justify-content-md-center">
        <img src={image1} className="bd-placeholder-img rounded-circle" width="250" height="250"/>
        </div>
        <h2 className="fw-normal">Heading</h2>
        <p>And lastly this, the third column of representative placeholder content.</p>
        <p><a className="btn btn-secondary" href="#">View details »</a></p>
    </div>
    </div>
    </div>
        
        </>
    )
}
export default Model