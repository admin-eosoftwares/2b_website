import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, phone, subject, message } = body;

        // Basic validation
        if (!name || !email || !phone || !subject || !message) {
            return NextResponse.json(
                { error: 'Tüm alanlar gereklidir' },
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Geçerli bir e-posta adresi giriniz' },
                { status: 400 }
            );
        }

        // Environment variables validation
        const requiredEnvVars = {
            SMTP_HOST: process.env.SMTP_HOST,
            SMTP_PORT: process.env.SMTP_PORT,
            SMTP_USER: process.env.SMTP_USER,
            SMTP_PASS: process.env.SMTP_PASS,
            CONTACT_EMAIL: process.env.CONTACT_EMAIL,
        };

        // Check if all required environment variables are set
        const missingVars = Object.entries(requiredEnvVars)
            .filter(([, value]) => !value)
            .map(([key]) => key);

        if (missingVars.length > 0) {
            console.error('Missing required environment variables:', missingVars);
            return NextResponse.json(
                { error: 'Email servisi yapılandırılamadı' },
                { status: 500 }
            );
        }

        // Email configuration
        const transporter = nodemailer.createTransport({
            host: requiredEnvVars.SMTP_HOST!,
            port: parseInt(requiredEnvVars.SMTP_PORT!),
            secure: true, // true for 465, false for other ports
            auth: {
                user: requiredEnvVars.SMTP_USER!,
                pass: requiredEnvVars.SMTP_PASS!,
            },
        });

        // Email content
        const mailOptions = {
            from: requiredEnvVars.SMTP_USER!,
            to: requiredEnvVars.CONTACT_EMAIL!,
            subject: `İletişim Formu: ${subject}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
                        Yeni İletişim Formu Mesajı
                    </h2>
                    
                    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <p style="margin: 10px 0;"><strong style="color: #374151;">Ad Soyad:</strong> ${name}</p>
                        <p style="margin: 10px 0;"><strong style="color: #374151;">E-posta:</strong> <a href="mailto:${email}" style="color: #1e40af;">${email}</a></p>
                        <p style="margin: 10px 0;"><strong style="color: #374151;">Telefon:</strong> <a href="tel:${phone}" style="color: #1e40af;">${phone}</a></p>
                        <p style="margin: 10px 0;"><strong style="color: #374151;">Konu:</strong> ${subject}</p>
                    </div>
                    
                    <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
                        <h3 style="color: #374151; margin-top: 0;">Mesaj:</h3>
                        <p style="line-height: 1.6; color: #4b5563; white-space: pre-line;">${message}</p>
                    </div>
                    
                    <div style="margin-top: 20px; padding: 15px; background-color: #f3f4f6; border-radius: 8px; font-size: 14px; color: #6b7280;">
                        <p style="margin: 0;">Bu mesaj 2B Global Enerji web sitesi iletişim formundan gönderilmiştir.</p>
                        <p style="margin: 5px 0 0 0;">Gönderim tarihi: ${new Date().toLocaleString('tr-TR')}</p>
                    </div>
                </div>
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        console.log('Email sent successfully to:', requiredEnvVars.CONTACT_EMAIL!);

        return NextResponse.json(
            { message: 'Mesaj başarıyla gönderildi' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Sunucu hatası' },
            { status: 500 }
        );
    }
}
