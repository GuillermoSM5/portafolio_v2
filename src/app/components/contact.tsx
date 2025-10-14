"use client"

import type React from "react"
import { ToastContainer, toast } from 'react-toastify'

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./card"
import { Input } from "./input"
import { Textarea } from "./textarea"
import { Button } from "./button"
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoSend } from "react-icons/io5";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const [disable, setDisable] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setDisable(true)
        await fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        }).then(() => {
            setDisable(false)
            toast.success("Enviado", {
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        })
        setFormData({ name: "", email: "", message: "" })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    return (
        <section id="contact" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-center text-foreground mb-12">
                        Get In Touch
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="font-montserrat font-bold text-xl">Send me a message</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <Input
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full"
                                        />
                                    </div>

                                    <div>
                                        <Input
                                            type="email"
                                            name="email"
                                            placeholder="Your Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full"
                                        />
                                    </div>

                                    <div>
                                        <Textarea
                                            name="message"
                                            placeholder="Your Message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full resize-none"
                                        />
                                    </div>

                                    <Button type="submit" className="w-full group cursor-pointer" disabled={disable}>
                                        <IoSend className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                                        Send Message
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>


                        <div className="space-y-8">
                            <Card>
                                <CardContent className="p-8">
                                    <h3 className="font-montserrat font-bold text-xl text-foreground mb-4">Let&apos;s work together</h3>
                                    <p className="text-muted-foreground leading-relaxed mb-6">
                                        I&apos;m always interested in new opportunities and exciting projects. Whether you have a question or
                                        just want to say hi, I&apos;ll try my best to get back to you!
                                    </p>

                                    <div className="space-y-4">
                                        <a
                                            href="mailto:your.email@example.com"
                                            className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-200"
                                        >
                                            <IoMdMail className="text-xl" />
                                            <span>gsmarquez.dev@gmail.com</span>
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Social Links */}
                            <Card>
                                <CardContent className="p-8">
                                    <h3 className="font-montserrat font-bold text-xl text-foreground mb-4">Connect with me</h3>
                                    <div className="flex space-x-4">
                                        <Button variant="outline" size="icon" asChild>
                                            <a href="https://www.linkedin.com/in/guillermosotomarquez5/" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedin className="text-xl" />
                                            </a>
                                        </Button>
                                        <Button variant="outline" size="icon" asChild>
                                            <a href="https://github.com/GuillermoSM5" target="_blank" rel="noopener noreferrer">
                                                <FaGithub className="text-xl" />
                                            </a>
                                        </Button>
                                        <Button variant="outline" size="icon" asChild >
                                            <a href="mailto:gsmarquez.dev@gmail.com">
                                                <IoMdMail className="text-xl" />
                                            </a>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    )
}
