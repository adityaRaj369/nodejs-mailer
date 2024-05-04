const nodemailer = require('nodemailer');

// configure email and send it
async function sendMail() {
    const transporter = nodemailer.createTransport({
        service: 'gmail', // defining SMTP service
        auth: {
            user: '',   /// enter your mail
            pass: '', // Correct password get it from app password from your google account
        }
    });

    // configure email Content
    const mailOptions = {
        from: '',  // your mail here
        to: ' ',  // recievers mail here
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
