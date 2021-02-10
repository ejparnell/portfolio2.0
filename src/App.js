import "./App.css";
import { name, title, subtitle, profileImage } from "./constants";
import ProfileImage from "./components/ProfileImage";
import NamePlate from "./components/NamePlate";
import FindMe from "./components/FindMe";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <div className="landing-content" id="homepage">
        <ProfileImage profileImage={profileImage} />
        <NamePlate title={title} subtitle={subtitle} />
      </div>
      <FindMe />
      <Skills />
    </div>
  );
}

export default App;
