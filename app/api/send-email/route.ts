import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Ongeldig email adres' },
        { status: 400 }
      );
    }

    // Controleer of API key is ingesteld
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is niet ingesteld in .env.local');
      return NextResponse.json(
        { 
          error: 'Email service niet geconfigureerd',
          message: 'RESEND_API_KEY ontbreekt in .env.local'
        },
        { status: 500 }
      );
    }

    // Maak Resend instantie aan met API key
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Verstuur email volgens Resend documentatie
    const recipientEmail = process.env.RECIPIENT_EMAIL || 'mathijs@principlesai.nl';
    
    if (!recipientEmail.includes('@') || !recipientEmail.includes('.')) {
      return NextResponse.json(
        { 
          error: 'Ongeldig ontvanger email adres',
          message: 'RECIPIENT_EMAIL moet een geldig email adres zijn (bijv. mathijs@principlesai.com)'
        },
        { status: 500 }
      );
    }
    
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // Gebruik Resend test domein voor development
      to: recipientEmail, // Kan string of array zijn
      subject: 'Nieuwe email signup - PrinciplesAI',
      html: `
        <h2>Nieuwe email signup</h2>
        <p>Iemand heeft zich aangemeld met het volgende email adres:</p>
        <p><strong>${email}</strong></p>
        <p>Datum: ${new Date().toLocaleString('nl-NL')}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { 
          error: 'Er ging iets mis bij het versturen van de email',
          details: error.message || 'Onbekende fout'
        },
        { status: 500 }
      );
    }

    console.log('Email succesvol verstuurd:', data);
    console.log('Email ID:', data?.id);

    return NextResponse.json(
      { success: true, message: 'Email succesvol verstuurd', emailId: data?.id },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error processing email:', error);
    return NextResponse.json(
      { 
        error: 'Er ging iets mis',
        details: error?.message || 'Onbekende fout'
      },
      { status: 500 }
    );
  }
}

