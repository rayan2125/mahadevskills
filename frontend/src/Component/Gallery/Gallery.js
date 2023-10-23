import React, { useEffect } from "react";

import './Gallery.css'



const Gallery=()=>{
    useEffect(()=>{
        const element = document.querySelector('.gallery-light-box')
        if ( element.length ) {
            
            element.venobox();
            
        }
    
    },[])
    return(
        <section class="section-content-block-gallery no-bottom-padding">
            <div class="container">
                <div class="row section-heading-wrapper">
                    <div class="col-md-8 col-md-offset-2 col-sm-12 text-center">
                        <h2 class="section-heading"><span>Training</span> in Center</h2>
                        <p class="section-subheading">
                            Increase in the awareness among people about various issues 
                        </p>
                    </div> 
                </div>
            </div> 
            <div class="container-fluid wow fadeInUp">
                <div class="row no-padding-gallery">
                    <div class="col-md-3 col-sm-12 gallery-container">
                        <a class="gallery-light-box" data-gall="myGallery" href="images/training/traning_1.JPG">
                            <figure class="gallery-img">
                                <img src="https://mahadevskill.com/images/training/traning_1.JPG" alt="gallery image" />
                            </figure>
                        </a> 
                    </div>
                    <div class="col-md-3 col-sm-12 gallery-container">
                        <a class="gallery-light-box"  data-gall="myGallery" href="images/training/traning_2.JPG">
                            <figure class="gallery-img">
                                <img src="https://mahadevskill.com/images/training/traning_2.JPG" alt="gallery image" />
                            </figure> 
                        </a>
                    </div>
                    <div class="col-md-3 col-sm-12 gallery-container">
                        <a class="gallery-light-box"  data-gall="myGallery" href="images/training/traning_3.JPG">
                            <figure class="gallery-img">
                                <img src="https://mahadevskill.com/images/training/traning_3.JPG" alt="gallery image" />
                            </figure> 
                        </a>
                    </div>
                    <div class="col-md-3 col-sm-12 gallery-container">
                        <a class="gallery-light-box"  data-gall="myGallery" href="images/training/traning_4.jpg">
                            <figure class="gallery-img">
                                <img src="https://mahadevskill.com/images/training/traninig_6.JPG" alt="gallery image" />
                            </figure> 
                        </a>
                    </div>
                </div> 
                <div class="row no-padding-gallery">
                    <div class="col-md-3 col-sm-12 gallery-container">
                        <a class="gallery-light-box"  data-gall="myGallery" href="images/training/traning_5.jpg">
                            <figure class="gallery-img">
                                <img src="https://mahadevskill.com/images/training/traninig_6.JPG" alt="gallery image" />
                            </figure> 
                        </a>
                    </div>
                    <div class="col-md-3 col-sm-12 gallery-container">
                        <a class="gallery-light-box" data-gall="myGallery" href="images/training/traninig_6.JPG">
                            <figure class="gallery-img">
                                <img src="https://mahadevskill.com/images/training/traninig_6.JPG" alt="gallery image" />
                            </figure> 
                        </a> 
                    </div>
                    <div class="col-md-3 col-sm-12 gallery-container">
                        <a class="gallery-light-box"  data-gall="myGallery" href="images/training/traninig_7.jpg">
                            <figure class="gallery-img">
                                <img src="https://mahadevskill.com/images/training/traninig_6.JPG" alt="gallery image" />
                            </figure> 
                        </a>
                    </div>
                    <div class="col-md-3 col-sm-12 gallery-container">
                        <a class="gallery-light-box" data-gall="myGallery" href="images/training/traninig_7.jpg">
                            <figure class="gallery-img">
                                <img src="https://mahadevskill.com/images/training/traninig_6.JPG" alt="gallery image" />
                            </figure> 
                        </a> 
                    </div>
                </div> 
            </div>
        </section>
    )
}

export default Gallery