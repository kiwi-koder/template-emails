require("env2")(".env");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: process.env.SERVICE,
    auth: {
        user: process.env.USER,
        pass: process.env.PASS
    }
});

transporter.sendMail({
    from: process.env.USER,
    to: "joshuarippon1@gmail.com",
    subject: "HEY MAN",
    text: "WASSUP DUDE",
    html: "<h1>OI OI OI OI</h1>"
});
