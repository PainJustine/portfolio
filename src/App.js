import "./App.css";
import Homepage from "./components/Homepage";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectsContainer from "./components/ProjectsContainer";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <ProjectsContainer />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
