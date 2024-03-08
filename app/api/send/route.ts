import nodemailer from "nodemailer";

export async function POST() {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: "Frank <" + process.env.EMAIL_USER + ">",
    to: process.env.EMAIL_USER,
    subject: `Gracias por tu donacion!, con amor departe de SmartHelp ❤️`,
    text: "Agradecemos que te hayas tomado el tiempo de donar a una de nuestras causas , el tiempo que nos has apoyado es importante para seguir mejorando. Gracias a esto podremos ayudar a mas personas y estar presente en más lugares prestando servicios de apoyo. Muchas gracias ❤️",
  };

  await transporter.sendMail(mailOptions);

  return Response.json({ success: true });
}
