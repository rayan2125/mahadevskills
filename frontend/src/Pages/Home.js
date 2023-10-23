import React from "react";
import Slider from "../Component/Slider/Slider";
import StaSection from "../Component/StaSection/Stasection";
import OurProgram from "../Component/OurProgram/OurProgram";
import OurMoto from "../Component/OurMoto/OurMoto";
import Trainingprogram from "../Component/TrainingPorgram/TrainingProgram";
import Blessing from "../Component/Blessing/Blessing";
import SomeFacts from "../Component/SomeFacts/SomeFacts";
import Gallery from "../Component/Gallery/Gallery";
import Company from "../Component/Company/Company";


const Home = () => {
    return (
        <>
            {/* // <h4>Home Page</h4> */}
            <Slider />
            <StaSection 
                title={"We are helping unskilled people"}
                text={"Provide training and Job in various industries"}
                btntext={"Registration"}
                color={"#77C720"}
            />
            <OurProgram title={"Our Program"}/>
            <OurMoto/>
            <Trainingprogram/>
            <Blessing/>
            <SomeFacts/>
            <Gallery/>
            <Company/>

        </>


    )
}

export default Home