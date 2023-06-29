const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();

    // connect with the smtp
    let transporter = await nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
            user: 'deanna99@ethereal.email',
            pass: 'Jg9vrhyE8WcyKTWs4C',
        },
    });

    let info = await transporter.sendMail({
        from: '"NHS mart" <nileshhshinde29@gmail.com>', // sender address
        to: "iam@gmail.com", // list of receivers
        subject: "Order placed", // Subject line
        text: "Your order has been placed. You will get your order at your address very soon", // plain text body
        html: "<p>Your order has been placed. You will get your order at your address very soon<p/><button>NHS mart</button>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    res.json(info);
};

module.exports = sendMail;
