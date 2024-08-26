import AboutSection from "./Components/Aboutsection";
import Footer from "./Components/Footer";
import HeroSection from "./Components/Herosection";
import PhotoGallery from "./Components/PhotoGallery";
import ProcessSec from "./Components/ProcessSec";
import SubmitSection from "./Components/SubmitSection";
import TestimonialSec from "./Components/Testimonial/Testimonial";

function App() {
  return (
    <div>
      
      <HeroSection />
      <div className="py-[60px] seconddiv px-[150px]">
        <AboutSection />
        {/* <ProcessSec /> */}
        {/* <TestimonialSec /> */}
        <PhotoGallery />
        <SubmitSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
