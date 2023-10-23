import React,{useEffect,useState} from "react";
import Api from "../../services/api";

const CourcesList=()=>{
    const apictrl = new Api
    const [coursedata, setCoursedata] = useState([])
    useEffect(() => {
        apictrl.callAxios("course/list", { "pageLength": "10", "search": "" }).then(res => {

           
            if (res.success == true) {
              //   console.log("rescertificatedata=>",res)
                const { aadata } = res.data

                setCoursedata(old => ([...aadata]))

            }
         

        })
    }, [])
    return(
        <section class="section-content-block section-secondary-bg">
        <div class="container wow fadeInUp">

            <div className="row">
                 {coursedata.length>0 && coursedata.map((item)=>{
                    return(
                        <div class="col-md-6 col-sm-6">
                    <div class="cause-wrapper xs-margin">
                        <div class="col-sm-12 no-padding">
                            <figure class="cause-img">
                                <img style={{width:"556px",height:"228px"}} src={item.image ?`http://localhost:8000/upload/${item.image}` : ""} alt={item.course_name?item.course_name:""} />
                            </figure> 
                        </div> 
                        <div class="col-sm-12 no-padding">
                            <div class="cause-content">
                                <div class="cause-text">
                                    <h5><a href="#">{item.course_name?item.course_name:""}</a></h5>
                                  <p>{item.about_course?item.about_course:""}</p>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                    )
                 })}

            </div>
            {/* <div class="row"> 
                <div class="col-md-6 col-sm-6">
                    <div class="cause-wrapper xs-margin">
                        <div class="col-sm-12 no-padding">
                            <figure class="cause-img">
                                <img src="https://mahadevskill.com/images/cause_1.jpg" alt="Cause" />
                            </figure> 
                        </div> 
                        <div class="col-sm-12 no-padding">
                            <div class="cause-content">
                                <div class="cause-text">
                                    <h5><a href="#">Business with Training</a></h5>
                                    <p>Pellentesque habitant dolor ipsum Quisque imperdiet imperdiet.Emit venenatis quam pulvinar porta sem dolor sed emitvoltam</p>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-6">
                    <div class="cause-wrapper xs-margin">
                        <div class="col-sm-12 no-padding">
                            <figure class="cause-img">
                                <img src="https://mahadevskill.com/images/cause_1.jpg" alt="Cause" />
                            </figure> 
                        </div> 
                        <div class="col-sm-12 no-padding">
                            <div class="cause-content">
                                <div class="cause-text">
                                    <h5><a href="#">Investment in Business</a></h5>
                                    <p>Pellentesque habitant dolor ipsum Quisque imperdiet imperdiet.Emit venenatis quam pulvinar porta sem dolor sed emitvoltam</p>
                                </div> 
                            </div> 
                        </div> 
                    </div>
                </div>					
            </div> 
            <div class="row">
                <div class="col-md-6 col-sm-6">
                    <div class="cause-wrapper xs-margin">
                        <div class="col-sm-12 no-padding">
                            <figure class="cause-img">
                                <img src="https://mahadevskill.com/images/cause_1.jpg" alt="Cause" />
                            </figure> 
                        </div> 
                        <div class="col-sm-12 no-padding">
                            <div class="cause-content">
                                <div class="cause-text">
                                    <h5><a href="#">Industrial Training</a></h5>
                                    <p>Pellentesque habitant dolor ipsum Quisque imperdiet imperdiet.Emit venenatis quam pulvinar porta sem dolor sed emitvoltam</p>
                                </div> 
                            </div>
                        </div> 
                    </div>	
                </div>
                <div class="col-md-6 col-sm-6">
                    <div class="cause-wrapper xs-margin">
                        <div class="col-sm-12 no-padding">
                            <figure class="cause-img">
                                <img src="https://mahadevskill.com/images/cause_1.jpg" alt="Cause" />
                            </figure> 
                        </div> 
                        <div class="col-sm-12 no-padding">
                            <div class="cause-content">
                                <div class="cause-text">
                                    <h5><a href="#">Fundraising For Hungry People</a></h5>
                                    <p>Pellentesque habitant dolor ipsum Quisque imperdiet imperdiet.Emit venenatis quam pulvinar porta sem dolor sed emitvoltam</p>
                                </div> 
                            </div> 
                        </div> 
                    </div>	
                </div>					
            </div>  */}
        </div> 
    </section> 
    )
}

export default CourcesList