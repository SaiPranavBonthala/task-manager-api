const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'pranavraj2097@gmail.com',
        subject: 'Thanks for Joining in!!',
        text: `Welcome to Task Manager App, ${name}. Let us know how you get along with the application.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'pranavraj2097@gmail.com',
        subject: 'Sorry to see you go!!',
        text: `Goodbye, ${name}. I hope to see you back some time soon :)`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}