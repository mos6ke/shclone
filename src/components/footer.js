import React from 'react'
import tweet from '../Assets/images/tweet.svg'
import linkein from '../Assets/images/linked.svg'
import FBimage from '../Assets/images/fb.svg'
import iG from '../Assets/images/insta.svg'
import ShIcon from "../Assets/images/sh-icon.png";

const Footer = () => {
    return (
        
                <footer class="col-12 pt-5">
                    <div class="footer-sh-info col-12 m-auto">
                    <div class ="col-10 m-auto d-flex justify-content-md-between
                    align-items-start flex-wrap ">
                    <div class ="sh-logo col-12 col-md-3
                    d-md-flex
                    flex-md-column
                    justify-content-md-start
                    align-items-md-start
                    m-auto
                    mx-md-0
                    my-5 my-md-0
                    text-center
                    ">
                    <img src={ShIcon} alt="Side Hustle Logo" class ="img-fluid footer-img" height="50px" />
                    <div class ="
                    d-flex
                    justify-content-between
                    justify-content-md-between
                    mt-4
                    col-6 col-md-12
                    m-auto
                    ">
                    <a href="https://www.facebook.com/SideHustleNigeria/"><img src={FBimage} alt="Facebook Icon" width="30" height="30" /></a>
                    <a href="https://www.linkedin.com/company/sidehustleng"><img src={linkein} alt="LinkedIn Icon" width="30" height="30" /></a>
                    <a href="https://twitter.com/ngsidehustle?s=11"><img src={tweet} alt="Twitter Icon" width="30" height="30" /></a>
                    <a href="https://instagram.com/sidehustleinternship?igshid=1sb7ei0owciam"><img src={iG} alt="Instagram Icon" width="30" height="30" /></a>
                    </div>
                    </div>
                    <div class ="col-5 col-md-2 mb-3 mb-lg-0 pt-md-4">
                    <h5>OUR LOCATION</h5>
                    <address>
                    9, Olaniyi Toki street,<br />
                    Akobo Ojurin,<br />
                    Ibadan, Nigeria
                    </address>
                    </div>
                    <div class ="col-5 col-md-2 mb-3 mb-lg-0 pt-md-4">
                    <h5>CALL US</h5>
                    <p><a href="tel:+2347067059943">+2347067059943</a></p>
                    </div>
                    <div class ="col-3 col-md-2 mb-3 mb-lg-0 pt-md-4">
                    <h5>OUR EMAIL</h5>
                    <p>
                    <a href="mailto:funke@sidehustle.ng">funke @sidehustle.ng</a>
                    </p>
                    </div>
                    </div>
                    </div>
                    <div class ="footer-copy col-12">
                    <div class ="col-10 m-auto">
                    <p class ="">
                    © 2021 Side Hustle Ng.All Rights Reserved
                    </p>
                    </div>
                    </div>
                </footer>
    )
}
export default Footer;