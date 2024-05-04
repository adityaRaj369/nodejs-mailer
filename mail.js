const nodemailer = require('nodemailer');

// configure email and send it
async function sendMail() {
    const transporter = nodemailer.createTransport({
        service: 'gmail', // defining SMTP service
        auth: {
            user: '8789681673aditya@gmail.com',
            pass: 'igik mthq zvwz hyix', // Correct password
        }
    });

    // configure email Content
    const mailOptions = {
        from: '8789681673aditya@gmail.com',
        to: 'adityay1080@gmail.com',
        subject: 'Welcome to NodeJs app',
        text: 'hello user, welcome to NodeJs' // Corrected typo: 'hello uiser' to 'hello user'
    };

    // send the mail
    try {
        const result = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (err) {
        console.log("Email not sent, error occurred: " + err);
    }
}

sendMail();
