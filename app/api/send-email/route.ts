import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Ongeldig email adres' },
        { status: 400 }
      );
    }

    // Verstuur email naar mathijs@PrinciplesAI
    if (process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: 'noreply@principlesai.com', // Dit moet een geverifieerd domein zijn in Resend
          to: 'mathijs@PrinciplesAI',
          subject: 'Nieuwe email signup - PrinciplesAI',
          html: `
            <h2>Nieuwe email signup</h2>
            <p>Iemand heeft zich aangemeld met het volgende email adres:</p>
            <p><strong>${email}</strong></p>
            <p>Datum: ${new Date().toLocaleString('nl-NL')}</p>
          `,
        });
        console.log('Email succesvol verstuurd naar mathijs@PrinciplesAI');
      } catch (emailError) {
        console.error('Error sending email:', emailError);
        // Fallback: log naar console als email service faalt
        console.log('Nieuwe email signup (fallback):', email);
        console.log('Stuur email naar: mathijs@PrinciplesAI');
      }
    } else {
      // Fallback als RESEND_API_KEY niet is ingesteld
      console.log('Nieuwe email signup:', email);
      console.log('Stuur email naar: mathijs@PrinciplesAI');
      console.log('LET OP: RESEND_API_KEY is niet ingesteld. Configureer .env.local met je Resend API key.');
    }

    return NextResponse.json(
      { success: true, message: 'Email ontvangen' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing email:', error);
    return NextResponse.json(
      { error: 'Er ging iets mis' },
      { status: 500 }
    );
  }
}

