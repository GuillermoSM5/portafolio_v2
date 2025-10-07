import { Card, CardContent } from "./card"

const skillCategories = [
    {
        title: "Frontend Frameworks",
        skills: [
            { name: "React", icon: "⚛️" },
            { name: "Next.js", icon: "▲" },
            { name: "Angular", icon: "🅰️" },
            { name: "Vue.js", icon: "💚" },
        ],
    },
    {
        title: "Styling & UI",
        skills: [
            { name: "Tailwind CSS", icon: "🎨" },
            { name: "Sass/SCSS", icon: "💅" },
            { name: "Ant Design", icon: "🐜" },
            { name: "Angular Material", icon: "📐" },
        ],
    },
    {
        title: "Languages",
        skills: [
            { name: "TypeScript", icon: "📘" },
            { name: "JavaScript", icon: "📜" },
            { name: "HTML5", icon: "🌐" },
            { name: "CSS3", icon: "🎭" },
        ],
    },
    {
        title: "Tools & Technologies",
        skills: [
            { name: "Git", icon: "🔧" },
            { name: "Webpack", icon: "📦" },
            { name: "Vite", icon: "⚡" },
            { name: "Node.js", icon: "🟢" },
        ],
    },
]

export function Skills() {
    return (
        <section id="skills" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-center text-foreground mb-12">
                        Technical Skills
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                                                <span className="text-xl">{skill.icon}</span>
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