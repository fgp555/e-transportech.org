const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

app.use(express.json());
// app.use(express.static(__dirname));

const MAIL_HOST = process.env.MAIL_HOST;
const MAIL_PASS = process.env.MAIL_PASS;
const MAIL_PORT = process.env.MAIL_PORT;
const MAIL_USER_FROM = process.env.MAIL_USER_FROM;
const MAIL_USER_TO_CC = process.env.MAIL_USER_TO_CC;
console.log({ MAIL_USER_FROM });

const transporter = nodemailer.createTransport({
  host: MAIL_HOST,
  port: MAIL_PORT,
  secure: true, // true para 465, false para otros puertos
  auth: { user: MAIL_USER_FROM, pass: MAIL_PASS },
});

app.get("/", (req, res) => {
  res.send("/contact");
});

app.post("/submit", async (req, res) => {
  const { name, email, message, currentUrl, subject } = req.body;

  const messageTemplate = `Gracias por escribirnos, te responderemos pronto. 
\nNombre: ${name}
Correo: ${email}
Mensaje: ${message}
Enviado desde: ${currentUrl}`;

  const mailOptions = {
    from: `"${name}" <${process.env.MAIL_USER_FROM}>`,
    to: email,
    cc: MAIL_USER_TO_CC,
    subject: subject || "Gracias por contactarnos",
    text: messageTemplate,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Correo enviado con éxito");
    res.json({ success: true, message: "¡Formulario enviado con éxito!" });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    res.status(500).json({ success: false, message: "Error interno del servidor" });
  }
});

module.exports = app;
