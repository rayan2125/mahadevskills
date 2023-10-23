import React from "react";
import './PageHeading.css'

const PageHeading=({title})=>{
    return(
        <section class="page-header">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 text-center">
                    <h3>
                       {title}
                    </h3>
                    <p class="page-breadcrumb">
                        <a href="#">Home</a> / {title}
                    </p>
                </div>
            </div> 
        </div> 
    </section>
    )
}

export default PageHeading