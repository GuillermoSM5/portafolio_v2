'use client'

import { AiFillSun } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { Button } from "./button";
import { useState } from "react";


const navItems = [
    { href: "#about", label: "About" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
]


const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [theme, setTheme] = useState<string>("dark")



    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark"
        setTheme(newTheme)
        applyTheme(newTheme)
    }

    const applyTheme = (newTheme: string) => {
        document.documentElement.classList.toggle("dark", newTheme === "dark")

    }


    return (
        <div className="border-b border-border bg-background/80 fixed top-0 w-full backdrop-blur-sm z-50">
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
                <div className=" flex items-center">
                    <div className="flex items-center p-3 rounded-xl hover:text-(--color-background) hover:bg-(--primary-color)   cursor-pointer" onClick={toggleTheme}>
                        {

                            theme === 'light' ? <FaMoon className="text-lg" /> : <AiFillSun className="text-lg" />
                        }
                    </div>
                    <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <IoMdClose /> : <IoMdMenu />}
                    </Button>
                </div>
            </div>
            {isMenuOpen && (
                <nav className="md:hidden py-4 px-4 border-t border-border">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="block py-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
            )}
        </div>

    );
}

export default Header;