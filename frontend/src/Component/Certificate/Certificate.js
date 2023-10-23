import React,{useEffect,useState} from "react";
import Api from "../../services/api";

const Certificatelist = () => {
    const apictrl = new Api
    const [certificatedata, setCertificatedatadata] = useState([])
    useEffect(() => {
        apictrl.callAxios("certificate/list", { "pageLength": "10", "search": "" }).then(res => {

           
            if (res.success == true) {
              //   console.log("rescertificatedata=>",res)
                const { aadata } = res.data

                setCertificatedatadata(old => ([...aadata]))

            }
         

        })
    }, [])
   // console.log("certificatedata=>",certificatedata)

    return (
        <section class="section-content-block hightlight-block section-secondary-bg">
            <div class="container  wow fadeInUp animated" style={{ visibility: "visible", animationName: "fadeInup" }}>
                <div class="row section-heading-wrapper">
                    <div class="col-md-8 col-md-offset-2 col-sm-12 text-center">
                        <h2 class="section-heading"><span>Our</span> Certificates</h2>
                        <p class="section-subheading hidden-sm"></p>
                    </div>



                    <div class="row">
                        {certificatedata.length>0 && certificatedata.map((item)=>{
                            
                           return(
                            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 margin-bottom-mob-30">
                                <div class="event-wrapper-1 xs-margin">

                                    <img style={{width:"234",height:"341px"}}src={item.image ? `http://localhost:8000/upload/${item.image}` : ""} alt={item.title?item.title:""} />
                                    <div class="ce_event_des_wrap default_width">
                                        <div class="ce_event_new_des">
                                            <h5><a href="#">{item.title?item.title:""}</a></h5>
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

                                <img src="https://mahadevskill.com/images/NitiAyog.jpeg" alt="" />
                                <div class="ce_event_des_wrap default_width">
                                    <div class="ce_event_new_des">
                                        <h5><a href="#">Niti Aayog (BHARAT)</a></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 margin-bottom-mob-30">
                            <div class="event-wrapper-1 xs-margin">

                                <img src="https://mahadevskill.com/images/Mahadev%20skill%20frame.jpg" alt="" />
                                <div class="ce_event_des_wrap default_width">
                                    <div class="ce_event_new_des">
                                        <h5><a href="#"></a></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 margin-bottom-mob-30">
                            <div class="event-wrapper-1 xs-margin">

                                <img src="https://mahadevskill.com/images/Vision.jpeg" alt="" />
                                <div class="ce_event_des_wrap default_width">
                                    <div class="ce_event_new_des">
                                        <h5><a href="#">Our VISION</a></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 margin-bottom-mob-30">
                            <div class="event-wrapper-1 xs-margin">

                                <img src="https://mahadevskill.com/images/network.jpeg" alt="" />
                                <div class="ce_event_des_wrap default_width">
                                    <div class="ce_event_new_des">
                                        <h5><a href="#">Our Network</a></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>

    )
}

export default Certificatelist