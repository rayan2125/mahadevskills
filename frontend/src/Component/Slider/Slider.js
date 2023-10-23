import React, { useEffect, useState } from "react";
// import { Carousel } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import Api from "../../services/api";
// import './Slider.css'
const sliders = [
  {
    id: 1,
    image_name_1: "https://mahadevskill.com/images/home_slider_5.JPG",
    image_name_2: "https://mahadevskill.com/images/home_slider_5.JPG",
    text_1: "homeslider 1",
    text_2: "homeslider 2",
    link: "https://www.amazon.in/Safild-Sulphate-Free-Hair-Cleanser/dp/B0893T4GCQ/ref=sr_1_4?m=A2JE8YIUA7EXA0&marketplaceID=A21TJRUUN4KGV&qid=1666357693&s=merchant-items&sr=1-4",
    is_active: true
  },
  {
    id: 2,
    image_name_1: "https://mahadevskill.com/images/home_slider_5.JPG",
    image_name_2: "https://mahadevskill.com/images/home_slider_5.JPG",
    text_1: "homeslider 2",
    text_2: "homeslider 3",
    link: "https://www.amazon.in/Nersiol-Defenskin-Premium-Body-Oil/dp/B08F419KN8/ref=sr_1_5?crid=2894FYYBJI21I&keywords=Nersiol+DEFENSKIN+-+Premium+Body+Oil&qid=1666357167&qu=eyJxc2MiOiIwLjY0IiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&sprefix=nersiol+defenskin+-+premium+body+oil%2Caps%2C248&sr=8-5",
    is_active: true
  },
  {
    id: 3,
    image_name_1: "https://mahadevskill.com/images/home_slider_5.JPG",
    image_name_2: "https://mahadevskill.com/images/home_slider_5.JPG",
    text_1: "homeslider 3",
    text_2: "homeslider 3",
    link: "https://www.amazon.in/Safild-Sulphate-Free-Irritant-Facial/dp/B0893S2696/ref=sr_1_6?crid=1B73QQ6XH0P99&keywords=safild+non-irritant+facial+wash&qid=1666357600&qu=eyJxc2MiOiIwLjk3IiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&sprefix=safild+non-irritiant+facial+wash%2Caps%2C569&sr=8-6",
    is_active: true
  },
  {
    id: 4,
    image_name_1: "https://mahadevskill.com/images/home_slider_5.JPG",
    image_name_2: "https://mahadevskill.com/images/home_slider_5.JPG",
    text_1: "homeslider 1",
    text_2: "homeslider 1",
    link: "https://www.amazon.in/Nersiol-Sticky-Colour-Protection-Hair/dp/B0892WWB9L/ref=sr_1_1?m=A2JE8YIUA7EXA0&marketplaceID=A21TJRUUN4KGV&qid=1666357693&s=merchant-items&sr=1-1",
    is_active: true
  }
]

// import img1 from "../../../images/HomeSlider.jpg";
// import img2 from "../../../images/HomeSlider2.jpg";
// import img3 from "../../../images/HomeSlider3.jpg";
// import img4 from "../../../images/HomeSlider4.jpg";

const Slider = () => {
  const apictrl=new Api
  const [sliderdata,setSliderdata]=useState([])
  useEffect(()=>{
   apictrl.callAxios("slider/list",{ "pageLength":"10","search":""}).then(res=>{
    console.log("res=>",res)
    if(res.success==true){
      // console.log("res=>///")
       const{aadata}=res.data

       setSliderdata(old=>([...aadata]))
      
    }
    
   })
  },[])

  console.log("slidata",sliderdata)
  return (

    <Carousel >
      {sliderdata.length>0&&sliderdata.map((item, key) => (
        <Carousel.Item key={item.id + key + item.title}>
          <img
            className="d-block w-100 h-auto"
            src={item.image ?`http://localhost:8000/upload/${item.image}` : ""}
            alt={item.name ? item.name : ""}
          />
          {/* <img
            className="d-block w-100 h-auto"
            src={item.image_name_1 ? item.image_name_1 : item.image_name_2}
            alt={item.text_1 ? item.text_1 : item.text_2}
          /> */}


         
          {/* <div className="carousel-image-container">
            <img
              className="d-block w-100 h-auto"
              src={item.image_name_1 ? item.image_name_1 : item.image_name_2}
              alt={item.text_1 ? item.text_1 : item.text_2}
            />
            <div className="slider-content text-center">
              <div className="container">
                <h2>Every One Need Job</h2>
              </div>
            </div>
          </div> */}


        </Carousel.Item>
      ))}

    </Carousel>

  );
}

export default Slider;