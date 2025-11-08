import {type NextRequest, NextResponse} from 'next/server';
import mailer from "@/app/api/contact/mailer";
import apiContactSchema from "@/app/api/contact/schema";


export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { senderMail, fullName, message, recipientMail } = body;

        const validation = apiContactSchema.safeParse({
            email: senderMail,
            fullName,
            message,
            recipientMail
        });

        // Check if fields are all filled
        if (!validation.success) {
            return NextResponse.json(
                { error: 'Bad request. Invalid fields' },
                { status: 400 }
            );
        }

        const mailerRes = await mailer({
            senderMail,
            name: fullName,
            text: message,
            recipientMail
        });

        return NextResponse.json(mailerRes, { status: 200 });
    } catch (error) {
        console.error('Email error:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
