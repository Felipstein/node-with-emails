import nodemailer from 'nodemailer';

export async function sendEmail(to: string, title: string, body: string) {

  const transporter = nodemailer.createTransport({
    host: 'email-smtp.us-east-1.amazonaws.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_AUTH_USER,
      pass: process.env.SMTP_AUTH_PASS,
    }
  });

  transporter.sendMail({
    from: 'fotodozinho.app@gmail.com',
    to,
    subject: title,
    html: body,
  }, (err, info) => {
    if(err) {
      console.error('##### ERROR:', err);
    } else {
      console.log('E-mail enviado:', info);
    }
  });

}