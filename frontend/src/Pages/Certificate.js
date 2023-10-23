import React from "react";
import PageHeading from "../Component/PageHeading/PageHeading";
import Certificatelist from "../Component/Certificate/Certificate";
import StaSection from "../Component/StaSection/Stasection";
import Company from "../Component/Company/Company";
const Certificates=()=>{
    return(
        <>
            <PageHeading  title={"Certificate"}/>
            <Certificatelist/>
            <StaSection
                title={"We are helping people from 40 years"}
                text={"Become a part of us by helping a little amount"}
                btntext={"BECOME VOLUNTEER"}
                color={"#FFBB44"}
            />
            <Company/>
        </>
       
    )
}

export default Certificates