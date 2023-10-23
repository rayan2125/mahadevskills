import React from "react";
import PageHeading from "../Component/PageHeading/PageHeading";
import OurProgram from "../Component/OurProgram/OurProgram";
import Team from "../Component/Team/Team";
import StaSection from "../Component/StaSection/Stasection";
import Company from "../Component/Company/Company";
const Aboutus = () => {
    return (
        <>

            <PageHeading  title={"About Us"}/>
            <OurProgram title={"Our Team"} />
            <Team />
            <StaSection
                title={"We are helping people from 40 years"}
                text={"Become a part of us by helping a little amount"}
                btntext={"BECOME VOLUNTEER"}
                color={"#FFBB44"}
            />
            <Company />
        </>

    )
}

export default Aboutus