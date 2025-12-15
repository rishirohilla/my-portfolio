import { NextResponse } from "next/server"
import nodemailer from "nodemailer"


export async function POST(request: Request) {
    try {
        const body = await request.json().catch(() => null)
        if (!body) return NextResponse.json({ error: "Invalid request" }, { status: 400 })


        const { name, email, message, company } = body as {
            name?: string
            email?: string
            message?: string
            company?: string
        }


        // simple honeypot check
        if (company) return NextResponse.json({ error: "Bad request" }, { status: 400 })


        // basic validation
        if (!name || !email || !message) {
            return NextResponse.json({ error: "Missing fields" }, { status: 400 })
        }


        // create transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT || 587),
            secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        })


        const receiver = process.env.RECEIVER_EMAIL || process.env.SMTP_USER


        const mailOptions = {
            from: `${name} <${email}>`,
            to: receiver,
            subject: `New contact form message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: `<h3>New message from your website</h3><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, "<br />")}</p>`,
        }


        await transporter.sendMail(mailOptions)


        return NextResponse.json({ ok: true })
    } catch (err: any) {
        console.error("/api/contact error:", err)
        return NextResponse.json({ error: "Server error" }, { status: 500 })
    }
}