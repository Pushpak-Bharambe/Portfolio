import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { About } from "./About";
import { Skills } from "./Skills";
import { Resume } from "./Resume";
import { Certificate } from "./Certificate";
import { Contact } from "./Contact";

export const App = () => {
  return (
    <>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="resume">
        <Resume />
      </div>
      <div id="certificate">
        <Certificate />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </>
  );
};
