import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
    try {
        const { name, email, message } = await request.json()

        // Validate the form data
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            )
        }

        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from: 'My Portfolio <onboarding@mrguzman-dev.com>',
            to: ['marcosgc1806@gmail.com'],
            subject: `New Contact Form Submission from ${name}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #0f111a; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #0f111a; margin-bottom: 5px;">Name:</h3>
            <p style="margin: 0; padding: 10px; background-color: #f5f5f5; border-radius: 4px;">
              ${name}
            </p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #0f111a; margin-bottom: 5px;">Email:</h3>
            <p style="margin: 0; padding: 10px; background-color: #f5f5f5; border-radius: 4px;">
              ${email}
            </p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #0f111a; margin-bottom: 5px;">Message:</h3>
            <div style="margin: 0; padding: 15px; background-color: #f5f5f5; border-radius: 4px; white-space: pre-wrap;">
              ${message}
            </div>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
          <p style="color: #666; font-size: 12px; text-align: center;">
            This email was sent from the Goals App contact form.
          </p>
        </div>
      `,
            replyTo: email,
        })

        if (error) {
            console.log(error)
            console.error('Resend error:', error)
            return NextResponse.json(
                { error: 'Failed to send email' },
                { status: 500 }
            )
        }

        return NextResponse.json(
            { message: 'Email sent successfully', id: data?.id },
            { status: 200 }
        )
    } catch (error) {
        console.error('API error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
} 