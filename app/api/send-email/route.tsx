import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function GET() {
        await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: "ahitafani833@gmail.com",
        subject: 'My name is Ahunem Nigussie, Im a fullstack developer but specializing on Front-end website developments with React and Vue.js frameworks haha',
        react : <WelcomeTemplate name="Ahita haha"/>
    })

    return NextResponse.json({
        status : "ok"
    })
}