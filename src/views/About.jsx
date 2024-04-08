import AboutIntro from "../components/AboutIntro";
import AboutTeaching from "../components/AboutTeaching";
import AboutAwards from "../components/AboutAwards";
import "./About.css"

function About() {
  return (
    <>
      <div className="aboutContainer">
        <AboutIntro />
        <AboutTeaching />
        <AboutAwards />
      </div>
    </>
  )
}

export default About;