import React ,{useEffect,useState}from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Comapny.css'
import Api from "../../services/api";
const Company = () => {

    const apictrl=new Api
  const [companydata,setCompanydatadata]=useState([])
  useEffect(()=>{
   apictrl.callAxios("placement-companies/list",{ "pageLength":"10","search":""}).then(res=>{
    
    //console.log("res=>",res)
    if(res.success==true){
      // console.log("res=>///")
       const{aadata}=res.data

       setCompanydatadata(old=>([...aadata]))
      
    }
    
   })
  },[])
    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };



    // var settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    //   };
    return (
        <section class="section-content-block-company section-client-logo no-bottom-padding">
            <div class="container wow fadeInUp">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2 col-sm-12 text-center">
                        <h2 class="section-heading">Placement Companies</h2>
                        <p class="section-subheading">
                            Increase in the awareness among people about various issues
                        </p>
                    </div>
                </div>
                <div class="row mt-4">
                   
                    <Slider {...settings} >
                          
                            {companydata.length>0&&companydata.map(item=>
                            <div class="slider-img">
                                <img style={{height:"141px",width:"181px"}} src={item.image ?`http://localhost:8000/upload/${item.image}` : ""} alt="logo" />
                            </div>
                            )}

                       
                        
                           {/* <div class="slider-img">
                                <img src="https://mahadevskill.com/images/logo_1.png" alt="" />
                            </div>
                            <div class="slider-img">
                                <img src="https://mahadevskill.com/images/logo_3.png" alt="" />
                            </div>
                            <div class="slider-img">
                                <img src="https://mahadevskill.com/images/logo_4.png" alt="" />
                            </div>
                            <div class="slider-img">
                                <img src="https://mahadevskill.com/images/logo_5.png" alt="" />
                            </div>
                            <div class="slider-img">
                                <img src="https://mahadevskill.com/images/logo_4.png" alt="" />
                            </div> */}


                    </Slider>

                  

                </div>
            </div>
        </section>
    )
}

export default Company