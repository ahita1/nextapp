import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST() {
    await resend.emails.send({
        from: 'ahitafani833@gmail.com',
        to: "amsalusolomon12@gmail.com",
        subject: '...',
        react : <WelcomeTemplate name="Ahita haha"/>
    })

    return NextResponse
}