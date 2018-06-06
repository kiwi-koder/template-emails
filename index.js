require("env2")(".env");
const nodemailer = require("nodemailer");
const Email = require("email-templates");
const transporter = nodemailer.createTransport({
    service: process.env.SERVICE,
    auth: {
        user: process.env.USER,
        pass: process.env.PASS
    }
});

const email = new Email({
    message: {
        from: process.env.USER
    },
    transport: transporter,
    views: {
        options: {
            extension: "hbs"
        }
    }
});

email
    .send({
        template: "mars",
        message: {
            to: "joshuarippon1@gmail.com"
        },
        locals: {
            names: ["Josh"]
        }
    })
    .then(console.log)
    .catch(console.error);
// transporter.sendMail({
//     from: process.env.USER,
//     to: "joshuarippon1@gmail.com",
//     subject: "HEY MAN",
//     text: "WASSUP DUDE",
//     html: "<h1>OI OI OI OI</h1>"
// });
