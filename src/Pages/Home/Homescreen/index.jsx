import AboutMe from "../AboutMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import Myportfolio from "../MyPortfolio";
import MySkills from "../MySkills";

export default function Home () {
    return(
        <>
                <HeroSection/>
                <AboutMe/>
                <MySkills/>
                <Myportfolio/>
                <Footer/>
        </>
    )
}