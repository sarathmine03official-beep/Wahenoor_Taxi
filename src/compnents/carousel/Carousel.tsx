// import Banner1 from '../../assets/img/banner/Banner1.jpg'

function Carousel(){
    return(
        <>


        <section className="container-fluid login-page d-flex justify-content-end align-items-center min-vh-100">
  <div className="login-form text-center p-4 rounded shadow-lg" style={{ maxWidth: "400px", backgroundColor: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}>
    
    <h2 className="mb-3 text-white">Login</h2>
    <p className="text-white">Have an account?</p>

    {/* Username */}
    <div className="form-floating mb-3">
      <input type="text" className="form-control bg-transparent text-white border-light" id="username" placeholder="Username"/>
      <label htmlFor="username" className="text-light">Username</label>
    </div>

    {/* Password */}
    <div className="form-floating mb-3">
      <input type="password" className="form-control bg-transparent text-white border-light" id="password" placeholder="Password"/>
      <label htmlFor="password" className="text-light">Mobile No</label>
    </div>

    {/* Sign In Button */}
    <button className="btn btn-light w-100 mb-3">SIGN IN</button>

    {/* Social Login */}
    <p className="text-white mt-3">— Or Sign In With —</p>
    <div className="d-flex justify-content-center gap-2">
      <button className="btn btn-outline-light">Google</button>
      <button className="btn btn-outline-light">Twitter</button>
    </div>
  </div>
</section>


{/* <section className="container-fluid login-page d-flex justify-content-end  align-items-center">
  <div className="login-form text-center p-4 rounded me-8">
    <h2 className="mb-3 text-white">Login</h2>
    <p className="text-white">Have an account?</p>

    <div className="form-floating mb-3">
      <input type="text" className="form-control w-100 bg-transparent text-white border-light" id="username" placeholder="Username"/>
      <label htmlFor="username" className="text-light">Username</label>
    </div>

    <div className="form-floating mb-3">
      <input type="password" className="form-control w-100 bg-transparent text-white border-light" id="password" placeholder="Password"/>
      <label htmlFor="password" className="text-light">Mobile No</label>
    </div>

    <button className="btn btn-light w-100 mb-3">SIGN IN</button>


    <p className="text-white mt-3">— Or Sign In With —</p>
    <div className="d-flex justify-content-center gap-2">
      <button className="btn btn-outline-light">Google</button>
      <button className="btn btn-outline-light">Twitter</button>
    </div>
  </div>
</section> */}





    {/* <section className="container-fluid hero bg-black">
    <div className="hero-text">
      <h1>Bring Nature<br/>Into Your Home</h1>
      <p>Beautiful indoor and outdoor plants to make your space greener.</p>
      <div classNameName="buttons">
        <button className="btn shop">Shop Now</button>
        <button className="btn learn">Learn More</button>
      </div>
    </div>
    <div className="hero-image">
        <img src={Banner1} alt='frontimg'/>
    </div>
  </section>    */}
        </>
    )
}
export default Carousel