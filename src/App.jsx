import Navbar from './components/Navbar'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import Numbers from './components/Numbers.jsx'
import Services from './components/Services.jsx'
import  WhyHogist  from './components/Whyhogist.jsx'
import Pricing from './components/Pricing.jsx'
import ClientSucess from "./components/ClientSucess.jsx"
import Testimonals from "./components/Testimonals.jsx"
import LocationsMap from './components/Locationsmap.jsx'
import Faq from "./components/Faq.jsx"
import Contacts from './components/Contacts.jsx'
import Footer from './components/Footer.jsx'
import Coverage from './components/Coverage'
// import ResponsiveLocationsMap from "./components/ResponsiveLocationsMap"

export default function App(){
    return(
        <div>
            <Navbar/>
            <Hero/>
            <Stats/>
            <Numbers/>
            <Services/>
            <WhyHogist/>
            <Pricing/>
            <ClientSucess/>
            <Testimonals/>
            <Coverage/>
            <LocationsMap/>
            <Faq/>
            <Contacts/>
            <Footer/>
            {/* <ResponsiveLocationsMap/> */}
            
        </div>
    )
}