import Navbar from './components/Navbar/Navbar';
import './App.css';
import Profile from './components/profile/Profile';
import Contactme from './components/Contactme/Contactme';
import Fotter from './components/Fotter/Footer';
import Projects from './components/Project/Projects';
import About from './components/profile/About';
import { GitHubCalendaar } from "./components/gitcalender/Gitcalender";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Profile/>
      <About/>
     <Projects/>
     <GitHubCalendaar/>
     <Contactme/>
      <Fotter/>
    </div>
  );
}

export default App;
