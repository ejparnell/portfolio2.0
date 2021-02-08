import "./App.css";
import { name, title, subtitle, profileImage } from "./constants";
import ProfileImage from "./components/ProfileImage";
import NamePlate from "./components/NamePlate";
import FindMe from "./components/FindMe";

function App() {
  return (
    <div>
      <div className="landing-content">
        <ProfileImage profileImage={profileImage} />
        <NamePlate title={title} subtitle={subtitle} />
      </div>
      <FindMe />
    </div>
  );
}

export default App;
