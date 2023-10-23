import React from "react";
import PageHeading from "../Component/PageHeading/PageHeading";
import Team from "../Component/Team/Team";
import Company from "../Component/Company/Company";
import StaSection from "../Component/StaSection/Stasection";


const OurTeam = () => {
    return (
        <>
            <PageHeading title={"Our Team"} />
            <Team />
            <StaSection 
                title={"We are helping unskilled people"}
                text={"Provide training and Job in various industries"}
                btntext={"Registration"}
                color={"#FFBB44"}
            />
            <Company/>

        </>

    )
}

export default OurTeam