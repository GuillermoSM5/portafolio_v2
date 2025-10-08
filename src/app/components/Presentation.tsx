import { AiOutlineArrowDown } from "react-icons/ai";
import ButtonGsm from "./ButtonGsm";

const Presentation = () => {
    return (

        <div className="container min-h-screen grid items-center justify-items-center">
            <div className="font-mont text-6xl font-black  text-center ">
                <p>Front-End</p>
                <p>Developer</p>
                <div className="text-2xl font-medium w-[80%] m-auto pt-4">
                    <p className="text-muted-foreground">Crafting modern, responsive web applications with React, Next.js, and cutting-edge technologies</p>
                </div>
                <div>
                    <ButtonGsm />
                </div>
                <div className="absolute  bottom-[6rem]  md:bottom-[12rem] left-1/2 transform -translate-x-1/2 animate-bounce">
                    <AiOutlineArrowDown className="h-6 w-6 text-muted-foreground" />
                </div>
            </div>
        </div>
    );
}

export default Presentation;