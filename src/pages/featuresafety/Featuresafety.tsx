import Model from "../model/Model"

function Featuresafety(){
    return(
        <>
        <div className="ride-card">
  <h2 className="ride-title">
    Safe ! <span>Smart !</span> Travel ! »
  </h2>

  <p className="ride-desc">
    Reliable service. Every mile of the way.
  </p>
</div>


        <section className="container">
        <div className="container-fluid row g-5 py-3 pb-5 row-cols-1 row-cols-lg-3">
    <div className="feature col">
        <div
            className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"
        >
            <i className="fa-solid fa-gift"></i>
        </div>
        <h3 className="fs-2 text-body-emphasis">Rewards & Offers</h3>
        <p className="text-left ">
            Enjoy exclusive discounts and cashback on every ride. Earn points for frequent travel and redeem them easily. Your loyalty always brings extra savings.
        </p>
        <div className="pt-4">
        <a href="#" className="icon-link">
            Discover Offers
            <svg className="bi" aria-hidden="true"><use href="#chevron-right"></use></svg>
        </a></div>
    </div>
    <div className="feature col">
        <div
            className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"
        >
            <i className="fa-solid fa-children"></i>
        </div>
        <h3 className="fs-2 text-body-emphasis">Ride Sharing Option</h3>
        <p className="text-left">
            Share your cab with verified co-passengers and save more. Reduce traffic and carbon footprint while enjoying a safe, social ride. Smart travel that's affordable and ec-friendly.
        </p>
        
        <a href="#" className="icon-link">
            Discover Offers
            <svg className="bi" aria-hidden="true"><use href="#chevron-right"></use></svg>
        </a>
    </div>
    <div className="feature col">
        <div
            className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"
        >
            <i className="fa-solid fa-scroll"></i>
        </div>
        <h3 className="fs-2 text-body-emphasis">Transparent Pricing</h3>
        <p className="text-left">
            Know your fare before you book — no hidden charges. Every ride shows clear distance, time, and cost breakdown. Pay confidently with complete transparency.
        </p>
        <div className="pt-4">
        <a href="#" className="icon-link">
            Discover Offers
        </a></div>
    </div>

    <div className="feature col">
        <div
            className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"
        >
            <i className="fa-brands fa-cc-amazon-pay"></i>
        </div>
        <h3 className="fs-2 text-body-emphasis">Ride Benefits</h3>
        <p className="text-left">
            Experience comfort with clean interiors and air-conditioned rides. Choose from economy or premium options to match your style. Every trip designed for your convenience.
        </p>

        <a href="#" className="icon-link">
            Discover Offers
            <svg className="bi" aria-hidden="true"><use href="#chevron-right"></use></svg>
        </a>
    </div>

    <div className="feature col">
        <div
            className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"
        >
           <i className="fa-solid fa-shield-virus"></i>
        </div>
        <h3 className="fs-2 text-body-emphasis">Insurance Protection</h3>
        <p className="text-left">
            Every passenger is covered with ride insurance for peace of mind. In case of emergencies, quick assistance is guaranteed. Safety isnt optional — it,s built-in.
        </p>
        <a href="#" className="icon-link">
            Discover Offers
            <svg className="bi" aria-hidden="true"><use href="#chevron-right"></use></svg>
        </a>
    </div>
    <div className="feature col">
        <div
            className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"
        >
            <i className="fa-solid fa-gears"></i>
        </div>
        <h3 className="fs-2 text-body-emphasis">Smart Functions</h3>
        <p className="text-left ">
            Our AI-powered system assigns the best cab instantly. Real-time route optimization saves time and fuel. Technology that makes every ride smoother and smarter.
        </p>
        <div className="pt-4">
        <a href="#" className="icon-link">
            Discover Offers
            <svg className="bi" aria-hidden="true"><use href="#chevron-right"></use></svg>
        </a></div>
    </div>
</div>
</section>

        
        
        </>
    )
}
export default Featuresafety