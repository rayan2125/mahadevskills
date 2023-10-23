import React from "react";

import './SomeFacts.css'
const SomeFacts=()=>{
    return(
        <section class="section-content-block section-counter">
        <div class="container">
            <div class="row section-heading-wrapper">
                <div class="col-md-12 col-sm-12 text-center">
                    <h2 class="section-heading section-heading-alt">Some Facts</h2>
                    <p class="section-subheading section-subheading-alt">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit curabitur eu ante non ex lobortis posuere volutpat nec orci morbi facilisis massa lectus volutpat posuere volutpat 
                    </p>
                </div>
            </div> 
            <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div class="counter-block-1 xs-margin">
                        <span class="counter">54</span>
                        <h4>Country <span>presences</span></h4>     
                    </div>
                </div> 
                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div class="counter-block-1 xs-margin">
                        <span class="counter">25</span>
                        <h4>Industry <span>Skills</span></h4>     
                    </div>
                </div> 
                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div class="counter-block-1 xs-margin">
                        <span class="counter">62</span>
                        <h4>Team <span>Co-ordinators </span></h4>     
                    </div>
                </div> 
                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div class="counter-block-1 xs-margin">
                        <span class="counter">1000</span>
                        <h4>Proposed <span>Placement</span> every year</h4>     
                    </div>
                </div> 
            </div> 
        </div> 
    </section>
    )
}

export default SomeFacts