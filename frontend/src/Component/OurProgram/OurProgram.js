import React from "react";
import './OurProgram.css'
const OurProgram = ({title}) => {
    return (

        <section class="section-content-block hightlight-block section-secondary-bg">
            <div class="container wow fadeInUp">
                <div class="row section-heading-wrapper">
                    <div class="col-md-8 col-md-offset-2 col-sm-12 text-center">
                        {/* <h2 class="section-heading"><span>Our</span> Programs</h2> */}
                        <h2 class="section-heading">{title}</h2>
                        <p class="section-subheading hidden-sm">
                            Provide training to unemployeed in various sectors.
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 margin-bottom-mob-50">
                        <div class="highlight-1 xs-margin">
                            <i class="fa fa-leaf" aria-hidden="true"></i>
                            <h5>Skill Development</h5>
                            <p>Quisque imperdiet porta imperdiet. Nam venenatis quam pulvinar porta sem</p>
                            <a class="bg_1" href="#"> <i class="fa fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 margin-bottom-mob-50">
                        <div class="highlight-1 xs-margin">
                            <i class="fa fa-line-chart" aria-hidden="true"></i>
                            <h5>Placement</h5>
                            <p>Quisque imperdiet porta imperdiet. Nam venenatis quam pulvinar porta sem</p>
                            <a class="bg_1" href="#"> <i class="fa fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div class="highlight-1 xs-margin">
                            <i class="fa fa-area-chart" aria-hidden="true"></i>
                            <h5>Help & Support</h5>
                            <p>Quisque imperdiet porta imperdiet. Nam venenatis quam pulvinar porta sem</p>
                            <a class="bg_1" href="#"> <i class="fa fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        
        </section >

    )
}

export default OurProgram