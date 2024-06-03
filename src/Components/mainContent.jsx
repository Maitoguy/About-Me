import Heading from "./Subcomponents/heading";
import Skills from "./Subcomponents/skills";
import Projects from "./Subcomponents/projects";
import Experience from "./Subcomponents/experience";
import Education from "./Subcomponents/education";
import Contact from "./Subcomponents/contactMe";


function Main() {
    return (
      <div className="main-content">
        < Heading/>
        < Skills/>
        < Projects/>
        < Experience/>
        < Education/>
        < Contact/>
      </div>
    );
  }
  
  export default Main;