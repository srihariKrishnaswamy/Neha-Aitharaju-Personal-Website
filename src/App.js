import Navsection from "./components/navsection/Navsection";
import Mainsection from "./components/mainsection/Mainsection";
import Aboutsection from "./components/aboutsection/Aboutsection"; 
import Experiencesection from "./components/experiencesection/Experiencesection";
import Projectsection from "./components/projectsection/Projectsection";
import Skillsection from "./components/skillsection/Skillsection";
import Resumesection from "./components/resumesection/Resumesection";
import Contactsection from "./components/contactsection/Contactsection";
import Chatbotframe from "./components/chatbotframe/Chatbotframe";
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.App}>
      <div className={classes.backgroundimage}>
        <Navsection/>
        <div className={classes.content}>
          <Chatbotframe />
          <Mainsection/>
          <Aboutsection/>
          <Experiencesection/>
          <Projectsection />
          <Skillsection />
          <Resumesection />
          <Contactsection /> 
        </div>
      </div>
    </div>
  );
}

export default App;