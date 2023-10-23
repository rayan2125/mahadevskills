import React,{useEffect,useState} from "react";
import './Team.css'
import Api from "../../services/api";

const Team = () => {
    const apictrl = new Api
    const [teamdata, setTeamdata] = useState([])
    useEffect(() => {
        apictrl.callAxios("team/list", { "pageLength": "10", "search": "" }).then(res => {
            console.log("res=>", res)
            if (res.success == true) {
                // console.log("res=>///")
                const { aadata } = res.data

                setTeamdata(old => ([...aadata]))

            }

        })
    }, [])
    return (
        <section class="section-content-block-team section-gallery-block">
            <div class="container">

                <div class="row section-heading-wrapper">
                    <div class="col-md-8 col-md-offset-2 col-sm-12 text-center">
                        <h2 class="section-heading"><span>Our</span> Teams</h2>
                        {/* <!-- <p class="section-subheading">
                            Increase in the awareness among people about various issues 
                        </p> --> */}
                    </div>
                </div>
                <div class="row">
                    {teamdata.length > 0 && teamdata.map((item) => {
                        return(
                        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 margin-bottom-mob-30">
                            <div class="event-wrapper-1 xs-margin">
                                <img src={item.image ? `http://localhost:8000/upload/${item.image}` : ""}
                                    alt={item.name ? item.name : ""}
                                 />

                                <div class="ce_event_des_wrap default_width">
                                    <div class="ce_event_new_des">
                                        <h5><a href="#">{item.name}, {item.designation}, {`(${item.address})`}</a></h5>

                                    </div>
                                </div>
                            </div>
                        </div>
                        )

                    })}



























                    {/* Static code of teams */}



                    {/* <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 margin-bottom-mob-30">
                        <div class="event-wrapper-1 xs-margin">
                            <img src="https://mahadevskill.com/images/Coordinators/Chhogesh.webp" alt="" />

                            <div class="ce_event_des_wrap default_width">
                                <div class="ce_event_new_des">
                                    <h5><a href="#">Chhogaram, Founder, (UAE)</a></h5>

                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 margin-bottom-mob-30">
                        <div class="event-wrapper-1 xs-margin">
                            <img src="https://mahadevskill.com/images/Coordinators/Chhogesh.webp" alt=""/>
                           
                            <div class="ce_event_des_wrap default_width">
                                <div class="ce_event_new_des">
                                    <h5><a href="#">Pitharam, International Business Coordinator (UAE)</a></h5>
                                   
                                </div>
                            </div>
                        </div> 
                    </div> 
                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div class="event-wrapper-1 xs-margin">
                            <img src="https://mahadevskill.com/images/Coordinators/pitharam.webp" alt=""/>
                            <div class="ce_event_des_wrap default_width">
                                <div class="ce_event_new_des">
                                    <h5><a href="#">Dayaram, Co-Ordinator, Barmer</a></h5>
                                   
                                </div>
                            </div>
                        </div> 
                    </div> */}
                </div>
                {/* <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 margin-bottom-mob-30">
                        <div class="event-wrapper-1 xs-margin">
                            <img src="https://mahadevskill.com/images/Coordinators/Dayaram.webp" alt=""/>
                             <div class="ce_event_des_wrap default_width">
                                <div class="ce_event_new_des">
                                    <h5><a href="#">RK Bishnoi, Internation Co-Ordinator, Dehli</a></h5>
                                  
                                </div>
                            </div>
                        </div> 
                    </div> 
                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div class="event-wrapper-1 xs-margin">
                            <img src="https://mahadevskill.com/images/Coordinators/pitharam.webp" alt=""/>
                            <div class="ce_event_des_wrap default_width">
                                <div class="ce_event_new_des">
                                    <h5><a href="#">Vagaram, Co-Ordinator, Jodhpur</a></h5>
                                  
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div class="event-wrapper-1 xs-margin">
                            <img src="https://mahadevskill.com/images/Coordinators/pitharam.webp" alt=""/>
                            <div class="ce_event_des_wrap default_width">
                                <div class="ce_event_new_des">
                                    <h5><a href="#">Naresh Kumar, Co-Ordinator, Ahmedabad</a></h5>
                                    
                                </div>
                            </div>
                        </div> 
                    </div> 
                </div> 
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 margin-bottom-mob-30">
                        <div class="event-wrapper-1 xs-margin">
                            <img src="https://mahadevskill.com/images/Coordinators/pitharam.webp" alt=""/>
                            <div class="ce_event_des_wrap default_width">
                                <div class="ce_event_new_des">
                                    <h5><a href="#">Ved Prakash Godara, Co-ordinator (Technology), Mumbai</a></h5>
                                    
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div class="event-wrapper-1 xs-margin">
                            <img src="https://mahadevskill.com/images/Coordinators/Dayaram.webp" alt=""/>
                            <div class="ce_event_des_wrap default_width">
                                <div class="ce_event_new_des">
                                    <h5><a href="#">Laduram, Co-ordinator (Karnol, Andra Pradesh)</a></h5>
                                   
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div class="event-wrapper-1 xs-margin">
                            <img src="https://mahadevskill.com/images/Coordinators/pitharam.webp" alt=""/>
                            <div class="ce_event_des_wrap default_width">
                                <div class="ce_event_new_des">
                                    <h5><a href="#">Balaram, Co-ordinator (UAE)</a></h5>
                                    
                                </div>
                            </div>
                        </div> 
                    </div> 
                </div>  */}
            </div>
        </section>
    )
}


export default Team