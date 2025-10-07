import { AiFillSun } from "react-icons/ai";

const navItems = [
    { href: "#about", label: "About" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
]


const Header = () => {
    return (<div className="border-b border-border bg-background/80 fixed top-0 w-full backdrop-blur-sm z-50">
        <div className=" m-auto container px-5 py-3 flex justify-between">
            <p className="font-extrabold text-xl font-mont flex items-center">
                Guillermo Soto
            </p>
            <div className="hidden md:flex items-center space-x-8">
                {
                    navItems.map((item) => <a
                        key={item.href}
                        href={item.href}
                        className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                        {item.label}
                    </a>)
                }
            </div>
            <div className="flex items-center p-3 rounded-xl hover:text-(--color-background) hover:bg-(--primary-color)   cursor-pointer">
                <AiFillSun className="text-lg" />
            </div>
        </div>
    </div>);
}

export default Header;