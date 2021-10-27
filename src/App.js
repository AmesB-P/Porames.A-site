import "./App.css";
import AboutMe from "./contents/AboutMe";
import Home from "./contents/Home";
import Skill from "./contents/Skill";
import Education from "./contents/Education";
import Contacts from "./contents/Contacts";
import Footer from "./contents/Footer";
import Project from "./contents/Project";
import SimpleReactLightbox from "simple-react-lightbox";


function App() {
  return (
    
 
      <SimpleReactLightbox>
      <div>
        <Home/><AboutMe/><Skill/><Education/><Project/><Contacts/><Footer/>
      </div>
    </SimpleReactLightbox>

  );
}

export default App;
