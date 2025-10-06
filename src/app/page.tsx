import Image from "next/image";
import Presentation from "./components/Presentation";
import { AboutMe } from "./components/AboutMe";

export default function Home() {
  return (
    <div className="font-sans grid items-center justify-items-center">

      <Presentation />
      <AboutMe />

    </div>
  );
}
