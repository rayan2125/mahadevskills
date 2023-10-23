import React from "react";
import PageHeading from "../Component/PageHeading/PageHeading";
import BlogList from "../Component/BlogList/Bloglist";
import StaSection from "../Component/StaSection/Stasection";
import Company from "../Component/Company/Company";


const Blog = () => {

    return (
        <>

            <PageHeading title={"Blag List"} />
            <BlogList />
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

export default Blog