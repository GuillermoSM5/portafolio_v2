import { AiFillSun } from "react-icons/ai";

const Header = () => {
    return (<div className="border-b border-border">
        <div className=" m-auto container p-7 flex justify-between">
            <p className="font-extrabold text-xl font-mont">
                Guillermo Soto
            </p>
            <div className="flex items-center p-2 rounded-xl hover:text-(--color-background) hover:bg-(--primary-color)   cursor-pointer">
                <AiFillSun className="text-xl" />
            </div>
        </div>
    </div>);
}

export default Header;