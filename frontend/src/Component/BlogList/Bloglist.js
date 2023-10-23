import React from "react";


const BlogList=()=>{

    return(

        <section class="section-content-block hightlight-block section-secondary-bg">
            <div class="container  wow fadeInUp animated"  style={{visibility:"visible",animationName:"fadeInup"}}>
                <div class="row section-heading-wrapper">
                    <div class="col-md-8 col-md-offset-2 col-sm-12 text-center">
                        <h2 class="section-heading"><span>Our</span> Activities</h2>
                        <p class="section-subheading hidden-sm"></p>
                    </div>
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 margin-bottom-mob-30 p-3" >
                        <div class="event-wrapper-1 xs-margin">
                            {/* <!-- <div class="ce_event_date">Chhoges Pooniya</div> --> */}
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/ihf3ATE50Yo?si=i4O_2UEVMDCy051n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>
                            <div class="ce_event_des_wrap default_width">
                                <div class="ce_event_new_des">
                                    <h5><a href="#">Founder Interviews</a></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 margin-bottom-mob-30 p-3">
                        <div class="event-wrapper-1 xs-margin">
                            {/* <!-- <div class="ce_event_date">Chhoges Pooniya</div> --> */}
                            <iframe src="https://www.facebook.com/plugins/video.php?height=316&amp;href=https%3A%2F%2Fwww.facebook.com%2Fmahadevskilltraining%2Fvideos%2F662722212235024%2F&amp;show_text=false&amp;width=560&amp;t=0" width="560" height="316" style={{border:"none",overflow:"hidden" }}scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                            <div class="ce_event_des_wrap default_width">
                                <div class="ce_event_new_des">
                                    <h5><a href="#">Founder Message</a></h5>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 margin-bottom-mob-30 p-3">
                        <div class="event-wrapper-1 xs-margin">
                            {/* <!-- <div class="ce_event_date">Chhoges Pooniya</div> --> */}
                            <iframe src="https://www.facebook.com/plugins/video.php?height=476&amp;href=https%3A%2F%2Fwww.facebook.com%2Fmahadevskilltraining%2Fvideos%2F808573270999309%2F&amp;show_text=false&amp;width=267&amp;t=0" width="267" height="476" style={{border:"none",overflow:"hidden" }} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                            <div class="ce_event_des_wrap default_width">
                                <div class="ce_event_new_des">
                                    <h5><a href="#">First Placement</a></h5>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>         
            </div>
        </div></section>

    )
}

export default BlogList