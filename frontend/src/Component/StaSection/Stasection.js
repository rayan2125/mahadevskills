import React, { useEffect } from "react";

import './Stasection.css'
const StaSection = ({ title, text, btntext, color }) => {
    useEffect(() => {
        // document.getElementsByClassName(".cta-section .cta-section-1").style. = "blue";

        const element = document.querySelector('.cta-section .cta-section-1');
        element.style.backgroundColor = color;

        const btnelement = document.querySelector('.cta-section .cta-section-1 a.btn-cta3')
        btnelement.style.backgroundColor = color

    }, [])
    return (
        <section class="cta-section">
            <div class="cta-section-1">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-sm-12 text-left">
                            <h2>{title}</h2>
                            <p>{text}</p>
                        </div>
                        <div class="col-md-4 col-sm-12 text-right">
                            <a href="registration.php" class="btn btn-cta3">{btntext}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StaSection