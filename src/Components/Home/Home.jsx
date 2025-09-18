import DonationInfo from "./DonationInfo/DonationInfo"
import Header from "../Header/Header"
import Hero from "./Hero/Hero"
import CallToAction from "./HeroSection/CallToAction/CallToAction"
import HeroSection from "./HeroSection/HeroSection"
import OngoingDonations from "./OngoingDonations/OngoingDonations"
import Stats from "./Stats/Stats"
import Testimonials from "./TestiMonials/Testimonials"
import ValuesSection from "./ValuesSection/ValuesSection"
import Footer from "../Footer/Footer"

const Home = () => {


    return(

        <>
            <Header/>
            <HeroSection/>
            <DonationInfo/>
            <OngoingDonations/>
            <ValuesSection/>
            <Hero/>
            <Stats/>
            <Testimonials/>
            <CallToAction/>
            <Footer/>
        </>
    )

}

export default Home