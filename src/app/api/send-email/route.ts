import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, role, propertyName, city, roomCount, inquiryChannels, email, whatsapp, frustration } = body;

        // Validate required fields
        if (!name || !email || !whatsapp) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const { data, error } = await resend.emails.send({
            from: 'Nocturn AI Applications <onboarding@resend.dev>', // Use resend.dev for testing if domain not verified, or update if user has domain
            to: ['a.basyir@sheerssoft.com'], // Requires verified domain in Resend for production
            subject: `New Founding Cohort Application: ${propertyName}`,
            html: `
        <h1>New Application Received</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Property:</strong> ${propertyName}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Rooms:</strong> ${roomCount}</p>
        <p><strong>Channels:</strong> ${inquiryChannels?.join(', ') || 'None'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp}</p>
        <p><strong>Frustration:</strong> ${frustration || 'N/A'}</p>
      `,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Server error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
