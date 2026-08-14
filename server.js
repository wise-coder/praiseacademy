const express = require("express");
const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

const envPath = fs.existsSync(path.join(__dirname, ".env"))
    ? path.join(__dirname, ".env")
    : path.join(__dirname, ".env.example");

require("dotenv").config({ path: envPath });

const app = express();
const port = process.env.PORT || 3000;
const recipientEmail = process.env.MAIL_TO || "praiseacademy2015@gmail.com";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname));

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function buildFormattedMessage({ name, email, subject, message }) {
    const submittedAt = new Intl.DateTimeFormat("en-GB", {
        dateStyle: "full",
        timeStyle: "short"
    }).format(new Date());

    const safeName = name || "Not provided";
    const safeEmail = email || "Not provided";
    const safeSubject = subject || "New Contact Inquiry from Praise Academy Website";
    const safeMessage = message || "No message provided.";

    return {
        text: [
            "New message from the Praise Academy website",
            "",
            `Name: ${safeName}`,
            `Email: ${safeEmail}`,
            `Subject: ${safeSubject}`,
            `Submitted: ${submittedAt}`,
            "",
            "Message:",
            safeMessage
        ].join("\n"),
        html: [
            "<h2>New message from the Praise Academy website</h2>",
            `<p><strong>Name:</strong> ${escapeHtml(safeName)}<br>`,
            `<strong>Email:</strong> ${escapeHtml(safeEmail)}<br>`,
            `<strong>Subject:</strong> ${escapeHtml(safeSubject)}<br>`,
            `<strong>Submitted:</strong> ${escapeHtml(submittedAt)}</p>`,
            `<p><strong>Message:</strong><br>${escapeHtml(safeMessage).replace(/\n/g, "<br>")}</p>`
        ].join("")
    };
}

function createTransporter() {
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpSecure = String(process.env.SMTP_SECURE || "false").toLowerCase() === "true";
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpHost || !smtpUser || !smtpPass) {
        return null;
    }

    return nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: {
            user: smtpUser,
            pass: smtpPass
        }
    });
}

const transporter = createTransporter();

app.post("/api/contact", async (req, res) => {
    const { name, email, subject, message } = req.body || {};

    if (!name || !email || !message) {
        return res.status(400).json({
            error: "Please provide your full name, email address, and message."
        });
    }

    if (!transporter) {
        return res.status(500).json({
            error: "SMTP is not configured yet. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS."
        });
    }

    const body = buildFormattedMessage({ name, email, subject, message });

    try {
        await transporter.sendMail({
            from: process.env.MAIL_FROM || process.env.SMTP_USER,
            to: recipientEmail,
            replyTo: email,
            subject: subject || "New Contact Inquiry from Praise Academy Website",
            text: body.text,
            html: body.html
        });

        return res.json({
            success: true,
            message: `Your message has been sent to ${recipientEmail}.`
        });
    } catch (error) {
        return res.status(500).json({
            error: "Sorry, the message could not be sent via SMTP.",
            details: error.message
        });
    }
});

app.listen(port, () => {
    console.log(`Praise Academy website running at http://localhost:${port}`);
});
