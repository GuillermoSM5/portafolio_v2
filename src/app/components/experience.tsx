import { Card, CardContent, CardHeader, CardTitle } from "./card"

const experiences = [
    {
        company: "Stefanini",
        position: "Front-End Developer",
        period: "2021 - Present",
        description:
            "Involved in the development and maintenance of large-scale projects, working closely with clients to ensure the delivery of solutions aligned with their needs. Led frontend architecture decisions and mentored junior developers.",
        achievements: [
            "Developed and maintained 15+ large-scale web applications",
            "Collaborated directly with clients to gather requirements and deliver tailored solutions",
            "Improved application performance by 40% through code optimization",
            "Led a team of 3 junior developers and conducted code reviews",
        ],
    },
    {
        company: "MXSS",
        position: "Frontend Developer",
        period: "2022 - 2023",
        description:
            "Specialized in creating optimized interfaces and improving user experience, leveraging modern technologies and methodologies to achieve efficient results. Focused on responsive design and accessibility standards.",
        achievements: [
            "Created responsive interfaces for 10+ client projects",
            "Improved user experience metrics by 35% through UX optimization",
            "Implemented accessibility standards achieving WCAG 2.1 AA compliance",
            "Reduced page load times by 50% through performance optimization",
        ],
    },
]

export function Experience() {
    return (
        <section id="experience" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-center text-foreground mb-12">
                        Professional Experience
                    </h2>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border"></div>

                        <div className="space-y-12">
                            {experiences.map((exp, index) => (
                                <div key={index} className="relative">
                                    {/* Timeline dot */}
                                    <div className="absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>

                                    <div className="ml-12 md:ml-0 bg-background" >
                                        <Card className="hover:shadow-lg transition-shadow duration-300">
                                            <CardHeader>
                                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                                    <CardTitle className="font-montserrat font-bold text-xl">{exp.position}</CardTitle>
                                                    <span className="text-sm text-accent font-medium bg-accent/10 px-3 py-1 rounded-full">
                                                        {exp.period}
                                                    </span>
                                                </div>
                                                <p className="text-lg font-semibold text-primary">{exp.company}</p>
                                            </CardHeader>
                                            <CardContent className="space-y-4">
                                                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                                                <div>
                                                    <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
                                                    <ul className="space-y-1">
                                                        {exp.achievements.map((achievement, achIndex) => (
                                                            <li key={achIndex} className="text-muted-foreground text-sm flex items-start">
                                                                <span className="text-primary mr-2 mt-1">•</span>
                                                                {achievement}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}