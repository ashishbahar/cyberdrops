import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import MyNav from "./components/MyNav";
import Header from "./components/Header";
import OurMission from "./components/OurMission";
import Partners from "./components/Partners";
import OurAlgo from "./components/OurAlgo";
import Whatwe from "./components/Whatwe";
import Howitworks from "./components/Howitworks";
import MeetTheTeam from "./components/MeetTheTeam";
import FAQ from "./components/FAQ";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer";
import RoadMap from "./components/RoadMap";

function App() {
  return (
    <>
      <MyNav />
      <Header />
      <OurMission />
      <Partners />
      <OurAlgo />
      <Whatwe />
      <Howitworks />
      <MeetTheTeam />
      <RoadMap />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
