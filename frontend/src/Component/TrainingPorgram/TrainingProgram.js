import React, { useEffect, useState } from "react";
import './Trainingprogram.css'
import Api from "../../services/api";
const Trainingprogram = () => {
    const apictrl = new Api
    const [trainingdata, setTrainingdata] = useState([])
    useEffect(() => {
        apictrl.callAxios("training/list", { "pageLength": "10", "search": "" }).then(res => {


            if (res.success == true) {
                //   console.log("rescertificatedata=>",res)
                const { aadata } = res.data

                setTrainingdata(old => ([...aadata]))

            }


        })
    }, [])

    return (
        <section class="section-content-blockk event-section">
            <div class="container wow fadeInUp">
                <div class="row section-heading-wrapper">
                    <div class="col-md-8 col-md-offset-2 col-sm-12 text-center">
                        <h2 class="section-heading"><span>Training</span> Program</h2>
                        <p class="section-subheading">

                        </p>
                    </div>
                </div>
                <div className="row">
                    {trainingdata.length > 0 && trainingdata.map((item) => {
                        return (
                            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 margin-bottom-mob-30">
                                <div class="event-wrapper-1 xs-margin">
                                    <img src={item.image ? `http://localhost:8000/upload/${item.image}` : ""} alt={item.training_name ? item.training_name : ""} />
                                    <div class="ce_event_des_wrap default_width">
                                        <div class="ce_event_new_des">
                                            <h5><a href="#">{item.training_name ? item.training_name : ""}</a></h5>
                                            <p>{item.about_training ? item.about_training : ""}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
                {/* <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 margin-bottom-mob-30">
                    <div class="event-wrapper-1 xs-margin">
                        <img src="https://mahadevskill.com/images/carpantory.JPG" alt=""/>
                        <div class="ce_event_des_wrap default_width">
                            <div class="ce_event_new_des">
                                <h5><a href="#">Manfacture Training</a></h5>
                                <p>Quisque imperdiet porta imperdiet. Nam venenatis pulvinar quam, et vulputate libero mattis in ante.</p>
                            </div>
                        </div>
                    </div> 
                </div> 
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 margin-bottom-mob-30">
                    <div class="event-wrapper-1 xs-margin">
                        <img src="https://mahadevskill.com/images/glasswork.JPG" alt=""/>
                        <div class="ce_event_des_wrap default_width">
                            <div class="ce_event_new_des">
                                <h5><a href="#">carpentry Training</a></h5>
                                <p>Quisque imperdiet porta imperdiet. Nam venenatis pulvinar quam, et vulputate libero mattis in ante.</p>
                            </div>
                        </div>
                    </div> 
                </div> 
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div class="event-wrapper-1 xs-margin">
                        <img src="https://mahadevskill.com/images/carpantory.JPG" alt=""/>
                        <div class="ce_event_des_wrap default_width">
                            <div class="ce_event_new_des">
                                <h5><a href="#">Glass Cutting & Bending</a></h5>
                                <p>Quisque imperdiet porta imperdiet. Nam venenatis pulvinar quam, et vulputate libero mattis in ante.</p>
                            </div>
                        </div>
                    </div> 
                </div> 
            </div>  */}
                {/* <div class="row">
                <div class="col-sm-12 col-md-4 col-md-offset-4 text-center">
                    <a href="#" class="btn btn-load-more">- Load All Events -</a>
                </div>
            </div>  */}
            </div>
        </section>
    )
}


export default Trainingprogram