const express = require("express");
const app = express();
const path = require("path");
const nodemailer = require("nodemailer");
require("dotenv").config();

const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/test", (req, res) => {
    res.json({test: "test"})
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/portfolio/build/index.html")
})

app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/portfolio/build/index.html")
})

app.get("/portfolio", (req, res) => {
    res.sendFile(__dirname + "/portfolio/build/index.html")
})

app.post("/send", (req, res) => {
    console.log(req.body)
    const output = `
    <p>You have a new message.</p>
    <h3>Message Details</h3>
    <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email Address: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `;
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });
    let mailOptions = {
        from: 'rememberthembf@gmail.com',
        to: "evanmackay71@yahoo.com",
        subject: "Message From Portfolio Website :)",
        text: "New message from " + req.body.name,
        html: output
    };

    transporter.sendMail(mailOptions, (error) => {
        if (error) {
            console.log(error)
        } else {
            console.log("Message sent");
            res.render("/contact", {msg: "Your email has been sent."})
        }
    });
});

app.use(express.static(__dirname + "/portfolio/build/"))

app.listen(PORT, () => {
    console.log("app running on port " + PORT)
});