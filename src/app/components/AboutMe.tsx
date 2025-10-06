import React from 'react'
import { Card, CardContent } from './card'

export const AboutMe = () => {
    return (
        <section id="about" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-center text-foreground mb-12">
                        About Me
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <Card>
                                <CardContent className="p-8">
                                    <p className="text-muted-foreground leading-relaxed">
                                        I am writing to express my interest in the Front-End Developer position your company offers.
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed mt-4">
                                        I have over three years of experience in developing web applications, specializing in React,
                                        Next.js, and Angular, as well as in implementing modern and responsive interfaces using Tailwind
                                        CSS, Ant Design, Angular Material, CSS, and Sass.
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed mt-4">
                                        In my current role at Stefanini (2021 – present), I have been involved in the development and
                                        maintenance of large-scale projects, working closely with clients to ensure the delivery of
                                        solutions aligned with their needs. Previously, at MXSS (2022 – 2023), I specialized in creating
                                        optimized interfaces and improving user experience, leveraging modern technologies and methodologies
                                        to achieve efficient results.
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed mt-4">
                                        I am confident that my technical expertise, ability to communicate with clients, and focus on
                                        product quality can bring significant value to your team.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="flex justify-center">
                            <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center bg-amber-300">
                                <img
                                    src="/placeholder.svg?height=300&width=300"
                                    alt="Professional headshot"
                                    className="w-72 h-72 rounded-full object-cover border-4 border-background shadow-xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
