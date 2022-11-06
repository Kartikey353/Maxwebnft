import Navbar from '../Components/Navbar'
import Homemaincomponent from '../Components/Homemaincomponent';
import Trnding from '../Components/Trnding';
import Topcollection from '../Components/Topcollection';
import Createnft from '../Components/Createnft'; 
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <>
            <div className="container">
                <div className="md:w-[90vw] mx-auto">
                    <Navbar />
                    <Homemaincomponent/> 
                    <Trnding/> 
                    <Topcollection/>  
                    <Createnft/> 
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default Home