import React from "react";

import './Contactus.css'
const Contactus = () => {
    const lat=28.7041;
    const lon=77.1025;
    return (
        <>

            <section class="section-google-map-block wow fadeInUp">
                {/* <div id="map_canvas"> */}
              
                        <iframe src={`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`}  style={{border:"0"}} id="iframeId" height="500px" width="100%"></iframe>  
                    
                   
                {/* </div> */}
            </section>

            <section class="section-content-block-contact section-contact-block">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 wow fadeInLeft">
                            <div class="contact-form-block ">
                                <h2 class="contact-title">Say hello to us</h2>
                                <form action="#" method="post" id="contact-form">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="author" placeholder="Name" />
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-control" id="email" placeholder="Email" />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="url" placeholder="Subject" />
                                    </div>
                                    <div class="form-group">
                                        <textarea class="form-control" rows="5" name="comment" id="comment" placeholder="Message"></textarea>
                                    </div>
                                    <div class="form-group text-center">
                                        <button type="submit" class="btn btn-custom">Send Now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-sm-6 wow fadeInRight">
                            <div class="content-block" >
                                <h2 class="contact-title">Contact us</h2>
                                <ul class="contact-info p-0">
                                    <li>
                                        <span class="icon-container"><i class="fa fa-home"></i></span>
                                        <address>Boranada Industrial Area, Jodhpur, Rajasthan</address>
                                    </li>
                                    <li>
                                        <span class="icon-container"><i class="fa fa-phone"></i></span>
                                        <address><a href="#">+91-9929-129-108</a></address>
                                    </li>
                                    <li>
                                        <span class="icon-container"><i class="fa fa-envelope"></i></span>
                                        <address><a href="mailto:info@mahadevskill.com">info@mahadevskill.com</a></address>
                                    </li>
                                    <li>
                                        <span class="icon-container"><i class="fa fa-globe"></i></span>
                                        <address><a href="#">www.mahadevskill.com</a></address>
                                    </li>
                                </ul>
                                <h2 class="contact-title">We are social</h2>
                                <div class="social-icons margin-top-11 clearfix">
                                    <a title="Tweet It" href="#" class="btn btn-social-icon btn-twitter petition_share">
                                        <i class="fa fa-twitter"></i>
                                    </a>
                                    <a title="Share at Facebook" href="" class="btn btn-social-icon btn-facebook petition_share">
                                        <i class="fa fa-facebook"></i>
                                    </a>
                                    <a title="Share at Google+" href="" class="btn btn-social-icon btn-goggle-plus petition_share">
                                        <i class="fa fa-google-plus"></i>
                                    </a>
                                    <a title="Share at Pinterest" href="" class="btn btn-social-icon btn-pinterest petition_share">
                                        <i class="fa fa-pinterest"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )



}

export default Contactus