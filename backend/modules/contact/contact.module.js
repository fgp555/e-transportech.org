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
  res.send("/contact Test Enpoint");
});

app.post("/submit", async (req, res) => {
  const { name, email, subject, message, currentUrl } = req.body;
  const ccEmail = MAIL_USER_TO_CC; // Dirección de copia

  const bodyMessage = `\n\nNombre: ${name}\nCorreo: ${email}\nMensaje: ${message}\nEnviado desde: ${currentUrl}`;

  // 📩 Mensaje para el usuario
  const userMessage = {
    from: `"${name}" <${MAIL_USER_FROM}>`,
    to: email,
    subject: subject || "Gracias por contactarnos",
    text: `Gracias por escribirnos, te responderemos pronto.${bodyMessage}`,
  };

  // 📩 Mensaje para el destinatario en CC
  const ccMessage = {
    from: `"${name}" <${MAIL_USER_FROM}>`,
    to: ccEmail,
    subject: "Tienes un nuevo formulario",
    text: `Un usuario ha enviado un nuevo formulario.${bodyMessage}`,
  };

  try {
    await transporter.sendMail(userMessage); // 📤 Enviar al usuario
    await transporter.sendMail(ccMessage); // 📤 Enviar al destinatario en CC
    console.log("Correos enviados con éxito");

    res.json({ success: true, message: "¡Formularios enviado con éxito!" });
  } catch (error) {
    console.error("Error al enviar los correos:", error);
    res.status(500).json({ success: false, message: "Error interno del servidor" });
  }
});

module.exports = app;
