import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
    try {

        const { name, email, message } = await request.json()
        const { data, error } = await resend.emails.send({
            from: "Portafolio <onboarding@resend.dev>",
            to: process.env.email || '',
            subject: 'Bienvenido',
            text: `${name} es esta buscando con el mensaje:${message} buscalo de regreso al correo ${email}`
        })
        if (error) {
            return NextResponse.json({ error }, { status: 500 })
        }
        return NextResponse.json({ data })
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 })
    }

}