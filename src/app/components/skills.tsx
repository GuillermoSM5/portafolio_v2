import { Card, CardContent } from "./card"
import { SiFastapi, SiReact, SiNextdotjs, SiAngular, SiTailwindcss, SiSass, SiAntdesign, SiTypescript, SiJavascript, SiPython, SiHtml5 } from "react-icons/si";

const skillCategories = [
    {
        title: "Frameworks",
        skills: [
            { name: "Angular", icon: <SiAngular className="text-[#B52E31] text-xl" /> },
            { name: "Next.js", icon: <SiNextdotjs className="text-xl" /> },
            { name: "React", icon: <SiReact className="text-[#61DAFB] text-xl" /> },
            { name: "FastApi", icon: <SiFastapi className="text-[#009688] text-xl" /> },
        ],
    },
    {
        title: "Styling & UI",
        skills: [
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4] text-xl" /> },
            { name: "Sass/SCSS", icon: <SiSass className="text-[#CD6799] text-xl" /> },
            { name: "Angular Material", icon: <SiAngular className="text-[#B52E31] text-xl" /> },
            { name: "Ant Design", icon: <SiAntdesign className="text-[#1677FF] text-xl" /> },
        ],
    },
    {
        title: "Languages",
        skills: [
            { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6] text-xl" /> },
            { name: "JavaScript", icon: <SiJavascript className="text-[#F0DB4F] text-xl" /> },
            { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26] text-xl" /> },
            { name: "Python", icon: <SiPython className="text-[#FFDE57] text-xl" /> },
        ],
    }
]

export function Skills() {
    return (
        <section id="skills" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-center text-foreground mb-12">
                        Technical Skills
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {skillCategories.map((category, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                                <CardContent className="p-6">
                                    <h3 className="font-montserrat font-bold text-lg text-foreground mb-4">{category.title}</h3>
                                    <div className="space-y-3">
                                        {category.skills.map((skill, skillIndex) => (
                                            <div
                                                key={skillIndex}
                                                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-accent/10 transition-colors duration-200"
                                            >
                                                {skill.icon}
                                                <span className="text-muted-foreground font-medium">{skill.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}