import React from 'react'
// import MintIcon from '../Assets/images/mintbank.png'
import jobberMan from '../Assets/images/jobberman.png'
import shLogo from '../Assets/images/sh-logo-dark.png'
const Patners = () => {
    return (
        <div>
            <section class="col-12 m-auto py-5 partners">
                <div class="
                        col-lg-8 col-12
                        m-auto
                        p-0
                        d-flex
                        flex-column
                        justify-content-center
                        align-items-center
                    ">
                    <h5 class="partner-heading">PARTNERS</h5>
                    <div class="col-12">
                        <div id="myCarousel" class="carousel slide col-12" data-bs-ride="carousel">
                            <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"><i class="fas fa-angle-left"></i></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"><i class="fas fa-angle-right"></i></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                            <div class="carousel-inner col-12">
                                <div class="carousel-item col-12 active">
                                    <div class="col-8 m-auto text-center">
                                        <img src={jobberMan} alt="" class="mint" />
                                    </div>
                                </div>
                                <div class="carousel-item col-12">
                                    <div class="col-8 m-auto text-center">
                                        <img src={jobberMan} alt="jobberMan" />
                                    </div>
                                </div>
                                <div class="carousel-item col-12">
                                    <div class="col-8 m-auto text-center">
                                        <img src ={shLogo} alt="sh-logo-dark.png" />
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-label="Slide 1" aria-current="true"></button>
                                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
                                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Patners;