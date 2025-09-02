import ButtonGsm from "./ButtonGsm";

const Presentation = () => {
    return (

        <div className="container min-h-[calc(100vh-100px)] grid items-center justify-items-center">
            <div className="font-mont text-6xl font-black  text-center ">
                <p>Front-End</p>
                <p>Developer</p>
                <div className="text-2xl font-medium w-[80%] m-auto pt-4">
                    <p>Crafting modern, responsive web applications with React, Next.js, and cutting-edge technologies</p>
                </div>
                <div>
                    <ButtonGsm />
                </div>
            </div>
        </div>
    );
}

export default Presentation;