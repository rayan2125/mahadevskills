import React from "react";
import "./Footer.css"

const Footer =()=>{
    return(
        <footer>
       
        <section class="section-content-block footer-widget-area-bg">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-sm-12">
                        <div class="footer-widget-area">
                            <div class="footer-logo" >
                                <img src="https://mahadevskill.com/images/Mahadev_skill_logo-removebg-preview.png" alt="Logo" width="205"/>
                            </div>
                            <div class="contact-info divider-line">
                                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas amet vestibulum tortor quam feugiat vitae ultricies eget tempor sit  ante.</p>
                            </div>
                            <div class="contact-info">
                                <div class="contact-details">
                                    <div class="social-icons">
                                        <a href="#">
                                            <i class="fa fa-facebook"></i>
                                        </a>
                                        <a href="#">
                                            <i class="fa fa-twitter"></i>
                                        </a>
                                        <a href="#">
                                            <i class="fa fa-pinterest-p"></i>
                                        </a>
                                        <a href="#">
                                            <i class="fa fa-instagram"></i>
                                        </a>
                                        <a href="#">
                                            <i class="fa fa-linkedin"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div class="col-md-2 col-sm-6">
                        <div class="footer-widget-area">
                            <h3>Quick Link</h3>     
                            <ul class="footer-useful-links">
                                <li>
                                    <a href="#">
                                        <i class="fa fa fa-long-arrow-right fa-footer"></i>
                                        Urgent Causes
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa fa-long-arrow-right fa-footer"></i>
                                        Featured Causes
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa fa-long-arrow-right fa-footer"></i>
                                        Recent Events
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-long-arrow-right fa-footer"></i>
                                        About Us
                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                        <i class="fa fa-long-arrow-right fa-footer"></i>
                                        Latest News
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-long-arrow-right fa-footer"></i>
                                        Our Services
                                    </a>
                                </li>
                            </ul>  

                        </div> 
                    </div>
                    <div class="col-md-4 col-sm-5">
                        <div class="footer-widget-area">
                            <h3>Organaization Info</h3>
                            <div class="contact-info divider-line">
                                <div class="contact-heading"><i class="fa fa-location-arrow"></i></div>
                                <div class="contact-details">
                                    Boranada Industrial Area, Jodhpur, Rajasthan, India
                                </div>
                            </div>
                            <div class="contact-info divider-line">
                                <div class="contact-heading"><i class="fa fa-phone"></i></div>
                                <div class="contact-details">
                                    (+91)9929-129-108
                                </div>
                            </div>
                            <div class="contact-info divider-line">
                                <div class="contact-heading"><i class="fa fa-envelope-o"></i></div>
                                <div class="contact-details color-primary">
                                    <a href="mailto:info@mahadevskill.com">info@mahadevskill.com</a>
                                </div>
                            </div>
                            <div class="contact-info">
                                <div class="contact-heading"><i class="fa fa-globe"></i></div>
                                <div class="contact-details color-primary">
                                    <a href="www.mahadevskill.com">www.mahadevskill.com</a>
                                </div>
                            </div>
                        </div> 
                    </div> 
                </div>                  
            </div> 
        </section> 

        {/* <!--FOOTER CONTENT  --> */}

        <section class="footer-section">
            <div class="container">
                <div class="row text-center">
                    <div class="col-md-12 col-sm-12">
                        <div class="footer-nav">
                            <nav>
                                <ul>
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li>
                                        <a href="causes.html">Cources</a>
                                    </li>
                                    <li>
                                        <a href="teams.html">Our Teams</a>
                                    </li>
                                    <li>
                                        <a href="about-us.html">About</a>
                                    </li>
                                    <li>
                                        <a href="contact.html">Contact</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div class="col-md-12 col-sm-12">
                        <span>
                            Copyright © 2023. All right reserved by
                            <a class="color-primary" href="http://mahadevskill.com">mahadevskill.com</a>
                        </span>
                    </div> 				
                </div> 
            </div> 
        </section>  
    </footer>
    )
}


export default  Footer