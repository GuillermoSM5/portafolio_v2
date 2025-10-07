import Image from "next/image";
import Presentation from "./components/Presentation";
import { AboutMe } from "./components/AboutMe";
import { Portfolio } from "./components/portafolio";
import { Skills } from "./components/skills";
import { Experience } from "./components/experience";
import { Contact } from "./components/contact";

export default function Home() {
  return (
    <div className="font-sans grid items-center justify-items-center">

      <Presentation />
      <AboutMe />
      <Portfolio />
      <Skills />
      <Experience />
      <Contact />

    </div>
  );
}
