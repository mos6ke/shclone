import React from 'react'

const Body = () => {
    return (
        <body>
            <div class="col-lg-12 col-12 px-lg-5 px-1 text-center m-auto bodyPix" >
                <h1>Building
                    <span> Africa's </span>
                    Workforce
                </h1>

                <p class="col-10 m-auto"> Through Side Hustle, global businesses can easily get the
                    right remote African talents and teams to help grow their
                    business and projects on-demand.
                </p>

            </div>
            <section class="col-12 p-0 m-0 d-flex flex-lg-row flex-column">
                <a href="https://internship.sidehustle.ng/" target="_blank" rel="noreferrer" class="col-lg-6 col-12 m-auto internship-section">


                    <div class="
                            d-flex
                            justify-content-center
                            internship-section-bg
                            text-center
                        ">
                        <div class="sh-overlay"></div>
                        <div class="col-10 internship-section-content">
                            <button class="sh-btn">
                                Apply as an Intern
                                <i class="fas fa-angle-right"></i>
                            </button>
                            <p class="sample">
                                Join the remote Side Hustle internship for free
                                to learn high-demand skills that will give you a
                                competitive advantage in the global workforce.
                            </p>
                        </div>
                    </div>
                </a>

                <a href="https://toptalent.africa/" target="_blank" rel="noreferrer" class="col-lg-6 col-12 m-auto talent-section">
                    <div class="
                            d-flex
                            justify-content-center
                            talent-section-bg
                            text-center
                        ">
                        <div class="sh-overlay"></div>
                        <div class="col-10 talent-section-content">
                            <button class="sh-btn">
                                Hire a Talent <i class="fas fa-angle-right"></i>
                            </button>
                            <p class="sample">
                                We offer talent across engineering, design,
                                marketing and product to connect businesses with
                                top talent
                            </p>
                        </div>
                    </div>
                </a>

            </section>
            
            
            <div class="sh-overlay">

            </div>

        </body>
    )
}
export default Body;
