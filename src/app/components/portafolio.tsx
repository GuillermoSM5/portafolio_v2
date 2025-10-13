import { Button } from "./button"
import { Card, CardContent, CardHeader, CardTitle } from "./card"
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
    {
        title: "E-Commerce Platform",
        description:
            "Modern e-commerce solution built with Next.js, featuring real-time inventory, payment integration, and responsive design.",
        image: "/placeholder.svg?height=300&width=400",
        technologies: ["Next.js", "React", "Tailwind CSS", "Stripe", "PostgreSQL"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        title: "Portfolio Website",
        description:
            "Responsive portfolio website showcasing creative work with smooth animations, optimized performance, and SEO-friendly structure.",
        image: "/placeholder.svg?height=300&width=400",
        technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "MDX", "Vercel"],
        liveUrl: "#",
        githubUrl: "#",
    },

]

export function Portfolio() {
    return (
        <section id="portfolio" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-center text-foreground mb-12">
                        Featured Projects
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                <div className="relative overflow-hidden rounded-t-lg">
                                    <img
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <CardHeader>
                                    <CardTitle className="font-montserrat font-bold text-xl">{project.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-2 py-1 bg-(--primary-color)/10 text-(--primary-color) text-xs rounded-md font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-2 pt-2">
                                        <Button size="sm" variant="outline" asChild>
                                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                                <FiExternalLink />
                                                Live
                                            </a>
                                        </Button>
                                        <Button size="sm" variant="outline" asChild>
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                <FiGithub />
                                                Code
                                            </a>
                                        </Button>
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