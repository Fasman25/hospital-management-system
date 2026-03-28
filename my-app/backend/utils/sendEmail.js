import nodemailer from "nodemailer";

const sendConfirmationEmail = async (patient) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Hospital System" <${process.env.EMAIL_USER}>`,
      to: patient.email,
      subject: "Registration Successful",
      text: `Hello ${patient.name},

Your registration was successful.

Thank you`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);

  } catch (error) {
    console.log("Email error:", error);
  }
};

export default sendConfirmationEmail;