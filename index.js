require("env2")(".env");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: process.env.SERVICE,
    auth: {
        user: process.env.USER,
        pass: process.env.PASS
    }
});
